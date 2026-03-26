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
            { icon: "🎨", title: "Blender / 3D Modelleren", desc: "Experimenteren met verschillende onderdelen van Blender. Onderandere animatie" },
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
            tags: ["school", "nature", "plan", "Beta Wereld: Lifestyle & Design"],
            world: "Beta Wereld: Lifestyle & Design · Klas: O&O VWO 5",
            title: " NRG Pallas — Herontwerp",
            description: "Ontwerpen en 3D-modelleren van een museum voor de NRG Pallas opdracht. Hier in heb ik me vooral bezig gehouden met het 3d model, van het consept dat door de groep was bedacht. Aan de hand van dat 3d model hebben we de prsentatie gegeven aan de opdrachtgever.",
            photo: "Assets/img/Petten-export-portfolio.png",
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
            world: "Natuur & Techniek · O&O VWO 5",
            title: "Anthura — Kas reinigingsconcept",
            description: "Idee ontwikkelen voor het veilig schoonmaken van de binnenkant van een glazen kas bij bloemenveredelaar Anthura. Hier voor hebben we een robot bedacht die op het bestaande rails systeem rijdt en zo de kas van de binnenkant kan schoon maken",
            photo: "",
            placeholder: "🌷 Anthura",
            photoLabel: "Concept",
            photoAlt: "Anthura concept",
            proudOf: "Het concept dat we hebben ontworpen en gepresenteerd aan de opdrachtgever",
            reflection: "Met Anthura heb ik geleerd hoe je communiceert met een opdrachtgever. Door de in mijn ogen iets wat stroefe samenwerking binnen de groep ging de opdracht zelf niet supper goed, maar aan het einde wel een resultaat neer gezed.",
            skills: ["Communicatie", "Technisch tekenen", "Samenwerken"],
        },
        {
            id: "p3",
            type: "school",
            tags: ["school", "plan"],
            world: "Natuur & Techniek · O&O VWO 4",
            title: "STI Engineering — Productpresentatie",
            description: "Het ontwerpen, van een makkelijk te vervoeren beurs stand voor STI Engineering. Hierbij was de focus vooral op het meenemen en de klant ervaring van de stand. In dit ontwerp heb ik me bezig gehouden met het 3d model van onze beurs stand. Hier bij hoorde een animatie die de gehele inpakken en uitpakken van de stand liet zien. Gemaakt in blender",
            photo: "",
            placeholder: "⚙️ STI Engineering",
            photoLabel: "Onderzoek & Ontwerp",
            photoAlt: "STI Engineering ontwerp",
            proudOf: "het onderzoek en de visuele presentatie van het eindontwerp",
            reflection: "Met deze opdracht had de klant een vrij duidelijk idee wat er gewenst was, dit maakte het ontwerp er niet gemakkelijker op. De opdracht gever was uiteindelijk wel tevreden met het eindresultaat. Wat in mijn ogen beter kon was de gehele werkwijze, waar in 2 van de 4 personen echt aan het werk waren.",
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
            title: "Ursem Modulair Bouw — Productopslag optimaliseren",
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
        },
        {
            id: "p7",
            type: "school",
            tags: ["school", "Ontwerp"],
            world: "Beta Wereld: Market & Money · Klas: O&O VWO 4",
            title: "Action - Concept ontwikkeling",
            description: "",
            photo: "Assets/img/Petten-export-portfolio.png",
            photoLabel: "",
            photoAlt: "",
            proudOf: "",
            reflection: "",
            skills: ["Ontwerp", "Creativiteit", "Samenwerken"],
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
                { name: "Onderzoek & analyse", level: 4, evidence: ["p3", "p5"] },
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
                { name: "Zelfreflectie", level: 3.6, evidence: [""] },
            ],
        },
    ],

    gallery: [
        { src: "Assets/img/Ieper_1.jpg", alt: "Gezicht over Ieper met historische gebouwen en groen", category: "natuur" },
        { src: "Assets/img/DSC_0170.jpg", alt: "Macro fotografie van een detail in de natuur", category: "natuur" },
        { src: "Assets/img/DSC_0680.jpg", alt: "Landschapsfoto met perspectief en diepte", category: "natuur" },
    ],
    galleryText: "Fotografie is voor mij een manier om vast teleggen wat ik doe, samen met familie en anderen, maar ook een manier om me zelf te ontrekken, aan anderen.",

    leerdoelen: [
        {
            id: "l1",
            title: "Beter worden in technisch tekenen en Blender",
            progress: 65,
            smart: {
                s: "Ik wil leren werken met een CAD-programma (Fusion 360) om technische modellen nauwkeuriger te maken dan in Blender.",
                m: "Ik heb minimaal 3 technische tekeningen gemaakt in Fusion 360 en één eindproduct gepresenteerd.",
                a: "Technisch tekenen is essentieel voor mijn O&O-opdrachten en mijn toekomstige ambities in techniek en ontwerp.",
                r: "Fusion 360 is gratis beschikbaar voor studenten. Ik kan online tutorials volgen naast mijn schoolwerk.",
                t: "Einde van het tweede trimester — vóór 1 februari 2026.",
            },
            reflection: ".",
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
