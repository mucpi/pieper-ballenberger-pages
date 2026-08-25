# Architekturbüro Pieper-Ballenberger – Landing Page

## Ziel
Eine einseitige, minimalistisch-klassische Landing Page für das Architekturbüro Pieper-Ballenberger in Bad Homburg. Alle Inhalte und Bilder der bestehenden Seite (test.pieperballenberger.de) werden übernommen und in eine klare, scrollbare Seitenstruktur überführt.

## Seitenstruktur

### 1. Navigation
- Sticky Header mit Logo/Firmenname und Anker-Links: Leistungen, Referenzen, Kontakt.
- Mobile Hamburger-Menü.

### 2. Hero
- Große, zentrierte Typografie: „architekturbüro pieper-ballenberger“.
- Drei Bilder aus der aktuellen Startseite (img_home_1–3) als stilvolle Galerie-Reihe.
- Kurze Adresszeile mit Telefon und E-Mail.

### 3. Über das Büro / Leistungen
- Einleitungstext aus der aktuellen Leistungsseite.
- Drei Leistungskarten mit den Icons/Bildern der aktuellen Seite:
  - Planung und Umsetzung
  - Tätigkeitsfelder
  - Objektschwerpunkte
- Drei erklärende Textblöcke: „Alle Leistungsphasen“, „Private Bauherren“, „Studien und Beratungen“.

### 4. Referenzen
- Galerie der sechs aktuellen Projekte mit Bild, Titel, Leistungen, Fertigstellung und Ort.
- Klick öffnet keine separate Detailseite, sondern zeigt die Projektkarte in einem übersichtlichen Dialog/Lightbox.

### 5. Kontakt
- Ansprechpartnerin Inge Pieper-Ballenberger mit Telefon, Fax und E-Mail.
- Adresse und eingebettete Google-Maps-Karte.

### 6. Footer
- Copyright, Links zu Impressum und Datenschutzerklärung.

### 7. Rechtliche Seiten
- Separate Routen `/impressum` und `/datenschutz`, die den bestehenden Text sauber formatiert darstellen.

## Design
- Minimalistisch und klassisch: viel Weißraum, klare Hierarchie, zurückhaltende Farben.
- Warmes, neutrales Farbsystem (Helles Creme-Weiß, Anthrazit-Text, dezenter Akzent in Terrakotta oder Sandstein).
- Elegante Serif-Schrift für Überschriften, gut lesbare Sans-Serif für Fließtext.
- Große Bilder, feine Trennlinien, dezente Schatten.

## Assets
- Alle Bilder der bestehenden Seite werden heruntergeladen und als Lovable Assets (CDN) bereitgestellt.
- Das aktuelle Favicon wird übernommen.

## Technik
- TanStack Start mit React und Tailwind CSS v4.
- Responsive Layout für Mobil, Tablet und Desktop.
- Sanftes Scrollen zu den Anker-Sektionen.
- SEO-Meta-Tags, Open Graph und JSON-LD (Organization) für die Startseite.

## Nicht im Scope
- Kein CMS oder Backend.
- Kein Kontaktformular (nur Mailto-Link und Telefon, wie bisher).
- Keine Cookie-Consent-Banner-Logik (reiner statischer Hinweis, falls nötig).
