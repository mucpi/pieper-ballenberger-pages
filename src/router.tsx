import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Static hosting serves /page/index.html; keep URLs as requested so the
    // build-time prerenderer (which requests /page/) is not redirected.
    trailingSlash: "preserve",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
