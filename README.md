# Javier Espinosa Pico Portfolio (2025)

Personal portfolio site for Javier Espinosa Pico: project case studies, lightweight 3D and shader demos, bilingual copy (Spanish and English), SEO metadata and static Vite deployment support.

Built with **Vue 3**, **TypeScript**, and **Vite**. Motion via **GSAP** and **Lenis**, 3D via **three.js**, audio via **Howler**. GLSL is compiled through **vite-plugin-glsl**.

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`   | Dev server on port **3000** (`strictPort`) |
| `npm run build` | `vue-tsc` then production bundle to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Typecheck only (`vue-tsc -b`) |

## Content

- **Portfolio profile**: `src/content/portfolio.ts` — profile, metrics, experience, skills, education, certifications and contact copy.
- **SEO metadata**: `src/content/seo.ts` and `src/composables/useSeo.ts` — localized titles, descriptions, Open Graph, Twitter cards, canonical, language metadata and JSON-LD.
- **Projects**: `src/content/projects/{es,en}/<slug>.ts` — copy, tags, media, links. Slugs must align with `projectIds` in `src/content/projects/index.ts`.
- **Previews / listing**: `src/content/projects/previews/`.
- **Tags**: variants and labels live in `src/components/tagVariants.ts` (used by `Tag.vue` and content types).

## Static Deployment

- Set `VITE_SITE_URL` to the final public origin before building, for example `VITE_SITE_URL=https://example.com npm run build`.
- `public/_redirects` keeps SPA routes such as `/project/erp-ecommerce` working on hosts that support Netlify-style redirects.
- Update `public/sitemap.xml` with absolute URLs once the production domain is final.
- See `docs/publication-assets.md` for the current asset review and items to optimize before final launch.

## Share Local Preview With Cloudflare Tunnel

Use Cloudflare Tunnel when you want to share the local Vite site from your machine without deploying it. The link works while your PC, Vite and `cloudflared` are running.

Install `cloudflared` on Ubuntu/Debian:

```bash
sudo mkdir -p --mode=0755 /usr/share/keyrings

curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg \
  | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null

echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared any main" \
  | sudo tee /etc/apt/sources.list.d/cloudflared.list

sudo apt-get update
sudo apt-get install cloudflared
```

Start the site in one terminal:

```bash
npm run dev
```

Start the public tunnel in another terminal:

```bash
cloudflared tunnel --url http://localhost:3000
```

Share the generated `https://*.trycloudflare.com` URL. This repo already allows `trycloudflare.com` hosts in `vite.config.ts`; if Vite still shows a blocked-host message, restart `npm run dev` so the config reloads.

## Stack (high level)

- Vue 3 (`<script setup>`), SCSS with shared mixins (`src/assets/styles/`)
- i18n helpers under `src/i18n/`
- WebGL / GLSL under `src/three/` where applicable

## Credits & Attribution

This project was created and designed by David Heckhoff.

If you use this project or substantial parts of its source code as a base for your own portfolio or work, attribution must be preserved.

Please keep:

- existing credit comments in the source code
- this attribution section in the README
- a visible reference to the original project/repository in derivative works

Original portfolio:
-> https://david-hckh.com

Commercial reuse or redistribution of substantial portions of this project without permission is prohibited.
