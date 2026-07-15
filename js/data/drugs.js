// ═══════════════════════════════════════════
// MEDSIM — DRUG / MEDICATION / PROCEDURE CATALOG
// Acil Tıp İlaç Arşivi (80+ ilaç, serum, prosedür)
// ═══════════════════════════════════════════

const DRUG_CATALOG = {
  // ─── SIVI TEDAVİSİ ───
  sf_iv:          { id: "sf_iv",          name: "Serum Fizyolojik (%0.9 NaCl) 1000ml IV",  category: "sivi",           route: "IV" },
  rl_iv:          { id: "rl_iv",          name: "Ringer Laktat 1000ml IV",                  category: "sivi",           route: "IV" },
  dextroz5:       { id: "dextroz5",       name: "%5 Dekstroz 500ml IV",                     category: "sivi",           route: "IV" },
  dextroz10:      { id: "dextroz10",      name: "%10 Dekstroz 150ml IV (Bolus)",             category: "sivi",           route: "IV" },
  kolloid_iv:     { id: "kolloid_iv",     name: "Kolloid Solüsyon (Jelatin/HES) 500ml IV",  category: "sivi",           route: "IV" },

  // ─── ANALJEZİKLER ───
  parasetamol_iv: { id: "parasetamol_iv", name: "Parasetamol 1g IV",                        category: "analjezik",      route: "IV" },
  parasetamol_po: { id: "parasetamol_po", name: "Parasetamol 500mg PO",                     category: "analjezik",      route: "PO" },
  diklofenak_im:  { id: "diklofenak_im",  name: "Diklofenak Sodyum 75mg IM",                category: "analjezik",      route: "IM" },
  ibuprofen_po:   { id: "ibuprofen_po",   name: "İbuprofen 400mg PO",                       category: "analjezik",      route: "PO" },
  morfin_iv:      { id: "morfin_iv",      name: "Morfin 5mg IV",                             category: "analjezik",      route: "IV" },
  fentanil_iv:    { id: "fentanil_iv",    name: "Fentanil 50mcg IV",                         category: "analjezik",      route: "IV" },
  tramadol_iv:    { id: "tramadol_iv",    name: "Tramadol 100mg IV",                         category: "analjezik",      route: "IV" },
  ketamin_iv:     { id: "ketamin_iv",     name: "Ketamin 1mg/kg IV (Analjezi Dozu)",         category: "analjezik",      route: "IV" },

  // ─── KARDİYOVASKÜLER ───
  aspirin_po:        { id: "aspirin_po",        name: "Aspirin 300mg PO (Çiğnetilerek)",       category: "kardiyovaskuler", route: "PO" },
  aspirin_dusuk_po:  { id: "aspirin_dusuk_po",  name: "Aspirin 100mg PO (Düşük Doz)",          category: "kardiyovaskuler", route: "PO" },
  klopidogrel_po:    { id: "klopidogrel_po",    name: "Klopidogrel 300mg PO (Yükleme)",        category: "kardiyovaskuler", route: "PO" },
  tikagrelor_po:     { id: "tikagrelor_po",     name: "Tikagrelor 180mg PO (Yükleme)",         category: "kardiyovaskuler", route: "PO" },
  nitrogliserin_sl:  { id: "nitrogliserin_sl",  name: "Nitrogliserin 0.4mg Sublingual",        category: "kardiyovaskuler", route: "SL" },
  nitrogliserin_inf: { id: "nitrogliserin_inf", name: "Nitrogliserin IV İnfüzyon (5-200mcg/dk)", category: "kardiyovaskuler", route: "IV" },
  metoprolol_iv:     { id: "metoprolol_iv",     name: "Metoprolol 5mg IV",                     category: "kardiyovaskuler", route: "IV" },
  metoprolol_po:     { id: "metoprolol_po",     name: "Metoprolol 50mg PO",                    category: "kardiyovaskuler", route: "PO" },
  esmolol_iv:        { id: "esmolol_iv",        name: "Esmolol 500mcg/kg IV Bolus",             category: "kardiyovaskuler", route: "IV" },
  diltiazem_iv:      { id: "diltiazem_iv",      name: "Diltiazem 0.25mg/kg IV",                category: "kardiyovaskuler", route: "IV" },
  amlodipin_po:      { id: "amlodipin_po",      name: "Amlodipin 10mg PO",                     category: "kardiyovaskuler", route: "PO" },
  atorvastatin_po:   { id: "atorvastatin_po",   name: "Atorvastatin 80mg PO",                  category: "kardiyovaskuler", route: "PO" },
  digoksin_iv:       { id: "digoksin_iv",       name: "Digoksin 0.5mg IV",                     category: "kardiyovaskuler", route: "IV" },

  // ─── ANTİARİTMİKLER ───
  amiodaron_iv:   { id: "amiodaron_iv",   name: "Amiodaron 300mg IV (Bolus)",              category: "antiaritmik",    route: "IV" },
  amiodaron_inf:  { id: "amiodaron_inf",  name: "Amiodaron 900mg/24sa IV İnfüzyon",        category: "antiaritmik",    route: "IV" },
  adenozin_iv:    { id: "adenozin_iv",    name: "Adenozin 6mg IV (Hızlı Push)",             category: "antiaritmik",    route: "IV" },
  lidokain_iv:    { id: "lidokain_iv",    name: "Lidokain 1mg/kg IV Bolus",                 category: "antiaritmik",    route: "IV" },

  // ─── ANTİKOAGÜLAN ───
  heparin_iv:     { id: "heparin_iv",     name: "Heparin (UFH) 5000 IU IV Bolus",          category: "antikoagulan",   route: "IV" },
  heparin_inf:    { id: "heparin_inf",    name: "Heparin IV İnfüzyon (18 IU/kg/sa)",       category: "antikoagulan",   route: "IV" },
  enoksaparin_sc: { id: "enoksaparin_sc", name: "Enoksaparin (LMWH) 1mg/kg SC",            category: "antikoagulan",   route: "SC" },
  warfarin_po:    { id: "warfarin_po",    name: "Warfarin 5mg PO",                          category: "antikoagulan",   route: "PO" },

  // ─── ACİL / RESÜSTASYON ───
  adrenalin_im:   { id: "adrenalin_im",   name: "Adrenalin (Epinefrin) 0.3mg IM",          category: "acil",           route: "IM" },
  adrenalin_iv:   { id: "adrenalin_iv",   name: "Adrenalin 1mg IV (Kardiyak Arrest)",      category: "acil",           route: "IV" },
  atropin_iv:     { id: "atropin_iv",     name: "Atropin 0.5mg IV",                         category: "acil",           route: "IV" },
  bikarbonat_iv:  { id: "bikarbonat_iv",  name: "Sodyum Bikarbonat %8.4 50ml IV",          category: "acil",           route: "IV" },
  magnezyum_iv:   { id: "magnezyum_iv",   name: "Magnezyum Sülfat 2g IV (15dk)",            category: "acil",           route: "IV" },

  // ─── VAZOAKTİF / İNOTROP ───
  dopamin_inf:       { id: "dopamin_inf",       name: "Dopamin 5-10 mcg/kg/dk IV İnfüzyon",   category: "vazoaktif",      route: "IV" },
  noradrenalin_inf:  { id: "noradrenalin_inf",  name: "Noradrenalin 0.1-0.5 mcg/kg/dk IV",    category: "vazoaktif",      route: "IV" },
  dobutamin_inf:     { id: "dobutamin_inf",     name: "Dobutamin 5-20 mcg/kg/dk IV İnfüzyon", category: "vazoaktif",      route: "IV" },

  // ─── DİÜRETİK ───
  furosemid_iv:   { id: "furosemid_iv",   name: "Furosemid 40mg IV",                       category: "diuretik",       route: "IV" },
  mannitol_iv:    { id: "mannitol_iv",    name: "Mannitol %20 250ml IV (30dk)",              category: "diuretik",       route: "IV" },

  // ─── ANTİHİPERTANSİF ───
  labetalol_iv:    { id: "labetalol_iv",    name: "Labetalol 20mg IV",                      category: "antihipertansif", route: "IV" },
  nikardipin_inf:  { id: "nikardipin_inf",  name: "Nikardipin 5-15mg/sa IV İnfüzyon",       category: "antihipertansif", route: "IV" },
  nitroprussid_inf:{ id: "nitroprussid_inf",name: "Sodyum Nitroprussid IV İnfüzyon",        category: "antihipertansif", route: "IV" },

  // ─── TROMBOLİTİK ───
  tpa_iv:         { id: "tpa_iv",         name: "Alteplaz (tPA) IV İnfüzyon",               category: "trombolitik",    route: "IV" },
  tenekteplaz_iv: { id: "tenekteplaz_iv", name: "Tenekteplaz IV Bolus",                     category: "trombolitik",    route: "IV" },

  // ─── ANTİBİYOTİKLER ───
  seftriakson_iv:    { id: "seftriakson_iv",    name: "Seftriakson 2g IV",                    category: "antibiyotik",    route: "IV" },
  amoksisilin_po:    { id: "amoksisilin_po",    name: "Amoksisilin-Klavulanat 1g PO",         category: "antibiyotik",    route: "PO" },
  metronidazol_iv:   { id: "metronidazol_iv",   name: "Metronidazol 500mg IV",                category: "antibiyotik",    route: "IV" },
  pip_tazo_iv:       { id: "pip_tazo_iv",       name: "Piperasilin-Tazobaktam 4.5g IV",      category: "antibiyotik",    route: "IV" },
  meropenem_iv:      { id: "meropenem_iv",      name: "Meropenem 1g IV",                      category: "antibiyotik",    route: "IV" },
  vankomisin_iv:     { id: "vankomisin_iv",     name: "Vankomisin 1g IV",                     category: "antibiyotik",    route: "IV" },
  azitromisin_po:    { id: "azitromisin_po",    name: "Azitromisin 500mg PO",                 category: "antibiyotik",    route: "PO" },
  siprofloksasin_po: { id: "siprofloksasin_po", name: "Siprofloksasin 500mg PO",              category: "antibiyotik",    route: "PO" },
  doksisiklin_po:    { id: "doksisiklin_po",    name: "Doksisiklin 100mg PO",                 category: "antibiyotik",    route: "PO" },
  penisilin_iv:      { id: "penisilin_iv",      name: "Penisilin G 4 MIU IV",                 category: "antibiyotik",    route: "IV" },
  klindamisin_iv:    { id: "klindamisin_iv",    name: "Klindamisin 600mg IV",                 category: "antibiyotik",    route: "IV" },

  // ─── ANTİVİRAL / ANTİFUNGAL ───
  asiklovir_iv:   { id: "asiklovir_iv",   name: "Asiklovir 10mg/kg IV",                    category: "antiviral",      route: "IV" },
  oseltamivir_po: { id: "oseltamivir_po", name: "Oseltamivir (Tamiflu) 75mg PO",            category: "antiviral",      route: "PO" },
  flukonazol_iv:  { id: "flukonazol_iv",  name: "Flukonazol 400mg IV (Yükleme)",             category: "antifungal",     route: "IV" },
  nistatin_po:    { id: "nistatin_po",    name: "Nistatin Damla 4x1 Oral",                  category: "antifungal",     route: "PO" },

  // ─── KORTİKOSTEROİDLER ───
  metilprednizolon_iv: { id: "metilprednizolon_iv", name: "Metilprednizolon 40mg IV",        category: "steroid",        route: "IV" },
  metilprednizolon_yuksek: { id: "metilprednizolon_yuksek", name: "Metilprednizolon 1g IV (Pulse)", category: "steroid", route: "IV" },
  deksametazon_iv:     { id: "deksametazon_iv",     name: "Deksametazon 8mg IV",              category: "steroid",        route: "IV" },
  prednizolon_po:      { id: "prednizolon_po",      name: "Prednizolon 40mg PO",              category: "steroid",        route: "PO" },
  hidrokortizon_iv:    { id: "hidrokortizon_iv",    name: "Hidrokortizon 100mg IV",            category: "steroid",        route: "IV" },

  // ─── SEDATİF / ANKSİYOLİTİK / ANTİEPİLEPTİK ───
  midazolam_iv:   { id: "midazolam_iv",   name: "Midazolam 2mg IV",                         category: "sedatif",        route: "IV" },
  diazepam_iv:    { id: "diazepam_iv",    name: "Diazepam 5mg IV",                           category: "sedatif",        route: "IV" },
  propofol_iv:    { id: "propofol_iv",    name: "Propofol 1-2mg/kg IV (İndüksiyon)",          category: "anestezik",      route: "IV" },
  fenitoin_iv:    { id: "fenitoin_iv",    name: "Fenitoin 20mg/kg IV (Yükleme)",              category: "antiepileptik",  route: "IV" },
  levetirasetam_iv:{ id: "levetirasetam_iv", name: "Levetirasetam 1000mg IV",                category: "antiepileptik",  route: "IV" },
  haloperidol_im: { id: "haloperidol_im", name: "Haloperidol 5mg IM",                        category: "antipsikotik",   route: "IM" },

  // ─── ANTİEMETİK ───
  metoklopramid_iv: { id: "metoklopramid_iv", name: "Metoklopramid 10mg IV",                category: "antiemetik",     route: "IV" },
  ondansetron_iv:   { id: "ondansetron_iv",   name: "Ondansetron 4mg IV",                    category: "antiemetik",     route: "IV" },

  // ─── BRONKODİLATÖR ───
  salbutamol_neb:   { id: "salbutamol_neb",   name: "Salbutamol 2.5mg Nebülizasyon",        category: "bronkodilator",  route: "INH" },
  ipratropium_neb:  { id: "ipratropium_neb",  name: "İpratropium Bromür 0.5mg Nebülizasyon", category: "bronkodilator",  route: "INH" },

  // ─── ANTİHİSTAMİNİK ───
  feniramin_iv:  { id: "feniramin_iv",  name: "Feniramin (Avil) 45.5mg IV",                 category: "antihistaminik", route: "IV" },
  ranitidin_iv:  { id: "ranitidin_iv",  name: "Ranitidin 50mg IV (H2 Bloker)",              category: "antihistaminik", route: "IV" },
  setirizin_po:  { id: "setirizin_po",  name: "Setirizin 10mg PO",                          category: "antihistaminik", route: "PO" },

  // ─── GİS İLAÇLARI ───
  pantoprazol_iv:  { id: "pantoprazol_iv",  name: "Pantoprazol 40mg IV",                    category: "gis",            route: "IV" },
  pantoprazol_inf: { id: "pantoprazol_inf", name: "Pantoprazol 8mg/sa IV İnfüzyon",         category: "gis",            route: "IV" },
  sukralfat_po:    { id: "sukralfat_po",    name: "Sukralfat Süspansiyon 4x1 PO",           category: "gis",            route: "PO" },
  laksatif_po:     { id: "laksatif_po",     name: "Laktuloz Şurup 3x1 PO",                  category: "gis",            route: "PO" },

  // ─── ENDOKRİN ───
  insulin_iv:       { id: "insulin_iv",       name: "Regüler İnsülin 10 IU IV Bolus",       category: "endokrin",       route: "IV" },
  insulin_inf:      { id: "insulin_inf",      name: "İnsülin IV İnfüzyon (0.1 IU/kg/sa)",   category: "endokrin",       route: "IV" },
  desmopressin_iv:  { id: "desmopressin_iv",  name: "Desmopressin (DDAVP) 0.3mcg/kg IV",    category: "endokrin",       route: "IV" },

  // ─── VİTAMİN / ELEKTROLİT ───
  tiamin_iv:             { id: "tiamin_iv",             name: "Tiyamin (B1 Vitamini) 500mg IV",     category: "vitamin",        route: "IV" },
  kalsiyum_glukonat_iv:  { id: "kalsiyum_glukonat_iv",  name: "Kalsiyum Glukonat %10 10ml IV",      category: "elektrolit",     route: "IV" },
  potasyum_iv:           { id: "potasyum_iv",           name: "Potasyum Klorür 20mEq IV (1 saatte)", category: "elektrolit",     route: "IV" },
  magnezyum_replasman:   { id: "magnezyum_replasman",   name: "Magnezyum Sülfat 1g IV (Replasman)", category: "elektrolit",     route: "IV" },

  // ─── ANTİDOT ───
  nac_iv:         { id: "nac_iv",         name: "N-Asetilsistein (NAC) 150mg/kg IV",        category: "antidot",        route: "IV" },
  nalokson_iv:    { id: "nalokson_iv",    name: "Nalokson 0.4mg IV",                         category: "antidot",        route: "IV" },
  flumazenil_iv:  { id: "flumazenil_iv",  name: "Flumazenil 0.2mg IV",                      category: "antidot",        route: "IV" },
  aktif_komur_po: { id: "aktif_komur_po", name: "Aktif Kömür 1g/kg PO",                     category: "antidot",        route: "PO" },

  // ─── NÖROLOJİ ───
  nimodipin_po:   { id: "nimodipin_po",   name: "Nimodipin 60mg PO (4 saatte bir)",         category: "noroloji",       route: "PO" },
  mannitol_beyin: { id: "mannitol_beyin", name: "Mannitol %20 1g/kg IV (Beyin Ödemi)",       category: "noroloji",       route: "IV" },
  tamsulosin_po:  { id: "tamsulosin_po",  name: "Tamsulosin 0.4mg PO",                      category: "uroloji",        route: "PO" },

  // ─── OKSİJEN TEDAVİSİ ───
  o2_nazal:  { id: "o2_nazal",  name: "Oksijen 2-4 L/dk Nazal Kanül",                      category: "oksijen",        route: "INH" },
  o2_maske:  { id: "o2_maske",  name: "Oksijen 10-15 L/dk Reservoir Maske",                 category: "oksijen",        route: "INH" },
  o2_bvm:    { id: "o2_bvm",    name: "Balon-Valf-Maske (BVM) Ventilasyon",                 category: "oksijen",        route: "INH" },
  optiflow:  { id: "optiflow",  name: "Yüksek Akımlı Nazal Oksijen (HFNC/Optiflow)",       category: "oksijen",        route: "INH" },

  // ─── KAN ÜRÜNLERİ ───
  es_transfuzyon:  { id: "es_transfuzyon",  name: "Eritrosit Süspansiyonu (ES) Transfüzyonu", category: "kan_urunleri",  route: "IV" },
  tdp_transfuzyon: { id: "tdp_transfuzyon", name: "Taze Donmuş Plazma (TDP) Transfüzyonu",   category: "kan_urunleri",  route: "IV" },
  plt_transfuzyon: { id: "plt_transfuzyon", name: "Trombosit (Platelet) Transfüzyonu",        category: "kan_urunleri",  route: "IV" },

  // ─── PROSEDÜRLER ───
  entubasyon:       { id: "entubasyon",       name: "Endotrakeal Entübasyon",                category: "prosedur",       route: "PROC" },
  ngt:              { id: "ngt",              name: "Nazogastrik Tüp (NGT) Yerleştirme",     category: "prosedur",       route: "PROC" },
  foley:            { id: "foley",            name: "Foley Sonda Takma",                      category: "prosedur",       route: "PROC" },
  cpr:              { id: "cpr",              name: "Kardiyopulmoner Resüsitasyon (CPR)",     category: "prosedur",       route: "PROC" },
  defibrilasyon:    { id: "defibrilasyon",    name: "Defibrilasyon (200J Bifazik)",           category: "prosedur",       route: "PROC" },
  kardiyoversiyon:  { id: "kardiyoversiyon",  name: "Senkronize Kardiyoversiyon (50-200J)",   category: "prosedur",       route: "PROC" },
  toraks_tupu:      { id: "toraks_tupu",      name: "Göğüs Tüpü (Toraks Tüpü) Yerleştirme", category: "prosedur",       route: "PROC" },
  igne_dekompresyon:{ id: "igne_dekompresyon",name: "İğne Dekompresyonu (2. IKA Midklavikuler)", category: "prosedur",   route: "PROC" },
  insizyon_drenaj:  { id: "insizyon_drenaj",  name: "İnsizyon ve Drenaj (I&D)",              category: "prosedur",       route: "PROC" },
  lomber_ponksiyon: { id: "lomber_ponksiyon", name: "Lomber Ponksiyon (LP)",                 category: "prosedur",       route: "PROC" },
  reduksiyon:       { id: "reduksiyon",       name: "Kapalı Redüksiyon (Kırık/Çıkık)",       category: "prosedur",       route: "PROC" },
  perikardiyosentez:{ id: "perikardiyosentez",name: "Perikardiyosentez",                     category: "prosedur",       route: "PROC" },
  torasentez:       { id: "torasentez",       name: "Torasentez (Plevral Sıvı Aspirasyonu)", category: "prosedur",       route: "PROC" },
  kat_lab:          { id: "kat_lab",          name: "Acil Koroner Anjiyografi (PCI/Katlab)",  category: "prosedur",       route: "PROC" },
};

