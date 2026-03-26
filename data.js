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
            { icon: "🎨", title: "Blender / 3D Modelleren", desc: "Experimenteren met verschillende onderdelen van Blender. Onder andere animatie" },
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
            description: "Ontwerpen en 3D-modelleren van een museum voor de NRG Pallas opdracht. Hier in heb ik me vooral bezig gehouden met het 3d model, van het consept dat door de groep was bedacht. Aan de hand van dat 3d model hebben we de presentatie gegeven aan de opdrachtgever.",
            photo: "Assets/img/Petten-export-portfolio.png",
            photoLabel: "3D-model in Blender",
            photoAlt: "3D-model van het NRG Pallas museum in Blender",
            proudOf: "het gedetailleerde 3D-model dat ik zelfstandig heb gebouwd",
            reflection: "Voor deze O&O-opdracht heb ik me volledig gericht op het 3D-modelleren in Blender. Wat goed ging: ik ontdekte nieuwe sneltoetsen en modelling-tools die mijn tempo verhoogden. Wat ik leerde: Blender is niet ideaal voor technische modellen — een CAD-programma zal beter zijn. Maar de ipdracht gever was tevreden met het resultaat dus wij ook.",
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
            reflection: "Met Anthura heb ik geleerd hoe je communiceert met een opdrachtgever. Door de in mijn ogen iets wat stroefe samenwerking binnen de groep ging de opdracht zelf niet super goed, maar aan het einde wel een resultaat neergezet.",
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
            description: "Het efficiënter maken van de productopslag bij Ursem Modulair Bouw, het probleem was dat de modules die ze maken veel ruimte innemen, en door een vergroting in productie was er te weinig ruimte op het bestaande terrein. Aan de hand van de eisen, die we hadden opgekregen. Bleek het ons het handigste om de huidige opslag uit te diepen. Hierdoor konden we de opslagcapaciteit vergroten. Zonder extra grond te huren.",
            photo: "",
            placeholder: "🏗️ Ursem Modulair Bouw",
            photoLabel: "Analyse & Voorstel",
            photoAlt: "Ursem Modulair Bouw intro",
            proudOf: "de heldere probleemanalyse en het praktische voorstel dat we hebben gedaan",
            reflection: "Deze opdracht was een veeleisende opdracht van het creative denkvermogen. En binnen de wensen van de opdrachtgevers blijven. Wat goed ging was dat de opdrachtgever tevreden was met het resultaat. En onze oplossing financieel niet handig vond maar wel interessant.",
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
            description: "Voor Action ontwierpen we een duurzamer alternatief voor de afwas borstel. Waar bij de steel herbruikbaar was. en alleen de borstelkop vervangen word. Mijn rol was vooral het ontwerpen van de onderzoeks opstelling met LEGO Spike. Hebben we verschillende prototypes getest.",
            photo: "",
            photoLabel: "",
            photoAlt: "",
            proudOf: "De Lego Spike testopstelling. Die uitstekend hielp bij keuzes maken in het project. Een ander onderdeel was de presentatie in het engels.",
            reflection: "De lego Spike opstellen. Was een sucess. Iets wat minder ging was dat de presentatie in het engels moest, dat ging ietjes minder goed. Maar met het bewaren van de rust kom het altijd goed.",
            skills: ["Ontwerp", "Creativiteit", "Samenwerken"],
        },
        {
            id: "p8",
            type: "school",
            tags: ["school", "Meesterproef"],
            world: "Beta wereld: Mobiliteit en Ruimte · O&O VWO 6",  
            title: "Meesterproef — De hemmes een herinrichting met ambitie. - Dura vermeer",
            description: "De meesterproef, De opdracht was om voor het braak liggend terrein de Hemmes in de Zaan. Een herinrichting te geven met de oog op energie gebruik en genoeg woningen voor nieuwe starters op de woning markt.",
            photo: "",
            photoLabel: "",
            photoAlt: "",
            proudOf: "Excel! Met alle verschillende scenario's en berekeningen die nodig zijn hadden we al vrijsnel de behoefte aan een goed document om alles snel en overzichtelijk door te kunnen rekenen. op basis van energie gebruik. ",
            reflection: "Over de gehele linie hebben we iedereen blij kunnen maken, met een trotse opdrachtgever. Waar ik trots op ben is het excel bestand dat andere heeft kunnen onderstuenen en helpen met het maken van beslissingen. Zo zijn we er achter gekomen dat het idee van de opdrachtgever om een windmolen te bouwen niet genoeg energie op zou leveren voor een gehele woon wijk. En hier op hebben we advisen kunnen geven.",
            skills: ["Echte locatie", "Ontwerp", "Communicatie"],
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
                { name: "Samenwerken", level: 4, evidence: ["p1", "p2", "p3", "p5", "p8"] },
                { name: "Planning & organisatie", level: 3.5, evidence: ["p3"] },
                { name: "Doorzettingsvermogen", level: 4.25, evidence: ["p8"] },
                { name: "Communicatie met opdrachtgevers", level: 3.25, evidence: ["p2", "p1", "p3", "p8"] },
            ],
        },
    ],

    gallery: [
        { src: "Assets/img/Ieper_1.jpg", alt: "Gezicht over Ieper met historische gebouwen en groen", category: "natuur" },
        { src: "Assets/img/DSC_0170.jpg", alt: "Macro fotografie van een detail in de natuur", category: "natuur" },
        { src: "Assets/img/DSC_0680.jpg", alt: "Landschapsfoto met perspectief en diepte", category: "natuur" },
    ],
    galleryText: "Fotografie is voor mij een manier om vast teleggen wat ik doe, samen met familie en anderen, maar ook een manier om me zelf te onttrekken, aan anderen.",

    leerdoelen: [
        {
            id: "l1",
            title: "Beter worden in technisch tekenen en Blender",
            progress: 80,
            smart: {
                s: "Het verbeteren van kennis in blender en dit inzetten voor opdrachten, en andere uitwerkingen. Maar ook beter worden in elk onderdeel. ",
                m: "In verschillende projecten blender op verschillende manieren gebruiken.",
                a: "Dit doel is acceptabel omdat alles blender veel zijdig is en later in andere oplossingen of in het vervolg Blender nog wel van pas zal komen.",
                r: "Blender zelf is gratis, Hier door kan ik het nu gebruiken en ook in de toekomst als ik ergs werk, of gewoon voor de leuk. Tevens zijn er veel tutorials en filmpjes online die verschillende aspecten behandelen.",
                t: "Blender Leren is iets wat nooit stopt, Ik hoop wel dat voor het inleveren van een project wel weet dat ik de meest optimale technieken heb gebruikt.",
            },
            reflection: "Onder tussen al veel projecten met blender gemaakt. (Zie STI en Pallas) Met elk project dat ik doe leer ik nieuwe aspecten, en zo heb ik blender ook ingezet om korte filmpjes in elkaar te zetten, voor andere school opdrachten. Het gene wat ik het meest handige vind is om eerst alles uit te tekenen of schetsen.",
        },
        {
            id: "l2",
            title: "Verbeteren van mijn communicatie met opdrachtgevers",
            progress: 80,
            smart: {
                s: "Het verbeteren van communicatie met opdracht gevers. IN alle fases van het project.",
                m: "Tijdig beantwoorden (liefste binnen 3 dagen) van de mails van externe partijen. en hier in de 'secetaris' van de groep zijn.",
                a: "Bij Anthura merkte ik dat miscommunicatie veel tijd kostte. Door zelf hier in te verbeteren kan ik het niet alleen me zelf gemakkelik maken maar ook de team leden.",
                r: "Dit doel is realistisch als de rest van de groep me hier in de ruimte geeft.",
                t: "Meesterproef will hier de echte proef zijn. Maar oefenen in andere opdrachten ",
            },
            reflection: "Dit leerdoel gaat goed. Bij het NRG Pallas project heb ik bewust aan het begin een lijst gemaakt met vragen voor de opdrachtgever. Dat hielp enorm — we hadden na het eerste gesprek al een duidelijk beeld van de verwachtingen. De volgende stap is ook leren omgaan met tegenstrijdige wensen van opdrachtgevers, want dat heb ik nog niet meegemaakt.",
        },
        {
            id: "l3",
            title: "Verdiepen in JavaScript en webontwikkeling",
            progress: 25,
            smart: {
                s: "Ik wil een groter en complexer webproject bouwen, waarbij meerdere onderdelen samenwerken — zoals een eigen API-keuze, meerdere pagina's, en nette foutafhandeling.",
                m: "Een werkend webproject dat van uit de externe www gevonden kan worden.",
                a: "Webontwikkeling is een vaardigheid die ik ook na school kan gebruiken — voor projecten, hobby's en mogelijk een studie.",
                r: "Ik heb al een basis met HTML/CSS/JS van de weer-app. Verdieping is de logische volgende stap.",
                t: "Hobby project dus ooit.",
            },
            reflection: "Ik ben halverwege dit leerdoel. De weer-app was mijn eerste stap, en dit portfolio is de tweede hier heb ik voor het eerst bewust met CSS-variabelen, grid-layouts en gedeelde bestanden gewerkt.",
        },
    ],
};
