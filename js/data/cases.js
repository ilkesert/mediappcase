// ═══════════════════════════════════════════
// PATIENT CASE GENERATOR & CLINICAL LOGIC ENGINE
// ═══════════════════════════════════════════

const MALE_NAMES = [
  "Ahmet Yılmaz", "Mehmet Kaya", "Mustafa Demir", "Ali Öztürk", "Hüseyin Şahin",
  "Murat Çelik", "Hasan Arslan", "İbrahim Yıldız", "Fatih Doğan", "Süleyman Kılıç",
  "Yusuf Polat", "Gökhan Aydın", "Hakan Özdemir", "Serkan Erdoğan", "Osman Yavuz",
  "Emre Koç", "Bülent Kurt", "Eren Şen", "Selim Bulut", "Caner Güler",
  "Barış Çetin", "Cem Aktaş", "Deniz Yıldırım", "Emrah Tan", "Ferit Özer",
  "Hamza Toprak", "İlhan Bozkurt", "Kadir Uçar", "Levent Sarı", "Onur Karaca",
  "Rıza Acar", "Tarık Güneş", "Uğur Keskin", "Volkan Tuncer", "Yasin Altın",
  "Burak Sezer", "Engin Korkmaz", "Hayri Bayrak", "Kemal Duman", "Mert Işık",
  "Necati Tuna", "Orhan Başar", "Recep Soylu", "Sami Çakır", "Tayfun Erdem",
  "Umut Yalçın", "Vedat Kara", "Yakup Canpolat", "Zafer Durak", "Bilal Çoban",
  "Doğan Tekin", "Fikret Atasoy", "Güven Bektaş", "İsmet Şeker", "Kaan Türkmen",
  "Melih Genç", "Niyazi Savaş", "Ömer Turan", "Poyraz Akın", "Sinan Boran"
];

const FEMALE_NAMES = [
  "Ayşe Yılmaz", "Fatma Kaya", "Emine Demir", "Hatice Öztürk", "Zeynep Şahin",
  "Elif Çelik", "Meryem Arslan", "Şerife Yıldız", "Sultan Doğan", "Zehra Kılıç",
  "Leyla Polat", "Selin Aydın", "Gamze Özdemir", "Merve Erdoğan", "Tuğba Yavuz",
  "Dilan Koç", "Nihal Kurt", "Buse Şen", "Derya Bulut", "Aslı Güler",
  "Aylin Aksu", "Bahar Uysal", "Cansu Dağ", "Defne Soydan", "Eylül Kaplan",
  "Filiz Korkmaz", "Gülşah Tatar", "Hande Bayram", "Irmak Sezer", "Jale Tunç",
  "Kübra Çınar", "Lale Yüksel", "Melike Öğüt", "Neslihan Koçak", "Özlem Taşkın",
  "Pınar Arsoy", "Rabia Çalık", "Sevgi Gündüz", "Tülay Ercan", "Ülkü Yıldırım",
  "Vildan Akarsu", "Yeliz Kavak", "Zübeyde Sever", "Ada Güngör", "Betül Özen",
  "Ceyda Uluğ", "Deniz Bağcı", "Esra Aktürk", "Feryal Bilge", "Güneş Kıvanç",
  "Havva Sarıkaya", "İpek Demirtaş", "Kevser Arıkan", "Lütfiye Gencer", "Melis Çetin",
  "Nazlı Durmuş", "Oya Tanrıkulu", "Pelin Balcı", "Rüya Erol", "Şeyma Koçer"
];

const OCCUPATIONS = [
  "Öğretmen", "Mühendis", "Avukat", "TIR Şoförü", "İnşaat İşçisi",
  "Hemşire", "Asker", "Çiftçi", "Aşçı", "Kuaför",
  "Profesyonel Sporcu", "Emekli", "Ev Hanımı", "Üniversite Öğrencisi", "Eczacı",
  "Garson", "Polis Memuru", "İtfaiyeci", "Yazılımcı", "Muhasebeci",
  "Doktor", "Berber", "Tezgahtar", "Kamyon Şoförü", "Çoban",
  "Gazeteci", "Akademisyen", "Pilot", "Müzisyen", "Ressam",
  "Taksi Şoförü", "Kasap", "Fırıncı", "Kaptan (Denizci)", "Madenci",
  "Tekstil İşçisi", "Terzi", "Mobilyacı", "Boyacı", "Tesisatçı"
];

const CHILD_NAMES_MALE = [
  "Yusuf", "Ömer", "Eymen", "Emir", "Ali", "Kerem", "Miraç", "Hamza",
  "Alparslan", "Baran", "Efe", "Kuzey", "Yiğit", "Arda", "Burak"
];

const CHILD_NAMES_FEMALE = [
  "Zeynep", "Elif", "Defne", "Ecrin", "Azra", "Nehir", "Meryem", "Asel",
  "Asya", "Ela", "Lina", "Duru", "Hiranur", "Ebrar", "Yağmur"
];

const PAST_DISEASES = [
  "Hipertansiyon", "Tip 2 Diyabet", "Hiperlipidemi", "Astım", "Guatr",
  "Osteoartrit", "Gastroözofageal Reflü", "Koroner Arter Hastalığı", "Depresyon",
  "KOAH", "Epilepsi", "Kronik Böbrek Hastalığı", "Atriyal Fibrilasyon",
  "Hipotiroidi", "Romatoid Artrit", "Anemi", "Peptik Ülser"
];

const MEDICATIONS = [
  "Metformin 1000mg", "Amlodipin 10mg", "Atorvastatin 20mg", "Lisinopril 10mg",
  "Salbutamol Inhaler", "Levotiron 75mcg", "Coraspin 100mg", "Pantoprazol 40mg",
  "Sertralin 50mg", "Metoprolol 50mg", "Losartan 50mg", "Ramipril 5mg",
  "Klopidogrel 75mg", "Pregabalin 75mg", "Duloksetin 30mg", "Warfarin 5mg"
];

const HABITS = {
  smoking: ["Yok", "Bırakmış (5 yıl)", "Sosyal içici", "10 paket-yıl", "20 paket-yıl", "30 paket-yıl", "40 paket-yıl"],
  alcohol: ["Yok", "Sosyal içici", "Haftada 2-3 bira", "Haftada 1 şişe şarap", "Her gün 2-3 kadeh rakı", "Alkol bağımlısı"],
  exercise: ["Hareketsiz yaşam tarzı", "Haftada 1-2 gün hafif yürüyüş", "Düzenli egzersiz yapıyor", "Profesyonel sporcu"]
};

