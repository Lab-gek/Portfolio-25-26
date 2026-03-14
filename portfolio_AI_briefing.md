# AI Portfolio Bouwgids
**Technisch briefingsdocument voor een agentic AI**  
Versie 1.0 · VWO bovenbouw portfolio · HTML/CSS/JS

Dit document is bedoeld om aan een agentic AI te geven als volledige briefing. Het bevat alle ontwerpbeslissingen, technische specificaties, rubriekeisen en codepatronen die nodig zijn om een complete, beoordelingswaardige portfolio website te bouwen.

*Geef dit document mee samen met jouw persoonlijke beschrijving en de AI kan direct aan de slag — zonder dat je zelf hoeft te coderen.*

---

## 1 — Projectcontext

Dit is een persoonlijk portfolio voor een VWO bovenbouw student in Nederland. Het portfolio wordt beoordeeld aan de hand van een officieel rubric met negen criteria. De website moet zowel indruk maken op een beoordelaar als echte informatie overbrengen aan iedereen die hem bezoekt.

### 1.1 Doelgroep

- **Primair:** de beoordelende docent — die het rubric afvinkt
- **Secundair:** andere bezoekers — klasgenoten, ouders, toekomstige werkgevers
- **De student zelf** — die de site zelf wil kunnen bijhouden en aanvullen

### 1.2 Kernprincipes

| Principe | Uitleg |
|---|---|
| **Warm & persoonlijk** | Geen corporate uitstraling — dit is een mens, geen bedrijf |
| **Twee snelheden** | Snelle lezers zien alleen de kaart. Geïnteresseerden klikken door naar reflectie |
| **Bewijs centraal** | Eigen foto's zijn het sterkste bewijs — elke kaart heeft een foto-slot |
| **Rubric-proof** | Elk ontwerpbesluit is gekoppeld aan een specifiek criterium |

---

## 2 — Rubric mapping

Het portfolio wordt beoordeeld op negen criteria. Elk criterium heeft een specifieke plek en aanpak in de site. De AI moet dit altijd in gedachten houden bij het genereren van code en inhoud.

| Criterium | Waar & hoe |
|---|---|
| **Crit. 1 — Uitstraling** | Hero sectie op Over mij. Netjes, uitnodigend, duidelijke structuur. Warm kleurenpalet, serif typografie, eigen foto prominent. |
| **Crit. 2 — Wie ben jij** | Over mij pagina: naam, tagline, foto, hobbies, interesses, citaat. Quick-facts grid voor snelle lezers. |
| **Crit. 3 — Overzicht opdrachten** | Opdrachten pagina: elke kaart heeft een zichtbaar betawereld-label. Filterrij bovenaan op betawereld. |
| **Crit. 4 — Info per opdracht** | Elke kaart: titel + beschrijving + bewijs (foto) + 'trots op' veld. Volledig, niet half. |
| **Crit. 5 — Competenties** | Skills pagina: visueel raster van competenties. Verrassende competenties (fotografie, planning) scoren extra. |
| **Crit. 6 — Bewijzen** | Foto van echt werk in élke kaart. Gevarieerd: veldwerk foto, screenshot, evenement foto, product foto. |
| **Crit. 7 — POP / SMART** | POP pagina: elk leerdoel als SMART-kaart met 5 gelabelde velden (S, M, A, R, T). Voortgangsring zichtbaar. |
| **Crit. 9 — Reflectie POP** | Toggle-reflectie per leerdoel én per opdracht. Verborgen voor snelle lezers, vol leesbaar voor beoordelaar. |

> **Let op:** Criterium 8 ontbreekt in het originele rubric — dit is geen fout in dit document.

---

## 3 — Site structuur

De portfolio bestaat uit vijf pagina's. Elke pagina is een los HTML bestand. Ze delen één CSS bestand (`style.css`) en één JS bestand (`script.js`).

| Bestand | Inhoud |
|---|---|
| `index.html` | Over mij — landing pagina, hero, quick-facts, foto-teaser |
| `opdrachten.html` | Opdrachten & Projecten — gefilterd kaartgrid **(HOOFDPAGINA)** |
| `skills.html` | Skills & Competenties — visueel raster met bewijs-links |
| `fotografie.html` | Fotografie — masonry galerij van eigen natuurfoto's |
| `pop.html` | POP — SMART leerdoel kaarten met reflectie-toggles |
| `style.css` | Gedeelde opmaak voor alle pagina's |
| `script.js` | Gedeelde interactie: filter, toggle, navigatie |

