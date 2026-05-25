# Publication Asset Review

Phase 9 asset status before public launch.

## Metadata Assets

- `public/meta/favicon.svg`: updated to Javier Espinosa Pico initials and portfolio colors.
- `public/meta/og-image.svg`: 1200x630 share image with Javier's name, positioning, stack and location.
- Legacy raster metadata files remain in `public/meta/` for compatibility, but `index.html` references the SVG favicon and share image.

## 3D And Runtime Assets

- GLB models are already compact for this experience:
  - `src/assets/models/avatar.glb`: about 604 KB.
  - `src/assets/models/room.glb`: about 284 KB.
  - `src/assets/models/contact.glb` and `src/assets/models/lab.glb`: about 12 KB each.
- Texture assets are WebP/PNG and currently small enough for publication review.
- Phase 10 adds a WebGL capability check before initializing Three.js. When WebGL is unavailable, the home renders an accessible static control-center fallback instead of a blank canvas.
- The canvas is decorative for assistive tech (`aria-hidden`) because the professional content is available in semantic HTML sections.
- Ambient/click audio remains optional and now defaults to off until the user enables it.

## Images, Video And Fonts

- Fonts are local WOFF2 files and preloaded from `public/fonts/`.
- Project images and thumbnails are WebP and small.
- Legacy demo videos from the original template remain in `src/assets/videos/`; the largest are about 5.3 MB and 4.7 MB. They should be removed from the bundle or replaced with Javier-specific compressed media before final publication if they are no longer used by active case studies.

## Phase 10 Quality Review

- Keyboard path covers header CTA, language switch, sound toggle, mobile nav buttons, project filters, case cards and contact links.
- Focus-visible styles exist globally and were reinforced for hero CTAs and mobile nav pills.
- Reduced-motion users get near-instant CSS transitions and the animated about boxes already resolve text without clip-path motion.
- Touch users keep horizontal mobile navigation, tap-sized filters, tap-sized CTAs and no hover-only workflow.
- Production readiness must be rechecked with `npm run typecheck` and `npm run build` after every content or asset change.

## Final Domain Step

- Set `VITE_SITE_URL` to the production origin before `npm run build`.
- Replace relative `<loc>` values in `public/sitemap.xml` with absolute production URLs once the domain is confirmed.
