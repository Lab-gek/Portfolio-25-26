// ══════════════════════════════════════════════════════════════
//  data.js — Alle inhoud van het portfolio
//
//  ✏️  Bewerk ALLEEN dit bestand om de site bij te werken!
//      Je hoeft de .html bestanden NIET aan te raken.
//
//  Secties:
//    1) siteConfig      — naam, footer
//    2) overMij         — bio, portretfoto, quick-facts, citaat
//    3) hobbies         — hobbykaarten op Over mij
//    4) fotoTeaser      — drie foto's onderaan Over mij
//    5) opdrachten      — projectkaarten + reflecties (Opdrachten pagina)
//    6) skills          — technische + persoonlijke vaardigheden
//    7) fotos           — foto galerij (Fotografie pagina)
//    8) leerdoelen      — SMART-kaarten op POP pagina
//    9) carouselSlides  — carousel op index (oud scherm, bewaard)
//   10) timelineData    — tijdlijn (oud scherm, bewaard)
// ══════════════════════════════════════════════════════════════


// ── 1) SITE CONFIG ────────────────────────────────────────────
//    Naam in navigatie en in de footer van elke pagina.
const siteConfig = {
    naam:        'Thijmen van Groenestijn',
    footerTekst: 'Thijmen van Groenestijn · Portfolio 2025–2026',
};


// ── 2) OVER MIJ PAGINA ────────────────────────────────────────
const overMij = {
    // Portretfoto bovenaan — zet het pad naar je eigen foto.
    // Laat 'null' staan als je (nog) geen foto hebt: dan verschijnt een initiaal-cirkel.
    portret:    null,                   // bijv. 'Assets/img/portret.jpg'
    portretAlt: 'Portretfoto van Thijmen',

    tagline: 'VWO bovenbouw student · Ontwerper · Fotograaf · Muzikant',
    citaat:  'Ik leer het liefst door iets écht te maken — van een 3D-model tot een evenement.',

    // Quick-facts kaartjes. Voeg toe of verwijder regels naar wens.
    quickFacts: [
        { label: 'School',     waarde: 'VWO bovenbouw' },
        { label: 'Profiel',    waarde: 'Natuur & Techniek' },
        { label: 'Vakken',     waarde: 'Informatica · O&O · Lifestyle & Design' },
        { label: 'Woonplaats', waarde: 'Nederland' },
        { label: 'Ambitie',    waarde: 'Techniek & Ontwerp combineren' },
    ],

    // Bio-tekst — elke string = één alinea.
    bio: [
        'Ik ben Thijmen, een VWO-student die van aanpakken houdt. Of het nu gaat om het 3D-modelleren van een museumgebouw, het bouwen van een weer-app, of het organiseren van schoolevenementen — ik zoek altijd de praktische aanpak. Ik hou ervan om abstracte ideeën om te zetten naar iets tastbaars: een model, een website, een plan.',
        'Buiten school fotografeer ik graag landschappen en macro-onderwerpen, speel ik trompet in de plaatselijke muziekvereniging en fiets ik regelmatig lange afstanden door de natuur. Die combinatie van techniek, creativiteit en buiten zijn maakt mij wie ik ben.',
    ],
};


// ── 3) HOBBIES (onderste grid op Over mij) ───────────────────
//    title: emoji + naam · desc: korte omschrijving
const hobbies = [
    { title: '🎨 Blender / 3D Modelleren', desc: 'Experimenteren met verschillende onderdelen van 3D-modelleren en ontwerpen.' },
    { title: '📷 Fotografie',              desc: 'Landschappen en familie — al een paar jaar hofleverancier voor de familiekerstkaart.' },
    { title: '🚴 Fietsen',                 desc: 'Lange ritten door de natuur om op te laden en nieuwe ideeën op te doen.' },
    { title: '🏊 Zwemmen',                 desc: 'Twee keer per week naar het zwembad — gewoon lekker bewegen.' },
    { title: '🎉 Evenementen',             desc: 'De afgelopen jaren veel plezier gevonden in het mee-organiseren van schoolevenementen.' },
    { title: '🎺 Muziek spelen',           desc: 'Trompet spelen in de lokale muziekvereniging en daar een paar keer per jaar mee optreden.' },
];


