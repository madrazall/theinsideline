# Sentence Modification Guide — Volume One (Landing)

A simple, calm, reassuring static landing page + checkout for the Inside Line workbook.

## Philosophy
This site exists to help people exhale.  
The tone is reassurance, not marketing.  
The audience is usually carrying this for someone they love.

## Run the site

```bash
cp .env.example .env
# Add your Stripe test secret key to .env

npm install
npm run server
```

Open http://localhost:4242

## Stripe Test Card
- Card: `4242 4242 4242 4242`
- Any future date + any CVC

After successful payment you will be sent to `/pages/thank-you.html?session_id=...`

Click the download button — the server verifies the session and serves the PDF.

## Adding the actual PDF
Place your file here:

```
downloads/sentence-modification-vol1.pdf
```

The download route will serve it only to people who paid.

## Git Worktree (optional)
If you want to develop this as a worktree from the main `inside-line` repo:

```bash
cd inside-line
git worktree add ../insideline.org main   # or a feature branch
```

## Pricing
Three options supported:
- Digital (PDF): $29 — instant download
- Print: $59 — ships physical copy
- Both: $69 — digital + print

## Git Worktree
This folder is set up as a worktree:
```bash
# From inside-line repo
git worktree list
# You are on branch landing/sentence-mod-vol1 in this dir
```

To recreate if needed:
```bash
cd inside-line
git worktree add ../insideline.org -b landing/sentence-mod-vol1
# (then restore files + commit as done)
```

## Notes
- This is intentionally a very small project (just HTML + CSS + one Express server)
- For real transactional emails (beyond Stripe receipts), the main inside-line project uses Resend. We can add it here if needed — open to suggestions.
- Images are served from `assets/` (front.png for cover, etc.)
- Add the real PDF to `downloads/sentence-modification-vol1.pdf` for the download flow to work.
- Set `STRIPE_SECRET_KEY` in `.env` (test keys work with card 4242 4242 4242 4242)
