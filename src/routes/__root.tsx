import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { CookieConsent } from "../components/CookieConsent";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Diese Seite konnte nicht geladen werden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Etwas ist schiefgelaufen. Sie können es erneut versuchen oder zur Startseite gehen.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-[#383e42] transition-colors hover:bg-accent"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Architekturbüro Pieper-Ballenberger" },
      {
        name: "description",
        content:
          "Das Architekturbüro Pieper-Ballenberger übernimmt alle planerischen Leistungen für Ihr Bauprojekt in Bad Homburg und Umgebung – von der Grundstücksauswahl bis zur Bauleitung.",
      },
      { name: "author", content: "Jonas Ballenberger" },
      {
        property: "og:title",
        content: "Architekturbüro Pieper-Ballenberger",
      },
      {
        property: "og:description",
        content:
          "Alle planerischen Leistungen für Ihr Bauprojekt – von der Grundstücksauswahl bis zur Bauleitung.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Architekturbüro Pieper-Ballenberger" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CookieConsent />
    </QueryClientProvider>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-heading text-xl tracking-tight text-[#383e42]">
          pieper-ballenberger
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/#leistungen"
            className="font-heading text-sm text-[#383e42] transition-colors hover:text-foreground"
          >
            Leistungen
          </a>
          <a
            href="/#referenzen"
            className="font-heading text-sm text-[#383e42] transition-colors hover:text-foreground"
          >
            Referenzen
          </a>
          <a
            href="/#kontakt"
            className="font-heading text-sm text-[#383e42] transition-colors hover:text-foreground"
          >
            Kontakt
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü umschalten"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            <a
              href="/#leistungen"
              className="font-heading text-base text-[#383e42] transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Leistungen
            </a>
            <a
              href="/#referenzen"
              className="font-heading text-base text-[#383e42] transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Referenzen
            </a>
            <a
              href="/#kontakt"
              className="font-heading text-base text-[#383e42] transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Kontakt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Architekturbüro Pieper-Ballenberger</p>
        <div className="flex gap-6">
          <Link to="/impressum" className="text-[#383e42] transition-colors hover:text-foreground">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-[#383e42] transition-colors hover:text-foreground">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </footer>
  );
}
