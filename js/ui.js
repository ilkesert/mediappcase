// ═══════════════════════════════════════════
// UI INTERACTIONS, TABS, MODALS & EVENT HANDLERS
// ═══════════════════════════════════════════

// Populate Lab and Imaging Tests tabs dynamically from database
function populateTestsUI() {
  TESTS.categories.forEach(cat => {
    const tabButton = document.createElement('button');
    tabButton.className = 'tab';
    tabButton.id = `tab-btn-${cat.id}`;
    tabButton.textContent = `${cat.icon} ${cat.name}`;
    tabButton.onclick = () => switchTab(cat.id);
    
    document.getElementById('tabs-header').appendChild(tabButton);

    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content';
    tabContent.id = `tab-content-${cat.id}`;

    // Loop through subcategories
    cat.subcategories.forEach(sub => {
      const subHeader = document.createElement('div');
      subHeader.className = 'test-subcategory';
      subHeader.textContent = sub.name;
      tabContent.appendChild(subHeader);

      const grid = document.createElement('div');
      grid.className = 'test-list';

      sub.tests.forEach(test => {
        const item = document.createElement('div');
        item.className = 'test-item';
        item.id = `test-item-${test.id}`;
        
        // Checkbox layout
        item.innerHTML = `
          <div class="checkbox">✓</div>
          <span>${test.name}</span>
        `;
        
        item.onclick = () => {
          window.game.toggleTest(test.id, item);
        };
        grid.appendChild(item);
      });

      tabContent.appendChild(grid);
    });

    document.getElementById('tabs-container').appendChild(tabContent);
  });

  // Activate first tab initially
  if (TESTS.categories.length > 0) {
    switchTab(TESTS.categories[0].id);
  }
}

function switchTab(categoryId) {
  // Reset all tabs
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));

  // Activate selected
  const btn = document.getElementById(`tab-btn-${categoryId}`);
  const content = document.getElementById(`tab-content-${categoryId}`);
  if (btn) btn.classList.add('active');
  if (content) content.classList.add('active');

  // Hide placeholder results if active results tab is showing
  const placeholder = document.getElementById('no-results-placeholder');
  if (categoryId === 'results') {
    if (placeholder && Object.keys(window.game.currentCase.testsOrdered).length > 0) {
      placeholder.classList.add('hidden');
    }
  }
}

// ═══════════════════════════════════════════
// DIAGNOSIS MODAL UTILITIES
// ═══════════════════════════════════════════
let selectedDiagnosisId = null;

function showDiagnosisModal() {
  selectedDiagnosisId = null;
  const modal = document.getElementById('diagnosis-modal');
  modal.classList.add('active');
  
  // Populate the disease picker list with all 220+ diseases
  const listContainer = document.getElementById('diagnosis-list');
  listContainer.innerHTML = '';

  // Get all diseases (core + dynamic system mapping list)
  const list = [];
  DISEASES.forEach(d => {
    list.push({ id: d.id, name: d.name, difficulty: d.difficulty });
  });

  Object.entries(SYSTEM_DISEASES).forEach(([cat, items]) => {
    items.forEach(d => {
      list.push({ id: d.id, name: d.name, difficulty: d.difficulty });
    });
  });

  // Sort list alphabetically
  list.sort((a, b) => a.name.localeCompare(b.name, 'tr'));

  list.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'diagnosis-option';
    el.id = `diag-opt-${item.id}`;
    el.innerHTML = `
      <span class="disease-num">${index + 1}.</span>
      <span class="disease-name">${item.name}</span>
      <span class="difficulty-dot ${item.difficulty}"></span>
    `;
    el.onclick = () => selectDiagnosis(item.id, item.name);
    listContainer.appendChild(el);
  });

  // Setup search input
  const searchInput = document.getElementById('diagnosis-search');
  searchInput.value = '';
  searchInput.focus();
  searchInput.oninput = (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.diagnosis-option').forEach(opt => {
      const name = opt.querySelector('.disease-name').textContent.toLowerCase();
      if (name.includes(query)) {
        opt.classList.remove('hidden');
      } else {
        opt.classList.add('hidden');
      }
    });
  };
}

function selectDiagnosis(id, name) {
  document.querySelectorAll('.diagnosis-option').forEach(el => el.classList.remove('selected'));
  const selectedEl = document.getElementById(`diag-opt-${id}`);
  if (selectedEl) {
    selectedEl.classList.add('selected');
  }
  selectedDiagnosisId = name; // Save the name string
}

function closeDiagnosisModal() {
  document.getElementById('diagnosis-modal').classList.remove('active');
}

function confirmDiagnosis() {
  if (!selectedDiagnosisId) {
    alert("Lütfen listeden bir teşhis seçin.");
    return;
  }
  closeDiagnosisModal();
  window.game.submitDiagnosis(selectedDiagnosisId);
}

// ═══════════════════════════════════════════
// TREATMENT MODAL UTILITIES
// ═══════════════════════════════════════════
function showTreatmentModal() {
  const modal = document.getElementById('treatment-modal');
  modal.classList.add('active');

  // Fill in active treatments choice list
  const treatmentsContainer = document.getElementById('medications-selection');
  treatmentsContainer.innerHTML = '';

  // Get current case target treatments or default drug lists
  const choices = [
    ...window.game.currentCase.treatments,
    "Yatış ve Monitorizasyon",
    "Oksijen (Nazal / Maske)",
    "Serum Fizyolojik IV Hidrasyon",
    "Metoprolol 50mg PO",
    "Aspirin 100mg PO",
    "Atorvastatin 20mg PO",
    "Furosemid 40mg IV",
    "Seftriakson 1g IV",
    "Diazepam 5mg IV",
    "Alprazolam 0.25mg PO",
    "Adrenalin 0.3mg IM",
    "Metilprednizolon 40mg IV"
  ];

  // Unique choices
  const uniqueChoices = [...new Set(choices)];
  uniqueChoices.forEach(choice => {
    const item = document.createElement('div');
    item.className = 'test-item';
    item.innerHTML = `
      <div class="checkbox">✓</div>
      <span>${choice}</span>
    `;
    item.onclick = () => {
      item.classList.toggle('selected');
    };
    treatmentsContainer.appendChild(item);
  });
}

function closeTreatmentModal() {
  document.getElementById('treatment-modal').classList.remove('active');
}