// ── Yardımcı Fonksiyonlar ──
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ── Bulgu Randomizasyon Motoru ──
function selectRandomFindings(disease) {
  if (!disease.symptoms) return { complaints: [], fm: "" };

  const difficulty = disease.difficulty || "medium";

  // keyFindings ve optionalFindings alanları varsa kullan, yoksa complaints'ten türet
  const key = disease.symptoms.keyFindings || disease.symptoms.complaints.slice(0, Math.min(3, disease.symptoms.complaints.length));
  const optional = disease.symptoms.optionalFindings || disease.symptoms.complaints.slice(3);

  // Zorluk seviyesine göre bulgu miktarı
  let minKey, maxOptional;
  switch(difficulty) {
    case 'easy':   minKey = Math.min(3, key.length); maxOptional = Math.min(3, optional.length); break;
    case 'medium': minKey = Math.min(2, key.length); maxOptional = Math.min(2, optional.length); break;
    case 'hard':   minKey = Math.min(2, key.length); maxOptional = Math.min(1, optional.length); break;
    case 'expert': minKey = Math.min(1, key.length); maxOptional = Math.min(1, optional.length); break;
    default:       minKey = Math.min(2, key.length); maxOptional = Math.min(2, optional.length);
  }

  const selectedKey = shuffleArray(key).slice(0, minKey);
  const selectedOpt = shuffleArray(optional).slice(0, maxOptional);

  return [...selectedKey, ...selectedOpt];
}

// ── Yaş Belirleyici (Hastalığa ve kategoriye göre) ──
function getAgeForDisease(disease) {
  if (disease.ageRange) return randBetween(disease.ageRange[0], disease.ageRange[1]);

  const cat = disease.category;
  // Pediatrik hastalıklar
  const pediatricIds = ['roseola_infantum', 'eritema_enfeksiyozum', 'el_ayak_agiz', 'krup', 'febrile_seizure', 'kawasaki', 'pyloric_stenosis', 'intussusception'];
  if (pediatricIds.includes(disease.id)) return randBetween(1, 10);

  // Kategoriye göre fallback
  if (cat === 'kadinhastaliklari') return randBetween(20, 45);
  if (cat === 'romatoloji') return randBetween(30, 65);
  if (cat === 'hematoloji') return randBetween(25, 70);
  if (cat === 'kardiyovaskuler') return randBetween(40, 75);
  if (cat === 'noroloji') return randBetween(30, 70);
  if (cat === 'dermatoloji') return randBetween(15, 55);
  if (cat === 'enfeksiyon') return randBetween(18, 60);

  return randBetween(18, 78);
}


// Generates normal ranges based on patient gender and test definition
function getNormalTestValue(testId, gender) {
  const test = TEST_MAP[testId];
  if (!test) return null;

  if (test.isTextResult) {
    return test.normalText || "Negatif / Normal";
  }

  let min = test.refMin;
  let max = test.refMax;

  if (gender === 'F' && test.refMinF !== undefined) {
    min = test.refMinF;
    max = test.refMaxF;
  } else if (gender === 'M' && test.refMinM !== undefined) {
    min = test.refMinM;
    max = test.refMaxM;
  }

  if (min === null || max === null) return "Normal";

  // If there's only an upper limit (like CRP < 5)
  if (min === 0 && max !== null) {
    return (Math.random() * (max * 0.8)).toFixed(test.refMin % 1 === 0 && max % 1 === 0 ? 0 : 2);
  }

  // Generate random value within normal range
  const randomVal = min + Math.random() * (max - min);
  return Number(randomVal.toFixed(min % 1 === 0 && max % 1 === 0 ? 0 : 2));
}

