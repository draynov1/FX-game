// ====== CURRENCY DATA ======
const ALL_CURRENCIES = {
  // European
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

  // Americas
  USD: { flag: '\u{1F1FA}\u{1F1F8}', name: 'Американски долар', region: 'Америка' },
  CAD: { flag: '\u{1F1E8}\u{1F1E6}', name: 'Канадски долар', region: 'Америка' },
  MXN: { flag: '\u{1F1F2}\u{1F1FD}', name: 'Мексиканско песо', region: 'Америка' },
  BRL: { flag: '\u{1F1E7}\u{1F1F7}', name: 'Бразилски реал', region: 'Америка' },
  ARS: { flag: '\u{1F1E6}\u{1F1F7}', name: 'Аржентинско песо', region: 'Америка' },
  CLP: { flag: '\u{1F1E8}\u{1F1F1}', name: 'Чилийско песо', region: 'Америка' },
  COP: { flag: '\u{1F1E8}\u{1F1F4}', name: 'Колумбийско песо', region: 'Америка' },
  PEN: { flag: '\u{1F1F5}\u{1F1EA}', name: 'Перуанско сол', region: 'Америка' },

  // Asia-Pacific
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

  // Africa & Middle East
  ZAR: { flag: '\u{1F1FF}\u{1F1E6}', name: 'Южноафрикански ранд', region: 'Африка и Близък изток' },
  EGP: { flag: '\u{1F1EA}\u{1F1EC}', name: 'Египетска лира', region: 'Африка и Близък изток' },
  NGN: { flag: '\u{1F1F3}\u{1F1EC}', name: 'Нигерийска найра', region: 'Африка и Близък изток' },
  KES: { flag: '\u{1F1F0}\u{1F1EA}', name: 'Кенийски шилинг', region: 'Африка и Близък изток' },
  MAD: { flag: '\u{1F1F2}\u{1F1E6}', name: 'Мароканско дирхам', region: 'Африка и Близък изток' },
  ILS: { flag: '\u{1F1EE}\u{1F1F1}', name: 'Израелски шекел', region: 'Африка и Близък изток' },
  SAR: { flag: '\u{1F1F8}\u{1F1E6}', name: 'Саудитски риал', region: 'Африка и Близък изток' },
  AED: { flag: '\u{1F1E6}\u{1F1EA}', name: 'Емиратско дирхам', region: 'Африка и Близък изток' },
};

const COUNTRY_NAMES = {
  EUR: 'Европейски съюз', GBP: 'Великобритания', CHF: 'Швейцария',
  SEK: 'Швеция', NOK: 'Норвегия', DKK: 'Дания',
  PLN: 'Полша', CZK: 'Чехия', HUF: 'Унгария',
  RON: 'Румъния', TRY: 'Турция', ISK: 'Исландия',
  BGN: 'България', RUB: 'Русия', UAH: 'Украйна',
  GEL: 'Грузия', RSD: 'Сърбия', ALL: 'Албания',
  MKD: 'Северна Македония', BAM: 'Босна и Херцеговина', MDL: 'Молдова',
  USD: 'САЩ', CAD: 'Канада', MXN: 'Мексико',
  BRL: 'Бразилия', ARS: 'Аржентина', CLP: 'Чили',
  COP: 'Колумбия', PEN: 'Перу',
  JPY: 'Япония', CNY: 'Китай', KRW: 'Южна Корея',
  INR: 'Индия', IDR: 'Индонезия', THB: 'Тайланд',
  MYR: 'Малайзия', SGD: 'Сингапур', PHP: 'Филипини',
  VND: 'Виетнам', TWD: 'Тайван', HKD: 'Хонконг',
  AUD: 'Австралия', NZD: 'Нова Зеландия',
  ZAR: 'Южна Африка', EGP: 'Египет', NGN: 'Нигерия',
  KES: 'Кения', MAD: 'Мароко', ILS: 'Израел',
  SAR: 'Саудитска Арабия', AED: 'ОАЕ',
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

// Auto-generate flag emoji from a currency code (uses first 2 chars as country code)
function autoFlag(code) {
  const cc = code.slice(0, 2);
  return String.fromCodePoint(
    ...cc.split('').map((ch) => 0x1F1E6 + ch.charCodeAt(0) - 65),
  );
}

function buildAvailable() {
  // Add any API-returned currencies that aren't in our metadata
  Object.keys(rates).forEach((code) => {
    if (code === 'EUR') return;
    if (!ALL_CURRENCIES[code]) {
      ALL_CURRENCIES[code] = {
        flag: autoFlag(code),
        name: code,
        region: 'Други',
      };
      COUNTRY_NAMES[code] = code;
    }
  });

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

async function fetchRates() {
  const cached = loadCache(false);
  if (cached) {
    rates = cached.rates;
    rates.EUR = 1;
    buildAvailable();
    return;
  }

  try {
    const [ratesRes, currRes] = await Promise.all([
      fetch('https://api.frankfurter.app/latest?from=EUR'),
      fetch('https://api.frankfurter.app/currencies').catch(() => null),
    ]);
    if (!ratesRes.ok) throw new Error('API ' + ratesRes.status);
    const data = await ratesRes.json();
    rates = data.rates || {};
    rates.EUR = 1;
    // Use API currency names for any we don't already have metadata for
    if (currRes && currRes.ok) {
      const names = await currRes.json();
      Object.keys(names).forEach((code) => {
        if (!ALL_CURRENCIES[code] && code !== 'EUR') {
          ALL_CURRENCIES[code] = {
            flag: autoFlag(code),
            name: names[code],
            region: 'Други',
          };
          COUNTRY_NAMES[code] = names[code];
        }
      });
    }
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

  const regionOrder = ['Европа', 'Америка', 'Азия и Океания', 'Африка и Близък изток', 'Други'];

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
    const res = await fetch('https://api.frankfurter.app/latest?from=EUR');
    if (!res.ok) throw new Error('API ' + res.status);
    const data = await res.json();
    rates = data.rates || {};
    rates.EUR = 1;
    saveCache(rates);
    buildAvailable();
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
      const res = await fetch('https://api.frankfurter.app/latest?from=EUR');
      if (!res.ok) return;
      const data = await res.json();
      rates = data.rates || {};
      rates.EUR = 1;
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
