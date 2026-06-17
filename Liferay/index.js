/* ============================================================
   PLANES MASCOTAS — SURA  |  Liferay Fragment JS
   ============================================================
   ⚠️  ASSETS TEMPORALES — reemplazar antes de producción.
   Ver sección 4 del README / HANDOFF-planes-mascotas.md
   ============================================================ */

/* ── Assets — reemplazar URLs con rutas definitivas del CDN ── */
const A = {
  dog: 'https://www.figma.com/api/mcp/asset/0fbaccda-56fb-4bcb-8113-82c0cd0e9869', // DS nodo 4498:358
  cat: 'https://www.figma.com/api/mcp/asset/67fa460b-f1ba-4edb-876b-e580ff8bc8e5', // DS nodo 4498:359
  paw: 'https://www.figma.com/api/mcp/asset/d8abe781-b30f-409b-914f-cfa34079c53d', // DS nodo 4498:360
};

const SVG_CHEVRON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 9L12 16.5L20 9" stroke="#2D6DF6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const DS_CHECK = `<span class="ds-check" aria-label="Incluido">
  <img src="https://www.figma.com/api/mcp/asset/b4799175-5524-4782-97ea-59f3e8ddf71c" width="24" height="24" alt="">
</span>`; // DS: Iconos/Stepper/Check_círculo-azul

const DS_DASH = `<span class="ds-dash" aria-label="No incluido">
  <img src="https://www.figma.com/api/mcp/asset/8744f884-99db-4bdf-af74-ad3cdeef1e4e" width="24" height="24" alt="">