// ── 4) FOTO TEASER (Over mij — drie foto's onderaan) ─────────
//    Klik op elke foto gaat naar fotografie.html.
//    src: pad naar foto · alt: beschrijving voor slechtzienden
const fotoTeaser = [
    { src: 'Assets/img/Ieper_1.jpg',  alt: 'Foto van Ieper' },
    { src: 'Assets/img/DSC_0170.jpg', alt: 'Macro fotografie' },
    { src: 'Assets/img/DSC_0680.jpg', alt: 'Landschapsfoto'  },
];


// ── 5) OPDRACHTEN & PROJECTEN ────────────────────────────────
//
//    FOTO-VELD:
//      Echte foto  → foto: { src: 'Assets/img/bestand.jpg', alt: 'Beschrijving', label: 'Bijschrift' }
//      Placeholder → foto: { emoji: '🌷', naam: 'Anthura' }
//
//    TAGS (meerdere, gescheiden door spatie):
//      school    — schoolopdracht (badgeType: 'school')
//      personal  — persoonlijk project (badgeType: 'personal')
//      tech      — technologie / code
//      nature    — natuur & leven
//      event     — evenementen
//      plan      — planning / organisatie
//      photo     — fotografie als project
//
//    REFLECTIE-TAGS: array van max 3 competentie-labels.

