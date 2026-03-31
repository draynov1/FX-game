// ====== CURRENCY DATA (whitelist — only real, active country currencies) ======
const ALL_CURRENCIES = {
  // Europe
  EUR: { flag: '\u{1F1EA}\u{1F1FA}', name: 'Евро', region: 'Европа' },
  GBP: { flag: '\u{1F1EC}\u{1F1E7}', name: 'Британска лира', region: 'Европа' },
  CHF: { flag: '\u{1F1E8}\u{1F1ED}', name: 'Швейцарски франк', region: 'Европа' },
  SEK: { flag: '\u{1F1F8}\u{1F1EA}', name: 'Шведска крона', region: 'Европа' },
  NOK: { flag: '\u{1F1F3}\u{1F1F4}', name: 'Норвежка крона', region: 'Европа' },
  DKK: { flag: '\u{1F1E9}\u{1F1F0}', name: 'Датска крона', region: 'Европа' },
  PLN: { flag: '\u{1F1F5}\u{1F1F1}', name: 'Полска злота', region: 'Европа' },
  CZK: { flag: '\u{1F1E8}\u{1F1FF}', name: 'Чешка крона', region: 'Европа' },
  HUF: { flag: '\u{1F1ED}\u{1F1FA}', name: 'Унгарски форинт', region: 'Европа' },
  RON: { flag: '\u{1F1F7}\u{1F1F4}', name: 'Румънска лея', region: 'Европа' },
  TRY: { flag: '\u{1F1F9}\u{1F1F7}', name: 'Турска лира', region: 'Европа' },
  ISK: { flag: '\u{1F1EE}\u{1F1F8}', name: 'Исландска крона', region: 'Европа' },
  BGN: { flag: '\u{1F1E7}\u{1F1EC}', name: 'Български лев', region: 'Европа' },
  RUB: { flag: '\u{1F1F7}\u{1F1FA}', name: 'Руска рубла', region: 'Европа' },
  UAH: { flag: '\u{1F1FA}\u{1F1E6}', name: 'Украинска гривна', region: 'Европа' },
  GEL: { flag: '\u{1F1EC}\u{1F1EA}', name: 'Грузинско лари', region: 'Европа' },
  RSD: { flag: '\u{1F1F7}\u{1F1F8}', name: 'Сръбски динар', region: 'Европа' },
  ALL: { flag: '\u{1F1E6}\u{1F1F1}', name: 'Албански лек', region: 'Европа' },
  MKD: { flag: '\u{1F1F2}\u{1F1F0}', name: 'Македонски денар', region: 'Европа' },
  BAM: { flag: '\u{1F1E7}\u{1F1E6}', name: 'Босненска марка', region: 'Европа' },
  MDL: { flag: '\u{1F1F2}\u{1F1E9}', name: 'Молдовско леу', region: 'Европа' },
  BYN: { flag: '\u{1F1E7}\u{1F1FE}', name: 'Беларуска рубла', region: 'Европа' },
  AMD: { flag: '\u{1F1E6}\u{1F1F2}', name: 'Арменски драм', region: 'Европа' },
  AZN: { flag: '\u{1F1E6}\u{1F1FF}', name: 'Азербайджански манат', region: 'Европа' },

  // Americas
  USD: { flag: '\u{1F1FA}\u{1F1F8}', name: 'Американски долар', region: 'Америка' },
  CAD: { flag: '\u{1F1E8}\u{1F1E6}', name: 'Канадски долар', region: 'Америка' },
  MXN: { flag: '\u{1F1F2}\u{1F1FD}', name: 'Мексиканско песо', region: 'Америка' },
  BRL: { flag: '\u{1F1E7}\u{1F1F7}', name: 'Бразилски реал', region: 'Америка' },
  ARS: { flag: '\u{1F1E6}\u{1F1F7}', name: 'Аржентинско песо', region: 'Америка' },
  CLP: { flag: '\u{1F1E8}\u{1F1F1}', name: 'Чилийско песо', region: 'Америка' },
  COP: { flag: '\u{1F1E8}\u{1F1F4}', name: 'Колумбийско песо', region: 'Америка' },
  PEN: { flag: '\u{1F1F5}\u{1F1EA}', name: 'Перуанско сол', region: 'Америка' },
  UYU: { flag: '\u{1F1FA}\u{1F1FE}', name: 'Уругвайско песо', region: 'Америка' },
  PYG: { flag: '\u{1F1F5}\u{1F1FE}', name: 'Парагвайско гуарани', region: 'Америка' },
  BOB: { flag: '\u{1F1E7}\u{1F1F4}', name: 'Боливийско боливиано', region: 'Америка' },
  DOP: { flag: '\u{1F1E9}\u{1F1F4}', name: 'Доминиканско песо', region: 'Америка' },
  CRC: { flag: '\u{1F1E8}\u{1F1F7}', name: 'Костарикански колон', region: 'Америка' },
  GTQ: { flag: '\u{1F1EC}\u{1F1F9}', name: 'Гватемалски кетцал', region: 'Америка' },
  HNL: { flag: '\u{1F1ED}\u{1F1F3}', name: 'Хондураска лемпира', region: 'Америка' },
  NIO: { flag: '\u{1F1F3}\u{1F1EE}', name: 'Никарагуанска кордоба', region: 'Америка' },
  PAB: { flag: '\u{1F1F5}\u{1F1E6}', name: 'Панамска балбоа', region: 'Америка' },
  JMD: { flag: '\u{1F1EF}\u{1F1F2}', name: 'Ямайски долар', region: 'Америка' },
  TTD: { flag: '\u{1F1F9}\u{1F1F9}', name: 'Тринидадски долар', region: 'Америка' },
  BBD: { flag: '\u{1F1E7}\u{1F1E7}', name: 'Барбадоски долар', region: 'Америка' },
  BSD: { flag: '\u{1F1E7}\u{1F1F8}', name: 'Бахамски долар', region: 'Америка' },
  HTG: { flag: '\u{1F1ED}\u{1F1F9}', name: 'Хаитски гурд', region: 'Америка' },
  VES: { flag: '\u{1F1FB}\u{1F1EA}', name: 'Венецуелски боливар', region: 'Америка' },

  // Asia & Pacific
  JPY: { flag: '\u{1F1EF}\u{1F1F5}', name: 'Японска йена', region: 'Азия и Океания' },
  CNY: { flag: '\u{1F1E8}\u{1F1F3}', name: 'Китайски юан', region: 'Азия и Океания' },
  KRW: { flag: '\u{1F1F0}\u{1F1F7}', name: 'Южнокорейски вон', region: 'Азия и Океания' },
  INR: { flag: '\u{1F1EE}\u{1F1F3}', name: 'Индийска рупия', region: 'Азия и Океания' },
  IDR: { flag: '\u{1F1EE}\u{1F1E9}', name: 'Индонезийска рупия', region: 'Азия и Океания' },
  THB: { flag: '\u{1F1F9}\u{1F1ED}', name: 'Тайландски бат', region: 'Азия и Океания' },
  MYR: { flag: '\u{1F1F2}\u{1F1FE}', name: 'Малайзийски рингит', region: 'Азия и Океания' },
  SGD: { flag: '\u{1F1F8}\u{1F1EC}', name: 'Сингапурски долар', region: 'Азия и Океания' },
  PHP: { flag: '\u{1F1F5}\u{1F1ED}', name: 'Филипинско песо', region: 'Азия и Океания' },
  VND: { flag: '\u{1F1FB}\u{1F1F3}', name: 'Виетнамски донг', region: 'Азия и Океания' },
  TWD: { flag: '\u{1F1F9}\u{1F1FC}', name: 'Тайвански долар', region: 'Азия и Океания' },
  HKD: { flag: '\u{1F1ED}\u{1F1F0}', name: 'Хонгконгски долар', region: 'Азия и Океания' },
  AUD: { flag: '\u{1F1E6}\u{1F1FA}', name: 'Австралийски долар', region: 'Азия и Океания' },
  NZD: { flag: '\u{1F1F3}\u{1F1FF}', name: 'Новозеландски долар', region: 'Азия и Океания' },
  PKR: { flag: '\u{1F1F5}\u{1F1F0}', name: 'Пакистанска рупия', region: 'Азия и Океания' },
  BDT: { flag: '\u{1F1E7}\u{1F1E9}', name: 'Бангладешка така', region: 'Азия и Океания' },
  LKR: { flag: '\u{1F1F1}\u{1F1F0}', name: 'Шриланкска рупия', region: 'Азия и Океания' },
  NPR: { flag: '\u{1F1F3}\u{1F1F5}', name: 'Непалска рупия', region: 'Азия и Океания' },
  MMK: { flag: '\u{1F1F2}\u{1F1F2}', name: 'Мианмарски киат', region: 'Азия и Океания' },
  KHR: { flag: '\u{1F1F0}\u{1F1ED}', name: 'Камбоджански риел', region: 'Азия и Океания' },
  LAK: { flag: '\u{1F1F1}\u{1F1E6}', name: 'Лаоски кип', region: 'Азия и Океания' },
  MNT: { flag: '\u{1F1F2}\u{1F1F3}', name: 'Монголски тугрик', region: 'Азия и Океания' },
  KZT: { flag: '\u{1F1F0}\u{1F1FF}', name: 'Казахстанско тенге', region: 'Азия и Океания' },
  UZS: { flag: '\u{1F1FA}\u{1F1FF}', name: 'Узбекски сом', region: 'Азия и Океания' },
  KGS: { flag: '\u{1F1F0}\u{1F1EC}', name: 'Киргизки сом', region: 'Азия и Океания' },
  TJS: { flag: '\u{1F1F9}\u{1F1EF}', name: 'Таджикски сомони', region: 'Азия и Океания' },
  TMT: { flag: '\u{1F1F9}\u{1F1F2}', name: 'Туркменски манат', region: 'Азия и Океания' },
  FJD: { flag: '\u{1F1EB}\u{1F1EF}', name: 'Фиджийски долар', region: 'Азия и Океания' },
  PGK: { flag: '\u{1F1F5}\u{1F1EC}', name: 'Папуаска кина', region: 'Азия и Океания' },
  BND: { flag: '\u{1F1E7}\u{1F1F3}', name: 'Брунейски долар', region: 'Азия и Океания' },
  MOP: { flag: '\u{1F1F2}\u{1F1F4}', name: 'Макаоска патака', region: 'Азия и Океания' },
  KPW: { flag: '\u{1F1F0}\u{1F1F5}', name: 'Севернокорейски вон', region: 'Азия и Океания' },
  AFN: { flag: '\u{1F1E6}\u{1F1EB}', name: 'Афганистански афгани', region: 'Азия и Океания' },

  // Africa
  ZAR: { flag: '\u{1F1FF}\u{1F1E6}', name: 'Южноафрикански ранд', region: 'Африка' },
  EGP: { flag: '\u{1F1EA}\u{1F1EC}', name: 'Египетска лира', region: 'Африка' },
  NGN: { flag: '\u{1F1F3}\u{1F1EC}', name: 'Нигерийска найра', region: 'Африка' },
  KES: { flag: '\u{1F1F0}\u{1F1EA}', name: 'Кенийски шилинг', region: 'Африка' },
  MAD: { flag: '\u{1F1F2}\u{1F1E6}', name: 'Мароканско дирхам', region: 'Африка' },
  GHS: { flag: '\u{1F1EC}\u{1F1ED}', name: 'Ганайско седи', region: 'Африка' },
  TZS: { flag: '\u{1F1F9}\u{1F1FF}', name: 'Танзанийски шилинг', region: 'Африка' },
  UGX: { flag: '\u{1F1FA}\u{1F1EC}', name: 'Угандски шилинг', region: 'Африка' },
  ETB: { flag: '\u{1F1EA}\u{1F1F9}', name: 'Етиопски бир', region: 'Африка' },
  DZD: { flag: '\u{1F1E9}\u{1F1FF}', name: 'Алжирски динар', region: 'Африка' },
  TND: { flag: '\u{1F1F9}\u{1F1F3}', name: 'Тунизийски динар', region: 'Африка' },
  LYD: { flag: '\u{1F1F1}\u{1F1FE}', name: 'Либийски динар', region: 'Африка' },
  SDG: { flag: '\u{1F1F8}\u{1F1E9}', name: 'Судански паунд', region: 'Африка' },
  CDF: { flag: '\u{1F1E8}\u{1F1E9}', name: 'Конгоански франк', region: 'Африка' },
  AOA: { flag: '\u{1F1E6}\u{1F1F4}', name: 'Анголска кванза', region: 'Африка' },
  XOF: { flag: '\u{1F30D}', name: 'Западноафрикански франк', region: 'Африка' },
  XAF: { flag: '\u{1F30D}', name: 'Централноафрикански франк', region: 'Африка' },
  MZN: { flag: '\u{1F1F2}\u{1F1FF}', name: 'Мозамбикски метикал', region: 'Африка' },
  ZMW: { flag: '\u{1F1FF}\u{1F1F2}', name: 'Замбийска квача', region: 'Африка' },
  MWK: { flag: '\u{1F1F2}\u{1F1FC}', name: 'Малавийска квача', region: 'Африка' },
  BWP: { flag: '\u{1F1E7}\u{1F1FC}', name: 'Ботсванска пула', region: 'Африка' },
  MUR: { flag: '\u{1F1F2}\u{1F1FA}', name: 'Маврицийска рупия', region: 'Африка' },
  SCR: { flag: '\u{1F1F8}\u{1F1E8}', name: 'Сейшелска рупия', region: 'Африка' },
  RWF: { flag: '\u{1F1F7}\u{1F1FC}', name: 'Руандски франк', region: 'Африка' },
  MGA: { flag: '\u{1F1F2}\u{1F1EC}', name: 'Малгашко ариари', region: 'Африка' },
  SOS: { flag: '\u{1F1F8}\u{1F1F4}', name: 'Сомалийски шилинг', region: 'Африка' },
  NAD: { flag: '\u{1F1F3}\u{1F1E6}', name: 'Намибийски долар', region: 'Африка' },
  GMD: { flag: '\u{1F1EC}\u{1F1F2}', name: 'Гамбийско даласи', region: 'Африка' },
  CVE: { flag: '\u{1F1E8}\u{1F1FB}', name: 'Кабовердийско ескудо', region: 'Африка' },

  // Middle East
  ILS: { flag: '\u{1F1EE}\u{1F1F1}', name: 'Израелски шекел', region: 'Близък изток' },
  SAR: { flag: '\u{1F1F8}\u{1F1E6}', name: 'Саудитски риал', region: 'Близък изток' },
  AED: { flag: '\u{1F1E6}\u{1F1EA}', name: 'Емиратско дирхам', region: 'Близък изток' },
  QAR: { flag: '\u{1F1F6}\u{1F1E6}', name: 'Катарски риал', region: 'Близък изток' },
  KWD: { flag: '\u{1F1F0}\u{1F1FC}', name: 'Кувейтски динар', region: 'Близък изток' },
  BHD: { flag: '\u{1F1E7}\u{1F1ED}', name: 'Бахрейнски динар', region: 'Близък изток' },
  OMR: { flag: '\u{1F1F4}\u{1F1F2}', name: 'Омански риал', region: 'Близък изток' },
  JOD: { flag: '\u{1F1EF}\u{1F1F4}', name: 'Йордански динар', region: 'Близък изток' },
  IQD: { flag: '\u{1F1EE}\u{1F1F6}', name: 'Иракски динар', region: 'Близък изток' },
  IRR: { flag: '\u{1F1EE}\u{1F1F7}', name: 'Ирански риал', region: 'Близък изток' },
  LBP: { flag: '\u{1F1F1}\u{1F1E7}', name: 'Ливански лира', region: 'Близък изток' },
  SYP: { flag: '\u{1F1F8}\u{1F1FE}', name: 'Сирийска лира', region: 'Близък изток' },
  YER: { flag: '\u{1F1FE}\u{1F1EA}', name: 'Йеменски риал', region: 'Близък изток' },
};