// Generate case for a given disease id
function generatePatientCase(diseaseId) {
  // 1. Find the disease definition
  let disease = DISEASES.find(d => d.id === diseaseId);
  let isDynamic = false;

  if (!disease) {
    // Check in dynamic system database
    for (const [cat, list] of Object.entries(SYSTEM_DISEASES)) {
      const found = list.find(d => d.id === diseaseId);
      if (found) {
        disease = {
          ...found,
          category: cat,
          treatments: ["Yatış ve Monitorizasyon", "Hastalığa Spesifik Tedavi", "Destek Tedavisi"],
          requiredTests: ["ekg", "wbc", "crp"],
          contraindicated: [],
          consultations: [`${cat.toUpperCase()} Konsültasyonu`]
        };
        isDynamic = true;
        break;
      }
    }
  }

  if (!disease) {
    // Fallback if not found
    disease = DISEASES[0];
  }

  // 2. Select patient details
  const gender = Math.random() > 0.5 ? 'M' : 'F';
  const age = getAgeForDisease(disease);

  let name = "";
  let occupation = "";

  if (age < 16) {
    name = gender === 'M' 
      ? CHILD_NAMES_MALE[Math.floor(Math.random() * CHILD_NAMES_MALE.length)] + " " + MALE_NAMES[Math.floor(Math.random() * MALE_NAMES.length)].split(" ")[1]
      : CHILD_NAMES_FEMALE[Math.floor(Math.random() * CHILD_NAMES_FEMALE.length)] + " " + FEMALE_NAMES[Math.floor(Math.random() * FEMALE_NAMES.length)].split(" ")[1];
    occupation = age < 6 ? "Çocuk" : "Öğrenci";
  } else {
    name = gender === 'M' 
      ? MALE_NAMES[Math.floor(Math.random() * MALE_NAMES.length)] 
      : FEMALE_NAMES[Math.floor(Math.random() * FEMALE_NAMES.length)];
    occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  }

  const height = gender === 'M' ? Math.floor(Math.random() * 25) + 165 : Math.floor(Math.random() * 20) + 155;
  const weight = gender === 'M' ? Math.floor(Math.random() * 40) + 70 : Math.floor(Math.random() * 35) + 50;
  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

  // 3. Generate vitals
  const vitals = {};
  const monitorConfig = disease.monitor || { hr: [80, 100], bp: [110, 130, 70, 85], spo2: [95, 99], rr: [14, 20], temp: [36.2, 37.5], ecg: "normal" };
  
  vitals.hr = Math.floor(monitorConfig.hr[0] + Math.random() * (monitorConfig.hr[1] - monitorConfig.hr[0]));
  vitals.bp_sys = Math.floor(monitorConfig.bp[0] + Math.random() * (monitorConfig.bp[1] - monitorConfig.bp[0]));
  vitals.bp_dia = Math.floor(monitorConfig.bp[2] + Math.random() * (monitorConfig.bp[3] - monitorConfig.bp[2]));
  vitals.spo2 = Math.floor(monitorConfig.spo2[0] + Math.random() * (monitorConfig.spo2[1] - monitorConfig.spo2[0]));
  vitals.rr = Math.floor(monitorConfig.rr[0] + Math.random() * (monitorConfig.rr[1] - monitorConfig.rr[0]));
  vitals.temp = Number((monitorConfig.temp[0] + Math.random() * (monitorConfig.temp[1] - monitorConfig.temp[0])).toFixed(1));
  vitals.ecgType = monitorConfig.ecg;

  // 4. Generate history and presentation
  let complaints = [];
  let story = "";
  let pmh = [];
  let meds = [];
  let fm = "";
  let allergies = "Bilinmeyen ilaç/madde alerjisi yok.";
  let riskFactors = [];
  let ros = "";

  // Dynamic clinical generators based on systems
  if (disease.symptoms) {
    // Bulgu randomizasyonu kullanılarak complaints oluşturulur
    complaints = selectRandomFindings(disease);
    story = disease.symptoms.story;
    pmh = [...disease.symptoms.pmh];
    meds = [...disease.symptoms.meds];
    fm = disease.symptoms.fm;
    
    // Inject specific allergies/risks for core diseases
    if (disease.id === 'stemi') {
      allergies = "Kontrast madde alerjisi şüphesi (hafif kaşıntı öyküsü).";
      riskFactors = ["Aktif sigara içicisi (20 paket-yıl)", "Sedanter yaşam tarzı", "Dislipidemi"];
      ros = "Gastrointestinal: Hafif bulantı ve mide kazınması hissi mevcut. Kardiyovasküler: Çarpıntı ve göğüste ezici ağırlık. Solunum: Eforla gelen dispne.";
    } else if (disease.id === 'dka') {
      allergies = "Penisilin alerjisi (makülopapüler döküntü öyküsü).";
      riskFactors = ["İnsülin tedavisine kötü uyum", "Düzensiz glukoz takibi"];
      ros = "Gastrointestinal: Yaygın karın ağrısı ve inatçı kusmalar. Üriner: Poliüri ve polidipsi. Genel: Ciddi halsizlik ve kilo kaybı.";
    } else if (disease.id === 'anaphylaxis') {
      allergies = "Arı sokması alerjisi (biliniyor).";
      riskFactors = ["Alerjik atopik bünye", "Astım hastası"];
      ros = "Solunum: Boğazda düğümlenme, nefes alamama, stridor. Cilt: Yaygın kaşıntı ve ürtiker plakları.";
    } else if (disease.id === 'appendicitis') {
      allergies = "Yok.";
      riskFactors = ["Genç yaş grubu"];
      ros = "Gastrointestinal: İştahsızlık, bulantı ve sağ alt kadrana yerleşen karın ağrısı. Genel: Hafif subfebril ateş.";
    } else if (disease.id === 'svt') {
      allergies = "Yok.";
      riskFactors = ["Aşırı kafein tüketimi", "Stresli iş yaşamı"];
      ros = "Kardiyovasküler: Göğüste kuş çırpınma hissi, boyunda dolgunluk atımları. Genel: Hafif sersemlik.";
    } else if (disease.id === 'pneumothorax') {
      allergies = "Yok.";
      riskFactors = ["Uzun, ince vücut yapısı (Astenik)", "Sigara kullanımı"];
      ros = "Solunum: Sağ göğüste ani başlayan batıcı yan ağrısı ve dispne. Kardiyovasküler: Hafif taşikardi.";
    } else if (disease.id === 'dvt') {
      allergies = "Sülfonamid alerjisi.";
      riskFactors = ["Uzun uçuş seyahati", "Hareketsiz çalışma koşulları"];
      ros = "Kardiyovasküler: Sağ bacakta şişlik, ağrı ve ısı artışı. Solunum: Patoloji saptanmadı.";
    } else if (disease.id === 'acetaminophen_tox') {
      allergies = "Yok.";
      riskFactors = ["Major depresyon hastası", "Daha önce intihar girişimi"];
      ros = "Gastrointestinal: Sağ üst kadran hassasiyeti, bulantı ve kusmalar. Genel: Letarji, subikterik sklera.";
    } else {
      allergies = "Bilinmiyor.";
      riskFactors = ["Yok"];
      ros = "Genel halsizlik ve kırgınlık.";
    }
  } else {
    // Generate dynamic clinically oriented story based on system and disease
    const data = getDynamicClinicalText(disease.id, disease.name, disease.category, gender);
    complaints = data.complaints;
    story = data.story;
    pmh = data.pmh;
    meds = data.meds;
    fm = data.fm;
    allergies = Math.random() > 0.7 ? "Penisilin alerjisi (döküntü)" : "Yok.";
    riskFactors = [
      disease.category === 'kardiyovaskuler' ? "Hipertansiyon, sedanter yaşam" :
      disease.category === 'solunum' ? "Sigara kullanımı, asbest maruziyeti" : "Yok"
    ];
    ros = `İlgili sistem sorgusunda ${disease.name.toLowerCase()} ile uyumlu bölgesel semptomlar ve halsizlik mevcut.`;
  }

  // Habits
  const habits = {
    smoking: HABITS.smoking[Math.floor(Math.random() * HABITS.smoking.length)],
    alcohol: HABITS.alcohol[Math.floor(Math.random() * HABITS.alcohol.length)],
    exercise: HABITS.exercise[Math.floor(Math.random() * HABITS.exercise.length)]
  };

  // Compile full patient profile
  const patientCase = {
    id: Date.now().toString(),
    diseaseId: disease.id,
    diseaseName: disease.name,
    name: name,
    gender: gender === 'M' ? "Erkek" : "Kadın",
    genderCode: gender,
    age: age,
    height: height,
    weight: weight,
    bmi: bmi,
    occupation: occupation,
    vitals: vitals,
    complaints: complaints,
    story: story,
    pmh: pmh,
    meds: meds,
    allergies: allergies,
    riskFactors: riskFactors,
    ros: ros,
    habits: habits,
    fm: fm,
    testsOrdered: {},
    administeredDrugs: [], // Uygulanan ilaçları takip edecek liste
    correctDiagnosis: disease.name,
    requiredTests: disease.requiredTests,
    contraindicated: disease.contraindicated || [],
    treatments: disease.treatments,
    consultations: disease.consultations || [],
    abnormals: disease.abnormals || {},
    drugTriggers: disease.drugTriggers || {}
  };

  return patientCase;
}