### 3.1 Navigatiebalk — aanwezig op elke pagina

```html
<nav class="topbar">
  <div class="logo">Jouw Naam</div>
  <div class="nav-links">
    <a href="index.html">Over mij</a>
    <a href="opdrachten.html" class="active">Opdrachten & projecten</a>
    <a href="skills.html">Skills</a>
    <a href="fotografie.html">Fotografie</a>
    <a href="pop.html">POP</a>
  </div>
</nav>
```

---

## 4 — Ontwerp systeem

### 4.1 Kleurenpalet (CSS variabelen)

Definieer alle kleuren als CSS variabelen in `:root`. Gebruik **uitsluitend** deze waarden — nooit willekeurige hex codes elders in de CSS.

```css
:root {
  --bg:           #FAF8F5;   /* crème — paginaachtergrond           */
  --card:         #FFFFFF;   /* wit — kaartachtergrond              */
  --border:       #EDE8E1;   /* warm lichtgrijs — randen            */
  --text:         #2C2820;   /* donkerbruin — hoofdtekst            */
  --muted:        #7A7268;   /* middenbruin — beschrijvingen        */
  --coral:        #D85A30;   /* koraal — primaire accentkleur       */
  --coral-light:  #FAECE7;   /* licht koraal — badge achtergrond    */
  --amber:        #EF9F27;   /* amber — secundair accent            */
  --amber-light:  #FAEEDA;   /* licht amber — persoonlijk badge     */
  --teal:         #1D9E75;   /* groen — school badge                */
  --teal-light:   #E1F5EE;   /* licht groen — school badge bg       */
  --purple-light: #EEEDFE;   /* licht paars — POP elementen         */
}
```

### 4.2 Typografie

Importeer via Google Fonts. **Lora** voor alle titels en serif tekst. **DM Sans** voor alle UI elementen, beschrijvingen en navigatie.

```html
<!-- In <head> van elke pagina -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap" rel="stylesheet">
```

```css
body           { font-family: 'DM Sans', sans-serif; }
.logo,
.card-title,
.page-title,
.hero-name,
.refl-panel p  { font-family: 'Lora', serif; }
.page-eyebrow  { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--coral); }
.card-title    { font-size: 15px; font-weight: 500; }
.card-desc     { font-size: 13px; color: var(--muted); line-height: 1.6; }
```

### 4.3 Ruimte en randen

- Kaart `border-radius`: `12px`
- Standaard padding binnenin kaart: `14px 16px`
- Grid gap: `14px`
- Alle randen: `1px solid var(--border)`
- Hover op kaarten: `transform: translateY(-2px)` met `transition: .15s ease`
- Foto hoogte in kaart: `160px`, `object-fit: cover`

---

## 5 — Opdrachten & Projecten pagina

Dit is de belangrijkste pagina van het portfolio. Het is de eerste pagina die een beoordelaar grondig doorleest. Alles op deze pagina is gekoppeld aan minstens één rubriccriterium.

### 5.1 Volledige pagina HTML structuur

```html
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Naam] — Opdrachten & Projecten</title>
  <!-- Google Fonts hier -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="topbar">...</nav>

  <header class="page-hero">
    <p class="page-eyebrow">Wat ik doe & maak</p>
    <h1 class="page-title">Opdrachten & projecten</h1>
    <p class="page-desc">[korte intro, 1-2 zinnen]</p>
  </header>

  <div class="filter-row" role="toolbar" aria-label="Filter projecten">
    <!-- filterknopen hier -->
  </div>

  <main class="grid" id="grid">
    <!-- kaarten hier -->
  </main>

  <script src="script.js"></script>
</body>
</html>
```

### 5.2 Filterknopen

Elke knop heeft een `onclick` die de `filter()` functie aanroept. Het sleutelwoord moet exact overeenkomen met de `data-tags` waarden op de kaarten.

