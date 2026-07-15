// ═══════════════════════════════════════════
// MEDSIM - CORE GAME ENGINE & STATE CONTROLLER
// ═══════════════════════════════════════════

class GameEngine {
  constructor() {
    this.score = 500; // Starting score
    this.currentCase = null;
    this.caseIndex = 1;
    this.casesTotal = 10;
    this.monitor = null;
    this.selectedTests = new Set();
    this.selectedTreatments = [];
    
    // Scoring metrics for this case
    this.caseScoreChange = 0;
    this.correctDiagnosesCount = 0;
    this.orderedIncorrectCount = 0;
  }

  init() {
    // Instantiate EKG Monitor
    this.monitor = new BedsideMonitor('ecg-canvas', 'spo2-canvas');
    this.monitor.start();
    
    // Audio activation on body click (bypass browser play blocks)
    document.body.addEventListener('click', () => {
      if (this.monitor && this.monitor.audioCtx && this.monitor.audioCtx.state === 'suspended') {
        this.monitor.audioCtx.resume();
      }
    });

    this.loadNewCase();
  }

  loadNewCase() {
    this.selectedTests.clear();
    this.selectedTreatments = [];
    this.caseScoreChange = 0;
    this.orderedIncorrectCount = 0;

    // Pick a random disease from core list and dynamic mapping list
    const allDiseaseIds = [
      ...DISEASES.map(d => d.id),
      ...SYSTEM_DISEASES.kardiyovaskuler.map(d => d.id),
      ...SYSTEM_DISEASES.solunum.map(d => d.id),
      ...SYSTEM_DISEASES.gastrointestinal.map(d => d.id),
      ...SYSTEM_DISEASES.endokrin.map(d => d.id),
      ...SYSTEM_DISEASES.noroloji.map(d => d.id),
      ...SYSTEM_DISEASES.nefroloji.map(d => d.id),
      ...SYSTEM_DISEASES.hematoloji.map(d => d.id),
      ...SYSTEM_DISEASES.romatoloji.map(d => d.id),
      ...SYSTEM_DISEASES.enfeksiyon.map(d => d.id),
      ...SYSTEM_DISEASES.dermatoloji.map(d => d.id),
      ...SYSTEM_DISEASES.kadinhastaliklari.map(d => d.id),
      ...SYSTEM_DISEASES.acil.map(d => d.id),
      ...SYSTEM_DISEASES.psikiyatri.map(d => d.id)
    ];

    const randomId = allDiseaseIds[Math.floor(Math.random() * allDiseaseIds.length)];
    this.currentCase = generatePatientCase(randomId);

    // Update Bedside Monitor
    this.monitor.setVitals(this.currentCase.vitals.hr, this.currentCase.vitals.ecgType);

    // Render UI details
    this.renderPatientUI();
    this.resetTestsPanel();
    this.clearResultsPanel();
    this.updateVitalsDisplay();
    this.updateStatsBar();

    // Trigger monitor danger alert style if patient is instable (high temp, low spo2, low bp)
    const isCritical = this.currentCase.vitals.spo2 < 90 || this.currentCase.vitals.bp_sys < 90 || this.currentCase.vitals.temp > 39.0;
    const container = document.getElementById('monitor-container');
    if (container) {
      if (isCritical) {
        container.classList.add('alarm-border');
      } else {
        container.classList.remove('alarm-border');
      }
    }
  }

  // Updates the numeric monitor metrics on the sidebar
  updateVitalsDisplay() {
    const v = this.currentCase.vitals;
    
    document.getElementById('monitor-hr').textContent = v.hr;
    document.getElementById('monitor-bp').textContent = `${v.bp_sys}/${v.bp_dia}`;
    document.getElementById('monitor-spo2').textContent = v.spo2;
    document.getElementById('monitor-rr').textContent = v.rr;
    document.getElementById('monitor-temp').textContent = v.temp.toFixed(1);

    // Highlight alarms
    this.setVitalAlarmState('box-hr', v.hr > 110 || v.hr < 50);
    this.setVitalAlarmState('box-bp', v.bp_sys > 150 || v.bp_sys < 90);
    this.setVitalAlarmState('box-spo2', v.spo2 < 92);
    this.setVitalAlarmState('box-rr', v.rr > 22 || v.rr < 12);
    this.setVitalAlarmState('box-temp', v.temp > 38.3 || v.temp < 36.0);
  }

