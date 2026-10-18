/**
 * زهرة الكتان — backend API (Cloudflare Worker + D1 + Brevo)
 *
 *   POST /submit   save anonymous answers, send the thank-you email, return { emailSent, flowerNo }
 *   GET  /garden   public counter { count }
 *   GET  /stats    team dashboard aggregates (header X-Admin-Key), hidden below 10 responses
 *   GET  /health   { ok: true }
 *
 * Privacy: name and email are used only to send the email, in memory, and are never stored or logged.
 * Secrets (set in Cloudflare, never in the repo): ADMIN_KEY, BREVO_API_KEY (IP_SALT optional; falls back to ADMIN_KEY)
 * Vars (wrangler.toml): ALLOWED_ORIGINS, MAIL_FROM, MAIL_FROM_NAME, SITE_URL
 */
import { EMAIL_HTML, EMAIL_TEXT, EMAIL_SUBJECT } from "./email.js";

const KEY = [1, 0, 0, 3, 1, 1, 1, 1];               // correct option index for k0..k7
const SINGLE = { age: 3, city: 9, k0: 2, k1: 2, k2: 2, k3: 4, k4: 2, k5: 2, k6: 2, k7: 2,
                 p1: 3, p1b: 2, p2: 3, p2b: 2, p3: 2, p4: 3, s1: 2, s3: 3 };   // field -> max index
const MULTI = { s1b: 5, s2: 9 };                    // up to 2 unique indexes each
const REQUIRED = ["age", "city", "k0", "k1", "k2", "k3", "k4", "k5", "k6", "k7"];
const RATE_LIMIT = 5;                               // submissions per IP per 10 minutes
const MIN_N = 10;                                   // hide stats below this

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const cors = corsHeaders(req, env);
    if (req.method === "OPTIONS") return new Response(null, { status: cors ? 204 : 403, headers: cors || {} });
    try {
      if (url.pathname === "/health") return json({ ok: true }, 200, cors);
      if (url.pathname === "/submit" && req.method === "POST") {
        if (!cors) return json({ error: "origin not allowed" }, 403);
        return await submit(req, env, ctx, cors);
      }
      if (url.pathname === "/garden" && req.method === "GET") return await garden(env, cors);
      if (url.pathname === "/stats" && req.method === "GET") {
        if (!cors) return json({ error: "origin not allowed" }, 403);
        return await stats(req, env, cors);
      }
      return json({ error: "not found" }, 404, cors);
    } catch (e) {
      console.error("internal error", e && e.message);   // never log request bodies
      return json({ error: "internal error" }, 500, cors);
    }
  },
};

/* ---------------- helpers ---------------- */
function json(obj, status = 200, headers = {}) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json; charset=utf-8", ...(headers || {}) } });
}
function corsHeaders(req, env) {
  const origin = req.headers.get("Origin");
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);
  if (!origin || !allowed.includes(origin)) return null;
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Key",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}
const libyaDay = (d = new Date()) => d.toLocaleDateString("en-CA", { timeZone: "Africa/Tripoli" });
async function sha256(s) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
}
function safeEqual(a, b) {
  a = String(a || ""); b = String(b || "");
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0 && a.length > 0;
}
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const isInt = v => Number.isInteger(v);

/* ---------------- validation ---------------- */
function validate(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return "bad body";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (name.length < 2 || name.length > 80 || /[<>\u0000-\u001f]/.test(name)) return "bad name";
  if (email.length > 120 || !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) return "bad email";
  const a = body.answers;
  if (!a || typeof a !== "object" || Array.isArray(a)) return "bad answers";
  for (const k of Object.keys(a)) if (!(k in SINGLE) && !(k in MULTI)) return "unknown field " + k;
  for (const [k, max] of Object.entries(SINGLE)) {
    if (a[k] === undefined || a[k] === null) continue;
    if (!isInt(a[k]) || a[k] < 0 || a[k] > max) return "bad " + k;
  }
  for (const [k, max] of Object.entries(MULTI)) {
    if (a[k] === undefined || a[k] === null) continue;
    const v = a[k];
    if (!Array.isArray(v) || v.length > 2 || new Set(v).size !== v.length || v.some(x => !isInt(x) || x < 0 || x > max)) return "bad " + k;
  }
  for (const k of REQUIRED) if (a[k] === undefined || a[k] === null) return "missing " + k;
  return null;
}