```html
<div class="filter-row">
  <button class="filter-btn active" onclick="filter('all', this)">Alles</button>
  <button class="filter-btn" onclick="filter('school', this)">School</button>
  <button class="filter-btn" onclick="filter('personal', this)">Persoonlijk</button>
  <button class="filter-btn" onclick="filter('nature', this)">Natuur</button>
  <button class="filter-btn" onclick="filter('tech', this)">Tech & code</button>
  <button class="filter-btn" onclick="filter('event', this)">Events</button>
  <button class="filter-btn" onclick="filter('plan', this)">Planning</button>
</div>
```

### 5.3 Kaartstructuur — compleet sjabloon

> Geef elk reflectiepaneel een uniek id: `r1`, `r2`, `r3` enz. De knop en het panel moeten hetzelfde id delen.

```html
<div class="card" data-tags="[type] [categorie]">

  <!-- FOTO BOVENAAN (Criterium 6 — bewijs) -->
  <div class="card-img">
    <img src="fotos/[bestandsnaam.jpg]"
         alt="[beschrijving voor slechtzienden]"
         loading="lazy">
    <div class="photo-label">[kort bijschrift]</div>
  </div>

  <div class="card-body">

    <!-- BADGES (Criterium 3 — betawereld zichtbaar) -->
    <div class="badge-row">
      <span class="badge badge-school">School</span>
      <!-- OF: <span class="badge badge-personal">Persoonlijk</span> -->
      <span class="badge badge-world">[Betawereld naam]</span>
    </div>

    <!-- TITEL (Criterium 4 — info per opdracht) -->
    <h3 class="card-title">[Naam van opdracht of project]</h3>

    <!-- BESCHRIJVING (Criterium 4) -->
    <p class="card-desc">
      [1-2 zinnen: wat heb je gedaan + wat leerde je]
    </p>

    <!-- FOOTER: trots op + reflectie toggle -->
    <div class="card-footer">
      <span class="pride-text">
        Trots op: [specifiek iets]
      </span>
      <button class="refl-btn"
              onclick="toggleReflectie('r1', this)"
              aria-expanded="false"
              aria-controls="r1">
        Reflectie ↓
      </button>
    </div>

  </div>

  <!-- REFLECTIE (Criterium 9 — verborgen voor snelle lezers) -->
  <div class="refl-panel" id="r1" hidden>
    <p>"[3-5 zinnen: wat ging goed, wat leerde je,
        concreet voorbeeld, volgende stap]"</p>
    <div class="refl-tags">
      <span class="refl-tag">[Competentie 1]</span>
      <span class="refl-tag">[Competentie 2]</span>
    </div>
  </div>

</div>
```

### 5.4 Data-tags referentie

Combineer altijd een type-tag met minstens één categorie-tag. De filter werkt op `contains()`, dus de volgorde maakt niet uit.

| Tag | Betekenis |
|---|---|
| `school` | Schoolopdracht (betawereld verplicht) |
| `personal` | Persoonlijk project of hobby |
| `nature` | Natuur & Leven opdrachten of natuurfotografie |
| `tech` | Technologie, code, digitale projecten |
| `event` | Evenementen, organisatie, assisteren |
| `plan` | Project planning, organisatie |
| `photo` | Fotografie als project |

---

## 6 — Volledige CSS

Alle CSS hoort in `style.css`, gedeeld door alle pagina's.