const COUNTRY_NAMES = {
  EUR: 'Европейски съюз', GBP: 'Великобритания', CHF: 'Швейцария',
  SEK: 'Швеция', NOK: 'Норвегия', DKK: 'Дания',
  PLN: 'Полша', CZK: 'Чехия', HUF: 'Унгария',
  RON: 'Румъния', TRY: 'Турция', ISK: 'Исландия',
  BGN: 'България', RUB: 'Русия', UAH: 'Украйна',
  GEL: 'Грузия', RSD: 'Сърбия', ALL: 'Албания',
  MKD: 'Северна Македония', BAM: 'Босна и Херцеговина', MDL: 'Молдова',
  BYN: 'Беларус', AMD: 'Армения', AZN: 'Азербайджан',
  USD: 'САЩ', CAD: 'Канада', MXN: 'Мексико',
  BRL: 'Бразилия', ARS: 'Аржентина', CLP: 'Чили',
  COP: 'Колумбия', PEN: 'Перу', UYU: 'Уругвай',
  PYG: 'Парагвай', BOB: 'Боливия', DOP: 'Доминикана',
  CRC: 'Коста Рика', GTQ: 'Гватемала', HNL: 'Хондурас',
  NIO: 'Никарагуа', PAB: 'Панама', JMD: 'Ямайка',
  TTD: 'Тринидад и Тобаго', BBD: 'Барбадос', BSD: 'Бахами',
  HTG: 'Хаити', VES: 'Венецуела',
  JPY: 'Япония', CNY: 'Китай', KRW: 'Южна Корея',
  INR: 'Индия', IDR: 'Индонезия', THB: 'Тайланд',
  MYR: 'Малайзия', SGD: 'Сингапур', PHP: 'Филипини',
  VND: 'Виетнам', TWD: 'Тайван', HKD: 'Хонконг',
  AUD: 'Австралия', NZD: 'Нова Зеландия',
  PKR: 'Пакистан', BDT: 'Бангладеш', LKR: 'Шри Ланка',
  NPR: 'Непал', MMK: 'Мианмар', KHR: 'Камбоджа',
  LAK: 'Лаос', MNT: 'Монголия',
  KZT: 'Казахстан', UZS: 'Узбекистан', KGS: 'Киргизстан',
  TJS: 'Таджикистан', TMT: 'Туркменистан',
  FJD: 'Фиджи', PGK: 'Папуа Нова Гвинея',
  BND: 'Бруней', MOP: 'Макао', KPW: 'Северна Корея',
  AFN: 'Афганистан',
  ZAR: 'Южна Африка', EGP: 'Египет', NGN: 'Нигерия',
  KES: 'Кения', MAD: 'Мароко', GHS: 'Гана',
  TZS: 'Танзания', UGX: 'Уганда', ETB: 'Етиопия',
  DZD: 'Алжир', TND: 'Тунис', LYD: 'Либия',
  SDG: 'Судан', CDF: 'Конго', AOA: 'Ангола',
  XOF: 'Западна Африка', XAF: 'Централна Африка',
  MZN: 'Мозамбик', ZMW: 'Замбия', MWK: 'Малави',
  BWP: 'Ботсвана', MUR: 'Мавриций', SCR: 'Сейшели',
  RWF: 'Руанда', MGA: 'Мадагаскар', SOS: 'Сомалия',
  NAD: 'Намибия', GMD: 'Гамбия', CVE: 'Кабо Верде',
  ILS: 'Израел', SAR: 'Саудитска Арабия', AED: 'ОАЕ',
  QAR: 'Катар', KWD: 'Кувейт', BHD: 'Бахрейн',
  OMR: 'Оман', JOD: 'Йордания', IQD: 'Ирак',
  IRR: 'Иран', LBP: 'Ливан', SYP: 'Сирия', YER: 'Йемен',
};

