// Catalogo corsi — usato sia dalle pagine pubbliche sia per il seed del database.
// CONTENUTI REALI del Centro Danza Khaybullova (Bagheria): corsi, insegnanti e
// discipline verificati dal sito ufficiale. Le descrizioni e le "storie" di ogni
// disciplina sono documentate (metodo Vaganova, pas de deux, heels, krav maga…).
// NB: gli orari delle singole lezioni si concordano in segreteria — non inventati.

export type Accent = "gold" | "terracotta" | "majolica" | "sun";

export type Course = {
  slug: string;
  title: string;
  category: string;
  level: string;
  ageGroup: string;
  teacher: string;
  schedule: string;
  short: string;
  description: string;
  highlights: string[];
  story: string[]; // racconto documentato della disciplina (pagina dettaglio)
  learn: string[]; // "cosa si impara"
  image: string;
  accent: Accent;
  icon: string; // nome icona lucide-react
  highlight: boolean; // in evidenza in home
  order: number;
};

// Foto reali della scuola (vedi /public/images/scuola)
const P = (n: number) => `/images/scuola/foto-${String(n).padStart(2, "0")}.jpg`;

// Orario reale della segreteria/scuola (le lezioni si concordano all'iscrizione)
const ORARIO = "Lun – Ven · pomeriggio";

