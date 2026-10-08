# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Self-hosting (Raspberry Pi 5, Docker + Nginx)

Every page (`/`, `/impressum`, `/datenschutz`) is prerendered to plain HTML at
build time. The output in `dist/client/` is a fully static site — no Node.js,
Nitro or SSR server is needed at runtime. (`dist/server/` is only used by
Lovable's own hosting and can be ignored.)

### Build & run with Docker (on the Pi)

```sh
git clone <this-repository-url> && cd <repository-name>
docker build -t pieper-ballenberger .
docker run -d --name pieper-ballenberger --restart unless-stopped -p 80:80 pieper-ballenberger
```

The images (`oven/bun`, `nginx:alpine`) are multi-arch, so this builds
natively on the Pi's ARM64 CPU. Open `http://<pi-ip>/`.

To update: `git pull && docker build -t pieper-ballenberger . && docker rm -f pieper-ballenberger` and run again.

### Build without Docker

```sh
bun install
bun run build
# copy dist/client/* and self-host-assets/* into your web root
```

### Images

Images uploaded in Lovable are referenced as `/__l5e/assets-v1/...` and are
normally served by Lovable's hosting. Local copies live in `self-host-assets/`
and are copied into the web root by the Dockerfile. After adding or replacing
images in Lovable, run `./scripts/fetch-assets.sh` and commit the result.

### What is not static

- No server functions, forms or database are used, so nothing is lost.
- Google Maps (after cookie consent) and Google Fonts load from Google directly.
- HTTPS: put the container behind a reverse proxy (e.g. Caddy, Nginx Proxy
  Manager or Traefik with Let's Encrypt) or a Cloudflare Tunnel.