function confirmTreatment() {
  const selectedMeds = [];
  document.querySelectorAll('#medications-selection .test-item.selected').forEach(el => {
    selectedMeds.push(el.querySelector('span').textContent);
  });

  const consultEl = document.getElementById('consultation-selection');
  const consultation = consultEl.value;

  const success = window.game.submitTreatments(selectedMeds, consultation);
  if (success) {
    closeTreatmentModal();
  }
}

// ═══════════════════════════════════════════
// SCREEN NAVIGATION UTILITIES
// ═══════════════════════════════════════════
function showGameScreen() {
  document.getElementById('home-screen').classList.remove('active');
  document.getElementById('summary-screen').classList.remove('active');
  document.getElementById('archive-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
  
  if (window.game) {
    window.game.resetGame();
  }
}

function showHomeScreen() {
  document.getElementById('game-screen').classList.remove('active');
  document.getElementById('summary-screen').classList.remove('active');
  document.getElementById('archive-screen').classList.remove('active');
  document.getElementById('home-screen').classList.add('active');
}

function showSummaryScreen() {
  document.getElementById('game-screen').classList.remove('active');
  document.getElementById('home-screen').classList.remove('active');
  document.getElementById('archive-screen').classList.remove('active');
  
  const summary = document.getElementById('summary-screen');
  summary.classList.add('active');

  // Fill in final scores
  const score = window.game.score;
  const scoreEl = document.getElementById('final-score');
  scoreEl.textContent = score;

  // Grade color
  if (score >= 900) {
    scoreEl.className = 'summary-score excellent celebrate';
  } else if (score >= 700) {
    scoreEl.className = 'summary-score good';
  } else if (score >= 400) {
    scoreEl.className = 'summary-score average';
  } else {
    scoreEl.className = 'summary-score poor';
  }

  // Populate rows
  document.getElementById('summary-diagnoses').textContent = `${window.game.correctDiagnosesCount} / ${window.game.casesTotal}`;
  document.getElementById('summary-penalties').textContent = window.game.orderedIncorrectCount;
  document.getElementById('summary-gains').textContent = `+${window.game.correctDiagnosesCount * 50}`;
  document.getElementById('summary-net').textContent = score;
}

function showArchiveScreen() {
  document.getElementById('game-screen').classList.remove('active');
  document.getElementById('summary-screen').classList.remove('active');
  document.getElementById('home-screen').classList.remove('active');
  document.getElementById('archive-screen').classList.add('active');
  
  initArchiveCategoryPills();
  renderArchive();
}

const CATEGORY_META = {
  kardiyovaskuler: { label: "Kardiyovasküler", icon: "❤️", color: "#ff1744" },
  solunum: { label: "Solunum", icon: "🫁", color: "#00e5ff" },
  gastrointestinal: { label: "Gastrointestinal", icon: "🍕", color: "#ff9100" },
  endokrin: { label: "Endokrin", icon: "🦋", color: "#e040fb" },
  noroloji: { label: "Nöroloji", icon: "🧠", color: "#b388ff" },
  nefroloji: { label: "Nefroloji", icon: "🧪", color: "#40c4ff" },
  hematoloji: { label: "Hematoloji", icon: "🩸", color: "#ff5252" },
  romatoloji: { label: "Romatoloji", icon: "🦴", color: "#00e676" },
  enfeksiyon: { label: "Enfeksiyon", icon: "🦠", color: "#ffd600" },
  dermatoloji: { label: "Dermatoloji", icon: "🧴", color: "#d500f9" },
  kadinhastaliklari: { label: "Kadın Hastalıkları", icon: "👶", color: "#ff4081" },
  acil: { label: "Acil Tıp", icon: "⚡", color: "#ff1744" },
  psikiyatri: { label: "Psikiyatri", icon: "🧠", color: "#b388ff" }
};

let archiveSelectedCategory = "";
let archiveRenderedDiseases = [];

function initArchiveCategoryPills() {
  const container = document.getElementById('archive-category-pills');
  if (!container || container.children.length > 0) return;
  
  let html = `<button class="category-pill active" data-cat="" onclick="setArchiveCategory('', this)">🌐 Tümü</button>`;
  
  Object.entries(CATEGORY_META).forEach(([key, meta]) => {
    html += `
      <button class="category-pill" data-cat="${key}" style="--cat-color: ${meta.color}" onclick="setArchiveCategory('${key}', this)">
        <span>${meta.icon}</span> ${meta.label}
      </button>
    `;
  });
  
  container.innerHTML = html;
}

function setArchiveCategory(cat, element) {
  archiveSelectedCategory = cat;
  const pills = document.querySelectorAll('#archive-category-pills .category-pill');
  pills.forEach(pill => pill.classList.remove('active'));
  element.classList.add('active');
  filterArchive();
}

function renderArchive() {
  const container = document.getElementById('archive-list-container');
  if (!container) return;
  
  const allDiseases = [...DISEASES];
  Object.entries(SYSTEM_DISEASES).forEach(([cat, list]) => {
    list.forEach(d => {
      if (!allDiseases.some(x => x.id === d.id)) {
        allDiseases.push({
          ...d,
          category: cat,
          treatments: d.treatments || ["Yatış ve Monitorizasyon", "Hastalığa Spesifik Tedavi", "Destek Tedavisi"],
          requiredTests: d.requiredTests || ["ekg", "wbc", "crp"],
          contraindicated: d.contraindicated || [],
          consultations: d.consultations || [`${cat.toUpperCase()} Konsültasyonu`]
        });
      }
    });
  });
  
  archiveRenderedDiseases = allDiseases;
  document.getElementById('archive-total-count').textContent = allDiseases.length;
  const statsTotal = document.getElementById('stats-total-diseases');
  if (statsTotal) statsTotal.textContent = allDiseases.length;
  filterArchive();
}

function getTestDisplayName(key) {
  const names = {
    troponin_i: "Troponin I",
    troponin_t: "Troponin T",
    ck: "Kreatin Kinaz (CK)",
    ckmb: "CK-MB",
    wbc: "Lökosit (WBC)",
    crp: "CRP",
    ekg: "EKG Bulgusu",
    ddimer: "D-Dimer",
    glukoz: "Kan Şekeri",
    tit: "Tam İdrar Tetkiki",
    potasyum: "Potasyum (K+)",
    laktat: "Laktat",
    kan_kultur: "Kan Kültürü",
    prokalsitonin: "Prokalsitonin",
    usg_abdomen: "Batın USG",
    bt_anjio_pulmoner: "Pulmoner BT Anjiyo",
    pa_ac: "Akciğer Grafisi (PA AC)",
    akg_ph: "AKG pH",
    akg_hco3: "AKG HCO3",
    akg_po2: "AKG pO2",
    akg_pco2: "AKG pCO2",
    bt_toraks: "Toraks BT",
    eko: "Ekokardiyografi (EKO)",
    mr_kranial: "Kranial MR",
    bogaz_kultur: "Boğaz Kültürü",
    beta_hcg: "Beta-hCG",
    usg_pelvik: "Pelvik USG",
    endoskopi: "Endoskopi",
    tsh: "TSH",
    st4: "Serbest T4 (sT4)",
    kreatinin: "Kreatinin",
    idrar_kultur: "İdrar Kültürü",
    alt: "ALT"
  };
  return names[key] || key.toUpperCase().replace(/_/g, ' ');
}

function highlightSearchText(text, query) {
  if (!query || !text) return text;
  const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function filterArchive() {
  const query = document.getElementById('archive-search-input').value.trim().toLowerCase();
  const diffFilter = document.getElementById('archive-difficulty-filter').value;
  const container = document.getElementById('archive-list-container');
  if (!container) return;
  
  let matchCount = 0;
  let html = "";
  
  archiveRenderedDiseases.forEach(d => {
    // 1. Category check
    if (archiveSelectedCategory && d.category !== archiveSelectedCategory) return;
    
    // 2. Difficulty check
    if (diffFilter && d.difficulty !== diffFilter) return;
    
    // 3. Search text check
    const nameMatch = d.name.toLowerCase().includes(query);
    const complaintsMatch = d.symptoms?.complaints?.some(c => c.toLowerCase().includes(query));
    const storyMatch = d.symptoms?.story?.toLowerCase().includes(query);
    const fmMatch = d.symptoms?.fm?.toLowerCase().includes(query);
    const treatMatch = d.treatments?.some(t => t.toLowerCase().includes(query));
    const abnormMatch = d.abnormals && Object.values(d.abnormals).some(val => String(val).toLowerCase().includes(query));
    
    if (query && !nameMatch && !complaintsMatch && !storyMatch && !fmMatch && !treatMatch && !abnormMatch) return;
    
    matchCount++;
    
    // Column 1
    const catMeta = CATEGORY_META[d.category] || { label: d.category || "Genel", icon: "🏥", color: "#ccc" };
    const nameHtml = highlightSearchText(d.name, query);
    const difficultyLabels = { easy: "Kolay", medium: "Orta", hard: "Zor", expert: "Uzman" };
    const diffLabel = difficultyLabels[d.difficulty] || d.difficulty || "Genel";
    
    let col1 = `
      <div class="archive-col-disease">
        <span class="disease-title">${nameHtml}</span>
        <div class="flex gap-xs" style="flex-wrap: wrap; margin-top: var(--space-xs);">
          <span class="archive-badge category" style="--cat-color: ${catMeta.color}; border-color: ${catMeta.color}40; color: ${catMeta.color};">
            <span>${catMeta.icon}</span> ${catMeta.label}
          </span>
          <span class="difficulty-badge ${d.difficulty || 'easy'}">${diffLabel}</span>
        </div>
        <button class="btn btn-primary btn-sm" onclick="playCaseWithDisease('${d.id}')" style="margin-top: var(--space-md); width: 100%; justify-content: center; gap: var(--space-xs); font-size: 0.8rem; padding: 6px 12px; background: var(--accent-green-dim); border-color: var(--accent-green); color: #000; font-weight: 700;">
          🩺 Vakayı Oyna
        </button>
      </div>
    `;
    
    // Column 2
    let complaintsHtml = "";
    if (d.symptoms?.complaints && d.symptoms.complaints.length > 0) {
      complaintsHtml = `
        <div class="archive-detail-section">
          <div class="archive-detail-title">🗣️ Ana Şikayetler</div>
          <div class="flex gap-xs" style="flex-wrap: wrap;">
      `;
      d.symptoms.complaints.forEach(c => {
        const text = highlightSearchText(c, query);
        complaintsHtml += `<span class="archive-badge category" style="font-size: 0.75rem;">${text}</span>`;
      });
      complaintsHtml += `</div></div>`;
    }
    
    let storyHtml = "";
    if (d.symptoms?.story) {
      const text = highlightSearchText(d.symptoms.story, query);
      storyHtml = `
        <div class="archive-detail-section">
          <div class="archive-detail-title">📖 Başvuru Hikayesi</div>
          <div class="archive-detail-body story">${text}</div>
        </div>
      `;
    }
    
    let fmHtml = "";
    if (d.symptoms?.fm) {
      const text = highlightSearchText(d.symptoms.fm, query);
      fmHtml = `
        <div class="archive-detail-section">
          <div class="archive-detail-title">🩺 Fizik Muayene Bulgusu</div>
          <div class="archive-detail-body" style="font-style: italic;">${text}</div>
        </div>
      `;
    }
    
    let abnormalsHtml = "";
    if (d.abnormals && Object.keys(d.abnormals).length > 0) {
      abnormalsHtml = `
        <div class="archive-detail-section">
          <div class="archive-detail-title">⚠️ Patolojik Laboratuvar & Görüntüleme Bulguları</div>
          <ul class="text-mono" style="font-size: 0.8rem; color: var(--color-warning); padding-left: var(--space-md); list-style-type: square; margin-top: 2px;">
      `;
      Object.entries(d.abnormals).forEach(([key, val]) => {
        if (val) {
          const testName = getTestDisplayName(key);
          const highlightedVal = highlightSearchText(String(val), query);
          abnormalsHtml += `<li><strong>${testName}:</strong> ${highlightedVal}</li>`;
        }
      });
      abnormalsHtml += `</ul></div>`;
    }
    
    let vitalsHtml = "";
    if (d.monitor) {
      const m = d.monitor;
      const getRangeText = (val) => {
        if (!val) return "Normal";
        if (Array.isArray(val)) {
          return val.length === 2 ? `${val[0]}-${val[1]}` : (val.length === 4 ? `${val[0]}/${val[2]}-${val[1]}/${val[3]}` : val.join('-'));
        }
        return val;
      };
      
      const hrText = getRangeText(m.hr);
      const bpText = getRangeText(m.bp);
      const spo2Text = getRangeText(m.spo2);
      const rrText = getRangeText(m.rr);
      const tempText = getRangeText(m.temp);
      const ecgText = m.ecg ? m.ecg.toUpperCase().replace(/_/g, ' ') : "NORMAL";
      
      vitalsHtml = `
        <div class="archive-detail-section">
          <div class="archive-detail-title">🫀 Monitör Vital Değerleri</div>
          <div class="archive-vitals-box">
            <div class="archive-vital-item">
              <span class="v-label">Nabız (HR)</span>
              <span class="v-value ${m.hr && m.hr[0] > 100 ? 'high' : 'normal'}">${hrText} bpm</span>
            </div>
            <div class="archive-vital-item">
              <span class="v-label">Tansiyon (BP)</span>
              <span class="v-value">${bpText} mmHg</span>
            </div>
            <div class="archive-vital-item">
              <span class="v-label">Oksijen (SpO2)</span>
              <span class="v-value ${m.spo2 && m.spo2[1] < 92 ? 'low' : 'normal'}">${spo2Text}%</span>
            </div>
            <div class="archive-vital-item">
              <span class="v-label">Solunum (RR)</span>
              <span class="v-value">${rrText}/dk</span>
            </div>
            <div class="archive-vital-item">
              <span class="v-label">Ateş (TEMP)</span>
              <span class="v-value ${m.temp && m.temp[1] > 38.0 ? 'high' : 'normal'}">${tempText}°C</span>
            </div>
            <div class="archive-vital-item" style="grid-column: span 3; border-top: 1px solid var(--border-subtle); padding-top: var(--space-xs); margin-top: var(--space-xs);">
              <span class="v-label">Ritim (ECG)</span>
              <span class="v-value text-green" style="font-size: 0.75rem;">${ecgText}</span>
            </div>
          </div>
        </div>
      `;
    }
    
    let col2 = `
      <div class="archive-col-presentation">
        ${complaintsHtml}
        ${storyHtml}
        ${fmHtml}
        ${abnormalsHtml}
        ${vitalsHtml}
      </div>
    `;
    
    // Column 3
    let treatmentsHtml = "";
    if (d.treatments && d.treatments.length > 0) {
      treatmentsHtml = `
        <div class="archive-detail-section">
          <div class="archive-detail-title">💊 Doğru Tedavi Protokolü & İlaçlar</div>
          <ul style="padding-left: var(--space-md); margin-top: 2px;">
      `;
      d.treatments.forEach(t => {
        const text = highlightSearchText(t, query);
        treatmentsHtml += `<li style="margin-bottom: 2px;">${text}</li>`;
      });
      treatmentsHtml += `</ul></div>`;
    }
    
    let requiredHtml = "";
    if (d.requiredTests && d.requiredTests.length > 0) {
      requiredHtml = `
        <div class="archive-detail-section">
          <div class="archive-detail-title">🔬 İstenmesi Şart Öncelikli Tetkikler</div>
          <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap; margin-top: 2px;">
      `;
      d.requiredTests.forEach(test => {
        const testName = getTestDisplayName(test);
        requiredHtml += `<span class="archive-badge category" style="font-size: 0.7rem; border-color: rgba(64,196,255,0.3); color: var(--accent-blue); font-family: var(--font-mono);">${testName}</span>`;
      });
      requiredHtml += `</div></div>`;
    }
    
    let contraHtml = "";
    if (d.contraindicated && d.contraindicated.length > 0) {
      contraHtml = `
        <div class="archive-detail-section">
          <div class="archive-detail-title" style="color: var(--color-danger);">🚫 Kontraendike Uygulamalar (Yapılmaması Gerekenler)</div>
          <ul style="padding-left: var(--space-md); color: var(--color-danger); font-size: 0.8rem; margin-top: 2px;">
      `;
      d.contraindicated.forEach(c => {
        const text = highlightSearchText(c, query);
        contraHtml += `<li style="margin-bottom: 2px;">${text}</li>`;
      });
      contraHtml += `</ul></div>`;
    }
    
    let consultHtml = "";
    if (d.consultations && d.consultations.length > 0) {
      consultHtml = `
        <div class="archive-detail-section">
          <div class="archive-detail-title" style="color: var(--accent-purple);">📞 Önerilen Konsültasyon</div>
          <ul style="padding-left: var(--space-md); color: var(--accent-purple); font-size: 0.8rem; margin-top: 2px;">
      `;
      d.consultations.forEach(c => {
        const text = highlightSearchText(c, query);
        consultHtml += `<li style="margin-bottom: 2px;">${text}</li>`;
      });
      consultHtml += `</ul></div>`;
    }
    
    let col3 = `
      <div class="archive-col-treatment">
        ${treatmentsHtml}
        ${requiredHtml}
        ${contraHtml}
        ${consultHtml}
      </div>
    `;
    
    html += `
      <div class="archive-row">
        ${col1}
        ${col2}
        ${col3}
      </div>
    `;
  });
  
  container.innerHTML = html || `
    <div style="grid-column: span 3; text-align: center; padding: var(--space-2xl); color: var(--text-muted);">
      🔍 Arama kriterlerinize uyan hastalık bulunamadı.
    </div>
  `;
  
  document.getElementById('archive-match-count').textContent = matchCount;
  
  let filterDesc = [];
  if (archiveSelectedCategory) {
    const label = CATEGORY_META[archiveSelectedCategory]?.label || archiveSelectedCategory;
    filterDesc.push(`Kategori: ${label}`);
  }
  if (diffFilter) {
    const diffLabels = { easy: "Kolay", medium: "Orta", hard: "Zor", expert: "Uzman" };
    filterDesc.push(`Zorluk: ${diffLabels[diffFilter] || diffFilter}`);
  }
  if (query) {
    filterDesc.push(`Arama: "${query}"`);
  }
  
  document.getElementById('archive-active-filters-text').textContent = 
    filterDesc.length > 0 ? `Aktif Filtreler: ${filterDesc.join(', ')}` : "Filtreler temiz.";
}

function playCaseWithDisease(diseaseId) {
  if (!window.game) {
    window.game = new GameEngine();
  }
  
  // Ensure the game engine is initialized (so the bedside monitor is instantiated)
  if (!window.game.monitor) {
    window.game.init();
  }
  
  document.getElementById('home-screen').classList.remove('active');
  document.getElementById('summary-screen').classList.remove('active');
  document.getElementById('archive-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');

  window.game.selectedTests.clear();
  window.game.selectedTreatments = [];
  window.game.caseScoreChange = 0;
  window.game.orderedIncorrectCount = 0;
  
  window.game.score = 500;
  window.game.currentCaseIndex = 1;
  window.game.casesHistory = [];
  
  window.game.currentCase = generatePatientCase(diseaseId);
  
  if (window.game.monitor && window.game.currentCase.vitals) {
    window.game.monitor.setVitals(window.game.currentCase.vitals.hr, window.game.currentCase.vitals.ecgType);
  }

  window.game.renderPatientUI();
  window.game.resetTestsPanel();
  window.game.clearResultsPanel();
  window.game.updateVitalsDisplay();
  window.game.updateStatsBar();
}


// ═══════════════════════════════════════════
// NEW: CONSULTATION HINTS MODAL HANDLERS
// ═══════════════════════════════════════════
function showConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  modal.classList.add('active');
}

function closeConsultationModal() {
  document.getElementById('consultation-modal').classList.remove('active');
}

function confirmConsultation() {
  const select = document.getElementById('consult-department-selection');
  const dept = select.value;
  if (!dept) {
    alert("Lütfen bir uzmanlık alanı seçin.");
    return;
  }
  closeConsultationModal();
  window.game.requestConsultationHint(dept);
}

// ═══════════════════════════════════════════
// NEW: LIVE TEST SEARCH SYSTEM
// ═══════════════════════════════════════════
function setupTestSearch() {
  const searchInput = document.getElementById('test-search-input');
  if (!searchInput) return;

  searchInput.oninput = (e) => {
    const query = e.target.value.toLowerCase().trim();
    const searchTab = document.getElementById('tab-content-search');
    const searchResultsList = document.getElementById('search-results-list');
    
    if (query.length === 0) {
      // Hide search tab, show active category
      searchTab.style.display = 'none';
      document.querySelectorAll('.tab').forEach(el => el.style.display = '');
      document.querySelectorAll('.tab-content').forEach(el => el.style.display = '');
      
      // Activate last category tab
      const lastActiveTab = document.querySelector('.tab.active');
      if (lastActiveTab) {
        const catId = lastActiveTab.id.replace('tab-btn-', '');
        switchTab(catId);
      }
      return;
    }

    // Show search tab and hide others
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.tab').forEach(el => {
      if (el.id !== 'tab-btn-results') el.style.display = 'none';
    });
    searchTab.style.display = 'block';

    // Clear list
    searchResultsList.innerHTML = '';

    // Search tests map
    const matches = [];
    Object.values(TEST_MAP).forEach(test => {
      // Avoid text internal helper tests
      if (test.id === 'akg_ph' || test.id === 'akg_pco2' || test.id === 'akg_po2' || test.id === 'akg_hco3') return;
      
      if (test.name.toLowerCase().includes(query) || (test.id && test.id.toLowerCase().includes(query)) || (test.subcategory && test.subcategory.toLowerCase().includes(query))) {
        matches.push(test);
      }
    });

    if (matches.length === 0) {
      searchResultsList.innerHTML = `<div class="text-muted py-sm" style="grid-column: 1/-1;">"${query}" ile eşleşen test bulunamadı.</div>`;
      return;
    }

    // Render matches
    matches.forEach(test => {
      const item = document.createElement('div');
      
      // Check if already selected in game state
      const isSelected = window.game.selectedTests.has(test.id);
      item.className = `test-item ${isSelected ? 'selected' : ''}`;
      item.innerHTML = `
        <div class="checkbox">${isSelected ? '✓' : ' '}</div>
        <span>${test.name} (${test.categoryName})</span>
      `;
      
      item.onclick = () => {
        window.game.toggleTest(test.id, item);
      };
      
      searchResultsList.appendChild(item);
    });
  };
}

