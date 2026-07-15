const DISEASES = [
{
    id: "stemi",
    name: "Akut Miyokard İnfarktüsü (STEMI)",
    category: "kardiyovaskuler",
    difficulty: "easy",
    monitor: { hr: [100, 120], bp: [90, 110, 60, 70], spo2: [90, 94], rr: [20, 24], temp: [36.5, 37.2], ecg: "st_elevation" },
    abnormals: {
      troponin_i: 4.2,
      troponin_t: 150,
      ck: 450,
      ckmb: 35,
      ekg: "Sinüs taşikardisi, V1-V4 derivasyonlarında ST segment elevasyonu ve resiprokal depresyonlar",
      bt_anjio_koroner: "Sol anterior desendan arterde (LAD) akut tromboz ve tam tıkanıklık",
      koroner_anjiografi: "LAD proksimalinde %100 oklüzyon saptandı, acil PCI planlandı"
    },
    symptoms: {
      complaints: ["Şiddetli göğüs ağrısı", "Sol kola yayılan ağrı", "Soğuk terleme", "Nefes darlığı"],
      keyFindings: ["Şiddetli göğüs ağrısı", "Sol kola yayılan ağrı", "Soğuk terleme"],
      optionalFindings: ["Nefes darlığı", "Halsizlik", "Bulantı", "Sol omuzda batma"],
      story: "Hasta yaklaşık 1 saat önce aniden başlayan, göğüs kafesi üzerinde baskı, sıkışma tarzında tariflenen, sol omuz ve sol kola yayılan, istirahatle geçmeyen şiddetli retrosternal ağrı ve soğuk terleme şikayetiyle acil servise getirildi.",
      pmh: ["Hipertansiyon (5 yıl)", "Tip 2 Diyabet (3 yıl)", "Aktif sigara kullanımı"],
      meds: ["Metformin 1000mg 2x1", "Amlodipin 10mg 1x1"],
      fm: "Genel durum orta-kötü, soğuk ve nemli cilt, soluk görünümlü, ajite. Kalp sesleri ritmik, taşikardik. Akciğer dinlemekle bazallerde hafif raller mevcut."
    },
    requiredTests: ["ekg", "troponin_i", "ckmb"],
    contraindicated: [],
    drugTriggers: {
      "aspirin": { effect: "stabilize", vitalChanges: { hr: -5 }, message: "Aspirin 300mg çiğnetildi. Antiagregan tedavi sağlandı." },
      "klopidogrel": { effect: "stabilize", vitalChanges: {}, message: "Klopidogrel 300mg yükleme yapıldı." },
      "nitrogliserin": { effect: "stabilize", vitalChanges: { bp_sys: -15, bp_dia: -8, hr: 5 }, message: "Nitrogliserin sublingual uygulandı. Göğüs ağrısı hafifledi." },
      "heparin": { effect: "stabilize", vitalChanges: {}, message: "Heparin bolus ve infüzyon başlandı." },
      "metoprolol": { effect: "stabilize", vitalChanges: { hr: -12, bp_sys: -10 }, message: "Metoprolol uygulandı. Miyokard oksijen tüketimi azaltıldı." },
      "kat_lab": { effect: "stabilize", vitalChanges: { hr: -10, bp_sys: 10, spo2: 2 }, message: "Hasta acil anjiyografiye (PCI) yönlendirildi ve LAD tıkalı damarı açıldı!" }
    },
    treatments: [
      "Acil Koroner Anjiyografi (PCI)",
      "Aspirin 300mg + Klopidogrel 600mg yükleme",
      "Oksijen + IV Nitrogiserin + Heparin bolusu"
    ],
    consultations: ["Kardiyoloji Acil Konsültasyonu"]
  },

{
    id: "nstemi",
    name: "Akut Miyokard İnfarktüsü (NSTEMI)",
    category: "kardiyovaskuler",
    difficulty: "medium",
    monitor: { hr: [90, 105], bp: [130, 150, 80, 95], spo2: [94, 97], rr: [18, 22], temp: [36.5, 37.0], ecg: "st_depression" },
    abnormals: {
      troponin_i: 0.85,
      troponin_t: 45,
      ck: 210,
      ckmb: 12,
      ekg: "T dalga inversiyonu ve V4-V6 derivasyonlarında ST depresyonu",
      koroner_anjiografi: "Cx veya RCA'da ciddi darlık ve unstabil plak bulgusu"
    },
    symptoms: {
      complaints: ["Göğüste sıkışma hissi", "Nefes darlığı", "Halsizlik", "Bulantı"],
      story: "Hasta son 24 saattir ara ara gelen, sol kola yayılan, göğüste baskı ve sıkışma tarzında retrosternal ağrı şikayetiyle başvurdu. Son ağrı atağı yaklaşık 30 dakikadır devam etmektedir.",
      pmh: ["Koroner arter hastalığı (2 yıl)", "Hiperlipidemi"],
      meds: ["Aspirin 100mg 1x1", "Atorvastatin 20mg 1x1"],
      fm: "Genel durum orta, cilt ılık ve kuru, hafif ajite. Kalp sesleri ritmik, taşikardik, ek ses veya üfürüm duyulmadı. Akciğer sesleri doğal."
    },
    requiredTests: ["ekg", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Yoğun Bakım Yatışı",
      "Dual Antiplatelet (Aspirin + Tikagrelor)",
      "LMWH (Enoksaparin 1mg/kg 2x1)",
      "Beta-bloker + Nitrat tedavisi"
    ],
    consultations: ["Kardiyoloji Konsültasyonu"]
  },

{
    id: "stabil_anjina",
    name: "Stabil Anjina Pektoris",
    category: "kardiyovaskuler",
    difficulty: "easy",
    monitor: { hr: [75, 95], bp: [120, 140, 75, 90], spo2: [94, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eforla gelen nefes darlığı", "Çabuk yorulma", "Ayak bileklerinde şişlik"],
      story: "Hasta son 3 haftadır giderek artan nefes darlığı, halsizlik ve çabuk yorulma şikayetleri ile kardiyoloji polikliniğine başvurdu. Merdiven çıkarken dinlenmek zorunda kalıyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Ramipril 5mg 1x1"],
      fm: "Kalp sesleri ritmik, dinlemekle hafif S3 duyuluyor. Akciğer bazallerinde hafif matite ve raller mevcut. Pretibial ödem (+/-)."
    },
    requiredTests: ["ekg", "eko", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Beta Bloker tedavisi başlanması",
      "ACE İnhibitörü doz ayarlanması",
      "Tuzsuz diyet ve kilo takibi"
    ],
    consultations: ["Kardiyoloji Polikliniği"]
  },

{
    id: "heart_failure",
    name: "Kalp Yetmezliği",
    category: "kardiyovaskuler",
    difficulty: "easy",
    monitor: { hr: [75, 95], bp: [120, 140, 75, 90], spo2: [94, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eforla gelen nefes darlığı", "Çabuk yorulma", "Ayak bileklerinde şişlik"],
      story: "Hasta son 3 haftadır giderek artan nefes darlığı, halsizlik ve çabuk yorulma şikayetleri ile kardiyoloji polikliniğine başvurdu. Merdiven çıkarken dinlenmek zorunda kalıyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Ramipril 5mg 1x1"],
      fm: "Kalp sesleri ritmik, dinlemekle hafif S3 duyuluyor. Akciğer bazallerinde hafif matite ve raller mevcut. Pretibial ödem (+/-)."
    },
    requiredTests: ["ekg", "eko", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Beta Bloker tedavisi başlanması",
      "ACE İnhibitörü doz ayarlanması",
      "Tuzsuz diyet ve kilo takibi"
    ],
    consultations: ["Kardiyoloji Polikliniği"]
  },

{
    id: "atrial_fibrillation",
    name: "Atriyal Fibrilasyon",
    category: "kardiyovaskuler",
    difficulty: "medium",
    monitor: { hr: [75, 95], bp: [120, 140, 75, 90], spo2: [94, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eforla gelen nefes darlığı", "Çabuk yorulma", "Ayak bileklerinde şişlik"],
      story: "Hasta son 3 haftadır giderek artan nefes darlığı, halsizlik ve çabuk yorulma şikayetleri ile kardiyoloji polikliniğine başvurdu. Merdiven çıkarken dinlenmek zorunda kalıyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Ramipril 5mg 1x1"],
      fm: "Kalp sesleri ritmik, dinlemekle hafif S3 duyuluyor. Akciğer bazallerinde hafif matite ve raller mevcut. Pretibial ödem (+/-)."
    },
    requiredTests: ["ekg", "eko", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Beta Bloker tedavisi başlanması",
      "ACE İnhibitörü doz ayarlanması",
      "Tuzsuz diyet ve kilo takibi"
    ],
    consultations: ["Kardiyoloji Polikliniği"]
  },

{
    id: "ischemic_stroke",
    name: "Serebrovasküler Olay (İskemik İnme)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "pulmonary_embolism",
    name: "Akut Pulmoner Emboli",
    category: "solunum",
    difficulty: "hard",
    monitor: { hr: [110, 130], bp: [95, 110, 60, 70], spo2: [86, 92], rr: [24, 30], temp: [36.8, 37.5], ecg: "tachycardia" },
    abnormals: {
      ddimer: 4.8,
      bt_anjio_pulmoner: "Sağ ana pulmoner arterde lümeni tam tıkamayan dolum defekti (akut pulmoner emboli). Sağ ventrikül/sol ventrikül oranı artmıştır.",
      akg_po2: 55,
      akg_pco2: 28,
      akg_ph: 7.48,
      ekg: "Sinüs taşikardisi, S1Q3T3 paterni mevcut",
      eko: "Sağ ventrikülde dilatasyon ve yüklenme bulguları (D-şekilli sol ventrikül), TAPSE 14 mm (sağ ventrikül fonksiyonlarında azalma)."
    },
    symptoms: {
      complaints: ["Ani başlayan nefes darlığı", "Batıcı göğüs ağrısı", "Öksürük", "Çarpıntı"],
      story: "Hasta 2 saat önce aniden başlayan, nefes almakla şiddetlenen batıcı tarzda göğüs ağrısı (plöritik ağrı) ve ciddi nefes darlığı şikayetiyle acil servise getirildi. Öyküsünde 5 gün önce sağ diz artroskopisi geçirdiği öğrenildi. AHA 2026 kılavuzuna göre risk sınıflaması ve sPESI/Hestia skorlaması yapılmalıdır.",
      pmh: ["Geçirilmiş DVT öyküsü (3 yıl)"],
      meds: ["Yok"],
      fm: "Solunum hızı artmış, yardımcı solunum kasları solunuma katılıyor. Akciğer oskültasyonunda patoloji saptanmadı. Sağ bacakta hafif ödem ve baldırda hassasiyet mevcut."
    },
    requiredTests: ["bt_anjio_pulmoner", "ddimer", "arter_kan_gazi", "eko"],
    contraindicated: [],
    treatments: [
      "DOAC Tedavisi (Apiksaban veya Rivaroksaban) (Varfarine tercih edilir)",
      "Düşük Molekül Ağırlıklı Heparin (LMWH, Enoksaparin 1mg/kg SC) (UFH'ye tercih edilir)",
      "Kategori C ve üzeri ise PERT (Pulmoner Emboli Yanıt Ekibi) Aktivasyonu ve Yatış",
      "Kategori E (Şok/Hemodinamik instabilite) durumunda Sistemik Trombolitik (tPA) tedavisi",
      "sPESI=0 veya Hestia=0 ise ayaktan tedavi (Evde takip)"
    ],
    consultations: ["Göğüs Hastalıkları veya Kardiyoloji Konsültasyonu", "PERT (PE Response Team) Aktivasyonu"]
  },

{
    id: "appendicitis",
    name: "Akut Apandisit",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [85, 100], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [16, 20], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {
      wbc: 15.8,
      crp: 78,
      usg_abdomen: "Sağ alt kadranda kör sonlanan, kompresibıl olmayan, duvar kalınlığı artmış (apendiks çapı 8.5 mm) apendiks izlendi."
    },
    symptoms: {
      complaints: ["Karın ağrısı", "Bulantı ve iştahsızlık", "Hafif ateş"],
      story: "Hasta dün sabah göbek çevresinde künt bir ağrı olarak başlayan, son 12 saatte sağ alt kadrana (sağ kasık bölgesine) yerleşen ve hareket etmekle artan şiddetli karın ağrısı, iştahsızlık ve bulantı şikayetleriyle başvurdu.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Sağ alt kadranda McBurney noktasında belirgin hassasiyet, defans ve rebound (hızlı bırakıldığında ağrı) pozitif. Psoas ve Obturator belirtileri pozitif. Bağırsak sesleri hipoaktif."
    },
    requiredTests: ["wbc", "crp", "usg_abdomen"],
    contraindicated: [],
    treatments: [
      "ACİL Genel Cerrahi Konsültasyonu ve Apendektomi",
      "IV Sıvı Hidrasyonu (0.9% NaCl veya Ringer Laktat)",
      "Gerekirse profilaktik IV antibiyotik (Sefazolin + Metronidazol)"
    ],
    consultations: ["Genel Cerrahi Konsültasyonu"]
  },

{
    id: "sepsis",
    name: "Sepsis ve Septik Şok",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [105, 125], bp: [85, 100, 50, 60], spo2: [91, 95], rr: [22, 26], temp: [38.5, 39.8], ecg: "tachycardia" },
    abnormals: {
      wbc: 18.9,
      crp: 195,
      prokalsitonin: 6.2,
      laktat: 3.8,
      kan_kultur: "Gram negatif basiller (E. coli) üredi."
    },
    symptoms: {
      complaints: ["Ateş ve titreme", "Konfüzyon / kafa karışıklığı", "Aşırı halsizlik", "Nefes darlığı"],
      story: "Yaşlı bakımevinde kalan ve 3 gündür idrar yolu sepsis semptomları olan hasta, bugün ateşinin yükselmesi, genel durumunda bozulma, uykuya meyil ve kafa karışıklığı gelişmesi üzerine acil servise getirildi. SSC 2026 protokolüne göre taranmaktadır.",
      pmh: ["Demans", "Benign Prostat Hiperplazisi"],
      meds: ["Donepezil 10mg 1x1", "Tamsulosin 0.4mg 1x1"],
      fm: "Genel durum kötü, letarjik (bilinç konfüze), cilt sıcak ve hiperemik. Kalp sesleri taşikardik. NEWS2 skoru 8 olarak hesaplandı (qSOFA yerine tercih edildi). Suprapubik bölgede hassasiyet mevcut."
    },
    requiredTests: ["wbc", "crp", "prokalsitonin", "laktat", "kan_kultur"],
    contraindicated: [],
    treatments: [
      "Ampirik IV Antibiyotik (Kesin/olası sepsiste ilk 1 saatte, muhtemel sepsiste ilk 3 saatte)",
      "Beta-laktam Uzatılmış İnfüzyon Stratejisi (Mortaliteyi azaltmak için güçlü öneri)",
      "Bireyselleştirilmiş Hidrasyon: Dengeli Kristaloid (>%0.9 NaCl, Serum Fizyolojik)",
      "Sıvıya yanıtsızlıkta Vazopresör (Norepinefrin) başlanması (≥65 yaş hastalarda MAP hedefi: 60-65 mmHg)"
    ],
    consultations: ["Enfeksiyon Hastalıkları veya Yoğun Bakım Konsültasyonu", "Code Sepsis Protokol Aktivasyonu"]
  },

{
    id: "dka",
    name: "Diyabetik Ketoasidoz (DKA)",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [110, 130], bp: [90, 105, 55, 65], spo2: [95, 98], rr: [24, 32], temp: [36.5, 37.2], ecg: "tachycardia" },
    abnormals: {
      glukoz: 410,
      akg_ph: 7.12,
      akg_hco3: 10,
      akg_pco2: 22,
      tit: "Glukoz (+++), Keton (+++)",
      potasyum: 4.2
    },
    symptoms: {
      complaints: ["Bulantı ve inatçı kusma", "Karın ağrısı", "Aşırı susama ve sık idrara çıkma", "Halsizlik"],
      keyFindings: ["Bulantı ve inatçı kusma", "Karın ağrısı", "Aşırı susama ve sık idrara çıkma"],
      optionalFindings: ["Halsizlik", "Nefeste meyve kokusu (keton)", "Kussmaul solunumu"],
      story: "Tip 1 Diyabet tanılı hasta, son 2 gündür devam eden yaygın karın ağrısı, bulantı, kusma, halsizlik ve hızlı nefes alıp verme şikayetleriyle acil servise getirildi. İnsülin dozlarını son 3 gündür ihmal ettiği öğrenildi.",
      pmh: ["Tip 1 Diyabet (8 yıl)"],
      meds: ["İnsülin glargin 1x1", "İnsülin aspart 3x1 (düzensiz kullanım)"],
      fm: "Genel durum orta-kötü, dehidrate görünümde (mukozalar kuru, cilt turgoru azalmış). Kussmaul solunumu (derin ve hızlı) mevcut, nefesinde keton kokusu (çürük elma kokusu) alınıyor. Batında yaygın hassasiyet mevcut, defans/rebound yok."
    },
    requiredTests: ["glukoz", "arter_kan_gazi", "tit", "potasyum"],
    contraindicated: [],
    drugTriggers: {
      "sf_iv": { effect: "stabilize", vitalChanges: { bp_sys: 10, hr: -10 }, message: "Serum Fizyolojik IV hidrasyonu başlandı. Dehidrasyon düzeltiliyor." },
      "rl_iv": { effect: "stabilize", vitalChanges: { bp_sys: 10, hr: -10 }, message: "Ringer Laktat IV hidrasyonu başlandı. Elektrolitler dengeleniyor." },
      "insulin_inf": { effect: "stabilize", vitalChanges: { hr: -10, rr: -4 }, message: "Regüler insülin infüzyonu başlandı. Glukoz ve ketozis kontrol altına alınıyor." },
      "potasyum_iv": { effect: "stabilize", vitalChanges: {}, message: "Potasyum replasmanı başlandı. İnsülin tedavisine bağlı hipokalemi gelişmesi önlendi." }
    },
    treatments: [
      "Yoğun Bakım Yatışı ve Yakın Takip",
      "Agresif IV Hidrasyon (0.9% NaCl veya Ringer Laktat)",
      "Potasyum düzeyi > 3.3 mEq/L olunca IV İnsülin İnfüzyonu başlanması",
      "İdrar çıkışı ve elektrolit takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Konsültasyonu"]
  },

{
    id: "anaphylaxis",
    name: "Anafilaktik Şok",
    category: "acil",
    difficulty: "medium",
    monitor: { hr: [115, 130], bp: [75, 90, 45, 55], spo2: [88, 92], rr: [24, 30], temp: [36.2, 36.8], ecg: "tachycardia" },
    abnormals: {
      ekg: "Sinüs taşikardisi"
    },
    symptoms: {
      complaints: ["Nefes darlığı ve boğazda tıkanma hissi", "Yaygın kaşıntı ve döküntü", "Ses kısıklığı", "Baş dönmesi"],
      keyFindings: ["Nefes darlığı ve boğazda tıkanma hissi", "Yaygın kaşıntı ve döküntü", "Ses kısıklığı"],
      optionalFindings: ["Baş dönmesi", "Dudaklarda şişlik (anjioödem)", "Stridor ve hırıltı"],
      story: "Hasta yaklaşık 15 dakika önce restoranda yemek yedikten hemen sonra aniden başlayan boğazda şişme hissi, yutkunma güçlüğü, ses kısıklığı, nefes darlığı ve tüm vücutta yaygın kaşıntılı kızarıklık şikayetiyle anafilaktik şok servise getirildi.",
      pmh: ["Alerjik rinit", "Astım"],
      meds: ["Salbutamol inhaler (ihtiyaç halinde)"],
      fm: "Genel durum kötü, ajite, stridor ve hırıltılı solunum mevcut. Tüm vücutta yaygın ürtiker plakları ve dudaklarda/göz kapaklarında anjioödem izlendi. Akciğerde yaygın ekspiratuar ronküsler duyuldu."
    },
    requiredTests: ["ekg"],
    contraindicated: ["propranolol", "metoprolol"],
    drugTriggers: {
      "adrenalin_im": { effect: "stabilize", vitalChanges: { hr: -10, bp_sys: 20, bp_dia: 10, spo2: 6 }, message: "Adrenalin IM uygulandı! Stridor geriledi, havayolu açıldı ve hasta rahatladı." },
      "metilprednizolon_iv": { effect: "stabilize", vitalChanges: {}, message: "Metilprednizolon (Kortikosteroid) uygulandı. Geç faz reaksiyonu önlendi." },
      "feniramin_iv": { effect: "stabilize", vitalChanges: {}, message: "Feniramin (Avil) antihistaminik uygulandı. Kaşıntı ve ürtiker geriledi." },
      "sf_iv": { effect: "stabilize", vitalChanges: { bp_sys: 15 }, message: "IV Serum Fizyolojik infüzyonu başlandı. Tansiyon stabilize oluyor." }
    },
    treatments: [
      "ACİL Adrenalin (Epinefrin) 0.3-0.5 mg IM (uyluk dış yan yüzüne)",
      "Hızlı IV damar yolu ve 0.9% NaCl sıvı resüsitasyonu (1-2 Litre)",
      "IV Metilprednizolon + IV Feniramin",
      "Gerekirse inhale Salbutamol veya nebulize Adrenalin"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "pancreatitis",
    name: "Akut Pankreatit",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "pneumonia",
    name: "Pnömoni (Zatürre)",
    category: "solunum",
    difficulty: "easy",
    monitor: { hr: [90, 110], bp: [110, 125, 65, 80], spo2: [90, 94], rr: [20, 24], temp: [38.2, 39.5], ecg: "tachycardia" },
    abnormals: {
      wbc: 16.5,
      crp: 145,
      pa_ac: "Sağ akciğer alt lobda homojen lobar konsolidasyon ve hava bronkogramları izlendi. (Kırmızı/Gri hepatizasyon evreleri ile uyumlu)",
      balgam_kultur: "Gram pozitif zincir yapan koklar (Streptococcus pneumoniae) üredi."
    },
    symptoms: {
      complaints: ["Ateş ve titreme", "Öksürük ve sarı-yeşil balgam", "Nefes darlığı", "Yan ağrısı"],
      story: "Hasta 4 gün önce titremeyle yükselen ateş, nefes darlığı, öksürük ve pas renginde sarı-yeşil balgam çıkarma şikayetiyle başvurdu. Nefes alırken sağ yan tarafta batıcı ağrı (plöritik ağrı) eşlik ediyor.",
      pmh: ["KOAH (5 yıl)"],
      meds: ["Salmeterol/Flutikazon inhaler 2x1"],
      fm: "Genel durum orta, takipneik, ateşi 38.8°C. Sağ akciğer alt lobda dinlemekle tuber sufl (konsolidasyon belirtisi) ve ince krepitan raller duyuluyor. Sağ alt kadranda perküsyonda matite mevcut."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Empirik Antibiyotik (Sefotaksim veya Levofloksasin)",
      "Oksijen desteği + IV hidrasyon",
      "Semptomatik antipiretik ve bronkodilatör"
    ],
    consultations: ["Göğüs Hastalıkları veya Dahiliye Konsültasyonu"]
  },

{
    id: "gis_bleeding",
    name: "Akut Üst GİS Kanaması",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "copd_exacerbation",
    name: "KOAH Akut Alevlenmesi",
    category: "solunum",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "asthma_attack",
    name: "Akut Astım Atağı",
    category: "solunum",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "nephrolitiasis",
    name: "Böbrek Koliği (Nefrolitiyazis)",
    category: "nefroloji",
    difficulty: "easy",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "cholecystitis",
    name: "Akut Kolesistit",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "meningitis",
    name: "Bakteriyel Menenjit",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "aortic_dissection",
    name: "Aort Diseksiyonu",
    category: "kardiyovaskuler",
    difficulty: "expert",
    monitor: { hr: [95, 110], bp: [160, 190, 95, 110], spo2: [95, 98], rr: [18, 22], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      bt_toraks: "Çıkan aortada intimial flep izlendi, Stanford Tip A diseksiyon ile uyumlu.",
      eko: "Aort kökü genişlemiş (48mm), perikardiyal mesafede minimal sıvı saptandı.",
      ekg: "Sinüs taşikardisi, sol ventrikül hipertrofisi bulguları"
    },
    symptoms: {
      complaints: ["Yırtılır tarzda sırt ağrısı", "Göğüs ağrısı", "Soğuk terleme", "Fenalık hissi"],
      story: "Hasta yaklaşık 30 dakika önce aniden başlayan, sırta ve kürek kemiklerinin arasına yayılan, 'yırtılır tarzda' tariflenen çok şiddetli ağrı şikayetiyle acil servise başvurdu.",
      pmh: ["Kontrolsüz Esansiyel Hipertansiyon (10 yıl)"],
      meds: ["Enalapril 20mg 1x1 (düzensiz)"],
      fm: "Genel durum orta-kötü, soğuk terlemiş, ajite. Sağ ve sol kol kan basınçları arasında 25 mmHg fark saptandı. Kalp dinlemekle aort odağında erken diastolik üfürüm (aort yetmezliği) duyuldu."
    },
    requiredTests: ["bt_toraks", "eko"],
    contraindicated: [],
    treatments: [
      "ACİL Kalp Damar Cerrahi Konsültasyonu ve Ameliyat",
      "IV Esmolol veya Labetalol ile KB ve HR kontrolü (Hedef SBP 100-120 mmHg, HR < 60)",
      "IV Nitrogliserin eklenmesi (Beta blokaj sonrası)"
    ],
    consultations: ["Kalp ve Damar Cerrahisi Konsültasyonu"]
  },

{
    id: "ileus",
    name: "İleus (Bağırsak Obstrüksiyonu)",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "hypertensive_encephalopathy",
    name: "Hipertansif Ensefalopati",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: { hr: [75, 95], bp: [120, 140, 75, 90], spo2: [94, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eforla gelen nefes darlığı", "Çabuk yorulma", "Ayak bileklerinde şişlik"],
      story: "Hasta son 3 haftadır giderek artan nefes darlığı, halsizlik ve çabuk yorulma şikayetleri ile kardiyoloji polikliniğine başvurdu. Merdiven çıkarken dinlenmek zorunda kalıyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Ramipril 5mg 1x1"],
      fm: "Kalp sesleri ritmik, dinlemekle hafif S3 duyuluyor. Akciğer bazallerinde hafif matite ve raller mevcut. Pretibial ödem (+/-)."
    },
    requiredTests: ["ekg", "eko", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Beta Bloker tedavisi başlanması",
      "ACE İnhibitörü doz ayarlanması",
      "Tuzsuz diyet ve kilo takibi"
    ],
    consultations: ["Kardiyoloji Polikliniği"]
  },

{
    id: "dvt",
    name: "Derin Ven Trombozu (DVT)",
    category: "kardiyovaskuler",
    difficulty: "easy",
    monitor: { hr: [75, 95], bp: [120, 140, 75, 90], spo2: [94, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eforla gelen nefes darlığı", "Çabuk yorulma", "Ayak bileklerinde şişlik"],
      story: "Hasta son 3 haftadır giderek artan nefes darlığı, halsizlik ve çabuk yorulma şikayetleri ile kardiyoloji polikliniğine başvurdu. Merdiven çıkarken dinlenmek zorunda kalıyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Ramipril 5mg 1x1"],
      fm: "Kalp sesleri ritmik, dinlemekle hafif S3 duyuluyor. Akciğer bazallerinde hafif matite ve raller mevcut. Pretibial ödem (+/-)."
    },
    requiredTests: ["ekg", "eko", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Beta Bloker tedavisi başlanması",
      "ACE İnhibitörü doz ayarlanması",
      "Tuzsuz diyet ve kilo takibi"
    ],
    consultations: ["Kardiyoloji Polikliniği"]
  },

{
    id: "pneumothorax",
    name: "Spontan Pnömotoraks",
    category: "solunum",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "perforated_ulcer",
    name: "Perfore Peptik Ülser",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "testicular_torsion",
    name: "Testis Torsiyonu",
    category: "nefroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "ectopic_rupture",
    name: "Dış Gebelik Rüptürü",
    category: "kadinhastaliklari",
    difficulty: "hard",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "acute_glaucoma",
    name: "Akut Açı Kapanması Glokomu (Kriz)",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [130, 150, 80, 95], spo2: [97, 100], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      goz_ici_basinc_olcumu: "Sol göz içi basıncı: 48 mmHg (Belirgin yükselmiş, normali 10-21 mmHg)",
      oftalmoskopi: "Sol gözde kornea ödemi, ön kamara sığlığı, optik diskte solukluk şüphesi"
    },
    symptoms: {
      complaints: ["Sol gözde çok şiddetli ağrı", "Sol taraflı baş ağrısı", "Bulantı ve kusma", "Görmede ani azalma ve ışıklar etrafında haleler görme"],
      story: "60 yaşındaki kadın hasta, yaklaşık 2 saat önce loş ışıklı bir odada otururken aniden sol gözünde başlayan ve giderek katlanılamaz hale gelen çok şiddetli ağrı, baş ağrısı, bulantı, kusma ve sol gözünde görme kaybı şikayetiyle acil servise başvurdu. Sol gözünün önündeki ışıkların etrafında renkli halkalar (haleler) gördüğünü belirtiyor.",
      pmh: ["Hipermetropi (gözlük kullanımı)"],
      meds: ["Yok"],
      fm: "Genel durum orta, ağrı nedeniyle ajite ve terlemiş. Sol gözde belirgin konjonktival enjeksiyon (kanlanma), sol kornea ödemli ve bulanık (puslu) görünümde. Sol pupil orta derecede dilate (midriyatik) ve ışık refleksine yanıtsız (fiske). Sol göz küresi palpasyonla taş sertliğinde hissedildi."
    },
    requiredTests: ["goz_ici_basinc_olcumu", "oftalmoskopi"],
    contraindicated: ["atropin_goz_damlasi"],
    treatments: [
      "Topikal miyotik damla damlatılması (Pilocarpine %2)",
      "Topikal beta-bloker damla damlatılması (Timolol %0.5)",
      "Sistemik karbonik anhidraz inhibitörü (Acetazolamide 500mg IV/PO)",
      "IV hiperozmotik tedavi (Mannitol %20 solüsyonu 1-2 g/kg, 30-45 dakikada infüzyon)",
      "Acil göz hastalıkları konsültasyonu (lazer iridotomi planlaması için)"
    ],
    consultations: ["Göz Hastalıkları Konsültasyonu"]
  },

{
    id: "epistaxis",
    name: "Durdurulamayan Epistaksis (Burun Kanaması)",
    category: "acil",
    difficulty: "easy",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile durdurulamayan epistaksis (burun kanaması) servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "headache_unspecified",
    name: "Spesifiye Edilmemiş Baş Ağrısı",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "intracranial_hematoma",
    name: "Epidural ve Subdural Hematom",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile epidural ve subdural hematom servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "sah",
    name: "Subaraknoid Kanama (SAK)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [90, 110], bp: [160, 190, 90, 100], spo2: [95, 99], rr: [16, 20], temp: [36.8, 37.5], ecg: "normal" },
    abnormals: {
      bt_beyin: "Bazal sisternlerde, Sylvian fissürlerde ve interhemisferik fissürde hiperdens (parlak beyaz) kanama saptandı. Kanama paterni difüz subaraknoid kanama ile uyumludur (Fisher Grade III).",
      wbc: 12.5,
      troponin_i: 0.08
    },
    symptoms: {
      complaints: ["Hayatımın en şiddetli baş ağrısı (thunderclap headache)", "Bulantı ve kusma", "Ense sertliği", "Işığa hassasiyet"],
      story: "42 yaşındaki hasta, tuvalette ıkınırken aniden başlayan ve saniyeler içinde hayatının en şiddetli seviyesine ulaşan baş ağrısı, ardından gelen bulantı, kusma ve boyun sertliği şikayetiyle acil servise getirildi. Ağrının başlangıcında kısa süreli bilinç kaybı olmuş.",
      pmh: ["Sigara kullanımı", "Kontrolsüz Hipertansiyon"],
      meds: ["Düzensiz Amlodipin 5mg"],
      fm: "Konfüze ve ajite. Ense sertliği belirgin pozitif. Kernig ve Brudzinski testleri pozitif (meningeal irritasyon bulguları). Pupiller izokorik, ışık refleksi bilateral yavaş. Sol gözde parsiyel III. kranial sinir felci (pitozis ve dışa bakış) şüphesi mevcut (posterior kominikan arter anevrizmasına işaret edebilir). GKS: 13 (E3V5M5). Fundoskopik muayenede papil ödemi görülebilir."
    },
    requiredTests: ["bt_beyin", "wbc"],
    contraindicated: ["aspirin", "heparin", "lumbar_ponksiyon_erken"],
    treatments: [
      "Acil kontrastsız beyin BT çekilmesi (ilk 6 saatte sensitivite %98-100, 6-12 saatte %93, 24 saatten sonra düşer)",
      "BT negatif ancak SAK şüphesi devam ediyorsa: Lomber Ponksiyon (LP) yapılması (ksantokromi = BOS'ta sarı renk, SAK için tanısal)",
      "Nimodipin (60mg PO 4 saatte bir, 21 gün) – serebral vazospazm profilaksisi için altın standart",
      "Kan basıncı kontrolü: Sistolik TA < 160 mmHg hedefi (IV Labetalol veya Nikardipin infüzyonu)",
      "Antikoagülan ve antitrombositik ilaçların (Aspirin, Heparin, Warfarin) kesilmesi",
      "Anevrizma güvenliğe alınana kadar yatak istirahati, baş elevasyonu 30 derece, laksatifler (ıkınmanın önlenmesi)"
    ],
    consultations: ["Beyin ve Sinir Cerrahisi Konsültasyonu (Acil anevrizma klipleme veya endovasküler coiling)", "Yoğun Bakım Konsültasyonu"]
  },

{
    id: "pericarditis_tamponade",
    name: "Akut Perikardit ve Kardiyak Tamponad",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: { hr: [75, 95], bp: [120, 140, 75, 90], spo2: [94, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eforla gelen nefes darlığı", "Çabuk yorulma", "Ayak bileklerinde şişlik"],
      story: "Hasta son 3 haftadır giderek artan nefes darlığı, halsizlik ve çabuk yorulma şikayetleri ile kardiyoloji polikliniğine başvurdu. Merdiven çıkarken dinlenmek zorunda kalıyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Ramipril 5mg 1x1"],
      fm: "Kalp sesleri ritmik, dinlemekle hafif S3 duyuluyor. Akciğer bazallerinde hafif matite ve raller mevcut. Pretibial ödem (+/-)."
    },
    requiredTests: ["ekg", "eko", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Beta Bloker tedavisi başlanması",
      "ACE İnhibitörü doz ayarlanması",
      "Tuzsuz diyet ve kilo takibi"
    ],
    consultations: ["Kardiyoloji Polikliniği"]
  },

{
    id: "transverse_myelitis",
    name: "Transvers Miyelit",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "acute_liver_failure",
    name: "Akut Karaciğer Yetmezliği",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "hyperkalemia_arrhythmia",
    name: "Hiperkalemiye Bağlı Kardiyak Aritmiler",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: { hr: [75, 95], bp: [120, 140, 75, 90], spo2: [94, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eforla gelen nefes darlığı", "Çabuk yorulma", "Ayak bileklerinde şişlik"],
      story: "Hasta son 3 haftadır giderek artan nefes darlığı, halsizlik ve çabuk yorulma şikayetleri ile kardiyoloji polikliniğine başvurdu. Merdiven çıkarken dinlenmek zorunda kalıyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Ramipril 5mg 1x1"],
      fm: "Kalp sesleri ritmik, dinlemekle hafif S3 duyuluyor. Akciğer bazallerinde hafif matite ve raller mevcut. Pretibial ödem (+/-)."
    },
    requiredTests: ["ekg", "eko", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Beta Bloker tedavisi başlanması",
      "ACE İnhibitörü doz ayarlanması",
      "Tuzsuz diyet ve kilo takibi"
    ],
    consultations: ["Kardiyoloji Polikliniği"]
  },

{
    id: "hypoglycemic_coma",
    name: "Hipoglisemi Koması",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "myasthenic_crisis",
    name: "Myastenik Kriz",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "thyroid_storm",
    name: "Tiroid Fırtınası",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "rhabdomyolysis",
    name: "Rabdomiyoliz",
    category: "nefroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "urinary_retention",
    name: "Akut Üriner Retansiyon",
    category: "nefroloji",
    difficulty: "easy",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "necrotizing_fasciitis",
    name: "Nekrotizan Fasiit",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "septic_arthritis",
    name: "Septik Artrit",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "co_poisoning",
    name: "Karbonmonoksit Zehirlenmesi",
    category: "acil",
    difficulty: "medium",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile karbonmonoksit zehirlenmesi servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "ards",
    name: "Akut Solunum Sıkıntısı Sendromu (ARDS)",
    category: "solunum",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "dic",
    name: "Yaygın Damar İçi Pıhtılaşma (DIC)",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "mesenteric_ischemia",
    name: "Akut Mezenter İskemi",
    category: "gastrointestinal",
    difficulty: "expert",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "strangulated_hernia",
    name: "Strangüle (Boğulmuş) Herni",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "esophageal_perforation",
    name: "Özofagus Perforasyonu",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "placenta_abruption",
    name: "Plasenta Dekolmanı",
    category: "kadinhastaliklari",
    difficulty: "hard",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "preeclampsia",
    name: "Preeklampsi ve Eklampsi",
    category: "kadinhastaliklari",
    difficulty: "medium",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "addison_crisis",
    name: "Akut Adrenal Kriz (Addison)",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "drug_overdose",
    name: "İlaç Toksisitesi ve Aşırı Doz Alımı",
    category: "acil",
    difficulty: "medium",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile i̇laç toksisitesi ve aşırı doz alımı servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "hepatorenal_syndrome",
    name: "Hepatorenal Sendrom",
    category: "nefroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "hypertension",
    name: "Esansiyel Hipertansiyon",
    category: "kardiyovaskuler",
    difficulty: "easy",
    monitor: { hr: [75, 95], bp: [120, 140, 75, 90], spo2: [94, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eforla gelen nefes darlığı", "Çabuk yorulma", "Ayak bileklerinde şişlik"],
      story: "Hasta son 3 haftadır giderek artan nefes darlığı, halsizlik ve çabuk yorulma şikayetleri ile kardiyoloji polikliniğine başvurdu. Merdiven çıkarken dinlenmek zorunda kalıyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Ramipril 5mg 1x1"],
      fm: "Kalp sesleri ritmik, dinlemekle hafif S3 duyuluyor. Akciğer bazallerinde hafif matite ve raller mevcut. Pretibial ödem (+/-)."
    },
    requiredTests: ["ekg", "eko", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Beta Bloker tedavisi başlanması",
      "ACE İnhibitörü doz ayarlanması",
      "Tuzsuz diyet ve kilo takibi"
    ],
    consultations: ["Kardiyoloji Polikliniği"]
  },

{
    id: "diabetes_t2",
    name: "Tip 2 Diyabet",
    category: "endokrin",
    difficulty: "easy",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "gerd",
    name: "Gastroözofajial Reflü Hastalığı (GÖRH)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "iron_deficiency",
    name: "Demir Eksikliği Anemisi",
    category: "hematoloji",
    difficulty: "easy",
    monitor: { hr: [80, 95], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {
      hgb: 8.2,
      mcv: 64,
      ferritin: 4,
      demir: 18,
      tdbk: 450,
      transferrin_saturasyonu: 4,
      periferik_yayma: "Belirgin hipokromi, mikrositoz, anizositoz, poikilositoz ve az sayıda kalem (pencil) hücreleri izlendi."
    },
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Baş dönmesi", "Tırnaklarda kırılma", "Toprak yeme isteği (pika)"],
      story: "Hasta son 6 aydır giderek artan halsizlik, çabuk yorulma, merdiven çıkarken nefes darlığı ve tırnaklarında düzleşme şikayetleriyle başvurdu. Ayrıca ara sıra toprak ve buz yeme isteği olduğunu belirtiyor.",
      pmh: ["Menoraji (aşırı adet kanamaları)"],
      meds: ["Yok"],
      fm: "Genel durum iyi, konjonktivalar ve palmar çizgiler belirgin soluk. Dilde hafif papilla atrofisi (atrofik glossit) ve tırnaklarda koilonişi (kaşık tırnak) görünümü mevcut."
    },
    requiredTests: ["hgb", "ferritin", "demir", "tdbk"],
    contraindicated: [],
    treatments: [
      "Oral Demir Sülfat 200mg (Aç karnına C vitamini ile)",
      "Gastrointestinal sistem taraması (Özellikle erkek ve postmenapozal kadınlarda)",
      "Demir açısından zengin beslenme eğitimi"
    ],
    consultations: ["Gastroenteroloji veya Dahiliye Konsültasyonu"]
  },

{
    id: "migraine",
    name: "Migren",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "tension_headache",
    name: "Gerilim Tipi Baş Ağrısı",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "hyperlipidemia",
    name: "Hiperlipidemi",
    category: "endokrin",
    difficulty: "easy",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "osteoarthritis",
    name: "Osteoartrit (Kireçlenme)",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "rhinopharyngitis",
    name: "Akut Rinofarenjit (Nezle)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "major_depression",
    name: "Majör Depresif Bozukluk",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 130, 75, 85], spo2: [97, 99], rr: [14, 18], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Hayattan zevk alamama", "Sürekli üzüntü hali", "Uykusuzluk ve iştahsızlık", "İntihar düşünceleri"],
      story: "35 yaşındaki kadın hasta, son 1 aydır devam eden aşırı halsizlik, mutsuzluk, yataktan çıkmak istememe, eskiden severek yaptığı hiçbir şeyden zevk alamama (anhedoni), kilo kaybı ve geceleri uykudan erken uyanıp tekrar uyuyamama şikayetleriyle başvurdu. Son zamanlarda 'yaşamanın bir anlamı kalmadı' şeklinde düşünceleri olduğunu ifade ediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durum iyi. Psikomotor yavaşlama mevcut, göz teması zayıf, ses tonu alçak ve monoton. Konuşma içeriğinde değersizlik, suçluluk ve umutsuzluk temaları hakim. Aktif intihar planı yok ancak pasif ölüm düşünceleri mevcut."
    },
    requiredTests: ["klinik_degerlendirme"],
    contraindicated: [],
    treatments: [
      "Antidepresan tedavi: SSRI (Sertralin 50mg 1x1) başlanması",
      "Bilişsel Davranışçı Terapi (BDT) yönlendirmesi",
      "Yakın intihar riski takibi (gerekirse hastane yatışı)"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "generalized_anxiety",
    name: "Yaygın Anksiyete Bozukluğu",
    category: "psikiyatri",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "ibs",
    name: "İrritabl Bağırsak Sendromu (İBS)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "hypothyroidism",
    name: "Hipotiroidi (Hashimoto Tiroiditi)",
    category: "endokrin",
    difficulty: "easy",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "allergic_rhinitis",
    name: "Alerjik Rinit (Bahar Alerjisi)",
    category: "solunum",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.7], ecg: "normal" },
    abnormals: {
      wbc: 6.8,
      crp: 3
    },
    symptoms: {
      complaints: ["Arka arkaya hapşırma krizleri", "Burun akıntısı ve burun tıkanıklığı", "Gözlerde kaşıntı ve sulanma"],
      story: "22 yaşındaki üniversite öğrencisi, özellikle bahar aylarında (polen mevsiminde) dışarı çıktığında aniden başlayan ardışık hapşırmalar, su gibi burun akıntısı, burun tıkanıklığı ve gözlerinde şiddetli kaşıntı, kızarıklık şikayetleriyle başvurdu. Benzer şikayetlerin her yıl tekrarladığını belirtiyor.",
      pmh: ["Yok"],
      meds: ["Gerektiğinde psödoefedrin içeren grip ilaçları (geçici rahatlatmış)"],
      fm: "Bilinç açık, genel durum iyi. Burun mukozası soluk ve ödemli (konjestif), burundan berrak seröz akıntı geliyor. Göz kapakları altında hafif morarma (alerjik shiner) ve göz konjonktivalarında hafif enjeksiyon izlendi. Akciğer sesleri doğal."
    },
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: [
      "Topikal Nazal Kortikosteroid sprey (Flutikazon propionat veya Mometazon furoat sprey, günde 1 kez)",
      "Sistemik İkinci Kuşak Antihistaminik (Desloratadin veya Setirizin 10mg 1x1)",
      "Tetikleyici alerjenlerden (polenler, ev tozu akarları) kaçınma eğitimi"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği", "Alerji ve İmmünoloji Polikliniği"]
  },

{
    id: "uti",
    name: "Üriner Sistem Enfeksiyonu (Sistit)",
    category: "nefroloji",
    difficulty: "easy",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "bronchitis",
    name: "Akut Bronşit",
    category: "solunum",
    difficulty: "easy",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "lumbar_hernia",
    name: "Lomber Disk Hernisi (Bel Fıtığı)",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "cervical_hernia",
    name: "Servikal Disk Hernisi (Boyun Fıtığı)",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "atopic_dermatitis",
    name: "Atopik Dermatit (Egzama)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.9], ecg: "normal" },
    abnormals: {
      wbc: 7.8,
      crp: 5
    },
    symptoms: {
      complaints: ["Eklemlerin iç yüzünde şiddetli kaşıntı ve kuruluk", "Kızarık pullu yaralar", "Uykuyu bozan kaşıntı"],
      story: "16 yaşındaki lise öğrencisi, çocukluğundan beri devam eden, kış aylarında ve stresli dönemlerde artan dirsek içleri, diz arkaları ve boynunda yoğun kaşıntı, kuruluk ve pullanma şikayetiyle başvurdu. Kaşıntının geceleri arttığını ve uykusunu böldüğünü belirtiyor.",
      pmh: ["Alerjik Astım ve Alerjik Rinit (Atopik Triad)"],
      meds: ["Antihistaminik haplar (düzensiz)"],
      fm: "Bilinç açık, kooperasyonu tam. Bilateral antekübital fossa (dirsek önü), popliteal fossa (diz arkası) ve boyunda yerleşik eritemli, üzerinde ekskoriasyon (kaşıntı izleri), kuruluk ve kronik kaşımaya bağlı kalınlaşma (likenifikasyon) gösteren dermatit plakları izlendi."
    },
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: [
      "Yoğun nemlendirici kullanımı (günde en az 2 kez, banyo sonrası hemen)",
      "Topikal orta etkili kortikosteroid krem (Mometazon furoat veya Metilprednizolon aseponat krem, günde 1 kez, kısa süreli)",
      "Kaşıntıyı baskılamak için sedatif etkili oral antihistaminik (Hidroksizin 25mg gece 1 tablet)"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "cholelithiasis",
    name: "Kolelitiazis (Safra Kesesi Taşı)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "b12_deficiency",
    name: "B12 Vitamin Eksikliği Anemisi",
    category: "hematoloji",
    difficulty: "easy",
    monitor: { hr: [80, 95], bp: [110, 125, 65, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      hgb: 7.8,
      mcv: 124,
      b12: 85,
      ldh: 1200,
      haptoglobin: 12,
      homosistein: 28,
      periferik_yayma: "Makroovalositler ve hipersegmente (5-6 loblu) nötrofiller izlendi."
    },
    symptoms: {
      complaints: ["Halsizlik ve solukluk", "El ve ayaklarda uyuşma (karıncalanma)", "Unutkanlık ve dengesizlik"],
      story: "Hasta yaklaşık 3 aydır devam eden halsizlik, unutkanlık, ellerde ve ayaklarda uyuşma, karıncalanma hissi ile yolda yürürken dengesini kaybetme şikayetleriyle başvurdu. Öyküsünden 10 yıldır katı vegan diyet uyguladığı öğrenildi.",
      pmh: ["Vegan beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar soluk, sklera hafif subikterik (limon sarısı cilt). Dilde papilla atrofisi (parlak kırmızı dil - Hunter glossiti). Nörolojik muayenede vibrasyon ve pozisyon duyusu azalmış, Romberg testi pozitif."
    },
    requiredTests: ["hgb", "b12", "ldh", "periferik_yayma"],
    contraindicated: [],
    treatments: [
      "Intramüsküler B12 Vitamini (Siyanokobalamin) Replasmanı",
      "Diyet modifikasyonu (B12 zengin hayvansal protein)",
      "Gerekirse pernisiyöz anemi açısından otoantikor takibi"
    ],
    consultations: ["Hematoloji veya Dahiliye Konsültasyonu"]
  },

{
    id: "fibromyalgia",
    name: "Fibromiyalji",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "hyperthyroidism",
    name: "Hipertiroidi (Graves Hastalığı)",
    category: "endokrin",
    difficulty: "easy",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "rheumatoid_arthritis",
    name: "Romatoit Artrit",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "psoriasis",
    name: "Sedef Hastalığı (Psoriazis)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "varicose_veins",
    name: "Kronik Venöz Yetmezlik (Varis)",
    category: "kardiyovaskuler",
    difficulty: "easy",
    monitor: { hr: [75, 95], bp: [120, 140, 75, 90], spo2: [94, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eforla gelen nefes darlığı", "Çabuk yorulma", "Ayak bileklerinde şişlik"],
      story: "Hasta son 3 haftadır giderek artan nefes darlığı, halsizlik ve çabuk yorulma şikayetleri ile kardiyoloji polikliniğine başvurdu. Merdiven çıkarken dinlenmek zorunda kalıyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Ramipril 5mg 1x1"],
      fm: "Kalp sesleri ritmik, dinlemekle hafif S3 duyuluyor. Akciğer bazallerinde hafif matite ve raller mevcut. Pretibial ödem (+/-)."
    },
    requiredTests: ["ekg", "eko", "troponin_i"],
    contraindicated: [],
    treatments: [
      "Beta Bloker tedavisi başlanması",
      "ACE İnhibitörü doz ayarlanması",
      "Tuzsuz diyet ve kilo takibi"
    ],
    consultations: ["Kardiyoloji Polikliniği"]
  },

{
    id: "bph",
    name: "Benign Prostat Hiperplazisi (BPH)",
    category: "nefroloji",
    difficulty: "easy",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "gout",
    name: "Gut Hastalığı",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "osteoporosis",
    name: "Osteoporoz",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "cataract",
    name: "Senil Katarakt (Nükleer Skleroz)",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [120, 135, 75, 85], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.7], ecg: "normal" },
    abnormals: {
      oftalmoskopi: "Bilateral lens nükleusunda sarı-kahverengi renk değişimi, matlaşma ve kırmızı yansıma testinde opasite.",
      goz_ici_basinc_olcumu: "Bilateral göz içi basıncı: 14 mmHg (Normal)"
    },
    symptoms: {
      complaints: ["Bilateral yavaş ve ağrısız görme azalması", "Gece sürüşünde ışıklarda parlama", "Renklerin soluk görünmesi"],
      story: "72 yaşındaki erkek hasta, son 2 yıldır her iki gözünde yavaş yavaş artan, ağrısız, sisli veya dumanlı görme şikayetiyle başvurdu. Özellikle geceleri araba kullanırken karşıdan gelen farların gözünü çok aldığını ve renkleri eskisi kadar canlı seçemediğini söylüyor.",
      pmh: ["Hipertansiyon (15 yıl)", "Uzun süreli güneş maruziyeti (çiftçi)"],
      meds: ["Metoprolol 50mg 1x1"],
      fm: "Genel durum iyi. Görme keskinliği sağ gözde 3/10, sol gözde 4/10 (gözlükle düzeltilemeyen). Slit-lamp (biyomikroskop) muayenesinde bilateral lenste nükleer skleroz ve opasite saptandı. Pupiller doğal, ışık refleksleri normal."
    },
    requiredTests: ["oftalmoskopi", "goz_ici_basinc_olcumu"],
    contraindicated: [],
    treatments: [
      "Katarakt cerrahisi planlaması (Fakoemulsifikasyon + İntraoküler Lens İmplantasyonu)",
      "Ameliyat öncesi gözlük reçetesinin güncellenmesi (geçici destek)",
      "Güneş gözlüğü kullanımı (UV koruması için)"
    ],
    consultations: ["Göz Hastalıkları Polikliniği"]
  },

{
    id: "vitiligo",
    name: "Vitiligo",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "acne_vulgaris",
    name: "Akne Vulgaris",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "chronic_urticaria",
    name: "Kronik Ürtiker",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "sleep_apnea",
    name: "Obstrüktif Uyku Apne Sendromu (OUAS)",
    category: "solunum",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "carpal_tunnel",
    name: "Karpal Tünel Sendromu",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "hp_gastritis",
    name: "Helikobakter Pilori Gastriti",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "hemorrhoids",
    name: "İnternal ve Eksternal Hemoroid",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "anal_fissure",
    name: "Anal Fissür",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "plantar_fasciitis",
    name: "Plantar Fasiit",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "lateral_epicondylitis",
    name: "Lateral Epikondilit (Tenisçi Dirseği)",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "alopecia_areata",
    name: "Alopesi Areata (Saç Kıran)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "fatty_liver",
    name: "Nonalkolik Yağlı Karaciğer Hastalığı",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "bppv",
    name: "Benign Paroksismal Pozisyonel Vertigo (BPPV)",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [98, 100], rr: [14, 18], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      dix_hallpike_manevrasi: "Sağ Dix-Hallpike testi pozitif; sağa dönüşte 5-10 saniye latent süreli, 30 saniye süren, yorulma gösteren kreşendo-dekreşendo tarzında rotatuar (torsiyonel) nistagmus ortaya çıktı.",
      mr_kranial: "Normal beyin parankimi ve serebellopontin köşe bulguları."
    },
    symptoms: {
      complaints: ["Yatakta dönerken ani baş dönmesi", "Bulantı ve kusma hissi", "Denge kaybı"],
      story: "Hasta, bu sabah yataktan kalkmak için doğrulurken veya yatakta sağa-sola dönerken aniden başlayan, etrafın fırıl fırıl dönmesi tarzında tariflediği, 30-45 saniye sürüp kendiliğinden azalarak duran çok şiddetli baş dönmesi şikayetiyle başvurdu. Başını sabit tuttuğunda dönmenin geçtiğini ancak her hareketle tekrarladığını belirtiyor.",
      pmh: ["Geçirilmiş hafif kafa travması öyküsü (1 ay önce)"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Nörolojik muayenede serebellar testler (parmak-burun, disdiyadokokinezi) normal, motor ve duyu kaybı yok. Kranial sinirler intakt. Sağ Dix-Hallpike manevrası ile nistagmus ve vertigo tetiklendi."
    },
    requiredTests: ["dix_hallpike_manevrasi", "mr_kranial"],
    contraindicated: [],
    treatments: [
      "Kanalit repozisyon manevrası uygulanması (Epley Manevrası)",
      "Akut semptomatik vertigo giderici (Betahistin dihidroklorür 24mg 2x1)",
      "Ani baş hareketlerinden kaçınması ve yüksek yastıkta yatması önerisi"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği", "Nöroloji Polikliniği"]
  },

{
    id: "tinnitus",
    name: "Tinnitus (Kulak Çınlaması)",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "tinea_pedis",
    name: "Tinea Pedis (Ayak Mantarı)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "onychomycosis",
    name: "Onikomikoz (Tırnak Mantarı)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "aphthous_stomatitis",
    name: "Tekrarlayan Aftöz Stomatit",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "constipation",
    name: "Kronik Fonksiyonel Konstipasyon (Kabızlık)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "candidiasis",
    name: "Vajinal Kandidiyazis",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "scoliosis",
    name: "İdiyopatik Skolyoz",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "dry_eye",
    name: "Kuru Göz Sendromu (Keratokonjonktivitis Sikka)",
    category: "acil",
    difficulty: "easy",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile kuru göz sendromu (keratokonjonktivitis sikka) servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "dysmenorrhea",
    name: "Primer Dismenore",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "atn",
    name: "Akut Tübüler Nekroz",
    category: "nefroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "ain",
    name: "Akut İnterstisyel Nefrit",
    category: "nefroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "minimal_change",
    name: "Minimal Değişiklik Hastalığı (Minimal Change Disease)",
    category: "nefroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "membranous_gn",
    name: "Membranöz Glomerulonefrit",
    category: "nefroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "fsgs",
    name: "Fokal Segmental Glomeruloskleroz (FSGS)",
    category: "nefroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "alport_syndrome",
    name: "Alport Sendromu",
    category: "nefroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "renal_artery_stenosis",
    name: "Böbrek Arter Stenozu",
    category: "nefroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "uremic_encephalopathy",
    name: "Üremik Ensefalopati",
    category: "nefroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "vur",
    name: "Vezikoüreteral Reflü (VUR)",
    category: "nefroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "neurogenic_bladder",
    name: "Nörojenik Mesane",
    category: "nefroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "urethritis",
    name: "Üretrit",
    category: "nefroloji",
    difficulty: "easy",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "orchitis",
    name: "Epididimit ve Orşit",
    category: "nefroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "fournier_gangrene",
    name: "Fournier Gangreni",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "phimosis",
    name: "Parafimozis ve Fimozis",
    category: "nefroloji",
    difficulty: "easy",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "priapism",
    name: "Priapizm",
    category: "nefroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "peyronie",
    name: "Peyronie Hastalığı",
    category: "nefroloji",
    difficulty: "easy",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "varicocele",
    name: "Varikosel",
    category: "nefroloji",
    difficulty: "easy",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.5, 37.3], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["İdrar yaparken yanma", "İdrar renginde değişiklik veya köpüklü idrar", "Bel ağrısı"],
      story: "Son 1 haftadır idrar yaparken yanma, sık idrara çıkma ve bel bölgesinde künt bir ağrı şikayeti var. İdrarının daha koyu olduğunu belirtiyor.",
      pmh: ["Tekrarlayan sistit"],
      meds: ["Yok"],
      fm: "Kostovertebral açı hassasiyeti (KVAH) bilateral hafif pozitif. Suprapubik hassasiyet mevcut. Ödem yok."
    },
    requiredTests: ["tit", "kreatinin", "idrar_kultur"],
    contraindicated: [],
    treatments: [
      "Antibiyotik tedavisi başlanması (Siprofloksasin / Fosfomisin)",
      "Bol sıvı alımı önerisi",
      "Sıcak uygulama ve analjezik"
    ],
    consultations: ["Nefroloji veya Üroloji Polikliniği"]
  },

{
    id: "pcos",
    name: "Polikistik Over Sendromu (PKOS)",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "endometriosis",
    name: "Endometriyozis",
    category: "kadinhastaliklari",
    difficulty: "medium",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "adenomyosis",
    name: "Adenomiyozis",
    category: "kadinhastaliklari",
    difficulty: "medium",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "leiomyoma",
    name: "Uterus Miyomları (Leiomyom)",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "pid",
    name: "Pelvik İnflamatuar Hastalık (PİH)",
    category: "kadinhastaliklari",
    difficulty: "medium",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "bacterial_vaginosis",
    name: "Bakteriyel Vajinozis",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "trichomoniasis",
    name: "Trikomoniyazis",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "hyperemesis_gravidarum",
    name: "Hiperemezis Gravidarum",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "gestational_diabetes",
    name: "Gestasyonel Diyabet",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "molar_pregnancy",
    name: "Mol Gebeliği (Hidatidiform Mol)",
    category: "kadinhastaliklari",
    difficulty: "hard",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "cervical_insufficiency",
    name: "Servikal Yetersizlik",
    category: "kadinhastaliklari",
    difficulty: "hard",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "postpartum_hemorrhage",
    name: "Postpartum Kanama",
    category: "kadinhastaliklari",
    difficulty: "hard",
    monitor: { hr: [72, 85], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Kasık ağrısı", "Adet düzensizliği", "Vajinal akıntı"],
      story: "Son 3 aydır kasık bölgesinde künt bir ağrı ve adet kanamalarında düzensizlik şikayeti ile başvuruyor. Ağrılar adet döneminde daha da belirginleşiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Pelvik USG ile adneksiyel muayene doğal. Uterus normal boyutlarda, endometrium kalınlığı adet fazı ile uyumlu. Spekulum muayenesinde hafif akıntı."
    },
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: [
      "Analjezik tedavi (NSAİİ)",
      "Kombine oral kontraseptif veya hormonal düzenleme",
      "İzlem ve kontrol pelvik ultrason"
    ],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

{
    id: "sheehan_syndrome",
    name: "Sheehan Sendromu (Postpartum Hipopitüitarizm)",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "diabetes_insipidus",
    name: "Diabetes Insipidus",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "siadh",
    name: "Uygunsuz ADH Salınımı Sendromu (SIADH)",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "acromegaly",
    name: "Akromegali ve Gigantizm",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "prolactinoma",
    name: "Prolaktinoma",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "cushings",
    name: "Cushing Hastalığı",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "conn_syndrome",
    name: "Primer Hiperaldosteronizm (Conn Sendromu)",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "pheochromocytoma",
    name: "Feokromositoma",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "cah",
    name: "Kongenital Adrenal Hiperplazi",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "hyperparathyroidism",
    name: "Primer Hiperparatiroidi",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "hypoparathyroidism",
    name: "Hypoparatiroidi",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "paget_disease",
    name: "Paget Kemik Hastalığı",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "osteomalacia",
    name: "Osteomalazi ve Raşitizm",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "scurvy",
    name: "Skorbit (C Vitamini Eksikliği)",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "beriberi",
    name: "Beriberi (Tiamin Eksikliği)",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "pellagra",
    name: "Pellagra (Niasin Eksikliği)",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "pernicious_anemia",
    name: "Pernisiyöz Anemi",
    category: "hematoloji",
    difficulty: "medium",
    monitor: { hr: [80, 95], bp: [110, 125, 65, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      hgb: 7.4,
      mcv: 121,
      b12: 70,
      ldh: 1450,
      homosistein: 32,
      anti_if: "Anti-İntrinsek Faktör Antikoru POZİTİF saptandı (Tip I/II)",
      anti_parietal: "Anti-Parietal Hücre Antikoru POZİTİF saptandı"
    },
    symptoms: {
      complaints: ["Ciddi halsizlik ve solukluk", "Dil üzerinde yanma hissi", "Ayaklarda his kaybı ve karıncalanma"],
      story: "Hasta son 4 aydır devam eden halsizlik, solukluk, dilinde sızlama/yanma hissi ve yürürken dengesini kuramama şikayetleriyle başvurdu.",
      pmh: ["Otoimmün Tiroidit (Hashimoto)"],
      meds: ["Levotiron 75mcg 1x1"],
      fm: "Konjonktivalar soluk, dil kırmızı ve parlak (atrofik glossit). Nörolojik muayenede derin tendon refleksleri (DTR) azalmış, alt ekstremitede vibrasyon duyusu kaybı mevcut."
    },
    requiredTests: ["hgb", "b12", "anti_if", "anti_parietal"],
    contraindicated: [],
    treatments: [
      "Ömür boyu parenteral Vitamin B12 tedavisi",
      "Otoimmün gastrit ve mide karsinoid tümör riski yönünden takip",
      "Otoimmün diğer hastalıkların (Hashimoto, Vitiligo) taranması"
    ],
    consultations: ["Gastroenteroloji veya Hematoloji Konsültasyonu"]
  },

{
    id: "gld",
    name: "Glikojen Depo Hastalıkları",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "gaucher",
    name: "Gaucher Hastalığı",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "niemann_pick",
    name: "Niemann-Pick Hastalığı",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "tay_sachs",
    name: "Tay-Sachs Hastalığı",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "pku",
    name: "Fenilketonüri",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "msud",
    name: "Akçaağaç Şurubu İdrar Hastalığı (MSUD)",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "alkaptonuria",
    name: "Alkaptonüri",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "homocystinuria",
    name: "Homosistinüri",
    category: "endokrin",
    difficulty: "hard",
    monitor: { hr: [65, 85], bp: [110, 130, 70, 85], spo2: [97, 100], rr: [12, 16], temp: [36.0, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Aşırı halsizlik ve yorgunluk", "Kilo değişiklikleri", "Çok su içme ve sık idrara çıkma"],
      story: "Son 2 aydır geçmeyen halsizlik, yorgunluk ve açıklanamayan kilo değişimi var. Ağız kuruluğu hissediyor, günde 4-5 litre su tüketiyor.",
      pmh: ["Ailede tiroid veya şeker hastalığı öyküsü"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Tiroid bezi palpasyonla normal boyutlarda, nodül ele gelmedi. Cilt hafif kuru."
    },
    requiredTests: ["glukoz", "tsh", "st4"],
    contraindicated: [],
    treatments: [
      "Hormon replasmanı veya antidiabetik tedavi planlaması",
      "Diyet ve egzersiz programı",
      "Yakın laboratuvar takibi"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Polikliniği"]
  },

{
    id: "cystic_fibrosis",
    name: "Kistik Fibrozis",
    category: "solunum",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "alpha_thalassemia",
    name: "Alfa Talasemi",
    category: "hematoloji",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "beta_thalassemia",
    name: "Beta Talasemi (Akdeniz Anemisi)",
    category: "hematoloji",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "sickle_cell_anemia",
    name: "Orak Hücreli Anemi",
    category: "hematoloji",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "hereditary_spherocytosis",
    name: "Herediter Sferositoz",
    category: "hematoloji",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "g6pd_deficiency",
    name: "Glukoz-6-Fosfat Dehidrogenaz Eksikliği",
    category: "hematoloji",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "autoimmune_hemolytic_anemia",
    name: "Otoimmün Hemolitik Anemi",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "pnh",
    name: "Paroksizmal Gece Hemoglobinürisi (PNH)",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "aplastic_anemia",
    name: "Aplastik Anemi",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [105, 120, 60, 75], spo2: [96, 99], rr: [16, 20], temp: [37.2, 37.8], ecg: "normal" },
    abnormals: {
      hgb: 6.2,
      wbc: 1.4,
      trombosit: 22000,
      retikulosit: 0.2,
      kemik_iligi_biyopsisi: "Hiposellüler kemik iliği, hematopoetik serilerde masif azalma ve yağlı infiltrasyon artışı saptandı."
    },
    symptoms: {
      complaints: ["Halsizlik ve solukluk", "Vücutta morluklar ve kırmızı noktalar (peteşi)", "Tekrarlayan burun kanamaları"],
      story: "Hasta son 2 haftadır artan halsizlik, çarpıntı, vücudunun değişik yerlerinde kendiliğinden oluşan morluklar ve tekrarlayan burun kanamaları şikayetleriyle başvurdu.",
      pmh: ["Romatoid Artrit nedeniyle ilaç kullanımı"],
      meds: ["Leflunomid 20mg 1x1"],
      fm: "Konjonktivalar aşırı soluk, ciltte ve ekstremitelerde palpabl olmayan peteşi ve purpura odakları, yaygın ekimozlar saptandı. Lenfadenopati (LAP) ve hepatosplenomegali saptanmadı."
    },
    requiredTests: ["hgb", "wbc", "trombosit", "kemik_iligi_biyopsisi"],
    contraindicated: [],
    treatments: [
      "HLA uyumlu kardeş varsa Kemik İliği Nakli (AKİT) (<40 yaş için ilk tercih)",
      "İmmünsupresif Tedavi (Siklosporin + Anti-Timosit Globulin)",
      "Destekleyici kan ve trombosit transfüzyonu"
    ],
    consultations: ["Hematoloji Kemik İliği Nakli Konsültasyonu"]
  },

{
    id: "itp",
    name: "İdiyopatik Trombositopenik Purpura (İTP)",
    category: "hematoloji",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "ttp",
    name: "Trombotik Trombositopenik Purpura (TTP)",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "hemophilia",
    name: "Hemofili A ve Hemofili B",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "vwd",
    name: "Von Willebrand Hastalığı",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "antiphospholipid",
    name: "Antifosfolipid Antikor Sendromu",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "hereditary_angioedema",
    name: "Herediter Anjioödem",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {
      c4: 3.5,
      wbc: 11.2,
      crp: 5
    },
    symptoms: {
      complaints: ["Yüzde ve dudaklarda basmakla iz bırakmayan şişlik", "Tekrarlayan şiddetli karın ağrısı", "Kaşıntı ve ürtiker olmaması"],
      story: "Hasta, son 24 saattir giderek artan sağ el sırtında ve sol dudağında belirgin şişlik şikayetiyle başvurdu. Eşlik eden ürtiker (kurdeşen) veya kaşıntı yok. Benzer şişliklerin çocukluğundan beri tekrarladığını, bazen şiddetli karın ağrısı ataklarının da eşlik ettiğini belirtiyor. Ailede de benzer öykü mevcut.",
      pmh: ["Tekrarlayan karın ağrısı atakları", "Ailede benzer hastalık öyküsü"],
      meds: ["Yok"],
      fm: "Sağ el sırtında ve sol labial mukozada gergin, basmakla solmayan, kaşıntısız ve ağrısız gode bırakmayan lokalize ödem izlendi. Ürtiker döküntüsü yok. Abdominal muayenede hafif yaygın hassasiyet mevcut. USG ile bağırsak duvarlarında ödem görülebilir."
    },
    requiredTests: ["c4", "crp", "wbc"],
    contraindicated: [],
    treatments: [
      "C1 Esteraz İnhibitör Konsantresi (IV Berinert) uygulaması",
      "Bradikinin B2 Reseptör Antagonisti (Icatibant SC) tedavisi",
      "Standart alerji tedavilerinin (epinefrin, kortikosteroid, antihistaminik) etkisiz olduğunun bilinmesi",
      "Hava yolu tehlikedeyse erken uyanık fiberoptik entübasyon hazırlığı"
    ],
    consultations: ["Alerji ve İmmünoloji Polikliniği", "KBB Konsültasyonu"]
  },

{
    id: "fmf",
    name: "Familial Akdeniz Ateşi (FMF)",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "behcet",
    name: "Behçet Hastalığı",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "takayasu",
    name: "Takayasu Arteriti",
    category: "romatoloji",
    difficulty: "expert",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "wegener",
    name: "Granülomatöz Polianjitis (Wegener)",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "churg_strauss",
    name: "Eozinofilik Granülomatöz Polianjitis (Churg-Strauss)",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "microscopic_polyangiitis",
    name: "Mikroskobik Polianjitis",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "pan",
    name: "Poliarteritis Nodosa (PAN)",
    category: "romatoloji",
    difficulty: "expert",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "kawasaki",
    name: "Kawasaki Hastalığı",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "dermatomyositis",
    name: "Dermatomiyozit ve Polimiyozit",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "mctd",
    name: "Karışık Bağ Dokusu Hastalığı (MCTD)",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "reactive_arthritis",
    name: "Reaktif Artrit (Reiter Sendromu)",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "enteropathic_arthritis",
    name: "Enteropatik Artrit",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "avn",
    name: "Avasküler Kemik Nekrozu",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "dupuytren",
    name: "Dupuytren Kontraktürü",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "trigger_finger",
    name: "Tetik Parmak (Stenozan Tenosinovit)",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "de_quervain",
    name: "De Quervain Tenosinoviti",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "baker_cyst",
    name: "Baker Kisti",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "osgood_schlatter",
    name: "Osgood-Schlatter Hastalığı",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "perthes_disease",
    name: "Legg-Calvé-Perthes Hastalığı",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "hip_dysplasia",
    name: "Gelişimsel Kalça Displazisi",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "osteogenesis_imperfecta",
    name: "Osteogenezis İmperfekta",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "croup",
    name: "Akut Larenjotrakeobronşit (Krup)",
    category: "solunum",
    difficulty: "easy",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "alveolar_proteinosis",
    name: "Alveoler Proteinozis",
    category: "solunum",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "aspergilloma",
    name: "Aspergilloma",
    category: "solunum",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "byssinosis",
    name: "Bisinozis",
    category: "solunum",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "loeffler_syndrome",
    name: "Löffler Sendromu",
    category: "solunum",
    difficulty: "medium",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "goodpasture",
    name: "Goodpasture Sendromu",
    category: "solunum",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "chagas",
    name: "Chagas Hastalığı",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "leishmaniasis",
    name: "Leishmaniasis (Şark Çıbanı / Kaleazar)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "schistosomiasis",
    name: "Şistozomiyazis",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "hydatid_cyst",
    name: "Hidatik Kist (Ekinokokozis)",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "toxoplasmosis",
    name: "Toksoplazmozis",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "listeriosis",
    name: "Listeriyozis",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "brucellosis",
    name: "Bruselloz",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "tularemia",
    name: "Tularemi",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "leptospirosis",
    name: "Leptospiroz",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "lyme",
    name: "Lyme Hastalığı",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "malaria",
    name: "Sıtma (Malarya)",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "dengue",
    name: "Dang Humması",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "rabies",
    name: "Kuduz (Rabies)",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "tetanus_infection",
    name: "Tetanoz",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "botulism",
    name: "Botulizm",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "gas_gangrene",
    name: "Gazlı Gangren (Klostridiyal Miyonekroz)",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "leprosy",
    name: "Lepra (Hansen Hastalığı)",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "actinomycosis",
    name: "Aktinomikoz",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "nocardiosis",
    name: "Nokardiyozis",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "histoplasmosis",
    name: "Histoplazmozis",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "coccidioidomycosis",
    name: "Koksidiyoidomikoz",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "blastomycosis",
    name: "Blastomikoz",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "cryptococcosis",
    name: "Kriptokokoz",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "mucormycosis",
    name: "Mucormikoz",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [110, 120, 65, 75], spo2: [95, 98], rr: [18, 22], temp: [38.2, 39.2], ecg: "tachycardia" },
    abnormals: {},
    symptoms: {
      complaints: ["Ateş yüksekliği ve titreme", "Yaygın kas ve eklem ağrıları", "Halsizlik"],
      story: "3 gün önce aniden başlayan yüksek ateş, üşüme, titreme ve yaygın kas ağrısı şikayetleri var. Boğazında ağrı ve yutkunma güçlüğü hissediyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ateş 38.6°C. Orofarinks hiperemik, tonsiller hipertrofik. Servikal bölgede ağrılı LAP'lar mevcut. Akciğerler doğal."
    },
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: [
      "Semptomatik antipiretik tedavi (Parasetamol)",
      "Bakteriyel enfeksiyon şüphesinde antibiyotik tedavisi",
      "Bol sıvı alımı ve yatak istirahati"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

{
    id: "prion_diseases",
    name: "Prion Hastalıkları (Creutzfeldt-Jakob dahil)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "pml",
    name: "Progresif Multifokal Lökoensefalopati (PML)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "sspe",
    name: "Subakut Sklerozan Panensefalit (SSPE)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "neurofibromatosis",
    name: "Nörofibromatozis Tip 1 ve Tip 2",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "tuberous_sclerosis",
    name: "Tüberoz Skleroz",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "sturge_weber",
    name: "Sturge-Weber Sendromu",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "vhl",
    name: "Von Hippel-Lindau Hastalığı",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "marfan",
    name: "Marfan Sendromu",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "ehlers_danlos",
    name: "Ehlers-Danlos Sendromu",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "pseudoxanthoma",
    name: "Psödotoksantoma Elastikum",
    category: "dermatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "fibrous_dysplasia",
    name: "Fibröz Displazi",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "achondroplasia",
    name: "Akondroplazi",
    category: "romatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "osteopetrosis",
    name: "Albers-Schönberg Hastalığı (Osteopetrozis)",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "lch",
    name: "Langerhans Hücreli Histiyositoz",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "burkitt",
    name: "Burkitt Lenfoma",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Halsizlik ve çabuk yorulma", "Ciltte solukluk", "Eforla gelen nefes darlığı"],
      story: "Son 3 aydır giderek belirginleşen halsizlik, çabuk yorulma, merdiven çıkarken nefes nefese kalma şikayeti var. Saçlarında dökülme ve tırnaklarında kırılma fark etmiş.",
      pmh: ["Düzensiz beslenme"],
      meds: ["Yok"],
      fm: "Konjonktivalar ve cilt soluk görünümlü. Kalpte hiperdinamik üfürüm duyuluyor. Organomegali veya LAP saptanmadı."
    },
    requiredTests: ["hgb", "mcv", "ferritin"],
    contraindicated: [],
    treatments: [
      "Demir veya Vitamin replasman tedavisi",
      "Beslenme alışkanlıklarının düzenlenmesi",
      "Kanalizasyon kontrolleri"
    ],
    consultations: ["Hematoloji veya Dahiliye Polikliniği"]
  },

{
    id: "mycosis_fungoides",
    name: "Mikozis Fungoides",
    category: "dermatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "sezary_syndrome",
    name: "Sezary Sendromu",
    category: "dermatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "cryoglobulinemia",
    name: "Esansiyel Kriyoglobulinemi",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "conversion_disorder",
    name: "Histerik Konversiyon Bozukluğu",
    category: "psikiyatri",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "somatization",
    name: "Somatizasyon Bozukluğu",
    category: "psikiyatri",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "hypochondriasis",
    name: "Hipokondriyazis (Hastalık Kaygısı Bozukluğu)",
    category: "psikiyatri",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "bipolar",
    name: "Bipolar Bozukluk Tip 1 ve Tip 2",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "schizophrenia_spec",
    name: "Şizofreni",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "schizoaffective",
    name: "Şizoaffektif Bozukluk",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "delusional_disorder",
    name: "Sanrılı Bozukluk",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "ocd",
    name: "Obsesif Kompulsif Bozukluk (OKB)",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "ptsd",
    name: "Travma Sonrası Stres Bozukluğu (TSSB)",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "borderline",
    name: "Sınır Kişilik Bozukluğu (Borderline)",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "antisocial",
    name: "Antisoyal Kişilik Bozukluğu",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "narcissistic",
    name: "Narsisistik Kişilik Bozukluğu",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "anorexia",
    name: "Anoreksiya Nervoza",
    category: "psikiyatri",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "bulimia",
    name: "Bulimiya Nervoza",
    category: "psikiyatri",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "binge_eating",
    name: "Tıkınırcasına Yeme Bozukluğu",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "narcolepsy",
    name: "Narkolepsi",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "insomnia",
    name: "İnsomni (Kronik Uykusuzluk)",
    category: "psikiyatri",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Uykusuzluk ve kaygı", "Keyifsizlik ve isteksizlik", "Sürekli endişe hali"],
      story: "Son 2 aydır iş ve aile yaşantısındaki sorunlar nedeniyle sürekli bir kaygı, uykusuzluk, hiçbir şeyden zevk alamama ve çökkünlük hissi yaşadığını belirtiyor.",
      pmh: ["Depresif nöbet öyküsü"],
      meds: ["Yok"],
      fm: "Genel fizik muayene ve nörolojik muayene tamamen doğal. Psikiyatrik görüşmede çökkün duygulanım, anksiyete ve uykusuzluk bulguları saptandı."
    },
    requiredTests: ["tsh", "glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "SSRI grubu antidepresan tedavi başlanması (Sertralin 50mg/gün)",
      "Psikoterapi (Bilişsel Davranışçı Terapi) yönlendirmesi",
      "Hijyen ve uyku düzeni eğitimi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

{
    id: "restless_legs",
    name: "Huzursuz Bacaklar Sendromu (Willis-Ekbom)",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "plmd",
    name: "Periyodik Uzuv Hareket Bozukluğu",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "amd",
    name: "Yaşa Bağlı Makula Dejenerasyonu",
    category: "acil",
    difficulty: "easy",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile yaşa bağlı makula dejenerasyonu servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "retinitis_pigmentosa",
    name: "Retinitis Pigmentosa",
    category: "acil",
    difficulty: "easy",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile retinitis pigmentosa servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "retinal_detachment",
    name: "Retina Dekolmanı",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile retina dekolmanı servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "diabetic_retinopathy",
    name: "Diyabetik Retinopati",
    category: "acil",
    difficulty: "medium",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile diyabetik retinopati servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "hypertensive_retinopathy",
    name: "Hipertansif Retinopati",
    category: "acil",
    difficulty: "medium",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile hipertansif retinopati servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "crao",
    name: "Santral Retina Arter Tıkanıklığı",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile santral retina arter tıkanıklığı servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "crvo",
    name: "Santral Retina Ven Tıkanıklığı",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile santral retina ven tıkanıklığı servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "optic_neuritis",
    name: "Akut Optik Nevrit (Demyelinizan)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.5, 37.0], ecg: "normal" },
    abnormals: {
      mr_kranial: "Sağ optik sinir kılıfında T2 hiperintensitesi ve kontrast tutulumu. Periventriküler beyaz maddede demiyelinizan plaklar şüphesi.",
      oftalmoskopi: "Sağ optik disk sınırları hafif silik ve ödemli (papillit) veya tamamen normal (retrobulber nevrit)."
    },
    symptoms: {
      complaints: ["Sağ gözde ani görme kaybı", "Göz hareketleriyle ortaya çıkan ağrı", "Renkleri soluk görme"],
      story: "28 yaşındaki kadın hasta, son 4 gündür sağ gözünde hızla ilerleyen görme kaybı ve sağ gözünü sağa-sola hareket ettirirken gözün arkasında derin bir ağrı hissiyle başvurdu. Ayrıca sağ gözüyle kırmızı rengi çok soluk, adeta kahverengi gibi gördüğünü belirtiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Bilinç açık, kooperasyonu tam. Sağ göz görme keskinliği 1/10 seviyesine düşmüş, sol göz 10/10 (normal). Sağ gözde direkt ışık refleksi zayıf, sol gözden sağa geçildiğinde sağ pupil paradoksal olarak genişliyor (Sağ Afferent Pupiller Defekt / Marcus Gunn pupili). Disk muayenesi doğal (retrobulber nevrit)."
    },
    requiredTests: ["mr_kranial", "oftalmoskopi"],
    contraindicated: [],
    treatments: [
      "IV Yüksek Doz Metilprednizolon (Pulse steroid, 1000mg/gün, 3 gün)",
      "Steroid sonrası oral prednizolon azaltma şeması (fiziksel yakın takip ile)",
      "Multipl Skleroz (MS) riski açısından Nöroloji takibi"
    ],
    consultations: ["Nöroloji Polikliniği", "Göz Hastalıkları Polikliniği"]
  },

{
    id: "papilledema",
    name: "Papilödem",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "chalazion",
    name: "Şalazyon ve Hordeolum (Arpacık)",
    category: "acil",
    difficulty: "easy",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile şalazyon ve hordeolum (arpacık) servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "blepharitis",
    name: "Blefarit",
    category: "acil",
    difficulty: "easy",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile blefarit servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "dacryocystitis",
    name: "Dakriyosistit",
    category: "acil",
    difficulty: "easy",
    monitor: { hr: [95, 115], bp: [100, 120, 60, 75], spo2: [94, 97], rr: [18, 22], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Akut başlayan şiddetli ağrı", "Halsizlik ve fenalık hissi", "Çarpıntı"],
      story: "Yaklaşık 2 saat önce aniden başlayan ve giderek şiddetlenen ağrı ve fenalık hissi şikayeti ile dakriyosistit servise getirildi. Oldukça endişeli görünüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu orta, ajite ve terlemiş. Sistemik muayenede batın rahat, akciğer sesleri doğal, ek ses veya üfürüm saptanmadı."
    },
    requiredTests: ["ekg", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "IV damar yolu açılarak sıvı resüsitasyonu başlanması",
      "Monitörizasyon ve yakın vital takip",
      "Analjezik ve semptomatik tedavi"
    ],
    consultations: ["Acil Tıp Konsültasyonu"]
  },

{
    id: "otosclerosis",
    name: "Otoskleroz",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "menieres_disease",
    name: "Meniere Hastalığı",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [115, 130, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.4, 36.9], ecg: "normal" },
    abnormals: {
      odyometri: "Sol kulakta düşük frekansları tutan sensörinöral işitme kaybı (fluktuasyon gösteren)",
      mr_kranial: "İç kulak yollarında yer kaplayan lezyon (vestibüler schwannom vb.) izlenmedi."
    },
    symptoms: {
      complaints: ["Tekrarlayan baş dönmesi atakları", "Sol kulakta uğultu ve çınlama", "Sol kulakta dolgunluk hissi", "İşitme kaybı"],
      story: "45 yaşındaki hasta, son 1 yıldır aralıklarla gelen, 2-3 saat süren şiddetli baş dönmesi, bulantı, kusma atakları şikayetiyle başvurdu. Atak başlamadan önce sol kulağında dolgunluk, basınç ve çınlama (tinnitus) hissettiğini, atak sırasında sol kulağının daha az işittiğini belirtiyor.",
      pmh: ["Migren öyküsü"],
      meds: ["Yok"],
      fm: "Bilinç açık, kooperasyonu iyi. Nörolojik muayene normal. Kaba işitme muayenesinde solda fısıltıyı duymada azalma saptandı. Weber testi sağa lateralize, Rinne testi bilateral pozitif (sensörinöral işitme kaybı ile uyumlu)."
    },
    requiredTests: ["odyometri", "mr_kranial"],
    contraindicated: [],
    treatments: [
      "Diyet tuz kısıtlaması (günlük < 2g) ve kafein/alkol yasağı",
      "Profilaktik diüretik tedavisi (Hidroklorotiyazid + Triamteren)",
      "Akut vertigo atağı sırasında vestibüler supresan (Diazepam 5mg PO) ve antiemetik",
      "Betahistin dihidroklorür 24mg 2x1 tedavisi"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği"]
  },

{
    id: "vestibular_neuritis",
    name: "Vestibüler Nörinit",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "cholesteatoma",
    name: "Kolesteatom",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "barotrauma",
    name: "Akut Barotravma",
    category: "solunum",
    difficulty: "easy",
    monitor: { hr: [85, 100], bp: [115, 130, 70, 85], spo2: [92, 96], rr: [18, 22], temp: [37.2, 38.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Öksürük ve balgam çıkarma", "Nefes darlığı", "Hırıltılı solunum"],
      story: "Yaklaşık 10 gündür devam eden, başlangıçta kuru olan ancak son günlerde sarı-yeşil balgamlı hale dönen öksürük ve nefes darlığı şikayeti var. Ateşi 37.8°C dolaylarında seyretmiş.",
      pmh: ["Sigara kullanımı (15 paket-yıl)"],
      meds: ["Yok"],
      fm: "Akciğer oskültasyonunda bilateral yaygın ronküsler ve sol alt zonda krepitan raller duyuluyor. Yardımcı solunum kasları hafif aktif."
    },
    requiredTests: ["pa_ac", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Geniş Spektrumlu Antibiyotik (Klaritromisin / Amoksisilin)",
      "İnhaler bronkodilatör (Salbutamol)",
      "Semptomatik tedavi, bol hidrasyon"
    ],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

{
    id: "presbycusis",
    name: "Presbiakuzi",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 128, 70, 82], spo2: [97, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Baş ağrısı ve baş dönmesi", "Uyuşma ve karıncalanma hissi", "Unutkanlık"],
      story: "Son 1 aydır aralıklı gelen baş ağrısı, dengesizlik hissi ve ellerde uyuşmalar şikayeti var. Ağrılar özellikle stresli günlerde artıyor.",
      pmh: ["Migren şüphesi"],
      meds: ["Parasetamol 500mg PRN"],
      fm: "Nörolojik muayenede kranial sinirler intakt. Motor ve duyu defisiti saptanmadı. Serebellar testler normal. DTR'ler normoaktif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: [],
    treatments: [
      "Nörolojik semptomatik tedavi",
      "Stres yönetimi, uyku düzeninin sağlanması",
      "Analjezik tedavi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

{
    id: "leukoplakia",
    name: "Lökoplaki ve Eritroplaki",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "lichen_planus",
    name: "Oral Likend Planus",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ciltte döküntü ve kızarıklık", "Yoğun kaşıntı", "Ciltte kuruluk"],
      story: "Son 2 haftadır vücudunda, özellikle dirsek içi ve diz arkasında yoğun kaşıntılı, kırmızı döküntüler belirdiğini ifade ediyor. Kaşımakla lezyonlar kanıyor.",
      pmh: ["Atopik bünye"],
      meds: ["Nemlendirici krem"],
      fm: "Deri muayenesinde bilateral antekübital ve popliteal fossalarda eritemli, likenifiye, ekskoriye plaklar izlendi. Kserozis belirgin."
    },
    requiredTests: ["biyopsi_deri", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal nemlendirici ve orta etkili steroidli krem (Betametazon)",
      "Oral antihistaminik (kaşıntı kontrolü için)",
      "Tetikleyici alerjenlerden kaçınma"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

{
    id: "igg4_related",
    name: "IgG4 İlişkili Hastalık",
    category: "romatoloji",
    difficulty: "hard",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Eklemlerde ağrı ve sabah tutukluğu", "Eklem şişliği", "Yaygın kas ağrısı"],
      story: "Son birkaç aydır özellikle sabahları uyandığında el eklemlerinde belirgin olan ve 1 saatten uzun süren tutukluk ve eklem ağrısı şikayetleri var. Hareket ettikçe ağrısı hafifliyor.",
      pmh: ["Yok"],
      meds: ["Naproksen PRN"],
      fm: "El MKF ve PİF eklemlerinde simetrik hassasiyet ve hafif şişlik saptandı. Eklem hareket açıklığı ağrılı."
    },
    requiredTests: ["rf", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "NSAİİ tedavisi",
      "Eklem koruma yöntemleri ve fizik tedavi egzersizleri",
      "İmmünsüpresif ilaç planlaması için ileri tetkik"
    ],
    consultations: ["Romatoloji Polikliniği"]
  },

{
    id: "achalasia",
    name: "Akalazya",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "des",
    name: "Diffüz Özofageal Spazm",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "zenker",
    name: "Zenker Divertikülü",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "mallory_weiss",
    name: "Mallory-Weiss Sendromu",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "boerhaave",
    name: "Boerhaave Sendromu",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "celiac",
    name: "Çölyak Hastalığı",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "crohn_disease",
    name: "Crohn Hastalığı",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "ulcerative_colitis_spec",
    name: "Ülseratif Kolit",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "diverticulitis",
    name: "Divertikülit",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "meckel_diverticulum",
    name: "Meckel Divertiküliti",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "ischemic_colitis",
    name: "İskemik Kolit",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "toxic_megacolon",
    name: "Toksik Megakolon",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "whipple_disease",
    name: "Whipple Hastalığı",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "tropical_sprue",
    name: "Tropikal Sprue",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "short_bowel",
    name: "Kısa Bağırsak Sendromu",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "gilbert_syndrome",
    name: "Gilbert Sendromu",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "crigler_najjar",
    name: "Crigler-Najjar Sendromu Tip 1 ve Tip 2",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "dubin_johnson",
    name: "Dubin-Johnson Sendromu",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "rotor_syndrome",
    name: "Rotor Sendromu",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "budd_chiari",
    name: "Budd-Chiari Sendromu",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "sos",
    name: "Sinüzoidal Tıkanıklık Sendromu",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Epigastrik ağrı ve hazımsızlık", "Bulantı", "Karında şişkinlik"],
      story: "Son 1 aydır yemeklerden sonra epigastrik bölgede başlayan, sırta yayılan, yanıcı tarzda ağrı şikayeti. Yemek yedikten sonra şişkinlik ve bulantı da eşlik ediyor.",
      pmh: ["Gastrit öyküsü"],
      meds: ["Antasit şurup PRN"],
      fm: "Batın muayenesinde epigastrik bölgede derin palpasyonla hafif hassasiyet mevcut. Defans veya rebound yok. Organomegali saptanmadı."
    },
    requiredTests: ["endoskopi", "usg_abdomen", "alt"],
    contraindicated: [],
    treatments: [
      "Proton Pompa İnhibitörü (Pantoprazol 40mg 1x1)",
      "Diyet düzenlenmesi (yağlı, acı ve asitli yiyeceklerin kısıtlanması)",
      "Semptomatik antiemetik"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

{
    id: "mesenteric_lymphadenitis",
    name: "Akut Mezenterik Lenfadenit",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {
      us_batin: "Ultrasonografi: Sağ alt kadranda apandiks çapı normal (5 mm), lümeni kompresible. Çevrede en büyüğü 9 mm olan patolojik olmayan çok sayıda mezenterik lenf nodu izlendi.",
      wbc: 11.2,
      crp: 15
    },
    symptoms: {
      complaints: ["Karın ağrısı", "Hafif ateş", "Bulantı"],
      story: "10 yaşındaki erkek hasta, 2 gün önce başlayan karın ağrısı ve hafif ateş şikayetiyle getirildi. Ağrının sağ alt kadranda yerleşik olduğu belirtiyor. Hastanın 1 hafta önce geçirilmiş boğaz ağrısı ve öksürük (ÜSYE) öyküsü mevcut.",
      pmh: ["Geçirilmiş Üst Solunum Yolu Enfeksiyonu (1 hafta önce)"],
      meds: ["Parasetamol şurup"],
      fm: "Genel durum iyi. Sağ alt kadranda derin palpasyonla hafif hassasiyet saptandı. Defans (rijidite) veya rebound (bırakma ağrısı) izlenmedi. Kulak burun boğaz muayenesinde hafif tonsiller hiperemi mevcut."
    },
    requiredTests: ["us_batin", "wbc", "crp"],
    contraindicated: ["apandektomi"],
    treatments: [
      "Semptomatik tedavi ve dinlenme",
      "Analjezik tedavi (Parasetamol PO)",
      "Yeterli hidrasyonun sağlanması",
      "Gerekirse cerrahi gözlem"
    ],
    consultations: ["Çocuk Cerrahisi Konsültasyonu"]
  },

  {
    id: "cluster_headache",
    name: "Akut Küme Baş Ağrısı (Cluster)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [80, 95], bp: [130, 150, 80, 95], spo2: [96, 99], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      ekg: "Normal sinüs ritmi",
      mr_kranial: "Normal beyin parankim bulguları, vasküler bası veya yer kaplayan lezyon saptanmadı"
    },
    symptoms: {
      complaints: ["Tek taraflı şiddetli göz ağrısı", "Gözde kızarıklık ve yaşarma", "Burun tıkanıklığı", "Alın bölgesinde terleme"],
      story: "Hasta yaklaşık 1 saat önce uykudan uyandıran, sol göz çevresinde ve şakakta yerleşik, oyucu, çok şiddetli, bıçak saplanır tarzda tek taraflı ağrı şikayetiyle başvurdu. Atak sırasında sol gözünün yaşardığını, kızardığını ve sol burun deliğinin tıkandığını belirtiyor.",
      pmh: ["Aktif sigara kullanımı (10 paket-yıl)"],
      meds: ["Yok"],
      fm: "Sol gözde konjonktival enjeksiyon (kanlanma), göz yaşarması, sol göz kapağında hafif düşüklik (pitoz) ve pupilde küçülme (miyoz) izlendi (Kısmi Horner Sendromu). Genel durumu ajite, ağrının şiddetinden dolayı odada sürekli yürümek istiyor."
    },
    requiredTests: ["ekg", "mr_kranial"],
    contraindicated: ["efor_testi"],
    treatments: [
      "%100 Oksijen inhalasyonu (8 L/dakika, maske ile)",
      "Triptan tedavisi (Sumatriptan 6mg SC)",
      "Profilaktik Verapamil tedavisi başlanması"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

  {
    id: "trigeminal_neuralgia",
    name: "Trigeminal Nevralji (Tic Douloureux)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [120, 140, 75, 90], spo2: [97, 100], rr: [14, 18], temp: [36.3, 36.9], ecg: "normal" },
    abnormals: {
      mr_kranial: "Sağ trigeminal sinir çıkış bölgesinde süperior serebellar arter basısı şüphesi (vasküler loop)"
    },
    symptoms: {
      complaints: ["Yüzde şimşek çakar tarzda ağrı", "Diş fırçalarken tetiklenen acı", "Yüz yıkayamama"],
      story: "Hasta sağ yanağında ve çenesinde, ani başlayan, birkaç saniye süren, elektrik çarpması veya şimşek çakması tarzında tariflediği çok şiddetli ağrı şikayetiyle başvurdu. Ağrının yüzünü yıkarken, tıraş olurken veya yemek yerken tetiklendiğini söylüyor.",
      pmh: ["Yok"],
      meds: ["Parasetamol 500mg (etki etmemiş)"],
      fm: "Genel durumu iyi, nörolojik muayenede kranial sinirler intakt. Sağ nazolabial bölgeye hafif dokunulmasıyla hasta ağrıyla irkildi (tetik nokta pozitif, tic douloureux spazmı)."
    },
    requiredTests: ["mr_kranial"],
    contraindicated: ["lomber_ponksiyon"],
    treatments: [
      "Karbamazepin 200mg 2x1 başlanması (İlk Tercih)",
      "Gabapentin veya Pregabalin tedavisi",
      "Gerekirse mikrovasküler dekompresyon (MVD) cerrahi konsültasyonu"
    ],
    consultations: ["Nöroloji Polikliniği", "Beyin ve Sinir Cerrahisi Konsültasyonu"]
  },

  {
    id: "absence_epilepsy",
    name: "Çocukluk Çağı Absans Epilepsisi",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [80, 95], bp: [100, 115, 60, 75], spo2: [98, 100], rr: [16, 20], temp: [36.5, 37.1], ecg: "normal" },
    abnormals: {
      eeg: "Hiperventilasyon sırasında belirginleşen, jeneralize 3 Hz diken-dalga deşarjları",
      mr_kranial: "Normal beyin MR bulguları"
    },
    symptoms: {
      complaints: ["Derste dalıp gitme", "Okul başarısında düşme", "Göz kırpma atakları"],
      story: "8 yaşındaki kız hasta, son 3 aydır okulda öğretmenlerinin 'aniden dalıyor, seslendiğimizde duymuyor, birkaç saniye sonra hiçbir şey olmamış gibi kaldığı yerden devam ediyor' demesi ve ders başarısının düşmesi üzerine getirildi. Aile evde de günde 20-30 kez benzer dalma atağı fark etmiş.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Nörolojik muayene normal. Poliklinikte hastaya 3 dakika boyunca derin nefes alıp vermesi (hiperventilasyon) söylendiğinde, hastanın aniden boşluğa baktığı, gözlerini kırptığı, 5 saniye boyunca çevreyle iletişiminin koptuğu ve sonrasında konuşmasına kaldığı yerden devam ettiği gözlendi."
    },
    requiredTests: ["eeg", "mr_kranial"],
    contraindicated: ["karbamazepin", "fenitoin"],
    treatments: [
      "Etosüksimid şurup/kapsül başlanması (İlk seçenek)",
      "Sodyum Valproat tedavisi (Alternatif)",
      "Aileye ve öğretmene nöbet yönetimi eğitimi verilmesi"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

  {
    id: "west_syndrome",
    name: "West Sendromu (İnfantil Spazm)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [110, 130], bp: [85, 100, 50, 65], spo2: [97, 100], rr: [24, 32], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {
      eeg: "Yüksek voltajlı, kaotik, hipsaritmi deseni (multifokal yavaş dalga ve diken deşarjları)",
      mr_kranial: "Periventriküler lökomalazi bulguları"
    },
    symptoms: {
      complaints: ["Bebeklerde ani irkilme nöbetleri", "Gelişiminde gerileme", "Boyun bükme atakları"],
      story: "6 aylık erkek bebek, son 2 haftadır uykudan uyanırken arka arkaya gelen, gövdesini ve boynunu öne doğru büküp kollarını açtığı (çakı nöbeti/infantil spazm) ani kasılmalar şikayetiyle getirildi. Bebeğin son günlerde gülümsemesinin azaldığı ve başını tutmakta zorlandığı belirtiliyor.",
      pmh: ["Prematüre doğum (30. hafta), yenidoğan yoğun bakım öyküsü (asfiksi)"],
      meds: ["Yok"],
      fm: "Bebek hipotonik görünümde, sosyal gülümseme ve göz takibi zayıf. Muayene sırasında 10-15 saniye arayla tekrarlayan simetrik fleksör spazmlar izlendi."
    },
    requiredTests: ["eeg", "mr_kranial"],
    contraindicated: ["karbamazepin"],
    treatments: [
      "ACTH (Kortikotropin) enjeksiyonu",
      "Vigabatrin tedavisi (Tüberoz skleroz eşlik ediyorsa ilk tercih)",
      "Yakın nörolojik gelişimsel izlem"
    ],
    consultations: ["Nöroloji Polikliniği", "Çocuk Sağlığı ve Hastalıkları Konsültasyonu"]
  },

  {
    id: "status_epilepticus",
    name: "Status Epileptikus (Konvülzif)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [120, 140], bp: [140, 160, 90, 100], spo2: [85, 90], rr: [26, 32], temp: [37.8, 38.5], ecg: "tachycardia" },
    abnormals: {
      glukoz: 105,
      kreatinin: 0.9,
      potasyum: 4.0,
      eeg: "Sürekli jeneralize epileptiform deşarjlar ve diken-yavaş dalga aktivitesi"
    },
    symptoms: {
      complaints: ["Durdurulamayan sara nöbeti", "Bilinç kaybı", "Kasılmalar", "Morarma"],
      story: "Epilepsi tanısı olan hasta, yaklaşık 15 dakika önce evde başlayan, tüm vücutta kasılma ve gevşemelerle seyreden jeneralize tonik-klonik nöbet geçirmesi üzerine acil servise getirildi. Nöbetin aralıksız sürdüğü ve hastanın bilincinin hiç açılmadığı belirtiliyor.",
      pmh: ["Epilepsi (10 yıl), ilaç uyumsuzluğu"],
      meds: ["Valproik Asit 500mg 2x1 (düzensiz kullanım)"],
      fm: "Bilinç kapalı (GKS 4), tüm ekstremitelerde jeneralize tonik-klonik kasılmalar mevcut. Siyanoze görünümde, ağızdan köpüklü sekresyon geliyor. Solunum yüzeyel ve takipneik."
    },
    requiredTests: ["ekg", "glukoz", "potasyum", "eeg"],
    contraindicated: ["lomber_ponksiyon"],
    treatments: [
      "Hava yolu açıklığının sağlanması ve Oksijen desteği",
      "IV Diazepam (veya Klonazepam) yavaş bolus",
      "Nöbet durmazsa IV Fenitoin yüklemesi (aritmi takibi ile)",
      "Dirençli vakalarda Yoğun Bakım Yatışı ve Midazolam/Propofol anestezisi"
    ],
    consultations: ["Nöroloji Acil Konsültasyonu", "Anestezi ve Reanimasyon (Yoğun Bakım) Konsültasyonu"]
  },

  {
    id: "tia",
    name: "Geçici İskemik Atak (TİA)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [145, 165, 90, 100], spo2: [96, 98], rr: [16, 20], temp: [36.5, 37.0], ecg: "normal" },
    abnormals: {
      mr_kranial: "Akut enfarkt bulgusu saptanmadı, kronik iskemik gliotik odaklar mevcut",
      eko: "Ekokardiyografi normal, intrakardiyak trombus izlenmedi",
      doppler_karotis: "Sol internal karotid arter (ICA) başlangıcında %60 darlık oluşturan kalsifiye plak"
    },
    symptoms: {
      complaints: ["Sol gözde geçici görme kaybı", "Sağ kolda geçici güçsüzlük", "Konuşmada peltekleşme"],
      story: "65 yaşındaki erkek hasta, yaklaşık 2 saat önce aniden sol gözünün önüne perde inmiş gibi geçici olarak tamamen karardığını (amarozis fugaks), bu duruma sağ elinde hafif güçsüzlük ve konuşmada peltekleşmenin eşlik ettiğini belirtti. Şikayetleri yaklaşık 10 dakika sürmüş ve acil servise geldiğinde tamamen düzelmiştir.",
      pmh: ["Hipertansiyon (15 yıl)", "Hiperlipidemi", "Tip 2 Diyabet (8 yıl)"],
      meds: ["Amlodipin 10mg 1x1", "Metformin 1000mg 2x1"],
      fm: "Genel durum iyi, bilinç açık. Nörolojik muayenede motor, duyu veya kraniyal sinir defisiti saptanmadı (tamamen normal). Sol karotis odağında hafif üfürüm duyuldu."
    },
    requiredTests: ["mr_kranial", "doppler_karotis", "ekg"],
    contraindicated: ["trombolitik_tedavi"],
    treatments: [
      "Antiagregan tedavi (Aspirin 100mg veya Klopidogrel 75mg)",
      "Karotis arter darlığı için Nöroloji ve KDC takibi",
      "Tansiyon, şeker ve kolesterol regülasyonu"
    ],
    consultations: ["Nöroloji Polikliniği", "Kalp ve Damar Cerrahisi Konsültasyonu"]
  },

  {
    id: "wallenberg_syndrome",
    name: "Wallenberg Sendromu (Lateral Medüller)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [90, 105], bp: [150, 170, 90, 100], spo2: [94, 96], rr: [18, 22], temp: [36.8, 37.4], ecg: "normal" },
    abnormals: {
      mr_kranial: "Sağ lateral medulla oblangatada akut PICA enfarktüsü ile uyumlu difüzyon kısıtlaması",
      ekg: "Normal sinüs ritmi, hafif sol ventrikül hipertrofisi bulgusu"
    },
    symptoms: {
      complaints: ["Şiddetli baş dönmesi", "Yutma güçlüğü ve ses kısıklığı", "Vücudun sol tarafında his kaybı", "Yalpalayarak yürüme"],
      story: "Hasta dün akşam aniden başlayan şiddetli baş dönmesi, bulantı, kusma, yutma güçlüğü, ses kısıklığı, sağ göz kapağında düşme ve sol kol-bacağında uyuşma şikayetleriyle başvurdu. Yürürken sağ tarafa doğru yalpalamaktadır.",
      pmh: ["Hipertansiyon (8 yıl)", "Sigara kullanımı"],
      meds: ["Valsartan 160mg 1x1"],
      fm: "Bilinç açık, kooperasyon tam. Sağda pitoz, miyozis (Horner sendromu). Yutma refleksi azalmış, uvula sola deviye. Sağda dismetri ve disdiyadokokinezi (serebellar ataksi). Sağ yüzde ağrı-ısı duyusu azalmış; sol kol ve bacakta ağrı-ısı duyusu azalmış (çapraz duyu kaybı). Motor güç tam, Babinski negatif."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: ["lomber_ponksiyon"],
    treatments: [
      "İnme servisine yatış ve monitorizasyon",
      "Aspirasyon profilaksisi (gerekirse nazogastrik tüp ile beslenme)",
      "Antiagregan tedavi (Aspirin + Klopidogrel) ve Statin",
      "Yutma ve denge rehabilitasyonu"
    ],
    consultations: ["Nöroloji Konsültasyonu", "Kulak Burun Boğaz Konsültasyonu"]
  },

  {
    id: "locked_in_syndrome",
    name: "İçe Kilitlenme (Locked-in) Sendromu",
    category: "noroloji",
    difficulty: "expert",
    monitor: { hr: [95, 115], bp: [130, 150, 80, 95], spo2: [90, 93], rr: [14, 22], temp: [37.0, 37.8], ecg: "tachycardia" },
    abnormals: {
      mr_kranial: "Bilateral anterior pons (bazis pontis) seviyesinde yaygın akut enfarkt alanı (baziller arter oklüzyonu şüphesi)"
    },
    symptoms: {
      complaints: ["Hareket edememe", "Konuşamama", "Sadece gözlerini yukarı aşağı oynatabilme"],
      story: "Yoğun bakımda baziler arter tıkanıklığı nedeniyle izlenen hasta, bilinci açık olmasına rağmen vücudunu hiç hareket ettirememe ve konuşamama şikayetiyle değerlendirildi. Hastanın çevresindekileri anladığı ancak sadece gözlerini yukarı-aşağı hareket ettirerek yanıt verebildiği fark edildi.",
      pmh: ["Ateroskleroz", "Hipertansiyon", "Atriyal Fibrilasyon"],
      meds: ["Metoprolol 50mg 1x1", "Warfarin 5mg 1x1 (düzensiz)"],
      fm: "Kuadripleji mevcut, derin tendon refleksleri hiperaktif, bilateral Babinski pozitif. Hastanın konuşması, yutması ve horizontal göz hareketleri tamamen kaybolmuş. Bilinç açık (alert), sözel komutları anlıyor ve vertikal göz hareketleri ve göz kırpma ile iletişim kurabiliyor. Ağrı ve dokunma duyusu korunmuştur."
    },
    requiredTests: ["mr_kranial", "ekg"],
    contraindicated: ["lomber_ponksiyon"],
    treatments: [
      "Yoğun Bakım Yatışı ve solunum/havayolu desteği (Trakeostomi gerekebilir)",
      "Erken dönemde acil endovasküler trombektomi (baziler arter açılması için)",
      "Aspirasyon önlemleri, DVT profilaksisi (LMWH)",
      "İletişim panoları ve göz takip cihazları ile rehabilitasyon"
    ],
    consultations: ["Yoğun Bakım Konsültasyonu", "Nöroloji Konsültasyonu", "Fizik Tedavi ve Rehabilitasyon Konsültasyonu"]
  },

  {
    id: "parkinsons_disease",
    name: "Parkinson Hastalığı",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [110, 130, 70, 80], spo2: [96, 98], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      mr_kranial: "Yaşa göre normal beyin parankim bulguları, sekonder parkinsonizme neden olacak hidrosefali veya kitle izlenmedi"
    },
    symptoms: {
      complaints: ["Ellerde titreme (istirahat halinde)", "Hareketlerde yavaşlama", "Yürürken öne eğilme", "Küçük adımlarla yürüme"],
      story: "70 yaşındaki erkek hasta, son 1 yıldır sağ elinde başlayan ve giderek belirginleşen, dinlenirken ortaya çıkan titreme, yavaş hareket etme ve dengesizlik şikayetleriyle başvurdu. Eşi hastanın düğmelerini iliklerken çok zorlandığını ve yüz ifadesinin donuklaştığını belirtiyor.",
      pmh: ["Hipertansiyon (5 yıl)"],
      meds: ["Amlodipin 5mg 1x1"],
      fm: "Genel durum iyi. Yüzde donuk ifade (maske yüz), göz kırpma sıklığı azalmış. İstirahatte sağ elinde belirgin 'para sayar' tarzda kaba tremor mevcut. Pasif hareketlerde bilateral üst ekstremitede 'dişli çark' tarzında rijidite (direnç) saptandı. Yürüyüşü öne eğik, kolları salınım yapmıyor ve küçük adımlarla (festine yürüyüş)."
    },
    requiredTests: ["mr_kranial"],
    contraindicated: ["metoklopramid"],
    treatments: [
      "Levodopa + Karbidopa (125mg 3x1) tedavisi başlanması",
      "Dopamin Agonisti (Pramipeksol) eklenmesi",
      "Fizik tedavi ve egzersiz programı"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

  {
    id: "multiple_sclerosis",
    name: "Multiple Skleroz (Atak-Düzelme Tipi)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [115, 130, 75, 85], spo2: [97, 99], rr: [14, 18], temp: [36.3, 36.9], ecg: "normal" },
    abnormals: {
      mr_kranial: "Periventriküler ak maddede Dawson parmakları deseninde multipl demiyelinizan plaklar",
      bos_analizi: "Oligoklonal bant (OKB) pozitif, IgG indeksi yüksek"
    },
    symptoms: {
      complaints: ["Sağ gözde ani görme kaybı", "Göz hareketleriyle ağrı", "Bacaklarda uyuşma ve halsizlik", "Boyun büküldüğünde sırta yayılan elektriklenme"],
      story: "32 yaşındaki kadın hasta, 3 gün önce sağ gözünde başlayan görme kaybı veya bulanıklığı, göz hareketleriyle ağrı ve bacaklarda uyuşma şikayetiyle başvurdu. Kafasını öne eğdiğinde sırtından aşağıya doğru elektrik çarpması gibi bir his yayıldığını (Lhermitte belirtisi) belirtiyor.",
      pmh: ["Otoimmün tiroidit (Graves/Hashimoto)"],
      meds: ["Levotiroksin 75mcg 1x1"],
      fm: "Bilinç açık. Sağ gözde görme keskinliği 1/10, direkt ışık refleksi zayıf (Afferent Pupiller Defekt / Marcus Gunn pupili). Fundoskopide optik disk sınırları silik (akut optik nevrit). Alt ekstremitelerde derin tendon refleksleri (DTR) hiperaktif, bilateral Babinski pozitif, vibrasyon duyusu azalmış."
    },
    requiredTests: ["mr_kranial", "bos_analizi"],
    contraindicated: ["kontrastli_bt"],
    treatments: [
      "Atak tedavisi: IV Metilprednizolon (Pulse steroid) 1000mg/gün (3-5 gün)",
      "Gastroproteksiyon (Pantoprazol 40mg IV)",
      "Atak sonrası proflaktik immunmodülatör (Beta-İnterferon veya Glatiramer Asetat) planlanması"
    ],
    consultations: ["Nöroloji Polikliniği", "Göz Hastalıkları Konsültasyonu"]
  },

  {
    id: "guillain_barre",
    name: "Guillain-Barré Sendromu",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [100, 115], bp: [140, 160, 90, 100], spo2: [91, 94], rr: [22, 26], temp: [36.5, 37.1], ecg: "tachycardia" },
    abnormals: {
      bos_analizi: "Protein miktarı belirgin yüksek (120 mg/dL), hücre sayısı normal (Albüminsitoloik disosiasyon)",
      akg_po2: 72,
      akg_pco2: 45,
      akg_ph: 7.34
    },
    symptoms: {
      complaints: ["Ayaklardan başlayıp yukarı çıkan felç", "Yürüyememe", "Derin reflekslerin kaybı", "Nefes darlığı"],
      story: "Hasta, yaklaşık 2 hafta önce geçirdiği ishalli gastroenterit sonrası, 3 gün önce ayak tabanlarında uyuşma ve bacaklarında halsizlik başladığını, bugün ise bacaklarını hiç kaldıramadığını ve kollarına da yayılan bir kuvvetsizlik olduğunu belirterek başvurdu. Son birkaç saattir nefes almakta zorlanıyor.",
      pmh: ["Geçirilmiş Gastroenterit öyküsü (15 gün önce, Campylobacter şüphesi)"],
      meds: ["Yok"],
      fm: "Genel durum orta, takipneik, yardımcı solunum kasları aktif. Alt ekstremitelerde motor güç 1/5 (flaks), üst ekstremitelerde motor güç 3/5. Patella ve Aşil refleksleri alınamadı (Arefleksi). Duyu muayenesinde eldiven-çorap tarzında hafif hipoestezi mevcut."
    },
    requiredTests: ["bos_analizi", "arter_kan_gazi"],
    contraindicated: ["sistemik_steroid"],
    treatments: [
      "Yoğun Bakım Yatışı ve solunum fonksiyonlarının yakın takibi (FVC takibi)",
      "IVIG (İntravenöz İmmünoglobulin) 0.4g/kg/gün (5 gün)",
      "Alternatif olarak Plazmaferez",
      "DVT profilaksisi ve fizik tedavi"
    ],
    consultations: ["Nöroloji Konsültasyonu", "Anestezi ve Reanimasyon (Yoğun Bakım) Konsültasyonu"]
  },

  {
    id: "myasthenia_gravis_chronic",
    name: "Miyasteni Gravis (Kronik Jeneralize)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [96, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      mr_kranial: "Normal beyin bulguları",
      bt_toraks: "Timus hiperplazisi veya timoma ile uyumlu ön mediastinal kitle",
      eko: "Normal kardiyak bulgular"
    },
    symptoms: {
      complaints: ["Göz kapağında düşüklük", "Çift görme", "Akşama doğru artan halsizlik", "Çiğneme güçlüğü"],
      story: "Hasta yaklaşık 3 aydır devam eden, sabahları uyandığında normal olan ancak günün ilerleyen saatlerinde, özellikle iş yaptıktan sonra belirginleşen göz kapaklarında düşme, çift görme, konuşurken sesinde kısılma ve çiğnerken çenesinde yorulma şikayetleriyle başvurdu. İstirahat ettiğinde şikayetlerinin azaldığını belirtiyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durumu iyi. Bilateral pitoz mevcut (yukarı bakış testi ile pitozun derinleştiği görüldü). Bilateral horizontal bakışta diplopi mevcut, pupiller intakt. Konuşması disfonik/nazone. Motor güç muayenesinde tekrarlayan kas gücü testi ile proksimal kas gruplarında güç kaybı (yorulabilirlik) saptandı."
    },
    requiredTests: ["bt_toraks", "mr_kranial"],
    contraindicated: ["aminoglikozitler"],
    treatments: [
      "Asetilkolinesteraz inhibitörü (Piridostigmin Bromür / Mestinon 60mg 3x1)",
      "İmmünosupresif tedavi (Azatioprin)",
      "Mediastinal kitle varlığında Timektomi ameliyatı planlanması"
    ],
    consultations: ["Nöroloji Polikliniği", "Göğüs Cerrahisi Konsültasyonu (Timektomi için)"]
  },

  {
    id: "als_disease",
    name: "Amyotrofık Lateral Skleroz (ALS)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [115, 130, 70, 80], spo2: [94, 96], rr: [18, 22], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      mr_kranial: "Kortikospinal traktus boyunca T2 hiperintensitesi bulgusu",
      akg_po2: 80,
      akg_pco2: 42,
      akg_ph: 7.38
    },
    symptoms: {
      complaints: ["Ellerde ve bacaklarda kas erimesi", "Kaslarda kıpırtılar", "Yutma ve konuşma güçlüğü", "Sık düşme"],
      story: "55 yaşındaki erkek hasta, son 6 aydır sağ el başparmağında güçsüzlük, ince işleri yapamama, kollarında ve bacaklarında kas erimesi ile seyiren güçsüzlük şikayetiyle başvurdu. Son zamanlarda konuşurken peltekleştiğini ve kaslarında istemsiz kıpırtılar fark ettiğini belirtiyor. Duyusal kaybı veya idrar kaçırması yok.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Bilateral tenar ve hipotenar kaslarda atrofi (erime), kollar ve omuz kuşağında yaygın fasikülasyonlar (kıpırtılar) izlendi. Alt ekstremitelerde spastisite mevcut, derin tendon refleksleri (DTR) hiperaktif, patella klonusu (+) ve bilateral Babinski pozitif (Üst ve alt motor nöron bulguları bir arada). Duyu muayenesi tamamen doğal."
    },
    requiredTests: ["mr_kranial", "arter_kan_gazi"],
    contraindicated: ["sistemik_steroid"],
    treatments: [
      "Nöroprotektif tedavi (Riluzol 50mg 2x1)",
      "Solunum kasları için Non-invaziv Mekanik Ventilasyon (BIPAP) planlanması",
      "Semptomatik tedavi (Kas gevşetici, sialore/tükürük artışı için antikolinerjik)"
    ],
    consultations: ["Nöroloji Polikliniği", "Fizik Treat ve Rehabilitasyon Polikliniği"]
  },

  {
    id: "alzheimers_disease",
    name: "Alzheimer Hastalığı (Demans)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [65, 80], bp: [120, 135, 75, 85], spo2: [96, 98], rr: [14, 18], temp: [36.4, 36.9], ecg: "normal" },
    abnormals: {
      mr_kranial: "Bilateral temporal loblarda ve özellikle hipokampuslarda belirgin atrofi bulgusu"
    },
    symptoms: {
      complaints: ["Yakın geçmişi unutma", "Yolları karıştırma", "Eşyaların yerini kaybetme", "Kelime bulmada zorluk"],
      story: "75 yaşındaki kadın hasta, son 2 yıldır yavaş yavaş başlayan, son aylarda belirginleşen unutkanlık şikayetiyle kızı tarafından getirildi. Hasta sabah ne yediğini unutuyor, eski tanıdıklarını hatırlıyor ancak yakın zamanda anlatılanları unutuyor. Birkaç kez pazardan dönerken yolu karıştırmış ve evde eşyalarını saklayıp bulamadığında başkalarını suçlamaya başlamış.",
      pmh: ["Tip 2 Diyabet (10 yıl)", "Hipertansiyon (5 yıl)"],
      meds: ["Metformin 1000mg 2x1", "Lisinopril 10mg 1x1"],
      fm: "Kooperasyonu kısıtlı. Yapılan Standardize Mini Mental Test (SMMT) skoru 18/30 saptandı (orta düzey kognitif yıkım). Motor ve duyu defisiti saptanmadı. Yürüyüşü normal, frontal serbestleşme refleksleri (palmomental, snout) pozitif."
    },
    requiredTests: ["mr_kranial"],
    contraindicated: ["trankilizan_doz_klorpromazin"],
    treatments: [
      "Asetilkolinesteraz İnhibitörü (Donepezil 5mg 1x1, kademeli artış)",
      "NMDA Reseptör Antagonisti (Memantin 10mg 1x1)",
      "Davranışsal bozukluklar için destek ve kognitif egzersizler"
    ],
    consultations: ["Nöroloji Polikliniği", "Psikiyatri Polikliniği (Gerekirse)"]
  },

  {
    id: "panic_disorder",
    name: "Panik Bozukluk (Agorafobili)",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: { hr: [115, 130], bp: [135, 155, 85, 95], spo2: [98, 100], rr: [22, 28], temp: [36.5, 37.1], ecg: "tachycardia" },
    abnormals: {
      ekg: "Sinüs taşikardisi, iskemi veya aritmi saptanmadı",
      troponin_i: 0.01,
      potasyum: 3.9
    },
    symptoms: {
      complaints: ["Kalp çarpıntısı ve göğüste sıkışma", "Nefes alamama (boğulma hissi)", "Ölüm veya delirme korkusu", "Kalabalık yerlere girememe"],
      story: "Hasta yaklaşık 30 dakika önce metroda giderken aniden başlayan, göğsünde baskı, kalp çarpıntısı, nefes darlığı, ellerinde titreme ve terleme ile birlikte 'kalp krizi geçiriyorum, öleceğim' şeklinde yoğun bir ölüm korkusuyla acil servise başvurdu. Son 2 aydır benzer atakları haftada birkaç kez geçirdiğini ve bu yüzden tek başına dışarı çıkamadığını söylüyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durum orta, aşırı endişeli ve ajite görünümde. Kalp sesleri ritmik, taşikardik. Akciğer sesleri doğal, solunum hızı artmış (hiperventilasyon). Nörolojik muayene normal."
    },
    requiredTests: ["ekg", "troponin_i"],
    contraindicated: ["koroner_anjiografi"],
    treatments: [
      "Akut atakta anksiyete yönetimi ve solunum egzersizleri (torbaya soluma)",
      "Gerekirse kısa süreli düşük doz Benzodiazepin (Alprazolam 0.25mg) uygulaması",
      "Uzun dönemde SSRI (Sertralin veya Paroksetin) başlanması ve Bilişsel Davranışçı Terapi"
    ],
    consultations: ["Psikiyatri Polikliniği"]
  },

  {
    id: "pemphigus_vulgaris",
    name: "Pemfigus Vulgaris",
    category: "dermatoloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [37.0, 37.8], ecg: "normal" },
    abnormals: {
      wbc: 11.2,
      crp: 24,
      biyopsi_deri: "İntraepidermal suprabazal akantolitik bül, dökülen hücrelerde mezar taşı görünümü. Direkt immünfloresanda hücre çeperlerinde bal ağı görünümünde IgG ve C3 birikimi"
    },
    symptoms: {
      complaints: ["Ağızda geçmeyen yaralar", "Vücutta kolayca patlayan su kabarcıkları", "Yara yerlerinde ağrı ve sızlama"],
      story: "45 yaşındaki hasta, son 3 aydır ağız içinde yemek yemeyi zorlaştıran acılı yaralar, son 2 haftadır ise göğsünde, sırtında ve saçlı derisinde aniden çıkan, dokunmakla kolayca patlayan içi su dolu kabarcıklar (büller) şikayetiyle başvurdu. Su kabarcıkları patlayınca geride çok ağrılı yaralar kalıyormuş.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Ağız içi mukozasında yaygın, ağrılı aftöz erozyonlar mevcut. Göğüs ve sırt bölgesinde gevşek, ince duvarlı, berrak sıvılı büller ve bunların patlamasıyla oluşmuş geniş erozyonlar (yara alanları) izlendi. Büllerin üzerindeki deri hafifçe sürtüldüğünde kolayca soyuldu (Nikolsky belirtisi pozitif)."
    },
    requiredTests: ["biyopsi_deri", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Sistemik Yüksek Doz Kortikosteroid tedavisi (Prednizolon 1-1.5 mg/kg/gün)",
      "İmmünosupresif ajan (Azatioprin veya Mikofenolat Mofetil) eklenmesi",
      "Ağız içi lezyonlar için anestezikli/steroidli gargara ve lokal pansumanlar",
      "Elektrolit ve glukoz takibi, enfeksiyon profilaksisi"
    ],
    consultations: ["Dermatoloji Konsültasyonu"]
  },

  {
    id: "bullous_pemphigoid",
    name: "Büllöz Pemfigoid",
    category: "dermatoloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [96, 98], rr: [14, 18], temp: [36.6, 37.2], ecg: "normal" },
    abnormals: {
      wbc: 9.8,
      crp: 12,
      biyopsi_deri: "Subepidermal bül oluşumu, bül içinde bol miktarda eozinofil. Direkt immünfloresanda dermoepidermal bileşkede lineer tarzda IgG ve C3 birikimi"
    },
    symptoms: {
      complaints: ["Vücutta kaşıntılı sert su kabarcıkları", "Kabarcıkların patlamaması", "Geçmeyen kaşıntı"],
      story: "75 yaşındaki erkek hasta, son 1 aydır tüm vücudunda, özellikle karın alt bölgesi ve bacaklarında başlayan şiddetli kaşıntı ve ardından çıkan, günlerce patlamadan kalan, gergin içi su dolu sert kabarcıklar şikayetiyle başvurdu. Ağız içinde yara olmadığını belirtiyor.",
      pmh: ["Parkinson Hastalığı (5 yıl)"],
      meds: ["Levodopa + Karbidopa 125mg 3x1"],
      fm: "Genel durumu iyi. Alt batın, uyluklar ve kolların fleksör yüzlerinde ürtiker benzeri kızarık zemin üzerinde yerleşmiş, çapları 1-3 cm arasında değişen gergin büller (su kabarcıkları) izlendi. Nikolsky belirtisi negatif (bül çevresine basmakla deri soyulmuyor). Ağız içi muayenesi doğal."
    },
    requiredTests: ["biyopsi_deri", "wbc"],
    contraindicated: [],
    treatments: [
      "Güçlü topikal kortikosteroid tedavisi (Klobetazol propionat %0.05 krem, tüm vücuda)",
      "Orta/ağır vakalarda sistemik steroid tedavisi (Prednizolon 0.5 mg/kg/gün)",
      "Destekleyici antiprüritik (kaşıntı giderici antihistaminik) tedavi"
    ],
    consultations: ["Dermatoloji Konsültasyonu"]
  },

  {
    id: "scabies",
    name: "Uyuz (Skabies) Enfeksiyonu",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Kazıntı örneğinde mikroskobik incelemede Sarcoptes scabiei akarı, yumurtaları veya dışkısı (skibala) saptandı"
    },
    symptoms: {
      complaints: ["Geceleri artan şiddetli kaşıntı", "Parmak aralarında küçük sivilceler", "Aile bireylerinde de kaşıntı olması"],
      story: "Hasta yaklaşık 3 haftadır devam eden, özellikle geceleri yatağa girince ve sıcak banyo sonrası tahammül edilemez derecede artan tüm vücut kaşıntısı şikayetiyle başvurdu. Son günlerde aynı evde yaşadığı eşi ve çocuğunda da benzer kaşıntıların başladığını belirtiyor.",
      pmh: ["Yok"],
      meds: ["Çeşitli nemlendiriciler, antihistaminik haplar (fayda etmemiş)"],
      fm: "Bilateral el parmak aralarında, el bileklerinde, koltuk altlarında ve göbek çevresinde yer yer çizgisel döküntüler (tüneller / sillonlar) ve üzerleri kabuklu küçük papüller izlendi. Genital bölgede kaşıntılı nodüller mevcut. Sekonder enfeksiyona bağlı ekskoriasyonlar (kaşıntı izleri) mevcut."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Topikal %5 Permetrin krem (boyundan aşağı tüm vücuda sürülür, 8-12 saat sonra yıkanır)",
      "Aynı evde yaşayan tüm aile bireylerinin eş zamanlı olarak tedavi edilmesi",
      "Kıyafet ve çarşafların 60 derecede yıkanması ve ütülenmesi",
      "Kaşıntı için topikal nemlendiriciler ve oral antihistaminiklerin reçete edilmesi"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "behcet_disease",
    name: "Behçet Hastalığı",
    category: "dermatoloji",
    difficulty: "medium",
    monitor: { hr: [75, 88], bp: [110, 125, 70, 80], spo2: [97, 99], rr: [14, 18], temp: [36.5, 37.2], ecg: "normal" },
    abnormals: {
      crp: 38,
      wbc: 8.9,
      biyopsi_deri: "Paterji reaksiyonu pozitif (steril püstül oluşumu), biyopside lökositoklastik vaskülit veya perivasküler lenfositik infiltrasyon"
    },
    symptoms: {
      complaints: ["Ağızda sık sık çıkan ağrılı yaralar", "Genital bölgede yara", "Gözlerde kızarıklık ve bulanık görme", "Bacaklarda ağrılı kızarık şişlikler"],
      story: "30 yaşındaki erkek hasta, son 5 yıldır yılda en az 5-6 kez tekrarlayan, ağız içinde çıkan ve yemek yemeyi zorlaştıasitli yiyeceklerin kısıtlanması)",
      pmh: ["Tekrarlayan ağız aftları öyküsü"],
      meds: ["Lokal gargara ve kremler (geçici rahatlatıcı)"],
      fm: "Dil ve yanak mukozasında kenarları kırmızı, ortası sarı-gri renkli çok sayıda ağrılı yuvarlak aftöz ülserler saptandı. Skrotumda (genital bölge) skar bırakmış ülser izi mevcut. Her iki bacağın ön yüzünde basmakla ağrılı, sert, kızarık nodüller (eritema nodozum) izlendi. Ön kola steril iğne batırılarak yapılan paterji testi 48 saat sonra pozitif (püstül gelişimi)."
    },
    requiredTests: ["crp", "biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Tekrarlayan oral/genital lezyonlar için Kolşisin 0.5mg 2x1 başlanması",
      "Göz tutulumu (aktif üveit) için Sistemik Kortikosteroid ve Azatioprin tedavisi",
      "Aftlar için lokal kortikosteroidli gargaralar",
      "Göz bulguları nedeniyle acil oftalmoloji takibi"
    ],
    consultations: ["Dermatoloji Polikliniği", "Göz Hastalıkları Konsültasyonu", "Romatoloji Polikliniği"]
  },

  {
    id: "acute_otitis_media",
    name: "Akut Otitis Media (Kulak İltihabı)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: { hr: [85, 100], bp: [110, 125, 70, 80], spo2: [98, 100], rr: [16, 20], temp: [37.8, 38.4], ecg: "normal" },
    abnormals: {
      wbc: 12.8,
      crp: 45,
      otoskopi: "Sağ kulak zarı (timpanik membran) hiperemik (kızarık), bombeleşmiş, ışık üçgeni kaybolmuş ve membran hareketliliği azalmış."
    },
    symptoms: {
      complaints: ["Sağ kulakta şiddetli zonklayıcı ağrı", "Ateş ve halsizlik", "Kulağında tıkanıklık ve işitme azlığı"],
      story: "8 yaşındaki erkek hasta, dün başlayan çok şiddetli sağ kulak ağrısı ve yüksek ateş şikayetiyle annesi tarafından getirildi. Hastanın 5 gün önce burun akıntısı, öksürük ve boğaz ağrısı (üst solunum yolu enfeksiyonu) geçirdiği belirtildi.",
      pmh: ["Tekrarlayan otit öyküsü"],
      meds: ["Parasetamol şurup (ağrıyı tam kesmemiş)"],
      fm: "Genel durum orta, subfebril ateş mevcut. Sağ kulak kepçesi çekildiğinde ağrı yok (dış kulak yolu sağlam). Otoskopik muayenede sağ timpanik membranda belirgin bombelik ve kızarıklık saptandı. Sol kulak zarı doğal."
    },
    requiredTests: ["otoskopi", "wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Sistemik Antibiyotik: Amoksisilin-Klavulanik Asit (875/125mg 2x1 veya çocuk dozunda süspansiyon)",
      "Semptomatik Analjezik ve Antipiretik: İbuprofen 400mg PO 3x1",
      "Östaki disfonksiyonunu çözmek için nazal dekonjestan sprey (Oksimetazolin)"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği", "Çocuk Sağlığı ve Hastalıkları Polikliniği"]
  },

  {
    id: "macular_degeneration",
    name: "Yaşa Bağlı Makula Dejenerasyonu (Sarı Nokta)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [65, 80], bp: [125, 140, 80, 90], spo2: [96, 98], rr: [14, 18], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      oftalmoskopi: "Bilateral makulada sarı renkli drusen birikimleri, kuru tip makula dejenerasyonu bulguları, sol makulada subretinal hemoraji ve sıvı sızıntısı (yaş tip şüphesi).",
      goz_ici_basinc_olcumu: "Bilateral göz içi basıncı: 16 mmHg (Normal)"
    },
    symptoms: {
      complaints: ["Baktığı yerin ortasını karanlık görme", "Düz çizgileri kırık veya eğri görme (metamorfopsi)", "Okuma güçlüğü"],
      story: "78 yaşındaki kadın hasta, son 6 aydır sol gözünde daha belirgin olmak üzere baktığı cisimlerin tam ortasını göremediğini, okurken kelimelerin birbirine karıştığını ve düz çizgileri (örneğin kapı kenarını veya elektrik direğini) dalgalı ve eğri gördüğünü (metamorfopsi) belirterek başvurdu.",
      pmh: ["Hipertansiyon (20 yıl)", "Aktif sigara kullanımı (30-yıl)"],
      meds: ["Lisinopril 20mg 1x1"],
      fm: "Bilinç açık, kooperasyonu tam. Amsler Grid kartı gösterildiğinde sol gözüyle çizgileri dalgalı ve ortadaki noktayı silik gördüğünü ifade etti. Görme keskinliği sağda 6/10, solda 2/10 saptandı. Göz diplerinde sol makulada eksuda ve hemoraji izlendi."
    },
    requiredTests: ["oftalmoskopi", "goz_ici_basinc_olcumu"],
    contraindicated: [],
    treatments: [
      "Göz Hastalıkları kliniğinde Optik Koherens Tomografi (OCT) ve Fundus Florasein Anjiyografisi (FFA) yapılması",
      "Yaş tip makula dejenerasyonu için intraoküler anti-VEGF enjeksiyonu (Ranibizumab veya Aflibersept)",
      "Makula destek vitaminleri (AREDS-2 formülü: Lutein, Zeaksantin, Çinko, Vitamin C, E)"
    ],
    consultations: ["Göz Hastalıkları Polikliniği"]
  },

  {
    id: "urticaria_angioedema",
    name: "Akut Ürtiker ve Anjioödem",
    category: "dermatoloji",
    difficulty: "medium",
    monitor: { hr: [95, 110], bp: [120, 140, 75, 90], spo2: [95, 98], rr: [18, 22], temp: [36.7, 37.3], ecg: "normal" },
    abnormals: {
      wbc: 9.6,
      crp: 18,
      triptaz: 15.5
    },
    symptoms: {
      complaints: ["Tüm vücutta kaşıntılı kızarıklık ve kabarıklık", "Dudaklarda ve göz kapaklarında şişlik", "Nefes darlığı hissi"],
      story: "Hasta, yaklaşık 4 saat önce kabuklu deniz ürünü yedikten sonra aniden tüm vücudunda kaşıntılı, kırmızı kabarıklıklar (kurdeşen) çıkmaya başladığını ve son 1 saattir dudaklarının ve göz kapaklarının şiştiğini belirterek acil servise başvurdu. Takibinde histamin aracılı (Tip 1 hipersensitivite) reaksiyon düşünülmektedir.",
      pmh: ["Alerjik Atopi öyküsü"],
      meds: ["Yok"],
      fm: "Genel durum iyi-orta, endişeli. Gövdede, kollarda ve bacaklarda basmakla solan, kaşıntılı, ödemli eritemli plaklar (ürtiker plakları) izlendi. Bilateral göz kapaklarında ve alt dudakta belirgin yumuşak doku ödemi (anjioödem) mevcut. Akciğer dinlemesinde hafif wheezing mevcut. USG ile submandibuler bölgeden yapılan incelemede hafif dil kökü ödemi saptandı."
    },
    requiredTests: ["wbc", "crp", "ekg"],
    contraindicated: ["aspirin"],
    treatments: [
      "IM Adrenalin (Epinefrin 1/1000, 0.3-0.5 mg, uyluk dış yan yüzüne) (Anjiyoödem ve solunum sıkıntısı durumunda ilk tercih)",
      "Sistemik H1 Antihistaminik (IV Feniramin maleat) + H2 Antihistaminik (IV Ranitidin)",
      "Sistemik Kortikosteroid (IV Metilprednizolon 1 mg/kg veya Deksametazon)",
      "USG veya fiberoptik laringoskopi ile havayolu/larenks ödeminin değerlendirilmesi ve yakın izlem"
    ],
    consultations: ["Dermatoloji Konsültasyonu", "KBB Konsültasyonu (Hava yolu takibi için)"]
  },

  {
    id: "allergic_contact_dermatitis",
    name: "Alerjik Kontakt Dermatit",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      wbc: 7.2,
      crp: 4
    },
    symptoms: {
      complaints: ["Göbek çevresinde aşırı kaşıntılı sulantılı yara", "Kemer tokasının değdiği yerde kızarıklık"],
      story: "24 yaşındaki kadın hasta, son 1 haftadır göbek deliği çevresinde başlayan ve giderek şiddetlenen kaşıntı, kızarıklık ve küçük su kabarcıkları şikayetiyle başvurdu. Hasta yakın zamanda metal tokalı yeni bir kemer kullanmaya başladığını ve metalin değdiği yerde döküntünün çıktığını belirtiyor.",
      pmh: ["İmitasyon küpe alerjisi öyküsü (kulakta şişme)"],
      meds: ["Yok"],
      fm: "Bilinç açık, genel durum iyi. Göbek deliğinin hemen altındaki alanda, kemer tokasının yerleşimine uyan, net sınırlı, eritemli, ödemli, üzerinde minik veziküller (su kabarcıkları) ogün gösteren egzamatöz plak izlendi."
    },
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: [
      "Alerjen (nikel) içeren metal kemer tokası, takı ve aksesuarların temasının kesilmesi",
      "Topikal orta etkili kortikosteroid krem (Metilprednizolon aseponat, günde 1 kez, 5-7 gün)",
      "Sulantılı dönemde ıslak kompres (alüminyum subasetat solüsyonu ile) uygulanması"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "sjs_ten",
    name: "Stevens-Johnson Sendromu (SJS) / TEN",
    category: "dermatoloji",
    difficulty: "hard",
    monitor: { hr: [110, 125], bp: [90, 105, 55, 65], spo2: [92, 95], rr: [20, 24], temp: [38.2, 39.0], ecg: "normal" },
    abnormals: {
      wbc: 14.5,
      crp: 85,
      biyopsi_deri: "Epidermiste tam kat nekroz (hücre ölümü), dermoepidermal bileşkede ayrışma (subepidermal bül)."
    },
    symptoms: {
      complaints: ["Tüm vücutta derinin soyulması", "Ağız içinde, gözlerde ve genital bölgede çok acılı yaralar", "Yüksek ateş ve halsizlik"],
      story: "Hasta, yaklaşık 10 gün önce epilepsi nedeniyle başlanan antiepileptik ilaç (Karbamazepin) sonrasında, 3 gün önce yüksek ateş, boğaz ağrısı ve halsizlik başladığını, dün ise tüm vücudunda ağrılı, ortası koyu renkli döküntüler çıktığını ve bugün bu döküntülerin su toplayarak soyulmaya başladığını belirterek acil servise başvurdu.",
      pmh: ["Epilepsi (yeni tanı)"],
      meds: ["Karbamazepin 200mg 2x1 (10 gündür)"],
      fm: "Genel durum orta-kötü, toksik görünümde, yüksek ateş ve taşikardi mevcut. Dudaklarda kalın hemorajik krutlar (kanlı kabuklar), ağız içi mukozasında yaygın ağrılı erozyonlar mevcut. Gövdede ve ekstremitelerde yaygın hedef tahtası benzeri (hedefsi) morumsu maküller ve üzerinde epidermisin tabaka halinde soyulduğu büller izlendi. Vücut yüzeyinin yaklaşık %15'inde soyulma mevcut (SJS-TEN Overlap). Nikolsky belirtisi pozitif."
    },
    requiredTests: ["biyopsi_deri", "wbc", "crp"],
    contraindicated: ["karbamazepin"],
    treatments: [
      "Şüpheli ilacın (Karbamazepin) DERHAL kesilmesi",
      "Steril şartlarda yanık ünitesi veya yoğun bakıma yatış, sıvı-elektrolit resüsitasyonu",
      "Ağrı kontrolü (IV analjezikler), cildin steril vazelinli sargılarla pansumanı",
      "Enfeksiyon profilaksisi ve yakın hemodinamik izlem",
      "Sistemik IVIG tedavisi (1g/kg/gün, 3 gün boyunca, erken dönemde)"
    ],
    consultations: ["Dermatoloji Konsültasyonu", "Yoğun Bakım Konsültasyonu"]
  },

  {
    id: "pseudotumor_cerebri",
    name: "İdiopatik İntrakraniyal Hipertansiyon (Psödotümör Serebri)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [98, 100], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      mr_kranial: "Ventriküller normal veya küçük boyutta, boş sella (empty sella) görünümü, optik sinir kılıfında genişleme.",
      lomber_ponksiyon: "BOS açılış basıncı: 280 mmH2O (yüksek, normali <200 mmH2O), BOS biyokimyası ve hücre sayımı normal."
    },
    symptoms: {
      complaints: ["Şiddetli baş ağrısı", "Göz arkasında ağrı", "Göz kararması", "Kulaklarda çınlama (nabızla uyumlu)"],
      story: "28 yaşındaki obez kadın hasta, son 2 aydır sabahları daha şiddetli olan, öne eğilmekle veya öksürmekle artan jeneralize baş ağrısı, saniyeler süren geçici görme kararmaları ve kulaklarında uğultu/rüzgar sesi şikayetleriyle başvurdu.",
      pmh: ["Polikistik Over Sendromu", "Obezite"],
      meds: ["Oral kontraseptif hap"],
      fm: "Genel durum iyi. Bilateral papillödem saptandı (optik disk sınırları silik). Görme alanı muayenesinde kör nokta genişlemiş, hafif dışa bakış kısıtlılığı (6. kraniyal sinir parezi şüphesi) izlendi."
    },
    requiredTests: ["mr_kranial", "lomber_ponksiyon"],
    contraindicated: ["atropin_goz_damlasi"],
    treatments: [
      "Asetazolamid 250mg 3x1 oral",
      "Kilo verme / diyetisyen yönlendirmesi",
      "Görme kaybı ilerlerse optik sinir kılıf fenestrasyonu veya lumboperitoneal şant"
    ],
    consultations: ["Nöroloji Polikliniği", "Göz Hastalıkları Konsültasyonu"]
  },

  {
    id: "vascular_dementia",
    name: "Vasküler Demans (Binswanger Hastalığı)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [130, 150, 80, 95], spo2: [96, 98], rr: [14, 18], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      mr_kranial: "Periventriküler ak maddede yaygın T2/FLAIR hiperintensitesi (lökoaraiyozis), laküner enfarktlar ve kortikal atrofi."
    },
    symptoms: {
      complaints: ["Yavaş ilerleyen unutkanlık", "Yürümede yavaşlama ve küçük adımlar", "Kelimeleri hatırlayamama", "İdrar kaçırma"],
      story: "72 yaşındaki erkek hasta, son 1 yıldır basamaklı (adım adım) kötüleşen unutkanlık, yürümede yavaşlama, konuşurken kelime bulmada zorluk ve ani idrar kaçırma şikayetleriyle getirildi. Geçmişinde çok sayıda küçük felç (inme) öyküsü mevcut.",
      pmh: ["Hipertansiyon (20 yıl)", "Geçirilmiş Serebrovasküler Olay (SVO)"],
      meds: ["Amlodipin 10mg 1x1", "Aspirin 100mg 1x1"],
      fm: "Genel durum iyi. Psikomotor yavaşlama, reflekslerde bilateral asimetri, Babinski (+) sağda, piramidal yürüme (küçük adımlarla, spastik) ve emme (snout) refleksi pozitif."
    },
    requiredTests: ["mr_kranial"],
    contraindicated: [],
    treatments: [
      "Antiagregan tedavi (Aspirin 100mg 1x1)",
      "Kolinesteraz inhibitörü (Donepezil 5mg 1x1)",
      "Risk faktörlerinin (Tansiyon, lipid, diyabet) sıkı kontrolü"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

  {
    id: "huntington_chorea",
    name: "Huntington Hastalığı (Kore)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 99], rr: [14, 18], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {
      mr_kranial: "Bilateral kaudat çekirdeklerde belirgin atrofi ve frontal boynuzlarda genişleme.",
      genetik_analiz: "HTT geninde patolojik CAG üçlü nükleotid tekrar artışı (44 tekrar, pozitif)."
    },
    symptoms: {
      complaints: ["Kollarında ve bacaklarında istemsiz kıpırdanmalar", "Hırçınlık ve kişilik değişikliği", "Yürümede dengesizlik"],
      story: "42 yaşındaki erkek hasta, son 6 aydır kollarında ve bacaklarında istemsiz, düzensiz, hızlı kıpırdanmalar (dans eder gibi hareketler), çabuk sinirlenme, unutkanlık ve yürümede dengesizlik şikayetiyle getirildi. Babasının da benzer şikayetlerle 50'li yaşlarda vefat ettiği belirtildi.",
      pmh: ["Ailede kore öyküsü (baba)"],
      meds: ["Yok"],
      fm: "Gövde ve ekstremitelerde istemsiz koreiform (hızlı, amaçsız) hareketler izlendi. Demansif bulgular ve apati mevcut. Motor gücü tam, DTR'ler hiperaktif."
    },
    requiredTests: ["mr_kranial", "genetik_analiz"],
    contraindicated: [],
    treatments: [
      "Koreik hareketler için Dopamin depolarını boşaltan ilaç (Tetrabenazin 25mg 2x1)",
      "Atipik antipsikotik (Risperidon) eşlik eden psikiyatrik bulgular için",
      "Genetik danışmanlık verilmesi"
    ],
    consultations: ["Nöroloji Polikliniği", "Tıbbi Genetik Konsültasyonu"]
  },

  {
    id: "essential_tremor",
    name: "Esansiyel Tremor",
    category: "noroloji",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [115, 130, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      mr_kranial: "Normal beyin parankim bulguları",
      tsh: 1.2
    },
    symptoms: {
      complaints: ["Ellerde titreme (bir şey tutarken)", "Yazı yazmada zorluk", "Heyecanlanınca artan titreme"],
      story: "25 yaşındaki erkek hasta, lise yıllarından beri var olan, özellikle yazı yazarken, çay bardağı tutarken veya heyecanlandığında her iki elinde titreme şikayetiyle başvurdu. Az miktarda alkol aldığında titremesinin belirgin şekilde azaldığını ifade ediyor.",
      pmh: ["Ailede el titremesi öyküsü (anne)"],
      meds: ["Yok"],
      fm: "Eller öne uzatıldığında (postural) ve parmak-burun testinde (aksiyonel) bilateral simetrik, ince-orta genlikli postural-kinetik tremor saptandı. İstirahatte titreme saptanmadı. Rijidite veya bradikinezi yok (Parkinson dışlandı)."
    },
    requiredTests: ["mr_kranial", "tsh"],
    contraindicated: ["metoklopramid"],
    treatments: [
      "Beta-bloker tedavisi (Propranolol 40mg 1/2 veya 1 tablet)",
      "Gerekirse Primidon tedavisi",
      "Stres yönetimi ve kafein kısıtlaması"
    ],
    consultations: ["Nöroloji Polikliniği"]
  },

  {
    id: "wilson_disease",
    name: "Wilson Hastalığı (Hepatolentiküler Dejenerasyon)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [110, 125, 70, 80], spo2: [97, 99], rr: [16, 20], temp: [36.5, 37.1], ecg: "normal" },
    abnormals: {
      seruloplazmin: 8,
      alt_ast: 145,
      oftalmoskopi: "Bilateral kornea periferinde altın sarısı/kahverengi Kayser-Fleischer halkası pozitif."
    },
    symptoms: {
      complaints: ["Ellerde kanat çırpar tarzda titreme", "Konuşmada ve yazıda bozulma", "Yüzde anlamsız gülümseme / salya akma"],
      story: "18 yaşındaki genç hasta, son 3 aydır okul başarısında düşüş, el yazısında bozulma, salya akıtma, ellerde kanat çırpar tarzda titreme ve halsizlik şikayetiyle getirildi. Muayenesinde göz çevresinde renk değişimi fark edildi.",
      pmh: ["Anne-baba akraba evliliği"],
      meds: ["Yok"],
      fm: "Genel durum orta. Kanat çırpar tarzda (wing-beating) tremor, rijidite ve bradikinezi mevcut. Disartri ve distonik postürler izlendi. Göz biyomikroskopik muayenesinde korneada yeşil-kahverengi Kayser-Fleischer halkası saptandı. Karında hafif splenomegali."
    },
    requiredTests: ["seruloplazmin", "oftalmoskopi", "alt_ast"],
    contraindicated: [],
    treatments: [
      "Bakır şelatörü (D-Penisilamin 250mg 4x1 başlanması)",
      "Çinko asetat tedavisi (bakır emilimini engellemek için)",
      "Düşük bakırlı diyet (organ eti, çikolata, kabuklu deniz ürünleri yasak)"
    ],
    consultations: ["Nöroloji Polikliniği", "Gastroenteroloji / Hepatoloji Polikliniği"]
  },

  {
    id: "syringomyelia",
    name: "Siringomiyeli (Pelerin Tarzı Duyu Kaybı)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [115, 130, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      mr_kranial: "Servikal omurilik merkezinde geniş siringomiyeli kavitesi (sirenks) ve Chiari Tip 1 malformasyonu (serebellar tonsil herniasyonu)."
    },
    symptoms: {
      complaints: ["Omuzlarda ve sırtta hissizlik", "Kollarında ağrı ve ısıyı hissedememe", "Elde fark edilmeyen yanık yaraları"],
      story: "35 yaşındaki erkek hasta, son 6 aydır omuzlarında, sırtında ve kollarında hissizlik, sıcak suyla banyo yaparken sıcaklığı hissedememe ve elinde istemsiz yanık yaraları oluşması şikayetiyle başvurdu. Dokunma duyusunun normal olduğunu ancak ağrı ve ısıyı hissetmediğini söylüyor.",
      pmh: ["Geçirilmiş boyun travması"],
      meds: ["Yok"],
      fm: "Bilateral C4-T2 dermatomlarında (omuzlar ve kollar, pelerin tarzında) ağrı-ısı duyusu kaybı mevcut iken, dokunma ve vibrasyon duyusu korunmuştur (disosiye duyu kaybı). Sağ el intrensek kaslarında hafif atrofi (erime) ve DTR'lerde azalma."
    },
    requiredTests: ["mr_kranial"],
    contraindicated: ["lomber_ponksiyon"],
    treatments: [
      "Nöropatik ağrı için Gabapentin tedavisi başlanması",
      "Chiari malformasyonu varlığında kraniyoservikal dekompresyon ameliyatı için yönlendirme",
      "Termal/fiziksel yaralanmalara karşı koruma eğitimi"
    ],
    consultations: ["Nöroloji Polikliniği", "Beyin ve Sinir Cerrahisi Konsültasyonu"]
  },

  {
    id: "myotonic_dystrophy",
    name: "Miyotonik Distrofi (Steinert Hastalığı)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [96, 98], rr: [16, 20], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      eeg: "Normal beyin dalgaları, miyotoniye bağlı EMG'de dalış bombası (dive-bomber) deseni."
    },
    symptoms: {
      complaints: ["El sıkıştıktan sonra parmakları açamama", "Yüz kaslarında zayıflık", "Halsizlik"],
      story: "30 yaşındaki erkek hasta, kapıyı açtıktan veya birinin elini sıktıktan sonra elini hemen gevşetememe (kas gevşeme güçlüğü), yüzde zayıflık ve erken saç dökülmesi şikayetleriyle başvurdu.",
      pmh: ["Ailede kas güçsüzlüğü öyküsü"],
      meds: ["Yok"],
      fm: "El sıkışma sonrası el parmaklarının gevşemesinde belirgin gecikme izlendi (kavrama miyotonisi). Yüz kaslarında bilateral zayıflık, pitoz, temporalis ve masseter kaslarında erime (balta yüz görünümü), frontal kellik ve jinekomasti saptandı. Katarakt izlendi."
    },
    requiredTests: ["eeg", "mr_kranial"],
    contraindicated: [],
    treatments: [
      "Miyotonik bulgular için Meksiletin (Sodyum kanal blokörü) tedavisi",
      "Kardiyak iletim blokları açısından EKG ve ekokardiyografi ile yıllık izlem",
      "Fizik tedavi ve rehabilitasyon desteği"
    ],
    consultations: ["Nöroloji Polikliniği", "Kardiyoloji Polikliniği"]
  },

  {
    id: "duchenne_dystrophy",
    name: "Duchenne Kas Distrofisi (DMD)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [80, 95], bp: [100, 115, 60, 75], spo2: [98, 100], rr: [16, 20], temp: [36.5, 37.1], ecg: "normal" },
    abnormals: {
      ast_alt: 320,
      genetik_analiz: "Distrofin geninde ekzon 45-50 delesyonu saptandı (DMD ile uyumlu)."
    },
    symptoms: {
      complaints: ["Yerden kalkarken dizlerine basarak kalkma", "Sık sık düşme ve koşamama", "Baldırlarda şişlik"],
      story: "5 yaşındaki erkek çocuk, yaşıtlarına göre geç yürüme, koşamama, merdiven çıkarken zorlanma ve sık düşme şikayetleriyle getirildi. Yerden kalkarken dizlerine basarak doğrulduğu belirtiliyor. CK (Kreatin Kinaz) değeri son derece yüksek.",
      pmh: ["Dayıda tekerlekli sandalye kullanımı öyküsü"],
      meds: ["Yok"],
      fm: "Bilateral baldır kaslarında yalancı şişlik (baldır psödohipertrofisi) izlendi. Hasta yerden kalkarken ellerini dizlerine ve uyluklarına basarak tırmanır gibi kalkıyor (Gowers belirtisi pozitif). Proksimal kas zaafı mevcut, ördekvari yürüyüş izlendi."
    },
    requiredTests: ["ast_alt", "genetik_analiz"],
    contraindicated: [],
    treatments: [
      "Sistemik Kortikosteroid tedavisi (Deflazakort veya Prednizolon)",
      "Fizik tedavi, germe egzersizleri ve cihazlama (ortez)",
      "Kardiyomiyopati gelişimi açısından kardiyolojik takip"
    ],
    consultations: ["Çocuk Sağlığı ve Hastalıkları Polikliniği", "Nöroloji Polikliniği", "Kardiyoloji Polikliniği"]
  },

  {
    id: "epidural_hematoma",
    name: "Akut Epidural Hematom (Beyin Kanaması)",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [50, 65], bp: [155, 175, 95, 105], spo2: [90, 93], rr: [10, 14], temp: [36.5, 37.2], ecg: "bradycardia" },
    abnormals: {
      bt_kranial: "Sağ temporoparyetal bölgede kafatası kırığı ve epidural boşlukta bikonveks (merceksi) hiperdens akut kanama odağı, orta hat şifti.",
      ekg: "Sinüs bradikardisi"
    },
    symptoms: {
      complaints: ["Kafa travması sonrası bayılma", "Ardından uyanma ve tekrar komaya girme", "Şiddetli baş ağrısı ve kusma"],
      story: "22 yaşındaki erkek hasta, yaklaşık 2 saat önce geçirdiği trafik kazasında başına aldığı darbe sonrası bayılmış, 15 dakika sonra bilinci açılmış (lusid interval - berrak dönem), ancak acil servise getirilirken yolda bilinci tekrar kapanmıştır.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Bilinç kapalı, GKS: 7 (Göz: 1, Sözel: 2, Motor: 4). Sağ pupil dilate, ışık refleksine yanıtsız (Anizokori / Sağ unkal herniasyon). Bradikardi ve hipertansiyon mevcut (Cushing refleksi)."
    },
    requiredTests: ["bt_kranial", "ekg"],
    contraindicated: ["lomber_ponksiyon"],
    treatments: [
      "Acil cerrahi dekompresyon ve hematom boşaltılması (Kraniyotomi)",
      "Kafa içi basıncını düşürmek için IV Mannitol (%20 solüsyonu 1 g/kg)",
      "Havayolu güvenliği (Entübasyon ve hafif hiperventilasyon tedavisi)"
    ],
    consultations: ["Beyin ve Sinir Cerrahisi Acil Konsültasyonu"]
  },

  {
    id: "normal_pressure_hydrocephalus",
    name: "Normal Basınçlı Hidrosefali (NPH - Hakim Sendromu)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 85], bp: [120, 135, 75, 85], spo2: [96, 98], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      mr_kranial: "Ventriküllerde belirgin genişleme (sulkuslarda silinme olmaksızın hidrosefali bulguları), korpus kallozumda incelme.",
      lomber_ponksiyon: "BOS açılış basıncı normal (130 mmH2O). LP ile 40 ml BOS boşaltıldıktan sonra (Tap Testi) hastanın yürüyüşünde belirgin düzelme gözlendi."
    },
    symptoms: {
      complaints: ["Yürürken ayakları kaldıramama", "İdrar kaçırma", "Unutkanlık ve zihinsel yavaşlama"],
      story: "68 yaşındaki erkek hasta, son 6 aydır yavaş adımlarla, ayakları yere yapışmış gibi yürüme (mıknatıs yürümesi), idrar kaçırma ve hafif kognitif yavaşlama şikayetleriyle başvurdu.",
      pmh: ["Geçirilmiş subaraknoid kanama (5 yıl önce)"],
      meds: ["Yok"],
      fm: "Bilateral geniş tabanlı, yavaş adımlarla, ayakları yerden kaldırmakta zorlanarak yürüme (apraksik yürüyüş) izlendi. Demansif bulgular mevcut. İdrar inkontinansı saptandı. DTR'ler normoaktif, Babinski negatif."
    },
    requiredTests: ["mr_kranial", "lomber_ponksiyon"],
    contraindicated: [],
    treatments: [
      "Ventriküloperitoneal Şant (VP Şant) ameliyatı planlanması",
      "Fizik tedavi ve rehabilitasyon desteği",
      "Demans bulguları için semptomatik izlem"
    ],
    consultations: ["Nöroloji Polikliniği", "Beyin ve Sinir Cerrahisi Konsültasyonu"]
  },

  {
    id: "glioblastoma_multiforme",
    name: "Glioblastoma Multiforme (GBM)",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [130, 150, 80, 95], spo2: [95, 97], rr: [16, 20], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {
      mr_kranial: "Sağ hemisferde çevre ödemi belirgin, sınırları düzensiz, halka tarzında kontrast tutulumu gösteren, santrali nekrotik dev kitle lezyonu ve orta hat şifti."
    },
    symptoms: {
      complaints: ["Giderek artan şiddetli baş ağrısı", "Uykudan uyandıran bulantı ve kusma", "Sol kol ve bacakta güçsüzlük"],
      story: "58 yaşındaki kadın hasta, son 1 aydır giderek kötüleşen, sabahları uykudan uyandıran baş ağrısı, bulantı, kusma, sol kol ve bacağında ilerleyici güçsüzlük şikayetiyle başvurdu.",
      pmh: ["Sigara kullanımı"],
      meds: ["Yok"],
      fm: "Genel durum orta. Sol kol ve bacakta 4/5 motor güç kaybı, solda babinski (+). Sol nazolabial olukta silikleşme (santral fasial paralizi). Bilateral optik disk sınırlarında hafif siliklik (KİBAS bulgusu)."
    },
    requiredTests: ["mr_kranial"],
    contraindicated: ["lomber_ponksiyon"],
    treatments: [
      "Beyin ödemini azaltmak için IV Deksametazon (Steroid) başlanması (4x4mg)",
      "Kitle etkisi için acil Beyin Cerrahisi cerrahi rezeksiyon konsültasyonu",
      "Ameliyat sonrası Radyoterapi + Temozolomid (Kemoterapi) planlanması"
    ],
    consultations: ["Beyin ve Sinir Cerrahisi Konsültasyonu", "Medikal Onkoloji Polikliniği"]
  },

  {
    id: "meningioma",
    name: "Meningiyom (İyi Huylu Beyin Tümörü)",
    category: "noroloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [120, 135, 75, 85], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.7], ecg: "normal" },
    abnormals: {
      mr_kranial: "Kafada dural kuyruk (dural tail) belirtisi gösteren, homojen ve yoğun kontrast tutan, düzgün sınırlı ekstrameküler kitle lezyonu."
    },
    symptoms: {
      complaints: ["Koku alamama", "Ara ara gelen hafif baş ağrısı", "Sol bacakta uyuşma"],
      story: "50 yaşındaki kadın hasta, son 6 aydır koku alamama, ara ara gelen baş ağrısı ve sol bacağında hafif uyuşma şikayetleriyle başvurdu. Tümörün iyi huylu olmasından şüpheleniliyor.",
      pmh: ["Meme Kanseri (taramaları normal)"],
      meds: ["Yok"],
      fm: "Genel durum iyi. Kranial sinir muayenesinde bilateral anosmi (koku alamama) saptandı (olfaktor oluk meningiyomu şüphesi). Diğer nörolojik muayene bulguları normal."
    },
    requiredTests: ["mr_kranial"],
    contraindicated: [],
    treatments: [
      "Semptomatik vakalarda cerrahi eksizyon (tümörün çıkartılması)",
      "Çok küçük veya asemptomatik vakalarda seri kranial MR ile takip",
      "Gerekirse radyocerrahi (Gamma Knife) planlanması"
    ],
    consultations: ["Beyin ve Sinir Cerrahisi Konsültasyonu"]
  },

  {
    id: "pityriasis_rosea",
    name: "Pitiriyazis Rozea (Madalyon Hastalığı)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      wbc: 6.5
    },
    symptoms: {
      complaints: ["Göğüste büyük kırmızı halkalı yara", "Sırtta çam ağacı şeklinde kaşıntılı döküntüler"],
      story: "24 yaşındaki hasta, 2 hafta önce göğsünde başlayan büyük kırmızı halka şeklinde bir döküntünün ardından, son 3 gündür sırtında ve kollarında kaşıntılı küçük döküntülerin çıkması şikayetiyle başvurdu.",
      pmh: ["Geçirilmiş hafif viral enfeksiyon öyküsü (3 hafta önce)"],
      meds: ["Yok"],
      fm: "Göğüste 3 cm çapında, kenarları hafif kepekli oval eritemli plak (madalyon/herald plak) izlendi. Sırtta vertebralar boyunca uzanan, çam ağacı (christmas tree) paterni gösteren küçük kepekli pembe-kırmızı makülopapüler döküntüler saptandı. Avuç içi ve ayak tabanında döküntü yok."
    },
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: [
      "Hastalığın selim ve kendiliğinden geçici (6-8 hafta) olduğu konusunda hastanın bilgilendirilmesi",
      "Kaşıntı için topikal nemlendiriciler ve oral antihistaminikler",
      "Şiddetli kaşıntıda hafif etkili topikal steroid krem"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "rosacea",
    name: "Rozasea (Gül Hastalığı)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.9], ecg: "normal" },
    abnormals: {
      wbc: 7.0
    },
    symptoms: {
      complaints: ["Yanaklarda ve burunda kalıcı kızarıklık", "Sıcak yiyince yüzde yanma ve kırmızı kabarcıklar"],
      story: "38 yaşındaki kadın hasta, yanaklarında ve burnunda kalıcı kızarıklık, sıcak ve acı yiyecekler yediğinde yüzde yanma ve sivilce benzeri kırmızı kabarıklıklar çıkması şikayetiyle başvurdu.",
      pmh: ["Güneş hassasiyeti"],
      meds: ["Yok"],
      fm: "Burun ve yanaklar üzerinde simetrik yerleşimli kalıcı eritem (kızarıklık), kılcal damarlarda belirginleşme (telenjektazi), papül ve püstüller izlendi. Komedon (siyah nokta) saptanmadı (akne vulgaris dışlandı). Burunda hafif fibrotik kalınlaşma mevcut."
    },
    requiredTests: ["wbc"],
    contraindicated: ["sistemik_steroid"],
    treatments: [
      "Topikal Metronidazol %0.75 krem (günde 2 kez) veya Azelaik asit",
      "Güneş koruyucu krem kullanımı ve sıcak/baharatlı gıdalardan kaçınma eğitimi",
      "Dirençli papülopüstüler vakalarda oral Doksisiklin 100mg/gün"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "seborrheic_dermatitis",
    name: "Seboroik Dermatit",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      wbc: 7.2
    },
    symptoms: {
      complaints: ["Kulak arkalarında ve saçta yağlı sarı kabuklanmalar", "Kaşlarda kızarıklık ve kepeklenme"],
      story: "28 yaşındaki erkek hasta, saçlı derisinde, kulak arkalarında ve burun kenarlarında kaşıntılı, yağlı kabuklanmalar ve kızarıklıklar olması şikayetiyle başvurdu. Stresli dönemlerde şikayetlerinin arttığını belirtiyor.",
      pmh: ["Stresli yaşam tarzı"],
      meds: ["Çeşitli kozmetik şampuanlar (fayda görmemiş)"],
      fm: "Saç sınırında, kulak arkalarında, kaşlarda ve nazolabial kıvrımlarda eritemli zemin üzerinde sarı-yağlı pullanmalar (skuam) saptandı. Saçlı deride hafif kepeklenme izlendi."
    },
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: [
      "Ketokonazol veya Çinko pirition içeren medikal şampuanlar ile haftada 2-3 kez yıkama",
      "Akut alevlenmelerde yüzdeki lezyonlara kısa süreli hafif etkili topikal steroid krem",
      "Topikal antifungal (Ketokonazol krem) uygulaması"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "erythema_multiforme",
    name: "Eritema Multiforme (EM)",
    category: "dermatoloji",
    difficulty: "medium",
    monitor: { hr: [75, 88], bp: [110, 125, 70, 80], spo2: [97, 99], rr: [14, 18], temp: [36.5, 37.2], ecg: "normal" },
    abnormals: {
      wbc: 8.4,
      biyopsi_deri: "Dermoepidermal bileşkede hidropik dejenerasyon, keratinosit nekrozu ve perivasküler lenfositik infiltrasyon."
    },
    symptoms: {
      complaints: ["Ellerde ve kollarda hedef tahtası şeklinde halkalı yaralar", "Dudaklarda uçuk sonrası çıkan lekeler"],
      story: "32 yaşındaki erkek hasta, 3 gün önce dudaklarında uçuk çıkmasının ardından, bugün ellerinde ve kollarında kaşıntılı, hedef tahtası şeklinde halkalı döküntüler çıkması şikayetiyle başvurdu.",
      pmh: ["Tekrarlayan Herpes Simplex (uçuk) öyküsü"],
      meds: ["Lokal uçuk kremi"],
      fm: "Her iki el sırtı, ön kollar ve avuç içlerinde yerleşik, ortası koyu mor-mavi, çevresi açık kırmızı halka şeklinde iç içe geçmiş halkalar gösteren tipik hedef (target) lezyonları saptandı. Dudak mukozasında tek tük ağrılı erozyonlar mevcut."
    },
    requiredTests: ["biyopsi_deri", "wbc"],
    contraindicated: [],
    treatments: [
      "Tetikleyici Herpes Simplex (uçuk) enfeksiyonu için oral Asiklovir tedavisi",
      "Kaşıntı semptomları için oral antihistaminik haplar",
      "Ağız yaraları için topikal steroidli gargaralar"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "basal_cell_carcinoma",
    name: "Bazal Hücreli Karsinom (BCC)",
    category: "dermatoloji",
    difficulty: "medium",
    monitor: { hr: [65, 80], bp: [120, 135, 75, 85], spo2: [96, 98], rr: [14, 18], temp: [36.4, 36.9], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Dermise invaze, periferik palizadlanma (sıralanma) gösteren bazaloid hücre adaları (BCC ile uyumlu)."
    },
    symptoms: {
      complaints: ["Yüzde iyileşmeyen, inci gibi parlak kenarlı ve kanayan yara"],
      story: "65 yaşındaki çiftçi erkek hasta, sol şakağında son 1 yıldır yavaş büyüyen, kanayan ve iyileşmeyen, inci gibi parlak kenarlı bir yara şikayetiyle başvurdu.",
      pmh: ["Kronik güneş maruziyeti (tarla işçiliği)"],
      meds: ["Yok"],
      fm: "Sol temporal bölgede (şakakta) 1 cm çapında, ortası hafif ülserize, kenarları inci tanesi (pearly border) gibi kabarık ve üzerinde ince damarların (telenjektaziler) izlendiği nodüler lezyon saptandı."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Lezyonun cerrahi eksizyonu (1-2 mm güvenli sınır ile çıkartılması)",
      "Cerrahiye uygun olmayan yaşlı hastalarda radyoterapi veya kriyoterapi",
      "Güneşten korunma önlemleri hakkında hasta eğitimi"
    ],
    consultations: ["Dermatoloji Polikliniği", "Plastik, Rekonstrüktif ve Estetik Cerrahi Konsültasyonu"]
  },

  {
    id: "squamous_cell_carcinoma",
    name: "Yassı Hücreli Karsinom (SCC)",
    category: "dermatoloji",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [96, 98], rr: [14, 18], temp: [36.6, 37.2], ecg: "normal" },
    abnormals: {
      wbc: 9.2,
      biyopsi_deri: "Dermise doğru uzanan, keratin incileri (keratin pearls) oluşturan atipik skuamöz epitel hücre yığınları (SCC ile uyumlu)."
    },
    symptoms: {
      complaints: ["Alt dudakta sert, kabuklu ve kanayan yara"],
      story: "70 yaşındaki erkek hasta, alt dudağında son 6 aydır çıkan, kabuklanan, pürüzlü ve ağrılı sert bir kitle şikayetiyle başvurdu. İyileşmeyen yaranın sürekli kanadığını söylüyor.",
      pmh: ["Aktif sigara kullanımı (40 paket-yıl)", "Açık hava işçiliği"],
      meds: ["Yok"],
      fm: "Alt dudak sol yarısında 1.5 cm çapında, üzeri krutlu (kabuklu), tabanı sert, kolay kanayan, düzensiz sınırlı infiltre ülserovejetan kitle saptandı. Sol submandibuler bölgede 1 cm çapında sert lenf nodu palpasyonu saptandı."
    },
    requiredTests: ["biyopsi_deri", "wbc"],
    contraindicated: [],
    treatments: [
      "Geniş cerrahi eksizyon (tümörün temiz sınırlarla ameliyatla çıkartılması)",
      "Bölgesel lenf nodu biyopsisi/diseksiyonu planlaması",
      "Kemoterapi ve Radyoterapi seçeneklerinin onkoloji tarafından değerlendirilmesi"
    ],
    consultations: ["Dermatoloji Polikliniği", "Plastik Cerrahi veya Kulak Burun Boğaz Cerrahisi Konsültasyonu"]
  },

  {
    id: "herpes_zoster",
    name: "Herpes Zoster (Zona / Gece Yanığı)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      wbc: 6.8,
      crp: 8
    },
    symptoms: {
      complaints: ["Göğsün sol tarafında şiddetli batıcı ağrı", "Kızarıklıklar üzerinde su kabarcıkları çıkması"],
      story: "60 yaşındaki hasta, 3 gün önce göğsünün sol tarafında başlayan şiddetli yanma ve batma tarzında ağrının ardından, bugün o bölgede gruplar halinde küçük su toplayan yaralar çıktığını belirterek başvurdu.",
      pmh: ["Çocuklukta geçirilen suçiçeği öyküsü"],
      meds: ["Ağrı kesici kremler"],
      fm: "Sol T5-T6 dermatomuna (göğsün sol yarısı, orta hattı geçmeyen) uyan alanda, eritemli (kızarık) zemin üzerinde gruplar halinde dizilmiş, şeffaf sıvılı veziküller saptandı. Dokunmakla aşırı ağrılı (hiperaljezi)."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Oral Antiviral: Asiklovir 800mg 5x1 (veya Valasiklovir 1000mg 3x1) 7 gün boyunca",
      "Ağrı kontrolü için analjezik ve nöropatik ajan (Pregabalin veya Gabapentin)",
      "Lokal pansuman ve yaraların temiz tutulması eğitimi"
    ],
    consultations: ["Dermatoloji Polikliniği", "Nöroloji Polikliniği"]
  },

  {
    id: "impetigo",
    name: "İmpetigo (Bulaşıcı Cilt Hastalığı)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [85, 100], bp: [110, 125, 70, 80], spo2: [98, 100], rr: [16, 20], temp: [36.5, 37.0], ecg: "normal" },
    abnormals: {
      wbc: 11.5,
      crp: 18
    },
    symptoms: {
      complaints: ["Ağız ve burun çevresinde kaşıntılı yaralar", "Bal rengi kabuklu döküntüler"],
      story: "6 yaşındaki kız çocuk, burun kenarlarında ve ağız çevresinde 3 gün önce başlayan, kaşıntılı ve ardından bal sarısı renginde kabuklar oluşturan döküntüler nedeniyle getirildi.",
      pmh: ["Kreş arkadaşında benzer yaralar olması"],
      meds: ["Nemlendirici krem"],
      fm: "Ağız köşelerinde ve burun delikleri çevresinde eritemli zemin üzerinde bal sarısı renginde yapışkan kabuklar (honey-colored crusts) ve bunların altında nemli erozyonlar saptandı. Ateş saptanmadı. Submandibuler lenfadenopati mevcut."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Topikal Antibiyotik krem: Mupirosin %2 (günde 3 kez, lezyonların üzerine)",
      "Kabukların ılık suyla yumuşatılarak temizlenmesi eğitimi",
      "Yaygın vakalarda oral antibiyotik (Sefaleksin veya Amoksisilin-Klavulanik Asit)"
    ],
    consultations: ["Dermatoloji Polikliniği", "Çocuk Sağlığı ve Hastalıkları Polikliniği"]
  },

  {
    id: "pleomorphic_adenoma",
    name: "Pleomorfik Adenom (Benign Mikst Tümör)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.7], ecg: "normal" },
    abnormals: {
      us_batin: "Sağ parotis bezi içinde 3 cm çapında, düzgün lobüle sınırlı, hipoekoik solid kitle.",
      biyopsi_deri: "İnce iğne aspirasyon biyopsisi (İİAB): Kondromiksoid stroma içinde düzenli epitel ve miyoepitel hücre kümeleri (Pleomorfik Adenom)."
    },
    symptoms: {
      complaints: ["Kulak önünde yavaş büyüyen şişlik", "Ağrısız kitle"],
      story: "45 yaşındaki kadın hasta, sağ kulak önünde yaklaşık 1 yıldır yavaş yavaş büyüyen, ağrısız, sert şişlik şikayetiyle başvurdu.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Sağ parotis bezi lojunda yaklaşık 3 cm çapında, düzgün sınırlı, mobil (hareketli), ağrısız, sert lobüle kitle saptandı. Yüz kaslarının hareketleri normal (N. facialis intakt)."
    },
    requiredTests: ["us_batin", "biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Cerrahi parotidektomi (yüzeysel parotidektomi) planlanması",
      "Fasiyal sinir korunması takibi"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "warthin_tumor",
    name: "Warthin Tümörü (Papiller Kistadenoma Lenfomatosum)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 85], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      us_batin: "Sol parotis alt polünde 2.5 cm çapında, kistik alanlar içeren hipoekoik düzgün sınırlı nodüler lezyon.",
      biyopsi_deri: "İİAB: Çift sıralı onkositik epitelle döşeli papiller yapılar ve belirgin lenfoid stroma (Warthin Tümörü)."
    },
    symptoms: {
      complaints: ["Kulak altında ağrısız şişlik", "Uzun süredir büyüme"],
      story: "60 yaşındaki erkek hasta, sol kulak altında 2 yıldır bulunan ve ağrı yapmayan şişlik şikayetiyle başvurdu. Hasta yoğun sigara kullanıcısı olduğunu belirtiyor.",
      pmh: ["Kronik sigara kullanımı (40 paket-yıl)"],
      meds: ["Yok"],
      fm: "Sol parotis alt kutbunda yerleşik, yaklaşık 2.5 cm çapında, yumuşak-fluktuan kıvamda, ağrısız, mobil kitle saptandı. Fasiyal sinir intakt."
    },
    requiredTests: ["us_batin", "biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Sağlıklı doku sınırıyla tümör enükleasyonu veya yüzeysel parotidektomi",
      "Sigara bırakma danışmanlığı"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "mucoepidermoid_carcinoma",
    name: "Mukoepidermoid Karsinom (Tükürük Bezi Kanseri)",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [120, 140, 75, 90], spo2: [97, 100], rr: [16, 20], temp: [36.5, 37.0], ecg: "normal" },
    abnormals: {
      us_batin: "Sağ parotis bezinde düzensiz sınırlı, çevre dokulara infiltrasyon gösteren, mikst ekojenitede solid kitle lezyonu.",
      biyopsi_deri: "Tru-cut biyopsi: Skuamöz hücreler, mukus sekrete eden hücreler ve intermediyer hücrelerin oluşturduğu invaziv tümöral infiltrasyon (Mukoepidermoid Karsinom)."
    },
    symptoms: {
      complaints: ["Yüzde ağrılı şişlik", "Kulak önünde sertlik", "Yüz kaslarında güçsüzlük"],
      story: "52 yaşındaki kadın hasta, sağ kulak önünde son 3 aydır hızlı büyüyen, zonklayıcı ağrısı olan sert kitle ve sağ gözünü kapatmakta zorlanma şikayetleriyle başvurdu.",
      pmh: ["Geçirilmiş boyun bölgesine radyoterapi öyküsü"],
      meds: ["Yok"],
      fm: "Sağ parotis lojunda 4 cm çapında, fikse (çevre dokuya yapışık), ağrılı, taş sertliğinde kitle palpasyonu saptandı. Yüzün sağ yarısında hafif motor zaaf mevcut (Sağ Fasiyal sinir parezisi, House-Brackmann Evre 3)."
    },
    requiredTests: ["us_batin", "biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Geniş cerrahi eksizyon (Total parotidektomi + boyun diseksiyonu)",
      "Postoperatif Radyoterapi planlanması",
      "Fasiyal sinir rehabilitasyonu"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği", "Radyasyon Onkolojisi Polikliniği"]
  },

  {
    id: "adenoid_cystic_carcinoma",
    name: "Adenoid Kistik Karsinom (Damak Tümörü)",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [80, 95], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [16, 20], temp: [36.4, 36.9], ecg: "normal" },
    abnormals: {
      mr_kranial: "Sert damakta yerleşik, palatin sinirler boyunca perinöral invazyon ve kafa tabanına doğru uzanım gösteren solid kitle lezyonu.",
      biyopsi_deri: "Damak biyopsisi: Kribriform (eleksi) desen oluşturan, perinöral yayılım gösteren küçük bazofil tümör hücreleri (Adenoid Kistik Karsinom)."
    },
    symptoms: {
      complaints: ["Damakta ağrılı şişlik", "Konuşurken veya yutkunurken şiddetli ağrı", "Ağrının kulağa vurması"],
      story: "48 yaşındaki erkek hasta, damak arkasında 6 aydır var olan, özellikle geceleri şiddetlenen, kulağına doğru yayılan ağrılı şişlik şikayetiyle başvurdu.",
      pmh: ["Sigara kullanımı"],
      meds: ["Yok"],
      fm: "Sert damak mukozasında 2 cm çapında, üzeri ülserize, mukozaya ve altındaki kemiğe fikse, sert, palpasyonla aşırı hassas kitle saptandı."
    },
    requiredTests: ["mr_kranial", "biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Geniş cerrahi rezeksiyon (Kemiği de içerecek şekilde parsiyel maksillektomi)",
      "Perinöral yayılım nedeniyle mutlaka postoperatif yüksek doz Radyoterapi",
      "Yakın nörolojik ve radyolojik takip"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği", "Plastik Cerrahi Konsültasyonu", "Radyasyon Onkolojisi Polikliniği"]
  },

  {
    id: "sialolithiasis",
    name: "Sialolithiazis (Tükürük Bezi Taşı)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.7], ecg: "normal" },
    abnormals: {
      us_batin: "Sağ submandibuler kanal (Wharton kanalı) içinde 6 mm çapında akustik gölgesi olan hiperekoik taş ve proksimalinde kanal dilatasyonu."
    },
    symptoms: {
      complaints: ["Yemek yerken çene altında şişme ve ağrı", "Yemekten sonra şişliğin inmesi"],
      story: "35 yaşındaki erkek hasta, son 2 haftadır özellikle ekşi veya lezzetli yemekler yerken çene altında aniden oluşan, ağrılı ve gergin şişlik, yemekten 1-2 saat sonra ise şişliğin yavaş yavaş inmesi şikayetiyle başvurdu.",
      pmh: ["Gout hastalığı öyküsü"],
      meds: ["Allopurinol 100mg 1x1"],
      fm: "Sağ submandibuler bez palpasyonda hafif büyük ve hassas. Ağız tabanındaki Wharton kanalı trasesi boyunca yapılan bimanuel palpasyonda kanal içinde sert, hareketli taş (sialolit) saptandı. Kanal ağzından pürülan akıntı gelmedi."
    },
    requiredTests: ["us_batin"],
    contraindicated: [],
    treatments: [
      "Kanal ağzına yakın taşlarda intraoral cerrahi marsupiyalizasyon/milking ile taşın çıkartılması",
      "Sıvı tüketiminin artırılması, limon gibi tükürük salgılatıcıların (sialogog) kullanımı",
      "Bez içi derin yerleşimli büyük taşlarda submandibulektomi (bezin alınması) ameliyatı"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "plummer_vinson",
    name: "Plummer-Vinson Sendromu",
    category: "hematoloji",
    difficulty: "medium",
    monitor: { hr: [80, 95], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [16, 20], temp: [36.5, 37.1], ecg: "normal" },
    abnormals: {
      wbc: 4.8,
      crp: 4
    },
    symptoms: {
      complaints: ["Katı gıdaları yutamama", "Aşırı halsizlik ve yorgunluk", "Tırnaklarda çökme", "Dil ve ağız köşelerinde acıma"],
      story: "42 yaşındaki kadın hasta, son 1 yıldır katı gıdaları yutmakta zorlandığını, ekmek veya et yerken boğazına takıldığını, sürekli halsiz olduğunu ve tırnaklarının şeklinin bozulduğunu belirterek başvurdu. Demir eksikliği anemisi laboratuvarı (Hb: 8.2 g/dL, Ferritin: 5 ng/mL belirgin düşük).",
      pmh: ["Düzensiz adet kanamaları"],
      meds: ["Yok"],
      fm: "Konjonktivalar soluk (anemi). Dilde papillalarda silinme ve kızarıklık (atrofik glossit), ağız köşelerinde çatlaklar (açısal stomatit/cheiliozis) saptandı. Tırnaklarda kaşık tırnak (koilonişi) görünümü mevcut."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Demir replasmanı tedavisi (Ferro sülfat 200mg 2x1)",
      "Özofagus web'leri için endoskopik buji dilatasyonu",
      "Skuamöz hücreli karsinom riski nedeniyle düzenli endoskopik takip"
    ],
    consultations: ["Gastroenteroloji Polikliniği", "Hematoloji Polikliniği"]
  },

  {
    id: "tylosis",
    name: "Tilozis (Özofagus Kanser Riski)",
    category: "dermatoloji",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [98, 100], rr: [14, 18], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Deri biyopsisi: Epidermiste belirgin hiperkeratoz, granüler tabakada kalınlaşma ve akantoz (epidermisin kalınlaşması)."
    },
    symptoms: {
      complaints: ["El ayası ve ayak tabanında aşırı kalınlaşma", "Yutma güçlüğü", "Ailede erken yaşta özofagus kanserinden ölüm"],
      story: "30 yaşındaki erkek hasta, çocukluğundan beri el ayası ve ayak tabanında derinin çok sert ve kalın olduğunu, son 1 aydır ise yutkunurken boğazında takılma hissi başladığını belirtti. Babası ve amcasının 45 yaşlarında yemek borusu kanserinden öldüğünü söylüyor.",
      pmh: ["Ailede palmoplantar keratoderma öyküsü"],
      meds: ["Yok"],
      fm: "Bilateral el ayası (palmar) ve ayak tabanında (plantar) belirgin, sınırları net, sarımtırak renkli kalın hiperkeratoz (nasırlaşma) plakları saptandı. Ağız içi muayenesi normal."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Özofagus kanseri taraması için acil Üst GİS Endoskopisi yapılması",
      "Deri lezyonları için topikal keratolitik (Salisilik asit) ve oral retinoid (Asitretin) tedavisi",
      "Ömür boyu yıllık endoskopik izlem programına alınması (Kanser riski %95'in üzerindedir)"
    ],
    consultations: ["Dermatoloji Polikliniği", "Gastroenteroloji Polikliniği"]
  },

  {
    id: "menetrier_disease",
    name: "Menetrier Hastalığı (Dev Gastrik Rugae)",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [70, 85], bp: [110, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Mide biyopsisi: Korpus mukozasında dev kıvrımlar (rugae), foveolar hiperplazi (mukus hücrelerinde aşırı artış) ve pariyetal/esas hücrelerde atrofi."
    },
    symptoms: {
      complaints: ["Karnında şişkinlik ve bacaklarda şişme", "Bulantı ve kusma", "İshal", "Kilo kaybı"],
      story: "55 yaşındaki erkek hasta, son 2 aydır bacaklarında başlayan ve tüm vücuduna yayılan ödem, karın ağrısı, ishal ve 8 kilo kaybetme şikayetleriyle başvurdu.",
      pmh: ["Kronik Gastrit"],
      meds: ["Yok"],
      fm: "Bilateral alt ekstremitelerde 3+ gode bırakan pretibial ödem saptandı. Batında asit bulguları mevcut (açıklığı yukarı bakan matlık). Kaşektik görünümde."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Diyetle yüksek protein desteği sağlanması",
      "Ödemler için Diüretik tedavi (Spironolakton/Furosemid)",
      "Şiddetli vakalarda veya kanser şüphesinde total gastrektomi ameliyatı",
      "Tetikleyici etken olarak H. pylori enfeksiyonu varsa eradike edilmesi"
    ],
    consultations: ["Gastroenteroloji Polikliniği", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "gist_tumor",
    name: "Gastrointestinal Stromal Tümör (GİST)",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [14, 18], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Mide biyopsisi: İğsi (spindle) veya epitelioid hücrelerden oluşan mezenkimal neoplazm, İmmünohistokimyada c-KIT (CD117) pozitifliği saptandı."
    },
    symptoms: {
      complaints: ["Kansızlık ve halsizlik", "Karında dolgunluk hissi", "Ara ara siyah renkli dışkılama"],
      story: "60 yaşındaki erkek hasta, son 3 aydır devam eden halsizlik, çabuk yorulma ve son 1 haftada 2 kez katran renginde siyah dışkılama (melena) şikayetiyle başvurdu.",
      pmh: ["Tip 2 Diyabet (5 yıl)"],
      meds: ["Metformin 1000mg 2x1"],
      fm: "Konjonktivalar soluk. Batın muayenesinde epigastrik bölgede derin palpasyonla düzgün sınırlı, ağrısız, sert kitle hissedildi. Defans veya rebound yok."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Cerrahi rezeksiyon (Tümörün temiz sınırlarla mide duvarından çıkartılması/kama rezeksiyon)",
      "Rezeke edilemeyen, metastatik veya yüksek riskli vakalarda Tirozin Kinaz İnhibitörü (İmatinib 400mg/gün) tedavisi",
      "Düzenli batın tomografisi ve endoskopi ile takip"
    ],
    consultations: ["Gastroenteroloji Polikliniği", "Genel Cerrahi Konsültasyonu", "Tıbbi Onkoloji Polikliniği"]
  },

  {
    id: "gastric_adenocarcinoma",
    name: "Mide Adenokarsinomu (Mide Kanseri)",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [130, 150, 80, 95], spo2: [95, 97], rr: [16, 20], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Gastrik biyopsi: Taşlı yüzük hücreli (signet ring cell) veya glandüler yapılar oluşturan atipik epitel hücre infiltrasyonu (Mide Adenokarsinomu)."
    },
    symptoms: {
      complaints: ["İştahsızlık ve kilo kaybı", "Yemeklerden sonra tıkanma ve erken doyma", "Hafif karın ağrısı", "Halsizlik"],
      story: "65 yaşındaki erkek hasta, son 3 aydır iştahının kapandığını, yemek yer yemez doyduğunu ve tıkanma hissettiğini, bu süreçte 12 kilo verdiğini ve sürekli halsiz olduğunu belirterek başvurdu.",
      pmh: ["Helicobacter pylori gastriti (tedavisiz)"],
      meds: ["Yok"],
      fm: "Belirgin kilo kaybı (kaşeksi) mevcut. Sol supraklavikal bölgede sert, ağrısız, fikse lenf nodu palpasyonu saptandı (Virchow nodülü). Batında asit saptandı. Rektal tuşede Douglas boşluğunda sertlik (Blumer rafı)."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Mide antrum/pilor lezyonlarında Subtotal Gastrektomi ameliyatı",
      "Proksimal veya diffüz tümörlerde Total Gastrektomi + D2 Lenfadenektomi ameliyatı",
      "Adjuvan Kemoterapi/Radyoterapi protokolleri planlanması"
    ],
    consultations: ["Genel Cerrahi Konsültasyonu", "Tıbbi Onkoloji Polikliniği"]
  },

  {
    id: "hirschsprung_disease",
    name: "Hirschsprung Hastalığı (Konjenital Megakolon)",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [110, 130], bp: [80, 95, 50, 60], spo2: [96, 98], rr: [24, 30], temp: [36.5, 37.0], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Rektal aspirasyon biyopsisi: Submukozal (Meissner) ve miyenterik (Auerbach) pleksuslarda ganglion hücrelerinin izlenmemesi (aganglionozis) ve kalın asetilkolinesteraz liflerinin artışı."
    },
    symptoms: {
      complaints: ["Bebeğin ilk 48 saatte kaka yapamaması", "Karında aşırı şişkinlik", "Safralı kusma"],
      story: "3 günlük erkek bebek, doğum sonrası ilk 48 saatte mekonyum (ilk kaka) çıkışının olmaması, karında giderek artan şişlik ve yeşil renkli (safralı) kusma şikayetleriyle getirildi.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Karın aşırı gergin ve timpanik. Rektal tuşe yapıldığında parmağın çekilmesiyle birlikte fışkırır tarzda dışkı ve gaz çıkışı gözlendi (patlayıcı kaka belirtisi pozitif)."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Aganglionik barsak segmentinin rezeksiyonu ve fonksiyonel barsağın anüse çekilmesi ameliyatı (Duhamel, Soave veya Swenson prosedürü)",
      "Ameliyat öncesi geçici kolostomi açılması",
      "Sıvı-elektrolit dengesinin sağlanması, rektal lavajlar ile dekompresyon"
    ],
    consultations: ["Çocuk Cerrahisi Konsültasyonu"]
  },

  {
    id: "angiodysplasia",
    name: "Angiodisplazi (Barsak Damar Bozukluğu)",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [75, 90], bp: [110, 125, 70, 80], spo2: [96, 98], rr: [14, 18], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      wbc: 5.2,
      crp: 6
    },
    symptoms: {
      complaints: ["Ağrısız makattan kırmızı kan gelmesi", "Halsizlik ve baş dönmesi"],
      story: "75 yaşındaki kadın hasta, son 1 ay içinde 3 kez tekrarlayan, karın ağrısı olmaksızın dışkı ile karışık taze kırmızı renkli rektal kanama ve halsizlik şikayetleriyle başvurdu. Demir eksikliği anemisi bulguları (Hb: 7.9 g/dL), kolonoskopide sağ kolonda ektatik vasküler lezyonlar saptandı.",
      pmh: ["Aort darlığı öyküsü (Heyde sendromu)", "Kronik böbrek yetmezliği"],
      meds: ["Yok"],
      fm: "Konjonktivalar soluk. Batın muayenesi normal (hassasiyet, kitle yok). Rektal tuşede taze kan saptandı."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Kolonoskopik tedavi: Aktif kanayan angiodisplazi lezyonlarının Argon Plazma Koagülasyonu (APK) ile yakılması",
      "Şiddetli ve tekrarlayan durumlarda sağ hemikolektomi ameliyatı",
      "Kansızlık için demir ve kan transfüzyonu desteği"
    ],
    consultations: ["Gastroenteroloji Polikliniği", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "solitary_rectal_ulcer",
    name: "Soliter Rektal Ülser Sendromu",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.7], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Rektal biyopsi: Lamina propriada düz kas liflerinin hiperplazisi ve epitel bezleri arasına dikey uzanımı (fibromusküler obliterasyon) ve yüzeyel ülserasyon."
    },
    symptoms: {
      complaints: ["Dışkılarken zorlanma ve parmaklama ihtiyacı", "Dışkıda kan ve mukus gelmesi", "Makat bölgesinde dolgunluk ve ağrı"],
      story: "32 yaşındaki kadın hasta, son 6 aydır devam eden şiddetli kabızlık, dışkılama sırasında makatta tıkanma hissi, parmak yardımıyla dışkı çıkarabilme ve dışkının üzerine bulaşmış taze kan ile mukus şikayetleriyle başvurdu.",
      pmh: ["Kronik kabızlık", "Pelvik taban disfonksiyonu"],
      meds: ["Laksatif şurup"],
      fm: "Perianal muayene doğal. Rektal tuşede rektum anterior duvarda hafif kabarıklık ve parmakta kan-mukus bulaşı saptandı."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Diyetin lif oranının artırılması ve laksatif kullanımı (ıkınmanın önlenmesi)",
      "Dışkılama alışkanlıklarının biofeedback tedavisi ile düzeltilmesi",
      "Dirençli veya prolapsuslu vakalarda rektopeksi ameliyatı"
    ],
    consultations: ["Gastroenteroloji Polikliniği", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "peutz_jeghers",
    name: "Peutz-Jeghers Sendromu",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [115, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Barsak polip biyopsisi: Düz kas liflerinin ağaç gibi dallanma gösterdiği hamartomatöz polip yapısı (Peutz-Jeghers polibi)."
    },
    symptoms: {
      complaints: ["Ağız çevresinde ve parmaklarda koyu lekeler", "Tekrarlayan karın ağrıları", "Büyük abdestte kan gelmesi"],
      story: "16 yaşındaki erkek hasta, çocukluğundan beri ağız çevresinde ve dudaklarında koyu renkli lekeleri olduğunu, son 1 yıldır ara sıra olan ve kendiliğinden geçen şiddetli karın ağrısı (tıkanıklık/invajinasyon) atakları yaşadığını belirtti.",
      pmh: ["Ailede Peutz-Jeghers sendromu öyküsü (dayı)"],
      meds: ["Yok"],
      fm: "Dudaklarda, ağız mukozasında ve el parmaklarında koyu kahverengi/mavi renkli maküller (hiperpigmentasyon lekeleri) izlendi. Batın muayenesi normal."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "İnce barsak tıkanıklıklarına (invajinasyon) yol açan büyük poliplerin endoskopik olarak çıkartılması (Polipektomi)",
      "Mide, barsak, meme ve pankreas kanserleri açısından erken yaşta tarama programına alınması",
      "Genetik danışmanlık verilmesi (LKB1/STK11 gen mutasyonu)"
    ],
    consultations: ["Gastroenteroloji Polikliniği", "Tıbbi Genetik Konsültasyonu"]
  },

  {
    id: "gardner_syndrome",
    name: "Gardner Sendromu",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [120, 135, 75, 85], spo2: [98, 100], rr: [14, 18], temp: [36.4, 37.0], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Kolonoskopik biyopsi: Kolonda yüzlerce adenomatöz polip saptandı, biyopside tübüler adenom doğrulanması. Cilt altı kitlesinde desmoid tümör/epidermal kist histopatolojisi."
    },
    symptoms: {
      complaints: ["Çenede ve kafada sert kemik şişlikleri", "Vücutta yumuşak et kitleleri", "Karın ağrısı ve kanlı dışkılama"],
      story: "25 yaşındaki erkek hasta, çene kemiğinde ve kafasında son birkaç yıldır büyüyen ağrısız sert şişlikler, sırtında yağ bezleri ve son aylarda başlayan karın ağrısı, ishal şikayetleriyle başvurdu. Ailede erken yaşta kolon kanserinden ölüm öyküsü var.",
      pmh: ["Ailede Familyal Adenomatöz Polipozis (FAP) öyküsü"],
      meds: ["Yok"],
      fm: "Mandibulada ve kafatasında kemik kıvamında sert, ağrısız çıkıntılar (osteomlar) palpasyonu saptandı. Sırtta ve kollarda epidermal kistler ve yumuşak doku tümörleri (lipom/fibrom) izlendi."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Kolon kanserini önlemek için profilaktik Total Kolektomi + İleal Poş-Anal Anastomoz ameliyatı",
      "Desmoid tümörler ve osteomlar için cerrahi/tıbbi takip",
      "Duodenal adenomlar açısından düzenli üst GİS endoskopisi takibi"
    ],
    consultations: ["Genel Cerrahi Konsültasyonu", "Ortopedi Polikliniği", "Gastroenteroloji Polikliniği"]
  },

  {
    id: "turcot_syndrome",
    name: "Turcot Sendromu (Beyin Tümörü + Polip)",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [120, 135, 75, 85], spo2: [97, 100], rr: [16, 20], temp: [36.8, 37.4], ecg: "normal" },
    abnormals: {
      mr_kranial: "Serebellumda (beyincikte) dördüncü ventrikülü basılayan, hidrosefaliye yol açmış medulloblastom (veya glioblastom) ile uyumlu kontrast tutan solid kitle.",
      biyopsi_deri: "Kolonoskopik biyopsi: Kolonda çok sayıda adenomatöz polip saptandı (mismatch repair gen mutasyonu veya APC mutasyonu)."
    },
    symptoms: {
      complaints: ["Baş ağrısı ve nöbet geçirme", "Karın ağrısı", "Kanlı dışkılama"],
      story: "20 yaşındaki hasta, son 2 aydır sabahları olan şiddetli baş ağrısı, fışkırır tarzda kusma ve dün geçirdiği jeneralize tonik-klonik nöbet şikayetleriyle getirildi. Hastanın son 6 aydır dışkısında kan izlendiği belirtildi.",
      pmh: ["Ailede kolon kanseri öyküsü"],
      meds: ["Yok"],
      fm: "Bilinç açık, kooperasyonu tam. Bilateral papil ödemi saptandı. Nörolojik muayenede kranial sinirler intakt, motor zaaf yok."
    },
    requiredTests: ["mr_kranial", "biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Medulloblastom için acil Beyin Cerrahisi rezeksiyonu ve postoperatif Radyoterapi",
      "Kolondaki çok sayıdaki polip nedeniyle profilaktik kolektomi ameliyatı planlanması",
      "Genetik danışmanlık ve aile taraması"
    ],
    consultations: ["Beyin ve Sinir Cerrahisi Konsültasyonu", "Gastroenteroloji Polikliniği", "Tıbbi Genetik Konsültasyonu"]
  },

  {
    id: "biliary_atresia",
    name: "Ekstrahepatik Biliyer Atrezi",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [115, 130], bp: [80, 95, 50, 60], spo2: [96, 98], rr: [24, 30], temp: [36.6, 37.1], ecg: "normal" },
    abnormals: {
      alt_ast: 185,
      us_batin: "Safra kesesi izlenemedi veya rudimenter (küçük) saptandı, safra yollarında dilatasyon yok (atretik)."
    },
    symptoms: {
      complaints: ["Bebeğin doğumdan sonra geçmeyen sarılığı", "Göz aklarının sararması", "Kakanın beyaz renkli olması (akolik dışkı)"],
      story: "1 aylık bebek, doğum sonrası 3. günde başlayan ve giderek derinleşen sarılık şikayetiyle getirildi. Annesi bebeğin kakasının kil renginde (beyaz) olduğunu ve idrarının bezini kahverengi boyadığını belirtti. Total Bilirubin: 14 mg/dL, Direkt Bilirubin: 9.8 mg/dL (direkt bilirubin yüksekliği).",
      pmh: ["Normal doğum öyküsü"],
      meds: ["Yok"],
      fm: "Cilt ve sklera belirgin ikterik. Karaciğer subkostal 3 cm ele geliyor, sert kıvamda. Hafif splenomegali mevcut."
    },
    requiredTests: ["alt_ast", "us_batin"],
    contraindicated: [],
    treatments: [
      "Erken dönemde (ilk 60 gün içinde) hepatik portoenterostomi (Kasai ameliyatı) uygulanması",
      "Kasai ameliyatının başarısız olduğu durumlarda veya siroz geliştiğinde Karaciğer Transplantasyonu",
      "Yağda eriyen vitamin (A, D, E, K) ve MCT içeren özel mama destekleri"
    ],
    consultations: ["Çocuk Cerrahisi Konsültasyonu", "Çocuk Gastroenteroloji Polikliniği"]
  },

  {
    id: "reye_syndrome",
    name: "Reye Sendromu (Aspirin Reaksiyonu)",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [120, 140], bp: [100, 115, 60, 75], spo2: [94, 96], rr: [26, 32], temp: [38.5, 39.2], ecg: "tachycardia" },
    abnormals: {
      alt_ast: 450,
      glukoz: 48,
      ekg: "Sinüs taşikardisi"
    },
    symptoms: {
      complaints: ["Ateşli hastalık sonrası fışkırır tarzda kusma", "Bilinç bulanıklığı ve koma", "Saldırganlık ve nöbet geçirme"],
      story: "6 yaşındaki çocuk, 4 gün önce geçirdiği suçiçeği enfeksiyonu sırasında ateşini düşürmek amacıyla aspirin verilmesinin ardından, bugün aniden başlayan sürekli kusma, çevresini tanımama, saldırganlık ve sonrasında bilincinin kapanması şikayetleriyle acil servise getirildi. Serum amonyak düzeyi: 220 mcg/dL (aşırı yüksek).",
      pmh: ["Geçirilmiş suçiçeği (varisella) enfeksiyonu"],
      meds: ["Aspirin 500mg (ateş için kullanılmış)"],
      fm: "Bilinç letarjik/koma halinde (GKS 8). Karaciğer subkostal 2 cm ele geliyor, yumuşak kıvamda. Sarılık saptanmadı (anikterik hepatik yetmezlik). DTR'ler hiperaktif, Babinski (+)."
    },
    requiredTests: ["alt_ast", "glukoz", "ekg"],
    contraindicated: ["aspirin"],
    treatments: [
      "Beyin ödemini azaltmak için IV Mannitol ve hafif hiperventilasyon tedavisi",
      "Hipoglisemi için IV Dekstroz (%10 veya %20) infüzyonu",
      "Hiperamonyemi ve karaciğer yetmezliği tedavisi, solunum desteği (entübasyon)"
    ],
    consultations: ["Çocuk Sağlığı ve Hastalıkları Polikliniği", "Çocuk Yoğun Bakım Konsültasyonu"]
  },

  {
    id: "caroli_disease",
    name: "Caroli Hastalığı",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [75, 90], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [16, 20], temp: [36.5, 37.1], ecg: "normal" },
    abnormals: {
      alt_ast: 88,
      us_batin: "İntrahepatik büyük safra kanallarında segmental, kistik genişlemeler (dilatasyonlar) ve kanallar içinde çamur/taş görünümleri."
    },
    symptoms: {
      complaints: ["Tekrarlayan yüksek ateş ve titreme", "Sağ üst kadran karın ağrısı", "Gözlerde sararma"],
      story: "22 yaşındaki erkek hasta, son 1 yıldır aralıklarla gelen, sağ üst karın ağrısı, titremeyle yükselen ateş ve gözlerinde sararma (tekrarlayan kolanjit atakları) şikayetleriyle başvurdu.",
      pmh: ["Polikistik Böbrek Hastalığı (hafif düzeyde)"],
      meds: ["Yok"],
      fm: "Göz skleraları subikterik. Sağ üst kadranda derin palpasyonla hassasiyet ve hafif hepatomegali saptandı."
    },
    requiredTests: ["alt_ast", "us_batin"],
    contraindicated: [],
    treatments: [
      "Aktif kolanjit atakları için IV Antibiyotik tedavisi başlanması",
      "Safra akımını kolaylaştırmak için Ursodeoksikolik Asit (UDCA) tedavisi",
      "Tek lob tutulumlarında karaciğer lobektomisi ameliyatı, yaygın sirotik vakalarda Karaciğer Transplantasyonu"
    ],
    consultations: ["Gastroenteroloji Polikliniği", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "alagille_syndrome",
    name: "Alagille Sendromu (Safra Kanalı Azlığı)",
    category: "gastrointestinal",
    difficulty: "expert",
    monitor: { hr: [95, 110], bp: [90, 105, 55, 65], spo2: [96, 98], rr: [20, 24], temp: [36.6, 37.1], ecg: "normal" },
    abnormals: {
      alt_ast: 210,
      us_batin: "Safra yolları hipoplazik/küçük saptandı. Karaciğer biyopsisinde portal alanlarda safra kanalı yokluğu (safra yolu agenezisi) doğrulandı."
    },
    symptoms: {
      complaints: ["Çocukta şiddetli kaşıntı", "Gözlerde sarılık", "Yüz şeklinde gariplik", "Üfürüm duyulması"],
      story: "3 yaşındaki kız child, doğumdan beri var olan sarılık, son aylarda başlayan ve uyutmayan şiddetli kaşıntı (kaşıntı izleri), yüzde alın belirginliği ve çene sivriliği şikayetleriyle getirildi. GGT ve kolesterol değerleri yüksek.",
      pmh: ["Ailede pulmoner darlık öyküsü"],
      meds: ["Multivitamin şurubu"],
      fm: "Geniş alın, derin yerleşimli gözler ve sivri çene yapısı (tipik Alagille yüzü) saptandı. Ciltte kaşıntı ekskoriasyonları ve yaygın sarılık. Kalp muayenesinde 3/6 sistolik üfürüm (periferik pulmoner stenoz)."
    },
    requiredTests: ["alt_ast", "us_batin"],
    contraindicated: [],
    treatments: [
      "Kaşıntı semptomları için kolestiramin (safra asidi bağlayıcı) ve rifampisin tedavisi",
      "Yağda eriyen vitaminlerin (A, D, E, K) yüksek dozda oral desteği",
      "Pulmoner stenoz açısından Çocuk Kardiyolojisi tarafından izlem, karaciğer yetmezliğinde transplantasyon"
    ],
    consultations: ["Çocuk Gastroenteroloji Polikliniği", "Çocuk Kardiyolojisi Polikliniği", "Tıbbi Genetik Konsültasyonu"]
  },

  {
    id: "peliosis_hepatis",
    name: "Peliozis Hepatis (Kan Göllenmesi)",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [105, 120], bp: [85, 100, 50, 60], spo2: [94, 96], rr: [20, 24], temp: [36.7, 37.3], ecg: "normal" },
    abnormals: {
      wbc: 12.8,
      us_batin: "Karaciğer içinde çok sayıda kanla dolu kistik boşluklar saptandı. Batın içi serbest sıvı (hemoperitoneum) izlendi."
    },
    symptoms: {
      complaints: ["Aniden başlayan şiddetli karın ağrısı", "Baş dönmesi ve soğuk terleme", "Halsizlik"],
      story: "45 yaşındaki tüberküloz tedavisi gören erkek hasta, aniden başlayan sağ üst karın ağrısı ve sonrasında gelişen fenalık hissi, soğuk terleme şikayetleriyle acil servise başvurdu. Karın içi kanamadan şüpheleniliyor.",
      pmh: ["Aktif Akciğer Tüberkülozu", "Anabolik steroid kullanımı"],
      meds: ["Rifampisin + İzoniyazid + Pirazinamid", "Anabolik steroid hapı"],
      fm: "Genel durum orta-kötü, hipotansiyon (BP 85/50) ve taşikardi mevcut. Batın sağ üst kadranda belirgin hassasiyet ve rebound saptandı."
    },
    requiredTests: ["us_batin", "wbc"],
    contraindicated: [],
    treatments: [
      "Tetikleyici ilaçların (örn: anabolik steroidler, oral kontraseptifler) derhal kesilmesi",
      "Rüptür ve batın içi kanama varlığında acil cerrahi veya anjiyografik embolizasyon",
      "Sıvı-elektrolit ve kan transfüzyonu desteği"
    ],
    consultations: ["Gastroenteroloji Polikliniği", "Genel Cerrahi Konsültasyonu", "Girişimsel Radyoloji Konsültasyonu"]
  },

  {
    id: "insulinoma",
    name: "İnsülinoma (Pankreas Adacık Tümörü)",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [80, 95], bp: [110, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.7], ecg: "normal" },
    abnormals: {
      glukoz: 42,
      ekg: "Normal sinüs ritmi, hafif taşikardi"
    },
    symptoms: {
      complaints: ["Sabah açken baygınlık hissi ve terleme", "Şekerli şeyler yiyince düzelme", "Kilo alma"],
      story: "35 yaşındaki kadın hasta, son 6 aydır sabahları kahvaltı yapmadan önce ellerinde titreme, soğuk terleme, çarpıntı ve baş dönmesi yaşadığını, bu anlarda şekerli su içtiğinde şikayetlerinin 5 dakika içinde geçtiğini, bu atakları engellemek için sık sık yemek yediği için 10 kilo aldığını belirtti. Açlık hipoglisemisi doğrulanmıştır.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durum iyi. Atak anında kan şekeri bakıldığında 42 mg/dL (hipoglisemi) ölçüldü. Fizik muayene doğal."
    },
    requiredTests: ["glukoz", "ekg"],
    contraindicated: [],
    treatments: [
      "72 saatlik açlık testi ile tanının kesinleştirilmesi (insülin ve C-peptit değerleri yüksek)",
      "Pankreastaki insülinoma kitlesinin tespiti için abdominal BT/MR ve cerrahi enükleasyon ameliyatı",
      "Ameliyat öncesi atakları önlemek için sık karbonhidratlı beslenme ve Diazoksit tedavisi"
    ],
    consultations: ["Endokrinoloji ve Metabolizma Polikliniği", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "gastrinoma",
    name: "Gastrinoma (Zollinger-Ellison Sendromu)",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: { hr: [75, 88], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [14, 18], temp: [36.3, 36.8], ecg: "normal" },
    abnormals: {
      biyopsi_deri: "Üst GİS Endoskopisi: Duodenum 2. ve 3. kısımda ve midede atipik yerleşimli multipl dirençli ülserler saptandı, serum gastrin düzeyi: 1200 pg/mL (aşırı yüksek)."
    },
    symptoms: {
      complaints: ["Mide koruyuculara rağmen geçmeyen karın ağrısı", "Sırtına vuran mide yanması", "Kronik sulu ishal"],
      story: "45 yaşındaki erkek hasta, son 1 yıldır mide koruyucu (PPI) ilaçlar kullanmasına rağmen geçmeyen, sırtına vuran şiddetli mide ağrısı, yanma ve günde 4-5 kez olan sulu ishal şikayetleriyle başvurdu. Hastaya daha önce 3 kez peptik ülser tanısı konmuş.",
      pmh: ["Tekrarlayan peptik ülserler öyküsü"],
      meds: ["Esomeprazol 40mg 1x1 (düzensiz)"],
      fm: "Epigastrik bölgede palpasyonla belirgin hassasiyet saptandı. Defans veya rebound yok."
    },
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: [
      "Yüksek doz Proton Pompası İnhibitörü (Lansoprazol 60mg 2x1) başlanması",
      "Tümör lokalizasyonu (genellikle gastrinoma üçgeninde) için Somatostatin Reseptör Sintigrafisi ve cerrahi eksizyon",
      "MEN-1 sendromu eşliği açısından kalsiyum ve parathormon düzeylerinin taranması"
    ],
    consultations: ["Endokrinoloji Polikliniği", "Gastroenteroloji Polikliniği", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "vipoma",
    name: "VIPoma (Verner-Morrison Sendromu)",
    category: "gastrointestinal",
    difficulty: "expert",
    monitor: { hr: [95, 110], bp: [80, 95, 50, 60], spo2: [96, 98], rr: [18, 22], temp: [36.2, 36.7], ecg: "normal" },
    abnormals: {
      potasyum: 1.8,
      ekg: "Hipokalemi bulguları (T dalgası düzleşmesi, U dalgası belirginleşmesi)"
    },
    symptoms: {
      complaints: ["Günde 10-15 kez su gibi ishal", "Aşırı halsizlik ve kas güçsüzlüğü", "Bacaklarda kramplar"],
      story: "50 yaşındaki kadın hasta, son 2 aydır aç kalsa bile durmayan, günde 3-4 litreye varan, kokusuz, su gibi ishal, aşırı halsizlik ve bacaklarında kramplar şikayetiyle başvurdu. Serum VIP düzeyi yüksek, klor değeri 90 (aklorhidri).",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Cilt turgor tonusu azalmış (dehidrasyon bulguları). Kas güçleri alt ekstremitelerde 4/5 (hipokalemiye bağlı). Kalp sesleri ritmik ve taşikardik."
    },
    requiredTests: ["potasyum", "ekg"],
    contraindicated: [],
    treatments: [
      "Yoğun sıvı ve elektrolit replasmanı (özellikle potasyum desteği)",
      "İshal semptomlarını kontrol etmek için Somatostatin Analoğu (Oktreotid SC/IV) tedavisi",
      "Pankreastaki VIP salgılayan tümörün lokalizasyonu ve cerrahi olarak çıkartılması ameliyatı"
    ],
    consultations: ["Gastroenteroloji Polikliniği", "Endokrinoloji Polikliniği", "Genel Cerrahi Konsültasyonu"]
  }

,

  {
    id: "sinuzit_akut",
    name: "Akut Sinüzit",
    category: "solunum",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Yüzde basınç ve ağrı", "Burun tıkanıklığı", "Sarı-yeşil burun akıntısı", "Hafif ateş"], "story": "Hasta son 5 gündür devam eden, özellikle öne eğilmekle artan alın ve yanak bölgesinde dolgunluk, basınç hissi ve ağrı şikayetiyle başvurdu. Beraberinde koyu kıvamlı burun akıntısı mevcut.", "pmh": ["Alerjik rinit"], "meds": ["Yok"], "fm": "Yanak ve alın sinüs bölgelerinde palpasyonla hassasiyet (+). Geniz akıntısı mevcut. Akciğer sesleri doğal."},
    requiredTests: ["crp", "wbc"],
    contraindicated: [],
    treatments: ["Tuzlu su ile nazal lavaj", "Semptomatik tedavi (Analjezik/Antipiretik)", "Gerekirse amoksisilin-klavulanat tedavisi"],
    consultations: ["Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "sinuzit_kronik",
    name: "Kronik Sinüzit",
    category: "solunum",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["12 haftadan uzun süren burun tıkanıklığı", "Koku alamama", "Geniz akıntısı", "Kronik öksürük"], "story": "Hasta yaklaşık 4 aydır devam eden, ilaç tedavileriyle tamamen geçmeyen burun tıkanıklığı, koku alamama ve sürekli boğazını temizleme ihtiyacı hissettiren geniz akıntısı şikayetleriyle başvurdu.", "pmh": ["Astım"], "meds": ["Nazal steroid sprey (ara ara)"], "fm": "Bilateral nazal pasajlar ödemli, mukopürülan akıntı gözlendi. Akciğer dinleme bulguları doğal."},
    requiredTests: ["crp", "pa_ac"],
    contraindicated: [],
    treatments: ["Nazal steroid spreyler", "Büyük hacimli nazal yıkamalar", "KBB değerlendirmesi sonrası cerrahi planlama"],
    consultations: ["Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "tonsillofarenjit_akut",
    name: "Akut Tonsillofarenjit (Bademcik İltihabı)",
    category: "solunum",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Şiddetli boğaz ağrısı", "Yutkunma güçlüğü", "Yüksek ateş", "Halsizlik"], "story": "18 yaşındaki hasta, dün başlayan şiddetli boğaz ağrısı, yutkunurken kulağına vuran ağrı ve üşüme-titreme ile yükselen ateş şikayetleriyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Ateş 38.5C. Bilateral tonsiller hiperemik, hipertrofik ve üzerinde beyaz eksüdalar (kriptler) mevcut. Bilateral submandibular ağrılı lenfadenopati."},
    requiredTests: ["wbc", "crp", "bogaz_kultur"],
    contraindicated: [],
    treatments: ["İstirahat ve bol sıvı alımı", "Analjezik ve antipiretik (Parasetamol)", "Bakteriyel şüphede Penisilin V veya Amoksisilin tedavisi"],
    consultations: ["Kulak Burun Boğaz Polikliniği", "Aile Hekimliği Polikliniği"]
  },

  {
    id: "larenjit_akut",
    name: "Akut Larenjit",
    category: "solunum",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Ses kısıklığı", "Ses kaybı", "Boğazda gıcıklanma ve kuru öksürük"], "story": "Hasta 2 gün önce geçirdiği soğuk algınlığı sonrası sesinin tamamen kısıldığını, konuşurken zorlandığını ve boğazında sürekli bir kuruluk hissi olduğunu belirtti.", "pmh": ["GÖRH"], "meds": ["Yok"], "fm": "Genel durum iyi. Ses kısık/fısıltılı. Orofarenks hafif hiperemik, akciğer sesleri doğal."},
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: ["Ses istirahatı (fısıldayarak konuşmamalı)", "Bol ılık sıvı tüketimi ve buhar inhalasyonu", "Gereksiz antibiyotik kullanımından kaçınma"],
    consultations: ["Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "influenza",
    name: "Grip (İnfluenza)",
    category: "solunum",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Birden başlayan yüksek ateş", "Yaygın kas ve eklem ağrısı", "Kuru öksürük", "Şiddetli halsizlik"], "story": "Hasta dün akşam saatlerinde aniden başlayan titreme, 39 dereceye varan ateş, tüm vücudunda kırgınlık, kas ağrıları ve kuru öksürük şikayetleriyle başvurdu. Yataktan kalkamayacak kadar halsiz olduğunu ifade ediyor.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Ateş 38.9C, cilt sıcak ve kuru. Orofarenks hiperemik. Akciğer dinlemekle bilateral kaba solunum sesleri, rale veya ronkus yok."},
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: ["Yatak istirahatı ve bol hidrasyon", "Semptomatik tedavi (Parasetamol / İbuprufen)", "İlk 48 saatte ise Oseltamivir tedavisi"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Aile Hekimliği Polikliniği"]
  },

  {
    id: "covid19_pneumonia",
    name: "COVID-19 Pnömonisi",
    category: "solunum",
    difficulty: "hard",
    monitor: {"hr": [95, 105], "bp": [115, 130, 75, 85], "spo2": [90, 93], "rr": [22, 26], "temp": [37.8, 38.6], "ecg": "normal"},
    abnormals: {"covid_pcr": "Pozitif", "pa_ac": "Bilateral periferik yerleşimli buzlu cam opasiteleri saptandı", "crp": 85, "ddimer": 1.2},
    symptoms: {"complaints": ["Öksürük ve nefes darlığı", "Geçmeyen yüksek ateş", "Tat ve koku kaybı", "Sırt ağrısı"], "story": "Hasta 5 gündür devam eden ateş, öksürük şikayetlerine ek olarak son 24 saattir nefes darlığı ve sırtında batma tarzında ağrı başlaması üzerine başvurdu. Satürasyonu oda havasında düşük saptandı.", "pmh": ["Hipertansiyon"], "meds": ["Perindopril 5mg 1x1"], "fm": "Solunum sayısı 22/dk, hafif takipneik. Akciğer bazallerinde bilateral ince raller duyuluyor. O2 satürasyonu oda havasında %91."},
    requiredTests: ["covid_pcr", "pa_ac", "crp", "wbc", "ddimer"],
    contraindicated: [],
    treatments: ["Oksijen desteği (hedef SpO2 > %94)", "Kortikosteroid (Deksametazon 6mg/gün)", "Profilaktik LMWH (Enoksaparin)", "Destekleyici tedavi"],
    consultations: ["Göğüs Hastalıkları Konsültasyonu", "Enfeksiyon Hastalıkları Konsültasyonu"]
  },

  {
    id: "pertussis",
    name: "Pertusis (Boğmaca)",
    category: "solunum",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Nöbetler halinde öksürük", "Öksürük sonrası derin iç çekme (Whoop sesi)", "Kusma (öksürük sonrası)"], "story": "20 yaşındaki aşı geçmişi belirsiz hasta, yaklaşık 3 haftadır devam eden ve geceleri artan, boğulur tarzda öksürük nöbetleri şikayetiyle başvurdu. Öksürük krizlerinin sonunda kusma eşlik ediyor.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Öksürük nöbeti esnasında hafif siyanotik görünüm. Akciğer sesleri doğal, rale/ronkus saptanmadı."},
    requiredTests: ["wbc", "pa_ac"],
    contraindicated: [],
    treatments: ["Makrolid grubu antibiyotik (Azitromisin)", "Semptomatik öksürük baskılayıcılar", "Temaslı profilaksisinin planlanması"],
    consultations: ["Göğüs Hastalıkları Polikliniği", "Enfeksiyon Hastalıkları Polikliniği"]
  },

  {
    id: "plevral_efuzyon",
    name: "Plevral Efüzyon",
    category: "solunum",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"pa_ac": "Sağ akciğer alt ve orta zonda homojen yoğunluk artışı, plevral sıvı ile uyumlu menisküs belirtisi izlendi"},
    symptoms: {"complaints": ["Nefes darlığı", "Nefes almakla batan yan ağrısı", "Kuru öksürük"], "story": "Hasta son 1 haftadır giderek artan nefes darlığı ve derin nefes almakla veya öksürmekle sağ göğüs kafesinde batma tarzında ağrı şikayetiyle başvurdu. Otururken daha rahat nefes alıyor.", "pmh": ["Koroner arter hastalığı"], "meds": ["Aspirin 100mg 1x1"], "fm": "Sağ akciğer bazalinde solunum sesleri alınamıyor. Sağ bazalde perküsyonda matite mevcut. Solunum sayısı 20/dk."},
    requiredTests: ["pa_ac", "usg_abdomen", "wbc", "crp"],
    contraindicated: [],
    treatments: ["Tanısal ve tedavi edici torasentez yapılması", "Sıvının biyokimyasal analizi (Transuda/Eksuda ayrımı)", "Altta yatan nedene yönelik tedavi"],
    consultations: ["Göğüs Hastalıkları Konsültasyonu", "Göğüs Cerrahisi Konsültasyonu"]
  },

  {
    id: "akciger_kanseri",
    name: "Akciğer Kanseri",
    category: "solunum",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"pa_ac": "Sol akciğer üst lobda düzensiz sınırlı soliter pulmoner nodül/kitle görünümü", "bt_toraks": "Sol akciğer üst lobda 4 cm çapında, spiküle konturlu, mediastinal lenfadenopatilerin eşlik ettiği kitle"},
    symptoms: {"complaints": ["Geçmeyen öksürük", "Kanlı balgam (Hemoptizi)", "İstem dışı kilo kaybı", "Ses kısıklığı"], "story": "Hasta 40 paket-yıl sigara öyküsü olan, son 3 aydır geçmeyen kuru öksürük, balgamda çizgi şeklinde kan görme ve son 2 ayda diyet yapmadan 8 kilo kaybetme şikayetleriyle başvurdu.", "pmh": ["KOAH"], "meds": ["Salbutamol inhaler"], "fm": "Kaşektik görünüm. Sol akciğer üst zonda solunum seslerinde azalma ve lokalize ronküs duyuluyor. Pretibial ödem yok."},
    requiredTests: ["pa_ac", "bt_toraks", "wbc", "hgb"],
    contraindicated: [],
    treatments: ["Toraks BT ve Bronkoskopi ile kitle biyopsisi", "Evreleme amacıyla PET-CT çekilmesi", "Onkoloji ve Göğüs Cerrahisi konseyleriyle ortak tedavi planı (Kemoterapi/Radyoterapi/Cerrahi)"],
    consultations: ["Göğüs Hastalıkları Polikliniği", "Göğüs Cerrahisi Konsültasyonu", "Tıbbi Onkoloji Polikliniği"]
  },

  {
    id: "tuberculosis",
    name: "Tüberküloz (Akciğer Tüberkülozu)",
    category: "solunum",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"pa_ac": "Bilateral akciğer üst loblarda kaviter lezyonlar ve infiltrasyonlar izlendi", "arb_boyama": "ARB Pozitif (Yaymada asido-rezistan basiller görüldü)", "sedim": 55},
    symptoms: {"complaints": ["3 haftadan uzun süren öksürük", "Gece terlemesi", "Halsizlik ve kilo kaybı", "Hafif ateş"], "story": "Hasta yaklaşık 1 aydır devam eden, geceleri çarşafları değiştirecek kadar yoğun terleme, kuru öksürük, halsizlik ve son haftalarda balgamında kan görme şikayetiyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum orta, subfebril ateş (37.4C). Akciğer apeklerinde solunum sesleri kabalaşmış, hafif raller duyuluyor."},
    requiredTests: ["pa_ac", "arb_boyama", "wbc", "sedim", "ppd"],
    contraindicated: [],
    treatments: ["Dörtlü anti-tüberküloz tedavi (Rifampisin + İzoniyazid + Pirazinamid + Etambutol)", "Doğrudan Gözetimli Tedavi (DGT) kapsamına alınma", "Hastanın izole edilmesi ve maske kullanımı"],
    consultations: ["Göğüs Hastalıkları Polikliniği", "Enfeksiyon Hastalıkları Polikliniği"]
  },

  {
    id: "bronşektazi",
    name: "Bronşektazi",
    category: "solunum",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"pa_ac": "Akciğer bazallerinde bronkovasküler gölgelenmelerde artış ve kistik görünümler", "hrct_toraks": "Bilateral alt loblarda taşlı yüzük manzarası ve bronşial dilatasyonlar (bronşektazi ile uyumlu)"},
    symptoms: {"complaints": ["Bol miktarda, kötü kokulu balgamlı öksürük", "Tekrarlayan akciğer enfeksiyonları", "Nefes darlığı"], "story": "Hasta çocukluğundan beri süregelen, son günlerde rengi koyulaşan ve miktarı artan (günde yarım çay bardağı kadar) kötü kokulu balgam çıkarma ve nefes darlığı şikayetiyle başvurdu.", "pmh": ["Çocuklukta geçirilmiş ağır pnömoni"], "meds": ["Gerektiğinde bronkodilatör inhalerler"], "fm": "Bilateral akciğer bazallerinde belirgin kaba raller ve ronkuslar duyuluyor. Parmaklarda hafif çomaklaşma (clubbing) mevcut."},
    requiredTests: ["pa_ac", "hrct_toraks", "wbc", "crp"],
    contraindicated: [],
    treatments: ["Akut alevlenmede antibiyotik tedavisi", "Postüral drenaj ve göğüs fizyoterapisi", "Bronkodilatör ve mukolitik tedaviler"],
    consultations: ["Göğüs Hastalıkları Polikliniği"]
  },

  {
    id: "silikosis",
    name: "Pnömokonyoz (Silikozis)",
    category: "solunum",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"pa_ac": "Bilateral üst ve orta zonlarda multipl küçük nodüler opasiteler ve konglomerasyon alanları", "sft": "Restriktif tipte solunum fonksiyon kaybı saptandı"},
    symptoms: {"complaints": ["Eforla artan ilerleyici nefes darlığı", "Kuru öksürük", "Göğüste sıkışma hissi"], "story": "Hasta 15 yıl boyunca kot kumlama işinde çalıştığını, son 2 yıldır giderek artan, artık düz yolda yürürken bile rahatsız eden nefes darlığı ve kuru öksürük şikayetiyle başvurduğunu belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Solunum sayısı 18/dk. Akciğer sesleri bilateral hafif azalmış, ek ses duyulmadı."},
    requiredTests: ["pa_ac", "hrct_toraks", "sft"],
    contraindicated: [],
    treatments: ["Maruziyetin tamamen sonlandırılması", "Semptomatik tedavi ve yıllık influenza/pnömokok aşıları", "Solunum yetmezliği gelişirse oksijen desteği ve akciğer nakli değerlendirmesi"],
    consultations: ["Göğüs Hastalıkları Polikliniği", "Meslek Hastalıkları Polikliniği"]
  },

  {
    id: "epiglottit_akut",
    name: "Akut Epiglottit",
    category: "solunum",
    difficulty: "expert",
    monitor: {"hr": [110, 130], "bp": [105, 120, 65, 75], "spo2": [89, 93], "rr": [24, 30], "temp": [38.5, 39.2], "ecg": "normal"},
    abnormals: {"pa_ac": "Lateral boyun grafisinde epiglottis ödemi (başparmak belirtisi - thumb sign) izlendi"},
    symptoms: {"complaints": ["Aniden başlayan boğaz ağrısı", "Yutma güçlüğü ve tükürük akması (drooling)", "Stridor ve solunum sıkıntısı", "Ses kısıklığı"], "story": "Hasta 6 saat içinde hızla gelişen, yutkunamadığı için tükürüğünü dışarı akıtmak zorunda kalan, nefes alırken hırıltı (stridor) olan ve öne doğru eğilerek nefes almaya çalışan acil bir tablodur.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Toksik görünüm, ajite. Tripod pozisyonunda oturuyor. Ateş 39.0C. İnspiratuar stridor mevcut. Çene altında ve boyunda hassasiyet."},
    requiredTests: ["wbc", "crp", "pa_ac"],
    contraindicated: [],
    treatments: ["Hava yolunun derhal güvenceye alınması (Entübasyon veya acil trakeostomi hazırlığı)", "IV seftriakson + vankomisin antibiyoterapisi", "IV Kortikosteroid tedavisi ve yakın monitörizasyon"],
    consultations: ["Acil Tıp Konsültasyonu", "Kulak Burun Boğaz Konsültasyonu", "Anesteziyoloji Konsültasyonu"]
  },

  {
    id: "sarkoidoz",
    name: "Sarkoidoz",
    category: "solunum",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"pa_ac": "Bilateral simetrik hiler lenfadenopati izlendi", "bt_toraks": "Bilateral hiler ve mediastinal lenfadenopatiler, bronkovasküler kılıf boyunca mikro-nodüller"},
    symptoms: {"complaints": ["Kuru öksürük ve nefes darlığı", "Ciltte kırmızı sert şişlikler (eritema nodozum)", "Halsizlik ve eklem ağrıları"], "story": "Hasta yaklaşık 1 aydır devam eden halsizlik, ayak bileklerinde ağrılı kırmızı şişlikler ve son haftalarda eklenen kuru öksürük şikayetleriyle göğüs hastalıklarına başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Pretibial bölgede ağrılı eritemli nodüller mevcut. Akciğer sesleri doğal."},
    requiredTests: ["pa_ac", "bt_toraks", "wbc", "crp"],
    contraindicated: [],
    treatments: ["Evre 1 semptomsuz hastalarda tedavisiz yakın takip", "Semptomatik veya ilerleyici akciğer tutulumu varsa Oral Kortikosteroid tedavisi", "Ek dış organ tutulumlarının (göz, kalp, nöro) taranması"],
    consultations: ["Göğüs Hastalıkları Polikliniği", "Romatoloji Polikliniği"]
  },

  {
    id: "periferal_arter_hastaligi",
    name: "Periferal Arter Hastalığı",
    category: "kardiyovaskuler",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"abi": 0.65, "doppler_alt_ext_arteriyel": "Femoral ve popliteal arterlerde trifazik akım kaybı, monofazik akım ve yer yer darlıklar izlendi"},
    symptoms: {"complaints": ["Yürümekle gelen ve dinlenmekle geçen bacak ağrısı (Kladikasyo)", "Ayaklarda soğukluk ve solukluk"], "story": "Hasta yaklaşık 6 aydır devam eden, yaklaşık 100-200 metre yürümekle her iki baldırında başlayan, durup 5 dakika dinlenmekle tamamen geçen sıkıştırıcı ağrı şikayetiyle başvurdu.", "pmh": ["Hipertansiyon", "Tip 2 Diyabet", "Aktif sigara kullanımı (30 paket-yıl)"], "meds": ["Metformin 1000mg 2x1", "Amlodipin 10mg 1x1"], "fm": "Bilateral ayak sırtı soğuk. Ayak bileği nabızları (dorsalis pedis ve tibialis posterior) bilateral zayıf palpe ediliyor. Bacak kıllarında dökülme mevcut."},
    requiredTests: ["abi", "doppler_alt_ext_arteriyel"],
    contraindicated: [],
    treatments: ["Risk faktörlerinin modifikasyonu (Sigaranın bırakılması, lipid kontrolü)", "Antiplatelet tedavi (Aspirin veya Klopidogrel)", "Yürüyüş egzersizleri ve vazodilatör tedavi (Silostazol)"],
    consultations: ["Kardiyoloji Polikliniği", "Kalp ve Damar Cerrahisi Polikliniği"]
  },

  {
    id: "svt",
    name: "Supraventriküler Taşikardi (SVT)",
    category: "kardiyovaskuler",
    difficulty: "medium",
    monitor: {"hr": [170, 190], "bp": [105, 120, 65, 75], "spo2": [96, 98], "rr": [18, 22], "temp": [36.2, 36.6], "ecg": "normal"},
    abnormals: {"ekg": "Dar QRS kompleksli düzenli taşikardi (Hız: 180/dk), P dalgaları seçilemiyor (SVT ile uyumlu)"},
    symptoms: {"complaints": ["Aniden başlayan ve aniden biten hızlı çarpıntı", "Hafif baş dönmesi ve fenalık hissi", "Göğüste dolgunluk"], "story": "28 yaşındaki hasta, yaklaşık 30 dakika önce otururken aniden başlayan, kalbinin göğsünden çıkacakmış gibi hızlı çarptığını hissettiği çarpıntı şikayetiyle acil servise başvurdu. Göğüs ağrısı veya bayılma yok.", "pmh": ["Benzer çarpıntı atakları öyküsü"], "meds": ["Yok"], "fm": "Genel durum iyi, ajite görünümlü. Kalp sesleri ritmik ve aşırı taşikardik. Akciğer sesleri doğal."},
    requiredTests: ["ekg", "troponin_i"],
    contraindicated: [],
    treatments: ["Vagal manevralar (karotis sinüs masajı veya valsalva)", "Hemodinamik olarak stabilse IV Adenozin bolus uygulaması", "Yanıt alınamazsa IV Beta bloker veya Kalsiyum kanal blokeri", "Hemodinamik instabilite varlığında senkronize kardiyoversiyon"],
    consultations: ["Kardiyoloji Konsültasyonu"]
  },

  {
    id: "mvp",
    name: "Mitral Kapak Prolapsusu",
    category: "kardiyovaskuler",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"eko": "Mitral kapak arka yaprakçığında sistolde sol atriyuma doğru 2 mm'den fazla prolapsus izlendi"},
    symptoms: {"complaints": ["Ara ara gelen çarpıntılar", "Atipik göğüs ağrısı", "Halsizlik ve hafif anksiyete"], "story": "22 yaşındaki genç kadın hasta, son birkaç aydır özellikle stresli dönemlerinde artan, kalbinde tekleme ve çarpıntı hissi, göğüs kafesinde tam tarifleyemediği batıcı ağrılar nedeniyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Astenik yapıda. Kalp oskültasyonunda mezosistolik klik ve arkasından gelen hafif geç sistolik üfürüm duyuluyor."},
    requiredTests: ["eko", "ekg"],
    contraindicated: [],
    treatments: ["Çoğu hastada tedavi gerekmez, güvence verme yeterlidir", "Çarpıntı ve göğüs ağrısı belirginse düşük doz beta bloker", "Kahve, alkol ve sigara gibi tetikleyicilerden kaçınma önerisi"],
    consultations: ["Kardiyoloji Polikliniği"]
  },

  {
    id: "aort_stenozu",
    name: "Aort Stenozu",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"eko": "Kalsifik aort kapağı, kapak alanı 0.8 cm² (ağır aort darlığı), sol ventrikül hipertrofisi saptandı", "ekg": "Sol ventrikül hipertrofisi bulguları ve sol aks sapması"},
    symptoms: {"complaints": ["Eforla gelen nefes darlığı", "Egzersiz esnasında göğüs ağrısı", "Eforla gelişen bayılma (senkop)"], "story": "72 yaşındaki hasta, son 6 aydır merdiven çıkarken göğsünde sıkışma hissi, nefes darlığı ve dün yokuş çıkarken yaşadığı kısa süreli bayılma hissi nedeniyle polikliniğe başvurdu.", "pmh": ["Hipertansiyon"], "meds": ["Lisinopril 10mg 1x1"], "fm": "Kalp tepe atımı sola kaymış. Oskültasyonda aort odağında (sağ 2. interkostal aralıkta) boyuna yayılan, sert karakterde kreşendo-dekreşendo tipi ejeksiyon sistolik üfürümü duyuluyor."},
    requiredTests: ["eko", "ekg", "pa_ac"],
    contraindicated: [],
    treatments: ["Semptomatik ağır aort darlığında cerrahi Aort Kapak Replasmanı (AVR) veya TAVI", "Ağır darlıkta efor testinden kaçınılması", "Diüretik tedavisinin dikkatli başlanması (aşırı preload düşüşünden kaçınılmalı)"],
    consultations: ["Kardiyoloji Konsültasyonu", "Kalp ve Damar Cerrahisi Konsültasyonu"]
  },

  {
    id: "endokardit_infektif",
    name: "İnfektif Endokardit",
    category: "kardiyovaskuler",
    difficulty: "expert",
    monitor: {"hr": [95, 105], "bp": [110, 125, 65, 75], "spo2": [95, 97], "rr": [18, 22], "temp": [38.2, 38.8], "ecg": "normal"},
    abnormals: {"kan_kultur": "Pozitif (Streptococcus viridans üremesi saptandı)", "eko": "Mitral kapak sol atriyal yüzde 8 mm boyutunda hareketli vejetasyon ile uyumlu kitle izlendi", "wbc": 14.2, "crp": 92},
    symptoms: {"complaints": ["Uzun süren ve düşmeyen ateş", "Halsizlik, iştahsızlık ve kilo kaybı", "Eklem ağrıları", "Ciltte küçük kırmızı döküntüler"], "story": "Hasta yaklaşık 3 haftadır devam eden, günde 1-2 kez titremeyle yükselen ateş, yaygın halsizlik şikayetleriyle başvurdu. Hastanın 1 ay önce diş çekimi öyküsü mevcut ve kapak hastalığı biliniyor.", "pmh": ["Mitral kapak yetmezliği"], "meds": ["Yok"], "fm": "Ateş 38.6C. Kalp oskültasyonunda mitral odakta yeni duyulan sistolik üfürüm (regürjitan tipte). Ayak tabanlarında ve el ayalarında ağrısız maküler lezyonlar (Janeway lezyonları), subungual kıymık kanamalar."},
    requiredTests: ["kan_kultur", "eko", "wbc", "crp"],
    contraindicated: [],
    treatments: ["Kan kültürleri alındıktan sonra ampirik IV geniş spektrumlu antibiyoterapinin başlanması", "Ekokardiyografi ile vejetasyon varlığının ve boyutunun tespiti", "Gerektiğinde acil cerrahi endikasyonlarının değerlendirilmesi"],
    consultations: ["Kardiyoloji Konsültasyonu", "Enfeksiyon Hastalıkları Konsültasyonu", "Kalp ve Damar Cerrahisi Konsültasyonu"]
  },

  {
    id: "miyokardit",
    name: "Miyokardit",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: {"hr": [90, 105], "bp": [105, 120, 65, 75], "spo2": [94, 96], "rr": [18, 22], "temp": [37.2, 37.8], "ecg": "normal"},
    abnormals: {"troponin_i": 1.45, "ekg": "Yaygın non-spesifik ST segment ve T dalga değişiklikleri, hafif sinüs taşikardisi", "eko": "Sol ventrikül duvar hareketlerinde hafif yaygın hipokinezi, EF %48"},
    symptoms: {"complaints": ["Göğüs ağrısı (perikarditik veya anjinal tarza benzer)", "Nefes darlığı", "Ateş ve halsizlik", "Çarpıntı"], "story": "24 yaşındaki erkek hasta, yaklaşık 1 hafta önce geçirdiği grip benzeri viral enfeksiyon sonrası dün başlayan, nefes almakla ve yatmakla artan, öne eğilmekle hafifleyen göğüs ağrısı ve halsizlik şikayetiyle başvurdu.", "pmh": ["Geçirilmiş viral solunum yolu enfeksiyonu"], "meds": ["Yok"], "fm": "Genel durum orta, subfebril ateş. Kalp sesleri ritmik, taşikardik, hafif S3 duyuluyor. Akciğer sesleri doğal."},
    requiredTests: ["troponin_i", "ekg", "eko", "crp"],
    contraindicated: [],
    treatments: ["İstirahat ve yakın hemodinamik izlem", "Kalp yetmezliği gelişirse ACE inhibitörü, beta-bloker ve diüretik tedavisi", "NSAİİ tedavisi (ağrı kontrolü için, dikkatli dozda)"],
    consultations: ["Kardiyoloji Konsültasyonu"]
  },

  {
    id: "dilate_kardiyomiyopati",
    name: "Dilate Kardiyomiyopati",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"eko": "Sol ventrikül dilate, ejeksiyon fraksiyonu (EF) %25 saptandı, global hipokinezi", "ntprobnp": 4500, "pa_ac": "Kardiyomegali, bilateral pulmoner konjesyon bulguları"},
    symptoms: {"complaints": ["İlerleyici nefes darlığı", "Geceleri gelen nefes darlığı (PND)", "Karında şişlik ve ayaklarda ödem"], "story": "Hasta son 3 aydır giderek artan nefes darlığı, geceleri 2-3 yastıkla yatabilme ve son 2 haftadır ayak bileklerinde başlayan şişlik şikayetiyle başvurdu. Kronik alkol kullanım öyküsü mevcut.", "pmh": ["Alkol bağımlılığı"], "meds": ["Yok"], "fm": "Kalp tepe atımı sola ve aşağıya kaymış. Dinlemekle S3 duyuluyor. Bilateral pretibial ödem (+++) ve juguler venöz dolgunluk saptandı. Akciğer bazallerinde raller."},
    requiredTests: ["eko", "ekg", "ntprobnp", "pa_ac"],
    contraindicated: [],
    treatments: ["Alkol tüketiminin tamamen sonlandırılması", "Standart kalp yetmezliği tedavisi (ACEİ/ARB, Beta Bloker, Spironolakton)", "Sıvı yükünü azaltmak için Loop Diüretiği (Furosemid)"],
    consultations: ["Kardiyoloji Polikliniği"]
  },

  {
    id: "hipertrofik_kardiyomiyopati",
    name: "Hipertrofik Kardiyomiyopati",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"eko": "Asimetrik septum hipertrofisi saptandı (İnterventriküler septum: 18 mm, arka duvar: 10 mm), SAM (sistolik anterior hareket) pozitif", "ekg": "Derin inferior ve lateral T inversiyonları, sol ventrikül hipertrofisi bulguları"},
    symptoms: {"complaints": ["Eforla gelen göğüs ağrısı ve çarpıntı", "Egzersiz esnasında fenalık hissi veya bayılma", "Nefes darlığı"], "story": "17 yaşındaki lise öğrencisi sporcu hasta, antrenmanlar sırasında ara ara göğsünde sıkışma hissi, çarpıntı ve en son antrenmanda koşarken aniden bayılma (senkop) yaşaması üzerine getirildi.", "pmh": ["Ailede genç yaşta ani ölüm öyküsü"], "meds": ["Yok"], "fm": "Genel durum iyi. Sol ventrikül tepe atımı çift dalgalı palpe ediliyor. Sol sternal kenarda valsalva manevrasıyla belirginleşen sistolik ejeksiyon üfürümü duyuluyor."},
    requiredTests: ["eko", "ekg"],
    contraindicated: [],
    treatments: ["Ağır rekabetçi sporların tamamen yasaklanması", "Sol ventrikül doluşunu düzeltmek ve çıkış yolu obstrüksiyonunu azaltmak için Beta bloker (Metoprolol) tedavisi", "Yüksek riskli hastalarda ani ölümü önlemek için ICD (İntrakardiyak Defibrilatör) takılması"],
    consultations: ["Kardiyoloji Konsültasyonu"]
  },

  {
    id: "sucicegi",
    name: "Suçiçeği (Varicella)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Ciltte yaygın kaşıntılı döküntüler", "Hafif ateş", "Halsizlik", "Baş ağrısı"], "story": "Hasta 2 gün önce başlayan hafif ateş sonrası tüm vücudunda, özellikle gövde ve yüzde yoğunlaşan, önce kızarık lezyonlar halinde başlayıp hızla içi sıvı dolu kabarcıklara (veziküllere) dönüşen kaşıntılı döküntüler nedeniyle getirildi.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Gövde, saçlı deri ve ekstremitelerde farklı evrelerde (papül, vezikül, kabuklu lezyon) 'çiğ damlası' benzeri polimorfik leökositik lezyonlar mevcut. Akciğer sesleri doğal."},
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: ["Kaşıntıyı azaltmak için topikal losyonlar ve oral antihistaminikler", "Ateş düşürücü olarak Parasetamol (Reye sendromu riski nedeniyle Aspirin kesinlikle kontrendikedir)", "Tırnakların kısa kesilmesi ve sekonder enfeksiyonların önlenmesi"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "kizamik",
    name: "Kızamık (Rubeola)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Yüksek ateş", "Kuru öksürük ve burun akıntısı", "Gözlerde kızarıklık ve sulanma (konjonktivit)", "Yüzden başlayan döküntü"], "story": "Hasta 4 gün önce yüksek ateş, öksürük, hapşırma ve göz akıntısı şikayetleriyle başladı. Dün kulak arkasından başlayarak yüze ve gövdeye yayılan birleşme eğiliminde kırmızı döküntüleri başladı. Ağız içinde küçük beyaz lekeler fark edildi.", "pmh": ["Aşıları eksik"], "meds": ["Yok"], "fm": "Toksik görünüm. Ateş 39.2C. Makülopapüler döküntü tüm vücuda yayılmakta. Ağız içi mukozasında azı dişleri hizasında beyaz lekeler (Koplik lekeleri) mevcut."},
    requiredTests: ["wbc", "crp", "pa_ac"],
    contraindicated: [],
    treatments: ["Destek tedavisi ve bol hidrasyon", "Komplikasyonları önlemek için Vitamin A desteği", "Sekonder bakteriyel enfeksiyon gelişirse uygun antibiyotik tedavisi"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "kizamikcik",
    name: "Kızamıkçık (Rubella)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Hafif döküntü", "Boyun arkasında lenf nodu şişliği", "Hafif ateş", "Eklem ağrıları"], "story": "Hasta 24 saat önce yüzden başlayan, gövdeye hızla yayılan ve kaşıntılı olmayan hafif pembe döküntüler ve kulak arkasındaki şişlikler nedeniyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Subfebril ateş (37.5C). Gövdede birleşme göstermeyen pembe maküler döküntüler. Belirgin postaurikuler ve suboksipital ağrısız lenfadenopati."},
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: ["Yatak istirahatı ve semptomatik tedavi", "Gebelere maruziyet açısından uyarılarda bulunulması", "Yakın temaslı takibi"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

  {
    id: "kabakulak",
    name: "Kabakulak (Mumps)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"amilaz": 320},
    symptoms: {"complaints": ["Kulak önü ve altında ağrılı şişlik", "Çiğneme ve yutma esnasında ağrı", "Ateş ve halsizlik"], "story": "Hasta her iki yanakta ve kulak altında dün başlayan, ağızlı yiyecekler yerken şiddetlenen şişlik, ağrı ve ateş şikayetiyle getirildi.", "pmh": ["Eksik aşı öyküsü"], "meds": ["Yok"], "fm": "Bilateral parotis bezinde belirgin şişlik, palpasyonla ağrılı ve ödemli. Orofarenkste stenon kanalı ağzı hiperemik. Testis muayenesi doğal."},
    requiredTests: ["wbc", "amilaz"],
    contraindicated: [],
    treatments: ["Analjezik ve antipiretik (Parasetamol)", "Sıcak veya soğuk kompres uygulaması", "Yumuşak gıdalarla beslenme önerisi, asitli yiyeceklerden kaçınma"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "el_ayak_agiz",
    name: "El-Ayak-Ağız Hastalığı",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Ağızda ağrılı yaralar (aft benzeri)", "El ve ayaklarda döküntü", "Hafif ateş ve iştahsızlık"], "story": "5 yaşındaki hasta, ağzındaki yaralar nedeniyle yemek yiyememe, hafif ateş ve el ayası ile ayak tabanında oluşan küçük kırmızı benekler nedeniyle getirildi.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Orofarenkste ağrılı veziküler lezyonlar ve ülserler. El ayaları, ayak tabanları ve kalça bölgesinde oval, gri-kırmızı vezikülopapüler döküntüler."},
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: ["Sıvı kaybını önlemek için soğuk/ılık içecekler, püre tarzı gıdalar", "Oral ağrıyı azaltmak için lokal anestezikli spreyler", "Semptomatik ateş düşürücüler"],
    consultations: ["Pediatri Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "ebv_mononukleoz",
    name: "Enfeksiyöz Mononükleoz (EBV)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"ebv_panel": "EBV VCA IgM Pozitif, EBNA IgG Negatif saptandı", "wbc": 12.8, "ast": 85, "alt": 92},
    symptoms: {"complaints": ["Boğaz ağrısı", "Ateş", "Boyunda belirgin şişlikler", "Aşırı halsizlik"], "story": "19 yaşındaki üniversite öğrencisi hasta, yaklaşık 1 haftadır devam eden şiddetli boğaz ağrısı, yutkunamama, boynunda ele gelen ceviz büyüklüğünde şişlikler ve yataktan çıkamayacak düzeyde halsizlik şikayetiyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Ateş 38.3C. Bilateral tonsiller belirgin hipertrofik ve membranöz eksüda ile kaplı. Yaygın servikal ve aksiller lenfadenopati. Sol üst kadranda palpasyonla splenomegali saptandı."},
    requiredTests: ["wbc", "ebv_panel", "crp", "ast", "alt"],
    contraindicated: [],
    treatments: ["İstirahat ve bol sıvı desteği", "Dalak rüptürü riski nedeniyle en az 4 hafta ağır sporlardan ve travmadan kaçınma", "Semptomatik tedavi, sekonder enfeksiyon yoksa gereksiz antibiyotikten (özellikle ampisilin/amoksisilin döküntü yapar) kaçınma"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "sifiliz",
    name: "Sifiliz (Frengi)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"vdrl": "Reaktif (Titre: 1/32)"},
    symptoms: {"complaints": ["Genital bölgede ağrısız yara", "Avuç içi ve ayak tabanında döküntü", "Kasıkta ağrısız şişlik"], "story": "Hasta yaklaşık 2 hafta önce penis gövdesinde/vulvada ortaya çıkan, kendiliğinden geçen ağrısız sert bir yara öyküsü verdi. Son 3 gündür tüm vücudunda, özellikle avuç içlerinde kırmızı döküntüler başlamış.", "pmh": ["Şüpheli cinsel temas öyküsü"], "meds": ["Yok"], "fm": "Genel durum iyi. Avuç içlerinde, ayak tabanlarında ve gövdede bakır kırmızısı makülopapüler döküntüler izlendi. Bilateral inguinal ağrısız lastik kıvamında lenfadenopati."},
    requiredTests: ["vdrl", "wbc", "crp"],
    contraindicated: [],
    treatments: ["Tek doz Benzatin Penisilin G 2.4 milyon ünite IM (Erken evre için)", "Nörosifiliz şüphesi varsa BOS analizi yapılması", "Cinsel partner tedavisi ve bildirim"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "gonore",
    name: "Gonore (Bel Soğukluğu)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"tit": "Bol lökosit, bol bakteri saptandı", "idrar_kultur": "Neisseria gonorrhoeae üremesi saptandı"},
    symptoms: {"complaints": ["İdrar yaparken şiddetli yanma (disüri)", "Üretradan koyu kıvamlı sarı-yeşil akıntı"], "story": "Erkek hasta yaklaşık 3 gün önce başlayan, idrar yaparken jilet keser gibi yanma hissi ve çamaşırında leke bırakan iltihaplı üretral akıntı şikayetleriyle başvurdu.", "pmh": ["Şüpheli cinsel ilişki (1 hafta önce)"], "meds": ["Yok"], "fm": "Genel durum iyi. Üretral meadan pürülan sarı akıntı geliyor. Skrotum doğal, palpasyonla hassasiyet yok."},
    requiredTests: ["tit", "idrar_kultur", "wbc"],
    contraindicated: [],
    treatments: ["Tek doz Seftriakson 500mg IM + Azitromisin 1g PO dual tedavisi (Klamidya birlikteliği sıktır)", "Partner taraması ve tedavisi", "Tedavi sonlanana kadar cinsel perhiz"],
    consultations: ["Üroloji Polikliniği", "Enfeksiyon Hastalıkları Polikliniği"]
  },

  {
    id: "genital_herpes",
    name: "Genital Herpes (HSV-2)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Genital bölgede ağrılı, kaşıntılı kabarcıklar", "İdrar yaparken sızlama", "Hafif ateş"], "story": "Kadın hasta genital bölgede aniden başlayan şiddetli sızlama, yanma ve sonrasında ortaya çıkan küçük su kabarcıkları ve bunların patlamasıyla oluşan ağrılı yaralar nedeniyle başvurdu.", "pmh": ["Benzer lezyon öyküsü (1 yıl önce)"], "meds": ["Yok"], "fm": "Bilateral labium majus ve minuslarda grup yapmış, eritemli zeminde multipl milimetrik ağrılı veziküller ve yüzeysel ülserasyonlar mevcut. Bilateral inguinal hassas lenfadenopati."},
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: ["Oral antiviral tedavi (Asiklovir 400mg 3x1 veya Valasiklovir 500mg 2x1)", "Lokal hijyen ve ağrı kontrolü (Analjezikler)", "Gelecekteki nüksler ve bulaştırıcılık hakkında bilgilendirme"],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "hpv_kondilom",
    name: "HPV (Kondilom / Genital Siğil)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Genital bölgede karnabahar benzeri ağrısız kitleler", "Kaşıntı"], "story": "Hasta genital bölgede son 2 aydır giderek sayıca artan, ağrısız, pürüzlü, et beni benzeri kabarıklıklar şikayetiyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Perineal, perianal ve vulva/penis çevresinde multipl, milimetrik boyuttan santimetrik boyuta değişen, hiperkeratotik, karnabahar görünümlü (verrüköz) lezyonlar izlendi."},
    requiredTests: ["smear"],
    contraindicated: [],
    treatments: ["Kriyoterapi veya Koterizasyon ile lezyonların destrüksiyonu", "Topikal immünomodülatörler (İmikimod krem)", "Servikal smear taraması yapılması (kadın hastalar için) ve HPV aşısı önerilmesi"],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği", "Dermatoloji Polikliniği", "Üroloji Polikliniği"]
  },

  {
    id: "hiv_aids",
    name: "HIV/AIDS",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"anti_hiv": "Pozitif saptandı (Doğrulama bekleniyor)", "wbc": 2.9, "hgb": 10.5, "crp": 25},
    symptoms: {"complaints": ["Geçmeyen ateş ve ishal", "Son 3 ayda ciddi kilo kaybı", "Ağızda tekrarlayan pamukçuklar", "Gece terlemeleri"], "story": "Hasta yaklaşık 2 aydır süren halsizlik, ara ara çıkan subfebril ateş, geçmeyen sulu ishal ve yaklaşık 12 kilo kaybetme şikayetleriyle enfeksiyon polikliniğine başvurdu.", "pmh": ["Şüpheli cinsel temas öyküleri", "İntravenöz madde kullanımı"], "meds": ["Yok"], "fm": "Kaşektik görünüm. Orofarenkste silinmekle kalkan beyaz plaklar (oral kandidiyazis). Yaygın lenfadenopati mevcut."},
    requiredTests: ["anti_hiv", "wbc", "hgb", "crp"],
    contraindicated: [],
    treatments: ["Anti-HIV doğrulama testi (Western Blot) gönderilmesi", "CD4+ T lenfosit sayısı ve HIV-RNA viral yük takibi", "Kombine antiretroviral tedavi (ART) başlanması ve fırsatçı enfeksiyon profilaksisi"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği"]
  },

  {
    id: "hepatit_a",
    name: "Hepatit A (Akut)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"anti_hav_igm": "Pozitif", "ast": 1250, "alt": 1480, "total_bilirubin": 5.4, "direkt_bilirubin": 3.8},
    symptoms: {"complaints": ["Gözlerde ve ciltte sararma", "İdrar renginde koyulaşma (çay rengi)", "Bulantı, kusma ve iştahsızlık", "Halsizlik"], "story": "Hasta son 5 gündür devam eden aşırı halsizlik, bulantı, yemek kokularına tahammülsüzlük, ardından gözlerinde sararma ve idrar renginin çay gibi koyulaşması şikayetleriyle başvurdu.", "pmh": ["1 ay önce doğu seyahati ve dışarıda yemek yeme öyküsü"], "meds": ["Yok"], "fm": "Genel durum orta. Skleralar ve sublingual bölge belirgin ikterik. Batın muayenesinde sağ üst kadranda hassasiyet ve hafif hepatomegali saptandı."},
    requiredTests: ["anti_hav_igm", "ast", "alt", "total_bilirubin", "direkt_bilirubin"],
    contraindicated: [],
    treatments: ["Yatak istirahatı ve destek tedavisi (bol hidrasyon)", "Karaciğerden metabolize olan ilaçların (örn: parasetamol) kısıtlanması", "Temaslılara aşı veya immünglobulin profilaksisi planlanması"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Gastroenteroloji Polikliniği"]
  },

  {
    id: "hepatit_b_kronik",
    name: "Hepatit B (Kronik)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"hbsag": "Pozitif", "ast": 62, "alt": 78},
    symptoms: {"complaints": ["Çabuk yorulma ve halsizlik", "Sağ üst karında hafif dolgunluk", "Çoğu zaman belirtisiz"], "story": "Hasta rutin işe giriş taramasında kan testlerinde hepatit değerlerinin yüksek çıkması ve HBsAg pozitifliği saptanması üzerine ileri tetkik için başvurdu. Belirgin şikayeti yok.", "pmh": ["Ailede Hepatit B öyküsü"], "meds": ["Yok"], "fm": "Genel durum iyi. Fizik muayene tamamen doğal, ikter veya organomegali saptanmadı."},
    requiredTests: ["hbsag", "anti_hbs", "ast", "alt", "usg_abdomen"],
    contraindicated: [],
    treatments: ["HBV-DNA viral yükünün PCR ile belirlenmesi", "Karaciğer hasarını ve fibrozisi değerlendirmek için gerekirse biyopsi", "Endikasyon varsa oral antiviral tedavi (Tenofovir veya Entekavir)"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Gastroenteroloji Polikliniği"]
  },

  {
    id: "hepatit_c_kronik",
    name: "Hepatit C (Kronik)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"anti_hcv": "Pozitif", "ast": 55, "alt": 68},
    symptoms: {"complaints": ["Halsizlik ve eklem ağrıları", "Belirgin semptom vermez (tesadüfen saptanır)"], "story": "50 yaşındaki hasta, diş tedavisi öncesi yapılan tarama testlerinde anti-HCV pozitifliği saptanması üzerine sevk edildi. Hafif yorgunluk dışında şikayeti bulunmuyor.", "pmh": ["25 yıl önce kan transfüzyonu öyküsü"], "meds": ["Yok"], "fm": "Genel durum iyi. Fizik muayenede patolojik bulgu saptanmadı."},
    requiredTests: ["anti_hcv", "ast", "alt", "usg_abdomen"],
    contraindicated: [],
    treatments: ["HCV-RNA viral yükünün belirlenmesi", "Doğrudan etkili antiviral ajanlar (DAA - örn: Sofosbuvir/Ledipasvir) ile 12 haftalık tedavi planı", "Karaciğer USG ile fibrozis ve siroz gelişim takibi"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Gastroenteroloji Polikliniği"]
  },

  {
    id: "selulit_enfeksiyon",
    name: "Selülit (Yumuşak Doku)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"wbc": 13.5, "crp": 64},
    symptoms: {"complaints": ["Bacakta kızarıklık, şişlik ve ısı artışı", "Şiddetli zonklayıcı ağrı", "Ateş ve halsizlik"], "story": "Hasta sağ ayak bileği iç kısmında küçük bir sıyrık sonrası son 2 gün içinde hızla yayılan kızarıklık, şişlik, bacağını basamama ve ateş şikayetiyle başvurdu.", "pmh": ["Tinea pedis (ayak mantarı)"], "meds": ["Yok"], "fm": "Ateş 37.9C. Sağ kruris anterolateralinde sınırları net olmayan, parlak eritemli, ödemli, sıcak ve palpasyonla son derece hassas lezyon. Giriş kapısı olabilecek interdijital maserasyon mevcut."},
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: ["Bacağın elevasyona alınması ve istirahati", "Ampirik IV veya oral antibiyoterapi (Sefazolin veya Amoksisilin-klavulanat)", "Giriş kapısı olan mantar enfeksiyonunun lokal tedavisi"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "deri_apsesi",
    name: "Deri Apsesi",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Ciltte ağrılı, kırmızı şişlik", "Şişliğin ortasında yumuşama ve beyazlaşma", "Hafif ateş"], "story": "Hasta sol koltuk altında 3 gün önce başlayan, kıl kökü iltihabı şeklinde başlayıp giderek büyüyen, zonklayıcı tarzda şiddetli ağrı yapan ve üzerine basamayan sert bir kitle nedeniyle başvurdu.", "pmh": ["Tekrarlayan furunküloz öyküsü"], "meds": ["Yok"], "fm": "Sol aksillada yaklaşık 3 cm çapında, dalgalanma (flüktüasyon) veren, eritemli, sıcak ve aşırı hassas nodüler kitle saptandı."},
    requiredTests: ["wbc", "yara_kultur"],
    contraindicated: [],
    treatments: ["Apsenin insizyon ve drenajı (tedavinin temelidir)", "Drenaj sonrası serum fizyolojik ile yıkama ve pansuman", "Geniş çevre selüliti varsa veya sistemik bulgu varsa ampirik oral antibiyotik"],
    consultations: ["Genel Cerrahi Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "epilepsi_jeneralize",
    name: "Epilepsi (Jeneralize Tonik-Klonik)",
    category: "noroloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"eeg": "Jeneralize diken-dalga ve multipl diken deşarjları saptandı"},
    symptoms: {"complaints": ["Bilinç kaybı ve yere düşme", "Kaslarda kasılma ve gevşemeler (nöbet)", "Ağızdan köpük gelmesi ve dil ısırma", "Nöbet sonrası şaşkınlık (postiktal dönem)"], "story": "Hasta yakınları tarafından sokakta yürürken aniden çığlık atarak yere yığıldığı, gözlerinin yukarı dikildiği, tüm vücudunun önce kaskatı kesilip ardından titremeye başladığı, ağzından köpükler geldiği ve yaklaşık 2 dakika sonra kasılmaların durup hastanın horlayarak uyuduğu belirtilerek acile getirildi.", "pmh": ["Çocuklukta febril konvülsiyon öyküsü"], "meds": ["Yok"], "fm": "Genel durum orta, konfüze, koopere olamıyor. Dil yan kenarında ısırık izi ve kanama mevcut. Pupiller izokorik. Patolojik refleks saptanmadı."},
    requiredTests: ["eeg", "bt_kranial", "glukoz", "sodyum"],
    contraindicated: [],
    treatments: ["Nöbet sırasında hastanın güvenliğinin sağlanması (yan yatırma, travmadan koruma)", "Hava yolunun açık tutulması, oksijen desteği", "Tekrarlayan nöbetlerde IV antiepileptik (Diazepam/Levetirasetam), kronik takipte uygun oral antiepileptik profilaksisi"],
    consultations: ["Nöroloji Konsültasyonu"]
  },

  {
    id: "bell_paralizisi",
    name: "Bell Paralizisi (Yüz Felci)",
    category: "noroloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Yüzün bir tarafında hareket ettirememe", "Gözünü kapatamama ve gözde kuruma", "Ağız köşesinden sıvı sızması", "Kulak arkasında hafif ağrı"], "story": "Hasta bu sabah uyandığında aynaya baktığında yüzünün sağ tarafının kaydığını, sağ gözünü tam kapatamadığını ve çay içerken bardağın kenarından döküldüğünü fark ederek panik halinde başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sağ alın çizgilerinde silinme, sağ nazolabial olukta silinme, sağ göz kapatılamıyor (Bell fenomeni +), ağız köşesi sola kaymış. Periferik fasiyal paralizi (Grade 4) ile uyumlu bulgular."},
    requiredTests: ["mr_kranial"],
    contraindicated: [],
    treatments: ["İlk 72 saat içinde başlanan oral Kortikosteroid tedavisi (Prednizolon 1mg/kg)", "Gözün korunması (yapay gözyaşı damlaları, gece kapatma pansumanı)", "Fizik tedavi ve rehabilitasyon desteği"],
    consultations: ["Nöroloji Polikliniği", "Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "siyatik",
    name: "Siyatik (Siyatalji)",
    category: "noroloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"mr_spinal": "L4-L5 seviyesinde sağ posterolateral disk herniasyonu ve L5 sinir köküne bası saptandı"},
    symptoms: {"complaints": ["Belden kalçaya ve bacağa yayılan şiddetli ağrı", "Bacakta uyuşma ve karıncalanma", "Yürümekle artan ağrı"], "story": "Hasta ağır bir yük kaldırdıktan sonra belinde aniden başlayan ve sağ kalçasından uyluk arkasına, oradan ayak bileğine kadar yayılan, elektrik çarpması tarzında şiddetli ağrı şikayetiyle başvurdu.", "pmh": ["Lomber disk hernisi"], "meds": ["Gerektiğinde NSAİİ ilaçlar"], "fm": "Genel durum iyi. Antaljik yürüyüş mevcut. Sağ bacakta düz bacak kaldırma testi (Lasegue) 45 derecede pozitif. Sağ ayak başparmak ekstansiyon gücü hafif azalmış (4/5)."},
    requiredTests: ["mr_spinal"],
    contraindicated: [],
    treatments: ["Akut dönemde kısa süreli yatak istirahatı ve sert yatakta yatma", "NSAİİ analjezikler ve kas gevşetici ilaçlar", "Fizik tedavi yöntemleri ve gerekirse lomber epidural enjeksiyonlar"],
    consultations: ["Fizik Tedavi ve Rehabilitasyon Polikliniği", "Beyin ve Sinir Cerrahisi Polikliniği"]
  },

  {
    id: "servikal_spondiloz",
    name: "Servikal Spondiloz",
    category: "noroloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Boyun ağrısı ve ense sertliği", "Omuzlara ve kollara yayılan künt ağrı", "Ellerde uyuşma ve kuvvetsizlik"], "story": "Hasta yaklaşık 1 yıldır devam eden boyun ağrısı, boynunu sağa sola çevirirken çıtırtı sesleri gelmesi, son haftalarda her iki elinde uyuşma ve bazen eşyaları düşürme şikayetleriyle başvurdu.", "pmh": ["Masa başı iş (bilgisayar kullanımı)"], "meds": ["Yok"], "fm": "Boyun hareket açıklığı (fleksiyon, rotasyon) ağrılı ve kısıtlı. Bilateral trapez kaslarında hassasiyet. DTR'ler üst ekstremitelerde hafif normoaktif."},
    requiredTests: ["servikal_grafi", "mr_spinal"],
    contraindicated: [],
    treatments: ["Boyun kaslarını güçlendirici egzersizler ve postür eğitimi", "Akut alevlenmelerde NSAİİ ve lokal sıcak uygulamaları", "İlerleyici miyelopati bulguları varlığında cerrahi dekompresyon değerlendirmesi"],
    consultations: ["Fizik Tedavi ve Rehabilitasyon Polikliniği", "Beyin ve Sinir Cerrahisi Polikliniği"]
  },

  {
    id: "gerilim_bas_agrisi_kronik",
    name: "Tension Başağrısı (Kronik)",
    category: "noroloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Tüm başı saran, sıkıştırıcı tarzda ağrı (bant tarzında)", "Gün boyu devam eden ağrı", "Boyun kaslarında sertlik"], "story": "Hasta son 6 aydır neredeyse her gün olan, sabah hafif başlayıp akşama doğru artan, başının etrafında sıkı bir bant varmış gibi hissettiren, zonklayıcı olmayan künt bir baş ağrısı şikayetiyle başvurdu.", "pmh": ["Anksiyete bozukluğu", "Uykusuzluk"], "meds": ["Parasetamol (aşırı dozda)"], "fm": "Genel durum iyi. Kraniyal sinirler doğal. Servikal ve perikranial kaslarda palpasyonla belirgin hassasiyet saptandı."},
    requiredTests: ["mr_kranial"],
    contraindicated: [],
    treatments: ["Analjezik kötüye kullanımının önlenmesi (ilaç aşırı kullanımı baş ağrısını artırır)", "Profilaktik olarak trisiklik antidepresanlar (Amitriptilin)", "Stres yönetimi, gevşeme egzersizleri ve uyku düzenlemesi"],
    consultations: ["Nöroloji Polikliniği", "Psikiyatri Polikliniği"]
  },

  {
    id: "diyabetik_noropati",
    name: "Periferik Nöropati (Diyabetik)",
    category: "noroloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"emg": "Bilateral simetrik sensörimotor aksonal nöropati bulguları saptandı", "hba1c": 8.9},
    symptoms: {"complaints": ["Ayaklarda yanma, iğnelenme ve uyuşma (özellikle geceleri)", "Çorap tarzında duyu kaybı", "Ayaklarda üşüme"], "story": "15 yıldır Tip 2 Diyabet hastası olan hasta, son birkaç aydır geceleri uyutmayacak düzeyde ayak tabanlarında yanma, karıncalanma ve üzerine basınca yastığa basıyormuş hissi olduğunu belirterek başvurdu.", "pmh": ["Tip 2 Diyabet (15 yıl)"], "meds": ["Metformin 1000mg 2x1", "Gliklazid 60mg 1x1"], "fm": "Her iki ayakta çorap tarzında hipoestezi (dokunma ve ağrı duyusunda azalma). Vibrasyon duyusu bilateral azalmış. Aşil refleksleri bilateral alınamadı."},
    requiredTests: ["emg", "hba1c", "glukoz"],
    contraindicated: [],
    treatments: ["Sıkı glisemik kontrolün sağlanması (HbA1c hedefi < %7)", "Nöropatik ağrının kontrolü için Pregabalin, Gabapentin veya Duloksetin tedavisi", "Günlük ayak bakımı ve uygun ayakkabı kullanımı eğitimi"],
    consultations: ["Nöroloji Polikliniği", "Endokrinoloji Polikliniği"]
  },

  {
    id: "piyelonefrit_akut",
    name: "Akut Piyelonefrit",
    category: "nefroloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"tit": "Bol lökosit, lökosit silendirleri, eritrosit, bakteri saptandı", "wbc": 15.6, "crp": 128, "usg_abdomen": "Sağ böbrek boyutları artmış, parankim ekosu artmış, toplayıcı sistemde minimal dilatasyon izlendi"},
    symptoms: {"complaints": ["Yan ağrısı (böğür ağrısı)", "Titremeyle yükselen yüksek ateş", "İdrar yaparken yanma ve sık idrar", "Bulantı, kusma"], "story": "Hasta dün aniden başlayan üşüme-titreme, 39 derece ateş, sağ yan tarafında şiddetli ağrı ve sık idrara çıkma şikayetleriyle başvurdu. İştahsızlık ve bulantı eşlik ediyor.", "pmh": ["Sık tekrarlayan sistit öyküleri"], "meds": ["Yok"], "fm": "Ateş 38.8C. Sağ kostovertebral açı hassasiyeti (KVAH) belirgin pozitif. Suprapubik bölgede hafif hassasiyet mevcut."},
    requiredTests: ["tit", "idrar_kultur", "wbc", "crp", "usg_abdomen"],
    contraindicated: [],
    treatments: ["İdrar kültürü sonrası hemen ampirik IV geniş spektrumlu antibiyoterapi (Siprofloksasin veya Seftriakson)", "IV sıvı hidrasyonu ve antienflamatuar/analjezik tedavi", "Komplike edici faktörler (taş, obstrüksiyon) açısından renal ultrasonografi ile değerlendirme"],
    consultations: ["Nefroloji Konsültasyonu", "Üroloji Konsültasyonu"]
  },

  {
    id: "kbh",
    name: "Kronik Böbrek Hastalığı",
    category: "nefroloji",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"kreatinin": 2.45, "bun": 58, "egfr": 28, "idrar_24h_protein": 1200, "hgb": 10.2, "usg_abdomen": "Bilateral böbrek boyutları küçülmüş (sağ 8.5 cm, sol 8.2 cm), parankim kalınlığı azalmış ve ekojenitesi artmıştır"},
    symptoms: {"complaints": ["Halsizlik ve çabuk yorulma", "Vücutta yaygın şişlik (ödem)", "Bulantı ve iştahsızlık", "İdrar miktarında azalma"], "story": "Hasta son birkaç aydır giderek artan halsizlik, ayak bileklerinde ve göz kapaklarında şişlik, geceleri idrara çıkma şikayetleriyle nefrolojiye başvurdu. Uzun süreli kontrolsüz hipertansiyonu mevcut.", "pmh": ["Hipertansiyon (15 yıl)", "Tip 2 Diyabet (10 yıl)"], "meds": ["Ramipril 5mg 1x1", "Metformin 1000mg 1x1"], "fm": "Genel durum orta, soluk görünüm (anemi). Pretibial ödem (++) mevcut. Kan basıncı 155/90 mmHg. Akciğer bazallerinde hafif raller."},
    requiredTests: ["kreatinin", "bun", "egfr", "tit", "idrar_24h_protein", "hgb", "usg_abdomen"],
    contraindicated: [],
    treatments: ["Tuzsuz ve düşük proteinli diyet", "Kan basıncı (hedef < 130/80) ve glisemik kontrolün optimizasyonu", "Renal anemi tedavisi (Eritropoetin, demir desteği) ve fosfor bağlayıcılar", "Evreye göre diyaliz veya böbrek nakli hazırlığı"],
    consultations: ["Nefroloji Polikliniği"]
  },

  {
    id: "nefrotik_sendrom",
    name: "Nefrotik Sendrom",
    category: "nefroloji",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"tit": "İdrarda protein: ++++ saptandı, lipid damlacıkları izlendi", "idrar_24h_protein": 4200, "albumin": 2.1, "total_kolesterol": 380, "ldl": 285},
    symptoms: {"complaints": ["Tüm vücutta yaygın ödem (anasarka tarzı)", "Köpüklü idrar yapma", "Halsizlik ve kilo artışı"], "story": "35 yaşındaki erkek hasta, son 2 haftadır giderek artan ve artık ayakkabısına sığmayan ayak şişliği, göz kapaklarında ödem ve idrarının aşırı köpüklü olması şikayetleriyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum orta. Yüzde ödem (periorbital), bilateral uyluğa kadar uzanan gode bırakan pretibial ödem (+++) ve batında asit saptandı."},
    requiredTests: ["tit", "idrar_24h_protein", "albumin", "total_kolesterol", "ldl", "kreatinin"],
    contraindicated: [],
    treatments: ["Tanının kesinleştirilmesi ve etiyoloji için Böbrek Biyopsisi planlanması", "Ödem kontrolü için diüretik (Furosemid) ve tuz kısıtlaması", "Proteinüriyi azaltmak için ACE inhibitörü başlanması, hiperlipidemi tedavisi (Statin)"],
    consultations: ["Nefroloji Konsültasyonu"]
  },

  {
    id: "nefritik_sendrom",
    name: "Nefritik Sendrom",
    category: "nefroloji",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"tit": "Eritrosit: bol (dismorfik), eritrosit silendirleri, protein: ++ saptandı", "aso": 480, "c3": 45, "kreatinin": 1.45},
    symptoms: {"complaints": ["İdrarın kola/çay renginde gelmesi (hematüri)", "Tansiyon yüksekliği", "Göz çevresinde şişlik", "İdrar miktarında azalma (oligüri)"], "story": "Hasta yaklaşık 10 gün önce geçirdiği boğaz enfeksiyonu sonrası dün aniden idrar renginin koyulaşıp kola rengini alması, göz kapaklarının şişmesi ve baş ağrısı şikayetiyle başvurdu.", "pmh": ["10 gün önce boğaz enfeksiyonu öyküsü"], "meds": ["Yok"], "fm": "Kan basıncı 150/95 mmHg (hipertansiyon). Periorbital hafif ödem ve ayak bileğinde gode bırakan ödem (+). Kalp ve akciğer sesleri doğal."},
    requiredTests: ["tit", "aso", "c3", "kreatinin", "bun", "crp"],
    contraindicated: [],
    treatments: ["Böbrek fonksiyonlarının yakın takibi ve yatak istirahati", "Tuz ve sıvı kısıtlaması, hipertansiyon tedavisi (Kalsiyum kanal blokerleri)", "Gerekirse kortikosteroid veya immünsüpresif tedavi"],
    consultations: ["Nefroloji Konsültasyonu"]
  },

  {
    id: "prostatit_akut",
    name: "Prostatit (Akut Bakteriyel)",
    category: "nefroloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"tit": "Bol lökosit, bol bakteri saptandı", "wbc": 14.8, "crp": 88, "psa": 12.5},
    symptoms: {"complaints": ["Yüksek ateş ve titreme", "Perine bölgesinde şiddetli ağrı", "İdrar yaparken yanma ve zorlanma", "Sık idrara çıkma"], "story": "45 yaşındaki erkek hasta, dün başlayan üşüme, titreme, ateş, makat ile testisleri arasındaki bölgede dolgunluk ve şiddetli ağrı, idrar yaparken aşırı sızlama şikayetiyle acil servise başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Ateş 38.6C. Suprapubik hassasiyet mevcut. (Not: Akut prostatitte bakteriyemi riski nedeniyle rektal tuşeden kaçınılmalı veya çok nazik yapılmalıdır; prostat ödemli ve aşırı hassastır)."},
    requiredTests: ["tit", "idrar_kultur", "wbc", "crp", "psa"],
    contraindicated: [],
    treatments: ["Hemen IV veya oral Florokinolon (Siprofloksasin) tedavisi başlanması (minimum 4 hafta sürdürülmeli)", "Yatak istirahatı, bol hidrasyon ve analjezik tedavi", "Akut retansiyon gelişirse üretral kateter yerine suprapubik sistostomi tercih edilmesi"],
    consultations: ["Üroloji Konsültasyonu", "Enfeksiyon Hastalıkları Konsültasyonu"]
  },

  {
    id: "mesane_kanseri",
    name: "Mesane Kanseri",
    category: "nefroloji",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"tit": "Bol eritrosit saptandı, lökosit görülmedi", "usg_abdomen": "Mesane arka-sol yan duvarda 3 cm çapında, lümene doğru uzanan vejetan kitle görünümü saptandı", "hgb": 11.2},
    symptoms: {"complaints": ["Ağrısız, pıhtılı idrardan kan gelmesi (hematüri)", "İdrar yaparken zorlanma"], "story": "65 yaşındaki erkek hasta, 40 yıldır sigara içtiğini, son 1 aydır ara ara olan, idrar yaparken hiçbir ağrı veya sızı hissetmeden idrarından pıhtılı kan gelmesi şikayetiyle başvurdu.", "pmh": ["Aktif sigara kullanımı (40 paket-yıl)"], "meds": ["Yok"], "fm": "Genel durum iyi. Fizik muayene tamamen doğal, hassasiyet veya kitle saptanmadı."},
    requiredTests: ["tit", "usg_abdomen", "hgb", "wbc"],
    contraindicated: [],
    treatments: ["Tanı ve tedavi amaçlı sistoskopi ve TUR-M (Transüretral Mesane Tümörü Rezeksiyonu) planlanması", "Tümörün derinliğine göre mesane içi kemoterapi (BCG) veya radikal sistektomi ameliyatı", "Sigaranın kesinlikle bıraktırılması"],
    consultations: ["Üroloji Polikliniği", "Tıbbi Onkoloji Polikliniği"]
  },

  {
    id: "folat_eksikligi_anemisi",
    name: "Folat Eksikliği Anemisi",
    category: "hematoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"hgb": 9.2, "mcv": 112, "folat": 1.8, "b12": 350, "periferik_yayma": "Makrositer eritrositler, hipersegmente nötrofiller izlendi"},
    symptoms: {"complaints": ["Halsizlik ve çabuk yorulma", "Soluk görünüm", "Dilde yanma ve kızarıklık", "Unutkanlık"], "story": "Hasta son 3 aydır giderek artan halsizlik, nefes darlığı ve ağzında yaralar çıkması şikayetiyle başvurdu. Beslenme düzeninin bozuk olduğu ve yeşil sebze tüketmediği öğrenildi.", "pmh": ["Alkol kötüye kullanımı"], "meds": ["Yok"], "fm": "Genel durum iyi. Cilt ve konjonktivalar soluk. Dilde papillerde silinme ve kızarıklık (glosit) izlendi. Sarılık saptanmadı."},
    requiredTests: ["hgb", "mcv", "folat", "b12", "periferik_yayma"],
    contraindicated: [],
    treatments: ["Günlük oral Folik Asit desteği (5 mg/gün)", "Diyetin yeşil yapraklı sebzeler açısından zenginleştirilmesi", "Eşlik eden B12 eksikliği varsa önce B12 yerine konmalıdır (nörolojik hasarı önlemek için)"],
    consultations: ["Hematoloji Polikliniği"]
  },

  {
    id: "kronik_hastalik_anemisi",
    name: "Kronik Hastalık Anemisi",
    category: "hematoloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"hgb": 9.8, "mcv": 82, "demir": 35, "tdbk": 210, "transferin_sat": 16, "ferritin": 280, "crp": 45},
    symptoms: {"complaints": ["Halsizlik, yorgunluk", "Eforla gelen nefes darlığı", "Kronik eklem ağrıları"], "story": "Uzun yıllardır Romatoit Artrit tanısı olan hasta, son aylarda giderek artan halsizlik, solukluk ve merdiven çıkarken tıkanma şikayetleriyle romatoloji kontrolüne geldi.", "pmh": ["Romatoit Artrit (10 yıl)"], "meds": ["Metotreksat 15mg 1x1 haftalık", "Prednizolon 5mg 1x1"], "fm": "Genel durum iyi. Cilt ve konjonktivalar soluk. Ellerde romatoid deformiteler (kuğu boynu, düğme iliği) mevcut. Akciğer sesleri doğal."},
    requiredTests: ["hgb", "mcv", "demir", "tdbk", "transferin_sat", "ferritin", "crp"],
    contraindicated: [],
    treatments: ["Temel amaç altta yatan kronik inflamatuar hastalığın (örn: RA) kontrol altına alınmasıdır", "Demir depoları dolu olduğu için standart demir tedavisi faydasızdır", "Çok ağır vakalarda eritropoetin tedavisi veya kan transfüzyonu"],
    consultations: ["Hematoloji Polikliniği", "Romatoloji Polikliniği"]
  },

  {
    id: "all_losemi",
    name: "Akut Lenfoblastik Lösemi (ALL)",
    category: "hematoloji",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"wbc": 35.8, "hgb": 7.4, "plt": 22, "periferik_yayma": "Yaygın lenfoblastlar (%85 oranında) görüldü, trombositopeni ve anemi izlendi", "kemik_iligi": "Kemik iliğinde %25'in üzerinde lenfoblast infiltrasyonu saptandı"},
    symptoms: {"complaints": ["Yüksek ateş ve sık enfeksiyon geçirme", "Ciltte morluklar ve burun kanaması", "Bacak ve kemik ağrıları", "Halsizlik"], "story": "6 yaşındaki çocuk hasta, son 2 haftadır düşmeyen ateş, bacaklarında morluklar oluşması, yürümek istememesi ve aşırı halsizlik şikayetleriyle getirildi.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum orta, soluk görünüm. Ateş 38.2C. Ciltte yaygın peteşi ve ekimozlar. Bilateral servikal ve aksiller ağrısız, hareketli lenfadenopatiler saptandı. Hepatosplenomegali (+)."},
    requiredTests: ["wbc", "hgb", "plt", "periferik_yayma", "kemik_iligi"],
    contraindicated: [],
    treatments: ["Kemik iliği aspirasyonu ve biyopsisi ile tanının kesinleştirilmesi", "Hemen kemoterapi protokollerinin (indüksiyon tedavisi) başlanması", "Destek tedavisi (kan transfüzyonları, enfeksiyon profilaksisi)"],
    consultations: ["Pediatrik Hematoloji ve Onkoloji Konsültasyonu"]
  },

  {
    id: "aml_losemi",
    name: "Akut Miyeloid Lösemi (AML)",
    category: "hematoloji",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"wbc": 54.2, "hgb": 8.1, "plt": 18, "periferik_yayma": "Miyeloblastlar (%40) izlendi. Auer çubukları (Auer rods) saptandı", "kemik_iligi": "Kemik iliğinde hipersellüler görünüm, miyeloblast oranı %50"},
    symptoms: {"complaints": ["Ateş ve üşüme", "Diş eti kanamaları ve morarmalar", "Halsizlik, nefes darlığı", "Gece terlemesi"], "story": "55 yaşındaki hasta, son 3 haftadır geçmeyen diş eti kanaması, hafif çarpmalarla kol ve bacaklarında büyük morluklar oluşması ve merdiven çıkarken nefes darlığı şikayetiyle başvurdu.", "pmh": ["Geçirilmiş MDS öyküsü"], "meds": ["Yok"], "fm": "Genel durum orta, soluk ve subfebril. Diş etlerinde hipertrofi ve kanama sızısı. Gövde ve ekstremitelerde multipl ekimoz ve peteşiler mevcut."},
    requiredTests: ["wbc", "hgb", "plt", "periferik_yayma", "kemik_iligi"],
    contraindicated: [],
    treatments: ["Kemik iliği biyopsisi ve akım sitometrisi ile alt tip tayini", "Hemen indüksiyon kemoterapisi (Sitarabin + Daunorubisin)", "Enfeksiyon kontrolü ve kan/trombosit süspansiyon destekleri"],
    consultations: ["Hematoloji Konsültasyonu"]
  },

  {
    id: "kml_losemi",
    name: "Kronik Miyeloid Lösemi (KML)",
    category: "hematoloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"wbc": 125.0, "hgb": 10.5, "plt": 550, "periferik_yayma": "Tüm miyeloid seriden hücreler (miyeloblasttan olgun nötrofile kadar) ve belirgin lökositoz izlendi", "kemik_iligi": "Kromozom analizinde t(9;22) Philadelphia kromozomu pozitif saptandı"},
    symptoms: {"complaints": ["Sol üst karında dolgunluk ve ağrı", "Aşırı halsizlik ve kilo kaybı", "Gece terlemeleri"], "story": "Hasta son 3 aydır sol yan tarafında ağırlık, dolgunluk hissi, çabuk doyma, aşırı halsizlik ve geceleri terleme şikayetleriyle polikliniğe başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi, hafif soluk. Sol üst kadranda kot kavsini 6 cm geçen, sert ve ağrısız splenomegali saptandı. Lenfadenopati yok."},
    requiredTests: ["wbc", "hgb", "plt", "periferik_yayma", "kemik_iligi"],
    contraindicated: [],
    treatments: ["Philadelphia kromozomu [t(9;22), BCR-ABL] analizi", "Tirozin Kinaz İnhibitörü (İmatinib / Nilotinib) tedavisi başlanması", "Lökositoz kontrolü (gerekirse Hidroksiüre)"],
    consultations: ["Hematoloji Polikliniği"]
  },

  {
    id: "kll_losemi",
    name: "Kronik Lenfositik Lösemi (KLL)",
    category: "hematoloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"wbc": 45.2, "lenfosit": 82, "hgb": 12.8, "plt": 210, "periferik_yayma": "Olgun görünümlü küçük lenfositler ve ezilmiş hücreler (Gumprecht gölgeleri / smudge cells) izlendi"},
    symptoms: {"complaints": ["Boyunda ve koltuk altında ağrısız şişlikler", "Halsizlik", "Çoğu zaman semptomsuz (rutin kanda saptanır)"], "story": "68 yaşındaki hasta, son birkaç aydır traş olurken boynunda fark ettiği ağrısız sertlikler ve halsizlik şikayetiyle başvurdu. Kan sayımında aşırı lökosit yüksekliği görülmüş.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Bilateral servikal, aksiller ve inguinal bölgelerde ağrısız, lastik kıvamında, mobil multipl lenfadenopatiler saptandı. Hafif splenomegali."},
    requiredTests: ["wbc", "lenfosit", "hgb", "plt", "periferik_yayma"],
    contraindicated: [],
    treatments: ["Erken evre asemptomatik hastalarda 'izle ve bekle' (tedavisiz takip) stratejisi", "İlerleyen evrelerde veya semptomatik hastalarda kemoimmünoterapi (Fludarabin, Rituksimab)", "Enfeksiyonlara karşı yakın takip"],
    consultations: ["Hematoloji Polikliniği"]
  },

  {
    id: "hodgkin_lenfoma",
    name: "Hodgkin Lenfoma",
    category: "hematoloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"biyopsi_lenf": "Reed-Sternberg hücreleri (baykuş gözü görünümü) izlendi, Hodgkin Lenfoma ile uyumlu", "sedim": 42},
    symptoms: {"complaints": ["Boyunda ağrısız, büyüyen şişlik", "Ateş, gece terlemesi ve kilo kaybı (B semptomları)", "Alkol aldıktan sonra lenf nodunda ağrı"], "story": "24 yaşındaki hasta, son 2 aydır sol boyun bölgesinde giderek büyüyen ağrısız şişlik, geceleri üstünü değiştirecek kadar terleme ve diyet yapmadan 6 kilo kaybetme şikayetiyle başvurdu.", "pmh": ["Geçirilmiş EBV enfeksiyonu"], "meds": ["Yok"], "fm": "Sol servikal zincirde yaklaşık 3.5 cm çapında, ağrısız, hareketli, lastik kıvamında lenfadenopati saptandı. Diğer sistem muayeneleri doğal."},
    requiredTests: ["biyopsi_lenf", "wbc", "sedim", "pa_ac"],
    contraindicated: [],
    treatments: ["Kesin tanı için Lenf Nodu Biyopsisi (eksize edilerek)", "Evreleme için PET-CT çekilmesi", "Evresine göre kemoterapi (ABVD protokolü) ve gerekirse radyoterapi"],
    consultations: ["Hematoloji Polikliniği", "Genel Cerrahi Konsültasyonu (biyopsi için)"]
  },

  {
    id: "non_hodgkin_lenfoma",
    name: "Non-Hodgkin Lenfoma",
    category: "hematoloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"biyopsi_lenf": "Diffüz büyük B hücreli lenfoma infiltrasyonu izlendi", "ldh": 480},
    symptoms: {"complaints": ["Vücudun farklı yerlerinde ağrısız şişlikler", "Ateş ve gece terlemesi", "Karın ağrısı veya nefes darlığı"], "story": "58 yaşındaki hasta, koltuk altında ve kasıklarında ortaya çıkan ağrısız şişlikler, son zamanlarda eklenen iştahsızlık, zayıflama ve ateş şikayetleriyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Bilateral servikal, aksiller ve inguinal multipl birleşme gösteren (konglomerat), sert, ağrısız lenfadenopatiler saptandı. Splenomegali (+)."},
    requiredTests: ["biyopsi_lenf", "wbc", "hgb", "ldh", "pa_ac"],
    contraindicated: [],
    treatments: ["Lenf nodu eksizyonel biyopsisi ile histopatolojik alt tip belirlenmesi", "Kombine kemoimmünoterapi (CHOP + Rituksimab)", "Yakın takip ve evreleme tetkikleri"],
    consultations: ["Hematoloji Polikliniği", "Genel Cerrahi Konsültasyonu (biyopsi için)"]
  },

  {
    id: "multiple_miyelom",
    name: "Multiple Miyelom",
    category: "hematoloji",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"hgb": 8.9, "kreatinin": 1.85, "kalsiyum": 11.2, "sedim": 105, "lomber_grafi": "Lomber vertebra ve pelvis grafilerinde multipl litik 'zımba deliği' şeklinde kemik lezyonları saptandı", "kemik_iligi": "Kemik iliğinde plazma hücre oranı: %35 saptandı (plazmasitoz)"},
    symptoms: {"complaints": ["Geçmeyen bel ve kemik ağrıları", "Aşırı halsizlik ve çabuk yorulma", "Sık enfeksiyon geçirme"], "story": "65 yaşındaki hasta, son 6 aydır fizik tedaviye rağmen geçmeyen şiddetli bel ağrısı, kaburga ağrıları ve aşırı halsizlik nedeniyle hematoloji polikliniğine başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum orta, belirgin solukluk mevcut. Sırt ve kaburgalarda palpasyonla lokalize hassasiyet saptandı. Organomegali saptanmadı."},
    requiredTests: ["hgb", "kreatinin", "kalsiyum", "sedim", "lomber_grafi", "kemik_iligi"],
    contraindicated: [],
    treatments: ["Kemik iliği biyopsisinde klonal plazma hücrelerinin gösterilmesi", "Serum ve idrar protein elektroforezinde monoklonal gamopati (M-bandı) tespiti", "Sistemik kemoterapi / immünomodülatörler (Bortezomib, Lenalidomid) ve kemik koruyucular (Bifosfonatlar)"],
    consultations: ["Hematoloji Polikliniği", "Ortopedi Polikliniği"]
  },

  {
    id: "polisitemia_vera",
    name: "Polisitemia Vera",
    category: "hematoloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"hgb": 19.5, "hct": 58, "rbc": 6.8, "wbc": 12.5, "plt": 450, "usg_abdomen": "Splenomegali saptandı"},
    symptoms: {"complaints": ["Sıcak banyo sonrası tüm vücutta şiddetli kaşıntı", "Baş ağrısı ve baş dönmesi", "Yüzde kızarıklık (pletore)", "Görüş bulanıklığı"], "story": "Hasta son birkaç aydır özellikle sıcak duş aldıktan sonra başlayan ve 1 saat süren yaygın vücut kaşıntısı, baş ağrısı, kulak çınlaması ve yüzünün sürekli aşırı kırmızı görünmesi nedeniyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Yüzde ve konjonktivalarda belirgin kızarıklık (pletore). Kan basıncı 145/90 mmHg. Palpasyonla dalak kot kavsini 3 cm geçiyor (splenomegali)."},
    requiredTests: ["hgb", "hct", "rbc", "wbc", "plt", "usg_abdomen"],
    contraindicated: [],
    treatments: ["Hematokrit değerini < %45 tutmak için terapötik flebotomi (kan alma)", "Tromboz riskini azaltmak için düşük doz Aspirin (100mg)", "Yüksek riskli hastalarda miyelosüpresif tedavi (Hidroksiüre)"],
    consultations: ["Hematoloji Polikliniği"]
  },

  {
    id: "ankilozan_spondilit",
    name: "Ankilozan Spondilit",
    category: "romatoloji",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"hla_b27": "Pozitif", "sedim": 38, "crp": 25, "lomber_grafi": "Bilateral sakroiliit (evre 3), omurgada bambu kamışı manzarası başlangıcı izlendi"},
    symptoms: {"complaints": ["3 aydan uzun süren bel ağrısı (sabahları daha şiddetli)", "Sabah tutukluğu (hareket ettikçe açılan)", "Gözde kızarıklık ve ağrı (üveit atakları)"], "story": "28 yaşındaki erkek hasta, son 6 aydır devam eden, özellikle sabahları yataktan kalkarken belinde aşırı sertlik hissettiği, egzersiz yaptıkça ve yürüdükçe rahatlayan bel ağrısı şikayetiyle başvurdu. Ağrı geceleri uykudan uyandırıyor.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Lomber omurga hareketleri tüm yönlere kısıtlı. Schober testi kısıtlı (3 cm ölçüldü). Sakroiliak sıkıştırma testleri bilateral ağrılı."},
    requiredTests: ["hla_b27", "sedim", "crp", "lomber_grafi"],
    contraindicated: [],
    treatments: ["Düzenli egzersiz, postür eğitimi ve yüzme", "Birinci basamakta NSAİİ (İndometasin/Naproksen) tedavisi", "NSAİİ'lere dirençli vakalarda anti-TNF biyolojik ajanların başlanması"],
    consultations: ["Romatoloji Polikliniği", "Fizik Tedavi ve Rehabilitasyon Polikliniği"]
  },

  {
    id: "sle",
    name: "Sistemik Lupus Eritematozus (SLE)",
    category: "romatoloji",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"ana": "Pozitif (Homojen patern, yüksek titre)", "anti_dsdna": 85, "c3": 65, "c4": 8, "wbc": 3.2, "tit": "Proteinüri: + saptandı"},
    symptoms: {"complaints": ["Yanaklarda kelebek tarzında döküntü", "Eklem ağrıları ve şişlik", "Güneşe karşı hassasiyet", "Halsizlik ve saç dökülmesi"], "story": "24 yaşındaki kadın hasta, son birkaç aydır el eklemlerinde ağrı, sabahları yorgun uyanma, güneşe çıktığında yüzünde oluşan kırmızı lekeler ve saçlarında yoğun dökülme şikayetleriyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Yüzde burun sırtını ve yanakları örten, burun-dudak oluğunu koruyan eritemli döküntü (malar raş). El bileği ve MKF eklemlerinde palpasyonla hassasiyet."},
    requiredTests: ["ana", "anti_dsdna", "c3", "c4", "wbc", "tit"],
    contraindicated: [],
    treatments: ["Güneş koruyucu kremler kullanılması ve güneş maruziyetinden kaçınma", "Temel tedavi olarak Hidroksiklorokin başlanması", "Eklem ağrıları için NSAİİ, alevlenmelerde sistemik steroidler veya immünsüpresifler"],
    consultations: ["Romatoloji Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "sjogren_sendromu",
    name: "Sjögren Sendromu",
    category: "romatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Gözlerde kuruluk ve batma hissi", "Ağız kuruluğu ve yutkunma güçlüğü", "Tekrarlayan diş çürükleri"], "story": "Hasta yaklaşık 1 yıldır devam eden gözlerinde sürekli kum varmış gibi batma, kuruluk hissi ve günde birkaç litre su içmesine rağmen geçmeyen ağız kuruluğu, kuru gıdaları su yudumlamadan yutamama şikayetiyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Ağız mukozası kuru, dil paspas gibi kuru. Bilateral parotiste hafif ağrısız büyüme. Gözlerde hafif konjonktival hiperemi."},
    requiredTests: ["anti_ro", "anti_la", "ana", "rf"],
    contraindicated: [],
    treatments: ["Göz kuruluğu için yapay gözyaşı damlaları ve jelleri", "Ağız kuruluğu için sık su yudumlama, şekersiz sakız çiğneme, ağız hijyenine dikkat etme", "Sistemik bulgular varsa Hidroksiklorokin veya düşük doz steroid tedavisi"],
    consultations: ["Romatoloji Polikliniği", "Göz Hastalıkları Polikliniği"]
  },

  {
    id: "skleroderma",
    name: "Sistemik Skleroderm (Skleroderma)",
    category: "romatoloji",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"anti_scl70": "Pozitif", "ana": "Pozitif (Nükleolar patern)"},
    symptoms: {"complaints": ["El parmaklarında soğukta beyazlaşma ve morarma (Raynaud)", "El derisinde sertleşme ve gerilme", "Yutma güçlüğü"], "story": "Hasta soğuk havada ellerinde önce beyazlama, sonra morarma ve ardından ağrılı kızarma olması, son aylarda parmaklarını tam bükememesi, cildinin gerilmesi ve katı gıdaları yutarken takılma hissi şikayetleriyle başvurdu.", "pmh": ["Raynaud fenomeni öyküsü"], "meds": ["Yok"], "fm": "Parmak derisi kalınlaşmış, sertleşmiş, kırışıklıklar kaybolmuş (sklerodaktili). Yüzde mimikler azalmış, ağız açıklığı daralmış (mikrostomi). Parmak uçlarında küçük skarlar."},
    requiredTests: ["anti_scl70", "ana", "esansiyel_tremor", "pa_ac"],
    contraindicated: [],
    treatments: ["Soğuktan kesinlikle korunma, sigaranın bırakılması, kalsiyum kanal blokerleri (Raynaud için)", "Cilt ve sistemik tutulum için immünsüpresif tedavi (Metotreksat / Mikofenolat Mofetil)", "Reflü ve özofagus dismotilitesi için yüksek doz PPI tedavisi"],
    consultations: ["Romatoloji Polikliniği", "Göğüs Hastalıkları Polikliniği"]
  },

  {
    id: "rotator_manset",
    name: "Rotator Manşet Yaralanması",
    category: "romatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"mr_ekstremite": "Sağ omuz supraspinatus tendonunda parsiyel yırtık ve subakromiyal bursit saptandı"},
    symptoms: {"complaints": ["Omuz ağrısı (özellikle kolu yukarı kaldırırken)", "Ağrıyan omuz üzerine yatamama"], "story": "Hasta sağ kolunu yukarı kaldırarak raftan bir şey alırken aniden omzunda başlayan, geceleri üzerine yatmasına izin vermeyen ve saçını tararken zorluk çıkaran omuz ağrısı şikayetiyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sağ omuz aktif abdüksiyonu 80 dereceden sonra ağrılı ve kısıtlı. Ağrılı ark testi pozitif. Boş kutu (Empty can) testi sağda ağrılı ve zayıflık mevcut."},
    requiredTests: ["mr_ekstremite"],
    contraindicated: [],
    treatments: ["Akut dönemde istirahat, aktivite modifikasyonu ve lokal soğuk uygulama", "NSAİİ analjezikler", "Fizik tedavi egzersizleri ve yanıt alınamazsa subakromiyal steroid enjeksiyonu veya cerrahi onarım"],
    consultations: ["Ortopedi ve Travmatoloji Polikliniği", "Fizik Tedavi ve Rehabilitasyon Polikliniği"]
  },

  {
    id: "donmus_omuz",
    name: "Donmuş Omuz (Adeziv Kapsülit)",
    category: "romatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Omuz hareketlerinin her yöne kısıtlanması", "Giderek artan omuz ağrısı"], "story": "Diyabet hastası olan hasta, yaklaşık 3 aydır sol omzunda giderek artan ağrı ve sonrasında kolunu arkaya götürememe, giyinirken ceketini giyememe gibi ciddi hareket kısıtlılığı şikayetiyle başvurdu.", "pmh": ["Tip 2 Diyabet (8 yıl)"], "meds": ["Metformin 1000mg 2x1"], "fm": "Sol omuz aktif ve pasif eklem hareket açıklığı (ROM) tüm yönlere (özellikle eksternal rotasyon ve abdüksiyon) belirgin kısıtlı ve ağrılıdır."},
    requiredTests: ["mr_ekstremite"],
    contraindicated: [],
    treatments: ["Ağrı kontrolü için NSAİİ analjezikler ve fizik tedavi rehabilitasyon programı", "Eklem içi kortikosteroid enjeksiyonu (inflamasyonu ve ağrıyı azaltmak için)", "Sıkı pasif germe egzersizleri ve gerekirse manipülasyon"],
    consultations: ["Fizik Tedavi ve Rehabilitasyon Polikliniği", "Ortopedi Polikliniği"]
  },

  {
    id: "meniskus_yirtigi",
    name: "Menisk meniscus Yırtığı",
    category: "romatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"mr_ekstremite": "Sağ diz medial menisküs arka boynunda grade 3 (rüptür ile uyumlu) yırtık izlendi"},
    symptoms: {"complaints": ["Diz ağrısı (özellikle çömelirken)", "Dizde kilitlenme veya boşalma hissi", "Dizde şişlik"], "story": "Hasta halı sahada futbol oynarken dizinin dönmesi sonrası dizinde ani bir çıt sesi duyduğunu, sonrasında dizinin şiştiğini ve son günlerde yürürken dizinde kilitlenme hissettiğini belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sağ diz ekleminde hafif efüzyon. Eklem çizgisi palpasyonla hassas. McMurray testi ve Apley kompresyon testi sağ dizde pozitif ve ağrılı."},
    requiredTests: ["mr_ekstremite"],
    contraindicated: [],
    treatments: ["Akut dönemde RICE protokolü (İstirahat, Buz, Kompresyon, Elevasyon)", "NSAİİ analjezikler ve diz çevresi kasları güçlendirme egzersizleri", "Mekanik kilitlenme yaratan büyük yırtıklarda artroskopik cerrahi"],
    consultations: ["Ortopedi ve Travmatoloji Polikliniği"]
  },

  {
    id: "kemik_kirigi",
    name: "Kemik Kırığı (Genel)",
    category: "romatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"kemik_grafi": "Sol radius distal uçta deplase kırık hattı izlendi (Colles kırığı)"},
    symptoms: {"complaints": ["Düşme veya travma sonrası şiddetli kemik ağrısı", "Uzuvda şekil bozukluğu (deformite)", "Şişlik ve morarma", "Hareket ettirememe"], "story": "Hasta buzlu yolda kayarak sol el bileği üzerine düştüğünü, sonrasında el bileğinde şiddetli ağrı, şişlik ve eğrilik oluştuğunu belirterek acil servise getirildi.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sol el bileğinde belirgin ödem, ekimoz ve 'çatal arkası' deformitesi mevcut. Parmak hareketleri ağrılı, nabızlar açık, duyu muayenesi doğal."},
    requiredTests: ["kemik_grafi"],
    contraindicated: [],
    treatments: ["Kırık hattının repozisyonu (hizalanması) ve alçı/atele alınarak tespit edilmesi", "Ağrı kontrolü için analjezik tedavi", "Açık kırık veya stabil olmayan kırıklarda cerrahi fiksasyon (plak-vida)"],
    consultations: ["Ortopedi ve Travmatoloji Konsültasyonu"]
  },

  {
    id: "tiroidit_subakut",
    name: "Subakut Tiroidit",
    category: "endokrin",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"tsh": 0.05, "st4": 2.1, "sedim": 85, "crp": 42, "usg_tiroid": "Tiroid bezinde bilateral yama tarzında hipoekojen alanlar ve kanlanmada azalma saptandı"},
    symptoms: {"complaints": ["Boynun ön kısmında şiddetli ağrı (kulaklara yayılan)", "Yutkunurken ağrı", "Halsizlik ve çarpıntı", "Ateş"], "story": "Hasta yaklaşık 2 hafta önce geçirdiği üst solunum yolu enfeksiyonu sonrası dün boynunun ön kısmında dokunmakla bile şiddetli ağrı başladığını, ağrının yutkunmakla çenesine ve kulaklarına yayıldığını belirterek başvurdu.", "pmh": ["Üst solunum yolu enfeksiyonu (2 hafta önce)"], "meds": ["Yok"], "fm": "Ateş 37.8C. Tiroid bezi bilateral palpasyonla belirgin hipertrofik, sert ve aşırı derecede hassas/ağrılıdır."},
    requiredTests: ["tsh", "st4", "sedim", "crp", "usg_tiroid"],
    contraindicated: [],
    treatments: ["Ağrı ve inflamasyon kontrolü için yüksek doz NSAİİ veya dirençli vakalarda oral Prednizolon tedavisi", "Geçici hipertiroidi semptomları için Beta-bloker (Propranolol) tedavisi (Antitiroid ilaçlar kontrendikedir)", "Hipotiroidi fazı gelişirse geçici levotiroksin desteği"],
    consultations: ["Endokrinoloji Polikliniği"]
  },

  {
    id: "tiroid_nodulu",
    name: "Tiroid Nodülü",
    category: "endokrin",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"usg_tiroid": "Tiroid sağ lobda 22x15 mm boyutunda, hipoekojen, düzensiz sınırlı solid nodül izlendi"},
    symptoms: {"complaints": ["Boyunda şişlik veya kitle", "Çoğu zaman belirti vermez"], "story": "Hasta aynaya bakarken veya boynunu geriye doğru attığında boynunun ön kısmında yumurta benzeri bir şişlik fark etmesi üzerine polikliniğe başvurdu. Ağrı veya yutma sıkıntısı yok.", "pmh": ["Ailede guatr öyküsü"], "meds": ["Yok"], "fm": "Genel durum iyi. Tiroid sağ lobunda yutkunmakla hareket eden, yaklaşık 2 cm çapında, yumuşak kıvamlı, ağrısız soliter nodül palpe edildi."},
    requiredTests: ["usg_tiroid", "tsh", "st4", "biyopsi_tiroid_iab"],
    contraindicated: [],
    treatments: ["Tiroid ultrasonografisi ile nodül özelliklerinin (solid/kistik, mikrokalsifikasyon) değerlendirilmesi", "TSH normal veya yüksekse, şüpheli nodül özelliklerine göre ultrason eşliğinde İnce İğne Aspirasyon Biyopsisi (İİAB) yapılması", "Benign nodüllerde yıllık ultrason takibi, malignitede cerrahi"],
    consultations: ["Endokrinoloji Polikliniği", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "tiroid_kanseri",
    name: "Tiroid Kanseri",
    category: "endokrin",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"usg_tiroid": "Tiroid sol lobda 32 mm çapında, mikrokalsifikasyonlar içeren, sınırlı lobüle konturlu hipoekojen solid kitle ve şüpheli servikal lenfadenopati izlendi", "biyopsi_tiroid_iab": "Papiller tiroid karsinomu (Bethesda kategori VI) ile uyumlu sitoloji saptandı"},
    symptoms: {"complaints": ["Boyunda hızlı büyüyen sert kitle", "Ses kısıklığı", "Yutma veya nefes alma güçlüğü"], "story": "Hasta son 3 aydır boynundaki kitlenin belirgin şekilde büyüdüğünü, son haftalarda sesinde kısılma başladığını ve yutkunurken boğazında takılma hissettiğini belirterek başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Tiroid sol lobunda yaklaşık 3 cm çapında, taş sertliğinde, fikse, ağrısız kitle palpe edildi. Sol servikal zincirde sert, fikse lenfadenopati mevcut."},
    requiredTests: ["usg_tiroid", "biyopsi_tiroid_iab", "tsh"],
    contraindicated: [],
    treatments: ["Tanı için Tiroid İnce İğne Aspirasyon Biyopsisi yapılması", "Cerrahi olarak Bilateral Total Tiroidektomi ve lenf nodu diseksiyonu", "Cerrahi sonrası nüksü önlemek ve kalan dokuyu yok etmek için Radyoaktif İyot (Atom) tedavisi"],
    consultations: ["Endokrinoloji Polikliniği", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "hiperkalsemi",
    name: "Hiperkalsemi",
    category: "endokrin",
    difficulty: "hard",
    monitor: {"hr": [60, 75], "bp": [110, 125, 65, 75], "spo2": [97, 99], "rr": [14, 16], "temp": [36.2, 36.6], "ecg": "normal"},
    abnormals: {"kalsiyum": 13.5, "pth": 8.0, "ekg": "Kısalmış QT mesafesi, hafif sinüs bradykardisi", "kreatinin": 1.48},
    symptoms: {"complaints": ["Bulantı ve kusma", "Halsizlik, kas güçsüzlüğü", "Kabızlık ve karın ağrısı", "Çok idrara çıkma (poliüri) ve susama"], "story": "Hasta son 2 haftadır giderek artan halsizlik, kaslarında güçsüzlük, ciddi kabızlık, günde 4-5 litre su içip sık idrara çıkma ve hafif kafa karışıklığı şikayetleriyle başvurdu.", "pmh": ["Meme kanseri öyküsü (tedavi görmüş)"], "meds": ["Yok"], "fm": "Genel durum orta, dehidrate görünümde (turgor azalmış, mukozalar kuru). Kas gücü genel olarak hafif azalmış. Nörolojik muayenede hafif somnolans."},
    requiredTests: ["kalsiyum", "pth", "ekg", "kreatinin"],
    contraindicated: [],
    treatments: ["Yoğun serum fizyolojik (%0.9 NaCl) ile hidrasyon (tedavinin köşe taşıdır)", "Yeterli hidrasyon sağlandıktan sonra loop diüretiği (Furosemid) ile kalsiyum atılımının artırılması", "Kemik rezorbsiyonunu azaltmak için IV Bisfosfonat (Zoledronik Asit) tedavisi, etiyolojiye yönelik PTH taraması"],
    consultations: ["Endokrinoloji Konsültasyonu"]
  },

  {
    id: "metabolik_sendrom",
    name: "Metabolik Sendrom",
    category: "endokrin",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"glukoz": 112, "trigliserid": 210, "hdl": 35, "hba1c": 5.9},
    symptoms: {"complaints": ["Karın bölgesinde yağlanma (geniş bel çevresi)", "Yüksek tansiyon", "Halsizlik"], "story": "Hasta fazla kiloları, çabuk yorulma ve rutin sağlık kontrolünde tansiyon ve şeker sınır değerlerinin yüksek çıkması nedeniyle yaşam tarzı tavsiyeleri almak üzere başvurdu.", "pmh": ["Ailede erken yaşta kalp krizi öyküsü"], "meds": ["Yok"], "fm": "Obez görünüm, bel çevresi: 106 cm (erkek için > 102 cm). Kan basıncı 135/85 mmHg. Diğer sistem muayeneleri doğal."},
    requiredTests: ["glukoz", "trigliserid", "hdl", "hba1c"],
    contraindicated: [],
    treatments: ["Kapsamlı yaşam tarzı değişikliği (Akdeniz diyeti, haftada en az 150 dk egzersiz)", "Kilo kontrolü (vücut ağırlığının %7-10'unun verilmesi)", "Eşlik eden hipertansiyon, dislipidemi ve disglisemi durumlarının ilaçlarla tedavisi"],
    consultations: ["Kardiyoloji Polikliniği", "Endokrinoloji Polikliniği"]
  },

  {
    id: "morbid_obezite",
    name: "Morbid Obezite",
    category: "endokrin",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Aşırı kilo ve hareket kısıtlılığı", "Eforla gelen nefes darlığı", "Uykuda horlama ve yorgun uyanma"], "story": "Hasta çocukluğundan beri süregelen kilo alma sürecinin son yıllarda kontrolden çıktığını, diyetlere rağmen kilo veremediğini ve artık günlük aktivitelerini bile yaparken nefes nefese kaldığını belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Aşırı obez görünüm. Boy: 165 cm, Kilo: 115 kg (Vücut Kitle İndeksi - VKİ: 42.2 kg/m²). Eklem muayenesinde dizlerde krepitasyon ve ağrı."},
    requiredTests: ["glukoz", "hba1c", "tsh", "total_kolesterol", "ldl"],
    contraindicated: [],
    treatments: ["Düşük kalorili diyet ve egzersiz programı için diyetisyen takibi", "Metabolik ve hormonal taramalar (özellikle hipotiroidi ekartasyonu)", "VKİ > 40 olan veya ek hastalığı olan VKİ > 35 hastalarda bariatrik cerrahi (tüp mide/gastrik bypass) seçeneklerinin değerlendirilmesi"],
    consultations: ["Endokrinoloji Polikliniği", "Genel Cerrahi Polikliniği (Obezite Cerrahisi)"]
  },

  {
    id: "menopoz",
    name: "Menopoz (Klimakterik Sendrom)",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"fsh": 65.0, "lh": 48.0, "estradiol": 12},
    symptoms: {"complaints": ["Sıcak basmaları ve gece terlemeleri", "Adetten tamamen kesilme (en az 1 yıl)", "Vajinal kuruluk ve ağrılı ilişki", "Anksiyete ve uykusuzluk"], "story": "51 yaşındaki kadın hasta, son 14 aydır hiç adet görmediğini, günde birkaç kez aniden göğsünden yüzüne doğru yayılan sıcaklık hissi, terleme, çarpıntı ve uykusuzluk yaşadığını belirterek başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Sistemik muayene doğal. Jinekolojik muayenede vajinal mukozada solukluk ve atrofi bulguları saptandı."},
    requiredTests: ["fsh", "lh", "estradiol", "dexa"],
    contraindicated: [],
    treatments: ["Semptomların ciddiyetine göre Hormon Replasman Tedavisi (HRT) seçeneklerinin tartışılması (kontrendikasyon yoksa)", "Osteoporozdan korunma için Kalsiyum ve D vitamini desteği, düzenli yürüyüş egzersizleri", "Vajinal atrofi için lokal östrojenli kremler veya kayganlaştırıcılar"],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

  {
    id: "servisit",
    name: "Servisit",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Kötü kokulu, sarı-yeşil vajinal akıntı", "İlişki sonrası kanama (postkoital)", "Kasık ağrısı"], "story": "Hasta son 1 haftadır devam eden, vajinal bölgesinde dolgunluk, idrar yaparken sızlama ve ilişki sonrasında pembe lekelenme şeklinde kanama şikayetiyle başvurdu.", "pmh": ["Yeni partner öyküsü"], "meds": ["Yok"], "fm": "Jinekolojik muayenede spekulum ile bakıda serviksin hiperemik, ödemli olduğu ve servikal os'tan mukopürülan akıntı geldiği izlendi. Servikal dokunma hassasiyeti (+)."},
    requiredTests: ["smear", "tit", "wbc"],
    contraindicated: [],
    treatments: ["Servikal sürüntü örnekleri alındıktan sonra geniș spektrumlu antibiyoterapi (Seftriakson 500mg IM + Doksisiklin 100mg 2x1 7 gün)", "Partnerin de eş zamanlı olarak tedavi edilmesi", "Tedavi tamamlanana kadar cinsel ilişkiden kaçınılması"],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

  {
    id: "over_kisti",
    name: "Over Kisti (Fonksiyonel)",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"usg_pelvik": "Sol overde 42x35 mm boyutlarında, ince duvarlı, anekoik, basit kistik lezyon izlendi", "beta_hcg": 0.5},
    symptoms: {"complaints": ["Alt karında tek taraflı künt ağrı", "Adet düzensizliği veya gecikme", "Karında dolgunluk hissi"], "story": "26 yaşındaki hasta, son 2 haftadır sol kasığında yürümekle veya hareketle artan batıcı künt bir ağrı ve bu ay adetinin 1 hafta gecikmesi şikayetiyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Sol alt kadranda palpasyonla hafif hassasiyet mevcut. Defans veya rebound saptanmadı."},
    requiredTests: ["usg_pelvik", "beta_hcg"],
    contraindicated: [],
    treatments: ["Ultrasonografi ile kist boyutunun ve yapısının (uniloküler, ince duvarlı, anekoik) belirlenmesi", "Gebelik ekartasyonu için beta-hCG bakılması", "Basit fonksiyonel kistlerde (< 5-6 cm) 1-2 adet dönemi sonra ultrason kontrolü ile izlem (genellikle kendiliğinden geriler)"],
    consultations: ["Kadın Hastalıkları ve Doğum Polikliniği"]
  },

  {
    id: "mastalji",
    name: "Mastalji (Meme Ağrısı)",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Her iki memede ağrı ve hassasiyet (özellikle adet öncesi)", "Memelerde dolgunluk"], "story": "30 yaşındaki kadın hasta, son birkaç aydır adet kanaması başlamadan yaklaşık 1 hafta önce her iki memesinde dokunmakla ağrı, şişlik ve sızlama hissettiğini, adet kanaması başladıktan sonra ağrının geçtiğini belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Meme muayenesinde her iki memede fibrokistik değişikliklerle uyumlu yaygın hassasiyet ve nodülarite palpe edildi. Şüpheli dominant kitle veya aksiller LAP saptanmadı."},
    requiredTests: ["usg_meme"],
    contraindicated: [],
    treatments: ["Hastanın meme kanseri endişesini gidermek ve güvence vermek (en önemli adımdır)", "Kafein, tuz ve doymuş yağ tüketiminin azaltılması önerisi, destekleyici spor sutyen kullanımı", "Ağrının çok şiddetli olduğu durumlarda topikal NSAİİ jeller"],
    consultations: ["Genel Cerrahi Polikliniği", "Kadın Hastalıkları ve Doğum Polikliniği"]
  },

  {
    id: "mastit_akut",
    name: "Mastit (Emzirme Dönemi)",
    category: "kadinhastaliklari",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"wbc": 12.8, "crp": 35},
    symptoms: {"complaints": ["Memede ağrılı kızarıklık, şişlik ve sertlik", "Titremeyle yükselen yüksek ateş", "Emzirmede zorluk"], "story": "Doğum yaptıktan 3 hafta sonra emziren anne, sağ memesinde aniden başlayan şiddetli ağrı, kızarıklık, sertlik ve üşüme-titreme ile ateşinin 39 dereceye çıkması üzerine başvurdu.", "pmh": ["Emzirme dönemi"], "meds": ["Yok"], "fm": "Ateş 38.5C. Sağ memede üst dış kadranda yaklaşık 4 cm'lik alanda eritem, ödem, lokal sıcaklık artışı ve palpasyonla aşırı hassas sertlik saptandı. Dalgalanma (flüktüasyon) yok."},
    requiredTests: ["wbc", "crp", "usg_meme"],
    contraindicated: [],
    treatments: ["Emzirmenin veya memenin sağılmasının kesinlikle sürdürülmesi (süt stazını önlemek için)", "Oral Penisilinaz dirençli penisilin (Dikloxasilin) veya sefalosporin (Sefaleksin) tedavisi", "Ağrı ve ödem kontrolü için sıcak kompres ve analjezikler"],
    consultations: ["Genel Cerrahi Polikliniği", "Kadın Hastalıkları ve Doğum Polikliniği"]
  },

  {
    id: "meme_kanseri",
    name: "Meme Kanseri",
    category: "kadinhastaliklari",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"mammografi": "Sağ meme üst dış kadranda spiküle konturlu, pleomorfik mikrokalsifikasyonlar içeren dens kitle (BI-RADS 5) saptandı", "usg_meme": "Sağ meme üst dış kadranda 24 mm çapında, posterior akustik gölgelenme gösteren düzensiz sınırlı hipoekojen solid lezyon saptandı"},
    symptoms: {"complaints": ["Memede ağrısız, sert kitle", "Meme başı çekilmesi veya akıntısı (kanlı)", "Meme cildinde portakal kabuğu görünümü"], "story": "52 yaşındaki kadın hasta, banyo yaparken sağ memesinde eline gelen, ağrı yapmayan sert bir kitle fark etmesi üzerine polikliniğe başvurdu. Ailede meme kanseri öyküsü var.", "pmh": ["Ailede meme kanseri (anne ve teyze)"], "meds": ["Yok"], "fm": "Sağ meme üst dış kadranda yaklaşık 2.5 cm çapında, düzensiz sınırlı, sert, ağrısız, çevre dokulara yapışık kitle palpe edildi. Sağ aksiller bölgede sert, sınırlı lenfadenopati mevcut."},
    requiredTests: ["mammografi", "usg_meme", "biyopsi_lenf"],
    contraindicated: [],
    treatments: ["Meme tümörünün tespiti ve biyopsisi (Tru-cut / kalın iğne biyopsisi)", "Evreleme tetkiklerinin (Toraks/Abdomen BT, Kemik Sintigrafisi) yapılması", "Multidisipliner yaklaşımla cerrahi (lumpektomi/mastektomi), kemoterapi, radyoterapi ve hormonoterapi planı"],
    consultations: ["Genel Cerrahi Polikliniği", "Tıbbi Onkoloji Polikliniği"]
  },

  {
    id: "tinea_corporis",
    name: "Mantar Enfeksiyonu (Tinea Corporis)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"koh_preparati": "Mantar hifleri ve sporları izlendi, tinea corporis doğrulandı"},
    symptoms: {"complaints": ["Ciltte halka şeklinde kaşıntılı lekeler", "Döküntü kenarlarında pullanma"], "story": "Hasta kolunda yaklaşık 2 hafta önce küçük bir kırmızı leke olarak başlayan, giderek genişleyen ve ortası iyileşirken kenarları kırmızı ve kepekli halka halini alan kaşıntılı yara nedeniyle başvurdu.", "pmh": ["Evde kedi besleme"], "meds": ["Yok"], "fm": "Genel durum iyi. Sol ön kolda 3 cm çapında, ortası soluk, aktif kenarı eritemli, skuamlı (pullanma gösteren) halkasal (anüler) plak lezyonu izlendi."},
    requiredTests: ["koh_preparati"],
    contraindicated: [],
    treatments: ["Topikal antifungal krem (Terbinafin veya Ketokonazol) günde 2 kez, en az 2-3 hafta", "Lezyonun kuru ve temiz tutulması, havluların ortak kullanılmaması", "Evcil hayvanın mantar açısından veteriner kontrolüne götürülmesi"],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "siğil_verruka",
    name: "Verruka Vulgaris (Siğil)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Elde sert pürüzlü kabarıklıklar", "Ağrısız kitle"], "story": "Hasta sağ el parmaklarında son 6 aydır giderek büyüyen ve pürüzlü hal alan, ağrı yapmayan sert siğiller nedeniyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sağ el 2. ve 3. parmak dorsal yüzünde multipl, gri-kahverengi, pürüzlü hiperkeratotik verrüköz papüller izlendi."},
    requiredTests: ["biyopsi_deri"],
    contraindicated: [],
    treatments: ["Lokal keratolitik ajanlar (Salisilik asit preparatları)", "Poliklinik şartlarında sıvı azot ile Kriyoterapi uygulaması", "Lezyonların koparılmaması ve hijyen kuralları eğitimi"],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "molloskum",
    name: "Molloskum Kontagiozum",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Ciltte ortası çökük, parlak kabarcıklar", "Hafif kaşıntı"], "story": "6 yaşındaki çocuk hasta, karın ve kasık bölgesinde son 1 aydır ortaya çıkan, parlak, inci benzeri küçük kabarcıklar şikayetiyle getirildi.", "pmh": ["Havuz kullanımı"], "meds": ["Yok"], "fm": "Genel durum iyi. Alt abdomen ve kasık bölgesinde yerleşimli, 2-5 mm çaplarında, kubbe şeklinde, göbekli (ortası çökük - umbilike), düzgün yüzeyli multipl papüller."},
    requiredTests: ["koh_preparati"],
    contraindicated: [],
    treatments: ["Çocuklarda lezyonların çoğu 6-18 ay içinde kendiliğinden gerilediğinden tedavisiz izlenebilir", "Hızlı yayılım veya kozmetik rahatsızlık varsa Kriyoterapi veya Küretaj", "Lezyonların sıkılmaması ve kaşınmaması eğitimi"],
    consultations: ["Dermatoloji Polikliniği", "Pediatri Polikliniği"]
  },

  {
    id: "selulit_cilt",
    name: "Selülit (Cilt)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"wbc": 12.8, "crp": 48},
    symptoms: {"complaints": ["Ciltte kızarıklık, şişlik ve sıcaklık artışı", "Şiddetli dokunma hassasiyeti", "Ateş"], "story": "Hasta sol ayak bileğinde dün başlayan kızarıklık, şişlik, üzerine basamama ve titreme şikayetiyle acile başvurdu. Ayak parmak aralarında soyulmalar mevcut.", "pmh": ["Tip 2 Diyabet"], "meds": ["Metformin 1000mg 2x1"], "fm": "Ateş 38.0C. Sol ayak bileği ve ayak sırtında sınırları düzensiz, eritemli, sıcak, ödemli ve belirgin hassas lezyon. Sol inguinal bölgede hassas lenfadenopati."},
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: ["Ekstremite elevasyonu ve yatak istirahatı", "Ampirik oral Amoksisilin-klavulanat veya IV Sefazolin tedavisi", "İnterdijital mantar enfeksiyonunun eş zamanlı tedavisi"],
    consultations: ["Dermatoloji Polikliniği", "Enfeksiyon Hastalıkları Konsültasyonu"]
  },

  {
    id: "dental_apse",
    name: "Apseli Diş (Dental Apse)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"wbc": 11.5, "crp": 22},
    symptoms: {"complaints": ["Zonklayıcı şiddetli diş ağrısı", "Yüzde ve diş etinde şişlik", "Ağzı tam açamama", "Ateş"], "story": "Hasta sol alt çenesinde 3 gündür devam eden, uyutmayan zonklayıcı ağrı, sol yanağında şişlik ve yutkunurken ağrı şikayetleriyle başvurdu.", "pmh": ["Diş çürükleri öyküsü"], "meds": ["Yok"], "fm": "Genel durum iyi. Sol yanak alt çene hizasında ödemli ve sıcak. Ağız içi muayenede sol alt 1. molar dişte derin çürük, çevre diş etinde flüktüasyon veren eritemli hassas apse odağı."},
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: ["Ağız hijyeni ve ılık tuzlu su ile gargara", "Ampirik oral antibiyoterapi (Amoksisilin-klavulanat veya penisilin + metronidazol) ve analjezikler", "Acil Diş Hekimi konsültasyonu (kanal tedavisi, çekim veya apse drenajı için)"],
    consultations: ["Kulak Burun Boğaz Konsültasyonu"]
  },

  {
    id: "kepek_saçlı_deri",
    name: "Kepek (Pitiriyazis Kapitis)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Saçta pullanma ve dökülme", "Saçlı deride hafif kaşıntı"], "story": "Hasta saçlarında sürekli beyaz pullar döküldüğünü, özellikle koyu renk elbiseler giydiğinde omuzlarında biriktiğini ve kaşıntı olduğunu belirterek başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Saçlı deride yaygın kuru, ince, beyaz-gri skuamlar (pullanmalar) izlendi. Belirgin inflamasyon veya ıslak lezyon saptanmadı."},
    requiredTests: ["koh_preparati"],
    contraindicated: [],
    treatments: ["Çinko pirition, selenyum sülfit veya ketokonazol içeren kepek karşıtı şampuanlar ile haftada 2-3 kez yıkama", "Şampuanın saçta 5 dakika bekletilerek durulanması önerisi", "Saçlı derinin aşırı sıcak suyla yıkanmaması"],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "hiperhidrozis",
    name: "Terleme Bozukluğu (Hiperhidrozis)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Avuç içlerinde ve ayaklarda aşırı terleme", "Koltuk altında ıslaklık", "Sosyal ortamlarda utanma"], "story": "Hasta ergenlik döneminden beri ellerinin sürekli sırılsıklam olduğunu, insanlarla tokalaşmaktan çekindiğini ve günde birkaç kez çorap değiştirmek zorunda kaldığını belirterek başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Her iki el ayası muayene sırasında belirgin ıslak ve ter damlacıkları mevcut. Diğer sistemik muayeneler ve tiroid muayenesi doğal."},
    requiredTests: ["tsh", "st4"],
    contraindicated: [],
    treatments: ["Lokal antiperspiranlar (Alüminyum klorür içeren solüsyonlar)", "Dirençli vakalarda el ve ayaklar için İyontoforez tedavisi", "Koltuk altı için Botulinum Toksin (Botoks) enjeksiyonları veya oral antikolinerjikler"],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "termal_yanik",
    name: "Yanık (Termal Yanık)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Sıcak su dökülmesi sonrası şiddetli ağrı", "Ciltte kızarıklık ve su toplayan büller"], "story": "Hasta üzerine çay dökülmesi sonucu sol ön kolunda aniden başlayan şiddetli yanma acısı ve deri soyulması nedeniyle acile başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sol ön kolda yaklaşık %4'lük vücut alanını kaplayan, tabanı kırmızı, üzerinde gergin içi sıvı dolu büller (veziküller) içeren 2. derece termal yanık alanı mevcut."},
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: ["Yanık alanının hemen soğuk çeşme suyuyla yıkanması (buz sürülmemeli)", "Büllerin steril şartlarda enjektörle aspire edilmesi (tavanı korunarak), lokal antibiyotikli pomat (Gümüş sülfadiazin) ve steril pansuman", "Ağrı kontrolü ve tetanoz aşısı sorgulanması"],
    consultations: ["Genel Cerrahi Konsültasyonu", "Plastik ve Rekonstrüktif Cerrahi Konsültasyonu"]
  },

  {
    id: "gunes_yanigi",
    name: "Güneş Yanığı",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Güneş maruziyeti sonrası tüm sırtta ağrılı kızarıklık", "Ciltte gerilme ve ateş hissi"], "story": "Hasta dün deniz kenarında uzun süre güneş altında kaldıktan sonra sırtında, omuzlarında başlayan şiddetli yanma, acı ve elbiselerinin sürtünmesiyle duramama şikayetiyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sırt, omuzlar ve göğüs üst kısmında yaygın, parlak eritemli, ödemli, sıcak ve dokunmakla son derece hassas 1. derece güneş yanığı alanları saptandı. Bül oluşumu yok."},
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: ["Soğuk nemli kompresler veya soğuk duş uygulaması", "Lokal nemlendirici losyonlar (Aloe vera, dexpanthenol) ve topikal hafif kortikosteroidli kremler", "Ağrı için oral NSAİİ analjezikler ve bol sıvı tüketimi"],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "bocek_sokmasi",
    name: "Böcek Sokması Reaksiyonu",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Arı veya böcek sokması sonrası lokal şişlik ve kızarıklık", "Şiddetli kaşıntı ve ağrı"], "story": "Hasta yaklaşık 3 saat önce bahçede çalışırken sol elinden arı soktuğunu, sonrasında elinde hızla yayılan şişlik, kızarıklık ve kaşıntı başladığını belirterek başvurdu.", "pmh": ["Alerjik rinit"], "meds": ["Yok"], "fm": "Sol el sırtında arı sokma odağı çevresinde yaklaşık 5 cm çapında lokalize eritem, ödem, sıcaklık artışı mevcut. Sistemik ürtiker yok. Akciğer sesleri doğal, stridor veya nefes darlığı yok."},
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: ["Varsa böceğin iğnesinin hemen kazınarak çıkarılması (sıkılmadan)", "Lokal soğuk kompres uygulaması ve elevasyon", "Kaşıntı ve şişlik için topikal steroidli kremler ve oral antihistaminikler"],
    consultations: ["Dermatoloji Polikliniği", "Acil Tıp Konsültasyonu"]
  },

  {
    id: "dehb",
    name: "Dikkat Eksikliği Hiperaktivite Bozukluğu (DEHB)",
    category: "psikiyatri",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Odaklanma güçlüğü ve dikkat dağınıklığı", "Unutkanlık ve organize olamama", "Sürekli hareket etme isteği"], "story": "20 yaşındaki üniversite öğrencisi hasta, ders çalışırken 10 dakikadan fazla odaklanamadığını, sınav sorularını okurken dikkat hataları yaptığını, eşyalarını sürekli kaybettiğini ve içsel bir huzursuzluk hissettiğini belirterek başvurdu.", "pmh": ["Okul başarısızlığı öyküleri"], "meds": ["Yok"], "fm": "Genel durum iyi. Görüşme sırasında sürekli kıpırdanıyor, ayaklarını sallıyor ve sorulara sabırsızca yanıt veriyor. Mental durum muayenesinde dikkat testlerinde (geriye doğru sayma) hatalar mevcut."},
    requiredTests: ["glukoz", "tsh"],
    contraindicated: [],
    treatments: ["Klinik psikiyatri değerlendirmesi ve tanı ölçeklerinin doldurulması", "İlk seçenek olarak MSS stimülanları (Metilfenidat) tedavisi", "Bilişsel davranışçı terapi ve zaman yönetimi eğitimleri"],
    consultations: ["Psikiyatri Polikliniği"]
  },

  {
    id: "sosyal_anksiyete",
    name: "Sosyal Anksiyete Bozukluğu",
    category: "psikiyatri",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Topluluk önünde konuşmaktan aşırı korkma", "Sosyal ortamlarda terleme ve titreme", "Başkaları tarafından yargılanma endişesi"], "story": "Hasta üniversitede sunum yapması gerektiğinde günlerce uyuyamadığını, sunum sırasında ellerinin titrediğini, yüzünün kızardığını, sesinin çatallandığını ve bu durumlardan tamamen kaçındığını belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Görüşme sırasında göz temasından kaçınıyor, kısık sesle konuşuyor ve hafif terlemiş görünüyor. Nörolojik muayene doğal."},
    requiredTests: ["tsh", "ekg"],
    contraindicated: [],
    treatments: ["Bilişsel Davranışçı Terapi (BDT - maruz bırakma teknikleri)", "Farmakoterapi olarak SSRI (Sertralin/Essitalopram) grubu ilaçlar", "Performans durumlarında geçici rahatlama için beta-blokerler"],
    consultations: ["Psikiyatri Polikliniği"]
  },

  {
    id: "ozgul_fobi",
    name: "Özgül Fobi",
    category: "psikiyatri",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Belirli durumlardan (yükseklik, kapalı alan, asansör) aşırı korkma", "Fobi nesnesiyle karşılaşınca panik belirtileri"], "story": "Hasta asansöre kesinlikle binemediğini, asansörün kapısını gördüğünde bile kalbinin küt küt attığını, nefesinin kesildiğini, bu yüzden 10 kat merdiven çıkmayı göze aldığını belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi, koopere. Aktif psikotik bulgu yok. Mental durum muayenesinde asansör konusunu konuşurken hafif ajite olduğu ve nabzının hızlandığı gözlendi."},
    requiredTests: ["ekg"],
    contraindicated: [],
    treatments: ["Bilişsel Davranışçı Terapi (özellikle sistematik desensitizasyon / maruz bırakma)", "Akut kaçınılmaz maruziyet durumlarında kısa etkili benzodiazepinler", "Hastaya fobiye yönelik psikoeğitim verilmesi"],
    consultations: ["Psikiyatri Polikliniği"]
  },

  {
    id: "alkol_bagimliligi",
    name: "Alkol Bağımlılığı",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"ggt": 185, "ast": 72, "alt": 58, "usg_abdomen": "Grade 2 hepatosteatoz (karaciğer yağlanması) izlendi"},
    symptoms: {"complaints": ["Alkol alma isteğini durduramama", "Alkol almayınca ellerde titreme ve terleme (yoksunluk)", "Tolerans artışı (daha çok içme)"], "story": "Hasta son 5 yıldır her gün yüksek miktarda alkol aldığını, sabahları uyanır uyanmaz içmeye başladığını, içmediği günlerde ellerinde şiddetli titreme, terleme ve aşırı sinirlilik olduğunu belirterek başvurdu.", "pmh": ["Alkolik karaciğer yağlanması"], "meds": ["Yok"], "fm": "Genel durum iyi. Ellerde belirgin postural ince tremör saptandı. Konjonktivalar hafif hiperemik. Karaciğer kot kavsini 2 cm geçiyor."},
    requiredTests: ["ggt", "ast", "alt", "kan_alkol", "usg_abdomen"],
    contraindicated: [],
    treatments: ["Alkol detoksifikasyon tedavisi (Yoksunluk belirtilerini önlemek için Benzodiazepin desteği)", "Uzun dönemde alkol isteğini azaltmak için Naltrekson veya Akamprosat tedavisi", "Psikoterapi (Alkol ve Madde Tedavi Merkezi - AMATEM desteği)"],
    consultations: ["Psikiyatri Polikliniği", "Gastroenteroloji Polikliniği"]
  },

  {
    id: "madde_bagimliligi",
    name: "Madde Bağımlılığı",
    category: "psikiyatri",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"idrar_toksik_tarama": "Opioid ve Kannabinoid pozitif saptandı"},
    symptoms: {"complaints": ["Madde kullanımını kontrol edememe", "Yoksunluk krizleri ve sinirlilik", "Sosyal ilişkilerde bozulma"], "story": "24 yaşındaki erkek hasta, ailesinin zoruyla, son 2 yıldır esrar/eroin kullandığını, maddeye ulaşamadığında kemiklerinin kırılırcasına ağrıdığını, aşırı terlediğini ve esnemeler yaşadığını belirterek başvurdu.", "pmh": ["Adli kayıtlar"], "meds": ["Yok"], "fm": "Genel durum orta, soluk ve zayıf görünüm. Pupiller hafif dilate. Kollarında eski enjeksiyon izleri (skarlar) mevcut. Hafif taşikardik."},
    requiredTests: ["idrar_toksik_tarama", "wbc", "crp"],
    contraindicated: [],
    treatments: ["Yoksunluk döneminin farmakolojik tedavisi (semptomatik ilaçlar / yerine koyma tedavileri)", "Psikososyal rehabilitasyon programları ve aile terapisi", "AMATEM yatışı ve yakın idrar toksik tarama takipleri"],
    consultations: ["Psikiyatri Polikliniği", "Enfeksiyon Hastalıkları Polikliniği (bulaşıcı hastalık taraması için)"]
  },

  {
    id: "uyum_bozuklugu",
    name: "Uyum Bozukluğu",
    category: "psikiyatri",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Stresli olay sonrası aşırı üzüntü ve kaygı", "İçe kapanma ve işlevsellik kaybı"], "story": "Hasta 2 ay önce işten çıkarıldıktan sonra uyku düzeninin bozulduğunu, sürekli gelecekle ilgili kaygı duyduğunu, arkadaşlarıyla görüşmeyi kestiğini ve yataktan çıkmak istemediğini belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi, koopere. Depresif duygudurum, kederli görünüm mevcut. Aktif intihar düşüncesi yok, psikotik bulgu saptanmadı."},
    requiredTests: ["tsh"],
    contraindicated: [],
    treatments: ["Bilişsel Davranışçı Terapi veya destekleyici psikoterapi", "Uykusuzluk ve anksiyete belirginse kısa süreli semptomatik tedavi", "Sosyal destek mekanizmalarının güçlendirilmesi"],
    consultations: ["Psikiyatri Polikliniği"]
  },

  {
    id: "akut_gastroenterit",
    name: "Akut Gastroenterit (Besin Zehirlenmesi)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"wbc": 12.2, "crp": 24},
    symptoms: {"complaints": ["Günde 5'ten fazla sulu ishal", "Karın krampları ve ağrı", "Bulantı ve kusma", "Halsizlik"], "story": "Hasta dün akşam dışarıda tavuk döner yedikten sonra gece aniden başlayan şiddetli karın ağrısı, bulantı, ardı ardına 6-7 kez sulu ishal ve kusma şikayetleriyle acile başvurdu.", "pmh": ["Dışarıda yemek yeme öyküsü"], "meds": ["Yok"], "fm": "Genel durum orta. Dil ve ağız mukozası hafif kuru (dehidrasyon). Batında yaygın hassasiyet mevcut, defans-rebound yok. Barsak sesleri hiperaktif."},
    requiredTests: ["wbc", "crp", "sodyum", "potasyum", "gaita_parazit", "gaita_kultur"],
    contraindicated: [],
    treatments: ["Sıvı ve elektrolit replasmanı (ORAL veya IV izotonik serum)", "Semptomatik tedavi (Metoklopramid, Parasetamol)", "Bakteriyel şüphede (kanlı ishal, yüksek ateş) Siprofloksasin tedavisi (antidiyareik ilaçlar kontrendikedir)"],
    consultations: ["Gastroenteroloji Polikliniği", "Acil Tıp Konsültasyonu"]
  },

  {
    id: "peptik_ulser_hp",
    name: "Peptik Ülser (H. pylori pozitif)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"endoskopi": "Antrumda 8 mm çapında temiz tabanlı aktif ülser odağı saptandı, biyopside H. pylori pozitif", "h_pylori": "Pozitif"},
    symptoms: {"complaints": ["Yemeklerden sonra veya açken epigastrik ağrı", "Mide yanması ve ekşime", "Şişkinlik ve erken doyma"], "story": "Hasta son 2 aydır özellikle geceleri uykudan uyandıran, mide bölgesinde kemirici tarzda ağrı, yanma ve antiasit şikayetleriyle hafifleyen karın ağrısı nedeniyle başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Epigastrik bölgede derin palpasyonla hafif hassasiyet saptandı. Defans veya rebound yok."},
    requiredTests: ["endoskopi", "h_pylori", "hgb"],
    contraindicated: [],
    treatments: ["Üst GİS Endoskopisi ile ülserin tespiti ve biyopsi alınması", "H. pylori eradikasyonu için üçlü tedavi: PPI (Lansoprazol 2x1) + Amoksisilin 1g 2x1 + Klaritromisin 500mg 2x1 (14 gün)", "Tedavi sonrası eradikasyon kontrolü (üre-nefes testi)"],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

  {
    id: "fonksiyonel_dispepsi",
    name: "Fonksiyonel Dispepsi",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Yemek sonrası rahatsız edici şişkinlik", "Erken doyma", "Midede yanma", "Yapılan tetkiklerin normal çıkması"], "story": "Hasta son 6 aydır ne yerse yesin midesine oturduğunu, şişkinlik hissettiğini, iki lokmada doyduğunu belirtti. Daha önce yaptırdığı endoskopi ve USG temiz çıkmış.", "pmh": ["Gerilim tipi baş ağrısı"], "meds": ["Antiasit şurup (faydasız)"], "fm": "Genel durum iyi. Batın muayenesi tamamen doğal, belirgin hassasiyet saptanmadı."},
    requiredTests: ["endoskopi", "usg_abdomen"],
    contraindicated: [],
    treatments: ["Hastanın organik bir hastalığı olmadığına dair güvence verilmesi", "Düşük doz PPI veya prokinetik (Metoklopramid/Domperidon) tedavisi", "Dirençli vakalarda düşük doz trisiklik antidepresanlar ve diyet modifikasyonu"],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

  {
    id: "laktoz_intoleransi",
    name: "Laktoz İntoleransı",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Süt ve süt ürünleri sonrası şişkinlik ve gaz", "Karın krampları", "Sulu ishal"], "story": "Hasta ne zaman süt içse veya peynir yese yaklaşık 1 saat sonra karnında aşırı gurultu, şişkinlik, gaz sancısı ve bazen sulu ishal başladığını belirterek başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Batında hafif distansiyon (gaz) mevcut. Palpasyonla hassasiyet yok. Barsak sesleri normoaktif."},
    requiredTests: ["gaita_parazit"],
    contraindicated: [],
    treatments: ["Laktoz içeren süt ve süt ürünlerinin diyetten çıkarılması veya kısıtlanması", "Laktozsuz süt ürünlerinin veya bitkisel sütlerin tercih edilmesi", "Yemeklerle birlikte laktaz enzim tabletlerinin kullanılması"],
    consultations: ["Gastroenteroloji Polikliniği", "Diyetisyen Polikliniği"]
  },

  {
    id: "siroz_alkolik",
    name: "Karaciğer Sirozu",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"ast": 115, "alt": 58, "total_bilirubin": 3.2, "albumin": 2.4, "inr": 1.65, "usg_abdomen": "Karaciğer konturları lobüle ve nodüler, portal ven dilate, batın içi yoğun serbest sıvı (asit) izlendi", "parasentez": "Asit sıvısı transuda karakterinde, SAAG > 1.1 g/dL saptandı"},
    symptoms: {"complaints": ["Karında şişlik (asit)", "Bacaklarda ödem", "Gözlerde sararma", "Halsizlik ve çabuk yorulma"], "story": "60 yaşındaki hasta, son 2 aydır giderek artan halsizlik, gözlerinde sararma, karnının davul gibi şişmesi ve ayak bileklerinde oluşan şişlik şikayetleriyle başvurdu. Kronik alkol kullanım öyküsü var.", "pmh": ["Alkol bağımlılığı (30 yıl)"], "meds": ["Yok"], "fm": "Genel durum orta, subikterik görünüm. Göğüste örümcek damarlar (spider angioma). Batında belirgin distansiyon, asit ile uyumlu açıklığı yukarı bakan matite ve flüktüasyon saptandı. Pretibial ödem (++)"},
    requiredTests: ["ast", "alt", "total_bilirubin", "albumin", "inr", "usg_abdomen", "parasentez"],
    contraindicated: [],
    treatments: ["Alkolün kesinlikle bırakılması (en kritik adımdır)", "Asit ve ödem tedavisi için tuz kısıtlaması ve diüretik (Spironolakton + Furosemid)", "Portal hipertansiyon ve varis kanama profilaksisi için beta bloker (Propranolol) ve endoskopi takibi"],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

  {
    id: "alkolik_hepatit",
    name: "Alkolik Hepatit",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"ast": 240, "alt": 95, "total_bilirubin": 6.8, "wbc": 14.5, "inr": 1.45, "usg_abdomen": "Karaciğer boyutları artmış, difüz yağlanma izlendi, safra yolları doğal"},
    symptoms: {"complaints": ["Aşırı alkol alımı sonrası sarılık", "Ateş", "Sağ üst karın ağrısı", "Bulantı ve halsizlik"], "story": "Hasta son birkaç haftadır yoğun şekilde alkol aldığını, 3 gün önce gözlerinde sararma, ateş ve sağ karın boşluğunda ağrı başladığını belirterek başvurdu.", "pmh": ["Alkol bağımlılığı"], "meds": ["Yok"], "fm": "Ateş 37.8C. Skleralar belirgin ikterik. Sağ üst kadranda palpasyonla hassasiyet ve hepatomegali mevcut. Asit saptanmadı."},
    requiredTests: ["ast", "alt", "total_bilirubin", "wbc", "inr", "usg_abdomen"],
    contraindicated: [],
    treatments: ["Alkolün derhal kesilmesi ve enteral beslenme desteği", "Şiddetli vakalarda (Maddrey skoruna göre) oral Kortikosteroid (Prednizolon) tedavisi", "Sıvı-elektrolit ve vitamin (özellikle B1/Tiamin) replasmanı"],
    consultations: ["Gastroenteroloji Polikliniği", "Enfeksiyon Hastalıkları Konsültasyonu"]
  },

  {
    id: "akut_viral_hepatit",
    name: "Akut Viral Hepatit",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"ast": 980, "alt": 1120, "total_bilirubin": 4.5, "hbsag": "Pozitif", "anti_hav_igm": "Negatif", "anti_hcv": "Negatif"},
    symptoms: {"complaints": ["Halsizlik ve eklem ağrıları", "İştahsızlık ve bulantı", "Gözlerde sararma", "İdrarda koyulaşma"], "story": "30 yaşındaki erkek hasta, 1 hafta önce halsizlik, eklem ağrıları ve hafif ateşle başlayan şikayetlerine dün skleralarda sararma ve idrar renginin koyulaşmasının eklendiğini belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum orta. Skleralar ikterik. Sağ üst kadranda palpasyonla hafif hassasiyet saptandı, hepatomegali mevcut."},
    requiredTests: ["ast", "alt", "total_bilirubin", "hbsag", "anti_hav_igm", "anti_hcv"],
    contraindicated: [],
    treatments: ["Yatak istirahatı ve destek tedavisi (hidrasyon)", "Karaciğer hasarı yapabilecek ilaç ve alkolden kaçınma", "Yakın klinik ve laboratuvar (biyokimya, INR) takibi (akut karaciğer yetmezliği riski açısından)"],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Gastroenteroloji Polikliniği"]
  },

  {
    id: "inguinal_herni",
    name: "İnguinal Herni (Fıtık)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Kasıkta şişlik (özellikle ayakta dururken veya öksürürken)", "Kasıkta künt ağrı"], "story": "Hasta sağ kasığında son 3 aydır ayakta uzun süre kalınca veya ağır kaldırınca ortaya çıkan, uzanınca kaybolan ağrısız bir şişlik şikayetiyle başvurdu.", "pmh": ["Kabızlık öyküsü"], "meds": ["Yok"], "fm": "Sağ inguinal bölgede ayakta durmakla ve öksürmekle (valsalva) belirginleşen, palpasyonla kolayca redükte olabilen (içeri itilebilen) yumuşak kitle."},
    requiredTests: ["usg_abdomen"],
    contraindicated: [],
    treatments: ["İnkarsere veya strangüle fıtık riskleri hakkında hastanın bilgilendirilmesi", "Semptomatik veya geniş inguinal hernilerde elektif cerrahi onarım (açık/kapalı fıtık ameliyatı)", "Kabızlıktan ve ağır kaldırmaktan kaçınma önerisi"],
    consultations: ["Genel Cerrahi Polikliniği"]
  },

  {
    id: "umbilikal_herni",
    name: "Umbilikal Herni (Göbek Fıtığı)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Göbek deliğinde şişlik", "Göbek çevresinde hafif ağrı"], "story": "Hasta göbek deliğinde son 6 aydır giderek belirginleşen, özellikle ağır bir iş yaptığında veya öksürdüğünde büyüyen şişlik şikayetiyle genel cerrahiye başvurdu.", "pmh": ["Çoklu gebelikler öyküsü"], "meds": ["Yok"], "fm": "Göbek halkasında (umbilikal ring) yaklaşık 2 cm çapında, öksürmekle dışarı fırlayan, el yardımıyla içeri itilebilen (redükte olan) fıtık kesesi palpe edildi."},
    requiredTests: ["usg_abdomen"],
    contraindicated: [],
    treatments: ["Semptomatik veya boğulma riski taşıyan fıtıklarda elektif cerrahi onarım (greft/yama ile veya primer)", "Fıtığın sıkışıp geri itilemediği (inkarserasyon) durumlarda acil cerrahi gerekliliği anlatılmalıdır", "Aşırı kilo verilmesi tavsiyesi"],
    consultations: ["Genel Cerrahi Polikliniği"]
  },

  {
    id: "pilonidal_sinus",
    name: "Pilonidal Sinüs (Kıl Dönmesi)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Kuyruk sokumunda ağrılı şişlik ve akıntı", "Kuyruk sokumunda küçük delikler (gamzeler)"], "story": "Hasta kuyruk sokumu bölgesinde son 1 yıldır ara ara olan, çamaşırını kirleten kötü kokulu akıntı ve üzerine otururken batma/ağrı hissi şikayetleriyle başvurdu.", "pmh": ["Uzun süre oturarak çalışma (şoför/öğrenci)"], "meds": ["Yok"], "fm": "Genel durum iyi. Sakrokoksigeal bölgede (kuyruk sokumu) orta hatta milimetrik birkaç adet delik (sinüs ağzı) ve bu bölgede hafif eritemli, basmakla pürülan akıntı gelen şişlik alanı."},
    requiredTests: ["wbc", "yara_kultur"],
    contraindicated: [],
    treatments: ["Akut apse varlığında acil insizyon ve drenaj tedavisi", "Kronik dönemde sinüsün cerrahi olarak tamamen çıkarılması (eksizyon ve primer kapatma veya flep cerrahisi)", "Kuyruk sokumu bölgesinin tüylerden temizlenmesi ve hijyeni"],
    consultations: ["Genel Cerrahi Polikliniği"]
  },

  {
    id: "rektal_prolapsus",
    name: "Rektal Prolapsus",
    category: "gastrointestinal",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Makat dışına bağırsak çıkması", "Büyük abdestten sonra makatta dolgunluk ve kanama", "Kabızlık veya dışkı kaçırma"], "story": "75 yaşındaki kadın hasta, son birkaç aydır büyük abdestini yaptıktan sonra makatından kırmızı renkli bir et parçasının dışarı fırladığını, başlangıçta kendi kendine içeri girdiğini ancak artık eliyle itmek zorunda kaldığını belirtti.", "pmh": ["Çok sayıda vajinal doğum", "Kronik kabızlık (20 yıl)"], "meds": ["Laksatif ilaçlar (ara ara)"], "fm": "Genel durum iyi. Defekasyon manevrası yaptırıldığında anüsten dışarı sarkan, konsantrik halkalar içeren yaklaşık 5 cm'lik rektal mukoza izlendi. Anal sfinkter tonusu azalmış."},
    requiredTests: ["kolonoskopi"],
    contraindicated: [],
    treatments: ["Rektal prolapsusun elle nazikçe redükte edilmesi", "Kabızlığın önlenmesi için yüksek lifli diyet ve laksatifler", "Kalıcı tedavi için cerrahi onarım (rektopeksi veya perineal yaklaşımlar)"],
    consultations: ["Genel Cerrahi Polikliniği"]
  },

  {
    id: "kolon_kanseri",
    name: "Kolon Kanseri (Kolorektal)",
    category: "gastrointestinal",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"kolonoskopi": "Lümende tıkanıklığa yol açan, frajil, ülsere vejetan kitle saptandı, biyopside adenokarsinom", "hgb": 9.5, "cea": 12.5, "gaita_gizli_kan": "Pozitif"},
    symptoms: {"complaints": ["Dışkılama alışkanlıklarında değişiklik (yeni başlayan kabızlık/ishal)", "Dışkıda kan görülmesi (Rektal kanama)", "Karın ağrısı ve şişkinlik", "Halsizlik ve kilo kaybı"], "story": "62 yaşındaki hasta, son 3 aydır yeni başlayan ve giderek artan kabızlık, dışkısının kalem gibi incelmesi, tuvalete çıktığında dışkıya bulaşık kan görme ve son 2 ayda 6 kilo kaybetme şikayetiyle başvurdu.", "pmh": ["Ailede kolon kanseri öyküsü (baba)"], "meds": ["Yok"], "fm": "Genel durum iyi, konjonktivalar soluk (anemi). Sol alt kadranda derin palpasyonla hafif hassasiyet saptandı, kitle ele gelmedi. Rektal tuşede parmağa kan bulaştı."},
    requiredTests: ["kolonoskopi", "hgb", "cea", "gaita_gizli_kan", "pa_ac"],
    contraindicated: [],
    treatments: ["Tanı için Kolonoskopi yapılması ve saptanan kitleden biyopsi alınması", "Evreleme için abdominal ve toraks BT çekilmesi", "Cerrahi rezeksiyon (kolektomi) ve evresine göre adjuvant kemoterapi planı"],
    consultations: ["Gastroenteroloji Polikliniği", "Genel Cerrahi Konsültasyonu", "Tıbbi Onkoloji Polikliniği"]
  },

  {
    id: "isi_carpmasi",
    name: "Hipertermi / Isı Çarpması",
    category: "acil",
    difficulty: "hard",
    monitor: {"hr": [115, 125], "bp": [95, 110, 55, 65], "spo2": [94, 96], "rr": [22, 26], "temp": [40.2, 40.8], "ecg": "normal"},
    abnormals: {"kreatinin": 1.42},
    symptoms: {"complaints": ["Vücut sıcaklığında aşırı artış (ateş)", "Bilinç bulanıklığı veya bayılma", "Baş ağrısı ve baş dönmesi", "Sıcak ve kuru cilt (terleyememe)"], "story": "Hasta yaz günü açık alanda saatlerce çalıştıktan sonra aniden fenalaşarak yere yığılmış. Arkadaşları hastanın cildinin çok sıcak olduğunu ancak hiç terlemediğini ve saçmaladığını belirterek acil servise getirdi.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Konfüze ve disoryante. Vücut ısısı 40.5C (hipertermi). Cilt sıcak, kırmızı ve kurudur. Kalp sesleri ritmik ve taşikardik (120/dk). Solunum sayısı 24/dk."},
    requiredTests: ["wbc", "crp", "sodyum", "potasyum", "kreatinin", "ekg"],
    contraindicated: [],
    treatments: ["Hastanın hemen serin bir yere alınması ve giysilerinin çıkarılması", "Soğuk nemli kompresler, vantilatör ve evaporatif soğutma yöntemleri (hedef vücut ısısı < 39C)", "IV sıvı desteği (oda sıcaklığında serum fizyolojik) ve vital organ perfüzyon takibi"],
    consultations: ["Acil Tıp Konsültasyonu", "Yoğun Bakım Konsültasyonu"]
  },

  {
    id: "hipotermi",
    name: "Hipotermi",
    category: "acil",
    difficulty: "hard",
    monitor: {"hr": [48, 56], "bp": [85, 100, 50, 60], "spo2": [90, 93], "rr": [10, 12], "temp": [31.2, 31.8], "ecg": "normal"},
    abnormals: {"ekg": "Sinüs bradykardisi, belirgin Osborn J dalgaları saptandı"},
    symptoms: {"complaints": ["Vücut sıcaklığında aşırı düşüş", "Şiddetli titreme (veya titremenin kesilmesi)", "Konuşmada yavaşlama ve uyuşukluk"], "story": "Hasta kış günü sokakta hareketsiz yatarken bulunmuş. Bilinci yarı açık, sorulara çok yavaş ve mırıldanarak yanıt veriyor. Vücudu buz gibi soğuk.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Somnolan, letarjik. Vücut ısısı 31.5C (orta hipotermi). Titreme gözlenmiyor (titreme 32 derecenin altında kesilir). Solunum sayısı yavaş (10/dk). Nabızlar zayıf."},
    requiredTests: ["ekg", "sodyum", "potasyum", "kreatinin", "arter_kan_gazi"],
    contraindicated: [],
    treatments: ["Hastanın ıslak kıyafetlerinin hemen çıkarılması, kuru battaniyelere sarılması", "Pasif ve aktif harici yeniden ısıtma (sıcak hava üfleyiciler, sıcak battaniye)", "Aktif dahili ısıtma (ısıtılmış IV sıvıların verilmesi, ısıtılmış nemli oksijen) ve yakın EKG takibi (aritmi riski)"],
    consultations: ["Acil Tıp Konsültasyonu", "Anesteziyoloji Konsültasyonu"]
  },

  {
    id: "suda_bogulma",
    name: "Boğulma (Suda Boğulma)",
    category: "acil",
    difficulty: "hard",
    monitor: {"hr": [105, 120], "bp": [105, 120, 60, 75], "spo2": [86, 90], "rr": [24, 28], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"pa_ac": "Bilateral yaygın pulmoner ödem ve infiltrasyon bulguları saptandı"},
    symptoms: {"complaints": ["Boğulma tehlikesi sonrası nefes darlığı", "Sürekli öksürük ve pembe köpüklü balgam", "Bilinç bulanıklığı"], "story": "Hasta havuzda yüzerken dipte hareketsiz bulunmuş, cankurtaran tarafından çıkarılıp suni solunum yapıldıktan sonra bilinci geri gelmiş ancak acile geldiğinde aşırı öksürük ve nefes darlığı başlamış.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum orta-kötü, ajite ve dispneik. Akciğer sesleri dinlemekle bilateral yaygın yaş raller duyuluyor. O2 satürasyonu oda havasında %88. Solunum sayısı 26/dk."},
    requiredTests: ["pa_ac", "arter_kan_gazi", "wbc", "crp"],
    contraindicated: [],
    treatments: ["Oksijen tedavisi (gerekirse CPAP / BiPAP veya entübasyon ile mekanik ventilasyon)", "Solunum yollarındaki su ve sekresyonların temizlenmesi", "Gelişebilecek ARDS ve aspirasyon pnömonisi açısından yakın takip"],
    consultations: ["Acil Tıp Konsültasyonu", "Göğüs Hastalıkları Konsültasyonu", "Anesteziyoloji Konsültasyonu"]
  },

  {
    id: "elektrik_carpmasi",
    name: "Elektrik Çarpması",
    category: "acil",
    difficulty: "hard",
    monitor: {"hr": [95, 105], "bp": [115, 130, 75, 85], "spo2": [97, 99], "rr": [16, 20], "temp": [36.4, 36.8], "ecg": "normal"},
    abnormals: {"ekg": "Hafif sinüs taşikardisi, non-spesifik ST değişiklikleri", "ck": 850, "ckmb": 18},
    symptoms: {"complaints": ["Elektrik çarpması sonrası çarpıntı", "Giriş ve çıkış yanık yaraları", "Ellerde uyuşma"], "story": "Hasta evde prizi tamir ederken yüksek gerilime maruz kaldığını, elinden elektrik girdiğini ve savrulduğunu belirtti. Göğsünde çarpıntı ve elinde yanık şikayetiyle getirildi.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Sağ el işaret parmağında 1 cm çapında krater benzeri giriş yanığı (kuru ve kömürleşmiş), sol ayak tabanında çıkış yanığı izlendi. Kalp sesleri taşikardik."},
    requiredTests: ["ekg", "ck", "ckmb", "troponin_i", "potasyum", "tit"],
    contraindicated: [],
    treatments: ["Hemen 12 derivasyonlu EKG çekilmesi ve sürekli kardiyak monitörizasyon (aritmi riski)", "Kas yıkımına bağlı böbrek hasarını (miyoglobinüri) önlemek için yoğun IV sıvı resüsitasyonu (hedef idrar çıkışı > 100 ml/saat)", "Giriş-çıkış yaralarının pansumanı ve tetanoz profilaksisi"],
    consultations: ["Acil Tıp Konsültasyonu", "Kardiyoloji Konsültasyonu", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "yilan_sokmasi",
    name: "Yılan Sokması",
    category: "acil",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"inr": 1.35, "aptt": 42},
    symptoms: {"complaints": ["Yılan ısırması sonrası ayakta şiddetli ağrı ve şişlik", "Isırık yerinde diş izleri", "Bulantı, baş dönmesi"], "story": "Hasta arazide yürürken sağ ayak bileğinde aniden bir yılan tarafından ısırıldığını, ısırık yerinde hemen şiddetli yanma ve şişlik başladığını belirterek getirildi.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sağ ayak bileği lateralinde 1 cm aralıklı iki adet punktiform diş izi saptandı. Tüm ayak bileği ve bacağın alt kısmı ödemli, eritemli ve ekimotik. Nabızlar açık."},
    requiredTests: ["wbc", "pt", "inr", "aptt", "fibrinojen"],
    contraindicated: [],
    treatments: ["Isırılan ekstremitenin sabitlenmesi ve kalp seviyesinde tutulması (turnike kesinlikle kontrendikedir)", "Hemostaz parametrelerinin ve kompartman sendromunun yakın takibi", "Endikasyon varsa yılan panzehiri (antivenom) IV yavaş infüzyon tedavisi, tetanoz profilaksisi"],
    consultations: ["Acil Tıp Konsültasyonu", "Genel Cerrahi Konsültasyonu"]
  },

  {
    id: "basit_kemik_kirigi",
    name: "Basit Kemik Kırığı",
    category: "acil",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"kemik_grafi": "Sol radius orta şaftta deplase olmayan transvers kırık hattı izlendi"},
    symptoms: {"complaints": ["Travma sonrası kolda şiddetli lokalize ağrı", "Şişlik ve hareket ettirememe"], "story": "Hasta bisikletten düşerek sol ön kolunun üzerine çarptığını, sonrasında kolunda çok şiddetli ağrı başladığını ve kolunu kıpırdatamadığını belirterek başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sol ön kolda belirgin şişlik, deformite ve lokal palpasyonla şiddetli hassasiyet mevcut. Nörovasküler muayene doğal (nabızlar palpe ediliyor, motor/duyu kaybı yok)."},
    requiredTests: ["kemik_grafi"],
    contraindicated: [],
    treatments: ["Ekstremitenin geçici atele alınması ve elevasyonu", "Ağrı kontrolü için NSAİİ analjezik tedavisi", "Grafi değerlendirmesi sonrası uygun alçı/atel tespiti veya ortopedik cerrahi sevk"],
    consultations: ["Ortopedi ve Travmatoloji Konsültasyonu"]
  },

  {
    id: "burkulma",
    name: "Burkulma (Ayak Bileği)",
    category: "acil",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"kemik_grafi": "Kemik patolojisi veya kırık saptanmadı, yumuşak doku şişliği mevcut"},
    symptoms: {"complaints": ["Ayak bileğinde burkulma sonrası ağrı ve şişlik", "Basamama ve morarma"], "story": "Hasta merdivenden inerken sağ ayak bileğinin içeri doğru döndüğünü (inversiyon), sonrasında bileğinde hızla şişlik ve morarma oluştuğunu, üzerine basmakta zorlandığını belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sağ ayak bileği lateral malleol çevresinde belirgin ödem ve ekimoz (morarma). Lateral bağlar üzerinde palpasyonla hassasiyet mevcut. Kemik hassasiyeti saptanmadı (Ottawa kurallarına göre negatif)."},
    requiredTests: ["kemik_grafi"],
    contraindicated: [],
    treatments: ["RICE tedavisi (İstirahat, Buz uygulaması, Elastik bandaj kompresyonu, Elevasyon)", "Ağrı ve şişlik için oral NSAİİ ilaçlar", "Erken dönemde mobilizasyon ve ayak bileği stabilizasyon egzersizleri"],
    consultations: ["Ortopedi ve Travmatoloji Polikliniği", "Fizik Tedavi Polikliniği"]
  },

  {
    id: "kas_zorlanmasi",
    name: "Kas Zorlanması (Strain)",
    category: "acil",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Egzersiz sonrası bacakta ani ağrı ve sertlik", "Hareketle artan ağrı"], "story": "Hasta dün ağır antrenman yaparken sol uyluk arkasında (hamstring) aniden bir çekme hissi ve keskin bir ağrı oluştuğunu, bugün bacağının arkasının çok gergin olduğunu belirtti.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Sol uyluk arka grubunda palpasyonla yaygın hassasiyet ve hafif spazm mevcut. Eklem hareketleri dirençli fleksiyonda ağrılı. Şişlik veya ekimoz yok."},
    requiredTests: ["kemik_grafi"],
    contraindicated: [],
    treatments: ["Kasın dinlendirilmesi ve ilk 48 saat lokal soğuk uygulama", "NSAİİ jeller ve oral analjezikler, kas gevşeticiler", "Ağrı azaldıktan sonra hafif germe egzersizleri"],
    consultations: ["Fizik Tedavi ve Rehabilitasyon Polikliniği"]
  },

  {
    id: "delirium",
    name: "Delirium (Akut Konfüzyon)",
    category: "acil",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [130, 145, 80, 90], "spo2": [94, 96], "rr": [18, 22], "temp": [37.2, 37.6], "ecg": "normal"},
    abnormals: {"tit": "Bol lökosit, bol bakteri saptandı", "wbc": 12.8, "crp": 38},
    symptoms: {"complaints": ["Aniden başlayan bilinç dalgalanması", "Halüsinasyonlar görme ve saçmalama", "Ajitasyon veya aşırı durgunluk"], "story": "78 yaşındaki demans hastası hasta, son 24 saat içinde aniden hırçınlaşmış, olmayan şeyleri gördüğünü söylemiş ve çocuklarını tanıyamaz hale gelmiş. Ateş veya öksürük şikayeti yok.", "pmh": ["Alzheimer Demansı (5 yıl)"], "meds": ["Donepezil 10mg 1x1"], "fm": "Genel durum orta. Zamana ve mekana disoryante. Görüşme sırasında dikkati sürekli dağılıyor, ajite. Nörolojik muayenede yeni fokal defisit saptanmadı."},
    requiredTests: ["tit", "wbc", "crp", "sodyum", "potasyum", "bt_kranial"],
    contraindicated: [],
    treatments: ["Altta yatan organik nedenin (en sık idrar yolu enfeksiyonu veya elektrolit bozukluğu) bulunup tedavi edilmesi", "Hastanın sakin, tanıdık ve loş bir odada oryante edilmesi (aile desteği)", "Şiddetli ajitasyonda düşük doz haloperidol tedavisi (fiziksel tespitten olabildiğince kaçınılmalı)"],
    consultations: ["Psikiyatri Konsültasyonu", "Nöroloji Konsültasyonu"]
  },

  {
    id: "senkop",
    name: "Senkop (Bayılma)",
    category: "acil",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Aniden başlayan geçici bilinç kaybı", "Bayılmadan önce göz kararması ve soğuk terleme"], "story": "Hasta otobüste ayakta yolculuk yaparken aniden gözlerinin karardığını, başının döndüğünü, soğuk soğuk terlediğini ve sonrasını hatırlamadığını belirtti. Yakınları hastanın 10 saniye kadar baygın kaldığını söyledi.", "pmh": ["Uzun süre ayakta kalma"], "meds": ["Yok"], "fm": "Genel durum iyi. Bilinci açık, oryante ve koopere. Kan basıncı ayakta 110/70, yatarken 115/75 mmHg. Tüm sistemik muayeneler ve nörolojik muayene doğal."},
    requiredTests: ["ekg", "glukoz", "hgb", "sodyum"],
    contraindicated: [],
    treatments: ["Vazovagal senkop (basit bayılma) düşünülen hastaya sıvı alımını artırması önerilir", "Bayılacağını hissettiğinde uzanıp bacaklarını kaldırması eğitimi (Trendelenburg pozisyonu)", "EKG normal olduğu için ileri tetkike gerek yoktur, kardiyak senkop ekarte edilmelidir"],
    consultations: ["Kardiyoloji Polikliniği", "Nöroloji Polikliniği"]
  },

  {
    id: "akut_alerjik_reaksiyon",
    name: "Akut Alerjik Reaksiyon",
    category: "acil",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Vücutta aniden yayılan kaşıntılı kızarıklıklar (kurdeşen)", "Göz kapaklarında ve dudaklarda şişlik (anjioödem)"], "story": "Hasta 1 saat önce yediği çilek sonrası tüm vücudunda kaşıntılı kızarıklıklar, kabarıklıklar başladığını ve dudaklarının şiştiğini belirterek acil servise başvurdu. Nefes darlığı yok.", "pmh": ["Alerjik rinit"], "meds": ["Yok"], "fm": "Genel durum iyi. Gövde ve ekstremitelerde yaygın, basmakla solan eritemli ürtikeryal plaklar mevcut. Dudaklarda hafif ödem (anjioödem). Akciğer sesleri doğal, stridor veya ronküs yok."},
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: ["Sistemik Antihistaminik (Feniramin IV/IM) ve Kortikosteroid (Metilprednizolon 40-80mg IV) tedavisi", "Hasta anafilaksi açısından (nefes darlığı, tansiyon düşüşü) acil serviste en az 2-4 saat gözlemlenmelidir", "Tetikleyici gıdadan kaçınma önerisi"],
    consultations: ["Acil Tıp Konsültasyonu", "Dermatoloji Polikliniği"]
  },

  {
    id: "yabanci_cisim_aspirasyonu",
    name: "Yabancı Cisim Aspirasyonu",
    category: "acil",
    difficulty: "expert",
    monitor: {"hr": [110, 125], "bp": [100, 115, 60, 70], "spo2": [90, 94], "rr": [24, 28], "temp": [36.5, 37.0], "ecg": "normal"},
    abnormals: {"pa_ac": "Sağ akciğerde havalanma fazlalığı (hava hapsi - obstrüktif amfizem) izlendi", "bronkoskopi": "Sağ ana bronş girişinde yabancı cisim (leblebi tanesi) izlendi ve çıkarıldı"},
    symptoms: {"complaints": ["Aniden başlayan boğulma hissi ve morarma", "Durdurulamayan öksürük nöbetleri", "Nefes alırken hırıltı"], "story": "4 yaşındaki çocuk hasta, leblebi yerken aniden morarma, boğulma hissi, nefes alamama ve ardından başlayan sürekli öksürük şikayetleriyle acile getirildi.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum orta. Hafif takipneik. Solunum sayısı 26/dk. Sağ akciğer solunum sesleri belirgin azalmış, inspiratuar stridor ve lokalize ronküs mevcut."},
    requiredTests: ["pa_ac", "bronkoskopi"],
    contraindicated: [],
    treatments: ["Tam tıkanmada acil Heimlich manevrası (çocuklarda sırta vuru/göğüs basısı) uygulanması", "Yarı tıkanmada hastanın öksürmeye teşvik edilmesi ve derhal Bronkoskopi planlanması", "Rijit Bronkoskopi ile yabancı cismin çıkarılması (kesin tedavidir)"],
    consultations: ["Acil Tıp Konsültasyonu", "Çocuk Cerrahisi Konsültasyonu", "Kulak Burun Boğaz Konsültasyonu"]
  },

  {
    id: "konjunktivit",
    name: "Konjunktivit",
    category: "acil",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Gözlerde kızarıklık ve yanma", "Gözden sarı-yeşil çapak akması (sabahları yapışık uyanma)", "Gözde batma hissi"], "story": "Hasta dün sabah uyandığında her iki gözünün çapaklanarak yapıştığını, gün boyu gözlerinde kızarıklık, sulanma ve batma hissi olduğunu belirteke başvurdu.", "pmh": ["Yok"], "meds": ["Yok"], "fm": "Genel durum iyi. Bilateral konjonktivalar hiperemik (kırmızı göz). Konjonktival keselerde pürülan (iltihaplı) akıntı mevcut. Kornea berrak, görme keskinliği doğal."},
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: ["Topikal antibiyotikli göz damlası (Moksifloksasin veya Tobramisin) günde 4-6 kez", "Gözlerin ılık serum fizyolojik ve steril gazlı bezle temizlenmesi", "El hijyenine dikkat edilmesi, havluların ayrılması (bulaşmayı önlemek için)"],
    consultations: ["Göz Hastalıkları Polikliniği"]
  },

  {
    id: "glokom_kronik",
    name: "Akut Glokoma (Kronik Açık Açılı)",
    category: "acil",
    difficulty: "medium",
    monitor: {"hr": [85, 100], "bp": [125, 140, 80, 90], "spo2": [95, 98], "rr": [16, 18], "temp": [36.5, 37.2], "ecg": "normal"},
    abnormals: {"fundoskopi": "Bilateral optik diskte belirgin çanaklaşma artışı (cup/disc oranı: 0.6) saptandı"},
    symptoms: {"complaints": ["Göz içi basıncında yavaş artış", "Çevresel görme alanında daralma", "Çoğu zaman ağrısız"], "story": "60 yaşındaki hasta, son zamanlarda araba kullanırken yan aynaları görmekte zorlandığını, görüşünün kenarlardan daraldığını (tünel görüşü) belirterek göz polikliniğine başvurdu. Ağrısı yok.", "pmh": ["Ailede glokom öyküsü"], "meds": ["Yok"], "fm": "Genel durum iyi. Görme keskinliği doğal, ancak periferik görme alanında daralma mevcut. Fundoskopide optik diskte çanaklaşma (cup/disc oranı: 0.6) saptandı."},
    requiredTests: ["fundoskopi"],
    contraindicated: [],
    treatments: ["Göz içi basıncını düşürmek için topikal göz damlaları (Prostaglandin analogları / Beta blokerler)", "Düzenli göz içi basıncı ve görme alanı takipleri", "İlaç tedavisine yanıtsız hastalarda lazer trabeküloplasti veya cerrahi (trabekülektomi)"],
    consultations: ["Göz Hastalıkları Polikliniği"]
  },

  {
    id: "otitis_eksterna_akut",
    name: "Akut Otitis Eksterna",
    category: "acil",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {"otoskopi": "Dış kulak yolu yaygın ödemli ve daralmış, seropürülan sekresyon mevcut"},
    symptoms: {"complaints": ["Şiddetli kulak ağrısı (özellikle kulak kepçesine dokununca)", "Kulak akıntısı ve kaşıntı", "Kulakta dolgunluk"], "story": "Hasta havuzda yüzdükten 2 gün sonra sol kulağında şiddetli, üzerine yatamayacak düzeyde zonklayıcı ağrı, hafif akıntı ve dolgunluk şikayetiyle başvurdu.", "pmh": ["Sık yüzme öyküsü"], "meds": ["Yok"], "fm": "Sol kulak kepçesi (aurikula) yukarı çekilmekle ve tragusa basmakla şiddetli ağrı (+). Otoskopide sol dış kulak yolu ödemli, hiperemik ve pürülan döküntülerle kaplı, kulak zarı doğal."},
    requiredTests: ["otoskopi"],
    contraindicated: [],
    treatments: ["Dış kulak yolunun temizlenmesi (aspire edilmesi)", "Topikal asidik ve antibiyotikli kulak damlaları (Siprofloksasin + Deksametazon)", "Ağrı kontrolü için NSAİİ analjezikler ve kulağın sudan korunması"],
    consultations: ["Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "sinus_bas_agrisi",
    name: "Sinüs Baş Ağrısı",
    category: "acil",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Öne eğilmekle artan yüz ağrısı ve basınç", "Alın ve göz çevresinde ağrı", "Burun tıkanıklığı"], "story": "Hasta son 3 gündür devam eden, özellikle başını öne doğru eğdiğinde alnında ve gözlerinin arkasında patlayacakmış gibi basınç ve ağrı hissi, hafif geniz akıntısı şikayetiyle başvurdu.", "pmh": ["Geçirilmiş viral soğuk algınlığı (1 hafta önce)"], "meds": ["Yok"], "fm": "Genel durum iyi. Bilateral maksiller ve frontal sinüs bölgelerinde palpasyonla ve perküsyonla belirgin hassasiyet saptandı. Orofarenkste geniz akıntısı."},
    requiredTests: ["crp", "wbc"],
    contraindicated: [],
    treatments: ["Nazal serum fizyolojik yıkamaları ve sıcak nemli havlu kompresleri", "Lokal ödemi azaltmak için kısa süreli nazal dekonjestan spreyler (maksimum 3-5 gün)", "Ağrı için oral NSAİİ analjezikler"],
    consultations: ["Kulak Burun Boğaz Polikliniği"]
  },

  {
    id: "alerjik_konjonktivit",
    name: "Alerjik Konjonktivit",
    category: "acil",
    difficulty: "easy",
    monitor: {"hr": [70, 85], "bp": [115, 125, 70, 80], "spo2": [97, 99], "rr": [14, 16], "temp": [36.3, 36.8], "ecg": "normal"},
    abnormals: {},
    symptoms: {"complaints": ["Gözlerde şiddetli kaşıntı ve sulanma", "Bilateral göz kızarıklığı", "Göz kapaklarında şişlik"], "story": "Hasta her ilkbahar döneminde polenlerin artmasıyla başlayan, her iki gözünde dayanılmaz kaşıntı, sulanma, kızarıklık ve göz kapaklarında şişme şikayetiyle başvurdu.", "pmh": ["Alerjik rinit (bahar alerjisi)"], "meds": ["Lokal antihistaminik göz damlası (ara sıra)"], "fm": "Bilateral konjonktivalar hiperemik ve ödemli (kemozis). Göz kapakları hafif ödemli. Kornea berrak, akıntı seröz (sulu) karakterdedir."},
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: ["Alerjen tetikleyicilerden (polenler, toz, evcil hayvan) kaçınma", "Topikal antihistaminik ve mast hücresi stabilizatörü göz damlaları (Olopatadin)", "Şiddetli ataklarda kısa süreli topikal zayıf kortikosteroidli damlalar"],
    consultations: ["Göz Hastalıkları Polikliniği"]
  },

  {
    id: "nazofarinks_kanseri",
    name: "Nazofarinks Kanseri",
    category: "acil",
    difficulty: "hard",
    monitor: {"hr": [95, 110], "bp": [135, 150, 85, 95], "spo2": [93, 96], "rr": [18, 20], "temp": [36.8, 37.8], "ecg": "normal"},
    abnormals: {"biyopsi_lenf": "Metastatik keratinize olmayan nazofarinks karsinomu infiltrasyonu saptandı", "ebv_panel": "EBV IgA anti-VCA pozitif saptandı (yüksek risk)"},
    symptoms: {"complaints": ["Boyunda ağrısız, sert kitle", "Tek taraflı kulak tıkanıklığı ve işitme kaybı", "Burun tıkanıklığı ve sık burun kanaması"], "story": "Hasta son 3 aydır sol boynunda giderek büyüyen ağrısız sert şişlik, sol kulağında sürekli dolgunluk hissi ve ara ara burnundan çizgi şeklinde kan gelmesi şikayetiyle başvurdu.", "pmh": ["Çin/Uzak Doğu kökenli veya EBV maruziyeti"], "meds": ["Yok"], "fm": "Sol servikal bölgede yaklaşık 3 cm çapında, taş sertliğinde, fikse, ağrısız lenfadenopati palpe edildi. Otoskopide sol kulakta seröz otitis media (efüzyon) izlendi."},
    requiredTests: ["biyopsi_lenf", "pa_ac", "wbc", "ebv_panel"],
    contraindicated: [],
    treatments: ["Nazofaringoskopi ile nazofarinksin incelenmesi ve şüpheli kitleden biyopsi yapılması", "Tanı kesinleştikten sonra evreleme için kranial/boyun MR ve toraks/batın BT çekilmesi", "Nazofarinks kanserinde temel tedavi cerrahi değil, radyoterapi ve kemoterapidir (radyosensitif tümördür)"],
    consultations: ["Kulak Burun Boğaz Polikliniği", "Radyasyon Onkolojisi Polikliniği"]
  },

  {
    id: "aclik_ketozu",
    name: "Açlık Ketozu (Starvation Ketosis)",
    category: "endokrin",
    difficulty: "medium",
    monitor: { hr: [90, 110], bp: [100, 115, 65, 75], spo2: [97, 100], rr: [20, 24], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {
      glukoz: 72,
      laktat: 1.2,
      ph: 7.31,
      hco3: 17,
      idrar_keton: "3+",
      insulin: 3.1
    },
    symptoms: {
      complaints: ["Halsizlik ve baş dönmesi", "Bulantı", "Hızlı nefes alıp verme", "Uzun süreli açlık"],
      story: "Hasta, son 5 gündür aşırı kilo verme amacıyla ketojenik diyet uyguladığını ve neredeyse hiçbir karbonhidrat tüketmediğini, son 24 saattir ise hiçbir şey yemediğini belirtiyor. Halsizlik, bulantı ve nefes darlığı hissi nedeniyle başvurdu. Acilci.net makalesine göre DKA ayırıcı tanısında insülin ve glukoz düzeyinin normal olması belirleyicidir.",
      pmh: ["Geçirilmiş diyet denemeleri"],
      meds: ["Yok"],
      fm: "Genel durum iyi-orta, hafif dehidrate, ağızda aseton kokusu (meyvemsi koku) mevcut. Akciğer sesleri doğal, hafif taşipneik. Karın hassasiyeti yok."
    },
    requiredTests: ["glukoz", "arter_kan_gazi", "idrar_keton", "insulin"],
    contraindicated: ["insulin"],
    treatments: [
      "IV %5 veya %10 Dekstroz hidrasyonu (Glukoz seviyesini yükseltip keton üretimini durdurur)",
      "Elektrolit takibi ve replasmanı",
      "Karbonhidrat içeren gıdalarla beslenme başlanması"
    ],
    consultations: ["Endokrinoloji veya Dahiliye Konsültasyonu"]
  },

  {
    id: "paget_schroetter",
    name: "Paget-Schroetter Sendromu (Sporcu Trombozu)",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: { hr: [75, 85], bp: [115, 125, 75, 85], spo2: [98, 100], rr: [14, 16], temp: [36.5, 37.0], ecg: "normal" },
    abnormals: {
      ddimer: 1.8,
      usg_ekstremite: "Sağ subklavian ven lümeninde kompresyonla kapanmayan, hipoekojenik akut trombüs izlendi."
    },
    symptoms: {
      complaints: ["Sağ kolda şişlik ve morarma", "Kolda künt ağrı", "Ağırlık kaldırma sonrası ağrı"],
      story: "21 yaşındaki profesyonel kürekçi erkek hasta, dün yoğun omuz egzersizi ve ağırlık çalışması yaptıktan sonra sağ kolunda aniden başlayan ağrı, şişlik, gerginlik ve hafif morarma şikayetiyle acil servise başvurdu. Acilci.net sporcu trombozu makalesine göre subklavian ven kompresyonu değerlendirilmelidir.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Sağ üst ekstremite (kol) proksimalden itibaren ödemli, çap artışı mevcut (+2.5 cm). Cilt hafif siyanotik ve venöz kollateraller (Urschel belirtisi) belirgin. Palpasyonla aksiller bölgede hassas kordon varlığı mevcut. Nabızlar bilateral açık."
    },
    requiredTests: ["ddimer", "usg_ekstremite"],
    contraindicated: [],
    treatments: [
      "IV Antikoagülasyon (Enoksaparin veya UFH)",
      "Etkilenen ekstremitenin elevasyonu ve istirahati",
      "İlk 24-48 saatte başvurulduysa acil kateter yönlendirmeli tromboliz (CDT) planlanması",
      "Torasik Çıkış Sendromu açısından dekompresyon cerrahisi yönlendirmesi"
    ],
    consultations: ["Kalp Damar Cerrahisi Konsültasyonu"]
  },

  {
    id: "fonksiyonel_dispepsi",
    name: "Fonksiyonel Dispepsi",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [120, 130, 70, 80], spo2: [98, 100], rr: [12, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Midede şişkinlik ve dolgunluk", "Yemek sonrası erken doyma", "Epigastrik ağrı ve yanma"],
      story: "Hasta, son 3 aydır devam eden, yemeklerden sonra midede aşırı dolgunluk hissi, erken doyma ve epigastrik bölgede yanma hissi ile başvurdu. Antiasitlerden kısmi fayda görüyor. Acilci.net Roma IV kriterleri ve dispepsi yönetimine göre alarm semptomları (kilo kaybı, yutma güçlüğü vb.) sorgulanmıştır.",
      pmh: ["Kronik gastrit öyküsü"],
      meds: ["Yok"],
      fm: "Genel durum iyi. Epigastrik bölgede hafif derin palpasyonla hassasiyet var. Defans, rebound veya organomegali yok. Bağırsak sesleri normal."
    },
    requiredTests: ["wbc", "crp", "endoskopi"],
    contraindicated: [],
    treatments: [
      "Proton Pompası İnhibitörü (PPI) başlanması veya doz ayarlanması",
      "H. pylori testi pozitifse eradikasyon tedavisi (Klaritromisin + Amoksisilin + PPI)",
      "Diyet ve yaşam tarzı değişiklikleri (küçük porsiyonlar, tetikleyici gıdalardan kaçınma)",
      "Semptomlar devam ederse prokinetik ajanların eklenmesi"
    ],
    consultations: ["Gastroenteroloji Polikliniği"]
  },

  {
    id: "trakeostomi_acili",
    name: "Trakeostomi Acilleri (Tıkanıklık)",
    category: "acil",
    difficulty: "expert",
    monitor: { hr: [120, 140], bp: [140, 160, 90, 100], spo2: [78, 85], rr: [28, 36], temp: [36.8, 37.4], ecg: "tachycardia" },
    abnormals: {
      akg_po2: 48,
      akg_pco2: 65,
      akg_ph: 7.22
    },
    symptoms: {
      complaints: ["Nefes darlığı ve boğulma hissi", "Trakeostomi kanülünden hava geçmemesi", "Stridor ve ajitasyon"],
      story: "Larenks kanseri nedeniyle 2 ay önce trakeostomi açılan hasta, son 1 saattir trakeostomi bölgesinde tıkanıklık, balgam atamama, şiddetli nefes alamama ve boğulma hissi ile yakınları tarafından acil servise getirildi. Acilci.net trakeostomi acilleri kılavuzuna göre acil müdahale gereklidir.",
      pmh: ["Larenks Kanseri"],
      meds: ["Yok"],
      fm: "Hasta ajite, siyanotik, yardımcı solunum kasları çalışıyor. Trakeostomi kanülünden hava girişi yok. Stridor mevcut. Trakeostomi kanülünün iç kanülü tıkanmış veya yerinden kaymış görünümde."
    },
    requiredTests: ["arter_kan_gazi", "wbc"],
    contraindicated: ["sedasyon_analjezi"],
    treatments: [
      "Trakeostomi iç kanülünün çıkarılması ve stomanın aspire edilmesi (Tıkayıcı mukus tıkacı temizliği)",
      "Tıkanıklık açılmazsa trakeostomi kanülünün tamamen çıkarılması ve stomanın açık tutulması",
      "Yüksek akışlı oksijen desteği (stoma üzerine ve yüze maske ile)",
      "KBB eşliğinde stoma revizyonu veya kanül değişimi"
    ],
    consultations: ["KBB Acil Konsültasyonu", "Anestezi / Yoğun Bakım Konsültasyonu"]
  },

  {
    id: "taktik_travma",
    name: "Taktik Travma (MARCH Protokolü)",
    category: "acil",
    difficulty: "expert",
    monitor: { hr: [125, 145], bp: [80, 90, 45, 55], spo2: [88, 92], rr: [26, 32], temp: [35.2, 35.8], ecg: "tachycardia" },
    abnormals: {
      hgb: 8.2,
      hct: 25,
      laktat: 4.5
    },
    symptoms: {
      complaints: ["Ateşli silah yaralanması", "Aktif fışkırır tarzda kanama", "Bilinç bulanıklığı", "Nefes darlığı"],
      story: "Çatışma bölgesinden getirilen 28 yaşındaki asker hasta, sağ uyluk bölgesine isabet eden şarapnel parçası sonrası aktif fışkırır tarzda kanama ve nefes darlığı şikayetiyle getirildi. Sahada turnike uygulanmış. Acilci.net MARCH protokolüne göre değerlendirilmektedir.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durum kötü, soluk, soğuk terlemeli. Sağ uyluk proksimalinde fışkırır tarzda arterial kanama (turnike gevşemiş). Solunum yüzeyel ve hızlı, sol akciğer sesleri azalmış, trake sağa deviyedir. Hipotermi mevcut."
    },
    requiredTests: ["hgb", "hct", "laktat", "arter_kan_gazi"],
    contraindicated: ["idrar_sondasi"],
    treatments: [
      "Massive Hemorrhage: Turnikenin proksimale sıkıca yerleştirilmesi ve yara paketi yapılması",
      "Respiration: Sol hemitoraksa acil iğne dekompresyonu (Tansiyon pnömotoraks tedavisi)",
      "Circulation: IV/IO erişim sağlanarak Traneksamik Asit (TXA 1g) ve Kan Ürünü Transfüzyonu",
      "Hypothermia: Hastanın ıslak elbiselerinin çıkarılması, aktif ısıtma battaniyesi kullanımı"
    ],
    consultations: ["Genel Cerrahi Konsültasyonu", "Ortopedi ve Travmatoloji Konsültasyonu"]
  },

  {
    id: "ventilator_asenkronisi",
    name: "Ventilatör Asenkronisi",
    category: "acil",
    difficulty: "expert",
    monitor: { hr: [110, 130], bp: [140, 165, 85, 100], spo2: [89, 93], rr: [26, 32], temp: [36.7, 37.2], ecg: "tachycardia" },
    abnormals: {
      akg_ph: 7.32,
      akg_pco2: 52,
      akg_po2: 65
    },
    symptoms: {
      complaints: ["Entübe hastada ventilatörle savaşma", "Yüksek basınç alarmı", "Ters tetikleme ve oto-PEEP"],
      story: "Yoğun bakımda KOAH alevlenmesi nedeniyle mekanik ventilatörde takip edilen hasta, son 10 dakikadır ventilatörle uyumsuzluk yaşamaya (savaşmaya) başladı, ventilatör sürekli yüksek basınç alarmı veriyor. Acilci.net mekanik ventilasyon dalga yorumlama serisine göre asenkroni düşünülmektedir.",
      pmh: ["Kronik KOAH"],
      meds: ["Sedasyon (Propofol) infüzyonu"],
      fm: "Hasta mekanik ventilatör ile uyumsuz soluyor, ventilatörün solunum yaptırma zamanlarıyla hastanın eforları çakışıyor (asenkroni). Akciğer dinlemesinde bilateral yaygın ekspiratuar wheezing mevcut. Ventilatör ekranında akım-zaman eğrisinde ekspirasyon bitmeden yeni tetikleme (oto-PEEP) görülüyor."
    },
    requiredTests: ["arter_kan_gazi", "pa_ac"],
    contraindicated: ["sedasyon_artirilmasi"],
    treatments: [
      "KOAH hastasında ekspirasyon süresini uzatmak için ventilatörde I:E oranının ayarlanması (Oto-PEEP'i azaltır)",
      "Ventilatör tetikleme (trigger) hassasiyetinin artırılması veya basınç tetiklemeden akım tetiklemeye geçilmesi",
      "Bronkospazmı çözmek için ventilatör devresinden inhaler bronkodilatör (Salbutamol) verilmesi",
      "Kısa süreli nöromusküler blokör (Kürarizasyon) veya uygun sedasyon derinliğinin sağlanması"
    ],
    consultations: ["Anestezi ve Reanimasyon Konsültasyonu", "Yoğun Bakım Uzmanı Konsültasyonu"]
  },

  {
    id: "karbonkul",
    name: "Karbonkül",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [85, 100], bp: [110, 125, 70, 80], spo2: [97, 100], rr: [16, 20], temp: [37.8, 38.5], ecg: "normal" },
    abnormals: {
      wbc: 14.5,
      crp: 52
    },
    symptoms: {
      complaints: ["Ense/sırt bölgesinde ağrılı büyük şişlik", "Ateş ve halsizlik", "Akıntı"],
      story: "Hasta, 5 gündür ensesinde giderek büyüyen, çok ağrılı, üzerinde birden fazla delik olan ve sarı iltihap akan büyük bir şişlik ve ateş şikayetiyle acil servise başvurdu.",
      pmh: ["Tip 2 Diyabet"],
      meds: ["Metformin 1000mg 2x1"],
      fm: "Ense bölgesinde kalın ve esneme yeteneği kısıtlı ciltte, yaklaşık 5 cm çapında, eritemli, fluktuasyon veren, üzerinde birden fazla drene olan açıklık (püstüler delikler) bulunan, son derece ağrılı, sert nodüler abse lezyonu (karbonkül) izlendi. Palpasyonla sıcaklık artışı mevcut."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Apsenin geniş insizyon ve cerrahi drenajı (tedavinin temelidir)",
      "Sistemik ampirik antibiyoterapi (Sefaleksin veya Klindamisin, MRSA riski varsa Vankomisin)",
      "Lokal pansuman ve günlük yara bakımı"
    ],
    consultations: ["Genel Cerrahi Konsültasyonu (Drenaj ve debridman için)", "Dermatoloji Polikliniği"]
  },

  {
    id: "meningokoksemi",
    name: "Meningokoksemi",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [120, 140], bp: [80, 95, 45, 55], spo2: [90, 94], rr: [24, 30], temp: [38.9, 40.2], ecg: "tachycardia" },
    abnormals: {
      wbc: 22.4,
      crp: 210,
      kan_kultur: "Neisseria meningitidis üredi.",
      bos_laktat: 4.2,
      laktat: 3.9
    },
    symptoms: {
      complaints: ["Yüksek ateş ve titreme", "Vücutta hızla yayılan mor lekeler", "Ense sertliği ve baş ağrısı", "Bilinç bulanıklığı"],
      story: "18 yaşındaki üniversite öğrencisi, dün başlayan yüksek ateş, halsizlik, şiddetli baş ağrısı ve son 6 saatte gövdesinde ve bacaklarında hızla yayılan mor döküntüler ile yakınları tarafından şuuru bulanık halde getirildi.",
      pmh: ["Öğrenci yurdunda kalma öyküsü"],
      meds: ["Yok"],
      fm: "Genel durum kötü, toksik görünümlü, ajite/konfüze. Gövde ve ekstremitelerde basmakla solmayan, peteşiyal ve purpurik, yer yer ekimotik koyu mor lezyonlar (meningokoksemi döküntüsü) mevcut. Ense sertliği pozitif, Kernig ve Brudzinski belirtileri pozitif."
    },
    requiredTests: ["wbc", "crp", "kan_kultur", "laktat"],
    contraindicated: ["idrar_sondasi"],
    treatments: [
      "Acil intravenöz antibiyoterapi (IV Seftriakson 2g 12 saatte bir veya IV Penisilin G)",
      "Aggresif IV Sıvı Resüsitasyonu (kristaloid solüsyonları)",
      "Yakın temaslılar için profilaksi (Rifampisin, Siprofloksasin veya Seftriakson)",
      "Solunum ve temas izolasyonu önlemleri"
    ],
    consultations: ["Enfeksiyon Hastalıkları Konsültasyonu", "Yoğun Bakım Konsültasyonu"]
  },

  {
    id: "kizil_hastaligi",
    name: "Kızıl Hastalığı (Scarlet Fever)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: { hr: [95, 110], bp: [105, 118, 65, 75], spo2: [98, 100], rr: [18, 22], temp: [38.2, 39.0], ecg: "normal" },
    abnormals: {
      wbc: 14.8,
      crp: 32
    },
    symptoms: {
      complaints: ["Boğaz ağrısı ve yutma güçlüğü", "Yüksek ateş", "Tüm vücutta pütürlü kırmızı döküntü", "Dilde kırmızı pütürler"],
      story: "8 yaşındaki erkek çocuk, 2 gün önce başlayan boğaz ağrısı ve ateş sonrası dün göğsünden başlayıp tüm vücuduna yayılan, zımpara kağıdı gibi pütürlü döküntüler ve dilde kırmızılaşma şikayetiyle getirildi.",
      pmh: ["Kreşte beta enfeksiyonu salgını"],
      meds: ["Yok"],
      fm: "Ateş 38.6C. Tonsiller hiperemik, hipertrofik ve üzerinde eksüda mevcut. Dilde beyaz kaplama üzerinde belirginleşmiş kırmızı papillalar (beyaz çilek dili, sonra kırmızı çilek dili) mevcut. Gövdede ve kıvrım yerlerinde (Pastia çizgileri) basmakla solan, ince makülopapüler, zımpara kağıdı hissi veren döküntü mevcut. Parmak uçlarında hafif deskuamasyon (soyulma) izlendi."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Sistemik antibiyoterapi (Oral Penisilin V 10 gün veya tek doz Benzatin Penisilin G IM, penisilin alerjisi varsa Makrolid)",
      "Symptomatik tedavi: Analjezik/Antipiretik (Parasetamol veya İbuprofen)",
      "Hidrasyon ve istirahat"
    ],
    consultations: ["Çocuk Sağlığı ve Hastalıkları Polikliniği", "KBB Polikliniği"]
  },

  {
    id: "ssss",
    name: "Stafilokokal Haşlanmış Deri Sendromu (SSSS)",
    category: "dermatoloji",
    difficulty: "hard",
    monitor: { hr: [110, 130], bp: [85, 100, 50, 65], spo2: [96, 99], rr: [20, 24], temp: [38.5, 39.5], ecg: "tachycardia" },
    abnormals: {
      wbc: 16.5,
      crp: 42
    },
    symptoms: {
      complaints: ["Tüm vücutta kızarıklık ve deri soyulması", "Dokunmakla aşırı ağrı ve hassasiyet", "Huzursuzluk ve ateş"],
      story: "3 yaşındaki çocuk, 2 gün önce ağız çevresinde kızarıklık ve kabuklanma ile başladıktan sonra hızla tüm vücuduna yayılan kızarıklık, büyük gevşek büller ve derinin çarşaf gibi soyulması şikayetiyle acile getirildi. Dokunulduğunda ağlıyor.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durum orta-kötü, ajite ve huzursuz. Vücutta yaygın eritem (kızarıklık) zemininde, özellikle kıvrım bölgelerinde kolayca patlayan gevşek büller izlendi. Lezyonlu deriye hafif bası uygulandığında epidermis kolayca ayrılıyor (Nikolsky bulgusu pozitif). Ağız ve göz çevresinde radyal çatlaklar ve kabuklanmalar mevcut ancak oral mukoza tutulmamış (SJS/TEN'den ayıran özellik)."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: ["aspirin"],
    treatments: [
      "IV antistafilokokal antibiyotik (Nafsilin, Oksasilin veya direnç şüphesinde Vankomisin)",
      "Sıvı ve elektrolit desteği (deri bariyer kaybına bağlı dehidratasyonu önlemek için)",
      "Lokal yara bakımı ve pansuman (nemlendirici vazelinli sargılar, sürtünmeden kaçınma)",
      "Kortikosteroid kullanımından kesinlikle kaçınılmalıdır (tabloyu kötüleştirir)"
    ],
    consultations: ["Dermatoloji Konsültasyonu", "Pediatrik Yoğun Bakım / Yanık Ünitesi Yönlendirmesi"]
  },

  {
    id: "herpes_simplex",
    name: "Herpes Simpleks (Herpes Simplex / Uçuk)",
    category: "dermatoloji",
    difficulty: "easy",
    monitor: { hr: [70, 80], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Dudakta ağrılı kaşıntılı yaralar", "Uçuk çıkması", "Hafif sızlama ve yanma"],
      story: "Hasta, 2 gün önce dudağında yanma ve kaşıntı hissi başladıktan sonra bugün dudak kenarında grupe olmuş içi sıvı dolu kabarcıklar çıktığını belirterek başvurdu. Tekrarlayan uçuk şikayeti mevcuttur.",
      pmh: ["Tekrarlayan uçuk öyküsü"],
      meds: ["Yok"],
      fm: "Sol labial komissura yakınında (dudak kenarında) eritemli zemin üzerinde grupe olmuş, yaklaşık 1-2 mm çapında berrak sıvı dolu veziküller ve yer yer patlamış veziküllere bağlı kurutlu (kabuklu) erozyonlar saptandı."
    },
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: [
      "Topikal antiviral krem (Asiklovir %5 krem, günde 5 kez lezyon üzerine)",
      "Erken dönemde başvurulursa oral antiviral (Asiklovir 5x200mg veya Valasiklovir 2x1000mg 5 gün)",
      "Lokal hijyen ve sekonder enfeksiyonun önlenmesi"
    ],
    consultations: ["Dermatoloji Polikliniği"]
  },

  {
    id: "tinea_capitis",
    name: "Tinea Kapitis (Tinea Capitis / Saç Kıran)",
    category: "dermatoloji",
    difficulty: "medium",
    monitor: { hr: [70, 80], bp: [110, 120, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.3, 36.7], ecg: "normal" },
    abnormals: {
      koh_preparati: "Saç kıl köklerinde mantar sporları ve hifler izlendi."
    },
    symptoms: {
      complaints: ["Saçlı deride dökülme ve kepeklenme", "Saçta kırılmalar", "Kaşıntı ve hafif şişlik"],
      story: "7 yaşındaki çocuk, son 1 aydır kafasında saç dökülmesi olan yuvarlak bir bölge oluşması, saçların kökten kırılması ve o bölgede kaşıntılı kepeklenme şikayetiyle ailesi tarafından getirildi.",
      pmh: ["Sokak hayvanları ile temas öyküsü"],
      meds: ["Yok"],
      fm: "Saçlı deride sol parietal bölgede yaklaşık 3 cm çapında, üzeri kepekli (skuamlı), sınırları belirgin alopesik (saçsız) alan izlendi. Saç kıllarının kırılmasına bağlı siyah noktalar (black dot) mevcut. Bölgesel servikal lenfadenopati mevcut."
    },
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: [
      "Sistemik antifungal tedavi (Griseofulvin çocukta ilk tercih, veya Terbinafin/Itrakonazol) (Topikal antifungal tedavi tek başına etkisizdir)",
      "Antifungal şampuan (Ketokonazol veya Selenyum sülfür şampuanı, haftada 2-3 kez)",
      "Aile bireylerinin ve evcil hayvanların taranması"
    ],
    consultations: ["Dermatoloji Polikliniği", "Pediatri Polikliniği"]
  },

  {
    id: "oral_candidiasis",
    name: "Oral Kandidiyazis (Oral Candidiasis / Pamukçuk)",
    category: "gastrointestinal",
    difficulty: "easy",
    monitor: { hr: [72, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.2, 36.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Ağız içinde beyaz lekeler ve acı tat", "Yutkunma sırasında hafif yanma", "Bebekte emme güçlüğü"],
      story: "KOAH nedeniyle inhaler kortikosteroid kullanan 68 yaşındaki hasta, son 1 haftadır ağız içinde, dilinde ve yanaklarının iç kısmında geçmeyen beyaz lekeler, kuruluk ve yemek yerken yanma şikayetiyle başvurdu.",
      pmh: ["KOAH, inhaler steroid kullanımı (kullandıktan sonra ağzını çalkalamama öyküsü)"],
      meds: ["Flutikazon/Salmeterol inhaler 2x1"],
      fm: "Ağız içi muayenesinde dil sırtında, bukkal mukozada ve sert damakta, spatul ile kazındığında altından eritemli ve kanamalı yüzey bırakan (kazınabilen), gri-beyaz renkli psödomebranöz plaklar (pamukçuk lezyonları) izlendi."
    },
    requiredTests: ["wbc"],
    contraindicated: [],
    treatments: [
      "Topikal antifungal süspansiyon (Nistatin damla, günde 4 kez ağızda çalkalanıp yutulur)",
      "İnhaler kortikosteroid kullanımı sonrası ağzın bol suyla çalkalanması eğitimi",
      "Ağır vakalarda veya immünsuprese hastalarda oral Flukonazol (50-100mg/gün 7-14 gün)"
    ],
    consultations: ["Kulak Burun Boğaz Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "morbiliform_drug_eruption",
    name: "Morbiliform İlaç Erüpsiyonu",
    category: "dermatoloji",
    difficulty: "medium",
    monitor: { hr: [80, 95], bp: [110, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [36.7, 37.4], ecg: "normal" },
    abnormals: {
      wbc: 9.8,
      crp: 12
    },
    symptoms: {
      complaints: ["Vücutta yaygın kaşıntılı döküntüler", "Yeni başlayan döküntü", "Ateş olmaması"],
      story: "Hasta, 10 gün önce başlanan antibiyotik (Amoksisilin) tedavisinin 8. gününde gövdesinde başlayan ve hızla kollarına ve bacaklarına yayılan kaşıntılı kırmızı döküntüler şikayetiyle acil servise başvurdu.",
      pmh: ["Yakın zamanda ilaç başlama öyküsü"],
      meds: ["Amoksisilin 1000mg 2x1"],
      fm: "Gövdede simetrik, birleşme eğiliminde makülopapüler (kızamık benzeri - morbiliform) eritemli döküntü izlendi. Yüz tutulmuş ancak mukoza tutulumu (oral/genital/oküler) yok. Nikolsky bulgusu negatif. Solunum sıkıntısı, anjiyoödem veya hipotansiyon saptanmadı."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: ["penisilin"],
    treatments: [
      "Şüpheli ilacın (Amoksisilin) derhal kesilmesi (en önemli adımdır)",
      "Sistemik H1 Antihistaminik (oral veya IV Feniramin)",
      "Kaşıntıyı azaltmak için topikal nemlendiriciler ve hafif topikal kortikosteroidler",
      "Semptomatik yakın takip, SJS/TEN gibi reaksiyonların alarm bulguları açısından hasta eğitimi"
    ],
    consultations: ["Dermatoloji Konsültasyonu", "Alerji ve İmmünoloji Polikliniği"]
  },

  {
    id: "erythema_nodosum",
    name: "Eritema Nodosum",
    category: "romatoloji",
    difficulty: "medium",
    monitor: { hr: [75, 88], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 18], temp: [37.2, 37.9], ecg: "normal" },
    abnormals: {
      wbc: 11.8,
      crp: 45,
      sedim: 38
    },
    symptoms: {
      complaints: ["Bacakların ön yüzünde ağrılı kırmızı şişlikler", "Eklem ağrıları", "Hafif ateş ve halsizlik"],
      story: "32 yaşındaki kadın hasta, son 1 haftadır her iki bacağının ön kısmında (kaval kemiği üzerinde) aniden beliren, çok ağrılı, kızarık ve sıcak nodüller ve ayak bileklerinde ağrı şikayetiyle acil servise başvurdu. Streptokok enfeksiyonu öyküsü vardır.",
      pmh: ["Geçirilmiş boğaz enfeksiyonu (2 hafta önce)"],
      meds: ["Yok"],
      fm: "Bilateral kruris anteriorunda (kaval kemiği üzerinde) yerleşimli, çapları 1-5 cm arasında değişen, eritemli, parlak, palpasyonla son derece hassas (ağrılı), sıcak, hafif ciltten kabarık subkutan nodüller izlendi. Ayak bileklerinde hafif artralji ve şişlik mevcut."
    },
    requiredTests: ["wbc", "crp", "sedim"],
    contraindicated: [],
    treatments: [
      "Yatak istirahati ve bacakların elevasyonu",
      "Ağrı ve inflamasyonu azaltmak için NSAİİ (İndometasin veya Naproksen)",
      "Altta yatan etiyolojinin (Streptokok enfeksiyonu, Sarkoidoz, IBD, İlaçlar) taranması ve tedavisi"
    ],
    consultations: ["Romatoloji Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "tifo",
    name: "Tifo (Typhoid Fever)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: { hr: [65, 75], bp: [100, 115, 60, 70], spo2: [97, 100], rr: [16, 20], temp: [39.0, 40.0], ecg: "normal" },
    abnormals: {
      wbc: 3.2,
      crp: 85,
      lft_alt: 90,
      lft_ast: 82,
      kan_kultur: "Salmonella typhi üredi."
    },
    symptoms: {
      complaints: ["Giderek artan yüksek ateş", "Karın ağrısı ve şişkinlik", "Kabızlık veya bezelye çorbası kıvamında ishal", "Halsizlik"],
      story: "Hasta 10 gün önce Hindistan seyahatinden döndüğünü, son 5 gündür basamaklı şekilde yükselen ateş, baş ağrısı, karın ağrısı ve halsizlik şikayetlerinin başladığını belirtiyor.",
      pmh: ["Endemik bölgeye seyahat öyküsü"],
      meds: ["Yok"],
      fm: "Toksik görünüm. Ateş 39.5C. Nabız 68/dk (nispi bradikardi - Faget belirtisi). Karında yaygın hassasiyet ve splenomegali mevcut. Göğüs ve karın cildinde basmakla solan, birkaç adet soluk pembe renkli lezyon (gül lekeleri - rose spots) izlendi."
    },
    requiredTests: ["wbc", "crp", "kan_kultur"],
    contraindicated: [],
    treatments: [
      "Sistemik ampirik antibiyoterapi (IV Seftriakson 2g 1x1 veya oral Siprofloksasin)",
      "IV Sıvı ve elektrolit desteği",
      "Komplikasyonlar (bağırsak perforasyonu, kanama) açısından yakın takip"
    ],
    consultations: ["Enfeksiyon Hastalıkları Konsültasyonu"]
  },

  {
    id: "tifilitis",
    name: "Tifilitis (Nötropenik Enterokolit)",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [115, 130], bp: [90, 105, 55, 65], spo2: [94, 98], rr: [20, 24], temp: [38.5, 39.5], ecg: "tachycardia" },
    abnormals: {
      wbc: 0.4,
      neutrofil: 10,
      crp: 185,
      bt_abdomen: "Çekum duvarında belirgin kalınlaşma (12 mm), pericekal sıvı ve inflamatuvar değişiklikler (tifilitis ile uyumlu)."
    },
    symptoms: {
      complaints: ["Sağ alt kadran karın ağrısı", "Yüksek ateş ve titreme", "Bulantı ve sulu ishal"],
      story: "Meme kanseri nedeniyle 8 gün önce kemoterapi alan hasta, dün başlayan ve giderek şiddetlenen sağ kasık/karın ağrısı, bulantı ve 39 derece ateş şikayetiyle acil servise başvurdu.",
      pmh: ["Meme Kanseri, aktif kemoterapi"],
      meds: ["Kemoterapötik ajanlar"],
      fm: "Genel durum orta-kötü, halsiz. Karın muayenesinde sağ alt kadranda belirgin hassasiyet, defans ve rebound mevcut. Bağırsak sesleri hipoaktif."
    },
    requiredTests: ["wbc", "crp", "bt_abdomen"],
    contraindicated: [],
    treatments: [
      "Geniş spektrumlu antipseudomonal antibiyoterapi (Piperasilin-Tazobaktam veya Meropenem)",
      "Nötropeni için G-CSF (Granülosit Koloni Uyarıcı Faktör) desteği",
      "NPO (Ağızdan alımın kesilmesi), IV hidrasyon ve nazogastrik dekompresyon (gerekirse)",
      "Cerrahi perforasyon açısından yakın takip (Geniş rezeksiyon gerekebilir)"
    ],
    consultations: ["Genel Cerrahi Konsültasyonu", "Tıbbi Onkoloji Konsültasyonu", "Enfeksiyon Hastalıkları Konsültasyonu"]
  },

  {
    id: "kedi_tirnagi_hastaligi",
    name: "Kedi Tırnağı Hastalığı (Cat Scratch Disease)",
    category: "enfeksiyon",
    difficulty: "medium",
    monitor: { hr: [75, 85], bp: [115, 125, 75, 85], spo2: [98, 100], rr: [14, 16], temp: [37.2, 37.8], ecg: "normal" },
    abnormals: {
      wbc: 11.2,
      crp: 28,
      biyopsi_lenf: "Bartonella henselae PCR pozitifliği ve granülomatöz lenfadenit."
    },
    symptoms: {
      complaints: ["Koltuk altında veya boyunda ağrılı büyük şişlik", "Hafif ateş ve halsizlik"],
      story: "Hasta, 3 hafta önce yavru bir kedi tarafından sol elinden tırmalandığını, son 1 haftadır sol koltuk altında ağrılı ve giderek büyüyen bir şişlik oluştuğunu belirterek başvurdu.",
      pmh: ["Kedi tırmalama/ısırılma öyküsü"],
      meds: ["Yok"],
      fm: "Sol el sırtında tırmalama hattı boyunca küçük, kabuklu papüler lezyon (giriş lezyonu) izlendi. Sol aksiller bölgede yaklaşık 3.5 cm çapında, ağrılı, hareketli, fluktuasyon göstermeyen büyük lenfadenopati palpe edildi."
    },
    requiredTests: ["wbc", "crp", "biyopsi_lenf"],
    contraindicated: [],
    treatments: [
      "Sistemik antibiyoterapi (Azitromisin lenfadenopati süresini kısaltmada ilk tercihtir)",
      "Semptomatik tedavi (NSAİİ analjezikler)",
      "Eğer lenf nodu süpüre olursa (iltihaplanırsa) iğne aspirasyonu (kesi ve drenajdan kaçınılmalıdır, fistülleşebilir)"
    ],
    consultations: ["Enfeksiyon Hastalıkları Polikliniği", "Genel Cerrahi Polikliniği"]
  },

  {
    id: "ogilvie_sendromu",
    name: "Ogilvie Sendromu",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [100, 115], bp: [110, 125, 70, 80], spo2: [95, 98], rr: [18, 22], temp: [36.6, 37.2], ecg: "normal" },
    abnormals: {
      bun: 35,
      kreatinin: 1.4,
      potasyum: 3.1,
      bt_abdomen: "Çekum ve kolon segmentlerinde mekanik obstrüksiyon olmaksızın belirgin dilatasyon (çekum çapı 11 cm)."
    },
    symptoms: {
      complaints: ["Karında aşırı şişkinlik ve gerginlik", "Gaz ve dışkı çıkaramama", "Hafif bulantı"],
      story: "3 gün önce kalça protezi ameliyatı geçiren 72 yaşındaki hasta, son 2 gündür karın şişliğinin aşırı arttığını, gaz-dışkı çıkaramadığını ve nefes alırken zorlandığını belirterek değerlendirildi.",
      pmh: ["Geçirilmiş ortopedik majör cerrahi (3 gün önce)"],
      meds: ["Narkotik analjezikler (Opiyatlar)"],
      fm: "Karın aşırı derecede distandü (davul gibi şiş), perküsyonda timpanik ses alınıyor. Yaygın hafif hassasiyet mevcut ancak rebound ve defans yok. Bağırsak sesleri hipoaktif."
    },
    requiredTests: ["potasyum", "bt_abdomen"],
    contraindicated: [],
    treatments: [
      "Konservatif takip: NPO (ağızdan alımı kes), nazogastrik tüp yerleştirilmesi ve rektal tüp dekompresyonu",
      "Tetikleyici opiyatların kesilmesi ve elektrolit bozukluklarının (hipokalemi) düzeltilmesi",
      "Medikal dekompresyon: IV Neostigmin uygulaması (kardiyak monitörizasyon eşliğinde, bradikardi riski nedeniyle atropin hazır bulundurulmalı)",
      "Yanıt alınamazsa veya perforasyon şüphesi varsa kolonoskopik dekompresyon veya cerrahi müdahale"
    ],
    consultations: ["Genel Cerrahi Konsültasyonu", "Gastroenteroloji Konsültasyonu"]
  },

  {
    id: "tumor_lizis_sendromu",
    name: "Tümör Lizis Sendromu (TLS)",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [130, 145, 80, 90], spo2: [96, 99], rr: [18, 22], temp: [36.7, 37.3], ecg: "t_wave_peaking" },
    abnormals: {
      potasyum: 6.2,
      fosfor: 6.8,
      kalsiyum: 7.1,
      urik_asit: 11.5,
      kreatinin: 2.1,
      bun: 45
    },
    symptoms: {
      complaints: ["Halsizlik ve kas krampları", "İdrar miktarında azalma", "Çarpıntı ve bulantı"],
      story: "Akut lenfoblastik lösemi (ALL) tanısıyla 2 gün önce kemoterapi başlanan hasta, bugün gelişen bacak kaslarında kramplar, halsizlik, idrar çıkaramama ve çarpıntı şikayetleriyle acil servise getirildi.",
      pmh: ["Akut Lenfoblastik Lösemi (ALL), kemoterapi başlangıcı"],
      meds: ["Kemoterapi ilaçları"],
      fm: "Genel durum orta, halsiz. Kalp sesleri ritmik, taşikardik. Kas tonusu artmış, Chvostek ve Trousseau belirtileri (hipokalsemiye bağlı) pozitif. Pretibial ödem yok."
    },
    requiredTests: ["potasyum", "kalsiyum", "urik_asit", "kreatinin"],
    contraindicated: [],
    treatments: [
      "Yoğun IV Hidrasyon (3 L/m2/gün kristaloid) (İdrar çıkışını artırmak ve pıhtılaşmayı önlemek için)",
      "Ürik asit düzeyini düşürmek için IV Rasburikaz veya oral Allopürinol tedavisi",
      "Hiperkalemi tedavisi (Kalsiyum glukonat kardiyoproteksiyon, insülin-dekstroz infüzyonu, inhale salbutamol)",
      "Dirençli anüri, aşırı sıvı yüklenmesi veya kontrol edilemeyen hiperkalemi durumunda Acil Hemodiyaliz"
    ],
    consultations: ["Nefroloji Konsültasyonu", "Hematoloji/Onkoloji Konsültasyonu"]
  },

  {
    id: "vena_cava_superior_sendromu",
    name: "Vena Cava Superior Sendromu (SVCS)",
    category: "solunum",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [135, 150, 85, 95], spo2: [90, 94], rr: [22, 26], temp: [36.5, 37.0], ecg: "normal" },
    abnormals: {
      bt_toraks: "Sağ mediastinal yerleşimli, vena kava süperiörü çevreleyen ve komprese eden (daraltan) kitle lezyonu izlendi."
    },
    symptoms: {
      complaints: ["Yüzde, boyunda ve kollarda şişlik", "Nefes darlığı ve öksürük", "Başta dolgunluk hissi", "Ses kısıklığı"],
      story: "58 yaşındaki ağır sigara içicisi hasta, son 2 haftadır giderek artan yüzde şişlik, özellikle öne eğilmekle başının patlayacak gibi olması, nefes darlığı ve ses kısıklığı şikayetleriyle başvurdu.",
      pmh: ["Kronik sigara kullanımı (40 paket-yıl)"],
      meds: ["Yok"],
      fm: "Yüz, boyun ve her iki üst ekstremitede belirgin ödem (pletore). Boyun venlerinde belirgin dolgunluk (JVD). Göğüs duvarı ön yüzünde kollateral venöz genişlemeler saptandı. Solunum sesleri sağ akciğer üst alanda azalmış."
    },
    requiredTests: ["bt_toraks", "wbc"],
    contraindicated: [],
    treatments: [
      "Başın elevasyonu (yatak başının 45 dereceye kaldırılması) ve oksijen desteği",
      "Ödemi azaltmak için IV Furosemid (Diüretik) ve IV Kortikosteroid (Deksametazon)",
      "Endovasküler stent yerleştirilmesi (hava yolu tehlikedeyse hızlı dekompresyon sağlar)",
      "Tümör tipine göre acil radyoterapi veya kemoterapi planlaması"
    ],
    consultations: ["Göğüs Cerrahisi veya Radyasyon Onkolojisi Konsültasyonu", "Kardiyoloji Konsültasyonu (Stent için)"]
  },

  {
    id: "pots",
    name: "POTS (Postural Ortostatik Taşikardi Sendromu)",
    category: "kardiyovaskuler",
    difficulty: "medium",
    monitor: { hr: [75, 115], bp: [115, 125, 75, 82], spo2: [98, 100], rr: [14, 16], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {
      ekg: "Yatar pozisyonda normal sinüs ritmi (72/dk), aktif ayağa kalkışın 5. dakikasında sinüs taşikardisi (112/dk) saptandı."
    },
    symptoms: {
      complaints: ["Ayağa kalkınca çarpıntı ve baş dönmesi", "Göz kararması ve bayılma hissi", "Kronik halsizlik"],
      story: "24 yaşındaki kadın hasta, son 6 aydır ayağa kalktığında aniden başlayan çarpıntı, baş dönmesi, göz kararması şikayetleri olduğunu, oturduğunda veya uzandığında bu şikayetlerin tamamen geçtiğini belirterek başvurdu.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Yatar pozisyonda KB: 118/74 mmHg, Nabız: 70/dk. Aktif ayağa kalkış testinde (Active Stand Test) 3. dakikada KB: 115/72 mmHg (belirgin ortostatik hipotansiyon yok), Nabız: 112/dk saptandı (nabız artışı >30/dk). Nörolojik ve kardiyak muayene doğal."
    },
    requiredTests: ["ekg", "wbc"],
    contraindicated: [],
    treatments: [
      "Tuz ve sıvı alımının belirgin artırılması (günde 2-3 L sıvı, 8-10 g tuz)",
      "Alt ekstremite kompresyon çorapları kullanımı",
      "Medikal tedavi: Beta bloker (Propranolol veya Metoprolol), Fludrokortizon (plazma hacmini artırmak için) veya Midodrin",
      "Egzersiz programları (yatay pozisyonda bisiklet/kürek gibi ortostatik stresi azaltan egzersizler)"
    ],
    consultations: ["Kardiyoloji Polikliniği", "Nöroloji Polikliniği"]
  },

  {
    id: "wernicke_ensefalopatisi",
    name: "Wernicke Ensefalopatisi",
    category: "noroloji",
    difficulty: "hard",
    monitor: { hr: [85, 100], bp: [110, 125, 70, 80], spo2: [96, 99], rr: [14, 18], temp: [36.2, 36.9], ecg: "normal" },
    abnormals: {
      mr_kranial: "Mamiller cisimlerde, üçüncü ventrikül çevresinde ve periakuaduktal gri maddede T2/FLAIR hiperintensitesi saptandı (Wernicke ensefalopatisi bulguları)."
    },
    symptoms: {
      complaints: ["Kafa karışıklığı ve unutkanlık", "Yürürken dengesizlik ve düşme", "Gözlerde anormal hareketler"],
      story: "Uzun yıllardır kronik alkol kullanımı öyküsü olan 52 yaşındaki hasta, son 3 gündür giderek artan dengesizlik, yürüyememe, çevresindekileri tanıyamama ve saçma konuşma şikayetleriyle acile getirildi.",
      pmh: ["Kronik Alkolizm (20 yıl)"],
      meds: ["Yok"],
      fm: "Genel durum orta, konfüze, dezoryante. Nörolojik muayenede geniş tabanlı ataksik yürüyüş mevcut (dengesizlik nedeniyle tek başına yürüyemiyor). Bilateral abdusens felci (lateral bakış kısıtlılığı) ve yatay nistagmus saptandı (klasik triad: konfüzyon, ataksi, oftalmopleji)."
    },
    requiredTests: ["mr_kranial", "glukoz", "wbc"],
    contraindicated: ["glukoz"],
    treatments: [
      "Acil intravenöz yüksek doz Tiyamin (Vitamin B1, 500mg IV günde 3 kez, en az 3-5 gün) (Glukoz verilmeden önce yapılmalıdır)",
      "Tiyamin sonrasında IV Glukoz ve hidrasyon tedavisi",
      "Elektrolit (özellikle Magnezyum, tiyamin kofaktörüdür) takibi ve replasmanı",
      "Alkol yoksunluk takibi ve profilaksisi (Diazepam)"
    ],
    consultations: ["Nöroloji Konsültasyonu", "Psikiyatri/AMATEM Yönlendirmesi"]
  },

  {
    id: "cicek_hastaligi",
    name: "Çiçek Hastalığı (Smallpox)",
    category: "enfeksiyon",
    difficulty: "hard",
    monitor: { hr: [100, 115], bp: [105, 120, 65, 75], spo2: [96, 99], rr: [18, 22], temp: [38.8, 39.8], ecg: "normal" },
    abnormals: {
      wbc: 15.5,
      crp: 78
    },
    symptoms: {
      complaints: ["Yüksek ateş ve titreme", "Tüm vücutta aynı anda başlayan sert döküntüler", "Şiddetli sırt ve baş ağrısı"],
      story: "Hasta, 4 gün önce ani başlayan yüksek ateş, şiddetli bel ağrısı ve halsizlik sonrası dün yüzünden başlayıp kollarına ve bacaklarına yayılan, içi irin dolu, sert döküntüler şikayetiyle getirildi.",
      pmh: ["Aşılanmamış veya seyahat öyküsü"],
      meds: ["Yok"],
      fm: "Toksik görünüm, yüksek ateş. Tüm vücutta, özellikle yüz ve ekstremitelerde (santrifügal dağılım) yoğunlaşmış, hepsi aynı gelişim evresinde (senkronize) olan, sert, derinden yerleşimli, ortası göbekli (göbekli püstüller) vezikülopüstüler döküntüler izlendi. Avuç içi ve ayak tabanlarında lezyonlar mevcut."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: [],
    treatments: [
      "Hava yolu ve temas izolasyonu (negatif basınçlı oda, N95 maske)",
      "Antiviral tedavi (Tecovirimat veya Cidofovir)",
      "Destekleyici tedavi (IV hidrasyon, yara bakımı, sekonder enfeksiyonların antibiyotik tedavisi)",
      "Temaslıların ilk 4 gün içinde acil aşılanması (halk sağlığı bildirimi)"
    ],
    consultations: ["Enfeksiyon Hastalıkları Konsültasyonu", "Dermatoloji Polikliniği"]
  },

  {
    id: "eritema_enfeksiyozum",
    name: "Eritema Enfeksiyozum (Beşinci Hastalık)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: { hr: [80, 95], bp: [100, 115, 60, 70], spo2: [98, 100], rr: [16, 20], temp: [37.2, 37.8], ecg: "normal" },
    abnormals: {},
    symptoms: {
      complaints: ["Yanaklarda kırmızı döküntü", "Vücutta dantel benzeri döküntü", "Hafif ateş ve halsizlik"],
      story: "6 yaşındaki çocuk, 3 gün süren hafif ateş ve halsizlik sonrası bugün aniden yanaklarında sanki tokat atılmış gibi belirgin kırmızı döküntüler çıkması üzerine ailesi tarafından getirildi.",
      pmh: ["Kreşte benzer döküntüsü olan çocuklar olması"],
      meds: ["Yok"],
      fm: "Genel durum iyi. Bilateral yanaklarda eritemli, ödemli, sınırları belirgin 'tokatlanmış yanak' (slapped-cheek) görünümü saptandı. Ağız çevresi soluktur. Gövdede ve ekstremitelerde dantel benzeri (retiküler) eritemli makülopapüler döküntü mevcut. Ateş 37.4C."
    },
    requiredTests: ["wbc"],
    contraindicated: ["aspirin"],
    treatments: [
      "Semptomatik tedavi: Hidrasyon, kaşıntı varsa antihistaminik losyonlar",
      "Gebelerle temasın önlenmesi eğitimi (gebelerde hidrops fetalise yol açabilir)",
      "Ateş düşürücü olarak Parasetamol (Aspirin Reye sendromu riski nedeniyle yasaktır)"
    ],
    consultations: ["Çocuk Sağlığı ve Hastalıkları Polikliniği", "Dermatoloji Polikliniği"]
  },

  {
    id: "roseola_infantum",
    name: "Roseola Infantum (Altıncı Hastalık)",
    category: "enfeksiyon",
    difficulty: "easy",
    monitor: { hr: [95, 110], bp: [95, 110, 55, 65], spo2: [98, 100], rr: [18, 22], temp: [36.8, 37.2], ecg: "normal" },
    abnormals: {
      wbc: 5.2,
      crp: 8
    },
    symptoms: {
      complaints: ["Ateşin düşmesi sonrası başlayan döküntü", "Huzursuzluk", "Geçirilmiş yüksek ateş"],
      story: "18 aylık bebek, 3 gün boyunca 39.5 dereceye varan yüksek ateş ve huzursuzluk sonrası bugün ateşinin aniden normale düşmesiyle birlikte gövdesinde pembe renkli döküntüler çıkması üzerine getirildi.",
      pmh: ["Son 3 gündür yüksek ateş nedeniyle acil başvuru öyküsü"],
      meds: ["Parasetamol şurup"],
      fm: "Genel durum iyi, aktif. Gövdede ve boyunda yoğunlaşan, basmakla solan, kaşıntısız, maküler ve hafif papüler pembe-kırmızı döküntüler mevcut (ateş düştükten sonra çıkan döküntü karakteristiktir)."
    },
    requiredTests: ["wbc", "crp"],
    contraindicated: ["aspirin"],
    treatments: [
      "Semptomatik ve destek tedavisi (bol hidrasyon)",
      "Ebeveynlerin hastalığın selim gidişi hakkında bilgilendirilmesi ve rahatlatılması",
      "Gerekirse antipiretik (Parasetamol)"
    ],
    consultations: ["Çocuk Sağlığı ve Hastalıkları Polikliniği"]
  },

  {
    id: "alkol_zehirlenmesi",
    name: "Akut Alkol Zehirlenmesi",
    category: "acil",
    difficulty: "medium",
    monitor: { hr: [60, 75], bp: [90, 105, 50, 60], spo2: [92, 95], rr: [10, 12], temp: [35.5, 36.2], ecg: "normal" },
    abnormals: {
      glukoz: 55,
      alkol_seviyesi: 280,
      akg_ph: 7.32,
      akg_pco2: 48
    },
    symptoms: {
      complaints: ["Bilinç kaybı ve uyandırılamama", "Solunum yavaşlaması", "Alkol kokusu", "Bulantı ve kusma"],
      story: "24 yaşındaki erkek hasta, arkadaşlarıyla birlikte yüksek miktarda alkol tükettikten sonra sızdığı, son 1 saattir uyandırılamadığı ve solunumunun çok yavaşladığı belirtilerek acil servise getirildi.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Hasta stupor/koma tablosunda, ağrılı uyarana inilti ile yanıt veriyor. Ağızda yoğun alkol kokusu mevcut. Solunum hızı yavaş ve yüzeyel (bradipne). Cilt soğuk ve nemli. Pupil çapları izokorik, ışık refleksi bilateral yavaş."
    },
    requiredTests: ["glukoz", "arter_kan_gazi"],
    contraindicated: ["sedasyon_analjezi"],
    treatments: [
      "Hava yolu güvenliğinin sağlanması (aspirasyon riskine karşı sol lateral pozisyon, gerekirse entübasyon)",
      "Hipoglisemi tedavisi: IV %10 veya %20 Dekstroz bolus ve infüzyonu (Tiyamin verilerek)",
      "IV Hidrasyon ve elektrolit takibi",
      "Isıtıcı battaniye ile hipoterminin önlenmesi"
    ],
    consultations: ["Yoğun Bakım Konsültasyonu", "Toksikoloji veya Dahiliye Konsültasyonu"]
  },

  {
    id: "omuz_cikigi",
    name: "Omuz Çıkığı (Anterior Dislokasyon)",
    category: "acil",
    difficulty: "easy",
    monitor: { hr: [80, 95], bp: [120, 135, 75, 85], spo2: [98, 100], rr: [14, 18], temp: [36.4, 36.8], ecg: "normal" },
    abnormals: {
      rontgen_omuz: "Sağ omuz ekleminde humerus başının glenoid kaviteden ayrılıp anteroinferior yerleşim gösterdiği izlendi (anterior çıkık)."
    },
    symptoms: {
      complaints: ["Sağ omuzda şiddetli ağrı ve hareket ettirememe", "Omuzda şekil bozukluğu", "Düşme sonrası ağrı"],
      story: "Hasta, halı sahada futbol oynarken sağ omuzunun üzerine düşme sonrası omuzunda aniden başlayan şiddetli ağrı, kolunu hareket ettirememe ve dışarıdan fark edilen şekil bozukluğu şikayetiyle başvurdu.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Sağ kol hafif abduksiyon ve dış rotasyonda sabit tutuluyor, aktif ve pasif omuz hareketleri son derece ağrılı ve kısıtlı. Sağ omuz deltoid konturu kaybolmuş (apolet belirtisi / Epaulet sign). Glenoid kavite boş palpe ediliyor. Distal nabızlar açık, deltoid bölgede duyu kusuru saptanmadı (aksiller sinir sağlam)."
    },
    requiredTests: ["rontgen_omuz"],
    contraindicated: [],
    treatments: [
      "Sağ omuz grafisi ile kırık eşlik edip etmediğinin değerlendirilmesi (redüksiyon öncesi şarttır)",
      "IV Analjezi/Sedasyon (Propofol veya Midazolam + Fentanil) altında kapalı omuz redüksiyonu (Traction-countertraction veya Stimson yöntemi)",
      "Redüksiyon sonrası omuz kol askısına alınması ve kontrol grafisi çekilmesi"
    ],
    consultations: ["Ortopedi ve Travmatoloji Konsültasyonu"]
  },

  {
    id: "meniskus_ve_bag_yaralanmasi",
    name: "Mediyal Menisküs ve Ön Çapraz Bağ Yırtığı",
    category: "acil",
    difficulty: "medium",
    monitor: { hr: [75, 85], bp: [115, 125, 70, 80], spo2: [98, 100], rr: [14, 16], temp: [36.5, 36.8], ecg: "normal" },
    abnormals: {
      mr_ekstremite: "Sol diz ekleminde anterior kruvaziat bağda (ÖÇB) tam kat yırtık ve medial menisküs arka boynunda grade 3 yırtık saptandı."
    },
    symptoms: {
      complaints: ["Dizde şiddetli ağrı ve şişlik", "Dizin dönmesi ve boşluğa gelme hissi", "Kilitlenme veya ses gelmesi"],
      story: "Hasta, basketbol oynarken sol dizinin aniden döndüğünü, 'pop' sesi duyduğunu ve dizinin hemen şişmeye başladığını, üzerine basamadığını belirterek acil servise başvurdu.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Sol diz ekleminde belirgin efüzyon (şişlik) ve lokal ısı artışı mevcut. Medial eklem çizgisi boyunca palpasyonla hassasiyet mevcut. Sol diz fleksiyon ve ekstansiyon hareketleri ağrılı. McMurray testi pozitif (menisküs için), Lachman ve Ön Çekmece (Anterior Drawer) testleri pozitif (ÖÇB için)."
    },
    requiredTests: ["mr_ekstremite"],
    contraindicated: [],
    treatments: [
      "Akut dönemde RICE protokolü: Rest (istirahat), Ice (buz uygulaması), Compression (elastik bandaj), Elevation (elevasyon)",
      "Analjezik/Antiinflamatuar tedavi (NSAİİ)",
      "Diz sabitleyici (immobilizer) splint kullanımı ve koltuk değneği ile yük vermeden yürütülmesi",
      "Tanı kesinleştikten sonra artroskopi veya bağ rekonstrüksiyon planlaması"
    ],
    consultations: ["Ortopedi ve Travmatoloji Polikliniği"]
  },

  {
    id: "peritonit",
    name: "Peritonit (Karın Zarı İltihabı)",
    category: "acil",
    difficulty: "hard",
    monitor: { hr: [110, 125], bp: [95, 105, 55, 65], spo2: [95, 98], rr: [22, 26], temp: [38.5, 39.2], ecg: "tachycardia" },
    abnormals: {
      wbc: 18.2,
      crp: 165,
      rontgen_akciger: "Bilateral diafragma altında serbest hava imajı (pnömoperitoneum - perforasyon bulgusu)."
    },
    symptoms: {
      complaints: ["Şiddetli yaygın karın ağrısı", "Ateş ve titreme", "Bulantı ve kusma", "Karında sertlik"],
      story: "Peptik ülser öyküsü olan 45 yaşındaki hasta, 6 saat önce aniden başlayan, bıçak saplanır tarzda ve tüm karnına yayılan şiddetli karın ağrısı şikayetiyle acil servise getirildi. Hareket etmekle ağrı aşırı artıyor.",
      pmh: ["Peptik Ülser (5 yıl)"],
      meds: ["Yok (Zaman zaman aspirin alıyor)"],
      fm: "Genel durum orta-kötü, ağrılı yüz ifadesi mevcut, dizlerini karnına bükmüş yatıyor. Karın muayenesinde tüm kadranlarda tahta sertliğinde defans, belirgin rebound (bırakma ağrısı) saptandı. Bağırsak sesleri tamamen sessiz (sessiz karın)."
    },
    requiredTests: ["wbc", "crp", "pa_ac"],
    contraindicated: [],
    treatments: [
      "NPO (ağızdan beslenmenin tamamen kesilmesi) ve nazogastrik tüp dekompresyonu",
      "IV Sıvı Hidrasyonu (kristaloid) ve elektrolit takibi",
      "Geniş Spektrumlu IV Antibiyoterapi (Piperasilin-Tazobaktam veya Seftriakson + Metronidazol)",
      "Acil cerrahi eksplorasyon/laparatomi planlaması (perforasyonun kapatılması ve batın lavajı)"
    ],
    consultations: ["Genel Cerrahi Konsültasyonu (Acil ameliyathane hazırlığı)"]
  },

  {
    id: "ttp_hus",
    name: "TTP (Trombotik Trombositopenik Purpura) / HÜS",
    category: "hematoloji",
    difficulty: "hard",
    monitor: { hr: [95, 110], bp: [140, 160, 85, 95], spo2: [96, 99], rr: [16, 20], temp: [37.8, 38.6], ecg: "normal" },
    abnormals: {
      wbc: 12.5,
      hgb: 8.1,
      plt: 18,
      kreatinin: 2.8,
      total_bilirubin: 3.2,
      ldh: 980,
      periferik_yayma: "Yaygın şistositler (kırık alyuvarlar, >%2) ve polikromazi izlendi (mikroanjiopatik hemolitik anemi)."
    },
    symptoms: {
      complaints: ["Halsizlik ve nefes darlığı", "Ciltte morarmalar ve kırmızı noktalar", "İdrar miktarında azalma", "Kafa karışıklığı ve gelip geçici konuşma bozukluğu"],
      story: "Hasta, son 3 gündür giderek artan halsizlik, idrar renginde koyulaşma, bacaklarında morluklar ve bugün gelişen gelip geçici konuşma zorluğu ve kafa karışıklığı şikayetleriyle getirildi.",
      pmh: ["Yok"],
      meds: ["Yok"],
      fm: "Genel durum orta, konfüze ve hafif ikterik (sarılık). Ciltte ve ekstremitelerde yaygın peteşi ve ekimozlar (morluklar) mevcut. Ateş 38.1C. Akciğer sesleri doğal."
    },
    requiredTests: ["wbc", "plt", "kreatinin", "periferik_yayma"],
    contraindicated: ["plt"],
    treatments: [
      "Acil terapötik Plazmaferez (TPE - Plazma değişimi) (TTP şüphesinde altın standarttır ve hayat kurtarır)",
      "Sistemik Kortikosteroid (IV Metilprednizolon 1-2 mg/kg/gün)",
      "Trombosit transfüzyonundan kesinlikle kaçınılması (kontrendikedir, tromboz sürecini artırır)",
      "Sıvı-elektrolit takibi ve gerekirse hemodiyaliz desteği"
    ],
    consultations: ["Hematoloji Konsültasyonu (Acil plazmaferez hazırlığı)", "Nefroloji Konsültasyonu"]
  },

  {
    id: "abdominal_aort_anevrizmasi",
    name: "Abdominal Aort Anevrizması (AAA)",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: { hr: [100, 120], bp: [85, 100, 50, 60], spo2: [95, 98], rr: [18, 22], temp: [36.2, 36.7], ecg: "tachycardia" },
    abnormals: {
      hgb: 8.5,
      laktat: 4.2,
      bt_abdomen: "Infrarenal abdominal aortada 6.5 cm çapında, duvarında trombus içeren, çevresinde retroperitoneal hematom ile uyumlu sıvı koleksiyonu izlenen aort anevrizması saptandı (rüptür şüphesi)."
    },
    symptoms: {
      complaints: ["Karında ve belde ani başlayan şiddetli ağrı", "Baş dönmesi ve bayılma hissi", "Soğuk terleme"],
      story: "72 yaşındaki erkek hasta, evde otururken aniden bel ve karın sol tarafında başlayan, yırtılır tarzda şiddetli ağrı ve ardından gelişen baş dönmesi, terleme ve bayılma hissi şikayetleriyle ambulansla getirildi.",
      pmh: ["Hipertansiyon (15 yıl)", "Sigara (45 paket-yıl)", "Hiperlipidemi"],
      meds: ["Amlodipin 10mg", "Atorvastatin 20mg"],
      fm: "Genel durum kötü, soluk ve terlemiş. Tansiyon 88/55 mmHg (hipotansif), Nabız 108/dk (taşikardik). Karın muayenesinde göbek hizasında veya hafif solda pulsatil (nabızlı) kitle palpe ediliyor. Batında yaygın hassasiyet mevcut ancak defans belirgin değil (retroperitoneal kanama). Femoral nabızlar zayıf."
    },
    requiredTests: ["hgb", "laktat", "bt_abdomen"],
    contraindicated: [],
    treatments: [
      "Hemodinamik stabilizasyon: Geniş çaplı iki adet IV damar yolu (14G veya 16G) açılması ve kristaloid/kan ürünü replasmanı",
      "Permisif hipotansiyon stratejisi: Sistolik TA 80-90 mmHg hedefi (aşırı sıvı verilmesi kanamayı artırır)",
      "Masif transfüzyon protokolü aktivasyonu (ES:TDP:TS = 1:1:1 oranında)",
      "Acil Vasküler Cerrahi veya Endovasküler Aort Tamiri (EVAR) planlanması (ameliyathane haber verilmesi)"
    ],
    consultations: ["Kalp Damar Cerrahisi Konsültasyonu (Acil ameliyathane)", "Yoğun Bakım Konsültasyonu"]
  },

  {
    id: "akut_arter_iskemisi",
    name: "Akut Arter İskemisi (Akut Ekstremite İskemisi)",
    category: "kardiyovaskuler",
    difficulty: "hard",
    monitor: { hr: [85, 105], bp: [130, 150, 80, 90], spo2: [97, 100], rr: [16, 20], temp: [36.3, 36.8], ecg: "atrial_fibrillation" },
    abnormals: {
      ldh: 450,
      ck: 680,
      laktat: 3.8,
      bt_anjio_periferik: "Sol femoral arter distalinde ve popliteal arterde akut oklüzyon (tam tıkanma) ile uyumlu dolma defekti saptandı. Distal damarlarda akım izlenmedi."
    },
    symptoms: {
      complaints: ["Sol bacakta aniden başlayan şiddetli ağrı", "Bacağın soğuması ve solukluk", "Ayak parmaklarını hareket ettirememe", "Uyuşukluk ve karıncalanma"],
      story: "Atriyal fibrilasyon tanılı 68 yaşındaki hasta, antikoagülan tedavisini kendi kendine 2 hafta önce bırakmış. Bugün televizyon izlerken sol bacağında aniden başlayan çok şiddetli ağrı, bacağın soğuması, beyazlaması ve hareket ettirememe şikayetiyle acil servise getirildi.",
      pmh: ["Atriyal Fibrilasyon (3 yıl)"],
      meds: ["Warfarin (2 haftadır almıyor)"],
      fm: "Sol alt ekstremite soğuk, soluk ve mottled (mermer görünümlü). Sol femoral arter nabzı zayıf, popliteal ve pedal nabızlar (ADP, ATP) alınamıyor. Sol ayak ve baldırda duyu azalmış (hipoestezi). Sol ayak bileği ve parmak dorsifleksiyonu güçsüz (motor defisit başlamış). Kapiller dolum süresi >4 saniye. 6P bulguları: Pain (ağrı), Pallor (solgunluk), Pulselessness (nabızsızlık), Paresthesia (parestezi), Paralysis (paralizi) ve Poikilothermia (soğukluk)."
    },
    requiredTests: ["laktat", "ck", "bt_anjio_periferik"],
    contraindicated: [],
    treatments: [
      "Acil IV Heparin (5000-10000 ünite bolus ardından infüzyon) antikoagülasyonu – pıhtının ilerlemesini engeller",
      "Ağrı kontrolü: IV Opioid analjezi (Morfin)",
      "Acil revaskülarizasyon: Embolektomi (Fogarty balon kateteri ile cerrahi pıhtı çıkarma) veya kateter yoluyla trombolitik tedavi (tPA)",
      "Reperfüzyon sendromu takibi: İskemik bacağa kan akışı geri döndüğünde miyoglobinüri, hiperkalemi ve akut böbrek hasarı riski (IV Hidrasyon + alkali idrar)"
    ],
    consultations: ["Kalp Damar Cerrahisi Konsültasyonu (Acil ameliyathane veya anjiyografi)", "Kardiyoloji Konsültasyonu"]
  },

  {
    id: "renal_kolik",
    name: "Böbrek Taşı (Renal Kolik / Nefrolitiazis)",
    category: "nefroloji",
    difficulty: "medium",
    monitor: { hr: [80, 100], bp: [130, 145, 80, 90], spo2: [98, 100], rr: [16, 20], temp: [36.5, 37.2], ecg: "normal" },
    abnormals: {
      wbc: 10.5,
      crp: 12,
      idrar_tahlili: "Mikroskopik hematüri (++), kristalüri (kalsiyum oksalat kristalleri) saptandı.",
      bt_abdomen: "Sol üreter orta segmentte 7 mm çapında radyoopak kalkül (taş) ve proksimalinde grade 2 hidronefroz saptandı."
    },
    symptoms: {
      complaints: ["Sol böğürde ve kasıkta şiddetli, dalgalı ağrı", "Bulantı ve kusma", "İdrarda renk değişikliği (kanlı idrar)"],
      story: "35 yaşındaki erkek hasta, gece uyurken aniden başlayan, sol böğürden kasığa doğru vuran, dalga dalga gelen çok şiddetli ağrı, bulantı ve kusma şikayetiyle acil servise başvurdu. Ağrısı pozisyonla değişmiyor ve yerine yerinde duramıyor.",
      pmh: ["2 yıl önce sağ böbrekten taş düşürme öyküsü"],
      meds: ["Yok"],
      fm: "Hasta ağrıdan kıvranıyor, yerinde duramıyor (renal kolik ağrısı peritoneal irritasyon ağrısından farklı olarak hastayı kıvrandırır). Sol kostovertebral açı hassasiyeti (KVAH) belirgin pozitif. Karın muayenesinde defans veya rebound yok. Mesane dolgunluğu palpe edilmiyor."
    },
    requiredTests: ["idrar_tahlili", "bt_abdomen", "wbc"],
    contraindicated: [],
    treatments: [
      "Ağrı kontrolü: IV/IM Diklofenak Sodyum (75mg) veya IV Parasetamol (1g) (NSAİİ renal kolikte ilk tercihtir, opiyoidlerden daha etkindir)",
      "Antiemetik: IV Metoklopramid veya Ondansetron (bulantı/kusma için)",
      "IV Sıvı Hidrasyonu",
      "Medikal ekspulsif tedavi: Alfa bloker (Tamsulosin 0.4mg/gün) – taşın düşmesini kolaylaştırır (5-10 mm taşlarda)",
      "Taş >10 mm veya komplike ise: Üroloji konsültasyonu ile ESWL (taş kırma) veya endoskopik girişim (URS) planlaması"
    ],
    consultations: ["Üroloji Konsültasyonu"]
  }
];

const SYSTEM_DISEASES = {
  kardiyovaskuler: [],
  solunum: [],
  gastrointestinal: [],
  endokrin: [],
  noroloji: [],
  nefroloji: [],
  hematoloji: [],
  romatoloji: [],
  enfeksiyon: [],
  dermatoloji: [],
  kadinhastaliklari: [],
  acil: [],
  psikiyatri: []
};
