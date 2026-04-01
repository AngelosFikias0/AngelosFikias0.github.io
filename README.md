# angelosfikias.dev

Personal portfolio site for **Angelos Fikias** — Associate Platform Engineer at Dataviva.

Built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step, no dependencies.

**Live:** [angelosfikias.dev](https://angelosfikias.dev)

[![Netlify Status](https://api.netlify.com/api/v1/badges/839b9a6d-e3f8-4000-9ec9-2b9d9e1143d1/deploy-status)](https://app.netlify.com/projects/tubular-cobbler-ec0cab/deploys)

---

## Stack

- Pure HTML/CSS/JS — single file architecture
- `data.js` — all content lives here, no need to touch `index.html`
- Netlify — hosting and security headers
- Cloudflare — domain and DNS

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        angelosfikias.dev                        │
│                      Netlify (static CDN)                       │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTP
                ┌───────────▼───────────┐
                │     Cloudflare DNS    │
                │   (domain + proxy)    │
                └───────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        Browser Runtime                          │
│                                                                 │
│  ┌──────────────┐     ┌──────────────────────────────────────┐  │
│  │   data.js    │────▶│              index.html              │  │
│  │              │     │                                      │  │
│  │  SITE_DATA   │     │  ┌─────────────────────────────────┐ │  │
│  │  ──────────  │     │  │           <style>               │ │  │
│  │  meta        │     │  │  Design tokens (CSS vars)       │ │  │
│  │  terminal    │     │  │  JetBrains Mono + Syne fonts    │ │  │
│  │  hero        │     │  │  Dark palette · Grain overlay   │ │  │
│  │  about       │     │  │  Scanlines · Responsive layou   │ │  │
│  │  stack       │     │  └─────────────────────────────────┘ │  │
│  │  projects    │     │                                      │  │
│  │  experience  │     │  ┌─────────────────────────────────┐ │  │
│  │  certs       │     │  │             <main>              │ │  │
│  │  contact     │     │  │                                 │ │  │
│  │  softSkills  │     │  │  #hero ─── particle canvas      │ │  │
│  └──────────────┘     │  │           grid overlay          │ │  │
│                       │  │           spotlight effect      │ │  │
│                       │  │           terminal widget       │ │  │
│                       │  │           headline + CTAs       │ │  │
│                       │  │                                 │ │  │
│                       │  │  #about ── bio card             │ │  │
│                       │  │           stats (count-up)      │ │  │
│                       │  │           soft skills card      │ │  │
│                       │  │                                 │ │  │
│                       │  │  #skills ─ tag clouds           │ │  │
│                       │  │           animated skill bars   │ │  │
│                       │  │                                 │ │  │
│                       │  │  #projects  3D tilt cards       │ │  │
│                       │  │             mouse-glow effect   │ │  │
│                       │  │                                 │ │  │
│                       │  │  #experience  timeline          │ │  │
│                       │  │               pulse nodes       │ │  │
│                       │  │                                 │ │  │
│                       │  │  #certs ── filterable grid      │ │  │
│                       │  │                                 │ │  │
│                       │  │  #contact  links + terminal     │ │  │
│                       │  │            card                 │ │  │
│                       │  └─────────────────────────────────┘ │  │
│                       │                                      │  │
│                       │  ┌─────────────────────────────────┐ │  │
│                       │  │       Interactive Terminal      │ │  │
│                       │  │       (Ctrl+` / button)         │ │  │
│                       │  │                                 │ │  │
│                       │  │  Command registry               │ │  │
│                       │  │  ─────────────────────────────  │ │  │
│                       │  │  Info    whoami · skills        │ │  │
│                       │  │          projects · exp         │ │  │
│                       │  │          certs · contact        │ │  │
│                       │  │  Nav     ls · pwd · cd · open   │ │  │
│                       │  │          cat (resume/skills)    │ │  │
│                       │  │  Actions github · email         │ │  │
│                       │  │          hire · ping            │ │  │
│                       │  │  System  clear · env · date     │ │  │
│                       │  │          theme · neofetch       │ │  │
│                       │  │          sudo · history · man   │ │  │
│                       │  │  Fun     matrix · coffee        │ │  │
│                       │  │          sl · cowsay            │ │  │
│                       │  │                                 │ │  │
│                       │  │  Tab autocomplete (grouped)     │ │  │
│                       │  │  Arrow key command history      │ │  │
│                       │  │  Fuzzy-match unknown commands   │ │  │
│                       │  │  Live status bar + clock        │ │  │
│                       │  │  3 tabs: bash · help · about    │ │  │
│                       │  │  6 themes via `theme [name]`    │ │  │
│                       │  └─────────────────────────────────┘ │  │
│                       └──────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    Global Systems                        │   │
│  │                                                          │   │
│  │  Custom cursor — 2-ring, hover states, touch detection   │   │
│  │  Scroll progress bar — gradient, fixed top               │   │
│  │  IntersectionObserver ×4                                 │   │
│  │    scroll reveal · skill bars · count-up · typewriter    │   │
│  │  Particle canvas — 60 particles, O(n²) connections,      │   │
│  │    mouse attraction, pauses when hero off-screen         │   │
│  │  Magnetic buttons                                        │   │
│  │  3D card tilt (project cards)                            │   │
│  │  Mobile hamburger nav + drawer                           │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        SEO / Meta Layer                         │
│                                                                 │
│  JSON-LD (schema.org/Person)  ·  OpenGraph  ·  Twitter card     │
│  Canonical URL  ·  sitemap.xml  ·  robots.txt                   │
│  Google Analytics (gtag.js)   ·  Google Search Console          │
└─────────────────────────────────────────────────────────────────┘
```

### Data flow

```
data.js  (window.SITE_DATA)
    │
    ▼
index.html  <script>  (IIFE, strict mode)
    │
    ├── Render pass — builds all DOM sections from SITE_DATA
    │   hero · about · stack · projects · experience
    │   certs · contact · soft skills · footer · JSON-LD
    │
    ├── System init — binds all interactive behaviour
    │   cursor · nav scrolled state · scroll progress bar
    │   active nav links (IntersectionObserver)
    │   scroll reveal (IntersectionObserver)
    │   skill bar animation (IntersectionObserver)
    │   count-up stats (IntersectionObserver)
    │   section heading typewriter (IntersectionObserver)
    │   magnetic buttons · 3D card tilt
    │   particle canvas (rAF loop, viewport-aware pause)
    │   spotlight effect · keyboard shortcuts
    │   mobile hamburger nav
    │   touch device cursor detection
    │
    └── Terminal engine (nested IIFE)
            │
            ├── Reads D (SITE_DATA) for whoami, projects, skills, etc.
            ├── cd command scrolls and updates prompt
            ├── theme command mutates CSS custom properties live
            └── open / github / linkedin commands interact with DOM/window
```

### Content model

All content lives in `data.js` as a single `window.SITE_DATA` object. `index.html` contains zero hardcoded user-facing content — role, bio, projects, certs, links, and even the JSON-LD structured data all read from `SITE_DATA` at runtime. To update anything, edit `data.js` only.

```
SITE_DATA
├── meta          role · company · location · email · github · linkedin
├── terminal      lines for the hero animated terminal widget
├── hero          headline array · sub text · CTAs
├── about         bio paragraphs · stat cards
├── stack         skill categories (tags or bars)
├── projects      type · name · description · stack · github link
├── experience    period · role · company · bullets/desc · tags
├── certifications icon · name · issuer · date
├── contact       intro · languages · links
└── softSkills    list of soft skill strings
```

---

## File structure

```
├── index.html          # site structure, all CSS, all JS logic
├── data.js             # all content — only file you need to edit
├── README.md           # this file
├── _headers            # Netlify security headers (A grade)
├── sitemap.xml
├── robots.txt
├── site.webmanifest
├── og-image.png
├── favicon.svg
├── favicon-32.png
└── apple-touch-icon.png
```

---

## Updating content

Everything is in `data.js`. Open it, edit, push — Netlify redeploys automatically.

```bash
git add data.js
git commit -m "update: [what you changed]"
git push
```

No build process. No dependencies. No `node_modules`.

---

## Running locally

```bash
# Any static file server works
npx serve .

# Or Python
python -m http.server 8000
```

Then open `http://localhost:8000`.

> Don't open `index.html` directly as a file (`file://`) — the browser blocks `data.js` from loading due to CORS.

---

## Features

- Interactive terminal — `Ctrl+\`` or click the terminal button
- Particle canvas with mouse interaction (pauses when hero scrolls off-screen to save battery)
- Scroll reveal animations
- 3D card tilt on projects
- Cert filter by category (Cloud & Infra · DevOps & CI/CD · Agile & PM · Security)
- Theme switcher via terminal (`theme matrix`, `theme cyber`, `theme void`, `theme amber`, `theme ice`)
- Custom cursor with automatic touch-device detection (restores default on mobile)
- Mobile hamburger nav with animated drawer
- Soft skills rendered in About section
- Email clipboard copy with mailto: fallback
- Fully responsive

---

## Terminal commands

| Command | Description |
|---------|-------------|
| `help` | List all commands |
| `whoami` | Identity and contact info |
| `projects [n]` | List projects, or full detail on project n |
| `skills [category]` | Full tech stack, optional filter |
| `experience` | Work history |
| `certs [filter]` | Certifications, optional keyword filter |
| `neofetch` | System info with ASCII art |
| `hire` | The important one |
| `theme [name]` | Change colour theme (matrix · cyber · void · amber · ice · default) |
| `cat resume.md` | Print resume |
| `cat skills.json` | Print skills as JSON |
| `cat contact.txt` | Print contact info |
| `cd [section]` | Change directory and scroll to section |
| `open [section]` | Scroll to section and close terminal |
| `ls` | List site sections |
| `ping angelos` | Ping with simulated network latency |
| `env` | Print environment variables |
| `sudo` | You know what happens |
| `matrix` | Enter the matrix |
| `coffee` | Brew some coffee |
| `cowsay [text]` | cowsay |
| `sl` | You typed sl instead of ls |

---

## Known design decisions

**Why vanilla JS?** No build tool, no `node_modules`, no framework churn. A `git push` is a deploy. The site will work identically in five years.

**Why `data.js` as a separate file?** Content and logic separation. Updating copy never requires touching the 3,000+ lines of CSS/JS in `index.html`.

**Why `cursor: none` on body?** The custom cursor is part of the design language. Touch devices are detected at runtime via `pointer: coarse` media query and the default cursor is restored automatically — no jank on mobile.

**Why pause the particle canvas?** The O(n²) connection check runs 1,770 distance calculations per frame. Pausing via `IntersectionObserver` when the hero scrolls out of view saves meaningful CPU and battery on long reading sessions.

---

## License

Code is MIT. Content (text, projects, personal details) is mine - don't copy it.
