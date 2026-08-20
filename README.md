# angelosfikias.dev

Personal portfolio - Angelos Fikias, Platform Engineer at Dataviva.

**Live:** [angelosfikias.dev](https://angelosfikias.dev)

---

Vanilla HTML/CSS/JS. No framework, no build step.

- `index.html` - structure, CSS, JS
- `data.js` - all content lives here, edit this to update anything

To update content, edit `data.js` and push. Netlify redeploys automatically.

```bash
python -m http.server 8000   # local dev
```

> Open via `localhost`, not `file://` - browser blocks `data.js` loading over file protocol.