const opdrachten = [
    {
        tags:        'school nature plan',          // ← filterwoorden (zie tabel hierboven)
        foto:        { src: 'Assets/img/DSC_0680.jpg', alt: '3D-model van het NRG Pallas museum in Blender', label: '3D-model in Blender' },
        badgeType:   'school',                      // 'school' of 'personal'
        betawereld:  'Lifestyle & Design · O&O VWO 5',
        titel:       'NRG Pallas — Museum ontwerp',
        beschrijving:'Ontwerpen en 3D-modelleren van een museum voor de NRG Pallas opdracht. Ik leerde nieuwe tools en workflows in Blender en ontdekte de grenzen van het programma voor technische modellen.',
        trotsOp:     'het gedetailleerde 3D-model dat ik zelfstandig heb gebouwd',
        reflectie:   'Voor deze O&O-opdracht heb ik me volledig gericht op het 3D-modelleren in Blender. Wat goed ging: ik ontdekte nieuwe sneltoetsen en modelling-tools die mijn tempo verhoogden. Wat ik leerde: Blender is niet ideaal voor technische modellen — een CAD-programma zoals Fusion 360 zou preciezer zijn. Ik was verrast hoe positief de opdrachtgever reageerde op het eindresultaat. Volgende keer wil ik eerder een technisch tekening als referentie maken.',
        reflTags:    ['3D-modelleren', 'Samenwerken', 'Reflecteren'],
    },
    {
        tags:        'school nature plan',
        foto:        { emoji: '🌷', naam: 'Anthura' },
        badgeType:   'school',
        betawereld:  'Natuur & Techniek · O&O VWO 4',
        titel:       'Anthura — Kas reinigingsconcept',
        beschrijving:'Idee ontwikkelen voor het veilig schoonmaken van de binnenkant van een glazen kas bij bloemenveredelaar Anthura. Technologisch concept bedacht en technisch getekend.',
        trotsOp:     'het technisch concept dat we hebben ontworpen en gepresenteerd aan de opdrachtgever',
        reflectie:   'Bij Anthura heb ik geleerd hoe je communiceert met een echte opdrachtgever. Het was soms lastig om hun verwachtingen goed te begrijpen — de eerste presentatie was te technisch. Door meer te luisteren en samen te vatten wat de klant écht wil, werd de samenwerking beter. Ik zou de volgende keer eerder een klantinterview houden om requirements helder te hebben.',
        reflTags:    ['Communicatie', 'Technisch tekenen', 'Samenwerken'],
    },
    {
        tags:        'school plan',
        foto:        { emoji: '⚙️', naam: 'STI Engineering' },
        badgeType:   'school',
        betawereld:  'Natuur & Techniek · O&O VWO 4',
        titel:       'STI Engineering — Productpresentatie',
        beschrijving:'Ontwerpen van een oplossing voor het gemakkelijker presenteren van producten bij STI Engineering. Onderzoek gedaan en een ontwerp uitgewerkt in Blender.',
        trotsOp:     'het onderzoek en de visuele presentatie van het eindontwerp',
        reflectie:   'Bij STI Engineering heb ik geleerd hoe je een ontwerp onderbouwt met onderzoek. Het was mijn eerste keer dat ik zowel onderzoek als 3D-modelleren combineerde. Ik merkte dat ik soms te snel wilde beginnen met modelleren terwijl de onderzoeksfase nog niet klaar was. Volgend project wil ik een duidelijkere planning maken met vaste deadlines per fase.',
        reflTags:    ['Onderzoek', 'Ontwerpen', 'Planning'],
    },
    {
        tags:        'school tech',
        foto:        { src: 'Assets/img/DSC_0170.jpg', alt: 'Screenshot van de weer-app interface', label: 'Weer-app screenshot' },
        badgeType:   'school',
        betawereld:  'Informatica · Tech & Code',
        titel:       'Weer-app — Buienradar API',
        beschrijving:'Een weer-app gebouwd met HTML, CSS en JavaScript die gebruik maakt van de Buienradar API. De app toont overzichtelijk de weersverwachting met extra functies.',
        trotsOp:     'de werkende API-integratie en het overzichtelijke ontwerp',
        reflectie:   'De weer-app was mijn eerste project met een externe API. Het ophalen van data lukte al snel, maar het netjes tonen van die data kostte meer tijd dan verwacht — JSON structuren begrijpen is een vak apart. Ik ben trots op het eindresultaat en heb er veel van geleerd over asynchrone JavaScript. Volgende keer wil ik error-handling eerder toevoegen.',
        reflTags:    ['JavaScript', "API's", 'HTML & CSS'],
    },
    {
        tags:        'school plan',
        foto:        { emoji: '🏗️', naam: 'Ursem Modulair Bouw' },
        badgeType:   'school',
        betawereld:  'Natuur & Techniek · O&O VWO 4',
        titel:       'Ursem Modulair Bouw — Productstorage',
        beschrijving:'Het efficiënter maken van de productopslag bij Ursem door het bieden van een slimme oplossing. Kritisch denken en creatief probleemoplossen stonden centraal.',
        trotsOp:     'de heldere probleemanalyse en het praktische voorstel dat we hebben gedaan',
        reflectie:   'Bij Ursem draaide het om kritisch denken: wat is het echte probleem, niet het symptoom? Die vraag heeft mij geleerd om verder te kijken dan de eerste oplossing. In het begin gingen we te snel naar conclusies. Door meer vragen te stellen aan de opdrachtgever kwamen we tot een betere analyse. Dit neem ik mee naar elk volgend project.',
        reflTags:    ['Kritisch denken', 'Probleemoplossen', 'Communicatie'],
    },
    {
        tags:        'personal photo nature',
        foto:        { src: 'Assets/img/Ieper_1.jpg', alt: 'Landschapsfoto genomen in Ieper tijdens een fotoproject', label: 'Ieper — landschapsfotografie' },
        badgeType:   'personal',
        betawereld:  'Fotografie & Creativiteit',
        titel:       'Fotografie — Landschappen & macro',
        beschrijving:'Persoonlijk fotoproject waarbij ik landschappen en macro-onderwerpen fotografeer. Meerdere jaren hofleverancier voor de familiekerstkaart.',
        trotsOp:     'de jaarlijkse kerstkaartfoto die de hele familie blij maakt',
        reflectie:   'Fotografie leerde mij kijken — echt kijken. Geduld, compositie, licht: het zijn vaardigheden die ik ook buiten fotografie gebruik. Bij een macro-foto heb je veel geduld nodig voordat je het perfecte moment hebt. Die precisie en het experimenteren met instellingen heeft me ook geholpen bij technisch werk zoals 3D-modelleren.',
        reflTags:    ['Fotografie', 'Creativiteit', 'Geduld & precisie'],
    },
];


