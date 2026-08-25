import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import imgHome1 from "../assets/img_home_1.png.asset.json";
import imgHome2 from "../assets/img_home_2.jpg.asset.json";
import imgHome3 from "../assets/img_home_3.jpg.asset.json";
import imgHome4 from "../assets/img_home_4.jpg.asset.json";
import imgHome5 from "../assets/img_home_5.jpg.asset.json";
import imgLeistungen1 from "../assets/img_leistungen_1.jpg.asset.json";
import imgLeistungen2 from "../assets/img_leistungen_2.jpg.asset.json";
import imgLeistungen3 from "../assets/img_leistungen_3.jpg.asset.json";
import imgRef1 from "../assets/img_referenzen_titel1.jpg.asset.json";
import imgRef2 from "../assets/img_referenzen_titel2.jpg.asset.json";
import imgRef3 from "../assets/img_referenzen_titel3.jpg.asset.json";
import imgRef4 from "../assets/img_referenzen_titel4.jpg.asset.json";
import imgRef5 from "../assets/img_referenzen_titel5.jpg.asset.json";
import imgRef6 from "../assets/img_referenzen_titel6.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Architekturbüro Pieper-Ballenberger" },
      {
        name: "description",
        content:
          "Das Architekturbüro Pieper-Ballenberger übernimmt alle planerischen Leistungen für Ihr Bauprojekt in Bad Homburg und Umgebung.",
      },
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
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Architekturbüro Pieper-Ballenberger",
          url: "https://pieperballenberger.de",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hamelstraße 16",
            postalCode: "61350",
            addressLocality: "Bad Homburg",
            addressCountry: "DE",
          },
          telephone: "+496172918007",
          email: "info@pieperballenberger.de",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    image: imgLeistungen1.url,
    title: "Planung und Umsetzung",
    items: ["Neubau und Umbau", "Sanierung und Modernisierung", "Denkmalschutz"],
  },
  {
    image: imgLeistungen2.url,
    title: "Tätigkeitsfelder",
    items: ["Planung und Bauleitung", "Bestandsaufnahme", "Standortuntersuchungen"],
  },
  {
    image: imgLeistungen3.url,
    title: "Objektschwerpunkte",
    items: ["Einfamilien- und Reihenhäuser", "Geschosswohnungsbau", "Wohnanlagen und Siedlungen"],
  },
];

