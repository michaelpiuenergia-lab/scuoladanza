import { SITE } from "@/data/site";
import { COURSES } from "@/data/courses";

// Dati strutturati per i motori di ricerca (scuola di danza locale).
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["DanceSchool", "LocalBusiness"],
    name: SITE.legalName,
    alternateName: SITE.name,
    description: SITE.description,
    url: "https://www.khaybullova.it",
    telephone: SITE.phone,
    email: SITE.email,
    image: "https://www.khaybullova.it/images/scuola/foto-01.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.zip,
      addressRegion: SITE.address.province,
      addressCountry: "IT",
    },
    areaServed: ["Bagheria", "Palermo", "Sicilia"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "15:30",
        closes: "20:30",
      },
    ],
    sameAs: [SITE.social.instagram, SITE.social.facebook],
    knowsAbout: ["Danza classica", "Metodo Vaganova", "Danza moderna", "Balletto"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Corsi di danza",
      itemListElement: COURSES.map((c) => ({
        "@type": "Course",
        name: c.title,
        description: c.short,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
