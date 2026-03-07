# angelosfikias.dev

Personal portfolio site. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

**Live:** [angelosfikias.dev](https://angelosfikias.dev)

---

## Stack

- Pure HTML/CSS/JS — single file architecture
- `data.js` — all content lives here, no need to touch `index.html`
- Netlify — hosting and security headers
- Cloudflare — domain and DNS

---

## Structure

```
├── index.html          # site structure and all JS logic
├── data.js             # all content — edit this to update the site
├── _headers            # Netlify security headers
├── sitemap.xml
├── robots.txt
├── site.webmanifest
├── og-image.png
├── favicon.svg
├── favicon-32.png
└── apple-touch-icon.png
```

---

## Updating Content

Everything is in `data.js`. Open it, edit, push — Netlify redeploys automatically.

```bash
git add data.js
git commit -m "update: [what you changed]"
git push
```

No build process. No dependencies. No `node_modules`.

---

## Running Locally

```bash
# Any static file server works
npx serve .

# Or Python
python -m http.server 8000
```

Then open `http://localhost:8000`.

> Don't open `index.html` directly as a file (`file://`) — the browser will block `data.js` from loading due to CORS.

---

## Features

- Interactive terminal — `Ctrl+\`` or click the terminal button
- Particle canvas with mouse interaction
- Scroll reveal animations
- 3D card tilt on projects
- Cert filter by category
- Theme switcher via terminal (`theme matrix`, `theme cyber`, `theme void`)
- Custom cursor
- Fully responsive

---

## Terminal Commands

| Command | Description |
|---------|-------------|
| `help` | List all commands |
| `whoami` | Identity and contact info |
| `projects [n]` | List projects, or detail on project n |
| `skills` | Full tech stack |
| `experience` | Work history |
| `certs [filter]` | Certifications, optional filter |
| `neofetch` | System info |
| `hire` | The important one |
| `theme [name]` | Change color theme |
| `cat resume.md` | Print resume |

---

## License

Code is MIT. Content (text, projects, personal details) is mine — please don't copy it.