function countryName(code) {
  return COUNTRY_NAMES[code] || code;
}

const ITEMS = [
  { emoji: '\u{1F366}', name: 'Сладолед', price: 2 },
  { emoji: '\u{1F697}', name: 'Количка (играчка)', price: 10 },
  { emoji: '\u{1F36C}', name: 'Бонбон', price: 0.50 },
  { emoji: '\u{1F4DA}', name: 'Книжка', price: 5 },
  { emoji: '\u{1F3AE}', name: 'Видеоигра', price: 30 },
  { emoji: '\u{1F355}', name: 'Пица', price: 8 },
  { emoji: '\u26BD',    name: 'Футболна топка', price: 20 },
  { emoji: '\u{1F392}', name: 'Раница', price: 25 },
  { emoji: '\u{1F9F8}', name: 'Плюшено мече', price: 15 },
  { emoji: '\u{1F382}', name: 'Торта', price: 12 },
  { emoji: '\u{1F6B2}', name: 'Колело', price: 150 },
  { emoji: '\u{1F45F}', name: 'Маратонки', price: 40 },
];

const CARD_COLORS = [
  '#FF6B6B', '#2EC4B6', '#FFD166', '#9B5DE5', '#FF8E53',
  '#00B4D8', '#E9C46A', '#7B2D8E', '#F4845F', '#48BFE3',
];

