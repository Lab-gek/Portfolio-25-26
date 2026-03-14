// carousel + projects + timeline + hobbies data (edit here)

const carouselSlides = [
    { type: 'image', src: 'Assets/img/Ieper_1.jpg', caption: '' },
    { type: 'card', card: { title: 'Weer', subtitle: 'Het werkte weer', summary: 'Een weer app voor informatica met informatie van uit buienradar', projectIndex: 3 } },
    { type: 'image', src: 'Assets/img/DSC_0170.jpg', caption: 'Macro Fotografie' },
    { type: 'image', src: 'Assets/img/DSC_0680.jpg', caption: '' },
    { type: 'card', card: { title: 'NRG Pallas', subtitle: 'Museum ontwerp', summary: 'Ontwerpen en modeleren van een museum', projectIndex: 0 } },
];
//Nieuwe project hier onder IVBM Carousel
const projects = [
    {
        title: "NRG Pallas",
        description: "Ontwerpen en modeleren van een museum",
        tags: ["Ontwerpen", "Blender", "O&O VWO 5", "Lifestyle en design"],
        details: "Voor deze O&O-opdracht hebben we gekozen voor een ontwerp en een 3D-model. Dit was eens iets anders dan normaal, omdat ik me dit keer vooral kon richten op het maken van het 3D-model, terwijl mijn groepsleden zich op andere onderdelen konden focussen. <br><br> Ik had al enige ervaring met Blender, maar tijdens deze opdracht heb ik nieuwe tools, sneltoetsen en instellingen ontdekt die mijn proces een stuk efficiënter maakten. Daardoor kon ik sneller werken. en een beter resultaat <br><br> Wel heb ik gemerkt dat Blender niet ideaal is voor technische modellen. Voor een volgende keer zou een CAD-programma waarschijnlijk beter zijn, vooral voor het nauwkeurig ontwerpen van functionele onderdelen. <br><br> Volgens mij – en ook volgens de opdrachtgever – is het eindresultaat alsnog goed gelukt en ben ik tevreden over wat ik heb geleerd. <br><br>Overal was ik erg blij met deze opdracht gever en de mensen die ons begeleiden. En natuurlijk ook de rest van me team."
    },
    {
        title: "Anthura",
        description: "Idee ontwikkelen voor het 'veilig' schoon maken van de binnen kant van een glaze kas",
        tags: ["Concept ontwikkelen", "Ontwerpen", "Technish tekenen", "O&O VWO 4"],
        details: "Anthura, is een bloemen veredelaar in de bollenstreek. <br><br> Het probleem voor hun is dat was dat ze een apart team moesten inschakelen om de binnenkand van hun kas schoon te maken. <br><br> Voor deze opdracht hebben we een technologisch concept bedacht <br><br> Van deze opdracht heb ik geleerd om hoe te communiceren met opdrachtgever en beter samen werken met anderen."
    },
    {
        title: "STI Engineering",
        description: "Ontwerpen van gemakkelijk presenteren van producten",
        tags: ["Onderzoek", "Ontwerp", "Blender", "O&O VWO 4", ],
        details: "Developed a task management application with real-time collaboration features, drag-and-drop functionality, and team workspace support."
    },
    {
        title: "Weer app",
        description: "Het maken van een weer app met de API van buienradar.",
        tags: ["HTML", "CSS", "JavaScript", "Infromatica"],
        details: "Het ontwikkelen van een weer app die overzichtelijk de weersverwachting toont. En wat extra functies <a href='https://skelter-studio-s.github.io/weer-app/'> Website</a> "
    },
    {title: "Ursem Modulair Bouw", 
    description: "Het efficenter maken van hun product opslag door het bieden van een oplossing.",
    tags: ["Kritisch denken", "O&O VWO 4"],
    details: ""
    }
];

const timelineData = [
    { year: "2025 - 2026", text: "VWO eindexamen periode en Meesterproef"},
    { year: "2024 - 2025", text: "O&O project Anthura en NRG-PALLAS" },
    { year: "2023 - 2024", text: "O&O Project Ursem modulair bouw en STI engineering" },
];

const hobbies = [
    { title: "Blender / 3D Modeleren", desc: "Experimenteren met verschillende onder delen van 3d modeleren en ontwerpen." },
    { title: "Fotografie", desc: "Landschappen en familie, zo ben ik al een paar jaar hof leverancier voor de familie kerst kaart." },
    { title: "Fietsen", desc: "Long rides in nature to recharge and get new ideas." },
    { title: "Zwemen", desc: "Lekker twee keer in de week in een zwembad zwemmen doet mij geen kwaad." },
    { title: "Evenementen", desc: "Afgelopen paar jaren heb ik veel plezier gevonden om op school Evenementen mee te organiseren." },
    { title: "Muziek spelen", desc: "Trompet spelen in de locale muziek vereniging en hier mee een paar keer per jaar optreden."},
];