// ── 6) SKILLS & COMPETENTIES ─────────────────────────────────
//    level: 0–100 (breedte van de kleurenbalk)
//    kleur: 'coral' (standaard, voor technische skills)
//           'teal'  (voor persoonlijke competenties)
const skills = {

    technisch: [
        { icon: '🎨', naam: 'Blender / 3D-modelleren',  desc: 'Gebouwen en objecten modelleren, rendering, basisanimaties. Gebruikt bij NRG Pallas en STI Engineering.', level: 70, kleur: 'coral' },
        { icon: '💻', naam: 'HTML & CSS',                desc: 'Zelf websites bouwen en opmaken. Basis van dit portfolio én de weer-app.', level: 75, kleur: 'coral' },
        { icon: '⚡', naam: 'JavaScript',                desc: "Interactie en logica op webpagina's. API's aanroepen, DOM manipuleren. Geleerd via de weer-app.", level: 60, kleur: 'coral' },
        { icon: '✏️', naam: 'Technisch tekenen',         desc: 'Technische tekeningen maken van ontwerpen. Toegepast bij Anthura en STI Engineering.', level: 65, kleur: 'coral' },
        { icon: '📷', naam: 'Fotografie',                desc: 'Landschapsfotografie, macro-fotografie, compositie en belichting. Meerdere jaren ervaring.', level: 80, kleur: 'coral' },
        { icon: '🔍', naam: 'Onderzoek & analyse',       desc: 'Literatuuronderzoek, interviews met opdrachtgevers, probleemanalyse. Toepasbaar in elk project.', level: 68, kleur: 'coral' },
    ],

    persoonlijk: [
        { icon: '🧩', naam: 'Probleemoplossend denken',         desc: 'Complexe problemen opdelen in kleinere stukken en een werkende oplossing bouwen. Zie: Ursem, Anthura.', level: 75, kleur: 'teal' },
        { icon: '🤝', naam: 'Samenwerken',                       desc: 'Effectief werken in een team, taken verdelen en elkaar aanvullen. Geleerd bij alle O&O-opdrachten.', level: 80, kleur: 'teal' },
        { icon: '🗓️', naam: 'Planning & organisatie',            desc: 'Deadlines bewaken, taken prioriteren en overzicht bewaren. Ontwikkeld bij evenement-organisatie en O&O.', level: 70, kleur: 'teal' },
        { icon: '🎺', naam: 'Doorzettingsvermogen',              desc: 'Oefenen, falen en doorgaan — geleerd door muziek spelen in de vereniging en lange fietstochten.', level: 85, kleur: 'teal' },
        { icon: '💬', naam: 'Communicatie met opdrachtgevers',   desc: 'Verwachtingen ophalen, samenvatten en terugkoppelen. Geoefend bij Anthura, NRG Pallas en STI.', level: 65, kleur: 'teal' },
        { icon: '🌱', naam: 'Zelfreflectie',                     desc: 'Terugkijken op wat goed ging en wat beter kan, en dat ook concreet opschrijven en toepassen.', level: 72, kleur: 'teal' },
    ],
};


// ── 7) FOTOGRAFIE PAGINA ─────────────────────────────────────
//    Voeg foto's toe door nieuwe regels toe te voegen.
//    src: pad naar foto · alt: beschrijving voor slechtzienden
const fotos = [
    { src: 'Assets/img/Ieper_1.jpg',  alt: 'Gezicht over Ieper met historische gebouwen en groen' },
    { src: 'Assets/img/DSC_0170.jpg', alt: 'Macro fotografie van een detail in de natuur' },
    { src: 'Assets/img/DSC_0680.jpg', alt: 'Landschapsfoto met perspectief en diepte' },
];