const RATES_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.min.json';
const RATES_FALLBACK = 'https://latest.currency-api.pages.dev/v1/currencies/eur.min.json';

const CACHE_KEY = 'fx_rates';
const SELECTION_KEY = 'fx_selected';
const CACHE_DURATION = 3600000; // 1 hour
// ====== STATE ======
let rates = {};
let availableCurrencies = [];
let selectedCurrencies = [];
let converterFrom = 'EUR';
let converterTo = 'USD';

// ====== DOM HELPERS ======
const $ = (id) => document.getElementById(id);

// ====== API & CACHE ======
function loadCache(ignoreExpiry) {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!ignoreExpiry && Date.now() - data.timestamp > CACHE_DURATION) return null;
    return data;
  } catch {
    return null;
  }
}

function saveCache(ratesObj) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      rates: ratesObj,
      timestamp: Date.now(),
    }));
  } catch { /* quota exceeded — ignore */ }
}

function buildAvailable() {
  // Only show currencies from our whitelist that the API has rates for
  availableCurrencies = Object.keys(ALL_CURRENCIES).filter(
    (c) => c === 'EUR' || rates[c] !== undefined,
  );
  // Keep only available currencies in selection
  selectedCurrencies = selectedCurrencies.filter(
    (c) => c !== 'EUR' && availableCurrencies.includes(c),
  );
  // Fill with all available currencies if needed
  for (const c of availableCurrencies) {
    if (c !== 'EUR' && !selectedCurrencies.includes(c)) {
      selectedCurrencies.push(c);
    }
  }
}