```css
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
img { max-width: 100%; display: block; }

/* ── Basis ── */
body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

/* ── Navigatie ── */
.topbar {
  background: var(--card);
  border-bottom: 1px solid var(--border);
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo {
  font-family: 'Lora', serif;
  font-size: 16px;
  color: var(--text);
}
.nav-links { display: flex; gap: 24px; }
.nav-links a {
  font-size: 13px;
  color: var(--muted);
  text-decoration: none;
  transition: color .15s;
}
.nav-links a:hover { color: var(--text); }
.nav-links a.active {
  color: var(--text);
  border-bottom: 2px solid var(--coral);
  padding-bottom: 2px;
}

/* ── Paginakop ── */
.page-hero { padding: 40px 28px 24px; }
.page-eyebrow {
  font-size: 11px;
  font-weight: 500;
  color: var(--coral);
  letter-spacing: .1em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.page-title {
  font-family: 'Lora', serif;
  font-size: 32px;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 10px;
}
.page-desc { font-size: 14px; color: var(--muted); max-width: 520px; }

/* ── Filterrij ── */
.filter-row { padding: 0 28px 24px; display: flex; gap: 8px; flex-wrap: wrap; }
.filter-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  padding: 6px 16px;
  border-radius: 99px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--muted);
  cursor: pointer;
  transition: all .15s;
}
.filter-btn:hover { border-color: var(--coral); color: var(--text); }
.filter-btn.active { background: var(--text); color: #fff; border-color: var(--text); }

/* ── Grid ── */
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  padding: 0 28px 60px;
}

/* ── Kaart ── */
.card {
  background: var(--card);
  border-radius: 12px;
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform .15s ease;
}
.card:hover { transform: translateY(-2px); }

/* Foto */
.card-img { width: 100%; height: 160px; overflow: hidden; position: relative; }
.card-img img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.photo-label {
  position: absolute;
  bottom: 8px;
  left: 10px;
  font-size: 10px;
  font-weight: 500;
  color: rgba(255,255,255,.9);
  background: rgba(0,0,0,.28);
  padding: 2px 8px;
  border-radius: 4px;
}

/* Kaartinhoud */
.card-body { padding: 14px 16px; }
.badge-row { display: flex; gap: 6px; margin-bottom: 8px; flex-wrap: wrap; }
.badge { font-size: 11px; font-weight: 500; padding: 3px 9px; border-radius: 99px; }
.badge-school   { background: var(--teal-light);  color: #085041; }
.badge-personal { background: var(--amber-light); color: #633806; }
.badge-world    { background: #F1EFE8;             color: #5F5E5A; }

.card-title {
  font-family: 'Lora', serif;
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 6px;
  line-height: 1.35;
}
.card-desc { font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 12px; }

/* Kaartvoet */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding-top: 10px;
  gap: 8px;
}
.pride-text {
  font-family: 'Lora', serif;
  font-style: italic;
  font-size: 12px;
  color: var(--muted);
  flex: 1;
  line-height: 1.4;
}
.refl-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  color: var(--coral);
  border: 1px solid #F0997B;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  background: none;
  white-space: nowrap;
  transition: background .15s;
  flex-shrink: 0;
}
.refl-btn:hover { background: var(--coral-light); }

/* Reflectie */
.refl-panel {
  background: #FFF8F5;
  border-top: 1px solid #F5DDD0;
  padding: 14px 16px;
}
.refl-panel[hidden] { display: none; }
.refl-panel p {
  font-family: 'Lora', serif;
  font-style: italic;
  font-size: 13px;
  color: #6B4035;
  line-height: 1.75;
}
.refl-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.refl-tag {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 99px;
  background: var(--amber-light);
  color: #633806;
}

/* ── Responsiviteit ── */
@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .nav-links { gap: 16px; }
}
@media (max-width: 540px) {
  .grid { grid-template-columns: 1fr; padding: 0 16px 40px; }
  .filter-row { padding: 0 16px 20px; }
  .page-hero { padding: 28px 16px 16px; }
  .topbar { padding: 0 16px; }
  .nav-links { display: none; } /* vervang door hamburger menu op mobiel */
}
```

---

## 7 — JavaScript (script.js)

Twee functies verzorgen alle interactiviteit.

### 7.1 Reflectie toggle

```js
/**
 * Toont of verbergt het reflectiepaneel van een kaart.
 * @param {string} panelId - Het id van het reflectiepaneel (bijv. 'r1')
 * @param {HTMLElement} knop - De knop die werd geklikt
 */
function toggleReflectie(panelId, knop) {
  const panel = document.getElementById(panelId);
  const isOpen = !panel.hidden;

  panel.hidden = isOpen;
  knop.textContent = isOpen ? 'Reflectie ↓' : 'Reflectie ↑';
  knop.setAttribute('aria-expanded', String(!isOpen));
}
```

### 7.2 Filter

