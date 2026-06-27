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

## Notes
- Price is currently hardcoded at $29 in server.js
- This is intentionally a very small project (just HTML + CSS + one Express server)
- For real emails later, see the templates in the main inside-line project