// ═══════════════════════════════════════════
// NEW: CLINICAL PERFORMANCE FEEDBACK MODAL
// ═══════════════════════════════════════════
function showFeedbackModal(c) {
  const modal = document.getElementById('feedback-modal');
  
  // Set headers
  document.getElementById('fb-case-title').textContent = c.diseaseName;
  document.getElementById('fb-patient-name').textContent = `Hasta: ${c.name}, ${c.age} Yaş, ${c.gender}`;

  // Breakdown container
  const container = document.getElementById('fb-breakdown-container');
  container.innerHTML = '';

  const fb = c.fb;

  if (fb.isSurrender) {
    // Render Surrender Solution Screen
    container.innerHTML += `
      <div class="breakdown-row" style="border-bottom: 2px solid var(--border-glass); padding-bottom: var(--space-sm);">
        <span class="label" style="font-weight: 700; color: var(--color-danger);">🏳️ Vaka Sonucu</span>
        <span class="value negative">PES EDİLDİ (-50 Puan)</span>
      </div>
      <div class="breakdown-row">
        <span class="label" style="font-weight: 700; color: var(--accent-blue);">🔑 Gerçek Teşhis / Tanı</span>
        <span class="value" style="color: var(--accent-blue); font-weight: 700;">${c.diseaseName}</span>
      </div>
    `;

    // Show needed tests
    if (c.requiredTests.length > 0) {
      const testNames = c.requiredTests.map(reqId => TEST_MAP[reqId]?.name || reqId).join(', ');
      container.innerHTML += `
        <div class="breakdown-row" style="border-top: 1px solid var(--border-glass); padding-top: var(--space-xs);">
          <span class="label" style="font-weight: 700; color: var(--color-warning);">🔬 Sipariş Edilmesi Gereken Testler</span>
          <span class="value text-muted" style="font-size: 0.85rem;">${testNames}</span>
        </div>
      `;
    }

    // Show correct treatment
    if (c.treatments.length > 0) {
      container.innerHTML += `
        <div class="breakdown-row" style="border-top: 1px solid var(--border-glass); padding-top: var(--space-xs);">
          <span class="label" style="font-weight: 700; color: var(--accent-green);">💊 Uygulanması Gereken Tedavi</span>
          <span class="value text-muted" style="font-size: 0.85rem;">${c.treatments.join(', ')}</span>
        </div>
      `;
    }

    // Show consultations
    if (c.consultations.length > 0) {
      container.innerHTML += `
        <div class="breakdown-row" style="border-top: 1px solid var(--border-glass); padding-top: var(--space-xs);">
          <span class="label" style="font-weight: 700; color: var(--accent-purple);">📞 İlgili Branş Konsültasyonu</span>
          <span class="value text-muted" style="font-size: 0.85rem;">${c.consultations.join(', ')}</span>
        </div>
      `;
    }

  } else {
    // Render Standard Feedback Evaluation Screen
    container.innerHTML += `
      <div class="breakdown-row" style="border-bottom: 2px solid var(--border-glass); padding-bottom: var(--space-sm);">
        <span class="label" style="font-weight: 700;">🩺 Klinik Teşhis Doğruluğu</span>
        <span class="value ${fb.isCorrectDiag ? 'positive' : 'negative'}">
          ${fb.isCorrectDiag ? 'DOĞRU (+50 Puan)' : `YANLIŞ (${fb.selectedDiag} - Cezalı)`}
        </span>
      </div>
    `;

    // Add Required Correct Tests
    if (fb.correctTests.length > 0) {
      fb.correctTests.forEach(test => {
        container.innerHTML += `
          <div class="breakdown-row">
            <span class="label" style="padding-left: var(--space-md); color: var(--color-success);">✓ İstenen Gerekli Test: ${test.name}</span>
            <span class="value positive">+10 Puan</span>
          </div>
        `;
      });
    }

    // Add Missed Required Tests
    if (fb.missedRequiredTests.length > 0) {
      fb.missedRequiredTests.forEach(test => {
        container.innerHTML += `
          <div class="breakdown-row">
            <span class="label" style="padding-left: var(--space-md); color: var(--color-warning);">✗ Yapılması Gerekirken Atlanan Test: ${test.name}</span>
            <span class="value negative">-20 Puan</span>
          </div>
        `;
      });
    }

    // Add Incorrect/Contraindicated/Unnecessary Tests
    if (fb.incorrectTests.length > 0) {
      fb.incorrectTests.forEach(test => {
        const isContra = test.name.includes('Kontraendike');
        container.innerHTML += `
          <div class="breakdown-row">
            <span class="label" style="padding-left: var(--space-md); color: var(--color-danger);">${isContra ? '☣️ Kontraendike Test İsteği' : '⚠️ Gereksiz Test Siparişi'}: ${test.name}</span>
            <span class="value negative">${test.points} Puan</span>
          </div>
        `;
      });
    }

    // Add Treatment Review
    container.innerHTML += `
      <div class="breakdown-row" style="border-top: 1px solid var(--border-glass); padding-top: var(--space-sm);">
        <span class="label" style="font-weight: 700;">💊 Uygulanan Tedavi Protokolü</span>
        <span class="value ${fb.isCorrectTreatment ? 'positive' : 'negative'}">
          ${fb.isCorrectTreatment ? 'STABİL HASTA (+30 Puan)' : 'EKSİK/YANLIŞ TEDAVİ'}
        </span>
      </div>
    `;
    
    if (fb.selectedTreatments.length > 0) {
      container.innerHTML += `
        <div class="breakdown-row">
          <span class="label" style="padding-left: var(--space-md); color: var(--text-muted);">Uygulanan: ${fb.selectedTreatments.join(', ')}</span>
          <span class="label" style="color: var(--accent-green); font-size: 0.8rem;">İdeal: ${fb.correctTreatments.join(', ')}</span>
        </div>
      `;
    }

    // Add Consultation Status
    if (fb.consultation.details) {
      container.innerHTML += `
        <div class="breakdown-row">
          <span class="label" style="font-weight: 700;">📞 Branş Konsültasyon Yönlendirmesi</span>
          <span class="value ${fb.consultation.isCorrect ? 'positive' : 'negative'}">${fb.consultation.details}</span>
        </div>
      `;
    }
  }

  // Set net change score
  const scoreEl = document.getElementById('fb-net-score');
  scoreEl.textContent = `${fb.netChange >= 0 ? '+' : ''}${fb.netChange} Puan`;
  scoreEl.className = fb.netChange >= 0 ? 'text-green' : 'text-danger';

  // Set clinical discussion note
  const noteEl = document.getElementById('fb-clinical-note');
  noteEl.textContent = getClinicalDiscussionText(c.diseaseId, c.diseaseName);

  modal.classList.add('active');
}

