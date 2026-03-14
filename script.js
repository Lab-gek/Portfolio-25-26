/**
 * script.js — Gedeelde interactie voor alle portfolio pagina's
 */

/**
 * Toont of verbergt het reflectiepaneel van een kaart.
 * @param {string} panelId - Het id van het reflectiepaneel (bijv. 'r1')
 * @param {HTMLElement} knop - De knop die werd geklikt
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
 * Toont of verbergt het POP reflectiepaneel (met pijl in knop).
 * @param {string} panelId - Het id van het reflectiepaneel
 * @param {HTMLElement} knop - De knop die werd geklikt
 */
function togglePopReflectie(panelId, knop) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const isOpen = !panel.hidden;

  panel.hidden = isOpen;
  knop.setAttribute('aria-expanded', String(!isOpen));
}

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