// Generates detailed clinical complaints, stories, and FM findings for dynamic diseases
function getDynamicClinicalText(id, name, category, gender) {
  let complaints = ["Halsizlik", "Yorgunluk"];
  let story = "Hasta halsizlik ve kırgınlık şikayeti ile başvurdu. Semptomları birkaç gün önce başlamış.";
  let pmh = [PAST_DISEASES[Math.floor(Math.random() * PAST_DISEASES.length)]];
  let meds = [MEDICATIONS[Math.floor(Math.random() * MEDICATIONS.length)]];
  let fm = "Genel durumu orta, batın rahat, akciğer sesleri doğal.";

  // Medical templates based on disease category
  if (category === "kardiyovaskuler") {
    complaints = ["Çarpıntı ve nefes darlığı", "Hafif göğüs ağrısı", "Çabuk yorulma"];
    story = `Hasta son 3 gündür giderek artan ${name.toLowerCase()} uyumlu nefes darlığı ve çarpıntı şikayetinden yakınıyor. Eforla şikayetleri artmaktadır.`;
    fm = "Kalp sesleri taşikardik ve düzensiz duyuldu. Pretibial ödem (+/-). Akciğer sesleri hafif kaba.";
  } else if (category === "solunum") {
    complaints = ["Öksürük ve balgam", "Nefes darlığı", "Hırıltı"];
    story = `Yaklaşık 1 haftadır devam eden viral enfeksiyonu takiben gelişen, göğüste hırıltı ve nefes almakta güçlük şikayetleri mevcut. ${name} tablosu şüphesi.`;
    fm = "Solunum hızı artmış, akciğer oskültasyonunda yer yer ronküs ve raller duyuluyor. Siyanoz yok.";
  } else if (category === "gastrointestinal") {
    complaints = ["Karın ağrısı", "Bulantı ve şişkinlik", "Dışkılama alışkanlığında değişiklik"];
    story = `Hasta epigastrik veya abdominal bölgede lokalize, ${name.toLowerCase()} ile uyumlu ağrı, şişkinlik ve bulantı şikayeti ile başvurdu.`;
    fm = "Batın muayenesinde ilgili bölgede hassasiyet (+), defans ve rebound negatif. Bağırsak sesleri normal.";
  } else if (category === "endokrin") {
    complaints = ["Aşırı halsizlik", "Hızlı kilo kaybı / alımı", "Sık idrara çıkma"];
    story = `Son birkaç aydır devam eden, ${name.toLowerCase()} şüphesi uyandıran hormonal dalgalanmalar, yorgunluk ve iştah değişimleri mevcuttur.`;
    fm = "Tirod muayenesi doğal, cilt turgoru normal. Ödem saptanmadı.";
  } else if (category === "noroloji") {
    complaints = ["Şiddetli baş ağrısı", "Baş dönmesi ve dengesizlik", "Uyuşma"];
    story = `Akut veya subakut başlangıçlı, nörolojik sistem bulgularının eşlik ettiği ${name.toLowerCase()} tablosunu düşündüren ağrı ve uyuşma şikayeti var.`;
    fm = "Nörolojik muayenede kranial sinirler doğal, motor ve duyu defisiti saptanmadı. Serebellar testler normal.";
  } else if (category === "nefroloji") {
    complaints = ["İdrar yaparken ağrı / yanma", "İdrar renginde koyuluk", "Bel ve yan ağrısı"];
    story = `Hasta yan ağrısı ve miksiyon esnasında dizüri/polaküri şikayetleriyle başvurdu. İdrar miktarı normal sınırlarda.`;
    fm = "Kostovertebral açı hassasiyeti (+/-), suprapubik bölgede hafif hassasiyet mevcut. Batın rahat.";
  } else if (category === "hematoloji") {
    complaints = ["Çabuk yorulma ve solukluk", "Halsizlik", "Baş dönmesi"];
    story = `Son 2 aydır giderek belirginleşen halsizlik, çabuk yorulma ve efor dispnesi şikayetleri mevcut. ${name} tablosu düşünülüyor.`;
    fm = "Konjonktivalar ve cilt soluk görünümlü, lenfadenopati (LAP) veya organomegali saptanmadı.";
  } else if (category === "romatoloji") {
    complaints = ["Eklemlerde ağrı ve şişlik", "Sabah tutukluğu", "Halsizlik"];
    story = `Özellikle küçük/büyük eklemleri tutan, ${name.toLowerCase()} ile uyumlu, sabahları 1 saatten uzun süren eklem sertliği ve ağrı.`;
    fm = "Eklemlerde hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı (ROM) ağrılı.";
  } else if (category === "enfeksiyon") {
    complaints = ["Ateş ve halsizlik", "Yaygın kas ağrıları", "Boğaz ağrısı veya ishal"];
    story = `Ateş yüksekliği, halsizlik, kırgınlık şikayeti mevcut. 3 gün önce başlayan semptomlara titreme eşlik ediyor.`;
    fm = "Vücut sıcaklığı artmış. Orofaringeal hiperemi (+), lenf nodu muayenesi doğal.";
  } else if (category === "dermatoloji") {
    complaints = ["Ciltte döküntü", "Yoğun kaşıntı", "Kızarıklık"];
    story = `Vücudun çeşitli bölgelerinde aniden beliren, kaşıntılı, döküntülü ve eritemli lezyonlar. ${name} şüphesi.`;
    fm = "Cilt muayenesinde ilgili bölgelerde eritemli plaklar, papüller veya maküller izlendi.";
  } else if (category === "acil") {
    complaints = ["Akut şiddetli ağrı", "Nefes darlığı", "Yaralanma veya çarpma sonrası şikayet"];
    story = `Yakın zamanda gelişen travma, toksin maruziyeti veya aniden ortaya çıkan ${name.toLowerCase()} tablosu ile acile getirildi.`;
    fm = "Travma bölgelerinde ekimoz/hematom mevcut. Vital bulgular instabil seyrediyor.";
  }

  return { complaints, story, pmh, meds, fm };
}

