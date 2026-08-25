import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Architekturbüro Pieper-Ballenberger" },
      {
        name: "description",
        content: "Impressum des Architekturbüros Pieper-Ballenberger in Bad Homburg.",
      },
      {
        property: "og:title",
        content: "Impressum — Architekturbüro Pieper-Ballenberger",
      },
      {
        property: "og:description",
        content: "Impressum des Architekturbüros Pieper-Ballenberger in Bad Homburg.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/impressum" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 font-heading text-3xl text-foreground sm:text-4xl">Impressum</h1>

      <div className="mt-10 space-y-10 text-muted-foreground">
        <section>
          <h2 className="font-heading text-xl text-foreground">Kontakt</h2>
          <p className="mt-3">
            Architekturbüro Pieper-Ballenberger
            <br />
            Inge Pieper-Ballenberger
            <br />
            Hamelstraße 16
            <br />
            61350 Bad Homburg
          </p>
          <p className="mt-3">
            Telefon: 06172 / 918007
            <br />
            Fax: 06172 / 918006
            <br />
            E-Mail:{" "}
            <a href="mailto:info@pieperballenberger.de" className="text-foreground hover:underline">
              info@pieperballenberger.de
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.pieperballenberger.de"
              className="text-foreground hover:underline"
            >
              www.pieperballenberger.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Umsatzsteuer</h2>
          <p className="mt-3">
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 198 955 583
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Angaben gemäß §5 TMG</h2>
          <p className="mt-3">
            Jonas Ballenberger
            <br />
            Hamelstraße 16
            <br />
            61350 Bad Homburg
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Berufsrechtliche Hinweise</h2>
          <p className="mt-3">
            <strong>Berufsbezeichnung:</strong> Dipl.-Ing. Architekt
            <br />
            Die Berufsbezeichnung Architekt wurde in der Bundesrepublik Deutschland verliehen.
          </p>
          <p className="mt-3">
            <strong>Zuständige Kammer:</strong>{" "}
            <a href="https://www.akh.de/" className="text-foreground hover:underline">
              Architekten- und Stadtplanerkammer Hessen
            </a>
          </p>
          <p className="mt-3">
            <strong>Berufsrechtliche Regelungen:</strong>{" "}
            <a
              href="https://www.akh.de/service/recht/gesetzliche-grundlagen-und-andere-regelungen/"
              className="text-foreground hover:underline"
            >
              Gesetzliche Grundlagen und andere Regelungen der AK Hessen
            </a>
          </p>
          <p className="mt-3">
            Maßgeblich ist insbesondere das Hessische Architekten- und Stadtplanergesetz (HASG):{" "}
            <a
              href="https://www.akh.de/fileadmin/Beratung/Recht/Gesetze/HASG/HASG.pdf?_=1768406716"
              className="text-foreground hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              HASG als PDF
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Berufshaftpflichtversicherung</h2>
          <p className="mt-3">
            <strong>Name und Sitz des Versicherers:</strong>
            <br />
            AIA AG
            <br />
            Kaistraße 13
            <br />
            40221 Düsseldorf
          </p>
          <p className="mt-3">
            <strong>Geltungsraum der Versicherung:</strong> Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Streitschlichtung</h2>
          <p className="mt-3">
            Wir sind stets bestrebt, etwaige Meinungsverschiedenheiten mit unseren Bauherren
            einvernehmlich beizulegen. Daher nehmen wir in geeigneten Fällen und vorbehaltlich der
            gegebenenfalls notwendigen Zustimmung unseres Haftpflichtversicherers auch an einem
            Schlichtungsverfahren vor dem sachkundig besetzten Schieds- und Schlichtungsausschuss
            der Architekten- und Stadtplanerkammer Hessen, Bierstadter Str. 2, 65189 Wiesbaden,
            nicht jedoch vor einer Verbraucherschlichtungsstelle im Sinne des VSBG teil.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Haftung für Inhalte</h2>
          <p className="mt-3">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p className="mt-3">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Haftung für Links</h2>
          <p className="mt-3">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="mt-3">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Urheberrecht</h2>
          <p className="mt-3">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="mt-3">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
          <p className="mt-3">
            Quelle:{" "}
            <a href="https://www.e-recht24.de" className="text-foreground hover:underline">
              e-recht24.de
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
