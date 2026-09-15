// Foto REALI della scuola (saggi e spettacoli), estratte dal materiale
// originale e salvate in /public/images/scuola.
// SELEZIONE PULITA: solo foto luminose e nitide, senza watermark, senza
// immagini generate dall'IA, senza screenshot o adesivi.

export const photo = (n: number) =>
  `/images/scuola/foto-${String(n).padStart(2, "0")}.jpg`;

// Foto dedicate alla galleria (file g-NNN.jpg, numerazione del pool originale).
const galleryPhoto = (n: number) =>
  `/images/scuola/g-${String(n).padStart(3, "0")}.jpg`;

// Saggio in teatro — fotografie ufficiali di Giuseppe Mazzola. Sono le immagini
// di qualità più alta che abbiamo: luci di scena, costumi e momenti veri.
// Il watermark del fotografo resta visibile: è il suo credito, non un difetto.
export const SAGGIO = {
  babyTutu: "/images/scuola/saggio-baby-tutu.jpg",
  flamencoDuo: "/images/scuola/saggio-flamenco-duo.jpg",
  scenaBlu: "/images/scuola/saggio-scena-blu.jpg",
  modernoBlu: "/images/scuola/saggio-moderno-blu.jpg",
  punteTrio: "/images/scuola/saggio-punte-trio.jpg",
  contemporaneaAssolo: "/images/scuola/saggio-contemporanea-assolo.jpg",
  classicaPunte: "/images/scuola/saggio-classica-punte.jpg",
  classicaTutuViola: "/images/scuola/saggio-classica-tutu-viola.jpg",
  ventagliBlu: "/images/scuola/saggio-ventagli-blu.jpg",
  finaleLogo: "/images/scuola/saggio-finale-logo.jpg",
} as const;

export const PHOTO_CREDIT = "Giuseppe Mazzola Photography";

export const PHOTOS = {
  hero: photo(30), // gruppo lilla coi cuori di fiori — foto reale HD, luminosa
  founder: photo(3), // assolo classico romantico — tradizione russa
  method: photo(11), // dettaglio in studio
  saluto: SAGGIO.finaleLogo, // saluto finale sotto il logo della scuola
};

// Sequenza della galleria scorrevole — 33 foto reali, pulite e VISIVAMENTE
// DISTINTE: selezionate da tutte le ~505 foto del pool, scartando IA, auguri,
// screenshot, watermark grossi e i doppioni di scena (es. niente due flamenco
// rossi o due foto della stessa lezione). Colori e soggetti alternati.
// Le foto del saggio (Mazzola) aprono e punteggiano entrambe le righe, così si
// vedono subito senza restare confinate in coda.
// Le due righe non hanno foto in comune: su qualunque monitor non si rivede mai
// la stessa foto.
export const GALLERY_PHOTOS = [
  // riga A (17 foto)
  SAGGIO.ventagliBlu,
  SAGGIO.classicaPunte,
  galleryPhoto(24),
  SAGGIO.flamencoDuo,
  galleryPhoto(9),
  SAGGIO.punteTrio,
  galleryPhoto(477),
  galleryPhoto(23),
  SAGGIO.babyTutu,
  galleryPhoto(365),
  galleryPhoto(17),
  galleryPhoto(415),
  galleryPhoto(25),
  galleryPhoto(437),
  galleryPhoto(20),
  galleryPhoto(434),
  galleryPhoto(39),
  // riga B (16 foto)
  SAGGIO.finaleLogo,
  galleryPhoto(264),
  SAGGIO.contemporaneaAssolo,
  galleryPhoto(425),
  galleryPhoto(48),
  SAGGIO.classicaTutuViola,
  galleryPhoto(464),
  galleryPhoto(428),
  SAGGIO.modernoBlu,
  galleryPhoto(141),
  galleryPhoto(225),
  SAGGIO.scenaBlu,
  galleryPhoto(210),
  galleryPhoto(467),
  galleryPhoto(44),
  galleryPhoto(26),
];
