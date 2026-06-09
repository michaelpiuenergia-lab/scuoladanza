// Identità della scuola e dati di contatto — DATI REALI estratti dal sito
// ufficiale www.khaybullova.it e dalle pagine social.

export const SITE = {
  name: "Khaybullova",
  fullName: "Centro Danza Khaybullova",
  legalName: "A.C.R.S.D. Khaybullova",
  kicker: "Centro Danza · Bagheria",
  tagline: "Centro di Danza Classica e Moderna",
  slogan: "La danza, passione dell'anima, la nostra passione.",
  claim: "Danza classica accademica con insegnante russa, metodo Vaganova.",
  description:
    "Centro Danza Khaybullova a Bagheria: danza classica accademica con insegnante russa secondo il metodo Vaganova, moderno, contemporaneo, hip hop e molto altro. Dai più piccoli agli adulti.",

  address: {
    street: "Via Papa Giovanni XXIII, 26/2",
    city: "Bagheria",
    zip: "90011",
    province: "PA",
    region: "Sicilia",
    full: "Via Papa Giovanni XXIII, 26/2 — 90011 Bagheria (PA)",
  },

  phone: "+39 377 104 3456",
  phoneHref: "tel:+393771043456",
  email: "acrsdkhaybullova@libero.it",
  emailHref: "mailto:acrsdkhaybullova@libero.it",

  whatsapp: "393771043456",
  whatsappHref: "https://wa.me/393771043456",

  mapEmbed:
    "https://www.google.com/maps?q=Via+Papa+Giovanni+XXIII+26+Bagheria&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Via+Papa+Giovanni+XXIII+26+Bagheria",

  hours: [
    { day: "Lunedì – Venerdì", time: "15:30 – 20:30" },
    { day: "Sabato e Domenica", time: "Chiuso" },
  ],

  social: {
    instagram: "https://instagram.com/khaybullova_centro_danza",
    facebook: "https://www.facebook.com/282121205220944",
  },
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "La Scuola", href: "/chi-siamo" },
  { label: "Corsi", href: "/corsi" },
  { label: "Iscrizione", href: "/iscrizione" },
  { label: "Contatti", href: "/contatti" },
];
