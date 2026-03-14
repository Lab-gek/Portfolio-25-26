/**
 * script.js — Interactie & rendering voor alle portfolio pagina's
 *
 * Alle inhoud staat in data.js.
 * Dit bestand bevat de functies die die data in HTML omzetten.
 */


// ══════════════════════════════════════════════
//  HELPER FUNCTIES (intern)
// ══════════════════════════════════════════════

/** Vervangt & < > " door HTML-entiteiten (voor tekst in attributen). */
function esc(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/** Berekent de SVG stroke-dashoffset voor een voortgangsring van r=21 (omtrek ≈ 131.9). */
function ringOffset(pct) {
    return (131.9 * (1 - Math.min(100, Math.max(0, pct)) / 100)).toFixed(2);
}


// ══════════════════════════════════════════════
//  TOGGLE FUNCTIES (knoppen in kaarten)
// ══════════════════════════════════════════════

/**
 * Toont/verbergt het reflectiepaneel van een projectkaart.
 * @param {string}      panelId - id van het <div class="refl-panel">
 * @param {HTMLElement} knop    - de geklickte knop
 */
function toggleReflectie(panelId, knop) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    const isOpen = !panel.hidden;
    panel.hidden = isOpen;
    knop.textContent = isOpen ? 'Reflectie ↓' : 'Reflectie ↑';
    knop.setAttribute('aria-expanded', String(!isOpen));
}

/**
 * Toont/verbergt het reflectiepaneel van een POP-kaart (met pijl).
 * @param {string}      panelId - id van het <div class="refl-panel">
 * @param {HTMLElement} knop    - de geklickte knop
 */
function togglePopReflectie(panelId, knop) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    const isOpen = !panel.hidden;
    panel.hidden = isOpen;
    knop.setAttribute('aria-expanded', String(!isOpen));
}

/**
 * Filtert projectkaarten op tag.
 * @param {string}      tag  - 'all' of een tag zoals 'school', 'tech'
 * @param {HTMLElement} knop - de geklickte filterknop
 */
function filter(tag, knop) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    knop.classList.add('active');
    document.querySelectorAll('.card').forEach(card => {
        const tags = card.dataset.tags || '';
        card.style.display = (tag === 'all' || tags.includes(tag)) ? '' : 'none';
    });
}


// ══════════════════════════════════════════════
//  RENDER — INDEX (Over mij)
// ══════════════════════════════════════════════

/** Rendert hero-sectie op index.html vanuit overMij. */
function renderHero() {
    const el = document.getElementById('render-hero');
    if (!el) return;
    const d = overMij;
    const foto = d.portret
        ? `<img class="hero-photo" src="${esc(d.portret)}" alt="${esc(d.portretAlt)}">`
        : `<div class="hero-photo-placeholder" aria-hidden="true">${esc(siteConfig.naam[0])}</div>`;
    el.innerHTML = `
        ${foto}
        <div class="hero-text">
            <p class="page-eyebrow">Over mij</p>
            <h1 class="hero-name">${esc(siteConfig.naam)}</h1>
            <p class="hero-tagline">${esc(d.tagline)}</p>
            <p class="hero-quote">"${esc(d.citaat)}"</p>
        </div>`;
}

/** Rendert de quick-facts kaartjes vanuit overMij.quickFacts. */
function renderQuickFacts() {
    const el = document.getElementById('render-quickfacts');
    if (!el) return;
    el.innerHTML = overMij.quickFacts.map(f => `
        <div class="fact-card">
            <div class="fact-label">${esc(f.label)}</div>
            <div class="fact-value">${esc(f.waarde)}</div>
        </div>`).join('');
}

/** Rendert de bio-alinea's vanuit overMij.bio. */
function renderBio() {
    const el = document.getElementById('render-bio');
    if (!el) return;
    el.innerHTML = overMij.bio.map(t => `<p style="font-size:15px;color:var(--text);line-height:1.75;margin-top:12px;">${esc(t)}</p>`).join('');
}

/** Rendert de hobbykaartjes vanuit de hobbies array. */
function renderHobbies() {
    const el = document.getElementById('render-hobbies');
    if (!el) return;
    el.innerHTML = hobbies.map(h => `
        <div class="hobby-card">
            <div class="hobby-title">${esc(h.title)}</div>
            <div class="hobby-desc">${esc(h.desc)}</div>
        </div>`).join('');
}

/** Rendert de drie foto's onderaan Over mij vanuit fotoTeaser. */
function renderFotoTeaser() {
    const el = document.getElementById('render-fototeaser');
    if (!el) return;
    el.innerHTML = fotoTeaser.map(f => `
        <a href="fotografie.html" style="display:block;border-radius:12px;overflow:hidden;height:180px;">
            <img src="${esc(f.src)}" alt="${esc(f.alt)}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
        </a>`).join('');
}


// ══════════════════════════════════════════════
//  RENDER — OPDRACHTEN
// ══════════════════════════════════════════════

/**
 * Rendert alle projectkaarten vanuit de opdrachten array.
 * Elk project krijgt automatisch een uniek reflectie-id (r0, r1, …).
 */
