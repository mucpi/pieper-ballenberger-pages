<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- All routes are prerendered (vite.config.ts `pages`); add every new static route there — the site must stay servable as plain files by Nginx (see Dockerfile).
- Router uses `trailingSlash: "preserve"` — otherwise prerendering /page/ redirect-loops.
- Uploaded images must be mirrored into self-host-assets/ via scripts/fetch-assets.sh for self-hosting.
