export interface FrogData {
  id: number;
  emoji: string;
  nom: string;
  nomCientific: string;
  descripcioCurta: string;
  descripcioCompleta: string;
  dadaCuriosa: string;
  mida: string;
  esperancaVida: string;
  alimentacio: string;
  habitat: string;
  perill: number; // 1-5
  perillDescripcio: string;
  depredadors: string[];
  lat: number;
  lng: number;
  imatge: string;
}

export const frogs: FrogData[] = [
  {
    id: 1,
    emoji: "🐸",
    nom: "Granota Vermella",
    nomCientific: "Rana temporaria",
    descripcioCurta: "La granota dels boscos europeus amb potes vermelloses",
    descripcioCompleta: "La Granota Vermella és una de les granotes més comunes d'Europa. Viu als boscos humits i prop de rius i estanys. Té la pell de color marró vermellós que li permet amagar-se entre les fulles seques del terra. És molt bona saltant i pot fer salts de fins a 1 metre de distància!",
    dadaCuriosa: "Sabies que pot sobreviure congelada a l'hivern? El seu cor s'atura però es descongela a la primavera!",
    mida: "6-9 cm",
    esperancaVida: "5-8 anys",
    alimentacio: "Insectes, cucs i cargols",
    habitat: "Boscos humits d'Europa",
    perill: 1,
    perillDescripcio: "No és perillosa per als humans. És molt tímida!",
    depredadors: ["Ocells rapinyaires", "Serp d'aigua", "Teixó", "Guineu"],
    lat: 48.8566,
    lng: 2.3522,
    imatge: "https://image.qwenlm.ai/generated-images/f1c254b4-7883-42c9-89c0-2365e1a63ece/_result.png"
  },
  {
    id: 2,
    emoji: "🐸",
    nom: "Granota Verda",
    nomCientific: "Pelophylax perezi",
    descripcioCurta: "La granota verda que canta a les nits d'estiu",
    descripcioCompleta: "La Granota Verda és la que sentim cantar a les nits d'estiu prop dels estanys i llacs de la Península Ibèrica. Té la pell de color verd brillant amb taques fosques. Li encanta estar a prop de l'aigua i nedar. Els mascles canten molt fort per atraure les femelles!",
    dadaCuriosa: "Sabies que el seu cant es pot sentir a més de 1 km de distància? És com un petit concert nocturn!",
    mida: "5-8 cm",
    esperancaVida: "4-6 anys",
    alimentacio: "Mosquits, mosques i aranyes",
    habitat: "Estanys i rius de la Península Ibèrica",
    perill: 1,
    perillDescripcio: "Totalment inofensiva! Només vol cantar i menjar mosquits!",
    depredadors: ["Cigonya", "Serp", "Gat", "Ocells grossos"],
    lat: 40.4168,
    lng: -3.7038,
    imatge: "https://image.qwenlm.ai/generated-images/0b32d9fb-b61c-4c47-afce-379fb18e6d69/_result.png"
  },
  {
    id: 3,
    emoji: "🐸",
    nom: "Granota Toro",
    nomCientific: "Lithobates catesbeianus",
    descripcioCurta: "La granota gegant que sembla un toro quan crida!",
    descripcioCompleta: "La Granota Toro és una de les granotes més grans d'Amèrica del Nord. El seu nom ve del seu crit profund que sona com el mugit d'un toro! És una granota molt gran i forta que pot menjar fins i tot peixos petits. Té els ulls grossos i sortints i la pell de color verd oliva.",
    dadaCuriosa: "Sabies que el seu crit 'CROAAAC' es pot sentir a 1,5 km? És la granota que fa més soroll d'Amèrica!",
    mida: "10-20 cm",
    esperancaVida: "8-10 anys",
    alimentacio: "Insectes, peixos petits, altres granotes",
    habitat: "Llacs i estanys d'Amèrica del Nord",
    perill: 2,
    perillDescripcio: "Pot mossegar si se sent amenaçada, però no és verinosa.",
    depredadors: ["Tortugues grans", "Serp d'aigua", "Ocells rapinyaires", "Humans"],
    lat: 39.8283,
    lng: -98.5795,
    imatge: "https://image.qwenlm.ai/generated-images/c7a85980-a88b-4b81-bc03-adc1dedaa57e/_result.png"
  },
  {
    id: 4,
    emoji: "🐸",
    nom: "Granota Goliat",
    nomCientific: "Conraua goliath",
    descripcioCurta: "La granota més gran del món! Pot pesar 3 kg!",
    descripcioCompleta: "La Granota Goliat és la granota més gran que existeix al planeta! Pot arribar a mesurar 32 cm sense comptar les potes i pesar fins a 3,25 kg! Viu als boscos tropicals del Camerun i Guinea Equatorial. És tan gran que podria cabre en una motxilla de nen!",
    dadaCuriosa: "Sabies que és tan gran que pot menjar fins i tot tortugues petites? És la reina de totes les granotes!",
    mida: "Fins a 32 cm",
    esperancaVida: "15-21 anys",
    alimentacio: "Insectes grans, crustacis, peixos petits",
    habitat: "Boscos tropicals del Camerun i Guinea Equatorial",
    perill: 1,
    perillDescripcio: "No és perillosa, però és molt tímida i difícil de trobar.",
    depredadors: ["Serp grans", "Ocells rapinyaires grans", "Humans (caça)"],
    lat: 3.8480,
    lng: 11.5021,
    imatge: "https://image.qwenlm.ai/generated-images/4c765fbb-6208-4066-be74-9b686a8fba87/_result.png"
  },
  {
    id: 5,
    emoji: "🐸",
    nom: "Granota Dardo Daurada",
    nomCientific: "Phyllobates terribilis",
    descripcioCurta: "La granota més verinosa del món! No la toquis!",
    descripcioCompleta: "La Granota Dardo Daurada és l'animal més verinós del planeta! Té la pell de color daurat brillant que sembla molt bonica, però NO s'ha de tocar mai! El seu verí ve dels insectes que menja al bosc tropical. Els indígenes del Colòmbia l'utilitzaven per posar verí a les fletxes de caça.",
    dadaCuriosa: "Sabies que una sola granota té prou verí per afectar 10 persones? Per això els indígenes la feien servir a les seves fletxes!",
    mida: "4-5 cm",
    esperancaVida: "8-10 anys",
    alimentacio: "Formigues, tèrmits i petits insectes",
    habitat: "Selva tropical del Colòmbia",
    perill: 5,
    perillDescripcio: "MOLT PERILLOSA! El seu verí pot ser mortal. Mai tocar!",
    depredadors: ["Cap (el seu verí la protegeix de tot!)", "Algunes serps immunes al verí"],
    lat: 4.5709,
    lng: -74.2973,
    imatge: "https://image.qwenlm.ai/generated-images/31ed77b5-359c-48b8-a3b6-24bae088b74f/_result.png"
  },
  {
    id: 6,
    emoji: "🐸",
    nom: "Granota de Cristall",
    nomCientific: "Hyalinobatrachium",
    descripcioCurta: "La granota transparent! Pots veure els seus òrgans!",
    descripcioCompleta: "La Granota de Cristall és màgica! La seva pell de la panxa és completament transparent, així que pots veure el seu cor bategant, els seus pulmons i fins i tot la seva panxa quan menja! Sembla feta de vidre! Viu als arbres de les selves d'Amèrica Central i del Sud.",
    dadaCuriosa: "Sabies que pots veure el seu cor bategar a través de la pell transparent? És com una granota de vidre!",
    mida: "2-3 cm",
    esperancaVida: "5-8 anys",
    alimentacio: "Insectes petits i aranyes",
    habitat: "Selva tropical d'Amèrica Central i del Sud",
    perill: 1,
    perillDescripcio: "Totalment inofensiva i molt delicada.",
    depredadors: ["Ocells", "Serp arbòries", "Insectes grans"],
    lat: -1.8312,
    lng: -78.1834,
    imatge: "https://image.qwenlm.ai/generated-images/4d04f84e-d414-4d10-9773-9fc380b044b5/_result.png"
  },
  {
    id: 7,
    emoji: "🐸",
    nom: "Reineta Verda",
    nomCientific: "Hyla arborea",
    descripcioCurta: "La petita granota que s'enfila als arbres!",
    descripcioCompleta: "La Reineta Verda és una granota petita i molt bonica de color verd brillant. Té uns discos enganxosos a les potes que li permeten escalar arbres i parets! És molt àgil i pot saltar molt lluny per la seva mida. Li encanta amagar-se entre les fulles verdes.",
    dadaCuriosa: "Sabies que té ventoses als dits que li permeten caminar pel sostre sense caure? Com un superheroi!",
    mida: "3-5 cm",
    esperancaVida: "5-8 anys",
    alimentacio: "Mosquits, mosques i petits insectes",
    habitat: "Boscos i jardins d'Europa",
    perill: 1,
    perillDescripcio: "Molt inofensiva i adorable. Perfecta per observar!",
    depredadors: ["Ocells", "Serp", "Gats", "Esquirols"],
    lat: 51.1657,
    lng: 10.4515,
    imatge: "https://image.qwenlm.ai/generated-images/3ab982a6-f940-40b2-8244-887a7b4b87b1/_result.png"
  },
  {
    id: 8,
    emoji: "🐸",
    nom: "Gripau Comú",
    nomCientific: "Bufo bufo",
    descripcioCurta: "El gripau panxut que camina a poc a poc pel bosc",
    descripcioCompleta: "El Gripau Comú és un dels amfibis més coneguts dels boscos europeus. Té la pell rugosa i plena de berrugues (que no encomanen res!). És de color marró i camina a poc a poc amb la seva panxa grossa. Tot i que sembla lent, és un gran caçador de nit!",
    dadaCuriosa: "Sabies que les seves berrugues NO encomanen res? És un mite! Les berrugues són només glàndules de verí per protegir-se!",
    mida: "6-15 cm",
    esperancaVida: "10-12 anys",
    alimentacio: "Cucs, llimacs, insectes i aranyes",
    habitat: "Boscos, jardins i camps d'Europa",
    perill: 2,
    perillDescripcio: "El seu verí és lleuger. Renteu-vos les mans si el toqueu!",
    depredadors: ["Teixó", "Guineu", "Ocells rapinyaires nocturns", "Serp"],
    lat: 52.5200,
    lng: 13.4050,
    imatge: "https://image.qwenlm.ai/generated-images/1b60aada-1f7a-4137-9428-019412f64370/_result.png"
  },
  {
    id: 9,
    emoji: "🐸",
    nom: "Granota Australiana",
    nomCientific: "Litoria caerulea",
    descripcioCurta: "La granota somrient d'Austràlia, sempre feliç!",
    descripcioCompleta: "La Granota Australiana (també anomenada 'Green Tree Frog') és famosa per la seva cara que sempre sembla estar somrient! És de color verd brillant i molt amigable. Li encanta viure a prop de les cases dels humans on pot menjar insectes atrets pels llums. És la granota mascota més popular d'Austràlia!",
    dadaCuriosa: "Sabies que li agraden tant els humans que sovint viu als porxos de les cases per menjar els insectes que s'acosten als llums?",
    mida: "7-10 cm",
    esperancaVida: "15-20 anys",
    alimentacio: "Insectes, aranyes i fins i tot ratolins petits",
    habitat: "Austràlia i Nova Guinea",
    perill: 1,
    perillDescripcio: "Molt amigable i inofensiva. Perfecta com a mascota!",
    depredadors: ["Serp", "Ocells rapinyaires", "Gats salvatges"],
    lat: -25.2744,
    lng: 133.7751,
    imatge: "https://image.qwenlm.ai/generated-images/3229c576-1ca0-41a9-a0fb-82d318fe14a5/_result.png"
  },
  {
    id: 10,
    emoji: "🐸",
    nom: "Granota Tomàtiga",
    nomCientific: "Dyscophus antongilii",
    descripcioCurta: "La granota rodona i vermella que sembla un tomàquet!",
    descripcioCompleta: "La Granota Tomàtiga és rodona, grassa i de color vermell taronja brillant, exactament com un tomàquet! Quan se sent amenaçada, s'infla com un globus i deixa anar una substància enganxosa. Viu a Madagascar i és una de les granotes més divertides de veure!",
    dadaCuriosa: "Sabies que quan la toques, es posa enganxosa com xiclet i s'infla com un globus vermell? Sembla un tomàquet de veritat!",
    mida: "8-10 cm",
    esperancaVida: "6-8 anys",
    alimentacio: "Insectes, cucs i petits invertebrats",
    habitat: "Boscos tropicals de Madagascar",
    perill: 2,
    perillDescripcio: "La seva secreció pot irritar la pell. Millor no tocar-la!",
    depredadors: ["Serp de Madagascar", "Ocells rapinyaires", "Fosses"],
    lat: -18.7669,
    lng: 46.8691,
    imatge: "https://image.qwenlm.ai/generated-images/da0cbcd7-e1c1-4eee-8006-63246e708d1c/_result.png"
  }
];
