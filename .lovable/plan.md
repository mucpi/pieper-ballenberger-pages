# Rechtliche Ergänzungen: Cookie-Consent & Google Maps DSGVO

## Ziel
Die Website rechtssicherer machen, indem ein Cookie-/Einwilligungs-Banner eingebaut und Google Maps erst nach Zustimmung geladen wird. Die Datenschutzerklärung wird um die entsprechenden Abschnitte ergänzt.

## Geplante Änderungen

### 1. Cookie-Consent-Banner
- Einen dezentaren, am unteren Bildschirmrand fixierten Banner erstellen.
- Text: Kurze Info über essenzielle Cookies und die optionale Einwilligung für Google Maps.
- Buttons: "Nur essenzielle", "Alle akzeptieren".
- Zustand in `localStorage` speichern, damit der Banner nicht bei jedem Besuch erscheint.
- Komponente in `src/components/CookieConsent.tsx` anlegen und in `src/routes/__root.tsx` einbinden.

### 2. Google Maps: Zwei-Klick-Lösung
- Den Google-Maps-iFrame in `src/routes/index.tsx` nicht mehr direkt laden.
- Stattdessen einen Platzhalter mit Datenschutz-Hinweis und einem "Karte laden"-Button anzeigen.
- Erst nach Klick auf "Karte laden" wird der iFrame eingefügt (setzt voraus, dass der Nutzer zuvor im Cookie-Banner zugestimmt hat, oder der Klick gilt als separate Einwilligung).
- Alternativ: Karte automatisch laden, wenn im Cookie-Banner "Alle akzeptieren" gewählt wurde; andernfalls Platzhalter mit Button.

### 3. Datenschutzerklärung erweitern
In `src/routes/datenschutz.tsx` folgende Abschnitte ergänzen:
- **Cookies**: Welche Cookies gesetzt werden (essenzielle/session-basierte, Einwilligungs-Cookie).
- **Google Maps**: Hinweis, dass Google LLC (USA) Daten verarbeitet, dass die Einbindung erst nach Einwilligung erfolgt und welche Daten übertragen werden können (IP-Adresse, Standortdaten).
- **Hosting**: Hinweis auf Lovable/Cloudflare/Supabase als Hosting- und Datenbank-Infrastruktur.
- **Externe Dienste**: Verweis auf die Datenschutzerklärungen von Google und ggf. Lovable.

### 4. Impressum prüfen
- Bestehendes Impressum in `src/routes/impressum.tsx` auf Vollständigkeit prüfen (keine inhaltlichen Änderungen planen, sofern korrekt).

## Technische Details
- Neue Komponente: `src/components/CookieConsent.tsx`
- Hook für Consent-Zustand: `src/hooks/useConsent.ts`
- Betroffene Dateien: `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/datenschutz.tsx`
- Kein Backend nötig; alles clientseitig in React/Tailwind.

## Nicht im Scope
- Umfassende Rechtsberatung oder individuelle Anpassung an spezifische Aufsichtsbehörden-Forderungen.
- Einbindung eines externen Consent-Management-Providers.
