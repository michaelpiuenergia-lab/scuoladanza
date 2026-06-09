// Foto REALI della scuola (saggi e spettacoli), estratte dal materiale
// originale e salvate in /public/images/scuola.
// SELEZIONE PULITA: solo foto luminose e nitide, senza watermark, senza
// immagini generate dall'IA, senza screenshot o adesivi.

export const photo = (n: number) =>
  `/images/scuola/foto-${String(n).padStart(2, "0")}.jpg`;

// Foto dedicate alla galleria (file g-NNN.jpg, numerazione del pool originale).
const galleryPhoto = (n: number) =>
  `/images/scuola/g-${String(n).padStart(3, "0")}.jpg`;

export const PHOTOS = {
  hero: photo(30), // gruppo lilla coi cuori di fiori — foto reale HD, luminosa
  founder: photo(3), // assolo classico romantico — tradizione russa
  method: photo(11), // dettaglio in studio
};

// Sequenza della galleria scorrevole — 23 foto reali, pulite e VISIVAMENTE
// DISTINTE: selezionate da tutte le ~505 foto del pool, scartando IA, auguri,
// screenshot, watermark grossi e i doppioni di scena (es. niente due flamenco
// rossi o due foto della stessa lezione). Colori e soggetti alternati.
// Le due righe non hanno foto in comune e ogni riga è lunga ~3700px: su
// qualunque monitor non si rivede mai la stessa foto.
export const GALLERY_PHOTOS = [
  // riga A
  24, 9, 477, 23, 365, 17, 415, 25, 437, 20, 434, 39,
  // riga B
  264, 425, 48, 464, 428, 141, 225, 210, 467, 44, 26,
].map(galleryPhoto);
