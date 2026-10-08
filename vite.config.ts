// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // Every page is rendered to static HTML at build time so the site can be
    // served by any static web server (e.g. Nginx) without a Node runtime.
    pages: [{ path: "/" }, { path: "/impressum" }, { path: "/datenschutz" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
