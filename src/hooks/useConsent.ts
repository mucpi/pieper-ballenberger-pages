import { useCallback, useEffect, useState } from "react";

export type ConsentValue = "all" | "essential";

const STORAGE_KEY = "pb-consent";
const EVENT_NAME = "pb-consent-change";

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "all" || value === "essential" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: ConsentValue) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* storage not available */
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }));
}

/**
 * Consent state for optional third-party content (currently Google Maps).
 * `hydrated` is false during SSR/first paint so nothing renders inconsistently.
 */
export function useConsent() {
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setHydrated(true);

    const onChange = () => setConsent(readConsent());
    window.addEventListener(EVENT_NAME, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVENT_NAME, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const accept = useCallback(() => writeConsent("all"), []);
  const decline = useCallback(() => writeConsent("essential"), []);

  return {
    consent,
    hydrated,
    hasDecided: consent !== null,
    acceptsExternalContent: consent === "all",
    accept,
    decline,
  };
}