  setVitalAlarmState(elementId, isAlarm) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (isAlarm) {
      el.classList.add('alarm');
    } else {
      el.classList.remove('alarm');
    }
  }

  renderPatientUI() {
    const c = this.currentCase;
    
    // Header details
    document.getElementById('patient-name').textContent = c.name;
    document.getElementById('patient-avatar-text').textContent = c.genderCode === 'F' ? '👩' : '👨';
    document.getElementById('patient-demo').textContent = `${c.age} Yaş, ${c.gender}, Boy: ${c.height}cm, Kilo: ${c.weight}kg, BMI: ${c.bmi}`;
    
    // Chief Complaint badge
    document.getElementById('patient-complaints').innerHTML = c.complaints.map(comp => 
      `<span class="complaint-badge">🚨 ${comp}</span>`
    ).join(' ');

    // Story and details
    document.getElementById('patient-story').textContent = c.story;
    
    // PMH
    const pmhList = document.getElementById('patient-pmh');
    pmhList.innerHTML = c.pmh.length ? c.pmh.map(p => `<li>${p}</li>`).join('') : '<li>Bilinmeyen kronik hastalık yok</li>';
    
    // Meds
    const medsList = document.getElementById('patient-meds');
    medsList.innerHTML = c.meds.length ? c.meds.map(m => `<li>${m}</li>`).join('') : '<li>İlaç kullanımı yok</li>';

    // NEW: Allergies
    document.getElementById('patient-allergies').textContent = c.allergies;

    // NEW: Risk Factors
    const risksList = document.getElementById('patient-risks');
    risksList.innerHTML = c.riskFactors.length ? c.riskFactors.map(r => `<li>${r}</li>`).join('') : '<li>Belirgin risk faktörü saptanmadı</li>';

    // NEW: ROS (Review of Systems)
    document.getElementById('patient-ros').textContent = c.ros;
    
    // Social / habits
    document.getElementById('patient-habits').innerHTML = `
      <li><strong>Sigara:</strong> ${c.habits.smoking}</li>
      <li><strong>Alkol:</strong> ${c.habits.alcohol}</li>
      <li><strong>Egzersiz:</strong> ${c.habits.exercise}</li>
    `;

    // Physical exam
    const btnDoFm = document.getElementById('btn-do-fm');
    const patientFm = document.getElementById('patient-fm');
    if (btnDoFm && patientFm) {
      btnDoFm.style.display = 'inline-block';
      patientFm.style.display = 'none';
      patientFm.textContent = c.fm;
    }
  }

  resetTestsPanel() {
    this.selectedTests.clear();
    const items = document.querySelectorAll('.test-item');
    items.forEach(el => {
      el.classList.remove('selected');
    });
  }

  toggleTest(testId, element) {
    if (this.selectedTests.has(testId)) {
      this.selectedTests.delete(testId);
      element.classList.remove('selected');
    } else {
      this.selectedTests.add(testId);
      element.classList.add('selected');
      element.classList.add('just-selected');
      setTimeout(() => element.classList.remove('just-selected'), 300);
    }
  }

  sendOrderedTests() {
    if (this.selectedTests.size === 0) {
      alert("Lütfen en az bir test veya görüntüleme seçin.");
      return;
    }

    const resultsContainer = document.getElementById('results-list');
    
    // Process each ordered test
    this.selectedTests.forEach(testId => {
      // Check if test was already ordered and shown
      if (this.currentCase.testsOrdered[testId]) return;

      const testResult = generateLabResult(this.currentCase, testId);
      this.currentCase.testsOrdered[testId] = testResult;

      // Scoring calculation
      const isRequired = this.currentCase.requiredTests.includes(testId);
      const isContraindicated = this.currentCase.contraindicated.includes(testId);
      
      let points = 0;
      if (isRequired) {
        points = 10;
      } else if (isContraindicated) {
        points = -25;
        this.orderedIncorrectCount++;
      } else {
        // Unnecessary test penalty
        const testDef = TEST_MAP[testId];
        // If it's a very expensive test (BT, MR, PET, Sintigrafi)
        if (testDef && (testDef.category === 'goruntuleme' && (testId.startsWith('bt_') || testId.startsWith('mr_') || testId === 'pet_ct'))) {
          points = -15;
        } else {
          points = -5;
        }
        this.orderedIncorrectCount++;
      }

      this.updateScore(points);

      // Append result element to dashboard
      const isAbnormal = testResult.isAbnormalHigh || testResult.isAbnormalLow;
      const severityClass = testResult.isCritical ? 'critical' : (testResult.isAbnormalHigh ? 'abnormal-high' : (testResult.isAbnormalLow ? 'abnormal-low' : ''));
      const flagText = testResult.isCritical ? 'CRITICAL' : (testResult.isAbnormalHigh ? 'H' : (testResult.isAbnormalLow ? 'L' : ''));
      
      const flagEl = flagText ? `<span class="result-flag ${testResult.isCritical ? 'flag-critical' : (testResult.isAbnormalHigh ? 'flag-high' : 'flag-low')}">${flagText}</span>` : '';

      const testCard = document.createElement('div');
      testCard.className = `result-item result-reveal ${severityClass}`;
      
      // If it's contraindicated/unnecessary, print in red/white as user requested.
      // USER REQUEST: "gerekenleri yanlış olanları kırmızı doğruları beyaz yani normal yazı olarak göstericek"
      // We render abnormal/needed results highlighting their importance, and wrong tests will penalize the score.
      testCard.innerHTML = `
        <div>
          <div class="result-name">${testResult.name}</div>
          <div class="result-ref">Ref: ${testResult.referenceRange} ${testResult.unit || ''}</div>
        </div>
        <div class="flex items-center">
          <span class="result-value">${testResult.value} ${testResult.unit || ''}</span>
          ${flagEl}
        </div>
      `;
      
      resultsContainer.appendChild(testCard);
    });

    // Clear checks
    this.resetTestsPanel();
    
    // Automatically focus the results tab
    document.getElementById('tab-btn-results').click();
  }

  clearResultsPanel() {
    document.getElementById('results-list').innerHTML = `
      <div class="text-center text-muted flex-1 py-lg" id="no-results-placeholder">
        🔬 Henüz herhangi bir test yapılmadı. Hastanın şikayetlerine göre test seçip sipariş edin.
      </div>
    `;
    this.currentCase.testsOrdered = {};
  }

  updateScore(delta) {
    this.score += delta;
    this.caseScoreChange += delta;
    this.updateStatsBar();

    // Trigger score pop visual animation
    const container = document.body;
    const pop = document.createElement('div');
    pop.className = `score-popup ${delta >= 0 ? 'positive' : 'negative'}`;
    pop.textContent = `${delta >= 0 ? '+' : ''}${delta}`;
    
    // Position randomly near the navbar score
    const scoreValEl = document.getElementById('score-value');
    if (scoreValEl) {
      const rect = scoreValEl.getBoundingClientRect();
      pop.style.top = `${rect.top + window.scrollY + 10}px`;
      pop.style.left = `${rect.left + window.scrollX - 20}px`;
    } else {
      pop.style.top = '100px';
      pop.style.left = '50%';
    }
    
    container.appendChild(pop);
    setTimeout(() => pop.remove(), 1800);
  }

  updateStatsBar() {
    const el = document.getElementById('score-value');
    if (el) {
      el.textContent = this.score;
      if (this.score < 200) {
        el.className = 'stat-value negative';
      } else {
        el.className = 'stat-value';
      }
    }
    const progressEl = document.getElementById('case-progress');
    if (progressEl) {
      progressEl.textContent = this.caseIndex;
    }
  }

  submitDiagnosis(diagnosisName) {
    const isCorrect = String(diagnosisName).toLowerCase() === String(this.currentCase.diseaseName).toLowerCase();
    
    // Create current case performance logging structure
    this.currentCase.fb = {
      isCorrectDiag: isCorrect,
      selectedDiag: diagnosisName,
      correctDiag: this.currentCase.diseaseName,
      correctTests: [],
      missedRequiredTests: [],
      incorrectTests: [],
      isCorrectTreatment: false,
      selectedTreatments: [],
      correctTreatments: this.currentCase.treatments,
      consultation: { isCorrect: false, details: '' },
      netChange: 0
    };

    if (isCorrect) {
      this.updateScore(50);
      this.currentCase.fb.netChange += 50;
      this.correctDiagnosesCount++;
      
      // Calculate required tests checked
      this.currentCase.requiredTests.forEach(reqId => {
        const testName = TEST_MAP[reqId]?.name || reqId;
        if (this.currentCase.testsOrdered[reqId]) {
          this.currentCase.fb.correctTests.push({ name: testName, points: 10 });
        } else {
          this.currentCase.fb.missedRequiredTests.push({ name: testName, points: -20 });
          this.updateScore(-20);
          this.currentCase.fb.netChange -= 20;
        }
      });

      // Filter unnecessary / contraindicated ordered tests
      Object.keys(this.currentCase.testsOrdered).forEach(testId => {
        const isReq = this.currentCase.requiredTests.includes(testId);
        const isContra = this.currentCase.contraindicated.includes(testId);
        const testName = TEST_MAP[testId]?.name || testId;

        if (!isReq) {
          if (isContra) {
            this.currentCase.fb.incorrectTests.push({ name: `${testName} (Kontraendike!)`, points: -25 });
            this.currentCase.fb.netChange -= 25;
          } else {
            const testDef = TEST_MAP[testId];
            const penalty = (testDef && testDef.category === 'goruntuleme' && (testId.startsWith('bt_') || testId.startsWith('mr_') || testId === 'pet_ct')) ? -15 : -5;
            this.currentCase.fb.incorrectTests.push({ name: `${testName} (Gereksiz)`, points: penalty });
            this.currentCase.fb.netChange += penalty;
          }
        }
      });

      // Proceed to treatments phase
      showTreatmentModal();
    } else {
      this.updateScore(-30);
      alert(`Teşhis Yanlış (-30 Puan). Hastaya konulan yanlış teşhis: ${diagnosisName}. Tekrar dene veya hastanın verilerini incele.`);
    }
  }

  submitTreatments(selectedMeds, consultationId) {
    // Evaluate treatments
    let containsContra = false;

    selectedMeds.forEach(med => {
      if (this.currentCase.contraindicated.includes(med)) {
        containsContra = true;
      }
    });

    if (containsContra) {
      this.updateScore(-40);
      this.currentCase.fb.netChange -= 40;
      alert("Hata! Hastaya kontraendike (yasaklı/zararlı) bir ilaç verdin! Hasta kötüleşti (-40 Puan).");
      return false;
    }

    let hasCorrectTreatment = false;
    this.currentCase.treatments.forEach(correctTx => {
      selectedMeds.forEach(med => {
        if (correctTx.toLowerCase().includes(med.toLowerCase()) || med.toLowerCase().includes(correctTx.toLowerCase())) {
          hasCorrectTreatment = true;
        }
      });
    });

    // Check consultation
    let hasCorrectConsultation = false;
    if (consultationId) {
      this.currentCase.consultations.forEach(correctCons => {
        if (correctCons.toLowerCase().includes(consultationId.toLowerCase())) {
          hasCorrectConsultation = true;
        }
      });
    }

    if (hasCorrectTreatment || (this.currentCase.treatments.length === 0)) {
      this.updateScore(30);
      this.currentCase.fb.netChange += 30;
      this.currentCase.fb.isCorrectTreatment = true;
      this.currentCase.fb.selectedTreatments = selectedMeds;

      if (hasCorrectConsultation) {
        this.updateScore(15);
        this.currentCase.fb.netChange += 15;
        this.currentCase.fb.consultation = { isCorrect: true, details: `${consultationId.toUpperCase()} Konsültasyonu (+15 Puan)` };
      } else if (consultationId) {
        this.currentCase.fb.consultation = { isCorrect: false, details: `${consultationId.toUpperCase()} Konsültasyonu (Yetersiz/Gereksiz)` };
      }

      // Instead of alert, trigger the Feedback Modal!
      showFeedbackModal(this.currentCase);
      return true;
    } else {
      this.updateScore(-20);
      this.currentCase.fb.netChange -= 20;
      alert("Uyguladığın tedavi yetersiz veya eksik (-20 Puan). Lütfen hastanın durumuna uygun ilaçları seçtiğinden emin ol.");
      return false;
    }
  }

  administerDrug(drugId) {
    if (!this.currentCase) return;

    const drug = DRUG_CATALOG[drugId];
    if (!drug) return;

    // Check if already administered to prevent spam (except for CPR, defibrillation, fluids etc.)
    const canRepeat = ['sf_iv', 'rl_iv', 'cpr', 'defibrilasyon', 'o2_nazal', 'o2_maske'].includes(drugId);
    if (!canRepeat && this.currentCase.administeredDrugs.some(d => d.drugId === drugId)) {
      alert("Bu tedavi/ilaç zaten uygulandı.");
      return;
    }

    this.currentCase.administeredDrugs.push({
      drugId: drugId,
      name: drug.name,
      time: Date.now()
    });

    // Check drugTriggers or contraindications
    const triggers = this.currentCase.drugTriggers || {};
    const isContra = this.currentCase.contraindicated.some(contra => 
      drug.name.toLowerCase().includes(contra.toLowerCase()) || 
      drugId.toLowerCase().includes(contra.toLowerCase())
    );

    let trigger = null;
    for (const [key, config] of Object.entries(triggers)) {
      if (drug.name.toLowerCase().includes(key.toLowerCase()) || drugId.toLowerCase().includes(key.toLowerCase())) {
        trigger = config;
        break;
      }
    }

    // Default treatments matching
    const isCorrectTx = this.currentCase.treatments.some(tx => 
      tx.toLowerCase().includes(drug.name.toLowerCase()) || 
      drug.name.toLowerCase().includes(tx.toLowerCase()) ||
      tx.toLowerCase().includes(drugId.toLowerCase())
    );

    let points = 0;
    let effectType = 'neutral'; // positive, negative, neutral
    let msg = "";

    if (isContra) {
      points = -40;
      effectType = 'negative';
      msg = `Hata! Hastaya kontrendike (yasaklı/zararlı) olan ${drug.name} uygulandı! Hasta kötüleşiyor!`;
      const badChanges = { hr: 25, bp_sys: -35, bp_dia: -15, spo2: -6, temp: 0.5 };
      this.applyVitalChanges(badChanges);
    } else if (trigger) {
      points = trigger.effect === 'stabilize' ? 15 : -30;
      effectType = trigger.effect === 'stabilize' ? 'positive' : 'negative';
      msg = trigger.message || (trigger.effect === 'stabilize' ? `${drug.name} başarıyla uygulandı.` : `${drug.name} sonrası hasta kötüleşti.`);
      if (trigger.vitalChanges) {
        this.applyVitalChanges(trigger.vitalChanges);
      }
    } else if (isCorrectTx) {
      points = 15;
      effectType = 'positive';
      msg = `Doğru Tedavi: ${drug.name} hastanın durumuna uygun bir şekilde başarıyla uygulandı.`;
      const goodChanges = {};
      const v = this.currentCase.vitals;
      if (v.hr > 100) goodChanges.hr = -15;
      if (v.hr < 60) goodChanges.hr = 10;
      if (v.bp_sys < 90) goodChanges.bp_sys = 15;
      if (v.bp_sys > 150) goodChanges.bp_sys = -20;
      if (v.spo2 < 95) goodChanges.spo2 = 4;
      this.applyVitalChanges(goodChanges);
    } else {
      points = -5;
      effectType = 'neutral';
      msg = `${drug.name} uygulandı. (Klinik olarak belirgin fayda veya zarar gözlenmedi, hafif puan kaybı).`;
    }

    this.updateScore(points);
    this.showDrugFeedback(drug.name, msg, effectType, points);
  }

  applyVitalChanges(changes) {
    if (!this.currentCase) return;
    const v = this.currentCase.vitals;

    const steps = 4;
    let step = 0;
    const interval = setInterval(() => {
      if (step >= steps || !this.currentCase) {
        clearInterval(interval);
        return;
      }
      
      if (changes.hr) v.hr += Math.round(changes.hr / steps);
      if (changes.bp_sys) v.bp_sys += Math.round(changes.bp_sys / steps);
      if (changes.bp_dia) v.bp_dia += Math.round(changes.bp_dia / steps);
      if (changes.spo2) v.spo2 = Math.min(100, Math.max(0, v.spo2 + Math.round(changes.spo2 / steps)));
      if (changes.temp) v.temp = Number((v.temp + (changes.temp / steps)).toFixed(1));

      v.hr = Math.max(0, v.hr);
      v.bp_sys = Math.max(0, v.bp_sys);
      v.bp_dia = Math.max(0, v.bp_dia);

      this.updateVitalsDisplay();
      this.monitor.setVitals(v.hr, v.ecgType);
      step++;
    }, 1000);
  }

  showDrugFeedback(drugName, message, type, points) {
    const resultsContainer = document.getElementById('results-list');
    if (!resultsContainer) return;

    const placeholder = document.getElementById('no-results-placeholder');
    if (placeholder) placeholder.remove();

    const card = document.createElement('div');
    card.className = `result-item result-reveal`;
    card.style.gridColumn = '1 / -1';
    
    let borderColor = 'var(--border-glass)';
    let bgColor = 'rgba(255, 255, 255, 0.05)';
    let titleColor = 'var(--text-primary)';
    
    if (type === 'positive') {
      borderColor = 'var(--accent-green)';
      bgColor = 'rgba(0, 230, 118, 0.08)';
      titleColor = 'var(--accent-green)';
    } else if (type === 'negative') {
      borderColor = 'var(--accent-red)';
      bgColor = 'rgba(255, 23, 68, 0.08)';
      titleColor = 'var(--accent-red)';
    }

    card.style.borderLeft = `4px solid ${borderColor}`;
    card.style.background = bgColor;

    card.innerHTML = `
      <div style="width: 100%;">
        <div class="result-name" style="color: ${titleColor}; font-weight: 700; display: flex; justify-content: space-between;">
          <span>💉 TEDAVİ UYGULANDI: ${drugName}</span>
          <span style="font-size: 0.75rem; font-family: var(--font-mono);">${points >= 0 ? '+' : ''}${points} PUAN</span>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5; margin-top: 6px;">
          ${message}
        </div>
      </div>
    `;

    resultsContainer.appendChild(card);
    document.getElementById('tab-btn-results').click();
  }

  nextStep() {
    this.caseIndex++;
    this.loadNewCase();
  }

  // NEW: Give Up (Pes Et) action with detailed walkthrough solution modal
  giveUp() {
    if (!this.currentCase) return;
    
    this.updateScore(-50);
    
    // Set surrender feedback state
    this.currentCase.fb = {
      isCorrectDiag: false,
      selectedDiag: "Pas Geçildi (Pes Edildi)",
      correctDiag: this.currentCase.diseaseName,
      correctTests: [],
      missedRequiredTests: this.currentCase.requiredTests.map(reqId => ({
        name: TEST_MAP[reqId]?.name || reqId,
        points: -20
      })),
      incorrectTests: [],
      isCorrectTreatment: false,
      selectedTreatments: [],
      correctTreatments: this.currentCase.treatments,
      consultation: { isCorrect: false, details: '' },
      netChange: -50,
      isSurrender: true
    };

    // Show the feedback modal with the solution and detailed clinical notes
    showFeedbackModal(this.currentCase);
  }

  // NEW: Perform Physical Exam (Fizik Muayene Yap / İpucu)
  doPhysicalExam() {
    if (!this.currentCase) return;
    
    // Reveal physical exam findings
    const btnDoFm = document.getElementById('btn-do-fm');
    const patientFm = document.getElementById('patient-fm');
    if (btnDoFm && patientFm) {
      btnDoFm.style.display = 'none';
      patientFm.style.display = 'block';
    }

    // Small log of the physical exam finding in the chat logs
    const chatContainer = document.getElementById('chat-history');
    if (chatContainer) {
      const placeholder = document.getElementById('chat-placeholder');
      if (placeholder) placeholder.remove();

      const fmMsg = document.createElement('div');
      fmMsg.style.margin = '8px 0';
      fmMsg.style.textAlign = 'left';
      fmMsg.innerHTML = `<span style="background: rgba(64, 196, 255, 0.08); color: var(--accent-blue); padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; display: inline-block; border: 1px solid rgba(64,196,255,0.2);">🩺 Fizik Muayene Yapıldı: ${this.currentCase.fm}</span>`;
      chatContainer.appendChild(fmMsg);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  // NEW: Interactive Patient Dialogue (Anamnesis Q&A)
  askPatientQuestion(questionId) {
    if (!this.currentCase) return null;
    
    // Call dialogue responder
    const response = getPatientDialogueResponse(this.currentCase, questionId);
    
    // Display in chat UI
    const chatContainer = document.getElementById('chat-history');
    if (chatContainer) {
      // Remove placeholder
      const placeholder = document.getElementById('chat-placeholder');
      if (placeholder) placeholder.remove();

      // Append Doctor question
      const qText = {
        onset: "Şikayetleriniz ne zaman başladı?",
        character: "Ağrının karakteri nasıl ve nereye yayılıyor?",
        associated: "Ağrıyla beraber başka hangi şikayetleriniz var?",
        family: "Ailenizde benzer bir hastalık geçmişi var mı?",
        allergies: "Alerjiniz olan bir ilaç veya madde var mı?",
        prior_hospitalization: "Benzer şikayetlerle daha önce hastaneye yattınız mı?"
      }[questionId] || "Nasıl hissediyorsunuz?";

      const docMsg = document.createElement('div');
      docMsg.style.margin = '8px 0';
      docMsg.style.textAlign = 'right';
      docMsg.innerHTML = `<span style="background: var(--bg-tertiary); color: var(--accent-blue); padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; display: inline-block; border: 1px solid rgba(64,196,255,0.2);">🧑‍⚕️ Doktor: ${qText}</span>`;
      chatContainer.appendChild(docMsg);

      // Append Patient response
      const patMsg = document.createElement('div');
      patMsg.style.margin = '8px 0';
      patMsg.style.textAlign = 'left';
      patMsg.innerHTML = `<span style="background: rgba(0, 230, 118, 0.08); color: var(--accent-green); padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; display: inline-block; border: 1px solid rgba(0,230,118,0.2);">👤 Hasta: ${response}</span>`;
      chatContainer.appendChild(patMsg);

      // Auto scroll chat
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    return response;
  }

  // NEW: Request consultation hint during gameplay
  requestConsultationHint(departmentId) {
    if (!this.currentCase) return;
    if (!departmentId) {
      alert("Lütfen danışılacak uzmanlık alanını seçin.");
      return;
    }

    // Deduct score for consultation
    this.updateScore(-20);

    // Generate clinical hint
    const hint = getConsultationHint(this.currentCase, departmentId);

    // Show hint in results panel
    const resultsContainer = document.getElementById('results-list');
    
    // Clear placeholder
    const placeholder = document.getElementById('no-results-placeholder');
    if (placeholder) placeholder.classList.add('hidden');

    const hintCard = document.createElement('div');
    hintCard.className = 'result-item result-reveal';
    hintCard.style.borderLeftColor = 'var(--accent-purple)';
    hintCard.style.background = 'rgba(179, 136, 255, 0.08)';
    hintCard.style.gridColumn = '1 / -1';
    
    hintCard.innerHTML = `
      <div style="width: 100%;">
        <div class="result-name" style="color: var(--accent-purple); font-weight: 700; display: flex; justify-content: space-between;">
          <span>📞 KONSÜLTASYON RAPORU</span>
          <span style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--text-muted);">-20 PUAN</span>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5; margin-top: 6px; font-style: italic;">
          ${hint}
        </div>
      </div>
    `;

    resultsContainer.appendChild(hintCard);

    // Switch to results tab automatically to show hint
    document.getElementById('tab-btn-results').click();
  }

  resetGame() {
    this.score = 500;
    this.caseIndex = 1;
    this.correctDiagnosesCount = 0;
    this.loadNewCase();
  }
}