async function fetchFromApi(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('API ' + res.status);
  return res.json();
}

function applyRatesData(data) {
  // API returns { date, eur: { usd: 1.08, ... } } with lowercase keys
  const raw = data.eur || {};
  rates = {};
  Object.keys(raw).forEach((key) => {
    const code = key.toUpperCase();
    if (ALL_CURRENCIES[code]) {
      rates[code] = raw[key];
    }
  });
  rates.EUR = 1;
}

async function fetchRates() {
  const cached = loadCache(false);
  if (cached) {
    rates = cached.rates;
    rates.EUR = 1;
    buildAvailable();
    return;
  }

  try {
    let ratesData;
    try {
      ratesData = await fetchFromApi(RATES_URL);
    } catch {
      ratesData = await fetchFromApi(RATES_FALLBACK);
    }
    applyRatesData(ratesData);
    saveCache(rates);
    buildAvailable();
  } catch (err) {
    // Fall back to stale cache
    const stale = loadCache(true);
    if (stale) {
      rates = stale.rates;
      rates.EUR = 1;
      buildAvailable();
    } else {
      throw err;
    }
  }
}

// ====== FORMATTING ======
function formatRate(value) {
  if (!Number.isFinite(value)) return '—';
  if (value >= 1000) return value.toLocaleString('bg-BG', { maximumFractionDigits: 0 });
  if (value >= 100)  return value.toLocaleString('bg-BG', { maximumFractionDigits: 1 });
  if (value >= 1)    return value.toLocaleString('bg-BG', { maximumFractionDigits: 2 });
  return value.toLocaleString('bg-BG', { maximumFractionDigits: 4 });
}