/* ---------------- routes ---------------- */
async function submit(req, env, ctx, cors) {
  const raw = await req.text();
  if (raw.length > 8000) return json({ error: "too large" }, 413, cors);
  let body; try { body = JSON.parse(raw); } catch { return json({ error: "bad json" }, 400, cors); }

  const count = async () => (await env.DB.prepare("SELECT COUNT(*) AS n FROM responses").first()).n;

  // honeypot: bots fill the hidden "website" field. Pretend success, save nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") return json({ emailSent: true, flowerNo: (await count()) + 1 }, 200, cors);

  const err = validate(body);
  if (err) return json({ error: "invalid", detail: err }, 400, cors);

  // rate limit per IP (hashed, never stored raw)
  const ip = req.headers.get("CF-Connecting-IP") || "0";
  const win = Math.floor(Date.now() / 600000);
  const rk = (await sha256((env.IP_SALT || env.ADMIN_KEY || "zk") + ip)).slice(0, 32) + ":" + win;
  const row = await env.DB.prepare("INSERT INTO rate(key,hits,window) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET hits=hits+1 RETURNING hits").bind(rk, win).first();
  if (row && row.hits > RATE_LIMIT) return json({ error: "too many requests" }, 429, cors);
  ctx.waitUntil(env.DB.prepare("DELETE FROM rate WHERE window < ?").bind(win - 144).run());

  // score recomputed here; client value ignored
  const a = body.answers;
  const score = KEY.reduce((s, k, i) => s + (a["k" + i] === k ? 1 : 0), 0);
  const v = k => (a[k] === undefined ? null : a[k]);
  const now = new Date();
  const ins = await env.DB.prepare(
    `INSERT INTO responses(created_at,day,score,age,city,k0,k1,k2,k3,k4,k5,k6,k7,p1,p1b,p2,p2b,p3,p4,s1,s1b,s2,s3)
     VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) RETURNING id`
  ).bind(now.toISOString(), libyaDay(now), score, v("age"), v("city"),
    v("k0"), v("k1"), v("k2"), v("k3"), v("k4"), v("k5"), v("k6"), v("k7"),
    v("p1"), v("p1b"), v("p2"), v("p2b"), v("p3"), v("p4"), v("s1"),
    JSON.stringify(a.s1b || []), JSON.stringify(a.s2 || []), v("s3")).first();
  const flowerNo = await count();
  void ins;

  // email (name/email live only in this function's memory)
  let emailSent = false;
  try { emailSent = await sendEmail(env, body.name.trim(), body.email.trim(), flowerNo); }
  catch (e) { console.error("email failed", e && e.message); }

  return json({ emailSent, flowerNo }, 200, cors);
}

async function sendEmail(env, name, email, flowerNo) {
  if (!env.BREVO_API_KEY) return false;
  const first = name.split(/\s+/)[0];
  const no = Number(flowerNo).toLocaleString("en-US");
  const site = (env.SITE_URL || "").replace(/\/$/, "");
  const fill = (t, html) => t.replaceAll("{{NAME}}", html ? esc(first) : first).replaceAll("{{FLOWER_NO}}", no).replaceAll("{{SITE_URL}}", site);
  const ctrl = new AbortController(); const timer = setTimeout(() => ctrl.abort(), 8000);
  const r = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST", signal: ctrl.signal,
    headers: { "api-key": env.BREVO_API_KEY, "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      sender: { email: env.MAIL_FROM || "media@moomken.org", name: env.MAIL_FROM_NAME || "المركز الإعلامي · منظمة ممكن" },
      to: [{ email, name: first }],
      subject: EMAIL_SUBJECT,
      htmlContent: fill(EMAIL_HTML, true),
      textContent: fill(EMAIL_TEXT, false),
      tags: ["zahrat-alkattan"],
    }),
  }).finally(() => clearTimeout(timer));
  return r.ok;
}

async function garden(env, cors) {
  const n = (await env.DB.prepare("SELECT COUNT(*) AS n FROM responses").first()).n;
  return json({ count: n }, 200, { ...(cors || { "Access-Control-Allow-Origin": "*" }), "Cache-Control": "public, max-age=30" });
}

async function stats(req, env, cors) {
  if (!safeEqual(req.headers.get("X-Admin-Key"), env.ADMIN_KEY)) return json({ error: "unauthorized" }, 401, cors);
  const DB = env.DB;
  const n = (await DB.prepare("SELECT COUNT(*) AS n FROM responses").first()).n;
  if (n < MIN_N) return json({ n, hidden: true }, 200, { ...cors, "Cache-Control": "no-store" });

  const counts = async (col, size) => {
    const out = new Array(size).fill(0);
    const { results } = await DB.prepare(`SELECT ${col} AS v, COUNT(*) AS c FROM responses WHERE ${col} IS NOT NULL GROUP BY ${col}`).all();
    for (const r of results) if (r.v >= 0 && r.v < size) out[r.v] = r.c;
    return out;
  };
  const multi = async (col, size) => {
    const out = new Array(size).fill(0);
    const { results } = await DB.prepare(`SELECT j.value AS v, COUNT(*) AS c FROM responses, json_each(responses.${col}) AS j GROUP BY j.value`).all();
    for (const r of results) if (r.v >= 0 && r.v < size) out[r.v] = r.c;
    return out;
  };
  const kRow = await DB.prepare(`SELECT ${KEY.map((k, i) => `SUM(CASE WHEN k${i}=${k} THEN 1 ELSE 0 END) AS c${i}`).join(",")}, AVG(score) AS avg FROM responses`).first();
  const since = libyaDay(new Date(Date.now() - 59 * 864e5));
  const { results: days } = await DB.prepare("SELECT day AS d, COUNT(*) AS c FROM responses WHERE day >= ? GROUP BY day ORDER BY day").bind(since).all();
  // fill missing days with 0 so the chart has a continuous axis
  const daily = []; const map = Object.fromEntries(days.map(r => [r.d, r.c]));
  const first = days.length ? days[0].d : libyaDay();
  for (let t = new Date(first + "T12:00:00Z"); libyaDay(t) <= libyaDay(); t = new Date(t.getTime() + 864e5)) { const d = libyaDay(t); daily.push({ d, c: map[d] || 0 }); }
  if (daily.length === 1) daily.unshift({ d: libyaDay(new Date(Date.now() - 864e5)), c: 0 });

  return json({
    n, updated: new Date().toISOString(), avgScore: kRow.avg || 0, daily,
    k: KEY.map((_, i) => (kRow["c" + i] || 0) / n),
    scoreDist: await counts("score", 9),
    age: await counts("age", 4), city: await counts("city", 10),
    p1: await counts("p1", 4), p2: await counts("p2", 4), p3: await counts("p3", 3), p4: await counts("p4", 4),
    s1: await counts("s1", 3), s1b: await multi("s1b", 6), s2: await multi("s2", 10), s3: await counts("s3", 4),
  }, 200, { ...cors, "Cache-Control": "no-store" });
}