function getClinicalDiscussionText(id, name) {
  const notes = {
    stemi: "Akut STEMI hastalarında ana kural 'Zaman Kastır' (Time is Muscle). Bu hastada acil anjiyografi (PCI) yapılması hayat kurtarıcıdır. EKG'de ST yükselmesi varken efor testi istenmesi iskemi/enfarktüsü tetikleyerek miyokard rüptürü veya ölümcül aritmiye yol açabileceği için kesinlikle kontraendikedir.",
    dka: "Diyabetik Ketoasidoz tedavisi hidrasyon, insülin ve potasyum dengesinin takibidir. İnsülin hücre içine glukoz ile birlikte potasyumu da sokacağı için potasyum seviyesi < 3.3 mEq/L olan hastaya insülin başlanması ani kardiyak arreste neden olur. Bu yüzden potasyum düzeyi kritik öneme sahiptir.",
    appendicitis: "Akut apandisit şüphesinde erken dönemde ağrı kesici verilmesi ağrıyı maskeleyerek perforasyon ve peritonit takibini zorlaştırabilir, bu yüzden tanı kesinleşene kadar analjeziye dikkat edilmelidir. Görüntülemede USG veya batın BT tanıyı netleştirir.",
    anaphylaxis: "Anafilaksi tedavisinde birinci basamak hemen IM Adrenalin'dir. Antihistaminik ve steroidler ancak ikinci basamak destektir. Beta bloker alan hastalarda adrenalin direnci olabileceği için bu ilaçların kullanımı kontraendikasyon oluşturabilir.",
    svt: "SVT tedavisine hemodinamik olarak stabil olan hastada vagal manevralarla (karotis masajı) başlanır. Yanıt alınamazsa 6mg IV Adenozin hızlı bolus yapılır. Adenozin, AV nodu geçici olarak bloke ederek ritmi düzeltir.",
    pneumothorax: "Spontan pnömotoraks hastalarında akciğer grafilerinde sönme alanı izlenir. SFT (spirometri) yapılması akciğer içi basıncı artırarak yırtığı ve sönmeyi büyütebileceği için kontraendikedir. Tedavide göğüs tüpü takılması esastır.",
    dvt: "DVT hastalarında trombusün pulmoner artere fırlayıp emboli oluşturmasını engellemek için hızla antikoagülan (LMWH) başlanmalıdır. Bacak çap ölçümü ve venöz Doppler USG standart teşhis yöntemleridir.",
    iron_deficiency: "Demir Eksikliği Anemisi (DEA) mikrositer anemilerin en sık sebebidir. Laboratuvarda ferritin ilk azalan ve tedavi sonrasında en geç düzelen parametredir. DEA saptanan tüm erkek ve postmenopozal kadın hastalarda, asemptomatik olsalar dahi gizli bir gastrointestinal sistem malignitesi/kanaması yönünden endoskopik/kolonoskopik tarama yapılması TUS ve klinik kılavuzlarda zorunludur. Tedavide en güvenilir IV form demir karboksimaltozdur.",
    b12_deficiency: "B12 Vitamin Eksikliği megaloblastik anemilerin ve inefektif eritropoezin klasik sebebidir. Periferik yaymada makroovalositler ve hipersegmente nötrofiller patognomoniktir. Folat eksikliğinden en önemli farkı, B12 eksikliğinde subakut kombine dejenerasyona bağlı nörolojik semptomların (uyuşma, ataksi, vibrasyon ve pozisyon duyusu kaybı) eşlik etmesidir. Laboratuvarda hem homosistein hem de metilmalonik asit (MMA) yükselir (Folat eksikliğinde MMA normaldir).",
    pernicious_anemia: "Pernisiyöz anemi, mide parietal hücrelerine veya intrinsek faktöre karşı otoantikorların (Anti-IF, Anti-parietal) geliştiği ve B12 emiliminin bozulduğu otoimmün bir hastalıktır. Tedavide ömür boyu parenteral (IM) B12 replasmanı şarttır. Hastaların atrofik gastrit ve mide karsinoid tümör riski yönünden yakından izlenmesi gerekir.",
    aplastic_anemia: "Aplastik anemi, hematopoetik kök hücrelerin hasarı sonucu pansitopeni ve hiposellüler (yağlı) kemik iliği ile karakterizedir. B12 eksikliği ve lösemilerin aksine, fizik muayenede splenomegali ve lenfadenopati (LAP) görülmez. 40 yaş altı ve HLA uygun vericisi olan hastalarda ilk tercih her zaman allojenik kemik iliği naklidir (AKİT). Kalıtsal formu (Fanconi anemisi) ise makrositer olup, boy kısalığı ve başparmak agenezisi ile seyreder.",
    polycythemia_vera: "Polisitemia vera, eritroid serinin otonom artışıyla karakterize klonal bir miyeloproliferatif hastalıktır. Olguların %97'sinde JAK2 V617F mutasyonu pozitiftir. En tipik klinik bulguları pletorik yüz görünümü, eritromelalji ve banyo sonrası histamin salınımına bağlı gelişen şiddetli kaşıntıdır. Sekonder polisitemilerden en önemli farkı, serum eritropoetin (EPO) düzeyinin baskılanmış (düşük) olmasıdır. Tedavide hedef hematokrit (Hct) değerini %45'in altında tutmak için flebotomi uygulanır.",
    essential_thrombocythemia: "Esansiyel trombositemi, megakaryositik serinin kontrolsüz proliferasyonu sonucu trombosit sayısının aşırı artması (>450.000, sıklıkla >1 milyon) ile karakterizedir. JAK2 veya CALR mutasyonları sıktır. Hem mikrovasküler oklüzyonlara bağlı tromboz (felç, gangren) hem de trombositlerin fonksiyonel defektleri veya vWF tüketimi nedeniyle kanamalar bir arada görülebilir. Tedavide sitoredüktif ajanlar (Hidroksiüre, Anagrelid) tercih edilir.",
    primary_myelofibrosis: "Primer miyelofibrozis, kemik iliğinde megakaryositlerden salınan PDGF ve TGF-beta uyarımı sonucu gelişen yaygın kollajen fibrozis sürecidir. İlik fibrotik olduğu için hematopoez dalak ve karaciğere kayar, bu da devasa (masif) splenomegaliye yol açar. Periferik yaymada gözyaşı hücreleri (dakriyositler) ve kemik iliğinde kuru aspirasyon (dry tap) tanı koydurucudur.",
    multiple_myeloma: "Multiple miyelom, monoklonal immünoglobulin (M proteini) salgılayan plazma hücrelerinin klonal malignitesidir. Tanıda CRAB kriterleri (Hiperkalsemi, Renal yetmezlik, Anemi, Litik kemik lezyonları) aranır. Periferik yaymada eritrositlerde rulo (Rouleaux) formasyonu, idrarda Bence-Jones proteinleri (hafif zincir) ve direkt grafilerde zımba deliği (punched-out) litik lezyonlar patognomoniktir.",
    hairy_cell_leukemia: "Hairy cell lösemi (Tüylü hücreli lösemi), sitoplazmik saç benzeri uzantıları olan atipik B lenfositlerin proliferasyonu ile giden kronik bir tablodur. Tanıda TRAP (Tartrata dirençli asit fosfataz) pozitifliği ve BRAF V600E mutasyonu POZİTİF saptanır. Masif splenomegaliye eşlik eden lenfadenopati (LAP) yokluğu en ayırıcı klinik özelliğidir. Tedavide pürin analoğu olan Kladribin kullanılır.",
    cml: "KML, t(9;22) Philadelphia kromozomu ve bunun sonucu oluşan BCR-ABL füzyon geni (aktif tirozin kinaz) ile karakterize miyeloproliferatif bir hastalıktır. Lökositoz (>100.000) ve masif splenomegali belirgindir. Reaktif bir lökositoz olan lösemoid reaksiyondan en önemli farkı, KML'de lökosit alkalen fosfataz (LAP) skorunun sıfıra yakın (düşük) olması ve Philadelphia kromozomunun pozitif olmasıdır.",
    leukemoid_reaction: "Lösemoid reaksiyon, ağır enfeksiyon veya inflamasyonlara sekonder gelişen, lökosit sayısının >50.000/mm3 olduğu benign reaktif bir tablodur. Kronik Miyeloid Lösemi (KML) ile karışabilir. En değerli ayırıcı tanı kriteri; lösemoid reaksiyonda LAP (Lökosit Alkalen Fosfataz) skorunun yüksek olması ve Philadelphia kromozomunun negatif olmasıdır. Tedavide altta yatan enfeksiyonun giderilmesi esastır."
  };

  return notes[id] || `Bu '${name}' vakasında, hastanın şikayetleri ve vital bulguları incelenerek ilgili tetkikler eksiksiz planlanmalı ve rehberlere uygun tedavi protokolü uygulanmalıdır.`;
}