// İlaç kategorileri (UI'da tab olarak gösterilecek)
const DRUG_CATEGORIES = [
  { id: "sivi",            name: "💧 Sıvı Tedavisi",     icon: "💧" },
  { id: "oksijen",         name: "🫁 Oksijen",           icon: "🫁" },
  { id: "analjezik",       name: "💊 Analjezikler",      icon: "💊" },
  { id: "kardiyovaskuler",  name: "❤️ Kardiyovasküler",   icon: "❤️" },
  { id: "antiaritmik",     name: "⚡ Antiaritmikler",    icon: "⚡" },
  { id: "acil",            name: "🚨 Acil/Resüsitasyon", icon: "🚨" },
  { id: "vazoaktif",       name: "🔴 Vazopresör/İnotrop", icon: "🔴" },
  { id: "antikoagulan",    name: "🩸 Antikoagülan",      icon: "🩸" },
  { id: "trombolitik",     name: "💉 Trombolitik",       icon: "💉" },
  { id: "antibiyotik",     name: "🦠 Antibiyotikler",    icon: "🦠" },
  { id: "antiviral",       name: "🧬 Antiviral",         icon: "🧬" },
  { id: "antifungal",      name: "🍄 Antifungal",        icon: "🍄" },
  { id: "steroid",         name: "💪 Kortikosteroidler",  icon: "💪" },
  { id: "bronkodilator",   name: "🌬️ Bronkodilatörler",  icon: "🌬️" },
  { id: "antihistaminik",  name: "🤧 Antihistaminikler", icon: "🤧" },
  { id: "antiemetik",      name: "🤮 Antiemetikler",     icon: "🤮" },
  { id: "sedatif",         name: "😴 Sedatif/Anksiolitik", icon: "😴" },
  { id: "anestezik",       name: "🏥 Anestezikler",      icon: "🏥" },
  { id: "antiepileptik",   name: "⚡ Antiepileptikler",  icon: "⚡" },
  { id: "antipsikotik",    name: "🧠 Antipsikotikler",   icon: "🧠" },
  { id: "diuretik",        name: "🚿 Diüretikler",       icon: "🚿" },
  { id: "antihipertansif", name: "📉 Antihipertansifler", icon: "📉" },
  { id: "gis",             name: "🫃 GİS İlaçları",      icon: "🫃" },
  { id: "endokrin",        name: "🧪 Endokrin",           icon: "🧪" },
  { id: "vitamin",         name: "🍊 Vitamin",            icon: "🍊" },
  { id: "elektrolit",      name: "⚗️ Elektrolit",        icon: "⚗️" },
  { id: "antidot",         name: "🛡️ Antidotlar",        icon: "🛡️" },
  { id: "noroloji",        name: "🧠 Nöroloji",           icon: "🧠" },
  { id: "uroloji",         name: "🫘 Üroloji",            icon: "🫘" },
  { id: "kan_urunleri",    name: "🩸 Kan Ürünleri",      icon: "🩸" },
  { id: "prosedur",        name: "🔧 Prosedürler",       icon: "🔧" },
];

// Helper: İlaçları kategoriye göre grupla
function getDrugsByCategory(categoryId) {
  return Object.values(DRUG_CATALOG).filter(d => d.category === categoryId);
}