function renderOpdrachten() {
    const el = document.getElementById('render-opdrachten');
    if (!el) return;

    el.innerHTML = opdrachten.map((p, i) => {
        const rid = `r${i}`;

        // Foto of placeholder
        const fotoHTML = p.foto.src
            ? `<img src="${esc(p.foto.src)}" alt="${esc(p.foto.alt)}" loading="lazy">
               <div class="photo-label">${esc(p.foto.label || '')}</div>`
            : `<div class="card-img-placeholder">${esc(p.foto.emoji || '')} ${esc(p.foto.naam || '')}</div>`;

        // Badge type
        const badgeClass = p.badgeType === 'personal' ? 'badge-personal' : 'badge-school';
        const badgeLabel = p.badgeType === 'personal' ? 'Persoonlijk' : 'School';

        // Reflectie-tags
        const reflTagsHTML = (p.reflTags || [])
            .map(t => `<span class="refl-tag">${esc(t)}</span>`).join('');

        return `
        <div class="card" data-tags="${esc(p.tags)}">
            <div class="card-img">${fotoHTML}</div>
            <div class="card-body">
                <div class="badge-row">
                    <span class="badge ${badgeClass}">${badgeLabel}</span>
                    <span class="badge badge-world">${esc(p.betawereld)}</span>
                </div>
                <h3 class="card-title">${esc(p.titel)}</h3>
                <p class="card-desc">${esc(p.beschrijving)}</p>
                <div class="card-footer">
                    <span class="pride-text">Trots op: ${esc(p.trotsOp)}</span>
                    <button class="refl-btn"
                            onclick="toggleReflectie('${rid}', this)"
                            aria-expanded="false"
                            aria-controls="${rid}">
                        Reflectie ↓
                    </button>
                </div>
            </div>
            <div class="refl-panel" id="${rid}" hidden>
                <p>"${esc(p.reflectie)}"</p>
                <div class="refl-tags">${reflTagsHTML}</div>
            </div>
        </div>`;
    }).join('');
}


// ══════════════════════════════════════════════
//  RENDER — SKILLS
// ══════════════════════════════════════════════

/** Rendert één rij skill-kaarten vanuit een array. */
function _renderSkillGrid(arr) {
    return arr.map(s => {
        const kleurVar = s.kleur === 'teal' ? 'var(--teal)' : 'var(--coral)';
        return `
        <div class="skill-card">
            <div class="skill-icon">${esc(s.icon)}</div>
            <div class="skill-name">${esc(s.naam)}</div>
            <div class="skill-desc">${esc(s.desc)}</div>
            <div class="skill-level">
                <div class="skill-level-bar" style="width:${s.level}%;background:${kleurVar};"></div>
            </div>
        </div>`;
    }).join('');
}

/** Rendert technische skills. */
function renderSkillsTechnisch() {
    const el = document.getElementById('render-skills-tech');
    if (!el) return;
    el.innerHTML = _renderSkillGrid(skills.technisch);
}

/** Rendert persoonlijke competenties. */
function renderSkillsPersoonlijk() {
    const el = document.getElementById('render-skills-pers');
    if (!el) return;
    el.innerHTML = _renderSkillGrid(skills.persoonlijk);
}


// ══════════════════════════════════════════════
//  RENDER — FOTOGRAFIE
// ══════════════════════════════════════════════

/** Rendert de galerij vanuit de fotos array. */
function renderFotos() {
    const el = document.getElementById('render-fotos');
    if (!el) return;
    el.innerHTML = fotos.map(f =>
        `<img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy">`
    ).join('');
}


// ══════════════════════════════════════════════
//  RENDER — POP
// ══════════════════════════════════════════════

/** Rendert alle leerdoel-kaarten vanuit de leerdoelen array. */
function renderPOP() {
    const el = document.getElementById('render-pop');
    if (!el) return;

    const smartLabels = { s: 'Specifiek', m: 'Meetbaar', a: 'Acceptabel', r: 'Realistisch', t: 'Tijdgebonden' };

    el.innerHTML = leerdoelen.map((ld, i) => {
        const pid = `pop-r${i}`;
        const pct = ld.voortgang;
        const offset = ringOffset(pct);

        const smartCells = Object.entries(smartLabels).map(([key, label]) => `
            <div class="smart-cell">
                <div class="smart-letter">${key.toUpperCase()}</div>
                <div class="smart-name">${label}</div>
                <div class="smart-text">${esc(ld.smart[key] || '')}</div>
            </div>`).join('');

        return `
        <div class="pop-card">
            <div class="pop-header">
                <div>
                    <div class="pop-num">Leerdoel ${i + 1}</div>
                    <h3 class="pop-title">${esc(ld.titel)}</h3>
                </div>
                <div class="ring-wrap">
                    <svg width="52" height="52" viewBox="0 0 52 52" aria-label="Voortgang ${pct}%">
                        <circle cx="26" cy="26" r="21" fill="none" stroke="#EDE8E1" stroke-width="4"/>
                        <circle cx="26" cy="26" r="21" fill="none" stroke="#D85A30" stroke-width="4"
                            stroke-dasharray="131.9"
                            stroke-dashoffset="${offset}"
                            stroke-linecap="round"
                            transform="rotate(-90 26 26)"/>
                    </svg>
                    <span class="ring-label">${pct}%</span>
                    <div class="ring-status">${esc(ld.status)}</div>
                </div>
            </div>
            <div class="smart-grid">${smartCells}</div>
            <button class="reflect-bar"
                    onclick="togglePopReflectie('${pid}', this)"
                    aria-expanded="false"
                    aria-controls="${pid}">
                <span>Reflectie — hoe gaat het?</span>
                <span class="refl-arrow">▾</span>
            </button>
            <div class="refl-panel" id="${pid}" hidden>
                <p>"${esc(ld.reflectie)}"</p>
            </div>
        </div>`;
    }).join('');
}