// ── 8) POP — LEERDOELEN ──────────────────────────────────────
//    voortgang: getal van 0 tot 100 (de ring wordt automatisch berekend)
//    status:    label onder de ring, bijv. 'In progress', 'Bijna klaar', 'Klaar ✓'
//    smart:     vijf velden s, m, a, r, t — elk één zin of alinea
//    reflectie: jouw reflectietekst (wordt verborgen achter een toggle)
const leerdoelen = [
    {
        titel:     'Beter worden in technisch tekenen en CAD',
        voortgang: 65,           // 0–100
        status:    'In progress',
        smart: {
            s: 'Ik wil leren werken met een CAD-programma (Fusion 360) om technische modellen nauwkeuriger te maken dan in Blender.',
            m: 'Ik heb minimaal 3 technische tekeningen gemaakt in Fusion 360 en één eindproduct gepresenteerd.',
            a: 'Technisch tekenen is essentieel voor mijn O&O-opdrachten en mijn toekomstige ambities in techniek en ontwerp.',
            r: 'Fusion 360 is gratis beschikbaar voor studenten. Ik kan online tutorials volgen naast mijn schoolwerk.',
            t: 'Einde van het tweede trimester — vóór 1 februari 2026.',
        },
        reflectie: 'Ik ben begonnen met tutorials voor Fusion 360 en heb al mijn eerste onderdeel getekend. Het is heel anders dan Blender — meer gefocust op maten en constraints. In het begin was dat frustrerend, maar ik begin het systeem te begrijpen. Ik merk dat mijn technische tekeningen van school mij helpen om sneller de logica te begrijpen. Ik wil voor februari nog twee echte projectonderdelen tekenen.',
    },
    {
        titel:     'Verbeteren van mijn communicatie met opdrachtgevers',
        voortgang: 80,
        status:    'Bijna klaar',
        smart: {
            s: 'Ik wil leren hoe je een effectief klantinterview houdt en hoe je requirements helder opschrijft vóór je begint met ontwerpen.',
            m: 'Bij elk O&O-project houd ik minimaal één structured interview en maak ik een requirements-lijst die de opdrachtgever goedkeurt.',
            a: 'Bij Anthura merkte ik dat miscommunicatie veel tijd kostte. Betere communicatie levert direct een beter eindproduct op.',
            r: 'Ik heb al ervaring met presenteren. Een structured interview leren is één extra stap die goed te oefenen is.',
            t: 'Toepassen bij het eerstvolgende O&O-project — uiterlijk einde schooljaar 2025–2026.',
        },
        reflectie: 'Dit leerdoel gaat goed. Bij het NRG Pallas project heb ik bewust aan het begin een lijst gemaakt met vragen voor de opdrachtgever. Dat hielp enorm — we hadden na het eerste gesprek al een duidelijk beeld van de verwachtingen. De volgende stap is ook leren omgaan met tegenstrijdige wensen van opdrachtgevers, want dat heb ik nog niet meegemaakt.',
    },
    {
        titel:     'Verdiepen in JavaScript en webontwikkeling',
        voortgang: 50,
        status:    'In progress',
        smart: {
            s: "Ik wil meer leren over JavaScript — met name asynchrone code (fetch, async/await) en het werken met API's.",
            m: "Ik bouw minimaal twee webprojecten waarbij ik een externe API gebruik en foutafhandeling heb ingebouwd.",
            a: "Webontwikkeling is een vaardigheid die ik ook na school kan gebruiken — voor projecten, hobby's en mogelijk een studie.",
            r: 'Ik heb al een basis met HTML/CSS/JS van de weer-app. Verdieping is de logische volgende stap.',
            t: 'Vóór het einde van het schooljaar — juni 2026.',
        },
        reflectie: 'Ik ben halverwege dit leerdoel. De weer-app was mijn eerste stap, en dit portfolio is de tweede — hier heb ik voor het eerst bewust met CSS-variabelen, grid-layouts en gedeelde bestanden gewerkt. Async/await begrijp ik nu beter dan een jaar geleden, maar ik wil het nog meer in de praktijk toepassen. Mijn volgende project wil ik iets bouwen met een API die ik zelf kies.',
    },
];


