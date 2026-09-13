import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — Architekturbüro Pieper-Ballenberger" },
      {
        name: "description",
        content: "Datenschutzerklärung des Architekturbüros Pieper-Ballenberger in Bad Homburg.",
      },
      {
        property: "og:title",
        content: "Datenschutzerklärung — Architekturbüro Pieper-Ballenberger",
      },
      {
        property: "og:description",
        content: "Datenschutzerklärung des Architekturbüros Pieper-Ballenberger in Bad Homburg.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/datenschutz" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
      >
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 font-heading text-3xl text-foreground sm:text-4xl">
        Datenschutzerklärung
      </h1>

      <div className="mt-10 space-y-10 text-muted-foreground">
        <section>
          <h2 className="font-heading text-xl text-foreground">Datenschutz auf einen Blick</h2>
          <h3 className="mt-4 font-heading text-lg text-foreground">Allgemeine Hinweise</h3>
          <p className="mt-3">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">Datenerfassung auf unserer Website</h3>
          <p className="mt-3">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          </p>
          <p className="mt-3">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
          <p className="mt-3">
            <strong>Wie erfassen wir Ihre Daten?</strong>
          </p>
          <p className="mt-3">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="mt-3">
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
            Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
            des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere
            Website betreten.
          </p>
          <p className="mt-3">
            <strong>Wofür nutzen wir Ihre Daten?</strong>
          </p>
          <p className="mt-3">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          <p className="mt-3">
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
          </p>
          <p className="mt-3">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
            Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
            die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu
            weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum
            angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu.
          </p>
          <p className="mt-3">
            Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der
            Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">
            Analyse-Tools und Tools von Drittanbietern
          </h3>
          <p className="mt-3">
            Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
            geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres
            Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
            zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die
            Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in
            der folgenden Datenschutzerklärung.
          </p>
          <p className="mt-3">
            Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir
            Sie in dieser Datenschutzerklärung informieren.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">
            Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <h3 className="mt-4 font-heading text-lg text-foreground">Datenschutz</h3>
          <p className="mt-3">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="mt-3">
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
            Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
            sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>
          <p className="mt-3">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
            Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">Hinweis zur verantwortlichen Stelle</h3>
          <p className="mt-3">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p className="mt-3">
            Architekturbüro Pieper-Ballenberger
            <br />
            Hamelstraße 16
            <br />
            61350 Bad Homburg
            <br />
            Telefon: 06172 / 918007
            <br />
            E-Mail:{" "}
            <a href="mailto:info@pieperballenberger.de" className="text-[#1B68] hover:underline">
              info@pieperballenberger.de
            </a>
          </p>
          <p className="mt-3">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
            gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
            Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </h3>
          <p className="mt-3">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
            möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht
            eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung
            (Art. 21 DSGVO)
          </h3>
          <p className="mt-3">
            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
            haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
            ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen;
            dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige
            Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser
            Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
            personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
            schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
            Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
          </p>
          <p className="mt-3">
            Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so
            haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
            personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
            das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
            widersprechen, werden wir Ihre personenbezogenen Daten nicht mehr für diese Zwecke
            verwenden (Widerspruch nach Art. 21 Abs. 2 DSGVO).
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">
            Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </h3>
          <p className="mt-3">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
            einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
            Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
            Beschwerderecht besteht unbeschadet anderweitiger verwaltungsgerichtlicher oder
            gerichtlicher Rechtsbehelfe.
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">
            Recht auf Datenübertragbarkeit
          </h3>
          <p className="mt-3">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
            eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
            gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte
            Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
            soweit es technisch machbar ist.
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">
            SSL- bzw. TLS-Verschlüsselung
          </h3>
          <p className="mt-3">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
            senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
            daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem
            Schloss-Symbol in Ihrer Browserzeile.
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">
            Auskunft, Sperrung, Löschung und Berichtigung
          </h3>
          <p className="mt-3">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
            Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
            Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum
            angegebenen Adresse an uns wenden.
          </p>

          <h3 className="mt-6 font-heading text-lg text-foreground">
            Recht auf Einschränkung der Verarbeitung
          </h3>
          <p className="mt-3">
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse
            an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
              bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der
              Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht,
              können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
              Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie
              das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
              Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht
              feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
          </ul>
          <p className="mt-3">
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen
            diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
            Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
            wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
            verarbeitet werden.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Cookies und lokale Speicherung</h2>
          <p className="mt-3">
            Diese Website setzt keine Tracking- oder Werbe-Cookies ein. Für den Betrieb der Seite
            werden ausschließlich technisch notwendige Daten verarbeitet.
          </p>
          <p className="mt-3">
            Wenn Sie im Einwilligungs-Hinweis eine Auswahl treffen, speichern wir diese Entscheidung
            im lokalen Speicher (Local Storage) Ihres Browsers unter dem Schlüssel
            <em> pb-consent</em>. Damit wird der Hinweis bei einem erneuten Besuch nicht wiederholt
            angezeigt. Es handelt sich um eine rein lokale Speicherung ohne Übertragung an uns oder
            Dritte. Sie können diese Angabe jederzeit über die Einstellungen bzw. den Verlauf Ihres
            Browsers löschen und Ihre Einwilligung damit widerrufen. Rechtsgrundlage ist § 25 Abs. 2
            TDDDG (technisch notwendige Speicherung) bzw. Art. 6 Abs. 1 lit. a DSGVO für die
            gespeicherte Einwilligung.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Google Maps</h2>
          <p className="mt-3">
            Auf dieser Website binden wir eine Karte des Dienstes Google Maps ein. Anbieter ist die
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; eine
            Datenübermittlung in die USA an die Google LLC kann nicht ausgeschlossen werden.
          </p>
          <p className="mt-3">
            Die Karte wird <strong>nicht automatisch geladen</strong>. Stattdessen sehen Sie
            zunächst einen Platzhalter. Erst wenn Sie die Karte aktiv laden oder der Einbindung
            externer Inhalte zustimmen, wird eine Verbindung zu den Servern von Google hergestellt.
            Dabei können unter anderem Ihre IP-Adresse, Informationen zu Ihrem Browser und
            Betriebssystem sowie die aufgerufene Seite an Google übertragen und dort gespeichert
            werden. Auf diese Datenverarbeitung haben wir keinen Einfluss.
          </p>
          <p className="mt-3">
            Rechtsgrundlage der Verarbeitung ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO
            und § 25 Abs. 1 TDDDG. Die Einwilligung ist freiwillig und kann jederzeit mit Wirkung
            für die Zukunft widerrufen werden, indem Sie den lokalen Speicher Ihres Browsers für
            diese Website löschen.
          </p>
          <p className="mt-3">
            Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
            Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              className="text-foreground hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Hosting</h2>
          <p className="mt-3">
            Diese Website wird bei der STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin,
            gehostet. Die Domain ist bei Strato registriert und gelistet. Wenn Sie unsere Website
            besuchen, verarbeitet Strato als Hosting-Dienstleister in unserem Auftrag
            verschiedene Daten, darunter IP-Adressen, Zugriffszeitpunkte, übertragene Datenmengen,
            Browsertyp und Betriebssystem (Server-Logfiles).
          </p>
          <p className="mt-3">
            Die Verarbeitung erfolgt zum Zweck des sicheren, stabilen und effizienten Betriebs
            unseres Online-Angebots auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs.
            1 lit. f DSGVO. Mit dem Anbieter besteht ein Vertrag über Auftragsverarbeitung gemäß
            Art. 28 DSGVO.
          </p>
          <p className="mt-3">
            Weitere Informationen:{" "}
            <a
              href="https://www.strato.de/datenschutz/"
              className="text-foreground hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              strato.de/datenschutz
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl text-foreground">Google Fonts</h2>
          <p className="mt-3">
            Für eine einheitliche Darstellung von Schriftarten nutzt diese Seite Schriftarten des
            Anbieters Google. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten
            von den Servern von Google, wodurch Ihre IP-Adresse an Google übermittelt werden kann.
            Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an einer
            einheitlichen und ansprechenden Darstellung unseres Online-Angebots gemäß Art. 6 Abs. 1
            lit. f DSGVO.
          </p>
        </section>
      </div>
    </div>
  );
}
