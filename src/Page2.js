// src/Page2.js
import React from 'react';

function Page2({ setCurrentPage }) {
  return (
    <div className="title-post animate">
      <button className="back-button animate" onClick={() => setCurrentPage('page1')}>
      ⭠ TORNA INDIETRO
      </button>
      <h1 className="animate">Tragedia alla Winterhaven: 17enne trovata morta nel Lago Crystal</h1>

      <h2 className="animate">Omicidio o suicidio?</h2>

      <div className="post-box animate">
        <p>
          Un evento scioccante ha colpito la comunità di Wraithmoor. Il corpo della 17enne Grace Morris, studentessa della Winterhaven High School, è stato ritrovato nel Lago Crystal, situato nelle profondità della Foresta di Silverleaf, a poca distanza dalla scuola che frequentava. Il macabro ritrovamento ha lasciato la comunità sconvolta, mentre le autorità locali affrontano il difficile compito di scoprire cosa sia accaduto alla giovane ragazza.
        </p>
        <p>
          Le circostanze della morte di Grace restano avvolte nel mistero. Gli investigatori stanno seguendo due principali ipotesi: alcuni ritengono che possa trattarsi di un tragico suicidio, mentre altri sospettano che si sia trattato di un omicidio.
        </p>
        <p>
          Grace, descritta da amici e familiari come una giovane, brillante e promettente ragazza, era stata vista per l’ultima volta la sera prima della sua improvvisa scomparsa. Il lago in cui è stato trovato il suo corpo è noto per la sua bellezza, ma quell’atmosfera pacifica ora appare cupa, mentre gli investigatori setacciano l’area alla ricerca di indizi che possano spiegare come Grace sia finita lì.
        </p>
        <p>
          Al momento, la causa del decesso non è stata ufficialmente determinata e le autorità continuano a ricostruire i dettagli del caso. Per una comunità già provata dalla perdita di una giovane ragazza così amata, i dubbi persistono e le risposte sembrano lontane. Le indagini sono ancora in corso e la polizia locale esorta chiunque abbia informazioni a farsi avanti.
        </p>
        <h2>⚠️ RISERVATO – DIVULGAZIONE UNICAMENTE A PERSONALE AUTORIZZATO. ⚠️</h2>
      </div>
      <div className="title-post animate">
      <h1 className="animate">FASCICOLO RISERVATO – DIPARTIMENTO DI POLIZIA</h1>
      <h2 className="animate">Sezione Indagini Scolastiche e del Benessere Studentesco

      Oggetto: Indagine su un elevato tasso di suicidi tra gli studenti – Winterhaven High School
      Data Inizio Indagine: [REDACTED]</h2>
      </div>
      <div className="post-box animate">
        <p><b>Premessa:</b></p>
        <p>
          In seguito a un preoccupante aumento dei casi di suicidio tra gli studenti della Winterhaven High School, sono state raccolte numerose segnalazioni riguardanti possibili abusi di potere da parte di alcuni insegnanti e un diffuso clima di bullismo.
        </p>
        
        <p><b>Elementi in esame:</b></p>
        <ul>
          <li><strong>Abusi di potere:</strong> Testimonianze e segnalazioni indicano comportamenti autoritari e inappropriati da parte del corpo docente.</li>
          <li><strong>Bullismo:</strong> Denunce diffuse evidenziano episodi sistemici di intimidazione e prepotenza che hanno contribuito al deterioramento del clima scolastico.</li>
        </ul>

        <p><b>Metodologia:</b></p>
        <ul>
          <li>Raccolta e analisi di testimonianze riservate.</li>
          <li>Esame di registrazioni interne e protocolli disciplinari.</li>
          <li>Collaborazione con esperti per valutare l’impatto psicologico sui minori.</li>
        </ul>

        <p><b>Prossimi Passi:</b></p>
        <ul>
          <li>Approfondimento delle denunce tramite interviste mirate.</li>
          <li>Verifica degli adempimenti normativi relativi alla tutela degli studenti.</li>
          <li>Coordinamento con enti specializzati per interventi preventivi.</li>
        </ul>
        <h2>⚠️ RISERVATO – DIVULGAZIONE LIMITATA AL PERSONALE AUTORIZZATO. ⚠️</h2>
      </div>
    </div>
  );
}

export default Page2;