// ── 9) CAROUSEL (bewaard van de oude index) ──────────────────
//    Gebruikt nog steeds door de old-style index als je die wil herstellen.
const carouselSlides = [
    { type: 'image', src: 'Assets/img/Ieper_1.jpg',  caption: '' },
    { type: 'card',  card: { title: 'Weer', subtitle: 'Het werkte weer', summary: 'Een weer app voor informatica met informatie van uit buienradar', projectIndex: 3 } },
    { type: 'image', src: 'Assets/img/DSC_0170.jpg', caption: 'Macro Fotografie' },
    { type: 'image', src: 'Assets/img/DSC_0680.jpg', caption: '' },
    { type: 'card',  card: { title: 'NRG Pallas', subtitle: 'Museum ontwerp', summary: 'Ontwerpen en modeleren van een museum', projectIndex: 0 } },
];


// ── 10) TIJDLIJN (bewaard van de oude index) ─────────────────
const timelineData = [
    { year: '2025 - 2026', text: 'VWO eindexamen periode en Meesterproef' },
    { year: '2024 - 2025', text: 'O&O project Anthura en NRG-PALLAS' },
    { year: '2023 - 2024', text: 'O&O Project Ursem modulair bouw en STI engineering' },
];

// ── PROJECTS (bewaard van de oude index — gebruikt door carousel modal) ──
const projects = [
    {
        title: 'NRG Pallas',
        description: 'Ontwerpen en modeleren van een museum',
        tags: ['Ontwerpen', 'Blender', 'O&O VWO 5', 'Lifestyle en design'],
        details: 'Voor deze O&O-opdracht hebben we gekozen voor een ontwerp en een 3D-model. Dit was eens iets anders dan normaal, omdat ik me dit keer vooral kon richten op het maken van het 3D-model, terwijl mijn groepsleden zich op andere onderdelen konden focussen. <br><br> Ik had al enige ervaring met Blender, maar tijdens deze opdracht heb ik nieuwe tools, sneltoetsen en instellingen ontdekt die mijn proces een stuk efficiënter maakten. Daardoor kon ik sneller werken en een beter resultaat behalen. <br><br> Wel heb ik gemerkt dat Blender niet ideaal is voor technische modellen. Voor een volgende keer zou een CAD-programma waarschijnlijk beter zijn, vooral voor het nauwkeurig ontwerpen van functionele onderdelen. <br><br> Volgens mij – en ook volgens de opdrachtgever – is het eindresultaat alsnog goed gelukt en ben ik tevreden over wat ik heb geleerd. <br><br>Over het algemeen was ik erg blij met de opdrachtgever en de mensen die ons begeleiden. En natuurlijk ook de rest van mijn team.'
    },
    {
        title: 'Anthura',
        description: "Idee ontwikkelen voor het 'veilig' schoon maken van de binnen kant van een glaze kas",
        tags: ['Concept ontwikkelen', 'Ontwerpen', 'Technisch tekenen', 'O&O VWO 4'],
        details: 'Anthura is een bloemenveredelaar in de bollenstreek. <br><br> Het probleem was dat ze een apart team moesten inschakelen om de binnenkant van hun kas schoon te maken. <br><br> Voor deze opdracht hebben we een technologisch concept bedacht. <br><br> Van deze opdracht heb ik geleerd hoe ik moet communiceren met een opdrachtgever en beter samenwerken met anderen.'
    },
    {
        title: 'STI Engineering',
        description: 'Ontwerpen van gemakkelijk presenteren van producten',
        tags: ['Onderzoek', 'Ontwerp', 'Blender', 'O&O VWO 4'],
        details: 'Developed a task management application with real-time collaboration features, drag-and-drop functionality, and team workspace support.'
    },
    {
        title: 'Weer app',
        description: 'Het maken van een weer app met de API van buienradar.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Infromatica'],
        details: "Het ontwikkelen van een weer app die overzichtelijk de weersverwachting toont. En wat extra functies <a href='https://skelter-studio-s.github.io/weer-app/'> Website</a> "
    },
    {
        title: 'Ursem Modulair Bouw',
        description: 'Het efficenter maken van hun product opslag door het bieden van een oplossing.',
        tags: ['Kritisch denken', 'O&O VWO 4'],
        details: ''
    },
];