```js
/**
 * Toont alleen kaarten die overeenkomen met de gekozen tag.
 * @param {string} tag - Filter sleutelwoord ('all', 'school', 'tech', enz.)
 * @param {HTMLElement} knop - De knop die werd geklikt
 */
function filter(tag, knop) {
  document.querySelectorAll('.filter-btn')
    .forEach(b => b.classList.remove('active'));
  knop.classList.add('active');

  document.querySelectorAll('.card').forEach(card => {
    const tags = card.dataset.tags || '';
    const zichtbaar = tag === 'all' || tags.includes(tag);
    card.style.display = zichtbaar ? '' : 'none';
  });
}
```

---

## 8 — POP pagina

De POP pagina toont SMART leerdoelen als kaarten. Elk leerdoel heeft een voortgangsring, vijf SMART-velden en een reflectie-toggle. Dit dekt Criterium 7 en 9.

### 8.1 SMART kaart HTML

```html
<div class="pop-card">

  <div class="pop-header">
    <div>
      <div class="pop-num">Leerdoel 1</div>
      <h3 class="pop-title">[Titel van het leerdoel]</h3>
    </div>
    <div class="ring-wrap">
      <svg width="52" height="52" viewBox="0 0 52 52">
        <!-- Achtergrondring -->
        <circle cx="26" cy="26" r="21"
          fill="none" stroke="#EDE8E1" stroke-width="4"/>
        <!-- Voortgangsring — pas stroke-dashoffset aan -->
        <!-- Formule: dashoffset = 131.9 * (1 - voortgang/100) -->
        <circle cx="26" cy="26" r="21"
          fill="none" stroke="#D85A30" stroke-width="4"
          stroke-dasharray="131.9"
          stroke-dashoffset="46.2"
          stroke-linecap="round"
          transform="rotate(-90 26 26)"/>
      </svg>
      <span class="ring-label">65%</span>
      <div class="ring-status">In progress</div>
    </div>
  </div>

  <!-- SMART grid (Criterium 7) -->
  <div class="smart-grid">
    <div class="smart-cell">
      <div class="smart-letter">S</div>
      <div class="smart-name">Specifiek</div>
      <div class="smart-text">[Wat precies wil je bereiken?]</div>
    </div>
    <div class="smart-cell">
      <div class="smart-letter">M</div>
      <div class="smart-name">Meetbaar</div>
      <div class="smart-text">[Hoe meet je succes? Bij voorkeur een getal.]</div>
    </div>
    <div class="smart-cell">
      <div class="smart-letter">A</div>
      <div class="smart-name">Acceptabel</div>
      <div class="smart-text">[Waarom is dit doel belangrijk voor jou?]</div>
    </div>
    <div class="smart-cell">
      <div class="smart-letter">R</div>
      <div class="smart-name">Realistisch</div>
      <div class="smart-text">[Is het haalbaar? Wat heb je er voor nodig?]</div>
    </div>
    <div class="smart-cell">
      <div class="smart-letter">T</div>
      <div class="smart-name">Tijdgebonden</div>
      <div class="smart-text">[Wanneer wil je het bereikt hebben?]</div>
    </div>
  </div>

  <!-- Reflectie toggle (Criterium 9) -->
  <button class="reflect-bar"
          onclick="toggleReflectie('pop-r1', this)"
          aria-expanded="false"
          aria-controls="pop-r1">
    <span>Reflectie — hoe gaat het?</span>
    <span class="refl-arrow">▾</span>
  </button>
  <div class="refl-panel" id="pop-r1" hidden>
    <p>"[3-5 zinnen reflectie met concreet voorbeeld]"</p>
  </div>

</div>
```

### 8.2 Voortgangsring berekening

Formule: `dashoffset = 131.9 × (1 − voortgang/100)`

| Voortgang | stroke-dashoffset |
|---|---|
| 0% | `131.9` |
| 25% | `98.9` |
| 50% | `65.95` |
| 65% | `46.2` |
| 100% | `0` — verander stroke ook naar `#1D9E75` (groen) |

---

## 9 — Foto richtlijnen

Eigen foto's zijn het krachtigste bewijs in het portfolio. Ze zijn persoonlijk, niet te vervalsen, en maken directe indruk.

