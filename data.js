// ============================================================
//  data.js — Jouw portfolio inhoud
//  Dit is het ENIGE bestand dat je hoeft te bewerken.
//  Voeg projecten, foto's en info toe zonder HTML aan te raken.
// ============================================================

const PORTFOLIO_DATA = {

    about: {
        name: "Thijmen van Groenestijn",
        tagline: "VWO · Ontwerper · Fotograaf · Muzikant",
        photo: "", // Kan later geüpdatet worden, laat initialen zien
        photoAlt: "Foto van Thijmen",
        quote: "Ik leer het liefst door iets écht te maken en te doen — Van een 3D-model tot een object",

        quickFacts: [
            { label: "School", value: "VWO 6" },
            { label: "Profiel", value: "Natuur & Gezondheid & Natuurkunde" },
            { label: "Vakken", value: "Informatica · O&O" },
            { label: "Woonplaats", value: "Nederland" },
            { label: "Ambitie", value: "Techniek & Design combineren" }
        ],

        aboutText: [
            "Ik ben Thijmen, een VWO-student die van aanpakken houdt. Of het nu gaat om het 3D-modelleren van een museumgebouw, het bouwen van een weer-app, of het organiseren van schoolevenementen — ik zoek altijd de praktische aanpak. Ik hou ervan om abstracte ideeën om te zetten naar iets tastbaars: een model, een website, een plan.",
            "Buiten school fotografeer ik graag landschappen en macro-onderwerpen, speel ik trompet in de plaatselijke muziekvereniging en fiets ik regelmatig lange afstanden door de natuur. Die combinatie van techniek, creativiteit en buiten zijn maakt mij wie ik ben."
        ],

        hobbies: [
            { icon: "🎨", title: "Blender / 3D Modelleren", desc: "Experimenteren met verschillende onderdelen van 3D-modelleren en ontwerpen." },
            { icon: "📷", title: "Fotografie", desc: "Landschappen en familie — al een paar jaar hof­leverancier voor de familie­kerstkaart." },
            { icon: "🚴", title: "Fietsen", desc: "Lange ritten door de natuur om op te laden en nieuwe ideeën op te doen." },
            { icon: "🏊", title: "Zwemmen", desc: "Twee keer per week naar het zwembad — gewoon lekker bewegen." },
            { icon: "🎉", title: "Evenementen", desc: "De afgelopen jaren veel plezier gevonden in het mee-organiseren van schoolevenementen." },
            { icon: "🎺", title: "Muziek spelen", desc: "Trompet spelen in de lokale muziekvereniging en daar een paar keer per jaar mee optreden." }
        ],

        photoTeaser: [
            { src: "Assets/img/Ieper_1.jpg", alt: "Foto van Ieper" },
            { src: "Assets/img/DSC_0170.jpg", alt: "Macro fotografie" },
            { src: "Assets/img/DSC_0680.jpg", alt: "Landschapsfoto" },
        ],
    },

    projects: [
        {
            id: "p1",
            type: "school",
            tags: ["school", "nature", "plan"],
            world: "Lifestyle & Design · O&O VWO 5",
            title: "NRG Pallas — Museum ontwerp",
            description: "Ontwerpen en 3D-modelleren van een museum voor de NRG Pallas opdracht. Ik leerde nieuwe tools en workflows in Blender en ontdekte de grenzen van het programma voor technische modellen.",
            photo: "Assets/img/DSC_0680.jpg", // The original had this placeholder URL
            photoLabel: "3D-model in Blender",
            photoAlt: "3D-model van het NRG Pallas museum in Blender",
            proudOf: "het gedetailleerde 3D-model dat ik zelfstandig heb gebouwd",
            reflection: "Voor deze O&O-opdracht heb ik me volledig gericht op het 3D-modelleren in Blender. Wat goed ging: ik ontdekte nieuwe sneltoetsen en modelling-tools die mijn tempo verhoogden. Wat ik leerde: Blender is niet ideaal voor technische modellen — een CAD-programma zoals Fusion 360 zou preciezer zijn. Ik was verrast hoe positief de opdrachtgever reageerde op het eindresultaat. Volgende keer wil ik eerder een technisch tekening als referentie maken.",
            skills: ["3D-modelleren", "Samenwerken", "Reflecteren"],
        },
        {
            id: "p2",
            type: "school",
            tags: ["school", "nature", "plan"],
            world: "Natuur & Techniek · O&O VWO 4",
            title: "Anthura — Kas reinigingsconcept",
            description: "Idee ontwikkelen voor het veilig schoonmaken van de binnenkant van een glazen kas bij bloemenveredelaar Anthura. Technologisch concept bedacht en technisch getekend.",
            photo: "",
            placeholder: "🌷 Anthura",
            photoLabel: "Concept",
            photoAlt: "Anthura concept",
            proudOf: "het technisch concept dat we hebben ontworpen en gepresenteerd aan de opdrachtgever",
            reflection: "Bij Anthura heb ik geleerd hoe je communiceert met een echte opdrachtgever. Het was soms lastig om hun verwachtingen goed te begrijpen — de eerste presentatie was te technisch. Door meer te luisteren en samen te vatten wat de klant écht wil, werd de samenwerking beter. Ik zou de volgende keer eerder een klantinterview houden om requirements helder te hebben.",
            skills: ["Communicatie", "Technisch tekenen", "Samenwerken"],
        },
        {
            id: "p3",
            type: "school",
            tags: ["school", "plan"],
            world: "Natuur & Techniek · O&O VWO 4",
            title: "STI Engineering — Productpresentatie",
            description: "Ontwerpen van een oplossing voor het gemakkelijker presenteren van producten bij STI Engineering. Onderzoek gedaan en een ontwerp uitgewerkt in Blender.",
            photo: "",
            placeholder: "⚙️ STI Engineering",
            photoLabel: "Onderzoek & Ontwerp",
            photoAlt: "STI Engineering ontwerp",
            proudOf: "het onderzoek en de visuele presentatie van het eindontwerp",
            reflection: "Bij STI Engineering heb ik geleerd hoe je een ontwerp onderbouwt met onderzoek. Het was mijn eerste keer dat ik zowel onderzoek als 3D-modelleren combineerde. Ik merkte dat ik soms te snel wilde beginnen met modelleren terwijl de onderzoeksfase nog niet klaar was. Volgend project wil ik een duidelijkere planning maken met vaste deadlines per fase.",
            skills: ["Onderzoek", "Ontwerpen", "Planning"],
        },
        {
            id: "p4",
            type: "personal",
            tags: ["personal", "tech"],
            world: "Informatica · Tech & Code",
            title: "Weer-app — Buienradar API",
            description: "Een weer-app gebouwd met HTML, CSS en JavaScript die gebruik maakt van de Buienradar API. De app toont overzichtelijk de weersverwachting met extra functies.",
            photo: "Assets/img/DSC_0170.jpg",
            photoLabel: "Weer-app screenshot",
            photoAlt: "Screenshot van de weer-app interface",
            proudOf: "de werkende API-integratie en het overzichtelijke ontwerp",
            reflection: "De weer-app was mijn eerste project met een externe API. Het ophalen van data lukte al snel, maar het netjes tonen van die data kostte meer tijd dan verwacht — JSON structuren begrijpen is een vak apart. Ik ben trots op het eindresultaat en heb er veel van geleerd over asynchrone JavaScript. Volgende keer wil ik error-handling eerder toevoegen.",
            skills: ["JavaScript", "API's", "HTML & CSS"],
        },
        {
            id: "p5",
            type: "school",
            tags: ["school", "plan"],
            world: "Natuur & Techniek · O&O VWO 4",
            title: "Ursem Modulair Bouw — Productstorage",
            description: "Het efficiënter maken van de productopslag bij Ursem door het bieden van een slimme oplossing. Kritisch denken en creatief probleemoplossen stonden centraal.",
            photo: "",
            placeholder: "🏗️ Ursem Modulair Bouw",
            photoLabel: "Analyse & Voorstel",
            photoAlt: "Ursem Modulair Bouw intro",
            proudOf: "de heldere probleemanalyse en het praktische voorstel dat we hebben gedaan",
            reflection: "Bij Ursem draaide het om kritisch denken: wat is het echte probleem, niet het symptoom? Die vraag heeft mij geleerd om verder te kijken dan de eerste oplossing. In het begin gingen we te snel naar conclusies. Door meer vragen te stellen aan de opdrachtgever kwamen we tot een betere analyse. Dit neem ik mee naar elk volgend project.",
            skills: ["Kritisch denken", "Probleemoplossen", "Communicatie"],
        },
        {
            id: "p6",
            type: "personal",
            tags: ["personal", "photo", "nature"],
            world: "Fotografie & Creativiteit",
            title: "Fotografie — Landschappen & macro",
            description: "Persoonlijk fotoproject waarbij ik landschappen en macro-onderwerpen fotografeer. Meerdere jaren hof­leverancier voor de familie­kerstkaart.",
            photo: "Assets/img/Ieper_1.jpg",
            photoLabel: "Ieper — landschapsfotografie",
            photoAlt: "Landschapsfoto genomen in Ieper tijdens een fotoproject",
            proudOf: "de jaarlijkse kerstkaartfoto die de hele familie blij maakt",
            reflection: "Fotografie leerde mij kijken — echt kijken. Geduld, compositie, licht: het zijn vaardigheden die ik ook buiten fotografie gebruik. Bij een macro-foto heb je veel geduld nodig voordat je het perfecte moment hebt. Die precisie en het experimenteren met instellingen heeft me ook geholpen bij technisch werk zoals 3D-modelleren.",
            skills: ["Fotografie", "Creativiteit", "Geduld & precisie"],
        }
    ],

    skills: [
        {
            category: "Technische skills",
            items: [
                { name: "Blender / 3D-modelleren", level: 3.5, evidence: ["p1", "p3"] },
                { name: "HTML & CSS", level: 3.75, evidence: ["p4"] },
                { name: "JavaScript", level: 3, evidence: ["p4"] },
                { name: "Technisch tekenen", level: 3.25, evidence: ["p2", "p3"] },
                { name: "Fotografie", level: 4, evidence: ["p6"] },
                { name: "Onderzoek & analyse", level: 3.4, evidence: ["p3", "p5"] },
            ],
        },
        {
            category: "Persoonlijke competenties",
            items: [
                { name: "Probleemoplossend denken", level: 3.75, evidence: ["p5", "p2"] },
                { name: "Samenwerken", level: 4, evidence: ["p1", "p2", "p3", "p5"] },
                { name: "Planning & organisatie", level: 3.5, evidence: ["p3"] },
                { name: "Doorzettingsvermogen", level: 4.25, evidence: [] },
                { name: "Communicatie met opdrachtgevers", level: 3.25, evidence: ["p2", "p1", "p3"] },
                { name: "Zelfreflectie", level: 3.6, evidence: [] },
            ],
        },
    ],

    gallery: [
        { src: "Assets/img/Ieper_1.jpg", alt: "Gezicht over Ieper met historische gebouwen en groen", category: "natuur" },
        { src: "Assets/img/DSC_0170.jpg", alt: "Macro fotografie van een detail in de natuur", category: "natuur" },
        { src: "Assets/img/DSC_0680.jpg", alt: "Landschapsfoto met perspectief en diepte", category: "natuur" },
    ],
    galleryText: "Fotografie is voor mij een manier om de wereld bewust te bekijken. Ik fotografeer landschappen tijdens fietstochten en macro-onderwerpen in de tuin of het park. De kerstkaartfoto voor de familie maak ik al meerdere jaren — dat vergt timing, geduld en een goed gevoel voor licht.",

    leerdoelen: [
        {
            id: "l1",
            title: "Beter worden in technisch tekenen en CAD",
            progress: 65,
            smart: {
                s: "Ik wil leren werken met een CAD-programma (Fusion 360) om technische modellen nauwkeuriger te maken dan in Blender.",
                m: "Ik heb minimaal 3 technische tekeningen gemaakt in Fusion 360 en één eindproduct gepresenteerd.",
                a: "Technisch tekenen is essentieel voor mijn O&O-opdrachten en mijn toekomstige ambities in techniek en ontwerp.",
                r: "Fusion 360 is gratis beschikbaar voor studenten. Ik kan online tutorials volgen naast mijn schoolwerk.",
                t: "Einde van het tweede trimester — vóór 1 februari 2026.",
            },
            reflection: "Ik ben begonnen met tutorials voor Fusion 360 en heb al mijn eerste onderdeel getekend. Het is heel anders dan Blender — meer gefocust op maten en constraints. In het begin was dat frustrerend, maar ik begin het systeem te begrijpen. Ik merk dat mijn technische tekeningen van school mij helpen om sneller de logica te begrijpen. Ik wil voor februari nog twee echte projectonderdelen tekenen.",
        },
        {
            id: "l2",
            title: "Verbeteren van mijn communicatie met opdrachtgevers",
            progress: 80,
            smart: {
                s: "Ik wil leren hoe je een effectief klantinterview houdt en hoe je requirements helder opschrijft vóór je begint met ontwerpen.",
                m: "Bij elk O&O-project houd ik minimaal één structured interview en maak ik een requirements-lijst die de opdrachtgever goedkeurt.",
                a: "Bij Anthura merkte ik dat miscommunicatie veel tijd kostte. Betere communicatie levert direct een beter eindproduct op.",
                r: "Ik heb al ervaring met presenteren. Een structured interview leren is één extra stap die goed te oefenen is.",
                t: "Toepassen bij het eerstvolgende O&O-project — uiterlijk einde schooljaar 2025–2026.",
            },
            reflection: "Dit leerdoel gaat goed. Bij het NRG Pallas project heb ik bewust aan het begin een lijst gemaakt met vragen voor de opdrachtgever. Dat hielp enorm — we hadden na het eerste gesprek al een duidelijk beeld van de verwachtingen. De volgende stap is ook leren omgaan met tegenstrijdige wensen van opdrachtgevers, want dat heb ik nog niet meegemaakt.",
        },
        {
            id: "l3",
            title: "Verdiepen in JavaScript en webontwikkeling",
            progress: 50,
            smart: {
                s: "Ik wil meer leren over JavaScript — met name asynchrone code (fetch, async/await) en het werken met APIs.",
                m: "Ik bouw minimaal twee webprojecten waarbij ik een externe API gebruik en foutafhandeling heb ingebouwd.",
                a: "Webontwikkeling is een vaardigheid die ik ook na school kan gebruiken — voor projecten, hobby's en mogelijk een studie.",
                r: "Ik heb al een basis met HTML/CSS/JS van de weer-app. Verdieping is de logische volgende stap.",
                t: "Vóór het einde van het schooljaar — juni 2026.",
            },
            reflection: "Ik ben halverwege dit leerdoel. De weer-app was mijn eerste stap, en dit portfolio is de tweede — hier heb ik voor het eerst bewust met CSS-variabelen, grid-layouts en gedeelde bestanden gewerkt. Async/await begrijp ik nu beter dan een jaar geleden, maar ik wil het nog meer in de praktijk toepassen. Mijn volgende project wil ik iets bouwen met een API die ik zelf kies.",
        },
    ],
};
