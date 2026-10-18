# زهرة الكتان · Zahrat Al-Kattan

Moomken's interactive breast-cancer awareness journey. A woman plants a seed, answers 20-odd questions that water it, watches her flower bloom, and opens a sealed envelope with a recipe card that has her name on it.

| Part | Where it runs | Cost |
|---|---|---|
| Survey site `index.html` | GitHub Pages | Free |
| Team dashboard `dashboard.html` | GitHub Pages (needs the admin key) | Free |
| Backend `worker/` | Cloudflare Workers + D1 database | Free (100,000 requests a day) |
| Thank-you email from `media@moomken.org` | Brevo | Free (300 emails a day) |

```
phone ──► GitHub Pages (index.html) ──POST /submit──► Cloudflare Worker ──► D1 (anonymous answers)
                                                              └──────────► Brevo ──► her inbox
team  ──► GitHub Pages (dashboard.html) ──GET /stats + key──► Cloudflare Worker
```

## Privacy
- Answers are stored without name, email or IP. The database has no column for any of them.
- Name and email are used only in memory to send the thank-you email, then dropped.
- The dashboard only receives totals, and shows nothing until there are 10 responses.
- Rate limit: 5 submissions per device address per 10 minutes (stored as a salted hash, deleted after a day).

## Going live
Follow the step-by-step setup guide. In short:
1. Turn on GitHub Pages (Settings → Pages → `main` / root). The site works immediately in demo mode.
2. Create a free Cloudflare account and a D1 database named `zahrat-alkattan`.
3. Create a Cloudflare API token and add the 6 repository secrets listed at the top of `.github/workflows/deploy-backend.yml`.
4. Run the **Deploy backend** workflow (Actions tab → Run workflow). Copy the `workers.dev` address it prints.
5. Paste that address into `config.js`.
6. Brevo: verify the `moomken.org` domain (IT adds the DNS records), create an API key, and add it as `BREVO_API_KEY`. Run the workflow again.

## Changing things
| To change | Edit | Then |
|---|---|---|
| Questions or text on the site | `index.html` | Commit. Pages updates in about a minute |
| Backend address | `config.js` | Commit |
| Email wording | `worker/email-template.html` and `worker/email-message.txt` | Commit. The workflow redeploys |
| Sender address or site URL | `worker/wrangler.toml` → `[vars]` | Commit |
| Dashboard password | `ADMIN_KEY` secret | Run the workflow |

If the site moves to its own domain (for example `survey.moomken.org`), add that origin to `ALLOWED_ORIGINS` in `worker/wrangler.toml`, separated by commas.

## API
- `POST /submit` → `{ "emailSent": true, "flowerNo": 1249 }`
- `GET /garden` → `{ "count": 1248 }`
- `GET /stats` with header `X-Admin-Key` → aggregates (see `worker/src/index.js`)
- `GET /health` → `{ "ok": true }`