function convert(amount, from, to) {
  const f = from === 'EUR' ? 1 : (rates[from] || 1);
  const t = to === 'EUR' ? 1 : (rates[to] || 1);
  return amount * t / f;
}

// ====== RENDER: GRID ======
function renderGrid() {
  const grid = $('currency-grid');
  grid.innerHTML = '';
  selectedCurrencies.forEach((code, i) => {
    const cur = ALL_CURRENCIES[code];
    if (!cur) return;
    const card = document.createElement('div');
    card.className = 'currency-card';
    card.style.borderTopColor = CARD_COLORS[i % CARD_COLORS.length];
    card.style.animationDelay = i * 0.05 + 's';
    card.innerHTML =
      '<span class="flag">' + cur.flag + '</span>' +
      '<div class="code">' + countryName(code) + '</div>' +
      '<div class="name">' + cur.name + '</div>' +
      '<div class="rate">' + formatRate(rates[code]) + '</div>';
    card.addEventListener('click', () => {
      converterTo = code;
      $('to-currency').value = code;
      updateConverter();
      $('converter-section').scrollIntoView({ behavior: 'smooth' });
    });
    grid.appendChild(card);
  });
}

// ====== RENDER: CONVERTER ======
function populateConverterSelects() {
  const sorted = ['EUR'].concat(
    availableCurrencies.filter((c) => c !== 'EUR'),
  );
  const html = sorted.map((code) => {
    const cur = ALL_CURRENCIES[code];
    const label = cur ? cur.flag + ' ' + countryName(code) + ' \u2014 ' + cur.name : code;
    return '<option value="' + code + '">' + label + '</option>';
  }).join('');

  $('from-currency').innerHTML = html;
  $('to-currency').innerHTML = html;
  $('from-currency').value = converterFrom;
  $('to-currency').value = converterTo;
}