export const COURSES: Course[] = [
  {
    slug: "predanza",
    title: "Predanza",
    category: "Propedeutica",
    level: "Avviamento",
    ageGroup: "3 – 5 anni",
    teacher: "Staff Khaybullova",
    schedule: ORARIO,
    short: "Il primo incontro con la danza, tra gioco, musica e movimento.",
    description:
      "La predanza è il primo, dolce avvicinamento al mondo della danza, pensato per i bambini più piccoli. Attraverso il gioco, le filastrocche e la musica, i piccoli allievi scoprono il proprio corpo, il senso del ritmo e lo spazio che li circonda. Si coltivano coordinazione, ascolto e socialità, gettando con delicatezza i primi semi della passione per il movimento.",
    highlights: [
      "Gioco-danza e musicalità",
      "Coordinazione e socialità",
      "Primo contatto con la sala",
    ],
    story: [
      "La predanza è il primissimo incontro del bambino con il mondo della danza. In questa fascia delicata, dai 3 ai 5 anni, non si insegna ancora una tecnica codificata: si gioca, si canta, si esplora. Attraverso filastrocche, immagini e piccole storie da danzare, i bambini imparano a conoscere il proprio corpo, a muoversi nello spazio e ad ascoltare la musica.",
      "Dietro al gioco c'è un lavoro prezioso: si coltivano coordinazione, senso del ritmo, equilibrio e socialità, ponendo con dolcezza le prime fondamenta del futuro percorso accademico. È un tempo di meraviglia, in cui la sala diventa un giardino e ogni piccolo passo è una scoperta.",
    ],
    learn: [
      "Coordinazione e percezione del proprio corpo",
      "Senso del ritmo e ascolto della musica",
      "Socialità e fiducia nel gruppo",
      "Primo, dolce contatto con la sala di danza",
    ],
    image: P(6),
    accent: "sun",
    icon: "Sparkles",
    highlight: false,
    order: 1,
  },
  {
    slug: "propedeutica",
    title: "Propedeutica alla Danza",
    category: "Propedeutica",
    level: "Preparatorio",
    ageGroup: "6 – 8 anni",
    teacher: "Staff Khaybullova",
    schedule: ORARIO,
    short: "Le fondamenta del corpo e del ritmo prima della tecnica accademica.",
    description:
      "La propedeutica è il percorso preparatorio che conduce i bambini verso lo studio consapevole della danza classica. Si lavora sulla corretta postura, sulla muscolatura, sul senso del ritmo e sulla percezione dello spazio, dotando l'allievo di una giusta e cosciente capacità di movimento. È il ponte naturale che prepara corpo e mente alla disciplina e alla bellezza del metodo Vaganova.",
    highlights: [
      "Postura e consapevolezza corporea",
      "Senso del ritmo e dello spazio",
      "Preparazione al metodo Vaganova",
    ],
    story: [
      "La propedeutica è il ponte che conduce i bambini, dai 6 agli 8 anni, verso lo studio consapevole della danza classica. Qui il gioco lascia spazio a un lavoro più strutturato, sempre adatto all'età: si cura la postura, si rinforza con dolcezza la muscolatura, si affina il senso del ritmo e la percezione dello spazio.",
      "L'obiettivo è dotare l'allievo di una giusta e cosciente capacità di movimento, preparando corpo e mente alla disciplina e alla bellezza del metodo Vaganova. È il momento in cui nasce, consapevole, la passione per la danza.",
    ],
    learn: [
      "Postura corretta e consapevolezza corporea",
      "Rinforzo muscolare graduale e armonico",
      "Senso del ritmo e dello spazio scenico",
      "Preparazione al metodo Vaganova",
    ],
    image: P(10),
    accent: "sun",
    icon: "Flower2",
    highlight: false,
    order: 2,
  },
  {
    slug: "danza-classica-base",
    title: "Danza Classica · Livello Base",
    category: "Classica",
    level: "Base",
    ageGroup: "8 – 11 anni",
    teacher: "Sariya Khaybullova",
    schedule: ORARIO,
    short: "Le prime basi della danza classica con il rigore del metodo Vaganova.",
    description:
      "Il corso base introduce gli allievi allo studio rigoroso e affascinante della danza classica accademica secondo il metodo Vaganova, la celebre scuola russa nata a San Pietroburgo. Sotto la guida di Sariya Khaybullova, insegnante russa, si costruiscono le fondamenta tecniche alla sbarra e al centro: en dehors, posizioni, port de bras e la corretta impostazione di tutto il corpo. Un percorso che unisce disciplina, eleganza e armonia.",
    highlights: [
      "Metodo Vaganova autentico",
      "Lavoro alla sbarra e al centro",
      "Impostazione e port de bras",
    ],
    story: [
      "Il corso base introduce gli allievi allo studio rigoroso e affascinante della danza classica accademica secondo il metodo Vaganova, la celebre scuola nata a San Pietroburgo. Sotto la guida di Sariya Khaybullova, insegnante russa, si costruiscono le fondamenta tecniche: il lavoro alla sbarra, le posizioni dei piedi e delle braccia, l'en dehors, i primi port de bras.",
      "Ogni lezione è un mattone posato con cura. Si impara la corretta impostazione di tutto il corpo, l'allineamento, la disciplina della sala. Disciplina ed eleganza crescono insieme, in un percorso pensato per durare e per condurre, negli anni, fino alle punte e al repertorio.",
    ],
    learn: [
      "Impostazione del corpo secondo il metodo Vaganova",
      "Lavoro alla sbarra e al centro",
      "Posizioni, en dehors e primi port de bras",
      "Disciplina, musicalità ed eleganza",
    ],
    image: P(21),
    accent: "gold",
    icon: "Feather",
    highlight: true,
    order: 3,
  },
  {
    slug: "danza-classica-intermedio",
    title: "Danza Classica · Livello Intermedio",
    category: "Classica",
    level: "Intermedio",
    ageGroup: "11 – 14 anni",
    teacher: "Sariya Khaybullova",
    schedule: ORARIO,
    short: "Verso le punte e il virtuosismo, nel solco della scuola russa.",
    description:
      "Nel livello intermedio lo studio del metodo Vaganova si approfondisce, sviluppando forza, controllo del centro del corpo e qualità espressiva del movimento. Gli allievi affinano la tecnica al centro, i salti e le rotazioni e affrontano gradualmente il lavoro sulle punte. La guida attenta di Sariya Khaybullova accompagna ogni ballerino verso una danza sempre più sicura, fluida e musicale.",
    highlights: [
      "Avvio del lavoro sulle punte",
      "Forza, salti e rotazioni",
      "Espressività e musicalità",
    ],
    story: [
      "Nel livello intermedio lo studio del metodo Vaganova si approfondisce. Acquisite le basi, si sviluppano forza, controllo del centro del corpo e qualità espressiva del movimento. Gli allievi affinano la tecnica al centro, i salti (allegro) e le rotazioni, e affrontano gradualmente il delicato lavoro sulle punte.",
      "È la fase in cui la tecnica comincia a farsi danza. La guida attenta di Sariya Khaybullova accompagna ogni ballerino verso un movimento sempre più sicuro, fluido e musicale, nel rispetto assoluto dei tempi di crescita del corpo.",
    ],
    learn: [
      "Tecnica al centro più articolata",
      "Salti, rotazioni e dinamica",
      "Avvio graduale del lavoro sulle punte",
      "Espressività e musicalità del movimento",
    ],
    image: P(1),
    accent: "gold",
    icon: "Music2",
    highlight: false,
    order: 4,
  },
  {
    slug: "danza-classica-avanzato",
    title: "Danza Classica · Livello Avanzato",
    category: "Avanzato",
    level: "Avanzato",
    ageGroup: "Dai 14 anni",
    teacher: "Sariya Khaybullova",
    schedule: ORARIO,
    short: "Il virtuosismo della punta e dell'interpretazione, ai vertici Vaganova.",
    description:
      "Il livello avanzato rappresenta il culmine del percorso accademico: gli allievi padroneggiano la tecnica delle punte, il grande adagio, i grandi salti e le pirouette con la pulizia e il virtuosismo che distinguono la scuola russa. Sotto la direzione di Sariya Khaybullova si lavora sul repertorio e sull'interpretazione, formando danzatori completi, pronti per lo studio del passo a due e per le sfide di audizioni e concorsi.",
    highlights: [
      "Tecnica avanzata delle punte",
      "Studio del repertorio",
      "Virtuosismo e interpretazione",
    ],
    story: [
      "Il livello avanzato è il culmine del percorso accademico. Gli allievi padroneggiano la tecnica delle punte, il grande adagio, i grandi salti e le pirouette con la pulizia e il virtuosismo che distinguono la scuola russa.",
      "Sotto la direzione di Sariya Khaybullova si lavora sul repertorio dei grandi balletti e sull'interpretazione, perché la tecnica diventi arte. È il livello che forma danzatori completi, pronti per lo studio del passo a due e per le sfide di audizioni e concorsi.",
    ],
    learn: [
      "Tecnica avanzata e completa delle punte",
      "Grande adagio, grandi salti e pirouette",
      "Studio del repertorio classico",
      "Interpretazione e preparazione ai concorsi",
    ],
    image: P(18),
    accent: "gold",
    icon: "Crown",
    highlight: false,
    order: 5,
  },
  {
    slug: "danza-classica-adulti",
    title: "Danza Classica per Adulti",
    category: "Adulti",
    level: "Tutti i livelli",
    ageGroup: "Adulti",
    teacher: "Sariya Khaybullova",
    schedule: ORARIO,
    short: "La bellezza della danza classica, a ogni età e da ogni punto di partenza.",
    description:
      "Non è mai troppo tardi per avvicinarsi alla danza classica. Questo corso accoglie gli adulti, sia chi muove i primi passi sia chi desidera ritrovare la sbarra dopo anni, con lezioni calibrate sul ritmo di ciascuno. Con la guida di Sariya Khaybullova si lavora su postura, eleganza, coordinazione e respiro, riscoprendo la grazia del metodo Vaganova in un ambiente sereno e accogliente.",
    highlights: [
      "Aperto anche ai principianti",
      "Postura ed eleganza",
      "Ritmo calibrato sull'adulto",
    ],
    story: [
      "Non è mai troppo tardi per avvicinarsi alla danza classica. Questo corso accoglie gli adulti: sia chi muove i primi passi, sia chi desidera ritrovare la sbarra dopo anni. Le lezioni sono calibrate sul ritmo di ciascuno, in un ambiente sereno e privo di giudizio.",
      "Con la guida di Sariya Khaybullova si lavora su postura, eleganza, coordinazione e respiro, riscoprendo la grazia del metodo Vaganova. Un tempo per sé, per il benessere del corpo e la bellezza del gesto, a qualunque età.",
    ],
    learn: [
      "Postura, allineamento ed eleganza",
      "Sbarra e movimenti adatti all'adulto",
      "Coordinazione, respiro e benessere",
      "La grazia del metodo Vaganova, senza fretta",
    ],
    image: P(14),
    accent: "terracotta",
    icon: "HeartHandshake",
    highlight: false,
    order: 6,
  },
  {
    slug: "moderno",
    title: "Danza Moderna",
    category: "Moderna",
    level: "Tutti i livelli",
    ageGroup: "Ragazzi e adulti",
    teacher: "Staff Khaybullova",
    schedule: ORARIO,
    short: "Tecnica codificata, energia e libertà espressiva in dialogo con la musica.",
    description:
      "La danza moderna nasce agli inizi del Novecento come ribellione creativa ai rigori della sola tecnica classica. Caratterizzata da movimenti decisi, dal forte legame con la gravità e da uno stretto rapporto con la musica, unisce una tecnica codificata a una grande libertà espressiva. Un linguaggio del corpo intenso e contemporaneo, in cui ogni allievo impara a comunicare emozioni attraverso il movimento.",
    highlights: [
      "Tecnica codificata e dinamica",
      "Forte rapporto con la musica",
      "Libertà ed espressione",
    ],
    story: [
      "La danza moderna nasce agli inizi del Novecento come ribellione creativa ai rigori della sola tecnica classica. Caratterizzata da movimenti decisi, dal forte legame con la gravità e da uno stretto rapporto con la musica, unisce una tecnica codificata a una grande libertà espressiva.",
      "In sala si lavora su isolamenti, dinamica, fluidità e presenza scenica, costruendo coreografie intense e contemporanee. Il corpo impara a comunicare emozioni: ogni gesto diventa racconto.",
    ],
    learn: [
      "Tecnica codificata del moderno",
      "Isolamenti, dinamica e fluidità",
      "Rapporto profondo con la musica",
      "Presenza scenica ed espressione",
    ],
    image: P(12),
    accent: "terracotta",
    icon: "Flame",
    highlight: true,
    order: 7,
  },
  {
    slug: "contemporaneo",
    title: "Danza Contemporanea",
    category: "Contemporanea",
    level: "Intermedio / Avanzato",
    ageGroup: "Ragazzi e adulti",
    teacher: "Staff Khaybullova",
    schedule: ORARIO,
    short: "Sperimentazione, peso e respiro: la ricerca del movimento puro.",
    description:
      "Evoluzione della danza moderna, la danza contemporanea propone uno stile libero, sperimentale e aperto al dialogo con altre discipline, dalla classica al contact improvisation. Non legata in modo rigido alla musica, esplora il rapporto con la gravità, il peso, l'equilibrio che si perde e si riconquista. È una ricerca continua sul movimento, che invita il danzatore a interrogarsi e a esprimersi in piena autenticità.",
    highlights: [
      "Stile libero e sperimentale",
      "Lavoro su peso ed equilibrio",
      "Contaminazioni tra linguaggi",
    ],
    story: [
      "Evoluzione della danza moderna, la danza contemporanea propone uno stile libero, sperimentale e aperto al dialogo con altre discipline, dalla classica al contact improvisation. Non legata in modo rigido alla musica, esplora il rapporto con la gravità, il peso, l'equilibrio che si perde e si riconquista.",
      "È una ricerca continua sul movimento. Attraverso il lavoro a terra (floor work), il rilascio del peso e l'improvvisazione guidata, ogni danzatore impara a interrogarsi e a esprimersi in piena autenticità, trovando la propria voce.",
    ],
    learn: [
      "Lavoro su peso, gravità ed equilibrio",
      "Floor work e rilascio del peso",
      "Improvvisazione guidata e composizione",
      "Ricerca di un movimento autentico",
    ],
    image: P(5),
    accent: "majolica",
    icon: "Wind",
    highlight: false,
    order: 8,
  },
  {
    slug: "hip-hop",
    title: "Hip Hop",
    category: "Urban",
    level: "Tutti i livelli",
    ageGroup: "Bambini, ragazzi e adulti",
    teacher: "Marianna Pavlatova Savio",
    schedule: ORARIO,
    short: "Ritmo, groove ed energia urbana nello stile delle danze di strada.",
    description:
      "L'hip hop è la più celebre delle danze urbane, nata dalla cultura di strada e fatta di groove, ritmo e personalità. Con l'insegnante Marianna Pavlatova Savio gli allievi imparano a muoversi a tempo di musica con energia e sicurezza, sviluppando coordinazione, forza e stile personale. Un corso travolgente e divertente, adatto a chi ama esprimersi liberamente e mettersi in gioco.",
    highlights: [
      "Groove e ritmo urbano",
      "Coordinazione ed energia",
      "Stile personale",
    ],
    story: [
      "L'hip hop è la più celebre delle danze urbane, nata dalla cultura di strada e fatta di groove, ritmo e personalità. Con l'insegnante Marianna Pavlatova Savio gli allievi imparano a muoversi a tempo di musica con energia e sicurezza.",
      "Si sviluppano coordinazione, forza, musicalità e uno stile personale, sulle musiche del momento e nello spirito di crew tipico di questa disciplina. Un corso travolgente e divertente, adatto a chi ama esprimersi liberamente e mettersi in gioco.",
    ],
    learn: [
      "Groove, bounce e ritmo urbano",
      "Coordinazione, energia e forza",
      "Routine sulle musiche del momento",
      "Stile personale e spirito di crew",
    ],
    image: P(7),
    accent: "sun",
    icon: "Zap",
    highlight: true,
    order: 9,
  },
  {
    slug: "heels",
    title: "Heels",
    category: "Urban",
    level: "Intermedio",
    ageGroup: "Adulti",
    teacher: "Marianna Pavlatova Savio",
    schedule: ORARIO,
    short: "Sensualità, forza e portamento: la danza sui tacchi.",
    description:
      "La heels dance è la danza che si esegue sui tacchi, nata negli anni Novanta dalla fusione di jazz, hip hop e stile commerciale. Più di una semplice coreografia, è un percorso di consapevolezza che esalta equilibrio, controllo, forza muscolare e grazia, valorizzando portamento e femminilità. Con Marianna Pavlatova Savio si scopre una danza potente ed elegante, fatta di carattere e sicurezza in se stessi.",
    highlights: [
      "Equilibrio e controllo sui tacchi",
      "Portamento e grazia",
      "Forza ed espressività",
    ],
    story: [
      "La heels dance è la danza che si esegue sui tacchi, nata negli anni Novanta dalla fusione di jazz, hip hop e stile commerciale. Più di una semplice coreografia, è un percorso di consapevolezza che esalta equilibrio, controllo, forza muscolare e grazia.",
      "Con Marianna Pavlatova Savio si valorizzano portamento e femminilità, scoprendo una danza potente ed elegante, fatta di carattere e sicurezza in se stessi. Un corso che insegna a sentirsi forti e a proprio agio nel movimento.",
    ],
    learn: [
      "Equilibrio e controllo sui tacchi",
      "Forza muscolare e postura",
      "Portamento, grazia e carattere",
      "Sicurezza e consapevolezza di sé",
    ],
    image: P(9),
    accent: "terracotta",
    icon: "Star",
    highlight: false,
    order: 10,
  },
  {
    slug: "passo-a-due",
    title: "Passo a Due · Pas de Deux",
    category: "Avanzato",
    level: "Avanzato",
    ageGroup: "Allievi avanzati",
    teacher: "Sariya Khaybullova",
    schedule: ORARIO,
    short: "L'arte del duetto classico: complicità, sostegno e armonia in coppia.",
    description:
      "Il pas de deux, letteralmente «passo a due», è il duetto in cui due danzatori danzano insieme, una delle pagine più alte e virtuose del balletto classico. Riservato agli allievi più formati, richiede ascolto reciproco, fiducia e una raffinata percezione delle dinamiche di coppia, tra adagio, prese e variazioni. Con la guida di Sariya Khaybullova si apprende l'arte del sostegno e dell'armonia, coronamento del percorso accademico.",
    highlights: [
      "Tecnica di coppia e prese",
      "Ascolto e complicità",
      "Coronamento del percorso classico",
    ],
    story: [
      "Il pas de deux, letteralmente «passo a due», è il duetto in cui due danzatori danzano insieme: una delle pagine più alte e virtuose del balletto classico. Riservato agli allievi più formati, richiede ascolto reciproco, fiducia e una raffinata percezione delle dinamiche di coppia.",
      "Tra adagio, prese e variazioni, con la guida di Sariya Khaybullova si apprende l'arte del sostegno e dell'armonia. È il coronamento del percorso accademico, dove la tecnica individuale si fa dialogo e la danza diventa relazione.",
    ],
    learn: [
      "Tecnica di coppia, prese e sostegno",
      "Ascolto reciproco e fiducia",
      "Adagio, variazioni e dinamiche di coppia",
      "Coronamento del percorso classico",
    ],
    image: P(4),
    accent: "gold",
    icon: "Users",
    highlight: false,
    order: 11,
  },
  {
    slug: "ginnastica-dolce-total-body",
    title: "Ginnastica Dolce · Total Body",
    category: "Fitness",
    level: "Tutti i livelli",
    ageGroup: "Adulti",
    teacher: "Marianna Pavlatova Savio",
    schedule: ORARIO,
    short: "Movimento, tono e benessere per le signore, in dolcezza.",
    description:
      "Un corso dedicato alle signore che desiderano prendersi cura del proprio corpo con dolcezza e costanza. La ginnastica dolce e il lavoro total body uniscono esercizi di tonificazione, mobilità ed elasticità a momenti di allungamento e respiro, per ritrovare energia, postura e benessere. Con Marianna Pavlatova Savio il movimento diventa un appuntamento piacevole, accessibile a ogni età e condizione fisica.",
    highlights: [
      "Tonificazione e mobilità",
      "Adatto a ogni età",
      "Benessere e postura",
    ],
    story: [
      "Un corso dedicato alle signore che desiderano prendersi cura del proprio corpo con dolcezza e costanza. La ginnastica dolce e il lavoro total body uniscono esercizi di tonificazione, mobilità ed elasticità a momenti di allungamento e respiro.",
      "Con Marianna Pavlatova Savio il movimento diventa un appuntamento piacevole, accessibile a ogni età e condizione fisica, per ritrovare energia, postura e benessere. Il corpo si rimette in moto con grazia, senza fretta e senza affaticarsi.",
    ],
    learn: [
      "Tonificazione e lavoro total body",
      "Mobilità, elasticità e allungamento",
      "Respiro, postura ed energia",
      "Movimento adatto a ogni età",
    ],
    image: P(8),
    accent: "majolica",
    icon: "Activity",
    highlight: false,
    order: 12,
  },
  {
    slug: "krav-maga",
    title: "Krav Maga",
    category: "Fitness",
    level: "Tutti i livelli",
    ageGroup: "Ragazzi e adulti",
    teacher: "Staff Khaybullova",
    schedule: ORARIO,
    short: "Tecnica di difesa personale efficace, pratica e accessibile a tutti.",
    description:
      "Il krav maga è un sistema di difesa personale sviluppato in Israele, oggi diffuso in tutto il mondo per la sua logica ed efficacia. Più che un'arte marziale, è un metodo pratico e diretto che insegna a riconoscere il pericolo e a reagire con prontezza, sviluppando al contempo sicurezza, riflessi e consapevolezza di sé. Un percorso adatto a tutti, in cui forma fisica e autodifesa procedono di pari passo.",
    highlights: [
      "Difesa personale pratica",
      "Riflessi e prontezza",
      "Sicurezza e consapevolezza",
    ],
    story: [
      "Il krav maga è un sistema di difesa personale sviluppato in Israele, oggi diffuso in tutto il mondo per la sua logica ed efficacia. Più che un'arte marziale, è un metodo pratico e diretto che insegna a riconoscere il pericolo e a reagire con prontezza.",
      "Accanto alle tecniche di autodifesa si sviluppano sicurezza, riflessi, consapevolezza di sé e forma fisica. Un percorso adatto a tutti, in cui corpo e mente imparano a restare lucidi e a proteggersi con efficacia.",
    ],
    learn: [
      "Tecniche di difesa personale pratiche",
      "Riflessi, prontezza e lucidità",
      "Consapevolezza del corpo e dello spazio",
      "Forma fisica e sicurezza in sé",
    ],
    image: P(13),
    accent: "majolica",
    icon: "Shield",
    highlight: false,
    order: 13,
  },
];

export const COURSE_CATEGORIES = [
  "Tutti",
  "Propedeutica",
  "Classica",
  "Avanzato",
  "Adulti",
  "Moderna",
  "Contemporanea",
  "Urban",
  "Fitness",
] as const;

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}