const references = [
  {
    image: imgRef1.url,
    project: "Neubau eines Einfamilien-Wohnhauses",
    services: "Phase 1–9",
    completion: "2017",
    tags: "Neubau | Bad Homburg",
  },
  {
    image: imgRef2.url,
    project: "Neubau eines Einfamilien-Wohnhauses",
    services: "Phase 1–9",
    completion: "2017",
    tags: "Neubau | Bad Homburg",
  },
  {
    image: imgRef3.url,
    project: "Umbau eines Einfamilien-Wohnhauses",
    services: "Phase 1–9",
    completion: "2017",
    tags: "Umbau | Bad Homburg",
  },
  {
    image: imgRef4.url,
    project: "Außenanlage eines Mehrfamilienhauses",
    services: "Phase 1–9",
    completion: "2017",
    tags: "Außenanlage | Frankfurt",
  },
  {
    image: imgRef5.url,
    project: "Balkonanbau eines Mehrfamilienhauses",
    services: "Phase 1–9",
    completion: "2017",
    tags: "Balkonanbau | Frankfurt",
  },
  {
    image: imgRef6.url,
    project: "Tiefgaragenplanung eines Einfamilienhauses",
    services: "Phase 1–9",
    completion: "2017",
    tags: "Tiefgarage | Oberursel",
  },
];

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <References />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Architekturbüro
          </p>
          <h1 className="mx-auto max-w-4xl font-heading text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            pieper-ballenberger
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Wir übernehmen alle planerischen Leistungen, die zur Realisierung Ihres Bauprojekts
            erforderlich sind – von der ersten Idee bis zur Fertigstellung.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <img
              src={imgHome1.url}
              alt="Wohnhaus in Bad Homburg"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <img
              src={imgHome2.url}
              alt="Architektonische Hausansicht"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <img
              src={imgHome3.url}
              alt="Fertiggestelltes Bauprojekt"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
            <img
              src={imgHome4.url}
              alt="Planungskonzept"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
            <img
              src={imgHome5.url}
              alt="Entwurfsdetail"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Hamelstraße 16, 61350 Bad Homburg</span>
          <span className="hidden sm:inline">·</span>
          <a href="tel:+496172918007" className="transition-colors hover:text-foreground">
            06172 918007
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="mailto:info@pieperballenberger.de"
            className="transition-colors hover:text-foreground"
          >
            info@pieperballenberger.de
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="leistungen" className="section-padding border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">Leistungen</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Wir übernehmen alle planerischen Leistungen, die zur Realisierung Ihres Bauprojekts
            erforderlich sind. Dazu gehört die Beratung bei der Grundstücksauswahl, Klärung der
            Fragen zur Machbarkeit und des städtebaulichen Kontexts über den Entwurf, die Einreichung
            der Ausführungs- und Detailplanung bei der Baubehörde und die örtliche Bauaufsicht.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-lg border border-border/50 bg-card transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-card-foreground">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 space-y-16">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="font-heading text-2xl text-foreground">
                Alle Leistungsphasen
              </h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Grundlagen für eine solide Planung
              </p>
            </div>
            <p className="lg:col-span-8 lg:col-start-5 leading-relaxed text-muted-foreground">
              Der Erfolg eines Bauvorhabens erfordert Engagement von der ersten Idee bis zur
              Fertigstellung. Unter Berücksichtigung der baugesetzlichen, technischen und
              ökonomischen Machbarkeit entwickeln wir individuelle Lösungen. Eine enge Abstimmung
              mit den Behörden ist die Grundlage für eine erfolgreiche Baueingabe. Für die
              Werkplanung, Ausschreibung und Bauleitung greifen wir auf unsere langjährige
              Erfahrung zurück.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="font-heading text-2xl text-foreground">Private Bauherren</h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Verwirklichung individueller Wohnvorstellungen
              </p>
            </div>
            <p className="lg:col-span-8 lg:col-start-5 leading-relaxed text-muted-foreground">
              Einerseits sind Immobilien eine Wertanlage, andererseits erleben wir in der
              Zusammenarbeit mit privaten Bauherren, wie spezifische Lebenssituationen und
              Präferenzen, sowie Geschichten und soziale Bindungen den Umgang mit Immobilien prägen.
              Unsere Lösungen entstehen in enger Abstimmung und Zusammenarbeit mit unseren Kunden.
              Dabei ist das Eingehen auf die individuellen Bedürfnisse ein integraler Bestandteil
              unserer Arbeit.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="font-heading text-2xl text-foreground">Studien und Beratungen</h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                Klärung der Machbarkeit
              </p>
            </div>
            <p className="lg:col-span-8 lg:col-start-5 leading-relaxed text-muted-foreground">
              Der Entschluss für den Kauf einer Immobilie oder die Beauftragung eines Bauvorhabens
              erfordert die Erfüllung bestimmter Rahmenbedingungen. In Studien, individuellen
              Beratungen und gemeinsamen Besichtigungen von Grundstücken und Bestandsgebäuden
              klären wir die Machbarkeit eines Bauvorhabens. Wir entwickeln erste Konzepte, klären
              die baugesetzlichen Rahmenbedingungen und prüfen auf Wunsch, welche baulichen
              Lösungen innerhalb eines bestimmten Kosten- und Zeitrahmens realisierbar sind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function References() {
  const [selected, setSelected] = useState<(typeof references)[number] | null>(null);

  return (
    <section id="referenzen" className="section-padding border-t border-border/50 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">Referenzen</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Eine Auswahl unserer realisierten Projekte in Bad Homburg, Frankfurt und Umgebung.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((ref) => (
            <button
              key={ref.project}
              type="button"
              onClick={() => setSelected(ref)}
              className="group overflow-hidden rounded-lg border border-border/50 bg-card text-left transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={ref.image}
                  alt={ref.project}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg text-card-foreground">{ref.project}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{ref.tags}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.project}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg border border-border/50 bg-card p-0 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] w-full bg-muted">
              <img
                src={selected.image}
                alt={selected.project}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-heading text-2xl text-card-foreground">{selected.project}</h3>
              <dl className="mt-4 space-y-2 text-muted-foreground">
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Leistungen:</dt>
                  <dd>{selected.services}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Fertigstellung:</dt>
                  <dd>{selected.completion}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Kategorie:</dt>
                  <dd>{selected.tags}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-8 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section-padding border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">Kontakt</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Wir freuen uns darauf, Ihr Bauvorhaben gemeinsam mit Ihnen zu planen.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h3 className="font-heading text-2xl text-foreground">Ihr Ansprechpartner</h3>
              <div className="mt-4 space-y-1">
                <p className="text-lg font-medium text-foreground">Inge Pieper-Ballenberger</p>
                <p className="text-muted-foreground">Dipl.-Ing. Architektin</p>
              </div>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p>
                  Telefon:{" "}
                  <a href="tel:+496172918007" className="text-foreground hover:underline">
                    06172 / 918007
                  </a>
                </p>
                <p>
                  Fax:{" "}
                  <span className="text-foreground">06172 / 918006</span>
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:info@pieperballenberger.de"
                    className="text-foreground hover:underline"
                  >
                    info@pieperballenberger.de
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl text-foreground">So finden Sie uns</h3>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p className="font-medium text-foreground">Architekturbüro Pieper-Ballenberger</p>
                <p>Hamelstraße 16</p>
                <p>61350 Bad Homburg</p>
              </div>
              <p className="mt-4 text-muted-foreground">
                Website:{" "}
                <a
                  href="https://www.pieperballenberger.de"
                  className="text-foreground hover:underline"
                >
                  www.pieperballenberger.de
                </a>
              </p>
            </div>
          </div>

          <div className="aspect-square overflow-hidden rounded-lg border border-border/50 bg-muted sm:aspect-[4/3]">
            <iframe
              title="Standort Architekturbüro Pieper-Ballenberger"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40829.84816870661!2d8.606274592590331!3d50.23841738211134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29937e4bca1be930!2sArchitekturb%C3%BCro+Pieper-Ballenberger!5e0!3m2!1sde!2sde!4v1412366269829"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
