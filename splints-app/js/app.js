// ─── STATE ────────────────────────────────────────────────────────────────────

const state = {
  mode: 'browse',
  filterRegion: 'all',
  filterInjury: 'all',
  filterSetting: 'all',
  selectedId: null,
  quizIndex: 0,
  quizAnswered: false,
  quizScore: 0,
  quizOrder: [],
  theme: 'dark',
  mobilePanel: 'list'  // mobile: 'list' | 'detail'
};

function isMobile() { return window.innerWidth < 768; }

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function getFiltered() {
  return SPLINTS.filter(s => {
    if (state.filterRegion  !== 'all' && !s.regions.includes(state.filterRegion))  return false;
    if (state.filterInjury  !== 'all' && !s.injuries.includes(state.filterInjury)) return false;
    if (state.filterSetting !== 'all' && !s.setting.includes(state.filterSetting)) return false;
    return true;
  });
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────

function renderSidebar() {
  const filtered = getFiltered();
  document.getElementById('splint-count').textContent = `(${filtered.length} of ${SPLINTS.length})`;
  const list = document.getElementById('splint-list');
  list.innerHTML = '';
  filtered.forEach(s => {
    const el = document.createElement('div');
    el.className = 'splint-item' + (state.selectedId === s.id ? ' active' : '');
    el.innerHTML = `<div class="dot" style="background:${s.color}"></div>
      <div><div class="name">${s.name}</div><div class="tag">${s.category}</div></div>`;
    el.onclick = () => { state.selectedId = s.id; updateAll(); };
    list.appendChild(el);
  });
}

// ─── CONTENT ──────────────────────────────────────────────────────────────────

function renderContent() {
  const area = document.getElementById('content-area');
  if (isMobile()) { renderContentMobile(area); return; }
  if (state.mode === 'quiz') { renderQuiz(); return; }
  if (!state.selectedId) {
    area.innerHTML = `<div class="empty-state"><div class="big">🩹</div><p>Select a splint from the sidebar to explore it.</p></div>`;
    return;
  }
  const s = SPLINTS.find(x => x.id === state.selectedId);
  if (!s) return;

  const regionLabels  = { upper:'Upper Extremity', lower:'Lower Extremity', spine:'Spine/Pelvis' };
  const injuryLabels  = { fracture:'Fracture', dislocation:'Dislocation', softtissue:'Soft Tissue', traction:'Traction' };
  const settingLabels = { commercial:'Commercial', improvised:'Improvised', hospital:'Hospital/ED' };

  area.innerHTML = `<div class="splint-card">
    <div class="card-header">
      <div class="card-icon" style="background:${s.color}22;border:1px solid ${s.color}44">${s.emoji}</div>
      <div>
        <div class="card-title">${s.name}</div>
        <div class="card-subtitle">${s.description}</div>
        <div class="badge-row">
          <span class="badge badge-category">${s.category}</span>
          ${s.regions.map(r =>`<span class="badge badge-region">${regionLabels[r]||r}</span>`).join('')}
          ${s.injuries.map(i =>`<span class="badge badge-injury">${injuryLabels[i]||i}</span>`).join('')}
          ${s.setting.map(t  =>`<span class="badge badge-setting">${settingLabels[t]||t}</span>`).join('')}
        </div>
      </div>
    </div>
    <div class="sections-grid">
      <div class="section">
        <h3><span class="icon">✅</span> Indications (When to Use)</h3>
        <ul class="indicator-list">${s.indications.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="section">
        <h3><span class="icon">🚫</span> Contraindications</h3>
        <ul class="indicator-list contra">${s.contraindications.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="section">
        <h3><span class="icon">⚠️</span> Warnings &amp; Monitoring</h3>
        <ul class="indicator-list warn">${s.warnings.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="section">
        <h3><span class="icon">🖼</span> Diagram</h3>
        <div class="diagram-wrap">${getDiagram(s.diagramType)}</div>
      </div>
      <div class="section full">
        <h3><span class="icon">📋</span> Application Steps</h3>
        <ol class="steps-list">${s.steps.map((step,i)=>`<li><span class="step-num">${i+1}</span>${step}</li>`).join('')}</ol>
      </div>
      <div class="section full">
        <h3><span class="icon">★</span> Clinical Pearls</h3>
        <ul class="pearl-list">${s.pearls.map(p=>`<li>${p}</li>`).join('')}</ul>
      </div>
    </div>
  </div>`;
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────

function renderQuiz() {
  const area = document.getElementById('content-area');
  if (state.quizOrder.length === 0) {
    state.quizOrder = [...Array(QUESTIONS.length).keys()]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    state.quizIndex = 0; state.quizScore = 0;
  }
  if (state.quizIndex >= state.quizOrder.length) {
    area.innerHTML = `<div class="quiz-area"><div class="quiz-card">
      <div class="quiz-progress">Quiz complete!</div>
      <div style="font-size:18px;font-weight:700;color:var(--textbright);margin-bottom:12px">Final Score</div>
      <div class="quiz-score" style="font-size:28px">${state.quizScore} / 10</div>
      <div style="font-size:13px;color:var(--text2);margin-top:8px">${
        state.quizScore>=9?'Excellent work — you\'re ready for the field!':
        state.quizScore>=7?'Good job. Review the missed questions.':
        'Keep studying — these scenarios are critical for field care.'
      }</div>
      <div class="quiz-btn-row" style="margin-top:20px">
        <button class="quiz-btn" onclick="restartQuiz()">New Quiz</button>
        <button class="quiz-btn ghost" onclick="setMode('browse')">Back to Browse</button>
      </div>
    </div></div>`;
    updatePrompt(); return;
  }
  const qi = state.quizOrder[state.quizIndex];
  const q  = QUESTIONS[qi];
  area.innerHTML = `<div class="quiz-area"><div class="quiz-card">
    <div class="quiz-progress">Question ${state.quizIndex+1} of 10 &nbsp;|&nbsp; <span class="quiz-score">Score: ${state.quizScore}</span> &nbsp;|&nbsp; Pool: ${QUESTIONS.length} questions</div>
    <div class="quiz-scenario">${q.scenario}</div>
    <div class="quiz-options" id="quiz-opts">
      ${q.options.map((opt,i)=>`<button class="quiz-opt" data-idx="${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
    </div>
    <div class="quiz-explanation" id="quiz-exp">${q.explanation}</div>
    <div class="quiz-btn-row" id="quiz-nav" style="display:none">
      <button class="quiz-btn" onclick="nextQuestion()">Next Question →</button>
    </div>
  </div></div>`;
  updatePrompt();
}

function answerQuiz(idx) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  const qi = state.quizOrder[state.quizIndex];
  const q  = QUESTIONS[qi];
  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    if (i === q.correct) btn.classList.add('correct');
    else if (i === idx && idx !== q.correct) btn.classList.add('wrong');
    else btn.classList.add('reveal');
  });
  if (idx === q.correct) state.quizScore++;
  document.getElementById('quiz-exp').classList.add('show');
  document.getElementById('quiz-nav').style.display = 'flex';
  updatePrompt();
}

function nextQuestion() {
  state.quizIndex++;
  state.quizAnswered = false;
  renderContent();
}

function restartQuiz() {
  state.quizOrder    = [];
  state.quizIndex    = 0;
  state.quizScore    = 0;
  state.quizAnswered = false;
  renderContent();
}

// ─── PROMPT ───────────────────────────────────────────────────────────────────

function updatePrompt() {
  const out = document.getElementById('prompt-output');
  if (state.mode === 'quiz') {
    if (state.quizIndex >= 10 && state.quizOrder.length > 0) {
      out.textContent = `I just completed an EMT splint quiz and scored ${state.quizScore}/10 from a pool of ${QUESTIONS.length} questions. Can you quiz me further with new scenario-based questions? Focus on traction splints, pelvic binders, C-collar sizing, mallet finger, and CSM assessment.`;
    } else if (state.quizAnswered && state.quizOrder.length > 0) {
      const q = QUESTIONS[state.quizOrder[state.quizIndex]];
      out.textContent = `I'm studying EMT splinting. I just answered this scenario: "${q.scenario.replace(/<[^>]+>/g,'')}" — explain the reasoning in more depth, including what complications could arise from choosing the wrong splint in this situation.`;
    } else {
      out.textContent = `I'm studying EMT splinting scenarios. Generate 3 more clinical scenario questions testing splint selection, contraindication identification, and application technique. Include one about pelvic fractures and one about cervical spine immobilization. Format each with a scenario, four options, the correct answer, and a detailed explanation.`;
    }
    return;
  }
  if (!state.selectedId) {
    out.textContent = `Select a splint in Browse mode, or answer a question in Quiz mode to generate a study prompt.`;
    return;
  }
  const s = SPLINTS.find(x => x.id === state.selectedId);
  const regionMap = { upper:'upper extremity', lower:'lower extremity', spine:'spine and pelvis' };
  const regions   = s.regions.map(r => regionMap[r]||r).join(' and ');
  const injuries  = s.injuries.join(', ');
  out.textContent = `I'm an EMT student studying the ${s.name} (${s.category} splint), used for ${injuries} injuries of the ${regions}. Key contraindications include: ${s.contraindications.slice(0,2).join('; ')}. Please give me:
1. A deeper explanation of why this splint is chosen over alternatives for its primary indication
2. A realistic field scenario with full patient presentation where this splint would be used
3. The most common application errors EMT students make with this splint
4. How CSM assessment findings would change your management before and after applying it`;
}