| Eigenschap | Richtlijn |
|---|---|
| **Breedte** | Maximaal 1200px — breder heeft geen effect, maakt bestand groter |
| **Bestandsgrootte** | Streef naar < 200 KB per foto — gebruik [Squoosh](https://squoosh.app) (gratis) |
| **Formaat** | JPEG voor foto's · PNG alleen voor screenshots |
| **Oriëntatie** | Liggend (landscape) werkt het beste bij `height: 160px` in het grid |
| **Alt-tekst** | Altijd invullen — beschrijft wat er te zien is |
| **Loading** | Voeg `loading="lazy"` toe op alle afbeeldingen buiten de viewport |

### 9.1 Mapstructuur

```
portfolio/
├── index.html
├── opdrachten.html
├── skills.html
├── fotografie.html
├── pop.html
├── style.css
├── script.js
└── fotos/
    ├── hero-portret.jpg           ← Over mij pagina
    ├── ecosysteem-veldwerk.jpg    ← Opdracht kaart
    ├── webapp-screenshot.png      ← Opdracht kaart
    ├── event-opbouw.jpg           ← Opdracht kaart
    ├── planning-whiteboard.jpg    ← Opdracht kaart
    ├── natuur-01.jpg              ← Galerij
    ├── natuur-02.jpg              ← Galerij
    └── natuur-03.jpg              ← Galerij
```

---

## 10 — Instructies voor de agentic AI

Dit hoofdstuk is de directe opdracht. Geef dit document mee met de persoonlijke beschrijving van de student en bouw de volledige site.

### 10.1 Taakomschrijving

Bouw een complete, werkende portfolio website als losse HTML/CSS/JS bestanden. De student geeft een persoonlijke beschrijving. Genereer alle bestanden op basis van die beschrijving én de specificaties in dit document.

### 10.2 Verplichte output bestanden

- `index.html` — Over mij pagina
- `opdrachten.html` — Opdrachten & Projecten (hoofdpagina)
- `skills.html` — Skills & Competenties
- `fotografie.html` — Foto galerij
- `pop.html` — POP / leerdoelen
- `style.css` — Gedeelde opmaak
- `script.js` — Gedeelde interactie

### 10.3 Verplichte ontwerpkeuzes

- Kleurenpalet exact zoals gespecificeerd in §4.1
- Lettertypes: Lora (serif) + DM Sans via Google Fonts
- Sticky navigatiebalk op elke pagina
- Responsive grid: 3 → 2 → 1 kolom
- Elke opdrachtenkaart heeft: foto-slot, badges, titel, beschrijving, trots-op, reflectie-toggle
- Reflecties standaard verborgen via HTML `hidden` attribuut
- SMART-leerdoelen met voortgangsringen op POP pagina
- Filterrij op opdrachten pagina met `data-tags` filtering

### 10.4 Rubriekeisen — nakijklijst

| Criterium | Controle |
|---|---|
| **Crit. 1** | Is de uitstraling netjes, uitnodigend en heeft de pagina duidelijke structuur? |
| **Crit. 2** | Staat er een volledige zelfbeschrijving op Over mij? |
| **Crit. 3** | Heeft elke kaart een zichtbaar betawereld-label? |
| **Crit. 4** | Heeft elke kaart: titel, beschrijving, foto, trots-op? |
| **Crit. 5** | Bevat de Skills pagina een overzicht van competenties? |
| **Crit. 6** | Zijn er echte foto-slots in elke kaart (geen lege placeholders)? |
| **Crit. 7** | Heeft elk leerdoel alle 5 SMART-velden expliciet gelabeld? |
| **Crit. 9** | Heeft elk leerdoel én elke opdracht een reflectie-toggle? |

### 10.5 Wat de AI NIET mag doen

- Geen generieke kleurenschema's — alleen de kleuren uit §4.1
- Geen Arial, Inter, Roboto of andere standaardlettertypes
- Geen lege of ontbrekende betawereld-labels
- Geen reflecties die standaard zichtbaar zijn (altijd `hidden`)
- Geen kaarten zonder foto-slot
- Geen SMART-leerdoelen zonder alle vijf labels zichtbaar

---

*AI Portfolio Bouwgids · Versie 1.0 · Gebruik dit document als bijlage bij de persoonlijke beschrijving van de student*
