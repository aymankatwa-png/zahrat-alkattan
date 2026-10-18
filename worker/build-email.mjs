// Regenerates src/email.js from email-template.html and email-message.txt.
// Run: node build-email.mjs   (the deploy workflow runs it automatically)
import { readFileSync, writeFileSync } from "node:fs";
const html = readFileSync(new URL("./email-template.html", import.meta.url), "utf8").replace(/<!--[\s\S]*?-->\n?/g, "");
const msg = readFileSync(new URL("./email-message.txt", import.meta.url), "utf8");
const body = (msg.split("نص الرسالة (صياغة أسماء):")[1] || msg).trim();
const text = `شكراً يا {{NAME}} 🌸\nزهرتك رقم {{FLOWER_NO}} تفتّحت في حديقة ممكن.\n\n${body}\n\nشاركي الرحلة: {{SITE_URL}}/\n\nوصلتك هذه الرسالة لأنك شاركتي في استبيان «زهرة الكتان». إجاباتك مجهولة، وإيميلك ما يتخزنش مع إجاباتك.`;
writeFileSync(new URL("./src/email.js", import.meta.url),
  "// Generated from email-template.html and email-message.txt. Edit those, then run: node build-email.mjs\n" +
  `export const EMAIL_SUBJECT = ${JSON.stringify("شكراً لمشاركتك 🌸")};\n` +
  `export const EMAIL_HTML = ${JSON.stringify(html)};\n` +
  `export const EMAIL_TEXT = ${JSON.stringify(text)};\n`);
console.log("email.js rebuilt");