// Helper to dynamically inject category-appropriate laboratory abnormalities
function injectSystemicAbnormalities(patientCase, testId, test) {
  const cat = patientCase.category;
  const dId = patientCase.diseaseId;

  // 1. Inflammatory Markers (WBC, CRP, Sedim, Prokalsitonin) for Infections, Respiratory, GI, Rheumatology, Renal
  if (['wbc', 'crp', 'sedim', 'prokalsitonin'].includes(testId)) {
    const isInflammatoryCat = ['solunum', 'gastrointestinal', 'nefroloji', 'enfeksiyon', 'romatoloji', 'kadinhastaliklari', 'dermatoloji'].includes(cat);
    const isSevere = patientCase.difficulty === 'medium' || patientCase.difficulty === 'hard' || patientCase.difficulty === 'expert';
    if (isInflammatoryCat || isSevere) {
      if (testId === 'wbc') return Number((11.5 + Math.random() * 8.0).toFixed(1));
      if (testId === 'crp') return Number((15 + Math.random() * 110).toFixed(0));
      if (testId === 'sedim') return Number((25 + Math.random() * 45).toFixed(0));
      if (testId === 'prokalsitonin') return Number((0.5 + Math.random() * 4.0).toFixed(2));
    }
  }

  // 2. Renal & Electrolytes (Urea, Creatinine, eGFR, Potassium, Sodium)
  if (['kreatinin', 'bun', 'egfr', 'potasyum', 'sodyum'].includes(testId)) {
    const isRenalCat = cat === 'nefroloji';
    const isSevereShock = ['sepsis', 'dka', 'rhabdomyolysis', 'heart_failure', 'acute_liver_failure', 'hepatorenal_syndrome'].includes(dId);
    if (isRenalCat || isSevereShock) {
      if (testId === 'kreatinin') return Number((1.5 + Math.random() * 2.0).toFixed(2));
      if (testId === 'bun') return Number((30 + Math.random() * 50).toFixed(0));
      if (testId === 'egfr') return Number((20 + Math.random() * 35).toFixed(0));
      if (testId === 'potasyum') return Number((5.1 + Math.random() * 1.1).toFixed(1)); // Mild hyperkalemia
      if (testId === 'sodyum') return Number((130 + Math.random() * 4).toFixed(0)); // Mild hyponatremia
    }
  }

  // 3. Hepatic Enzymes (ALT, AST, ALP, GGT, Total Bilirubin)
  if (['alt', 'ast', 'alp', 'ggt', 'total_bilirubin'].includes(testId)) {
    const isHepatoGI = cat === 'gastrointestinal';
    const isSevereShock = ['sepsis', 'rhabdomyolysis', 'acute_liver_failure', 'hepatorenal_syndrome'].includes(dId);
    if (isHepatoGI || isSevereShock) {
      if (testId === 'alt') return Number((65 + Math.random() * 180).toFixed(0));
      if (testId === 'ast') return Number((55 + Math.random() * 150).toFixed(0));
      if (testId === 'alp') return Number((140 + Math.random() * 200).toFixed(0));
      if (testId === 'ggt') return Number((85 + Math.random() * 150).toFixed(0));
      if (testId === 'total_bilirubin') return Number((1.4 + Math.random() * 2.5).toFixed(1));
    }
  }

  // 4. Anemia Panel (Hgb, Hct, RBC, MCV, Ferritin, Demir)
  if (['hgb', 'hct', 'rbc', 'mcv', 'ferritin', 'demir'].includes(testId)) {
    const isHematology = cat === 'hematoloji';
    const isHemorrhagic = ['gis_bleeding', 'ectopic_rupture', 'postpartum_hemorrhage', 'placenta_abruption'].includes(dId) || dId.includes('anemia');
    if (isHematology || isHemorrhagic) {
      if (testId === 'hgb') return Number((7.0 + Math.random() * 3.0).toFixed(1));
      if (testId === 'hct') return Number((21 + Math.random() * 9).toFixed(0));
      if (testId === 'rbc') return Number((2.5 + Math.random() * 1.2).toFixed(2));
      if (testId === 'mcv') return Number((62 + Math.random() * 14).toFixed(0));
      if (testId === 'ferritin') return Number((3 + Math.random() * 12).toFixed(0));
      if (testId === 'demir') return Number((15 + Math.random() * 20).toFixed(0));
    }
  }

  // 5. ABG / Kan Gazı (pH, pO2, pCO2, HCO3, Laktat)
  if (['akg_ph', 'akg_po2', 'akg_pco2', 'akg_hco3', 'laktat', 'arter_kan_gazi'].includes(testId)) {
    const isRespiratory = cat === 'solunum';
    const isAcidosis = ['sepsis', 'dka', 'co_poisoning', 'ards', 'heart_failure', 'pulmonary_embolism'].includes(dId);
    if (isRespiratory || isAcidosis) {
      if (testId === 'akg_ph' || testId === 'arter_kan_gazi') return Number((7.20 + Math.random() * 0.12).toFixed(2));
      if (testId === 'akg_po2') return Number((55 + Math.random() * 18).toFixed(0));
      if (testId === 'akg_pco2') return Number((24 + Math.random() * 8).toFixed(0)); // metabolic acidosis hyperventilation
      if (testId === 'akg_hco3') return Number((12 + Math.random() * 8).toFixed(0));
      if (testId === 'laktat') return Number((2.5 + Math.random() * 4.0).toFixed(1));
    }
  }

  // 6. Cardiac Panel (Troponin I, CK, CK-MB, ProBNP)
  if (['troponin_i', 'ck', 'ckmb', 'ntprobnp', 'bnp'].includes(testId)) {
    const isCardiac = cat === 'kardiyovaskuler';
    const isSevereStress = ['pulmonary_embolism', 'sepsis', 'aortic_dissection', 'copd_exacerbation'].includes(dId);
    if (isCardiac || isSevereStress) {
      if (testId === 'troponin_i') return Number((0.12 + Math.random() * 1.5).toFixed(2));
      if (testId === 'ck') return Number((200 + Math.random() * 300).toFixed(0));
      if (testId === 'ckmb') return Number((15 + Math.random() * 35).toFixed(0));
      if (testId === 'ntprobnp') return Number((750 + Math.random() * 2500).toFixed(0));
      if (testId === 'bnp') return Number((150 + Math.random() * 600).toFixed(0));
    }
  }

  return null;
}