function updateConverter() {
  const amount = parseFloat($('from-amount').value) || 0;
  converterFrom = $('from-currency').value;
  converterTo = $('to-currency').value;
  const result = convert(amount, converterFrom, converterTo);
  const el = $('to-result');
  el.textContent = formatRate(result);
  el.classList.remove('pop-in');
  void el.offsetWidth; // reflow to restart animation
  el.classList.add('pop-in');
}

// ====== RENDER: ITEMS ======
function renderItems() {
  const grid = $('items-grid');
  grid.innerHTML = '';
  ITEMS.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.style.animationDelay = i * 0.04 + 's';

    let pricesHtml = '';
    selectedCurrencies.forEach((code) => {
      const cur = ALL_CURRENCIES[code];
      if (!cur) return;
      const price = convert(item.price, 'EUR', code);
      pricesHtml +=
        '<div class="item-price">' +
          '<span class="flag">' + cur.flag + '</span>' +
          '<span class="val">' + formatRate(price) + '</span>' +
          '<span class="cur">' + countryName(code) + '</span>' +
        '</div>';
    });

    card.innerHTML =
      '<div class="item-header">' +
        '<span class="item-emoji">' + item.emoji + '</span>' +
        '<span class="item-name">' + item.name + '</span>' +
        '<span class="item-eur-price">' + item.price.toFixed(2) + ' \u20AC</span>' +
      '</div>' +
      '<div class="item-prices">' + pricesHtml + '</div>';
    grid.appendChild(card);
  });
}

// ====== MODAL ======
function openModal() {
  const modal = $('modal');
  const list = $('currency-list');
  const tempSelected = new Set(selectedCurrencies);

  const regionOrder = ['Европа', 'Америка', 'Азия и Океания', 'Африка', 'Близък изток'];

  function renderList() {
    list.innerHTML = '';

    // Group available (non-EUR) currencies by region
    const groups = {};
    availableCurrencies.forEach((code) => {
      if (code === 'EUR') return;
      const cur = ALL_CURRENCIES[code];
      const region = cur ? cur.region : 'Други';
      if (!groups[region]) groups[region] = [];
      groups[region].push(code);
    });

    regionOrder.forEach((region) => {
      const codes = groups[region];
      if (!codes || codes.length === 0) return;

      const section = document.createElement('div');
      section.className = 'region-group';
      section.innerHTML = '<h3>' + region + '</h3>';

      codes.forEach((code) => {
        const cur = ALL_CURRENCIES[code];
        const checked = tempSelected.has(code);
        const disabled = false;

        const row = document.createElement('div');
        row.className = 'cur-option' + (disabled ? ' disabled' : '');
        row.innerHTML =
          '<input type="checkbox" id="m-' + code + '"' +
            (checked ? ' checked' : '') +
            (disabled ? ' disabled' : '') + '>' +
          '<span class="flag">' + (cur ? cur.flag : '') + '</span>' +
          '<label for="m-' + code + '">' + countryName(code) + ' \u2014 ' + (cur ? cur.name : code) + '</label>';

        row.querySelector('input').addEventListener('change', function () {
          if (this.checked) tempSelected.add(code);
          else tempSelected.delete(code);
          $('modal-count').textContent = 'Избрани: ' + tempSelected.size;
          renderList();
        });

        section.appendChild(row);
      });

      list.appendChild(section);
    });
  }

  $('modal-count').textContent = 'Избрани: ' + tempSelected.size;
  renderList();

  $('modal-done').onclick = () => {
    selectedCurrencies = [...tempSelected];
    saveSelection();
    renderGrid();
    renderItems();
    modal.classList.add('hidden');
  };

  modal.querySelector('.modal-backdrop').onclick = () => {
    modal.classList.add('hidden');
  };

  modal.classList.remove('hidden');
}

