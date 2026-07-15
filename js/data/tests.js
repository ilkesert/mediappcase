// ═══════════════════════════════════════════
// ALL MEDICAL TESTS - Complete Hospital Lab & Imaging Menu
// ═══════════════════════════════════════════

const TESTS = {
  categories: [
    {
      id: 'hematoloji',
      name: 'Hematoloji',
      icon: '🩸',
      subcategories: [
        {
          name: 'Tam Kan Sayımı',
          tests: [
            { id: 'wbc', name: 'WBC (Beyaz Küre)', unit: 'x10³/µL', refMin: 4.0, refMax: 11.0, cost: 1 },
            { id: 'rbc', name: 'RBC (Kırmızı Küre)', unit: 'x10⁶/µL', refMinM: 4.5, refMaxM: 5.5, refMinF: 3.8, refMaxF: 5.1, cost: 1 },
            { id: 'hgb', name: 'Hemoglobin', unit: 'g/dL', refMinM: 13.5, refMaxM: 17.5, refMinF: 12.0, refMaxF: 16.0, cost: 1 },
            { id: 'hct', name: 'Hematokrit', unit: '%', refMinM: 40, refMaxM: 54, refMinF: 36, refMaxF: 48, cost: 1 },
            { id: 'mcv', name: 'MCV', unit: 'fL', refMin: 80, refMax: 100, cost: 1 },
            { id: 'mch', name: 'MCH', unit: 'pg', refMin: 27, refMax: 33, cost: 1 },
            { id: 'mchc', name: 'MCHC', unit: 'g/dL', refMin: 32, refMax: 36, cost: 1 },
            { id: 'plt', name: 'Trombosit (PLT)', unit: 'x10³/µL', refMin: 150, refMax: 400, cost: 1 },
            { id: 'mpv', name: 'MPV', unit: 'fL', refMin: 7.0, refMax: 11.0, cost: 1 },
            { id: 'rdw', name: 'RDW', unit: '%', refMin: 11.5, refMax: 14.5, cost: 1 },
            { id: 'neutrofil', name: 'Nötrofil', unit: '%', refMin: 40, refMax: 70, cost: 1 },
            { id: 'lenfosit', name: 'Lenfosit', unit: '%', refMin: 20, refMax: 40, cost: 1 },
            { id: 'monosit', name: 'Monosit', unit: '%', refMin: 2, refMax: 8, cost: 1 },
            { id: 'eozinofil', name: 'Eozinofil', unit: '%', refMin: 1, refMax: 4, cost: 1 },
            { id: 'bazofil', name: 'Bazofil', unit: '%', refMin: 0, refMax: 1, cost: 1 },
          ]
        },
        {
          name: 'Koagülasyon',
          tests: [
            { id: 'pt', name: 'PT (Protrombin Zamanı)', unit: 'sn', refMin: 11, refMax: 13.5, cost: 2 },
            { id: 'inr', name: 'INR', unit: '', refMin: 0.8, refMax: 1.2, cost: 2 },
            { id: 'aptt', name: 'aPTT', unit: 'sn', refMin: 25, refMax: 35, cost: 2 },
            { id: 'fibrinojen', name: 'Fibrinojen', unit: 'mg/dL', refMin: 200, refMax: 400, cost: 3 },
            { id: 'ddimer', name: 'D-Dimer', unit: 'µg/mL', refMin: 0, refMax: 0.5, cost: 4 },
            { id: 'kanama_zamani', name: 'Kanama Zamanı', unit: 'dk', refMin: 2, refMax: 9, cost: 2 },
          ]
        },
        {
          name: 'Diğer Hematoloji',
          tests: [
            { id: 'periferik_yayma', name: 'Periferik Yayma', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true },
            { id: 'retikulosit', name: 'Retikülosit Sayısı', unit: '%', refMin: 0.5, refMax: 2.5, cost: 3 },
            { id: 'sedim', name: 'Sedimentasyon (ESR)', unit: 'mm/saat', refMinM: 0, refMaxM: 15, refMinF: 0, refMaxF: 20, cost: 1 },
            { id: 'direkt_coombs', name: 'Direkt Coombs', unit: '', refMin: null, refMax: null, cost: 4, isTextResult: true, normalText: 'Negatif' },
            { id: 'indirekt_coombs', name: 'İndirekt Coombs', unit: '', refMin: null, refMax: null, cost: 4, isTextResult: true, normalText: 'Negatif' },
          ]
        }
      ]
    },
    {
      id: 'biyokimya',
      name: 'Biyokimya',
      icon: '🧪',
      subcategories: [
        {
          name: 'Glukoz Metabolizması',
          tests: [
            { id: 'glukoz', name: 'Açlık Kan Şekeri', unit: 'mg/dL', refMin: 70, refMax: 100, cost: 1 },
            { id: 'hba1c', name: 'HbA1c', unit: '%', refMin: 4.0, refMax: 5.6, cost: 3 },
            { id: 'ogtt', name: 'OGTT (75g)', unit: 'mg/dL', refMin: 0, refMax: 140, cost: 4 },
            { id: 'insulin', name: 'İnsülin (Açlık)', unit: 'µU/mL', refMin: 2.6, refMax: 24.9, cost: 4 },
          ]
        },
        {
          name: 'Böbrek Fonksiyonları',
          tests: [
            { id: 'bun', name: 'BUN (Üre)', unit: 'mg/dL', refMin: 7, refMax: 20, cost: 1 },
            { id: 'kreatinin', name: 'Kreatinin', unit: 'mg/dL', refMinM: 0.7, refMaxM: 1.3, refMinF: 0.6, refMaxF: 1.1, cost: 1 },
            { id: 'egfr', name: 'eGFR', unit: 'mL/dk/1.73m²', refMin: 90, refMax: 999, cost: 1 },
            { id: 'urik_asit', name: 'Ürik Asit', unit: 'mg/dL', refMinM: 3.5, refMaxM: 7.2, refMinF: 2.6, refMaxF: 6.0, cost: 2 },
            { id: 'sistatin_c', name: 'Sistatin C', unit: 'mg/L', refMin: 0.55, refMax: 1.15, cost: 5 },
          ]
        },
        {
          name: 'Karaciğer Fonksiyonları',
          tests: [
            { id: 'ast', name: 'AST (SGOT)', unit: 'U/L', refMin: 0, refMax: 40, cost: 1 },
            { id: 'alt', name: 'ALT (SGPT)', unit: 'U/L', refMin: 0, refMax: 41, cost: 1 },
            { id: 'ggt', name: 'GGT', unit: 'U/L', refMinM: 0, refMaxM: 60, refMinF: 0, refMaxF: 40, cost: 2 },
            { id: 'alp', name: 'ALP (Alkalen Fosfataz)', unit: 'U/L', refMin: 40, refMax: 129, cost: 2 },
            { id: 'ldh', name: 'LDH', unit: 'U/L', refMin: 120, refMax: 246, cost: 2 },
            { id: 'total_bilirubin', name: 'Total Bilirubin', unit: 'mg/dL', refMin: 0.1, refMax: 1.2, cost: 2 },
            { id: 'direkt_bilirubin', name: 'Direkt Bilirubin', unit: 'mg/dL', refMin: 0, refMax: 0.3, cost: 2 },
            { id: 'indirekt_bilirubin', name: 'İndirekt Bilirubin', unit: 'mg/dL', refMin: 0.1, refMax: 0.9, cost: 2 },
            { id: 'total_protein', name: 'Total Protein', unit: 'g/dL', refMin: 6.0, refMax: 8.3, cost: 2 },
            { id: 'albumin', name: 'Albümin', unit: 'g/dL', refMin: 3.5, refMax: 5.2, cost: 2 },
          ]
        },
        {
          name: 'Elektrolitler',
          tests: [
            { id: 'sodyum', name: 'Sodyum (Na⁺)', unit: 'mEq/L', refMin: 136, refMax: 145, cost: 1 },
            { id: 'potasyum', name: 'Potasyum (K⁺)', unit: 'mEq/L', refMin: 3.5, refMax: 5.1, cost: 1 },
            { id: 'klor', name: 'Klor (Cl⁻)', unit: 'mEq/L', refMin: 98, refMax: 106, cost: 1 },
            { id: 'kalsiyum', name: 'Kalsiyum (Ca²⁺)', unit: 'mg/dL', refMin: 8.5, refMax: 10.5, cost: 2 },
            { id: 'iyonize_ca', name: 'İyonize Kalsiyum', unit: 'mmol/L', refMin: 1.12, refMax: 1.32, cost: 3 },
            { id: 'magnezyum', name: 'Magnezyum (Mg²⁺)', unit: 'mg/dL', refMin: 1.7, refMax: 2.2, cost: 2 },
            { id: 'fosfor', name: 'Fosfor (PO₄)', unit: 'mg/dL', refMin: 2.5, refMax: 4.5, cost: 2 },
            { id: 'bikarbonat', name: 'Bikarbonat (HCO₃⁻)', unit: 'mEq/L', refMin: 22, refMax: 28, cost: 2 },
          ]
        },
        {
          name: 'Lipid Paneli',
          tests: [
            { id: 'total_kolesterol', name: 'Total Kolesterol', unit: 'mg/dL', refMin: 0, refMax: 200, cost: 2 },
            { id: 'ldl', name: 'LDL Kolesterol', unit: 'mg/dL', refMin: 0, refMax: 130, cost: 2 },
            { id: 'hdl', name: 'HDL Kolesterol', unit: 'mg/dL', refMinM: 40, refMaxM: 999, refMinF: 50, refMaxF: 999, cost: 2 },
            { id: 'trigliserid', name: 'Trigliserid', unit: 'mg/dL', refMin: 0, refMax: 150, cost: 2 },
          ]
        },
        {
          name: 'Kardiyak Belirteçler',
          tests: [
            { id: 'troponin_i', name: 'Troponin I', unit: 'ng/mL', refMin: 0, refMax: 0.04, cost: 5 },
            { id: 'troponin_t', name: 'hs-Troponin T', unit: 'pg/mL', refMin: 0, refMax: 14, cost: 5 },
            { id: 'ck', name: 'CK (Kreatin Kinaz)', unit: 'U/L', refMinM: 39, refMaxM: 308, refMinF: 26, refMaxF: 192, cost: 3 },
            { id: 'ckmb', name: 'CK-MB', unit: 'ng/mL', refMin: 0, refMax: 5.0, cost: 4 },
            { id: 'bnp', name: 'BNP', unit: 'pg/mL', refMin: 0, refMax: 100, cost: 5 },
            { id: 'ntprobnp', name: 'NT-proBNP', unit: 'pg/mL', refMin: 0, refMax: 125, cost: 5 },
            { id: 'miyoglobin', name: 'Miyoglobin', unit: 'ng/mL', refMin: 0, refMax: 85, cost: 4 },
          ]
        },
        {
          name: 'İnflamasyon Belirteçleri',
          tests: [
            { id: 'crp', name: 'CRP', unit: 'mg/L', refMin: 0, refMax: 5, cost: 2 },
            { id: 'prokalsitonin', name: 'Prokalsitonin', unit: 'ng/mL', refMin: 0, refMax: 0.1, cost: 6 },
            { id: 'il6', name: 'IL-6', unit: 'pg/mL', refMin: 0, refMax: 7, cost: 8 },
            { id: 'ferritin', name: 'Ferritin', unit: 'ng/mL', refMinM: 20, refMaxM: 250, refMinF: 10, refMaxF: 120, cost: 3 },
          ]
        },
        {
          name: 'Demir Metabolizması',
          tests: [
            { id: 'demir', name: 'Serum Demiri', unit: 'µg/dL', refMin: 60, refMax: 170, cost: 3 },
            { id: 'tdbk', name: 'TDBK (TIBC)', unit: 'µg/dL', refMin: 250, refMax: 370, cost: 3 },
            { id: 'transferin_sat', name: 'Transferrin Saturasyonu', unit: '%', refMin: 20, refMax: 50, cost: 3 },
          ]
        },
        {
          name: 'Vitaminler',
          tests: [
            { id: 'b12', name: 'Vitamin B12', unit: 'pg/mL', refMin: 200, refMax: 900, cost: 4 },
            { id: 'folat', name: 'Folat', unit: 'ng/mL', refMin: 3.0, refMax: 17.0, cost: 4 },
            { id: 'vitd', name: 'Vitamin D (25-OH)', unit: 'ng/mL', refMin: 30, refMax: 100, cost: 5 },
          ]
        },
        {
          name: 'Pankreas Enzimleri',
          tests: [
            { id: 'amilaz', name: 'Amilaz', unit: 'U/L', refMin: 28, refMax: 100, cost: 2 },
            { id: 'lipaz', name: 'Lipaz', unit: 'U/L', refMin: 0, refMax: 160, cost: 3 },
          ]
        },
        {
          name: 'Tümör Belirteçleri',
          tests: [
            { id: 'afp', name: 'AFP', unit: 'ng/mL', refMin: 0, refMax: 10, cost: 5 },
            { id: 'cea', name: 'CEA', unit: 'ng/mL', refMin: 0, refMax: 5, cost: 5 },
            { id: 'ca199', name: 'CA 19-9', unit: 'U/mL', refMin: 0, refMax: 37, cost: 5 },
            { id: 'ca125', name: 'CA 125', unit: 'U/mL', refMin: 0, refMax: 35, cost: 5 },
            { id: 'ca153', name: 'CA 15-3', unit: 'U/mL', refMin: 0, refMax: 30, cost: 5 },
            { id: 'psa', name: 'PSA', unit: 'ng/mL', refMin: 0, refMax: 4.0, cost: 5, genderSpecific: 'M' },
            { id: 'beta_hcg', name: 'β-hCG', unit: 'mIU/mL', refMin: 0, refMax: 5, cost: 4 },
          ]
        },
        {
          name: 'Diğer Biyokimya',
          tests: [
            { id: 'laktat', name: 'Laktat', unit: 'mmol/L', refMin: 0.5, refMax: 2.2, cost: 3 },
            { id: 'amonyak', name: 'Amonyak', unit: 'µg/dL', refMin: 15, refMax: 45, cost: 4 },
            { id: 'homosistein', name: 'Homosistein', unit: 'µmol/L', refMin: 5, refMax: 15, cost: 5 },
          ]
        }
      ]
    },
    {
      id: 'tiroid',
      name: 'Tiroid & Hormonlar',
      icon: '🦋',
      subcategories: [
        {
          name: 'Tiroid Fonksiyon Testleri',
          tests: [
            { id: 'tsh', name: 'TSH', unit: 'µIU/mL', refMin: 0.27, refMax: 4.2, cost: 3 },
            { id: 'st3', name: 'Serbest T3', unit: 'pg/mL', refMin: 2.0, refMax: 4.4, cost: 4 },
            { id: 'st4', name: 'Serbest T4', unit: 'ng/dL', refMin: 0.93, refMax: 1.7, cost: 4 },
            { id: 'anti_tpo', name: 'Anti-TPO', unit: 'IU/mL', refMin: 0, refMax: 34, cost: 5 },
            { id: 'anti_tg', name: 'Anti-Tiroglobulin', unit: 'IU/mL', refMin: 0, refMax: 115, cost: 5 },
            { id: 'tiroglobulin', name: 'Tiroglobulin', unit: 'ng/mL', refMin: 1.4, refMax: 78, cost: 5 },
          ]
        },
        {
          name: 'Diğer Hormonlar',
          tests: [
            { id: 'kortizol', name: 'Kortizol (Sabah)', unit: 'µg/dL', refMin: 6.2, refMax: 19.4, cost: 5 },
            { id: 'acth', name: 'ACTH', unit: 'pg/mL', refMin: 7.2, refMax: 63.3, cost: 6 },
            { id: 'aldosteron', name: 'Aldosteron', unit: 'ng/dL', refMin: 1, refMax: 16, cost: 6 },
            { id: 'renin', name: 'Renin (PRA)', unit: 'ng/mL/saat', refMin: 0.5, refMax: 3.5, cost: 6 },
            { id: 'pth', name: 'PTH (Parathormon)', unit: 'pg/mL', refMin: 15, refMax: 65, cost: 5 },
            { id: 'prolaktin', name: 'Prolaktin', unit: 'ng/mL', refMinM: 4, refMaxM: 15, refMinF: 4, refMaxF: 23, cost: 5 },
            { id: 'gh', name: 'Büyüme Hormonu (GH)', unit: 'ng/mL', refMin: 0, refMax: 3, cost: 6 },
            { id: 'igf1', name: 'IGF-1', unit: 'ng/mL', refMin: 100, refMax: 400, cost: 6 },
            { id: 'testosteron', name: 'Testosteron', unit: 'ng/dL', refMinM: 280, refMaxM: 1100, refMinF: 15, refMaxF: 70, cost: 5 },
            { id: 'estradiol', name: 'Estradiol (E2)', unit: 'pg/mL', refMinF: 15, refMaxF: 350, refMinM: 10, refMaxM: 40, cost: 5 },
            { id: 'fsh', name: 'FSH', unit: 'mIU/mL', refMinF: 3.5, refMaxF: 12.5, refMinM: 1.5, refMaxM: 12.4, cost: 5 },
            { id: 'lh', name: 'LH', unit: 'mIU/mL', refMinF: 2.4, refMaxF: 12.6, refMinM: 1.7, refMaxM: 8.6, cost: 5 },
            { id: 'dheas', name: 'DHEA-S', unit: 'µg/dL', refMinM: 80, refMaxM: 560, refMinF: 35, refMaxF: 430, cost: 5 },
            { id: 'metanefrin_plazma', name: 'Plazma Metanefrinler', unit: 'pg/mL', refMin: 0, refMax: 65, cost: 7 },
            { id: 'adh', name: 'ADH (Vazopressin)', unit: 'pg/mL', refMin: 1, refMax: 5, cost: 7 },
          ]
        }
      ]
    },
    {
      id: 'idrar',
      name: 'İdrar Testleri',
      icon: '🧫',
      subcategories: [
        {
          name: 'İdrar Analizi',
          tests: [
            { id: 'tit', name: 'Tam İdrar Tetkiki (TİT)', unit: 'rapor', refMin: null, refMax: null, cost: 1, isTextResult: true, normalText: 'Normal' },
            { id: 'idrar_ph', name: 'İdrar pH', unit: '', refMin: 4.6, refMax: 8.0, cost: 1 },
            { id: 'idrar_dansite', name: 'İdrar Dansitesi', unit: '', refMin: 1.005, refMax: 1.030, cost: 1 },
            { id: 'idrar_protein', name: 'İdrar Protein', unit: '', refMin: null, refMax: null, cost: 1, isTextResult: true, normalText: 'Negatif' },
            { id: 'idrar_glukoz', name: 'İdrar Glukoz', unit: '', refMin: null, refMax: null, cost: 1, isTextResult: true, normalText: 'Negatif' },
            { id: 'idrar_kan', name: 'İdrar Kan (Gizli)', unit: '', refMin: null, refMax: null, cost: 1, isTextResult: true, normalText: 'Negatif' },
            { id: 'idrar_lekosit', name: 'İdrar Lökosit Esteraz', unit: '', refMin: null, refMax: null, cost: 1, isTextResult: true, normalText: 'Negatif' },
            { id: 'idrar_nitrit', name: 'İdrar Nitrit', unit: '', refMin: null, refMax: null, cost: 1, isTextResult: true, normalText: 'Negatif' },
            { id: 'idrar_keton', name: 'İdrar Keton', unit: '', refMin: null, refMax: null, cost: 1, isTextResult: true, normalText: 'Negatif' },
            { id: 'idrar_bilirubin', name: 'İdrar Bilirubin', unit: '', refMin: null, refMax: null, cost: 1, isTextResult: true, normalText: 'Negatif' },
          ]
        },
        {
          name: 'İdrar Kültür & Özel',
          tests: [
            { id: 'idrar_kultur', name: 'İdrar Kültürü', unit: 'rapor', refMin: null, refMax: null, cost: 4, isTextResult: true, normalText: 'Üreme yok', turnaround: 15 },
            { id: 'idrar_mikroalbumin', name: 'İdrar Mikroalbümin', unit: 'mg/L', refMin: 0, refMax: 30, cost: 4 },
            { id: 'idrar_24h_protein', name: '24 Saat İdrar Proteini', unit: 'mg/gün', refMin: 0, refMax: 150, cost: 5 },
            { id: 'idrar_kreatinin_klirensi', name: 'Kreatinin Klirensi', unit: 'mL/dk', refMin: 90, refMax: 140, cost: 4 },
            { id: 'idrar_elektrolitler', name: 'İdrar Elektrolitleri', unit: 'rapor', refMin: null, refMax: null, cost: 4, isTextResult: true },
            { id: 'idrar_osmolalite', name: 'İdrar Osmolalitesi', unit: 'mOsm/kg', refMin: 300, refMax: 900, cost: 4 },
          ]
        }
      ]
    },
    {
      id: 'mikrobiyoloji',
      name: 'Mikrobiyoloji & Seroloji',
      icon: '🦠',
      subcategories: [
        {
          name: 'Kültürler',
          tests: [
            { id: 'kan_kultur', name: 'Kan Kültürü (Aerob/Anaerob)', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true, normalText: 'Üreme yok', turnaround: 20 },
            { id: 'balgam_kultur', name: 'Balgam Kültürü', unit: 'rapor', refMin: null, refMax: null, cost: 4, isTextResult: true, normalText: 'Normal flora', turnaround: 15 },
            { id: 'bogaz_kultur', name: 'Boğaz Kültürü', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Üreme yok', turnaround: 12 },
            { id: 'gaita_kultur', name: 'Gaita Kültürü', unit: 'rapor', refMin: null, refMax: null, cost: 4, isTextResult: true, normalText: 'Patojen üreme yok', turnaround: 15 },
            { id: 'yara_kultur', name: 'Yara Kültürü', unit: 'rapor', refMin: null, refMax: null, cost: 4, isTextResult: true, normalText: 'Üreme yok', turnaround: 12 },
            { id: 'bos_kultur', name: 'BOS Kültürü', unit: 'rapor', refMin: null, refMax: null, cost: 6, isTextResult: true, normalText: 'Üreme yok', turnaround: 20, isInvasive: true },
          ]
        },
        {
          name: 'BOS Analizi',
          tests: [
            { id: 'bos_glukoz', name: 'BOS Glukozu', unit: 'mg/dL', refMin: 40, refMax: 70, cost: 5, isInvasive: true },
            { id: 'bos_protein', name: 'BOS Proteini', unit: 'mg/dL', refMin: 15, refMax: 45, cost: 5, isInvasive: true },
            { id: 'bos_hucre', name: 'BOS Hücre Sayımı', unit: '/mm³', refMin: 0, refMax: 5, cost: 5, isInvasive: true },
            { id: 'bos_laktat', name: 'BOS Laktatı', unit: 'mmol/L', refMin: 1.1, refMax: 2.4, cost: 5, isInvasive: true },
          ]
        },
        {
          name: 'Seroloji / İmmünoloji',
          tests: [
            { id: 'aso', name: 'ASO (Antistreptolizin O)', unit: 'IU/mL', refMin: 0, refMax: 200, cost: 3 },
            { id: 'rf', name: 'RF (Romatoid Faktör)', unit: 'IU/mL', refMin: 0, refMax: 14, cost: 4 },
            { id: 'anti_ccp', name: 'Anti-CCP', unit: 'U/mL', refMin: 0, refMax: 17, cost: 5 },
            { id: 'ana', name: 'ANA (Antinükleer Antikor)', unit: '', refMin: null, refMax: null, cost: 5, isTextResult: true, normalText: 'Negatif' },
            { id: 'anti_dsdna', name: 'Anti-dsDNA', unit: 'IU/mL', refMin: 0, refMax: 30, cost: 6 },
            { id: 'c3', name: 'Kompleman C3', unit: 'mg/dL', refMin: 90, refMax: 180, cost: 5 },
            { id: 'c4', name: 'Kompleman C4', unit: 'mg/dL', refMin: 10, refMax: 40, cost: 5 },
            { id: 'anca', name: 'ANCA (c-ANCA/p-ANCA)', unit: '', refMin: null, refMax: null, cost: 6, isTextResult: true, normalText: 'Negatif' },
            { id: 'hla_b27', name: 'HLA-B27', unit: '', refMin: null, refMax: null, cost: 7, isTextResult: true, normalText: 'Negatif' },
            { id: 'ig_total', name: 'İmmünglobulinler (IgG, IgA, IgM)', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true },
          ]
        },
        {
          name: 'Enfeksiyon Serolojisi',
          tests: [
            { id: 'hbsag', name: 'HBsAg', unit: '', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Negatif' },
            { id: 'anti_hbs', name: 'Anti-HBs', unit: 'mIU/mL', refMin: 0, refMax: 10, cost: 3 },
            { id: 'anti_hcv', name: 'Anti-HCV', unit: '', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Negatif' },
            { id: 'anti_hiv', name: 'Anti-HIV', unit: '', refMin: null, refMax: null, cost: 4, isTextResult: true, normalText: 'Negatif' },
            { id: 'anti_hav_igm', name: 'Anti-HAV IgM', unit: '', refMin: null, refMax: null, cost: 4, isTextResult: true, normalText: 'Negatif' },
            { id: 'vdrl', name: 'VDRL/RPR', unit: '', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Non-reaktif' },
            { id: 'ppd', name: 'PPD (Tüberkülin Testi)', unit: 'mm', refMin: 0, refMax: 9, cost: 2, turnaround: 20 },
            { id: 'covid_pcr', name: 'COVID-19 PCR', unit: '', refMin: null, refMax: null, cost: 5, isTextResult: true, normalText: 'Negatif' },
            { id: 'ebv_panel', name: 'EBV Seroloji Paneli', unit: 'rapor', refMin: null, refMax: null, cost: 6, isTextResult: true },
            { id: 'cmv_igg_igm', name: 'CMV IgG/IgM', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true },
            { id: 'brusella_aglut', name: 'Brusella Aglütinasyon', unit: 'titre', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: '< 1/160' },
            { id: 'widal', name: 'Widal Testi', unit: 'titre', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Negatif' },
            { id: 'gruber_widal', name: 'Gruber-Widal', unit: 'titre', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Negatif' },
          ]
        },
        {
          name: 'Gaita Testleri',
          tests: [
            { id: 'gaita_gizli_kan', name: 'Gaitada Gizli Kan', unit: '', refMin: null, refMax: null, cost: 2, isTextResult: true, normalText: 'Negatif' },
            { id: 'gaita_parazit', name: 'Gaita Parazit Taraması', unit: '', refMin: null, refMax: null, cost: 2, isTextResult: true, normalText: 'Parazit görülmedi' },
            { id: 'kalprotektin', name: 'Fekal Kalprotektin', unit: 'µg/g', refMin: 0, refMax: 50, cost: 5 },
          ]
        }
      ]
    },
    {
      id: 'goruntuleme',
      name: 'Görüntüleme',
      icon: '📷',
      subcategories: [
        {
          name: 'Konvansiyonel Radyoloji',
          tests: [
            { id: 'pa_ac', name: 'PA Akciğer Grafisi', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Kalp-akciğer doğal' },
            { id: 'direkt_batin', name: 'Direkt Batın Grafisi', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Serbest hava/sıvı yok' },
            { id: 'kemik_grafi', name: 'Kemik Grafisi', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true },
            { id: 'servikal_grafi', name: 'Servikal Grafi', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true },
            { id: 'lomber_grafi', name: 'Lomber Vertebra Grafisi', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true },
          ]
        },
        {
          name: 'Bilgisayarlı Tomografi (BT)',
          tests: [
            { id: 'bt_kranial', name: 'Kranial BT', unit: 'rapor', refMin: null, refMax: null, cost: 10, isTextResult: true, normalText: 'Normal kraniyal BT' },
            { id: 'bt_toraks', name: 'Toraks BT', unit: 'rapor', refMin: null, refMax: null, cost: 10, isTextResult: true, normalText: 'Patoloji saptanmadı' },
            { id: 'bt_abdomen', name: 'Abdomen BT', unit: 'rapor', refMin: null, refMax: null, cost: 10, isTextResult: true, normalText: 'Patoloji saptanmadı' },
            { id: 'bt_pelvik', name: 'Pelvik BT', unit: 'rapor', refMin: null, refMax: null, cost: 10, isTextResult: true },
            { id: 'bt_anjio_koroner', name: 'BT Koroner Anjiyografi', unit: 'rapor', refMin: null, refMax: null, cost: 15, isTextResult: true },
            { id: 'bt_anjio_pulmoner', name: 'BT Pulmoner Anjiyografi', unit: 'rapor', refMin: null, refMax: null, cost: 12, isTextResult: true, normalText: 'PE saptanmadı' },
            { id: 'bt_anjio_serebral', name: 'BT Serebral Anjiyografi', unit: 'rapor', refMin: null, refMax: null, cost: 12, isTextResult: true },
          ]
        },
        {
          name: 'Manyetik Rezonans (MR)',
          tests: [
            { id: 'mr_kranial', name: 'Kranial MR', unit: 'rapor', refMin: null, refMax: null, cost: 15, isTextResult: true, normalText: 'Normal intrakranyal MR' },
            { id: 'mr_spinal', name: 'Spinal MR (Servikal/Lomber)', unit: 'rapor', refMin: null, refMax: null, cost: 15, isTextResult: true },
            { id: 'mr_abdomen', name: 'Abdomen MR / MRCP', unit: 'rapor', refMin: null, refMax: null, cost: 15, isTextResult: true },
            { id: 'mr_pelvik', name: 'Pelvik MR', unit: 'rapor', refMin: null, refMax: null, cost: 15, isTextResult: true },
            { id: 'mr_ekstremite', name: 'Ekstremite MR', unit: 'rapor', refMin: null, refMax: null, cost: 15, isTextResult: true },
            { id: 'mr_kardiyak', name: 'Kardiyak MR', unit: 'rapor', refMin: null, refMax: null, cost: 18, isTextResult: true },
            { id: 'mr_anjio', name: 'MR Anjiyografi', unit: 'rapor', refMin: null, refMax: null, cost: 15, isTextResult: true },
          ]
        },
        {
          name: 'Ultrasonografi',
          tests: [
            { id: 'usg_abdomen', name: 'Abdomen USG', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true, normalText: 'Normal bulgular' },
            { id: 'usg_pelvik', name: 'Pelvik USG', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true },
            { id: 'usg_tiroid', name: 'Tiroid USG', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true, normalText: 'Normal tiroid' },
            { id: 'usg_meme', name: 'Meme USG', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true },
            { id: 'usg_skrotal', name: 'Skrotal USG', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true, genderSpecific: 'M' },
            { id: 'usg_karotis', name: 'Karotis Doppler USG', unit: 'rapor', refMin: null, refMax: null, cost: 6, isTextResult: true },
            { id: 'usg_renal_doppler', name: 'Renal Doppler USG', unit: 'rapor', refMin: null, refMax: null, cost: 6, isTextResult: true },
            { id: 'doppler_alt_ext_venoz', name: 'Alt Ext. Venöz Doppler', unit: 'rapor', refMin: null, refMax: null, cost: 6, isTextResult: true, normalText: 'DVT bulgusu yok' },
            { id: 'doppler_alt_ext_arteriyel', name: 'Alt Ext. Arteryel Doppler', unit: 'rapor', refMin: null, refMax: null, cost: 6, isTextResult: true },
            { id: 'eko', name: 'Ekokardiyografi (TTE)', unit: 'rapor', refMin: null, refMax: null, cost: 7, isTextResult: true, normalText: 'EF %55-65, kapak patolojisi yok' },
            { id: 'tee', name: 'Transözofageal EKO (TEE)', unit: 'rapor', refMin: null, refMax: null, cost: 10, isTextResult: true, isInvasive: true },
          ]
        },
        {
          name: 'Nükleer Tıp & Özel',
          tests: [
            { id: 'mammografi', name: 'Mammografi', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true, genderSpecific: 'F' },
            { id: 'dexa', name: 'DEXA (Kemik Dansitometri)', unit: 'T-skoru', refMin: -1.0, refMax: 999, cost: 5 },
            { id: 'pet_ct', name: 'PET-CT', unit: 'rapor', refMin: null, refMax: null, cost: 20, isTextResult: true },
            { id: 'tiroid_sint', name: 'Tiroid Sintigrafisi', unit: 'rapor', refMin: null, refMax: null, cost: 8, isTextResult: true },
            { id: 'kemik_sint', name: 'Kemik Sintigrafisi', unit: 'rapor', refMin: null, refMax: null, cost: 10, isTextResult: true },
            { id: 'vq_sint', name: 'V/Q Sintigrafisi', unit: 'rapor', refMin: null, refMax: null, cost: 10, isTextResult: true },
            { id: 'mibg', name: 'MIBG Sintigrafisi', unit: 'rapor', refMin: null, refMax: null, cost: 12, isTextResult: true },
          ]
        },
        {
          name: 'Gelişmiş Görüntüleme',
          tests: [
            { id: 'hrct_toraks', name: 'HRCT (Yüksek Çözünürlüklü Toraks BT)', unit: 'rapor', refMin: null, refMax: null, cost: 12, isTextResult: true, normalText: 'Normal parankim yapısı' },
            { id: 'mrcp', name: 'MRCP (Biliyer MR)', unit: 'rapor', refMin: null, refMax: null, cost: 15, isTextResult: true, normalText: 'Koledok ve intrahepatik safra yolları doğal' },
            { id: 'ct_enterografi', name: 'BT Enterografi', unit: 'rapor', refMin: null, refMax: null, cost: 14, isTextResult: true, normalText: 'İnce bağırsak duvarları ve dolumu doğal' },
            { id: 'ct_angio_carotid', name: 'Karotis BT Anjiyografi', unit: 'rapor', refMin: null, refMax: null, cost: 14, isTextResult: true },
          ]
        }
      ]
    },
    {
      id: 'toksikoloji',
      name: 'Toksikoloji & İlaç Düzeyleri',
      icon: '🧪',
      subcategories: [
        {
          name: 'İlaç & Toksin Düzeyleri',
          tests: [
            { id: 'parasetamol_seviye', name: 'Parasetamol Seviyesi', unit: 'µg/mL', refMin: 0, refMax: 20, cost: 4 },
            { id: 'salisilat_seviye', name: 'Salisilat (Aspirin) Seviyesi', unit: 'mg/dL', refMin: 0, refMax: 15, cost: 4 },
            { id: 'digoksin_seviye', name: 'Digoksin Seviyesi', unit: 'ng/mL', refMin: 0.8, refMax: 2.0, cost: 5 },
            { id: 'lityum_seviye', name: 'Lityum Seviyesi', unit: 'mEq/L', refMin: 0.6, refMax: 1.2, cost: 4 },
            { id: 'kan_alkol', name: 'Etanol (Kan Alkolü)', unit: 'mg/dL', refMin: 0, refMax: 50, cost: 3 },
            { id: 'idrar_toksik_tarama', name: 'İdrar Toksik Madde Taraması', unit: 'rapor', refMin: null, refMax: null, cost: 6, isTextResult: true, normalText: 'Temiz / Negatif' },
            { id: 'kursun_kan', name: 'Kurşun Seviyesi (Kan)', unit: 'µg/dL', refMin: 0, refMax: 5, cost: 5 },
          ]
        }
      ]
    },
    {
      id: 'otoimmunite',
      name: 'Otoantikorlar & Genetik',
      icon: '🧬',
      subcategories: [
        {
          name: 'Özel Otoantikor Paneli',
          tests: [
            { id: 'anti_sm', name: 'Anti-Smith (Anti-Sm)', unit: 'U/mL', refMin: 0, refMax: 20, cost: 6 },
            { id: 'anti_ro', name: 'Anti-Ro (SSA)', unit: 'U/mL', refMin: 0, refMax: 20, cost: 5 },
            { id: 'anti_la', name: 'Anti-La (SSB)', unit: 'U/mL', refMin: 0, refMax: 20, cost: 5 },
            { id: 'anti_scl70', name: 'Anti-Scl-70', unit: 'U/mL', refMin: 0, refMax: 20, cost: 6 },
            { id: 'anti_jo1', name: 'Anti-Jo-1', unit: 'U/mL', refMin: 0, refMax: 20, cost: 6 },
            { id: 'lupus_antikoagulan', name: 'Lupus Antikoagülanı', unit: 'oran', refMin: 0.8, refMax: 1.2, cost: 6 },
            { id: 'hlab51', name: 'HLA-B51 (Behçet Şüphesi)', unit: '', refMin: null, refMax: null, cost: 7, isTextResult: true, normalText: 'Negatif' },
          ]
        },
        {
          name: 'Genetik & Patoloji Boyamaları',
          tests: [
            { id: 'gram_boyama', name: 'Gram Boyama', unit: 'rapor', refMin: null, refMax: null, cost: 2, isTextResult: true, normalText: 'Bakteri görülmedi' },
            { id: 'arb_boyama', name: 'ARB Boyama (Tüberküloz)', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Asido-rezistan basil görülmedi' },
            { id: 'koh_preparati', name: 'KOH Preparatı (Mantar)', unit: 'rapor', refMin: null, refMax: null, cost: 2, isTextResult: true, normalText: 'Hif/Maya hücresi görülmedi' },
          ]
        }
      ]
    },
    {
      id: 'ozel_testler',
      name: 'Özel Testler & Girişimler',
      icon: '🔬',
      subcategories: [
        {
          name: 'Kardiyoloji',
          tests: [
            { id: 'ekg', name: 'EKG (12 Derivasyon)', unit: 'rapor', refMin: null, refMax: null, cost: 2, isTextResult: true, normalText: 'Normal sinüs ritmi' },
            { id: 'eforlu_ekg', name: 'Eforlu EKG (Efor Testi)', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true },
            { id: 'holter', name: '24 Saat Holter Monitörizasyon', unit: 'rapor', refMin: null, refMax: null, cost: 6, isTextResult: true },
            { id: 'ambulatuar_tansiyon', name: '24 Saat ABPM', unit: 'rapor', refMin: null, refMax: null, cost: 5, isTextResult: true },
            { id: 'koroner_anjiografi', name: 'Koroner Anjiyografi', unit: 'rapor', refMin: null, refMax: null, cost: 20, isTextResult: true, isInvasive: true },
          ]
        },
        {
          name: 'Solunum',
          tests: [
            { id: 'sft', name: 'Spirometri (SFT)', unit: 'rapor', refMin: null, refMax: null, cost: 4, isTextResult: true, normalText: 'FEV1/FVC > %70, Normal' },
            { id: 'arter_kan_gazi', name: 'Arteryel Kan Gazı (AKG)', unit: 'rapor', refMin: null, refMax: null, cost: 4, isTextResult: true },
            { id: 'akg_ph', name: 'AKG pH', unit: '', refMin: 7.35, refMax: 7.45, cost: 0 },
            { id: 'akg_pco2', name: 'AKG pCO₂', unit: 'mmHg', refMin: 35, refMax: 45, cost: 0 },
            { id: 'akg_po2', name: 'AKG pO₂', unit: 'mmHg', refMin: 80, refMax: 100, cost: 0 },
            { id: 'akg_hco3', name: 'AKG HCO₃⁻', unit: 'mEq/L', refMin: 22, refMax: 26, cost: 0 },
            { id: 'bronkoskopi', name: 'Bronkoskopi', unit: 'rapor', refMin: null, refMax: null, cost: 12, isTextResult: true, isInvasive: true },
          ]
        },
        {
          name: 'Gastroenteroloji',
          tests: [
            { id: 'endoskopi', name: 'Üst GİS Endoskopi', unit: 'rapor', refMin: null, refMax: null, cost: 10, isTextResult: true, isInvasive: true },
            { id: 'kolonoskopi', name: 'Kolonoskopi', unit: 'rapor', refMin: null, refMax: null, cost: 12, isTextResult: true, isInvasive: true },
            { id: 'parasentez', name: 'Parasentez (Asit Analizi)', unit: 'rapor', refMin: null, refMax: null, cost: 8, isTextResult: true, isInvasive: true },
            { id: 'h_pylori', name: 'H. pylori Testi (Üre Nefes)', unit: '', refMin: null, refMax: null, cost: 3, isTextResult: true, normalText: 'Negatif' },
          ]
        },
        {
          name: 'Nöroloji',
          tests: [
            { id: 'eeg', name: 'EEG', unit: 'rapor', refMin: null, refMax: null, cost: 6, isTextResult: true, normalText: 'Normal EEG aktivitesi' },
            { id: 'emg', name: 'EMG / Sinir İletim Çalışması', unit: 'rapor', refMin: null, refMax: null, cost: 8, isTextResult: true },
            { id: 'lomber_ponksiyon', name: 'Lomber Ponksiyon', unit: 'rapor', refMin: null, refMax: null, cost: 8, isTextResult: true, isInvasive: true },
          ]
        },
        {
          name: 'Biyopsi & Sitoloji',
          tests: [
            { id: 'kemik_iligi', name: 'Kemik İliği Aspirasyonu/Biyopsisi', unit: 'rapor', refMin: null, refMax: null, cost: 12, isTextResult: true, isInvasive: true },
            { id: 'biyopsi_deri', name: 'Deri Biyopsisi', unit: 'rapor', refMin: null, refMax: null, cost: 8, isTextResult: true, isInvasive: true },
            { id: 'biyopsi_lenf', name: 'Lenf Nodu Biyopsisi', unit: 'rapor', refMin: null, refMax: null, cost: 10, isTextResult: true, isInvasive: true },
            { id: 'biyopsi_kc', name: 'Karaciğer Biyopsisi', unit: 'rapor', refMin: null, refMax: null, cost: 12, isTextResult: true, isInvasive: true },
            { id: 'biyopsi_bobrek', name: 'Böbrek Biyopsisi', unit: 'rapor', refMin: null, refMax: null, cost: 14, isTextResult: true, isInvasive: true },
            { id: 'biyopsi_tiroid_iab', name: 'Tiroid İİAB', unit: 'rapor', refMin: null, refMax: null, cost: 8, isTextResult: true, isInvasive: true },
            { id: 'smear', name: 'Servikal Smear (Pap)', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true, genderSpecific: 'F' },
          ]
        },
        {
          name: 'Diğer',
          tests: [
            { id: 'abi', name: 'ABI (Ankle-Brachial İndex)', unit: '', refMin: 0.9, refMax: 1.3, cost: 2 },
            { id: 'fundoskopi', name: 'Fundoskopi', unit: 'rapor', refMin: null, refMax: null, cost: 2, isTextResult: true, normalText: 'Normal fundus' },
            { id: 'otoskopi', name: 'Otoskopi', unit: 'rapor', refMin: null, refMax: null, cost: 1, isTextResult: true },
            { id: 'odiometri', name: 'Odiometri', unit: 'rapor', refMin: null, refMax: null, cost: 3, isTextResult: true },
            { id: 'dix_hallpike', name: 'Dix-Hallpike Manevrası', unit: 'rapor', refMin: null, refMax: null, cost: 1, isTextResult: true, normalText: 'Negatif' },
          ]
        }
      ]
    }
  ]
};

// Helper: Flatten all tests into a map for quick lookup
const TEST_MAP = {};
TESTS.categories.forEach(cat => {
  cat.subcategories.forEach(sub => {
    sub.tests.forEach(test => {
      TEST_MAP[test.id] = { ...test, category: cat.id, categoryName: cat.name, subcategory: sub.name };
    });
  });
});
