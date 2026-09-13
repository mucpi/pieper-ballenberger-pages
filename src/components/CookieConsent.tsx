import { Link } from "@tanstack/react-router";

import { useConsent } from "../hooks/useConsent";

export function CookieConsent() {
  const { hydrated, hasDecided, accept, decline } = useConsent();

  if (!hydrated || hasDecided) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Hinweis zum Datenschutz"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border/60 bg-background/98 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Diese Website verwendet ausschließlich technisch notwendige Speicherung. Externe Inhalte
          wie die Google-Maps-Karte werden erst nach Ihrer Einwilligung geladen. Weitere
          Informationen finden Sie in unserer{" "}
          <Link to="/datenschutz" className="text-[#1B68] underline underline-offset-2">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={decline}
            className="rounded-md border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            Nur essenzielle
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