// Generate the lab result value when user clicks/orders a test
function generateLabResult(patientCase, testId) {
  const test = TEST_MAP[testId];
  if (!test) return { name: "Bilinmeyen Test", value: "N/A" };

  if (!patientCase.abnormals) {
    patientCase.abnormals = {};
  }

  // Check if we should inject category-specific systemic abnormalities if undefined
  if (patientCase.abnormals[testId] === undefined) {
    const systemicVal = injectSystemicAbnormalities(patientCase, testId, test);
    if (systemicVal !== null) {
      patientCase.abnormals[testId] = systemicVal;
    }
  }

  // If the test is in requiredTests, but not explicitly defined in abnormals, inject a realistic anomaly
  if (patientCase.requiredTests && patientCase.requiredTests.includes(testId) && (patientCase.abnormals[testId] === undefined)) {
    if (!test.isTextResult) {
      const refMin = patientCase.genderCode === 'F' && test.refMinF !== undefined ? test.refMinF : test.refMin;
      const refMax = patientCase.genderCode === 'F' && test.refMaxF !== undefined ? test.refMaxF : test.refMax;
      
      const typicallyLow = ['hgb', 'hct', 'albumin', 'ferritin', 'potasyum', 'sodyum', 'kalsiyum', 'folat', 'b12'].includes(testId);
      
      if (typicallyLow && refMin !== null) {
        patientCase.abnormals[testId] = Number((refMin * 0.75).toFixed(testId === 'kreatinin' || testId === 'troponin_i' ? 2 : 1));
      } else if (refMax !== null) {
        let multiplier = 1.4;
        if (['crp', 'troponin_i', 'troponin_t', 'amilaz', 'lipaz', 'ntprobnp', 'bnp', 'ck', 'ckmb', 'alt', 'ast', 'd_dimer', 'ddimer', 'sedim', 'prokalsitonin', 'laktat', 'glukoz'].includes(testId)) {
          multiplier = 3.5;
        }
        patientCase.abnormals[testId] = Number((refMax * multiplier).toFixed(testId === 'kreatinin' || testId === 'troponin_i' ? 2 : 1));
      } else {
        patientCase.abnormals[testId] = 1.5;
      }
    } else {
      if (testId === 'ekg') {
        patientCase.abnormals[testId] = "Akut patoloji lehine non-spesifik ST-T değişiklikleri ve taşikardi";
      } else if (testId === 'pa_ac') {
        patientCase.abnormals[testId] = "Hastalıkla uyumlu lokalize infiltrasyon ve opasite artışı";
      } else if (testId === 'usg_abdomen') {
        patientCase.abnormals[testId] = "İlgili organda hafif duvar kalınlaşması ve çevre yağ dokularında kirlenme";
      } else if (testId === 'mr_kranial') {
        patientCase.abnormals[testId] = "Akut iskemi veya patoloji ile uyumlu sinyal değişiklikleri";
      } else if (testId === 'endoskopi') {
        patientCase.abnormals[testId] = "Mukozal hiperemi, ödem ve erozif değişiklikler";
      } else if (testId === 'bogaz_kultur') {
        patientCase.abnormals[testId] = "Patojen bakteri üremesi saptandı";
      } else if (testId === 'idrar_kultur') {
        patientCase.abnormals[testId] = "Patojen mikroorganizma üremesi saptandı (>10^5 CFU/ml)";
      } else {
        patientCase.abnormals[testId] = test.normalText ? `${test.normalText} (PATOLOJİK DEĞİŞİKLİKLER)` : "Hastalıkla uyumlu patolojik bulgular saptandı";
      }
    }
  }

  // Check if this test is custom-defined as abnormal in the disease profile
  if (patientCase.abnormals && patientCase.abnormals[testId] !== undefined) {
    const value = patientCase.abnormals[testId];
    let isHigh = false;
    let isLow = false;
    let isCritical = false;

    if (!test.isTextResult) {
      const refMin = patientCase.genderCode === 'F' && test.refMinF !== undefined ? test.refMinF : test.refMin;
      const refMax = patientCase.genderCode === 'F' && test.refMaxF !== undefined ? test.refMaxF : test.refMax;
      
      if (refMax !== null && value > refMax) isHigh = true;
      if (refMin !== null && value < refMin) isLow = true;
      
      // Determine if critical (highly out of range)
      if (isHigh && value > refMax * 1.5) isCritical = true;
      if (isLow && value < refMin * 0.6) isCritical = true;
    } else {
      // For text results, check if different from normalText
      if (test.normalText && String(value).toLowerCase() !== String(test.normalText).toLowerCase()) {
        isHigh = true; // Mark as red/abnormal
      }
    }

    return {
      name: test.name,
      value: value,
      unit: test.unit,
      isAbnormalHigh: isHigh && !isLow,
      isAbnormalLow: isLow,
      isCritical: isCritical,
      referenceRange: getReferenceRangeText(test, patientCase.genderCode)
    };
  }

  // If there's a dynamic disease and it's a test for anemic, septic, or inflammatory condition
  let value = getNormalTestValue(testId, patientCase.genderCode);
  let isHigh = false;
  let isLow = false;

  // Dynamically inject anomalies for SYSTEM_DISEASES if applicable
  const diseaseId = patientCase.diseaseId;
  
  if (testId === 'wbc' && (diseaseId.includes('pneumonia') || diseaseId === 'appendicitis' || diseaseId === 'cholecystitis' || diseaseId === 'sepsis' || diseaseId === 'pyelonephritis' || diseaseId === 'meningitis')) {
    value = Number((14.0 + Math.random() * 8.0).toFixed(1));
    isHigh = true;
  } else if (testId === 'crp' && (diseaseId.includes('pneumonia') || diseaseId === 'appendicitis' || diseaseId === 'cholecystitis' || diseaseId === 'sepsis' || diseaseId === 'pyelonephritis' || diseaseId === 'meningitis' || diseaseId.includes('arthritis') || diseaseId === 'gout')) {
    value = Number((40 + Math.random() * 150).toFixed(0));
    isHigh = true;
  } else if ((testId === 'hgb' || testId === 'hct') && (diseaseId.includes('anemia') || diseaseId === 'iron_deficiency' || diseaseId === 'ectopic_pregnancy')) {
    value = Number((7.5 + Math.random() * 3.5).toFixed(1));
    isLow = true;
  } else if (testId === 'mcv' && (diseaseId === 'iron_deficiency' || diseaseId.includes('thalassemia'))) {
    value = Number((65 + Math.random() * 10).toFixed(0));
    isLow = true;
  }

  // Double check normal/abnormal state for returning values
  if (!test.isTextResult) {
    const refMin = patientCase.genderCode === 'F' && test.refMinF !== undefined ? test.refMinF : test.refMin;
    const refMax = patientCase.genderCode === 'F' && test.refMaxF !== undefined ? test.refMaxF : test.refMax;
    if (refMax !== null && value > refMax) isHigh = true;
    if (refMin !== null && value < refMin) isLow = true;
  }

  return {
    name: test.name,
    value: value,
    unit: test.unit,
    isAbnormalHigh: isHigh,
    isAbnormalLow: isLow,
    isCritical: isHigh && value > (test.refMax || 10) * 2,
    referenceRange: getReferenceRangeText(test, patientCase.genderCode)
  };
}

function getReferenceRangeText(test, gender) {
  if (test.isTextResult) return test.normalText ? `${test.normalText}` : "Negatif / Normal";
  
  let min = test.refMin;
  let max = test.refMax;

  if (gender === 'F' && test.refMinF !== undefined) {
    min = test.refMinF;
    max = test.refMaxF;
  } else if (gender === 'M' && test.refMinM !== undefined) {
    min = test.refMinM;
    max = test.refMaxM;
  }

  if (min === 0 && max !== null) return `< ${max}`;
  if (min !== null && max !== null) return `${min} - ${max}`;
  return "";
}

// ═══════════════════════════════════════════
// NEW: INTERACTIVE DIALOGUE & CONSULTATION HINTS ENGINE
// ═══════════════════════════════════════════