// ====== SELECTION PERSISTENCE ======
function saveSelection() {
  try {
    localStorage.setItem(SELECTION_KEY, JSON.stringify(selectedCurrencies));
  } catch { /* ignore */ }
}

function loadSelection() {
  try {
    const raw = localStorage.getItem(SELECTION_KEY);
    if (!raw) return;
    const arr = JSON.parse(raw);
    if (Array.isArray(arr) && arr.length > 0) selectedCurrencies = arr;
  } catch { /* ignore */ }
}

// ====== EVENTS ======
function setupEvents() {
  $('customize-btn').addEventListener('click', openModal);
  $('refresh-btn').addEventListener('click', refreshRates);

  $('from-currency').addEventListener('change', updateConverter);
  $('to-currency').addEventListener('change', updateConverter);
  $('from-amount').addEventListener('input', updateConverter);

  $('swap-btn').addEventListener('click', () => {
    const tmp = $('from-currency').value;
    $('from-currency').value = $('to-currency').value;
    $('to-currency').value = tmp;
    updateConverter();
  });
}

// ====== MANUAL REFRESH ======
async function refreshRates() {
  const btn = $('refresh-btn');
  btn.disabled = true;
  btn.textContent = '...';
  try {
    let data;
    try { data = await fetchFromApi(RATES_URL); }
    catch { data = await fetchFromApi(RATES_FALLBACK); }
    applyRatesData(data);
    saveCache(rates);
    buildAvailable();
    populateConverterSelects();
    renderGrid();
    updateConverter();
    renderItems();
    $('last-updated').textContent =
      'Последно обновяване: ' + new Date().toLocaleString('bg-BG');
  } catch { /* silent */ }
  btn.disabled = false;
  btn.textContent = 'Обнови';
}

// ====== AUTO-REFRESH ======
function startAutoRefresh() {
  setInterval(async () => {
    try {
      let data;
      try { data = await fetchFromApi(RATES_URL); }
      catch { data = await fetchFromApi(RATES_FALLBACK); }
      applyRatesData(data);
      saveCache(rates);
      buildAvailable();
      renderGrid();
      updateConverter();
      renderItems();
      $('last-updated').textContent =
        'Последно обновяване: ' + new Date().toLocaleString('bg-BG');
    } catch { /* silent */ }
  }, CACHE_DURATION);
}

// ====== INIT ======
async function init() {
  loadSelection();

  try {
    await fetchRates();
  } catch {
    $('loader').innerHTML =
      '<p style="color:#FF6B6B;font-size:1.2rem;padding:2rem;text-align:center">' +
      'Грешка при зареждане. Моля, опитай отново.' +
      '</p>';
    return;
  }

  populateConverterSelects();
  renderGrid();
  updateConverter();
  renderItems();
  setupEvents();
  startAutoRefresh();

  // Show last-updated timestamp
  const cached = loadCache(true);
  if (cached) {
    $('last-updated').textContent =
      'Последно обновяване: ' + new Date(cached.timestamp).toLocaleString('bg-BG');
  }

  // Hide loader, show app
  $('loader').classList.add('hidden');
  $('app').classList.remove('hidden');
}

init();
