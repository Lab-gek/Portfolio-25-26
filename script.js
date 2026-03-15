// ============================================================
//  script.js — Gedeelde interactie voor alle pagina's
//  Leest inhoud uit data.js en bouwt de pagina op.
//  Bewerk dit bestand NIET voor inhoud — gebruik data.js
// ============================================================

// ── Helpers ──────────────────────────────────────────────────
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

// ── Navigatie: actieve link markeren ─────────────────────────
function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
  });
}

// ── Reflectie toggle ─────────────────────────────────────────
function toggleReflectie(panelId, btn) {
  const panel = document.getElementById(panelId);
  const isOpen = !panel.hidden;
  panel.hidden = isOpen;
  btn.textContent = isOpen ? 'Reflectie ↓' : 'Reflectie ↑';
  btn.setAttribute('aria-expanded', String(!isOpen));
}

// ── Filter (opdrachten & fotografie) ─────────────────────────
function filter(tag, btn) {
  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  $$('.card, .gallery-item').forEach(el => {
    const tags = el.dataset.tags || '';
    el.style.display = (tag === 'all' || tags.includes(tag)) ? '' : 'none';
  });
}

// ── POP reflectie toggle ──────────────────────────────────────
function togglePop(panelId, btn) {
  const panel = document.getElementById(panelId);
  const arrow = btn.querySelector('.refl-arrow');
  const isOpen = !panel.hidden;
  panel.hidden = isOpen;
  if (arrow) arrow.classList.toggle('open', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
}

// ════════════════════════════════════════════════════════════
//  PAGINA RENDERERS — bouwen HTML uit data.js
// ════════════════════════════════════════════════════════════

// ── index.html ───────────────────────────────────────────────
function renderIndex() {
  if (!document.getElementById('hero-name')) return;
  const a = PORTFOLIO_DATA.about;

  // Initialen fallback als er geen foto is
  const photoEl = document.getElementById('hero-photo-wrap');
  if (photoEl) {
    if (a.photo) {
      photoEl.innerHTML = `<img src="${a.photo}" alt="${a.photoAlt}" class="hero-photo">`;
    } else {
      const initials = a.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
      photoEl.innerHTML = `<div class="hero-initials">${initials}</div>`;
    }
  }

  const nameEl = document.getElementById('hero-name');
  if (nameEl) nameEl.textContent = a.name;

  const tagEl = document.getElementById('hero-tagline');
  if (tagEl) tagEl.textContent = a.tagline;

  const quoteEl = document.getElementById('hero-quote');
  if (quoteEl) quoteEl.textContent = `"${a.quote}"`;

  // About text array
  const aboutTextEl = document.getElementById('about-text');
  if (aboutTextEl && a.aboutText) {
    aboutTextEl.innerHTML = a.aboutText.map(t => `<p style="margin-bottom: 12px;">${t}</p>`).join('');
  }

  // Hobbies
  const hobbiesEl = document.getElementById('hobbies-grid');
  if (hobbiesEl && a.hobbies) {
    hobbiesEl.innerHTML = a.hobbies.map(h => `
      <div class="hobby-card">
        <div class="hobby-title">${h.icon} ${h.title}</div>
        <div class="hobby-desc">${h.desc}</div>
      </div>`).join('');
  }

  // Quick facts
  const factsEl = document.getElementById('quick-facts');
  if (factsEl) {
    factsEl.innerHTML = a.quickFacts.map(f => `
      <div class="fact-card">
        <div class="fact-label">${f.label}</div>
        <div class="fact-value">${f.value}</div>
      </div>`).join('');
  }

  // Foto teaser
  const teaserEl = document.getElementById('photo-teaser');
  if (teaserEl) {
    const cells = a.photoTeaser.slice(0, 3).map(p =>
      `<div class="teaser-cell"><img src="${p.src}" alt="${p.alt}" loading="lazy"></div>`
    ).join('');
    teaserEl.innerHTML = cells +
      `<a href="fotografie.html" class="teaser-more">Alle foto's →</a>`;
  }

  // Pagina titel
  document.title = `${a.name} — Over mij`;
  const logoEls = $$('.logo');
  logoEls.forEach(el => el.textContent = a.name);
}

// ── opdrachten.html ──────────────────────────────────────────
function renderOpdrachten() {
  const grid = document.getElementById('grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.projects.map(p => `
    <div class="card" data-tags="${[p.type, ...p.tags.filter(t => t !== p.type)].join(' ')}">
      <div class="card-img">
        ${p.photo 
          ? `<img src="${p.photo}" alt="${p.photoAlt}" loading="lazy">` 
          : `<div class="card-img-placeholder" style="animation: pulsePlaceholder 4s ease infinite; background: linear-gradient(135deg, var(--border), var(--teal-light), var(--border)); background-size: 200% 200%; color: var(--teal); font-family: 'DM Sans'; font-weight: 500;">${p.placeholder || 'Foto volgt nog'}</div>`}
        <div class="photo-label">${p.photoLabel}</div>
      </div>
      <div class="card-body">
        <div class="badge-row">
          <span class="badge badge-${p.type}">${p.type === 'school' ? 'School' : 'Persoonlijk'}</span>
          <span class="badge badge-world">${p.world}</span>
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-footer">
          <span class="pride-text">Trots op: ${p.proudOf}</span>
          <button class="refl-btn"
                  onclick="toggleReflectie('${p.id}', this)"
                  aria-expanded="false"
                  aria-controls="${p.id}">
            Reflectie ↓
          </button>
        </div>
      </div>
      <div class="refl-panel" id="${p.id}" hidden>
        <p>"${p.reflection}"</p>
        <div class="refl-tags">
          ${p.skills.map(s => `<span class="refl-tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>`).join('');

  document.title = `${PORTFOLIO_DATA.about.name} — Opdrachten & Projecten`;
  $$('.logo').forEach(el => el.textContent = PORTFOLIO_DATA.about.name);
}

// ── skills.html ──────────────────────────────────────────────
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  // Build a lookup from project id → title
  const projectMap = {};
  PORTFOLIO_DATA.projects.forEach(p => { projectMap[p.id] = p.title; });

  grid.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
    <div class="skill-category">
      <div class="skill-cat-title">${cat.category}</div>
      ${cat.items.map(item => `
        <div class="skill-item">
          <span class="skill-name">${item.name}</span>
          <div class="skill-bar-wrap">
            <div class="skill-bar" style="width: ${item.level * 20}%"></div>
          </div>
        </div>
        ${item.evidence.length ? `
        <div class="skill-evidence">
          ${item.evidence.map(eid =>
            `<a href="opdrachten.html" class="evidence-link">${projectMap[eid] || eid}</a>`
          ).join('')}
        </div>` : ''}
      `).join('')}
    </div>`).join('');

  document.title = `${PORTFOLIO_DATA.about.name} — Skills`;
  $$('.logo').forEach(el => el.textContent = PORTFOLIO_DATA.about.name);
}

// ── fotografie.html ──────────────────────────────────────────
function renderFotografie() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.gallery.map(img => `
    <div class="gallery-item" data-tags="${img.category}">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
    </div>`).join('');

  document.title = `${PORTFOLIO_DATA.about.name} — Fotografie`;
  $$('.logo').forEach(el => el.textContent = PORTFOLIO_DATA.about.name);

  // Gallery text
  const textEl = document.getElementById('gallery-text');
  const textContainerEl = document.getElementById('gallery-text-container');
  if (textEl && textContainerEl && PORTFOLIO_DATA.galleryText) {
    textEl.textContent = PORTFOLIO_DATA.galleryText;
    textContainerEl.hidden = false;
  }
}

// ── pop.html ─────────────────────────────────────────────────
function renderPop() {
  const grid = document.getElementById('pop-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.leerdoelen.map((l, i) => {
    const prog = Math.max(0, Math.min(100, l.progress));
    const dashoffset = (131.9 * (1 - prog / 100)).toFixed(1);
    const ringColor = prog >= 100 ? '#10B981' : '#2563EB'; // Green for 100%, Royal Blue otherwise
    const statusText = prog >= 100 ? 'Behaald ✓' : `${prog}% bezig`;

    return `
    <div class="pop-card">
      <div class="pop-header">
        <div>
          <div class="pop-num">Leerdoel ${i + 1}</div>
          <h3 class="pop-title">${l.title}</h3>
        </div>
        <div class="ring-wrap">
          <svg width="52" height="52" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="21" fill="none" stroke="#EDE8E1" stroke-width="4"/>
            <circle cx="26" cy="26" r="21" fill="none"
              stroke="${ringColor}" stroke-width="4"
              stroke-dasharray="131.9" stroke-dashoffset="${dashoffset}"
              stroke-linecap="round" transform="rotate(-90 26 26)"/>
          </svg>
          <span class="ring-label">${prog}%</span>
          <div class="ring-status">${statusText}</div>
        </div>
      </div>
      <div class="smart-grid">
        ${['s','m','a','r','t'].map(key => `
          <div class="smart-cell">
            <div class="smart-letter">${key.toUpperCase()}</div>
            <div class="smart-name">${{s:'Specifiek',m:'Meetbaar',a:'Acceptabel',r:'Realistisch',t:'Tijdgebonden'}[key]}</div>
            <div class="smart-text">${l.smart[key]}</div>
          </div>`).join('')}
      </div>
      <button class="reflect-bar"
              onclick="togglePop('pop-${l.id}', this)"
              aria-expanded="false"
              aria-controls="pop-${l.id}">
        <span>Reflectie — hoe gaat het?</span>
        <span class="refl-arrow">▾</span>
      </button>
      <div class="refl-panel" id="pop-${l.id}" hidden>
        <p>"${l.reflection}"</p>
      </div>
    </div>`;
  }).join('');

  document.title = `${PORTFOLIO_DATA.about.name} — POP`;
  $$('.logo').forEach(el => el.textContent = PORTFOLIO_DATA.about.name);
}

// ════════════════════════════════════════════════════════════
//  DATA HINT — klein knopje rechtsonder dat uitlegt
//  waar je data.js moet aanpassen voor de huidige pagina
// ════════════════════════════════════════════════════════════
const DATA_HINTS = {
  'index.html': {
    section: 'about',
    description: 'Pas <code>about</code> aan in <code>data.js</code>',
    details: [
      { label: 'Naam & tagline',  code: 'about.name / about.tagline' },
      { label: 'Foto',            code: 'about.photo' },
      { label: 'Citaat',          code: 'about.quote' },
      { label: 'Snelle feitjes',  code: 'about.quickFacts[ ]' },
      { label: 'Teaser foto\'s',  code: 'about.photoTeaser[ ]' },
    ],
  },
  'opdrachten.html': {
    section: 'projects',
    description: 'Voeg projecten toe in <code>projects[ ]</code> in <code>data.js</code>',
    details: [
      { label: 'Nieuw project',    code: 'Kopieer een project-object en verhoog het id' },
      { label: 'Foto',             code: 'project.photo = "fotos/naam.jpg"' },
      { label: 'Betawereld badge', code: 'project.world' },
      { label: 'Filter tags',      code: 'project.tags: ["school","nature"] etc.' },
      { label: 'Reflectie',        code: 'project.reflection' },
    ],
  },
  'skills.html': {
    section: 'skills',
    description: 'Pas <code>skills[ ]</code> aan in <code>data.js</code>',
    details: [
      { label: 'Niveau (1–5)',     code: 'skill.level' },
      { label: 'Bewijs links',     code: 'skill.evidence: ["p1","p2"]  ← project id\'s' },
      { label: 'Nieuwe categorie', code: 'Voeg een nieuw object toe aan skills[ ]' },
    ],
  },
  'fotografie.html': {
    section: 'gallery',
    description: 'Voeg foto\'s toe in <code>gallery[ ]</code> in <code>data.js</code>',
    details: [
      { label: 'Nieuwe foto',      code: '{ src: "fotos/naam.jpg", alt: "...", category: "natuur" }' },
      { label: 'Bestandsgrootte',  code: 'Max 200 KB — gebruik squoosh.app' },
    ],
  },
  'pop.html': {
    section: 'leerdoelen',
    description: 'Pas <code>leerdoelen[ ]</code> aan in <code>data.js</code>',
    details: [
      { label: 'Voortgang',        code: 'leerdoel.progress: 0–100' },
      { label: 'SMART per letter', code: 'leerdoel.smart.s / .m / .a / .r / .t' },
      { label: 'Nieuw leerdoel',   code: 'Kopieer een leerdoel-object en verhoog het id' },
    ],
  },
};

function renderDataHint() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const hint = DATA_HINTS[page];
  if (!hint) return;

  const hintBtn = document.createElement('div');
  hintBtn.className = 'data-hint';
  hintBtn.textContent = '⟵ data.js';
  hintBtn.onclick = () => overlay.classList.add('open');
  document.body.appendChild(hintBtn);

  const overlay = document.createElement('div');
  overlay.className = 'data-overlay';
  overlay.innerHTML = `
    <div class="data-modal">
      <h2>Aanpassen in data.js</h2>
      <p class="sub">${hint.description} om deze pagina bij te werken.</p>
      ${hint.details.map(d => `
        <div class="data-section">
          <h3>${d.label}</h3>
          <p><code>${d.code}</code></p>
        </div>`).join('')}
      <button class="data-close" onclick="this.closest('.data-overlay').classList.remove('open')">
        Sluiten
      </button>
    </div>`;
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
  document.body.appendChild(overlay);
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  markActiveNav();
  renderIndex();
  renderOpdrachten();
  renderSkills();
  renderFotografie();
  renderPop();
  renderDataHint();
});