function getPatientDialogueResponse(patientCase, questionId) {
  const dId = patientCase.diseaseId;
  const name = patientCase.name;

  // Custom dialogue responses based on disease types
  if (dId === 'stemi') {
    switch (questionId) {
      case 'onset': return "Yaklaşık 2 saat önce aniden başladı evladım. Ne yaptıysam geçmedi.";
      case 'character': return "Göğsümün ortasında sanki bir fil oturuyormuş gibi ezici, daraltıcı bir ağrı var. Sol omzuma ve alt çeneme doğru da yayılıyor.";
      case 'associated': return "Çok kötü bulantım var, nefes almakta zorlanıyorum ve üzerimden soğuk terler dökülüyor.";
      case 'family': return "Babamı genç yaşta kalp krizinden kaybetmiştik, ailede kalp rahatsızlıkları yaygın.";
      case 'allergies': return "Bilinen kontrast madde alerjim olduğunu söylemişti eski doktorum. Başka yok.";
      case 'prior_hospitalization': return "Hayır, daha önce kalp şikayetiyle hiç yatmadım, ilk defa bu kadar şiddetli oluyor.";
      default: return "Göğsüm çok kötü sıkışıyor doktor bey, lütfen bana yardım edin...";
    }
  }
  
  if (dId === 'dka') {
    switch (questionId) {
      case 'onset': return "Son 2 gündür kendimi halsiz hissediyordum ama dün geceden beri sürekli kusuyorum ve nefes alamıyorum.";
      case 'character': return "Göğsümde ağrı yok ama karnımda genel bir ağrı ve kramplar var, çok huzursuzum.";
      case 'associated': return "Ağzım kupkuru oldu, litrelerce su içsem de doyamıyorum. Sürekli tuvalete gidiyorum.";
      case 'family': return "Annemde de şeker hastalığı var ama o hap kullanıyor, ben insülin iğnesi yapıyorum.";
      case 'allergies': return "Penisiline karşı alerjim var. Küçükken iğne vurulunca her yerim kabarmıştı.";
      case 'prior_hospitalization': return "Evet, 2 yıl önce ilk teşhis konduğunda 3 gün yoğun bakımda şeker koması nedeniyle yatmıştım.";
      default: return "Çok halsizim, başım dönüyor ve sürekli susuyorum...";
    }
  }

  if (dId === 'appendicitis') {
    switch (questionId) {
      case 'onset': return "Dün akşam üzeri göbeğimin etrafında hafif bir sızı vardı, gece sağ kasığıma doğru indi ve çok şiddetlendi.";
      case 'character': return "Sağ alt tarafımda bıçak saplanır gibi batan bir ağrı. Bacağımı karnıma çekince biraz hafifliyor ama yürürken çok acıyor.";
      case 'associated': return "Midem çok bulanıyor, birkaç kez kustum ve iştahım tamamen kesildi. Yemek kokusu bile midemi alt üst ediyor.";
      case 'family': return "Ailede özel bir kalıtsal hastalık hatırlamıyorum.";
      case 'allergies': return "Bilinen hiçbir şeye alerjim yok.";
      case 'prior_hospitalization': return "Hayır, bu yaşıma kadar hiç hastaneye yatmadım, ameliyat da geçirmedim.";
      default: return "Sağ kasığıma dokunduğunuzda çok acıyor doktor bey, orası patlayacak gibi hissediyorum.";
    }
  }

  if (dId === 'anaphylaxis') {
    switch (questionId) {
      case 'onset': return "Arı soktuktan 10-15 dakika sonra boğazımda bir düğümlenme hissettim, sonra nefesim tıkandı.";
      case 'character': return "Ağrım yok ama boğazım çok kötü şişiyor, yutkunamıyorum ve nefes alamıyorum.";
      case 'associated': return "Tüm vücudum deli gibi kaşınıyor, her yerim kabardı ve gözlerim şişti, tansiyonum düşüyor gibi hissediyorum.";
      case 'family': return "Kardeşimde de fıstık alerjisi var.";
      case 'allergies': return "Arı zehrine (venom) karşı aşırı derecede alerjim var, doktorlar iğne taşımamı söylemişti ama yanımda yok.";
      case 'prior_hospitalization': return "Evet, çocukken yine arı sokması yüzünden acilde hava verip iğne yapmışlardı.";
      default: return "Nefes... alamıyorum... boğazım... tıkanıyor...";
    }
  }

  if (dId === 'svt') {
    switch (questionId) {
      case 'onset': return "Yaklaşık 45 dakika önce televizyon izlerken aniden kalbim küt küt çarpmaya başladı.";
      case 'character': return "Ağrı değil ama göğsümün içinde bir motor çalışıyor sanki, boğazımda atımları hissediyorum.";
      case 'associated': return "Hafif başım dönüyor, gözlerim kararıyor gibi oluyor ama nefesim iyi.";
      case 'family': return "Ailemde kalp ritim bozukluğu olan kimse yok.";
      case 'allergies': return "Herhangi bir ilaç alerjim bulunmuyor.";
      case 'prior_hospitalization': return "Daha önce de çarpıntım oldu ama acile gidene kadar kendiliğinden geçmişti, ilk defa yatış ihtimali konuşuluyor.";
      default: return "Kalbim yerinden çıkacakmış gibi atıyor...";
    }
  }

  if (dId === 'pneumothorax') {
    switch (questionId) {
      case 'onset': return "Bu sabah aniden nefes alırken sırtıma saplanan bir ağrıyla başladı, sonra nefesim daraldı.";
      case 'character': return "Bıçak gibi batıyor, nefes aldıkça batma hissi dayanılmaz hale geliyor.";
      case 'associated': return "Öksürük falan yok ama nefesim çok yetersiz, konuşurken bile zorlanıyorum.";
      case 'family': return "Babamda gençken akciğer sönmesi olmuştu, tüp takmışlardı.";
      case 'allergies': return "Alerjim yok.";
      case 'prior_hospitalization': return "Hayır, hiç yatışım olmadı.";
      default: return "Göğsümün sağ tarafı çok acıyor...";
    }
  }

  if (dId === 'dvt') {
    switch (questionId) {
      case 'onset': return "İki gün önce bacağımda hafif bir sertlik vardı, dün sabah şişmiş ve kızarmış halde uyandım.";
      case 'character': return "Baldırımda yürümekle artan, üzerine basamadığım ezici ve gergin bir ağrı var.";
      case 'associated': return "Ateşim var gibi hissediyorum, bacağım diğerine göre çok sıcak.";
      case 'family': return "Teyzemde de bacak damarlarında pıhtılaşma sorunu olmuştu.";
      case 'allergies': return "Baktrim (Sülfonamid) isimli antibiyotiğe alerjim var.";
      case 'prior_hospitalization': return "Hayır, daha önce hastaneye yatmadım.";
      default: return "Bacağım patlayacakmış gibi gergin ve ağrılı...";
    }
  }

  if (dId === 'acetaminophen_tox') {
    switch (questionId) {
      case 'onset': return "Dün akşam 10 gibi içtim hapları. Pişman olup sabah aileme haber verdim.";
      case 'character': return "Karnımın sağ üst köşesinde sürekli bir sızı var, ağrı genel olarak midemde.";
      case 'associated': return "Sabahtan beri sürekli kusuyorum, midemde hiçbir şey durmuyor, halsizlikten ayakta duramıyorum.";
      case 'family': return "Aile öyküm doğal.";
      case 'allergies': return "Alerjim yok.";
      case 'prior_hospitalization': return "Geçen yıl depresyon nedeniyle psikiyatri servisinde 2 hafta yatmıştım.";
      default: return "Midem çok kötü bulanıyor...";
    }
  }

  // System based dynamic fallback responses for the rest of 200+ diseases
  const cat = (patientCase.requiredTests && patientCase.requiredTests.length > 0) 
    ? (TEST_MAP[patientCase.requiredTests[0]]?.category || 'genel') 
    : 'genel';
  
  switch (questionId) {
    case 'onset':
      if (cat === 'solunum') return "Birkaç gündür giderek artıyor. Son zamanlarda nefesim iyice daraldı.";
      if (cat === 'gastrointestinal') return "Dün yemekten sonra başladı, karın ağrım geçmek bilmiyor.";
      if (cat === 'noroloji') return "Bugün aniden gelişti, daha önce böyle bir şey yaşamamıştım.";
      return "Bir süredir halsizlik ve kırgınlığım vardı, son saatlerde şikayetlerim iyice belirginleşti.";

    case 'character':
      if (cat === 'solunum') return "Nefes alıp verirken göğsümde batma ve hırıltı hissediyorum.";
      if (cat === 'gastrointestinal') return "Karnımda yaygın veya kıvrandırıcı tarzda bir ağrı var, bazen sırta da vuruyor.";
      if (cat === 'noroloji') return "Kafamın içinde zonklayıcı veya uyuşturucu bir ağrı/hissizlik var.";
      if (cat === 'romatoloji') return "Eklemlerim sızlıyor, özellikle sabahları kalktığımda parmaklarımı oynatamıyorum.";
      return "Sürekli bir sızı ve genel vücut ağrım var doktor bey.";

    case 'associated':
      if (cat === 'solunum') return "Öksürükle birlikte yoğun balgam çıkarıyorum, bazen rengi sarımtırak oluyor.";
      if (cat === 'gastrointestinal') return "Bulantı, kusma ve şişkinlik hissi eşlik ediyor, tuvalete çıkamadım.";
      if (cat === 'nefroloji') return "İdrar yaparken çok şiddetli bir yanma var, sanki tam boşaltamıyorum.";
      return "Halsizlik, ateş basması ve üşüme titreme eşlik ediyor.";

    case 'family':
      return "Ailemde tansiyon ve şeker hastası olanlar var ama benimkiyle benzer bir şey yaşayan yok sanırım.";

    case 'allergies':
      return "Bilinen bir ilaç veya gıda alerjim yok.";

    case 'prior_hospitalization':
      return "Hayır, daha önce bu şikayetle veya başka bir sebeple hastaneye yatışım olmadı.";

    default:
      return "Kendimi hiç iyi hissetmiyorum doktor bey, şikayetlerimi gidermek için ne yapmamız gerekiyor?";
  }
}

