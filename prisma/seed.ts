import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { COURSES } from "../src/data/courses";

const prisma = new PrismaClient();

const DAY = 1000 * 60 * 60 * 24;
const daysFromNow = (n: number) => new Date(Date.now() + n * DAY);

async function main() {
  console.log("🌱  Seed in corso…");

  // — Reset (ordine: figli → padri) —
  await prisma.communication.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.courseMembership.deleteMany();
  await prisma.enrollmentRequest.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

  // — Corsi —
  for (const c of COURSES) {
    await prisma.course.create({
      data: {
        slug: c.slug,
        title: c.title,
        category: c.category,
        level: c.level,
        ageGroup: c.ageGroup,
        teacher: c.teacher,
        schedule: c.schedule,
        description: c.description,
        highlight: c.highlight,
        order: c.order,
        active: true,
      },
    });
  }
  const courses = await prisma.course.findMany();
  const courseBySlug = (slug: string) => courses.find((c) => c.slug === slug)!;

  // — Admin —  (accesso: admin / admin)
  await prisma.user.create({
    data: {
      email: "admin",
      passwordHash: await bcrypt.hash("admin", 10),
      firstName: "Segreteria",
      lastName: "Khaybullova",
      role: "ADMIN",
    },
  });

  // — Clienti demo —
  const clientHash = await bcrypt.hash("demo123", 10);

  const mario = await prisma.user.create({
    data: {
      email: "mario.rossi@email.it",
      passwordHash: clientHash,
      firstName: "Mario",
      lastName: "Rossi",
      phone: "+39 333 1234567",
      birthDate: new Date("2012-04-18"),
      role: "CLIENT",
      memberships: {
        create: [
          { courseId: courseBySlug("danza-classica-base").id },
          { courseId: courseBySlug("moderno").id },
        ],
      },
      subscriptions: {
        create: {
          plan: "Trimestrale",
          startDate: daysFromNow(-81),
          endDate: daysFromNow(9), // in scadenza
        },
      },
    },
  });

  const giulia = await prisma.user.create({
    data: {
      email: "giulia.bianchi@email.it",
      passwordHash: clientHash,
      firstName: "Giulia",
      lastName: "Bianchi",
      phone: "+39 347 9988776",
      birthDate: new Date("2008-09-02"),
      role: "CLIENT",
      memberships: {
        create: [{ courseId: courseBySlug("danza-classica-avanzato").id }],
      },
      subscriptions: {
        create: {
          plan: "Annuale",
          startDate: daysFromNow(-120),
          endDate: daysFromNow(245), // attivo
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "luca.verdi@email.it",
      passwordHash: clientHash,
      firstName: "Luca",
      lastName: "Verdi",
      phone: "+39 320 4455667",
      birthDate: new Date("2010-01-26"),
      role: "CLIENT",
      memberships: {
        create: [{ courseId: courseBySlug("hip-hop").id }],
      },
      subscriptions: {
        create: {
          plan: "Mensile",
          startDate: daysFromNow(-35),
          endDate: daysFromNow(-5), // scaduto
        },
      },
    },
  });

  // — Comunicazioni —
  await prisma.communication.create({
    data: {
      userId: null, // avviso generale per tutti
      title: "Saggio di fine anno — Teatro comunale",
      body: "Sono aperte le prove generali per il saggio di fine anno. Trovate il calendario completo affisso in segreteria. Vi aspettiamo numerosi sul palco!",
    },
  });
  await prisma.communication.create({
    data: {
      userId: mario.id,
      title: "Promemoria rinnovo abbonamento",
      body: "Ciao Mario, il tuo abbonamento trimestrale è in scadenza. Passa in segreteria per il rinnovo e non perdere nemmeno una lezione.",
    },
  });
  await prisma.communication.create({
    data: {
      userId: giulia.id,
      title: "Convocazione per il concorso di Palermo",
      body: "Complimenti Giulia! Sei stata selezionata per rappresentare la scuola al concorso di danza di Palermo. Dettagli a lezione.",
    },
  });

  // — Richieste di iscrizione (dal sito) —
  await prisma.enrollmentRequest.create({
    data: {
      firstName: "Sofia",
      lastName: "Greco",
      email: "sofia.greco@email.it",
      phone: "+39 339 1122334",
      birthDate: "2015-06-30",
      courseName: "Predanza",
      message: "Mia figlia ha 4 anni e vorrebbe provare. Quali sono gli orari?",
      privacy: true,
      status: "NUOVA",
    },
  });
  await prisma.enrollmentRequest.create({
    data: {
      firstName: "Antonio",
      lastName: "Russo",
      email: "antonio.russo@email.it",
      phone: "+39 348 5566778",
      courseName: "Danza Classica per Adulti",
      message: "Sono un principiante assoluto, è un problema?",
      privacy: true,
      status: "NUOVA",
    },
  });

  console.log("✅  Seed completato.");
  console.log("    Admin   →  admin  /  admin");
  console.log("    Cliente →  mario.rossi@email.it  /  demo123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