function closeFeedbackModalAndAdvance() {
  document.getElementById('feedback-modal').classList.remove('active');
  window.game.nextStep();
}

function closeFeedbackModalAndGoHome() {
  document.getElementById('feedback-modal').classList.remove('active');
  showHomeScreen();
}

// Clean chat history when dynamic case is rendered
function clearChatHistoryUI() {
  const chatContainer = document.getElementById('chat-history');
  if (chatContainer) {
    chatContainer.innerHTML = `
      <div class="text-center text-muted py-sm" id="chat-placeholder" style="font-size: 0.8rem;">
        💬 Hastaya yukarıdaki sorulardan birini yönelterek konuşabilirsiniz.
      </div>
    `;
  }
}

// Hook into UI load entry points
const originalDomLoad = window.onload;
window.onload = function() {
  if (originalDomLoad) originalDomLoad();
  setupTestSearch();
};

// Clean chat history when dynamic case is rendered
const originalRenderUI = GameEngine.prototype.renderPatientUI;
GameEngine.prototype.renderPatientUI = function() {
  originalRenderUI.call(this);
  clearChatHistoryUI();
  // Clear test search input
  const searchInput = document.getElementById('test-search-input');
  if (searchInput) searchInput.value = '';
  // Ensure search result content tab is hidden
  const searchTab = document.getElementById('tab-content-search');
  if (searchTab) searchTab.style.display = 'none';

  // Clear drug search input
  const drugSearch = document.getElementById('drug-search-input');
  if (drugSearch) drugSearch.value = '';
  if (typeof populateDrugsUI === 'function') {
    populateDrugsUI();
  }
  
  // Reset mobile tabs to patient tab on new case load
  switchMobileGamePane('patient');

  // Mesleği demo alanına ekle
  const demoEl = document.getElementById('patient-demo');
  if (demoEl && this.currentCase) {
    demoEl.textContent = `${this.currentCase.age} Yaş, ${this.currentCase.gender}, Meslek: ${this.currentCase.occupation}, Boy: ${this.currentCase.height}cm, Kilo: ${this.currentCase.weight}kg, BMI: ${this.currentCase.bmi}`;
  }
};