// ─── CONTROLS ────────────────────────────────────────────────────────────────

function toggleChip(el) {
  const group = el.dataset.group;
  document.querySelectorAll(`.chip[data-group="${group}"]`).forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  if (group === 'region')  state.filterRegion  = el.dataset.val;
  if (group === 'injury')  state.filterInjury  = el.dataset.val;
  if (group === 'setting') state.filterSetting = el.dataset.val;
  if (state.selectedId && !getFiltered().find(s => s.id === state.selectedId)) {
    state.selectedId = null;
  }
  updateAll();
}

function setMode(m) {
  state.mode = m;
  document.getElementById('tab-browse').classList.toggle('active', m === 'browse');
  document.getElementById('tab-quiz').classList.toggle('active',   m === 'quiz');
  if (m === 'quiz' && state.quizOrder.length === 0) state.quizAnswered = false;
  if (m === 'browse') { state.mobilePanel = 'list'; if (isMobile()) state.selectedId = null; }
  updateAll();
}

function applyPreset(name) {
  const presets = {
    upper:   { region:'upper', injury:'all',      setting:'all',        select:'sam' },
    lower:   { region:'lower', injury:'all',      setting:'all',        select:'pillow' },
    traction:{ region:'lower', injury:'traction', setting:'commercial', select:'traction-hare' },
    spine:   { region:'spine', injury:'all',      setting:'all',        select:'c-collar' },
    field:   { region:'all',   injury:'fracture', setting:'improvised', select:'improvised' },
    all:     { region:'all',   injury:'all',      setting:'all',        select:null }
  };
  const p = presets[name];
  if (!p) return;
  state.filterRegion  = p.region;
  state.filterInjury  = p.injury;
  state.filterSetting = p.setting;
  if (p.select) state.selectedId = p.select;
  state.mode = 'browse';
  document.getElementById('tab-browse').classList.add('active');
  document.getElementById('tab-quiz').classList.remove('active');
  ['region','injury','setting'].forEach(g => {
    const val = state['filter' + g.charAt(0).toUpperCase() + g.slice(1)];
    document.querySelectorAll(`.chip[data-group="${g}"]`).forEach(c => {
      c.classList.toggle('active', c.dataset.val === val);
    });
  });
  updateAll();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('theme-btn').textContent = state.theme === 'dark' ? '🌙' : '☀️';
}

