# Audit: Static self-hosting on Raspberry Pi 5 (Docker + Nginx)

No files were changed during this audit.

## Verdict: PARTIAL

The website is static: no Node.js is needed at runtime and the build has been tested. It is marked PARTIAL only because the Docker image and the Nginx config have not been run anywhere yet (this sandbox has neither Docker nor Nginx). One small issue with the menu links on the legal pages also remains.

## Checklist

| # | Requirement | Status | How it was checked |
|---|---|---|---|
| 1 | Build produces a self-contained static site | PASS | Build run, output checked |
| 2 | Build works without a running app server | PASS | Build run |
| 3 | No server functions, API routes, database or runtime env vars | PASS | Code search |
| 4 | server.ts / start.ts not needed at runtime | PASS | Code reading |
| 5 | All 3 pages exist as static HTML | PASS | Build run |
| 6 | Images, CSS, JS and favicon present locally | PASS | Built HTML checked against local files |
| 7 | Direct URLs and page refresh | PARTIAL | Tested with a simple file server, not with Nginx |
| 8 | Forms, login and other backend features | PASS (none exist) | Code search |
| 9 | Dockerfile uses Nginx; no Node/Bun at runtime | PASS (from reading the files) | Not built |
| 10 | .dockerignore is appropriate | PASS | Code reading |
| 11 | Nginx routing and file types | PARTIAL | Not run |
| 12 | Build inside Docker on ARM64 (Pi 5) | UNVERIFIED | Not run |
| 13 | Menu anchors work from the legal pages | FAIL (minor) | Code reading |

## Evidence

1. **Build.** The command is `bun run build` (which runs `vite build`). Deployable output goes to `dist/client/`. `dist/server/` and `dist/nitro.json` are only for Lovable's hosting and are not copied into the image.
   - `vite.config.ts` lists `/`, `/impressum` and `/datenschutz` with prerendering on and automatic page discovery off.
   - The last build reported `{"attempted":3,"rendered":3,"skipped":[]}` and wrote:
     - `dist/client/index.html`
     - `dist/client/impressum/index.html`
     - `dist/client/datenschutz/index.html`
   - During the build, the server code is run once, temporarily, to render the pages. That happens only at build time.
2. **Server code.** Searching `src/` for `createServerFn`, `process.env`, `fetch(`, `loader`, `<form` and `api/` found nothing in the app code.
   - `src/routes/` contains only `__root`, `index`, `impressum` and `datenschutz`.
   - `src/server.ts` and `src/start.ts` are error and CSRF wrappers. The build-time rendering uses them; the static output does not.
   - The client JS contains the string `_serverFn`. That is framework code that is never called, because the app defines no server functions.
3. **Routing and assets.** The built `index.html` points only to:
   - `/assets/*` (CSS and JS),
   - `/favicon.png` (from `public/`),
   - `/__l5e/assets-v1/...` images. All 40 are mirrored in `self-host-assets/` and copied by the Dockerfile.
   - Internal links are `/`, `/impressum` and `/datenschutz`.
   - A Python file server returned 200 for `/`, `/impressum/`, `/datenschutz/` and a sample image.
   - Router setting `trailingSlash: "preserve"` in `src/router.tsx`.
4. **External dependencies.** These load from Google in the visitor's browser, not from your server:
   - Google Fonts (Roboto), linked in `src/routes/__root.tsx`;
   - Google Maps, loaded only after cookie consent.
5. **Docker.** The `Dockerfile` has two stages:
   - build stage `oven/bun:1`: `bun install --frozen-lockfile`, then `bun run build`;
   - runtime stage `nginx:1.27-alpine`, which contains only `dist/client` and `self-host-assets` and has a healthcheck.
   - `.dockerignore` excludes `node_modules`, `dist`, `.output`, `.git` and `.lovable`.
6. **Nginx (`deploy/nginx.conf`).** `try_files $uri $uri/index.html $uri/ =404` covers both `/impressum` and `/impressum/`.
   - The stock `nginx.conf` already includes `mime.types`, so CSS, JS, PNG, JPG and ICO get the correct types.
   - Long-term caching is set for `/assets/` and `/__l5e/`.
   - `error_page 404 /index.html` sends unknown URLs to the app with a 404 status, and the app then shows its "Seite nicht gefunden" page. This is inferred, not tested.

## Remaining blockers and risks

- **Docker build on ARM64 not tested (medium).** The build tools have native parts that differ per processor. Bun should install the ARM64 versions, but this is unconfirmed. If the build fails on the Pi, the fallback is to build on another machine and copy `dist/client` over.
- **Nginx config not run (low).** Running `nginx -t` inside the container on first start would confirm it.
- **Images (low, process).** New images uploaded in Lovable need `./scripts/fetch-assets.sh` and a commit. Otherwise they will be missing on the Pi. This needs internet access to the Lovable site.
- **Menu anchors (minor UX).** The header links `#leistungen`, `#referenzen` and `#kontakt` stay on `/impressum` and `/datenschutz` instead of jumping back to the homepage. This is not caused by static hosting. The fix is to change them to `/#leistungen` and so on.
- **HTTPS is not included.** It needs a reverse proxy or tunnel in front of the container.

## Commands for the Raspberry Pi 5

```text
git clone <repo-url> pieper-ballenberger && cd pieper-ballenberger
docker build -t pieper-ballenberger .
docker run -d --name pieper-ballenberger --restart unless-stopped -p 80:80 pieper-ballenberger
docker exec pieper-ballenberger nginx -t
curl -I http://localhost/  &&  curl -I http://localhost/impressum
```

Update:

```text
git pull && docker build -t pieper-ballenberger . && docker rm -f pieper-ballenberger && <docker run ... as above>
```

## Recommendation

It is safe to go ahead with Docker and Nginx. Nothing needs a server at runtime. Do the first build on the Pi and run the checks above. If you approve this plan, the only code change would be the small menu-anchor fix (`/#leistungen`, `/#referenzen`, `/#kontakt` in `src/routes/__root.tsx`).
