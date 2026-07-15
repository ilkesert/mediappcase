// ═══════════════════════════════════════════
// MAIN APPLICATION ROOT INITIALIZER
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Populate category counts on the home screen
  populateCategoryCounts();

  // Initialize UI tab layout
  populateTestsUI();

  // Instantiate Game Engine and assign to global window scope
  window.game = new GameEngine();
});

function populateCategoryCounts() {
  const counts = {
    kardiyovaskuler: DISEASES.filter(d => d.category === 'kardiyovaskuler').length + (SYSTEM_DISEASES.kardiyovaskuler?.length || 0),
    solunum: DISEASES.filter(d => d.category === 'solunum').length + (SYSTEM_DISEASES.solunum?.length || 0),
    gastrointestinal: DISEASES.filter(d => d.category === 'gastrointestinal').length + (SYSTEM_DISEASES.gastrointestinal?.length || 0),
    endokrin: DISEASES.filter(d => d.category === 'endokrin').length + (SYSTEM_DISEASES.endokrin?.length || 0),
    noroloji: DISEASES.filter(d => d.category === 'noroloji').length + (SYSTEM_DISEASES.noroloji?.length || 0),
    nefroloji: DISEASES.filter(d => d.category === 'nefroloji').length + (SYSTEM_DISEASES.nefroloji?.length || 0),
    hematoloji: DISEASES.filter(d => d.category === 'hematoloji').length + (SYSTEM_DISEASES.hematoloji?.length || 0),
    romatoloji: DISEASES.filter(d => d.category === 'romatoloji').length + (SYSTEM_DISEASES.romatoloji?.length || 0),
    enfeksiyon: DISEASES.filter(d => d.category === 'enfeksiyon').length + (SYSTEM_DISEASES.enfeksiyon?.length || 0),
    dermatoloji: DISEASES.filter(d => d.category === 'dermatoloji').length + (SYSTEM_DISEASES.dermatoloji?.length || 0),
    kadinhastaliklari: DISEASES.filter(d => d.category === 'kadinhastaliklari').length + (SYSTEM_DISEASES.kadinhastaliklari?.length || 0),
    acil: DISEASES.filter(d => d.category === 'acil').length + (SYSTEM_DISEASES.acil?.length || 0),
    psikiyatri: DISEASES.filter(d => d.category === 'psikiyatri').length + (SYSTEM_DISEASES.psikiyatri?.length || 0),
  };

  for (const [cat, count] of Object.entries(counts)) {
    const countEl = document.getElementById(`count-${cat}`);
    if (countEl) {
      countEl.textContent = `${count} Hastalık`;
    }
  }
}

// Function to start a game in a specific category directly from home menu
function startGameWithCategory(category) {
  showGameScreen();
  
  // Custom load first case from selected category
  window.game.selectedTests.clear();
  window.game.selectedTreatments = [];
  window.game.caseScoreChange = 0;
  window.game.orderedIncorrectCount = 0;

  // Gather list of diseases belonging to this category
  const coreList = DISEASES.filter(d => d.category === category).map(d => d.id);
  const dynList = (SYSTEM_DISEASES[category] || []).map(d => d.id);
  const fullList = [...coreList, ...dynList];

  if (fullList.length === 0) {
    alert("Bu kategoride hastalık bulunamadı.");
    return;
  }

  const randomId = fullList[Math.random() * fullList.length | 0];
  window.game.currentCase = generatePatientCase(randomId);

  // Load vitals to monitor
  window.game.monitor.setVitals(window.game.currentCase.vitals.hr, window.game.currentCase.vitals.ecgType);

  window.game.renderPatientUI();
  window.game.resetTestsPanel();
  window.game.clearResultsPanel();
  window.game.updateVitalsDisplay();
  window.game.updateStatsBar();
}
