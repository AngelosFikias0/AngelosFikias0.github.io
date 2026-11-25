# angelosfikias.dev

Personal portfolio - Angelos Fikias, Platform Engineer at Dataviva.

**Live:** [angelosfikias.dev](https://angelosfikias.dev)

---

Vanilla HTML/CSS/JS. No framework, no build step.

- `index.html` - structure, CSS, JS
- All content lives in the `window.SITE_DATA` object in the `SITE CONTENT` block at the top of `index.html`; edit that to update anything (it's inlined rather than a separate file so the first paint doesn't wait on an extra request)
- `llms.txt` and the JSON-LD block in `index.html` repeat the same facts for search engines and AI assistants; keep them in sync

To update content, edit the `SITE CONTENT` block and push. Netlify redeploys automatically.

```bash
python -m http.server 8000   # local dev
```