function copyPrompt() {
  const text = document.getElementById('prompt-output').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-btn');
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1500);
  });
}

function updateAll() {
  renderSidebar();
  renderContent();
  updatePrompt();
}


// ─── MOBILE FUNCTIONS ─────────────────────────────────────────────────────────

function updateBottomNav(tab) {
  if (!isMobile()) return;
  const bb = document.getElementById('bnav-browse');
  const bq = document.getElementById('bnav-quiz');
  if (bb) bb.classList.toggle('active', tab === 'browse');
  if (bq) bq.classList.toggle('active', tab === 'quiz');
}

function openMobileFilters() {
  document.getElementById('mobile-filter-overlay').classList.add('open');
  document.getElementById('mobile-filter-sheet').classList.add('open');
}

function closeMobileFilters() {
  document.getElementById('mobile-filter-overlay').classList.remove('open');
  document.getElementById('mobile-filter-sheet').classList.remove('open');
}

function selectSplintMobile(id) {
  state.selectedId  = id;
  state.mobilePanel = 'detail';
  updateAll();
}

function goBackMobile() {
  state.mobilePanel = 'list';
  state.selectedId  = null;
  updateAll();
}

function toggleFooter() {
  document.querySelector('footer').classList.toggle('expanded');
}

function renderContentMobile(area) {
  if (state.mode === 'quiz') {
    renderQuiz();
    updateBottomNav('quiz');
    return;
  }
  updateBottomNav('browse');
  if (state.mobilePanel === 'list' || !state.selectedId) {
    renderMobileList(area);
  } else {
    renderMobileDetail(area);
  }
}

