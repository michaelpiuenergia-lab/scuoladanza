import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GoldDivider } from "@/components/ui/Ornament";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description:
    "Informativa sul trattamento dei dati personali (Regolamento UE 2016/679 - GDPR) e Cookie Policy del Centro Danza Khaybullova di Bagheria.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "Giugno 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Informazioni legali"
        title={
          <>
            Privacy <span className="text-gold-gradient">&amp; Cookie</span>
          </>
        }
        subtitle="Come trattiamo i tuoi dati personali, nel rispetto del Regolamento UE 2016/679 (GDPR) e della normativa italiana sulla privacy."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy & Cookie" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <article className="panel mx-auto max-w-3xl p-7 sm:p-11">
            <p className="text-sm u-mute">Ultimo aggiornamento: {UPDATED}</p>

            {/* 1 — Titolare */}
            <Block n="1" title="Titolare del trattamento">
              <p className="u-body">
                Il Titolare del trattamento è{" "}
                <strong className="u-ink">{SITE.legalName}</strong> — {SITE.fullName},
                con sede in {SITE.address.full}.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm u-body">
                <li>Codice Fiscale: <strong className="u-ink">{SITE.cf}</strong></li>
                <li>Partita IVA: <strong className="u-ink">{SITE.piva}</strong></li>
                <li>
                  Email:{" "}
                  <a className="u-gold underline-offset-2 hover:underline" href={SITE.emailHref}>
                    {SITE.email}
                  </a>
                </li>
                <li>
                  Telefono:{" "}
                  <a className="u-gold underline-offset-2 hover:underline" href={SITE.phoneHref}>
                    {SITE.phone}
                  </a>
                </li>
              </ul>
            </Block>

            {/* 2 — Dati raccolti */}
            <Block n="2" title="Quali dati raccogliamo">
              <p className="u-body">
                Trattiamo i dati personali che ci fornisci volontariamente compilando il
                modulo di iscrizione o di contatto presente sul sito:
              </p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 u-body">
                <li>nome e cognome;</li>
                <li>indirizzo email e numero di telefono;</li>
                <li>data di nascita (facoltativa);</li>
                <li>corso di interesse ed eventuali note/messaggi che decidi di inviarci.</li>
              </ul>
              <p className="mt-4 u-body">
                Per gli allievi <strong className="u-ink">minorenni</strong>, i dati sono
                forniti e autorizzati da chi esercita la responsabilità genitoriale. Il sito
                utilizza inoltre cookie tecnici (vedi la sezione Cookie Policy).
              </p>
            </Block>

            {/* 3 — Finalità e base giuridica */}
            <Block n="3" title="Finalità e base giuridica del trattamento">
              <p className="u-body">I tuoi dati sono trattati per:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 u-body">
                <li>
                  rispondere alle tue richieste e ricontattarti per l&apos;iscrizione o la
                  lezione di prova — base giuridica: misure precontrattuali e tuo consenso
                  (art. 6, par. 1, lett. b e a, GDPR);
                </li>
                <li>
                  gestire il rapporto associativo e l&apos;iscrizione ai corsi — esecuzione
                  del contratto (art. 6, par. 1, lett. b);
                </li>
                <li>
                  adempiere a obblighi di legge, anche fiscali e amministrativi — obbligo
                  legale (art. 6, par. 1, lett. c);
                </li>
                <li>
                  inviarti comunicazioni della scuola (avvisi, saggi, eventi) — tuo consenso
                  o legittimo interesse.
                </li>
              </ul>
            </Block>

            {/* 4 — Conservazione */}
            <Block n="4" title="Modalità e tempi di conservazione">
              <p className="u-body">
                I dati sono trattati con strumenti informatici e cartacei, adottando misure
                di sicurezza adeguate a proteggerli. Sono conservati per il tempo strettamente
                necessario alle finalità indicate e agli obblighi di legge, dopodiché vengono
                cancellati o resi anonimi. Le richieste non seguite da iscrizione sono
                conservate per un periodo limitato e poi eliminate.
              </p>
            </Block>

            {/* 5 — Destinatari */}
            <Block n="5" title="Comunicazione dei dati e destinatari">
              <p className="u-body">
                I tuoi dati non vengono diffusi né venduti. Possono essere trattati, per nostro
                conto, da fornitori di servizi tecnici (hosting del sito e database) nominati
                <strong className="u-ink"> responsabili del trattamento</strong>, con server
                situati nell&apos;Unione Europea. Non effettuiamo profilazione né processi
                decisionali automatizzati, e non trasferiamo i dati al di fuori dell&apos;UE.
              </p>
            </Block>

            {/* 6 — Minori */}
            <Block n="6" title="Dati dei minori">
              <p className="u-body">
                Le nostre attività coinvolgono allievi minorenni. I relativi dati personali
                sono trattati esclusivamente sulla base del consenso e su iniziativa di chi
                esercita la responsabilità genitoriale, per le sole finalità connesse alla
                partecipazione ai corsi.
              </p>
            </Block>

            {/* 7 — Diritti */}
            <Block n="7" title="I tuoi diritti">
              <p className="u-body">
                In qualità di interessato puoi esercitare in qualsiasi momento i diritti
                previsti dagli artt. 15-22 del GDPR:
              </p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 u-body">
                <li>accesso ai tuoi dati e loro rettifica o cancellazione;</li>
                <li>limitazione od opposizione al trattamento;</li>
                <li>portabilità dei dati;</li>
                <li>revoca del consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente.</li>
              </ul>
              <p className="mt-4 u-body">
                Per esercitarli scrivi a{" "}
                <a className="u-gold underline-offset-2 hover:underline" href={SITE.emailHref}>
                  {SITE.email}
                </a>
                . Hai inoltre diritto di proporre reclamo all&apos;Autorità Garante per la
                Protezione dei Dati Personali (
                <a
                  className="u-gold underline-offset-2 hover:underline"
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  garanteprivacy.it
                </a>
                ).
              </p>
            </Block>

            <GoldDivider className="my-10" />

            {/* 8 — Cookie Policy */}
            <Block n="8" title="Cookie Policy">
              <p className="u-body">
                I cookie sono piccoli file di testo che i siti salvano sul dispositivo durante
                la navigazione. Questo sito utilizza{" "}
                <strong className="u-ink">esclusivamente cookie tecnici</strong>, necessari al
                corretto funzionamento (ad esempio il cookie di sessione che consente
                l&apos;accesso all&apos;area riservata).
              </p>
              <p className="mt-4 u-body">
                Non utilizziamo cookie di profilazione o di marketing, né strumenti di
                tracciamento o analisi di terze parti. I cookie tecnici, ai sensi della
                normativa vigente, <strong className="u-ink">non richiedono il tuo consenso</strong>.
                Puoi comunque gestirli o eliminarli in qualsiasi momento dalle impostazioni del
                tuo browser.
              </p>
            </Block>

            {/* 9 — Aggiornamenti */}
            <Block n="9" title="Aggiornamenti dell'informativa">
              <p className="u-body">
                La presente informativa può essere aggiornata nel tempo. Eventuali modifiche
                saranno pubblicate su questa pagina, con indicazione della data di ultimo
                aggiornamento.
              </p>
            </Block>
          </article>
        </div>
      </section>
    </>
  );
}

function Block({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-9 border-t pt-9 first:mt-7">
      <h2 className="flex items-baseline gap-3 font-display text-xl u-ink sm:text-2xl">
        <span className="text-base text-gold-deep">{n}.</span>
        {title}
      </h2>
      <div className="mt-4 space-y-1 leading-relaxed">{children}</div>
    </section>
  );
}