</span>`; // DS: Iconos/Toast_Tags/Equis_círculo

/* ── Data — Tabs ── */
const TABS = [
  { key: 'perros', short: 'Planes Perros', long: 'Planes para Perros', icon: A.dog, alt: 'Perro', inset: '12.5% 8.33% 13.3% 8.31%' },
  { key: 'gatos',  short: 'Planes Gatos',  long: 'Planes para Gatos',  icon: A.cat, alt: 'Gato',  inset: '15.33% 8.33% 15.36% 8.33%' },
];

/* ── Data — Planes ── */
const PLANES = {
  perros: [
    {
      name: 'Plan Esencial', price: '$46.500',
      desc: 'Para quienes quieren protección básica ante accidentes o enfermedades.',
      cov: [
        { lbl: 'Gastos veterinarios',   val: '$2.000.000', note: 'Por vigencia' },
        { lbl: 'Auxilio funerario',     val: '-',           note: 'No está incluido en el Plan esencial' },
        { lbl: 'Responsabilidad civil', val: '50 SMMLV',    note: 'Opcional' },
      ],
      whyTitle: 'Por que elegir el Plan Esencial',
      whyDesc: null,
      secs: [
        { title: 'Para prevenir enfermedades', copago: null,
          items: ['Información y actividades de bienestar Sura', 'Teleorientación 24/7', '1 desparasitación interna al año'] },
        { title: 'Si se enferma o tiene un accidente', copago: 'Copago: 15% del servicio (mínimo $40.000)',
          items: ['Atención de urgencias', 'Hospitalización', 'Cirugía', 'Consulta por enfermedad', 'Endoscopia digestiva', 'Eutanasia'] },
      ],
    },
    {
      name: 'Plan Clásico', price: '$96.200',
      desc: 'Si valoras lo esencial y deseas más protección, este Plan aumenta las coberturas para tu mascota.',
      cov: [
        { lbl: 'Gastos veterinarios',   val: '$4.200.000', note: 'Por vigencia' },
        { lbl: 'Auxilio funerario',     val: '$400.000',   note: 'Por reembolso' },
        { lbl: 'Responsabilidad civil', val: '50 SMMLV',   note: 'Opcional' },
      ],
      whyTitle: 'Por que elegir el Plan Clásico',
      whyDesc: { pre: 'Tienes todo lo del ', bold: 'Plan Esencial ', suf: 'más las coberturas de:' },
      secs: [
        { title: 'Para prevenir enfermedades', copago: null,
          items: ['Consulta preventiva anual', 'Vacuna anual pentavalente y rabia'] },
        { title: 'Si se enferma o tiene un accidente', copago: 'Copago: 15% del servicio (mínimo $40.000)',
          items: ['Consulta por especialista', 'Laboratorio ambulatorio', 'Rayos X y ecografía ambulatoria'] },
      ],
    },
    {
      name: 'Plan Global', price: '$157.400',
      desc: 'Si buscas la mejor y la más completa protección para tu mascota, ¡este Plan es para ella!',
      cov: [
        { lbl: 'Gastos veterinarios',   val: '$7.200.000', note: 'Por vigencia' },
        { lbl: 'Auxilio funerario',     val: '$650.000',   note: 'Por reembolso' },
        { lbl: 'Responsabilidad civil', val: '50 SMMLV',   note: 'Opcional' },
      ],
      whyTitle: 'Por que elegir el Plan Global',
      whyDesc: { pre: 'Tienes todo lo del ', bold: 'Plan Esencial y Clásico', suf: '<br>más las coberturas de:' },
      secs: [
        { title: 'Para prevenir enfermedades', copago: null,
          items: ['2 desparasitaciones internas por año'] },
        { title: 'Si se enferma o tiene un accidente', copago: 'Copago: 15% del servicio (mínimo $40.000)',
          items: ['Consulta domiciliaria', 'Resonancia', 'Tomografía'] },
      ],
    },
  ],
  gatos: [
    {
      name: 'Plan Esencial', price: '$38.300',
      desc: 'Para quienes quieren protección básica ante accidentes o enfermedades.',
      cov: [
        { lbl: 'Gastos veterinarios', val: '$2.000.000', note: 'Por vigencia' },
        { lbl: 'Auxilio funerario',   val: '-',           note: 'No está incluido en el Plan esencial' },
      ],
      whyTitle: 'Por que elegir el Plan Esencial',
      whyDesc: null,
      secs: [
        { title: 'Para prevenir enfermedades', copago: null,
          items: ['Información y actividades de bienestar Sura', 'Teleorientación 24/7', '1 desparasitación interna al año'] },
        { title: 'Si se enferma o tiene un accidente', copago: 'Copago: 15% del servicio (mínimo $40.000)',
          items: ['Atención de urgencias', 'Hospitalización', 'Cirugía', 'Consulta por enfermedad', 'Endoscopia digestiva', 'Eutanasia', 'Consulta domiciliaria'] },
      ],
    },
    {
      name: 'Plan Clásico', price: '$90.600',
      desc: 'Si valoras lo esencial y deseas más protección, este Plan aumenta las coberturas para tu mascota.',
      cov: [
        { lbl: 'Gastos veterinarios', val: '$4.200.000', note: 'Por vigencia' },
        { lbl: 'Auxilio funerario',   val: '$400.000',   note: 'Por reembolso' },
      ],
      whyTitle: 'Por que elegir el Plan Clásico',
      whyDesc: { pre: 'Tienes todo lo del ', bold: 'Plan Esencial', suf: ' más las coberturas de:' },
      secs: [
        { title: 'Para prevenir enfermedades', copago: null,
          items: ['Consulta preventiva anual', 'Vacuna anual triple felina y rabia'] },
        { title: 'Si se enferma o tiene un accidente', copago: 'Copago: 15% del servicio (mínimo $40.000)',
          items: ['Consulta por especialista', 'Laboratorio ambulatorio', 'Rayos X y ecografía ambulatoria'] },
      ],
    },
    {
      name: 'Plan Global', price: '$152.100',
      desc: 'Si buscas la mejor y la más completa protección para tu mascota, ¡este Plan es para ella!',
      cov: [
        { lbl: 'Gastos veterinarios', val: '$7.200.000', note: 'Por vigencia' },
        { lbl: 'Auxilio funerario',   val: '$650.000',   note: 'Por reembolso' },
      ],
      whyTitle: 'Por que elegir el Plan Global',
      whyDesc: { pre: 'Tienes todo lo del ', bold: 'Plan Esencial y Clásico', suf: '<br>más las coberturas de:' },
      secs: [
        { title: 'Para prevenir enfermedades', copago: null,
          items: ['2 desparasitaciones internas por año'] },
        { title: 'Si se enferma o tiene un accidente', copago: 'Copago: 15% del servicio (mínimo $40.000)',
          items: ['Resonancia', 'Tomografía'] },
      ],
    },
  ],
};

/* ── Data — Acordeón comparador ── */
const _n = (lbl, sub) => `${lbl}<br><span style="color:var(--gris);font-size:11px;font-weight:400;line-height:13.75px">${sub}</span>`;

const ACCORDION_DATA = {
  perros: [
    {
      title: 'Atención preventiva',
      sub:   'No requiere copago',
      rows: [
        ['Actividades bienestar SURA',                    true,  true,  true ],
        ['Teleorientación 24/7',                          true,  true,  true ],
        [_n('Desparasitación interna', 'Por vigencia'),   '1',   '1',   '2'  ],
        ['Consulta preventiva anual',                     false, true,  true ],
        [_n('Vacuna anual', '(Pentavalente + Rabia)'),    false, true,  true ],
      ],
    },
    {
      title: 'Atención por accidente y enfermedad',
      sub:   'Copago de 15% del servicio, mínimo $40.000',
      rows: [
        ['Atención urgencias',                                         true,  true,  true ],
        ['Hospitalización',                                            true,  true,  true ],
        ['Cirugía',                                                    true,  true,  true ],
        ['Consulta por enfermedad',                                    true,  true,  true ],
        [_n('Endoscopia digestiva', '(terapéutica)'),                  true,  true,  true ],
        ['Eutanasia',                                                  true,  true,  true ],
        ['Rayos X y ecografía',                                        false, true,  true ],
        ['Consulta domiciliaria',                                      false, false, true ],
        ['Resonancia y tomografía',                                    false, false, true ],
        [_n('Consulta por especialista', '(Tiene límite de eventos)'), '-',   '4 al año', '6 al año'],
        [_n('Laboratorio ambulatorio', '(Tiene límite de eventos)'),   '-',   '4 al año', '6 al año'],
      ],
    },
  ],
  gatos: [
    {
      title: 'Atención preventiva',
      sub:   'No requiere copago',
      rows: [
        ['Actividades bienestar SURA',                    true,  true,  true ],
        ['Teleorientación 24/7',                          true,  true,  true ],
        [_n('Desparasitación interna', 'Por vigencia'),   '1',   '1',   '2'  ],
        ['Consulta preventiva anual',                     false, true,  true ],
        [_n('Vacuna anual', '(Triple felina + Rabia)'),   false, true,  true ],
      ],
    },
    {
      title: 'Atención por accidente y enfermedad',
      sub:   'Copago de 15% del servicio, mínimo $40.000',
      rows: [
        ['Atención urgencias',                                         true,  true,  true ],
        ['Hospitalización',                                            true,  true,  true ],
        ['Cirugía',                                                    true,  true,  true ],
        ['Consulta por enfermedad',                                    true,  true,  true ],
        [_n('Endoscopia digestiva', '(terapéutica)'),                  true,  true,  true ],
        ['Eutanasia',                                                  true,  true,  true ],
        ['Rayos X y ecografía',                                        false, true,  true ],
        ['Consulta domiciliaria',                                      true,  true,  true ],
        ['Resonancia y tomografía',                                    false, false, true ],
        [_n('Consulta por especialista', '(Tiene límite de eventos)'), '-',   '4 al año', '6 al año'],
        [_n('Laboratorio ambulatorio', '(Tiene límite de eventos)'),   '-',   '4 al año', '6 al año'],
      ],
    },
  ],
};

/* ── Render helpers ── */
function cellVal(v) {
  if (v === true)  return DS_CHECK;
  if (v === false) return DS_DASH;
  return `<span class="ac-val-text">${v}</span>`;
}

function tbl(ac) {
  const plans = ['Esencial', 'Clásico', 'Global'];
  const paw = `<img class="paw-badge-img" src="${A.paw}" alt="">`;
  const headerRow = `<div class="ac-tbl-row ac-tbl-row--header">
    <div></div>
    ${plans.map(p => `<div class="ac-plan-badge">${paw}<span class="badge-txt"><span class="badge-plan-lbl">Plan </span>${p}</span></div>`).join('')}
  </div>`;
  const dataRows = ac.rows.map(([lbl, v1, v2, v3], i) => `
    <div class="ac-tbl-row${i % 2 === 0 ? ' ac-tbl-row--stripe' : ''}">
      <div class="ac-tbl-label">${lbl}</div>
      <div class="ac-tbl-val">${cellVal(v1)}</div>
      <div class="ac-tbl-val">${cellVal(v2)}</div>
      <div class="ac-tbl-val">${cellVal(v3)}</div>
    </div>`).join('');
  return `<div class="ac-tbl">${headerRow}${dataRows}</div>`;
}

function covRows(covs) {
  return covs.map((c, i) => `
    <div class="cov-row">
      <div class="cov-row__text">
        <div class="cov-row__top">
          <span class="cov-lbl">${c.lbl}</span>
          <span class="cov-val">${c.val}</span>
        </div>
        <span class="cov-note">${c.note}</span>
      </div>
      ${i < covs.length - 1 ? '<div class="cov-divider"></div>' : ''}
    </div>`).join('');
}

function whyDesc(d) {
  if (!d) return '';
  return `<p class="why-desc">${d.pre}<strong>${d.bold}</strong>${d.suf}</p>`;
}

function whySecs(secs) {
  return secs.map(s => `
    <div class="why-sec">
      <span class="why-sec__title">${s.title}</span>
      ${s.copago ? `<span class="why-sec__copago">${s.copago}</span>` : ''}
      <ul class="why-sec__list">${s.items.map(i => `<li><span style="line-height:normal">${i}</span></li>`).join('')}</ul>
    </div>`).join('');
}

function card(p, idx) {
  const toggleId = `why-${idx}`;
  return `
  <article class="plan-card">
    <div class="plan-card__head">
      <h3 class="card-name">${p.name}</h3>
      <div class="card-price-row">
        <span class="price-desde">Desde</span>
        <span class="price-val">${p.price}</span>
        <span class="price-periodo">/ mensual</span>
      </div>
      <p class="card-desc">${p.desc}</p>
    </div>
    <div class="card-cov-wrap">
      <div class="card-cov-inner">${covRows(p.cov)}</div>
    </div>
    <button class="card-toggle" onclick="toggleWhy(this,'${toggleId}')" aria-expanded="false">
      <span class="card-toggle__label">Ver detalles</span>
      <span class="card-toggle__arrow">
        <span class="ds-chevron">${SVG_CHEVRON}</span>
      </span>
    </button>
    <div class="card-why" id="${toggleId}">
      <div class="why-inner">
        <p class="why-title">${p.whyTitle}</p>
        ${whyDesc(p.whyDesc)}
        ${whySecs(p.secs)}
      </div>
    </div>
    <div class="card-cta">
      <button class="btn-cotizar">Cotizar</button>
    </div>
  </article>`;
}

function panel(key, active) {
  const plans = PLANES[key];
  const el = document.createElement('div');
  el.className = 'planes__panel' + (active ? ' active' : '');
  el.id = 'panel-' + key;
  el.innerHTML = `<div class="planes__grid">${plans.map((p, i) => card(p, key + i)).join('')}</div>`;
  return el;
}

function tabs() {
  return TABS.map((t, i) => `
    <button class="tab-btn${i === 0 ? ' active' : ''}" onclick="switchTab('${t.key}',this)">
      <span class="tab-icon-wrap">
        <span class="tab-icon-inner" style="inset:${t.inset}">
          <img class="tab-icon" src="${t.icon}" alt="${t.alt}">
        </span>
      </span>
      <span class="tab-label tab-label--short">${t.short}</span>
      <span class="tab-label tab-label--long">${t.long}</span>
    </button>`).join('');
}

function acordeon(species) {
  return ACCORDION_DATA[species].map((ac, i) => `
    <div class="ac-item" id="ac${i}">
      <button class="ac-btn" onclick="toggleAc(this.closest('.ac-item'))">
        <div class="ac-btn__txt">
          <span class="ac-btn__title">${ac.title}</span>
          <span class="ac-btn__sub">${ac.sub}</span>
        </div>
        <span class="ac-btn__icon">
          <span class="ds-chevron">${SVG_CHEVRON}</span>
        </span>
      </button>
      <div class="ac-body">${tbl(ac)}</div>
    </div>`).join('');
}

/* ── Mount ── */
(function () {
  const root    = document.getElementById('planes');
  const compare = root.querySelector('.compare');
  document.getElementById('tabs-el').innerHTML = tabs();
  root.insertBefore(panel('perros', true),  compare);
  root.insertBefore(panel('gatos',  false), compare);
  document.getElementById('acordeon-el').innerHTML = acordeon('perros');
})();

/* ── Interacciones ── */
function switchTab(key, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.planes__panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + key).classList.add('active');
  document.getElementById('acordeon-el').innerHTML = acordeon(key);
}

function toggleWhy(btn, id) {
  const why = document.getElementById(id);
  btn.classList.toggle('open');
  btn.setAttribute('aria-expanded', btn.classList.contains('open'));
  why.classList.toggle('open');
}

function toggleAc(item) {
  item.classList.toggle('open');
}