function renderMobileList(area) {
  const filtered = getFiltered();
  let html = `<div class="mobile-list-hdr">
    <span class="mobile-list-title">Splints</span>
    <span class="mobile-list-count">${filtered.length} of ${SPLINTS.length}</span>
  </div>`;
  if (filtered.length === 0) {
    html += '<div class="empty-state"><div class="big">🔍</div><p>No splints match. Tap <b>Filters</b> to adjust.</p></div>';
  } else {
    filtered.forEach(s => {
      html += `<div class="mobile-splint-card" onclick="selectSplintMobile('${s.id}')">
        <div class="dot" style="background:${s.color}"></div>
        <div class="cinfo">
          <div class="cname">${s.name}</div>
          <div class="ctag">${s.category}</div>
        </div>
        <span class="carr">›</span>
      </div>`;
    });
  }
  area.innerHTML = html;
  updatePrompt();
}

function renderMobileDetail(area) {
  const s = SPLINTS.find(x => x.id === state.selectedId);
  if (!s) { state.mobilePanel = 'list'; renderMobileList(area); return; }

  const regionLabels  = { upper:'Upper Extremity', lower:'Lower Extremity', spine:'Spine/Pelvis' };
  const injuryLabels  = { fracture:'Fracture', dislocation:'Dislocation', softtissue:'Soft Tissue', traction:'Traction' };
  const settingLabels = { commercial:'Commercial', improvised:'Improvised', hospital:'Hospital/ED' };

  area.innerHTML = `<button class="mobile-back-btn" onclick="goBackMobile()">← Back to list</button>
  <div class="splint-card">
    <div class="card-header">
      <div class="card-icon" style="background:${s.color}22;border:1px solid ${s.color}44">${s.emoji}</div>
      <div>
        <div class="card-title">${s.name}</div>
        <div class="card-subtitle">${s.description}</div>
        <div class="badge-row">
          <span class="badge badge-category">${s.category}</span>
          ${s.regions.map(r  => `<span class="badge badge-region">${regionLabels[r]||r}</span>`).join('')}
          ${s.injuries.map(i => `<span class="badge badge-injury">${injuryLabels[i]||i}</span>`).join('')}
          ${s.setting.map(t  => `<span class="badge badge-setting">${settingLabels[t]||t}</span>`).join('')}
        </div>
      </div>
    </div>
    <div class="sections-grid">
      <div class="section">
        <h3><span class="icon">✅</span> Indications (When to Use)</h3>
        <ul class="indicator-list">${s.indications.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="section">
        <h3><span class="icon">🚫</span> Contraindications</h3>
        <ul class="indicator-list contra">${s.contraindications.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="section">
        <h3><span class="icon">⚠️</span> Warnings &amp; Monitoring</h3>
        <ul class="indicator-list warn">${s.warnings.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="section">
        <h3><span class="icon">🖼</span> Diagram</h3>
        <div class="diagram-wrap">${getDiagram(s.diagramType)}</div>
      </div>
      <div class="section full">
        <h3><span class="icon">📋</span> Application Steps</h3>
        <ol class="steps-list">${s.steps.map((step,i)=>`<li><span class="step-num">${i+1}</span>${step}</li>`).join('')}</ol>
      </div>
      <div class="section full">
        <h3><span class="icon">★</span> Clinical Pearls</h3>
        <ul class="pearl-list">${s.pearls.map(p=>`<li>${p}</li>`).join('')}</ul>
      </div>
    </div>
  </div>`;
  updatePrompt();
}

// ─── INIT ──────────────────────────────────────────────────────────────────────────────

if (isMobile()) {
  state.selectedId  = null;
  state.mobilePanel = 'list';
} else {
  state.selectedId = 'sam';
}

// Tap footer label to expand/collapse on mobile
document.querySelector('footer').addEventListener('click', function(e) {
  if (isMobile() && !e.target.closest('#copy-btn')) { toggleFooter(); }
});

// Re-render when viewport crosses mobile breakpoint
var _rt;
window.addEventListener('resize', function() {
  clearTimeout(_rt);
  _rt = setTimeout(updateAll, 150);
});

updateAll();