function getConsultationHint(patientCase, departmentId) {
  const dId = patientCase.diseaseId;
  const dName = patientCase.diseaseName;

  // Let's build clinical hints based on the correct department being consulted
  // Check if consulted department is the correct one for the disease
  const isCorrectDept = patientCase.consultations.some(cons => 
    cons.toLowerCase().includes(departmentId.toLowerCase()) || departmentId.toLowerCase().includes(cons.toLowerCase())
  );

  const deptNames = {
    kardiyoloji: "Kardiyoloji Uzmanı",
    gogus: "Göğüs Hastalıkları Uzmanı",
    cerrahi: "Genel Cerrahi Uzmanı",
    noroloji: "Nöroloji Uzmanı",
    enfeksiyon: "Enfeksiyon Hastalıkları Uzmanı",
    kadin_dogum: "Kadın Hastalıkları ve Doğum Uzmanı",
    psikiyatri: "Psikiyatri Uzmanı",
    ortopedi: "Ortopedi Uzmanı",
    urologi: "Üroloji Uzmanı"
  };

  const doctorTitle = deptNames[departmentId] || "Konsülan Hekim";

  if (!isCorrectDept) {
    return `${doctorTitle}: "Bu hastanın şikayetleri ve vital bulguları bizim branşımızla doğrudan ilişkili görünmüyor. Başka bir bölümün konsültasyonunu istemeniz veya test sonuçlarını (özellikle spesifik parametreleri) daha detaylı incelemeniz daha faydalı olacaktır."`;
  }

  // Provide high quality clinical hint based on the actual disease
  if (dId === 'stemi') {
    return `${doctorTitle}: "Hastanın göğüs ağrısı hikayesi ve monitördeki belirgin ST elevasyonu akut miyokard enfarktüsünü işaret ediyor. Troponin testi sonucunu görerek tanıyı netleştirmeli ve hastayı bekletmeden acil koroner anjiyografiye (PCI) yönlendirmelisiniz. Kesinlikle efor testi istemeyin!"`;
  }
  if (dId === 'dka') {
    return `${doctorTitle}: "Genç hastada karın ağrısı, derin solunum ve yüksek glukoz değerleri Diyabetik Ketoasidoz (DKA) tablosu ile örtüşüyor. Kan gazında asidozu ve idrarda keton varlığını teyit edin. Tedavide IV hidrasyon ve insülin infüzyonu başlamadan önce mutlaka potasyum seviyesini kontrol etmelisiniz."`;
  }
  if (dId === 'appendicitis') {
    return `${doctorTitle}: "Karın ağrısının göbek çevresinden başlayıp sağ alt kadrana yerleşmesi ve McBurney noktasında rebound olması klasik akut apandisittir. Tanı için lökosit artışını (WBC) görün ve batın ultrasonografisi (USG) veya BT isteyerek apendiks çapını kontrol edin."`;
  }
  if (dId === 'anaphylaxis') {
    return `${doctorTitle}: "Arı sokması sonrası gelişen stridor, hışıltı ve hipotansiyon tablosu anafilaksi şokudur. Zaman kaybetmeden uyluk dış yanından intramuskuler (IM) Adrenalin uygulayın, damar yolunu açıp sıvı replasmanına başlayın. Beta bloker kullanmaktan kaçının."`;
  }

  // Dynamic clinical hints for the remaining 200+ diseases
  return `${doctorTitle}: "Hastanın verilerini ve vital bulgularını inceledik. Bu durum büyük ihtimalle bir '${dName}' tablosudur. Tanıyı doğrulamak için ilgili spesifik kan tahlillerini (örneğin ${patientCase.requiredTests.join(', ').toUpperCase()}) isteyin. Tedavide ise hastayı monitörize edip uygun ilaç protokolünü planlamalısınız."`;
}