// Toggle mobile tabs
function switchMobileGamePane(pane) {
  const layout = document.querySelector('.game-layout');
  const tabs = document.querySelectorAll('.mobile-game-tab');
  
  if (!layout) return;
  
  if (pane === 'patient') {
    layout.classList.remove('show-lab');
    layout.classList.add('show-patient');
  } else {
    layout.classList.remove('show-patient');
    layout.classList.add('show-lab');
  }
  
  tabs.forEach(tab => {
    const onclickAttr = tab.getAttribute('onclick') || '';
    if (onclickAttr.includes(pane)) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

// ═══════════════════════════════════════════
// REAL-TIME TREATMENT & DRUG ADMINISTRATION UI
// ═══════════════════════════════════════════
let activeDrugCategoryId = null;

function populateDrugsUI() {
  const header = document.getElementById('drugs-tabs-header');
  if (!header) return;
  header.innerHTML = '';

  DRUG_CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.id = `drug-cat-btn-${cat.id}`;
    btn.textContent = `${cat.icon} ${cat.name.split(' ').slice(1).join(' ')}`;
    btn.style.padding = '6px 12px';
    btn.style.fontSize = '0.8rem';
    btn.onclick = () => switchDrugCategory(cat.id);
    header.appendChild(btn);
  });

  // İlk kategoriyi aktif et
  if (DRUG_CATEGORIES.length > 0) {
    switchDrugCategory(DRUG_CATEGORIES[0].id);
  }
}

function switchDrugCategory(categoryId) {
  activeDrugCategoryId = categoryId;
  
  // Arama girdisini temizle
  const searchInput = document.getElementById('drug-search-input');
  if (searchInput) searchInput.value = '';

  // Tab butonlarını güncelle
  document.querySelectorAll('#drugs-tabs-header .tab').forEach(el => el.classList.remove('active'));
  const activeBtn = document.getElementById(`drug-cat-btn-${categoryId}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Listeyi doldur
  const listContainer = document.getElementById('drugs-list-container');
  if (!listContainer) return;
  listContainer.innerHTML = '';

  const drugs = getDrugsByCategory(categoryId);
  if (drugs.length === 0) {
    listContainer.innerHTML = '<div class="text-muted p-sm">Bu kategoride ilaç bulunmamaktadır.</div>';
    return;
  }

  drugs.forEach(drug => {
    listContainer.appendChild(createDrugElement(drug));
  });
}

function createDrugElement(drug) {
  const item = document.createElement('div');
  item.className = 'test-item';
  item.style.display = 'flex';
  item.style.justifyContent = 'space-between';
  item.style.alignItems = 'center';
  item.style.padding = '8px 12px';
  item.style.border = '1px solid var(--border-glass)';
  item.style.borderRadius = 'var(--radius-sm)';
  item.style.background = 'rgba(255, 255, 255, 0.02)';

  item.innerHTML = `
    <span style="font-size: 0.85rem; font-weight: 500;">${drug.name}</span>
    <button class="btn btn-primary btn-sm" onclick="window.game.administerDrug('${drug.id}')" style="padding: 4px 8px; font-size: 0.75rem; border-radius: var(--radius-sm);">💉 Uygula</button>
  `;
  return item;
}

function filterDrugsUI() {
  const query = document.getElementById('drug-search-input').value.trim().toLowerCase();
  const listContainer = document.getElementById('drugs-list-container');
  if (!listContainer) return;

  if (query === '') {
    if (activeDrugCategoryId) {
      switchDrugCategory(activeDrugCategoryId);
    }
    return;
  }

  // Tabları pasif yap
  document.querySelectorAll('#drugs-tabs-header .tab').forEach(el => el.classList.remove('active'));

  listContainer.innerHTML = '';

  const matched = Object.values(DRUG_CATALOG).filter(d => 
    d.name.toLowerCase().includes(query) || 
    d.category.toLowerCase().includes(query)
  );

  if (matched.length === 0) {
    listContainer.innerHTML = '<div class="text-muted p-sm">Eşleşen ilaç/prosedür bulunamadı.</div>';
    return;
  }

  matched.forEach(drug => {
    listContainer.appendChild(createDrugElement(drug));
  });
}



