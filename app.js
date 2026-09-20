const STORAGE_KEY = "kaufkisteDataV1";
const LEGACY_KEYS = [
  "shoplisterPrototypeDataV4",
  "shoplisterPrototypeDataV3",
  "shoplisterPrototypeDataV2",
  "shoppingPrototypeData"
];

const i18n = {
  de: {
    appTitle: "Kaufkiste",
    appSubtitle: "Geteilte Datei, kein Konto, kein Server",
    lists: "Zettel",
    newListPlaceholder: "Neuer Zettel",
    createList: "Anlegen",
    provider: "Dienst",
    storageHint: "Ein direkter JSON-Link kann gelesen werden, wenn der Anbieter Browser-Zugriff erlaubt. Zum Speichern braucht Kaufkiste eine Schreib-URL, zum Beispiel aus Google Apps Script. Das Token bleibt lokal und wird nicht in die gemeinsame JSON geschrieben.",
    readUrlLabel: "JSON-Leselink",
    readUrlPlaceholder: "Google-Docs-, Drive-, Dropbox- oder JSON-Link",
    writeUrlLabel: "JSON-Schreiblink",
    writeUrlPlaceholder: "Optional: Apps-Script- oder Webhook-URL",
    tokenLabel: "Zugriffstoken",
    tokenPlaceholder: "Token aus Google Apps Script",
    saveStorageSettings: "Link merken",
    loadRemoteJson: "Vom Link laden",
    saveRemoteJson: "Zum Link speichern",
    exportJson: "JSON exportieren",
    importJson: "JSON importieren",
    plan: "Planen",
    shop: "Einkaufen",
    portfolio: "Portfolio",
    searchPlaceholder: "Artikel suchen",
    summary: "Status",
    active: "aktiv",
    inactive: "deaktiviert",
    known: "Portfolio",
    dataModel: "Datenmodell",
    settings: "Einstellungen",
    navList: "Zettel",
    portfolioName: "Name",
    portfolioCategory: "Kategorie",
    portfolioUnit: "Anzahl",
    saveItem: "Speichern",
    cancel: "Abbrechen",
    edit: "Bearbeiten",
    delete: "Löschen",
    deleteList: "Zettel löschen",
    listDeleted: "Zettel gelöscht.",
    confirmDeleteList: "Zettel „{name}“ wirklich löschen?",
    emptyLists: "Noch kein Zettel. Lege oben einen neuen Zettel an.",
    noActiveList: "Lege zuerst einen Zettel an.",
    onList: "Auf dem Zettel",
    planHeadline: "Aktive und pausierte Artikel",
    shopHeadline: "Einkaufsroute",
    planHint: "Planen ist der Standardmodus. Hier fügst du Portfolio-Artikel hinzu, reaktivierst pausierte Artikel und pflegst Mengen.",
    shopHint: "Im Einkaufsmodus siehst du aktive Artikel in deiner manuell gepflegten Reihenfolge. Gekaufte Artikel werden deaktiviert und ausgeblendet.",
    items: "Artikel",
    updated: "aktualisiert",
    add: "Hinzufügen",
    reactivate: "Aktivieren",
    remove: "Entfernen",
    bought: "Gekauft",
    emptyPlan: "Noch keine Artikel. Füge unten etwas aus dem Portfolio hinzu.",
    emptyShop: "Alles erledigt oder deaktiviert.",
    created: "Zettel angelegt und im Modus Planen geöffnet.",
    exported: "JSON-Datei vorbereitet.",
    imported: "JSON-Datei importiert.",
    storageSaved: "Speicherlink gespeichert.",
    remoteMissing: "Bitte zuerst einen JSON-Leselink eintragen.",
    remoteSaveMissing: "Bitte zuerst einen JSON-Schreiblink eintragen.",
    remoteLoading: "Lade JSON vom Link...",
    remoteSaving: "Speichere JSON zum Link...",
    remoteLoaded: "JSON vom Link geladen.",
    remoteSaved: "JSON zum Link gespeichert.",
    remoteSent: "JSON an Schreiblink gesendet.",
    remoteLoadFailed: "JSON konnte vom Link nicht geladen werden.",
    remoteSaveFailed: "JSON konnte nicht zum Link gespeichert werden.",
    remoteNeverSynced: "Noch nicht mit einem Link synchronisiert.",
    remoteLastSync: "Letzte Synchronisierung",
    savedLocal: "Lokaler Entwurf aktualisiert.",
    duplicate: "Artikel ist bereits aktiv auf dem Zettel.",
    portfolioLocked: "Das Portfolio ist nur im Modus Planen pflegbar.",
    itemSaved: "Portfolio-Artikel gespeichert.",
    itemDeleted: "Portfolio-Artikel gelöscht.",
    languageLabel: "Sprache",
    mode: "Modus"
  },
  en: {
    appTitle: "Kaufkiste",
    appSubtitle: "Shared file, no account, no server",
    lists: "Lists",
    newListPlaceholder: "New list",
    createList: "Create",
    provider: "Service",
    storageHint: "A direct JSON link can be loaded when the provider allows browser access. Saving needs a write URL, for example from Google Apps Script. The token stays local and is not written to the shared JSON.",
    readUrlLabel: "JSON read link",
    readUrlPlaceholder: "Google Docs, Drive, Dropbox, or JSON link",
    writeUrlLabel: "JSON write link",
    writeUrlPlaceholder: "Optional: Apps Script or webhook URL",
    tokenLabel: "Access token",
    tokenPlaceholder: "Token from Google Apps Script",
    saveStorageSettings: "Remember link",
    loadRemoteJson: "Load from link",
    saveRemoteJson: "Save to link",
    exportJson: "Export JSON",
    importJson: "Import JSON",
    plan: "Plan",
    shop: "Shop",
    portfolio: "Portfolio",
    searchPlaceholder: "Search items",
    summary: "Status",
    active: "active",
    inactive: "inactive",
    known: "Portfolio",
    dataModel: "Data Model",
    settings: "Settings",
    navList: "List",
    portfolioName: "Name",
    portfolioCategory: "Category",
    portfolioUnit: "Quantity",
    saveItem: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    deleteList: "Delete list",
    listDeleted: "List deleted.",
    confirmDeleteList: "Delete list \"{name}\"?",
    emptyLists: "No list yet. Create a new list above.",
    noActiveList: "Create a list first.",
    onList: "On list",
    planHeadline: "Active and paused items",
    shopHeadline: "Shopping route",
    planHint: "Planning is the default mode. Add portfolio items, reactivate paused items, and edit quantities.",
    shopHint: "Shopping mode shows active items in your manually maintained order. Bought items are disabled and hidden.",
    items: "items",
    updated: "updated",
    add: "Add",
    reactivate: "Reactivate",
    remove: "Remove",
    bought: "Bought",
    emptyPlan: "No items yet. Add something from the portfolio below.",
    emptyShop: "Everything is done or disabled.",
    created: "List created and opened in planning mode.",
    exported: "JSON file prepared.",
    imported: "JSON file imported.",
    storageSaved: "Storage link saved.",
    remoteMissing: "Add a JSON read link first.",
    remoteSaveMissing: "Add a JSON write link first.",
    remoteLoading: "Loading JSON from link...",
    remoteSaving: "Saving JSON to link...",
    remoteLoaded: "JSON loaded from link.",
    remoteSaved: "JSON saved to link.",
    remoteSent: "JSON sent to write link.",
    remoteLoadFailed: "Could not load JSON from link.",
    remoteSaveFailed: "Could not save JSON to link.",
    remoteNeverSynced: "Not synced with a link yet.",
    remoteLastSync: "Last sync",
    savedLocal: "Local draft updated.",
    duplicate: "Item is already active on this list.",
    portfolioLocked: "The portfolio can only be maintained while planning a list.",
    itemSaved: "Portfolio item saved.",
    itemDeleted: "Portfolio item deleted.",
    languageLabel: "Language",
    mode: "Mode"
  }
};

const seedItems = [
  "Milch",
  "Naturjoghurts",
  "Kefir",
  "Sandwich Scheiben",
  "Geriebener Käse",
  "Schmand",
  "Kräuterfrischkäse Fässchen",
  "Körniger Frischkäse",
  "Fruchtzwerge",
  "Frischkäse",
  "Leberwurst",
  "Schinkenwurst",
  "Salami",
  "Geflügel Rundwurst",
  "Gehacktes",
  "Milde Tyrolini",
  "Würstchen",
  "Speck Würfel",
  "Hähnchen Brust Filet",
  "Pizzateig",
  "Eier",
  "Kartoffeln",
  "Äpfel (großer Sack)",
  "Birnen",
  "Bananen 2-3",
  "Erdbeeren (nur hellrote)",
  "Weintrauben dunkle",
  "Paprika",
  "Gurke",
  "Cherry Tomaten",
  "Zwiebeln",
  "Brokkoli frisch",
  "Möhren",
  "Zucchini",
  "Sahne",
  "Streusel",
  "Schokolade für Mona",
  "Reis",
  "Chips",
  "Zwieback Brandt",
  "Kaugummis",
  "Cashew Kerne",
  "Brot Chips mediterran",
  "Mayonnaise",
  "Toast",
  "Fencheltee",
  "Margarine",
  "Erdbeer Marmelade",
  "Hot Dog Brötchen",
  "Burger Brötchen",
  "Reiswaffeln",
  "Nudeln",
  "Spiral Nudeln (normale)",
  "Spaghetti",
  "Tomatenmark",
  "Thunfisch",
  "Salzstangen",
  "Ritz",
  "Kakao Düsis",
  "Saltoos Seitenbacher",
  "Dinkelflakes Seitenbacher",
  "Seelenwärmer Schokolade und Vanille",
  "Reiswaffeln klein Barbecue",
  "Apfelmus",
  "Waffeln mit Puderzucker",
  "Blätterteig Gebäck von Biscotto",
  "Kaffeekränze",
  "Eier Kekse",
  "Andere Kekse",
  "Mini Zwieback Schoko",
  "Gummizeugs Mona",
  "Krupp Brot",
  "Holland Brot",
  "Soße Hollondaise",
  "Pflanzen Creme",
  "Meridol",
  "Zahnpasta Mona",
  "Bübchen Kids 2 in 1",
  "Badeperlen Proben Mona",
  "Zahnbürste Mona",
  "Gesichtspeeling",
  "Guhl Kraft und Fülle Sprühkur",
  "Guhl Shampoo Kraft und Fülle",
  "Zahnseide",
  "Zahnzwischenraumbürsten",
  "Deo Dominik",
  "Papier Biomüllbeutel",
  "Müllbeutel Plastik 25l",
  "Kosmetik Müllbeutel 10l",
  "Bad Kosmetik Beutel 5l",
  "Alu Folie",
  "Spülmaschinentabs",
  "WC Gel Ente",
  "WC Gel Dinger",
  "Klobürsten",
  "Klopapier",
  "Küchentücher Rolle",
  "Taschentücher",
  "Kosmetik Tücher",
  "Tandil black",
  "Tandil white",
  "Tandil Colour",
  "Weichspüler",
  "Hygienespüler",
  "Calgon",
  "Apfelsaft",
  "Cola Zero",
  "Activ top Sport rot",
  "Spritzer Getränk gelb",
  "O Saft mild",
  "Laugen Mix Dinger",
  "Burger Pattys",
  "Eis",
  "Eis am Stiel klein",
  "Dino Schnitzel",
  "Frikandeln",
  "Pommes",
  "Kroketten",
  "Anderes Fleisch"
];

const CATEGORIES = [
  { id: "kuehltheke", de: "Kühltheke", en: "Chilled" },
  { id: "gefriertruhe", de: "Gefriertruhe", en: "Frozen" },
  { id: "lebensmittel", de: "Lebensmittel", en: "Groceries" },
  { id: "getraenke", de: "Getränke", en: "Drinks" },
  { id: "drogerie", de: "Drogerieartikel", en: "Drugstore" },
  { id: "haushalt", de: "Haushalt", en: "Household" },
  { id: "sonstiges", de: "Sonstiges", en: "Other" }
];

const CATEGORY_BY_ITEM = {
  "Milch": "kuehltheke",
  "Naturjoghurts": "kuehltheke",
  "Kefir": "kuehltheke",
  "Sandwich Scheiben": "kuehltheke",
  "Geriebener Käse": "kuehltheke",
  "Schmand": "kuehltheke",
  "Kräuterfrischkäse Fässchen": "kuehltheke",
  "Körniger Frischkäse": "kuehltheke",
  "Fruchtzwerge": "kuehltheke",
  "Frischkäse": "kuehltheke",
  "Leberwurst": "kuehltheke",
  "Schinkenwurst": "kuehltheke",
  "Salami": "kuehltheke",
  "Geflügel Rundwurst": "kuehltheke",
  "Gehacktes": "kuehltheke",
  "Milde Tyrolini": "kuehltheke",
  "Würstchen": "kuehltheke",
  "Speck Würfel": "kuehltheke",
  "Hähnchen Brust Filet": "kuehltheke",
  "Pizzateig": "kuehltheke",
  "Eier": "lebensmittel",
  "Kartoffeln": "lebensmittel",
  "Äpfel (großer Sack)": "lebensmittel",
  "Birnen": "lebensmittel",
  "Bananen 2-3": "lebensmittel",
  "Erdbeeren (nur hellrote)": "lebensmittel",
  "Weintrauben dunkle": "lebensmittel",
  "Paprika": "lebensmittel",
  "Gurke": "lebensmittel",
  "Cherry Tomaten": "lebensmittel",
  "Zwiebeln": "lebensmittel",
  "Brokkoli frisch": "lebensmittel",
  "Möhren": "lebensmittel",
  "Zucchini": "lebensmittel",
  "Sahne": "kuehltheke",
  "Streusel": "lebensmittel",
  "Schokolade für Mona": "lebensmittel",
  "Reis": "lebensmittel",
  "Chips": "lebensmittel",
  "Zwieback Brandt": "lebensmittel",
  "Kaugummis": "lebensmittel",
  "Cashew Kerne": "lebensmittel",
  "Brot Chips mediterran": "lebensmittel",
  "Mayonnaise": "lebensmittel",
  "Toast": "lebensmittel",
  "Fencheltee": "lebensmittel",
  "Margarine": "kuehltheke",
  "Erdbeer Marmelade": "lebensmittel",
  "Hot Dog Brötchen": "lebensmittel",
  "Burger Brötchen": "lebensmittel",
  "Reiswaffeln": "lebensmittel",
  "Nudeln": "lebensmittel",
  "Spiral Nudeln (normale)": "lebensmittel",
  "Spaghetti": "lebensmittel",
  "Tomatenmark": "lebensmittel",
  "Thunfisch": "lebensmittel",
  "Salzstangen": "lebensmittel",
  "Ritz": "lebensmittel",
  "Kakao Düsis": "lebensmittel",
  "Saltoos Seitenbacher": "lebensmittel",
  "Dinkelflakes Seitenbacher": "lebensmittel",
  "Seelenwärmer Schokolade und Vanille": "lebensmittel",
  "Reiswaffeln klein Barbecue": "lebensmittel",
  "Apfelmus": "lebensmittel",
  "Waffeln mit Puderzucker": "lebensmittel",
  "Blätterteig Gebäck von Biscotto": "lebensmittel",
  "Kaffeekränze": "lebensmittel",
  "Eier Kekse": "lebensmittel",
  "Andere Kekse": "lebensmittel",
  "Mini Zwieback Schoko": "lebensmittel",
  "Gummizeugs Mona": "lebensmittel",
  "Krupp Brot": "lebensmittel",
  "Holland Brot": "lebensmittel",
  "Soße Hollondaise": "lebensmittel",
  "Pflanzen Creme": "kuehltheke",
  "Meridol": "drogerie",
  "Zahnpasta Mona": "drogerie",
  "Bübchen Kids 2 in 1": "drogerie",
  "Badeperlen Proben Mona": "drogerie",
  "Zahnbürste Mona": "drogerie",
  "Gesichtspeeling": "drogerie",
  "Guhl Kraft und Fülle Sprühkur": "drogerie",
  "Guhl Shampoo Kraft und Fülle": "drogerie",
  "Zahnseide": "drogerie",
  "Zahnzwischenraumbürsten": "drogerie",
  "Deo Dominik": "drogerie",
  "Papier Biomüllbeutel": "haushalt",
  "Müllbeutel Plastik 25l": "haushalt",
  "Kosmetik Müllbeutel 10l": "haushalt",
  "Bad Kosmetik Beutel 5l": "haushalt",
  "Alu Folie": "haushalt",
  "Spülmaschinentabs": "haushalt",
  "WC Gel Ente": "haushalt",
  "WC Gel Dinger": "haushalt",
  "Klobürsten": "haushalt",
  "Klopapier": "haushalt",
  "Küchentücher Rolle": "haushalt",
  "Taschentücher": "haushalt",
  "Kosmetik Tücher": "haushalt",
  "Tandil black": "haushalt",
  "Tandil white": "haushalt",
  "Tandil Colour": "haushalt",
  "Weichspüler": "haushalt",
  "Hygienespüler": "haushalt",
  "Calgon": "haushalt",
  "Apfelsaft": "getraenke",
  "Cola Zero": "getraenke",
  "Activ top Sport rot": "getraenke",
  "Spritzer Getränk gelb": "getraenke",
  "O Saft mild": "getraenke",
  "Laugen Mix Dinger": "gefriertruhe",
  "Burger Pattys": "gefriertruhe",
  "Eis": "gefriertruhe",
  "Eis am Stiel klein": "gefriertruhe",
  "Dino Schnitzel": "gefriertruhe",
  "Frikandeln": "gefriertruhe",
  "Pommes": "gefriertruhe",
  "Kroketten": "gefriertruhe",
  "Anderes Fleisch": "gefriertruhe"
};

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

const state = {
  data: loadData(),
  activeListId: null,
  language: "de",
  view: "list",
  portfolioQuery: "",
  editingPortfolioId: null,
  drag: null,
  pointerDrag: null,
  remoteStatus: ""
};

function slug(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "item";
}

function makeId(prefix) {
  return `${prefix}-${Date.now()}-${Math.round(Math.random() * 1000)}`;
}

function categoryForName(name) {
  return CATEGORY_BY_ITEM[name] || "sonstiges";
}

function categoryLabel(categoryId) {
  const category = CATEGORIES.find((candidate) => candidate.id === categoryId) || CATEGORIES[CATEGORIES.length - 1];
  return category?.[state.language] || category?.de || categoryId;
}

function validCategory(categoryId) {
  return CATEGORIES.some((category) => category.id === categoryId) ? categoryId : "sonstiges";
}

function sortOrder(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function nextSortOrder(items) {
  return items.reduce((max, item, index) => Math.max(max, sortOrder(item.sortOrder, index + 1)), 0) + 1;
}

function defaultStorage() {
  return {
    provider: "iCloud",
    fileName: "kaufkiste.json",
    format: "json",
    readUrl: "",
    writeUrl: "",
    token: "",
    lastSyncedAt: "",
    lastSyncStatus: ""
  };
}

function createSeedData() {
  return {
    version: 5,
    locale: "de",
    storage: defaultStorage(),
    portfolio: seedItems.map((name, index) => ({
      id: slug(name),
      names: { de: name, en: name },
      lastQuantity: "",
      category: categoryForName(name),
      sortOrder: index + 1
    })),
    lists: [{
      id: "ausprobieren",
      name: "Was neues zum ausprobieren",
      mode: "plan",
      updatedAt: "2026-08-31T20:15:00.000Z",
      entries: seedItems.map((name, index) => ({
        id: `entry-${index + 1}`,
        itemId: slug(name),
        quantity: "",
        status: "active",
        sortOrder: index + 1
      }))
    }]
  };
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY) || LEGACY_KEYS.map((key) => localStorage.getItem(key)).find(Boolean);
  if (!stored) return normalizeData(createSeedData());
  try {
    return normalizeData(JSON.parse(stored));
  } catch {
    return normalizeData(createSeedData());
  }
}

function normalizeData(data) {
  const normalized = {
    version: 5,
    locale: data.locale || "de",
    storage: normalizeStorage(data.storage),
    portfolio: [],
    lists: []
  };

  normalized.portfolio = (data.portfolio || []).map((item, index) => ({
    id: item.id || slug(item.name || `item-${index + 1}`),
    names: item.names || { de: item.name || item.id || `Artikel ${index + 1}`, en: item.name || item.id || `Item ${index + 1}` },
    lastQuantity: item.lastQuantity || item.defaultUnit || "",
    category: validCategory(item.category || categoryForName(item.name || item.names?.de || item.id)),
    sortOrder: sortOrder(item.sortOrder, item.activationStats?.averagePosition || index + 1)
  }));

  normalized.lists = (data.lists || []).map((list) => ({
    id: list.id || makeId("list"),
    name: list.name || "Einkaufsliste",
    mode: list.mode === "shop" ? "shop" : "plan",
    updatedAt: list.updatedAt || new Date().toISOString(),
    entries: (list.entries || []).map((entry, index) => ({
      id: entry.id || makeId("entry"),
      itemId: entry.itemId,
      quantity: entry.quantity || normalized.portfolio.find((item) => item.id === entry.itemId)?.lastQuantity || "",
      status: entry.status === "done" ? "inactive" : entry.status || "active",
      sortOrder: sortOrder(entry.sortOrder, entry.orderStats?.averagePosition || index + 1)
    }))
  }));

  return normalized;
}

function normalizeStorage(storage = {}) {
  const defaults = defaultStorage();
  return {
    ...defaults,
    ...storage,
    provider: storage.provider || defaults.provider,
    fileName: storage.fileName || defaults.fileName,
    format: storage.format || defaults.format,
    readUrl: storage.readUrl || storage.url || "",
    writeUrl: storage.writeUrl || "",
    token: storage.token || "",
    lastSyncedAt: storage.lastSyncedAt || "",
    lastSyncStatus: storage.lastSyncStatus || ""
  };
}

function t(key) {
  return i18n[state.language]?.[key] || i18n.en[key] || key;
}

function activeList() {
  return state.data.lists.find((list) => list.id === state.activeListId) || state.data.lists[0];
}

function itemName(item) {
  return item?.names?.[state.language] || item?.names?.de || item?.names?.en || item?.id || "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function syncInputValue(selector, value) {
  const input = qs(selector);
  if (document.activeElement !== input) input.value = value || "";
}

function storage() {
  state.data.storage = normalizeStorage(state.data.storage);
  return state.data.storage;
}

function readStorageInputs() {
  const current = storage();
  current.provider = qs("#provider").value;
  current.readUrl = qs("#storageReadUrl").value.trim();
  current.writeUrl = qs("#storageWriteUrl").value.trim();
  current.token = qs("#storageToken").value.trim();
  current.fileName = current.fileName || "kaufkiste.json";
  current.format = "json";
  return current;
}

function setRemoteStatus(messageKey) {
  state.remoteStatus = messageKey ? t(messageKey) : "";
  const node = qs("#remoteStatus");
  if (node) node.textContent = state.remoteStatus || syncStatusText();
}

function syncStatusText() {
  const { lastSyncedAt } = storage();
  if (!lastSyncedAt) return t("remoteNeverSynced");
  const date = new Date(lastSyncedAt).toLocaleString(state.language === "de" ? "de-DE" : "en-US");
  return `${t("remoteLastSync")}: ${date}`;
}

function persist(messageKey) {
  const list = activeList();
  if (list) list.updatedAt = new Date().toISOString();
  state.data.locale = state.language;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  render();
  if (messageKey) showToast(t(messageKey));
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function portfolioById(itemId) {
  return state.data.portfolio.find((item) => item.id === itemId);
}

function listEntries(list) {
  if (!list) return [];
  return list.entries
    .map((entry, index) => ({ ...entry, item: portfolioById(entry.itemId), fallbackOrder: index + 1 }))
    .filter((entry) => entry.item)
    .sort((a, b) => sortOrder(a.sortOrder, a.fallbackOrder) - sortOrder(b.sortOrder, b.fallbackOrder));
}

function visibleEntries(list) {
  const entries = listEntries(list);
  return list?.mode === "shop" ? entries.filter((entry) => entry.status === "active") : entries;
}

function sortedPortfolio() {
  return [...state.data.portfolio].sort((a, b) => {
    const order = sortOrder(a.sortOrder, 9999) - sortOrder(b.sortOrder, 9999);
    if (order !== 0) return order;
    return itemName(a).localeCompare(itemName(b), state.language === "de" ? "de" : "en");
  });
}

function setMode(mode) {
  const list = activeList();
  if (!list) return;
  list.mode = mode;
  state.view = "list";
  persist("savedLocal");
}

function setView(view) {
  state.view = state.view === "settings" && view === "settings" ? "list" : view;
  render();
}

function createList(name) {
  const listName = name.trim() || t("newListPlaceholder");
  const list = { id: makeId("list"), name: listName, mode: "plan", updatedAt: new Date().toISOString(), entries: [] };
  state.data.lists.push(list);
  state.activeListId = list.id;
  qs("#newListName").value = "";
  persist("created");
}

function deleteList(listId) {
  const list = state.data.lists.find((candidate) => candidate.id === listId);
  if (!list) return;
  const message = t("confirmDeleteList").replace("{name}", list.name);
  if (!window.confirm(message)) return;
  state.data.lists = state.data.lists.filter((candidate) => candidate.id !== listId);
  if (state.activeListId === listId) state.activeListId = state.data.lists[0]?.id || null;
  persist("listDeleted");
}

function addOrReactivateItem(itemId) {
  const list = activeList();
  if (!list) {
    showToast(t("noActiveList"));
    return;
  }
  if (list.mode !== "plan") {
    showToast(t("portfolioLocked"));
    return;
  }
  const item = portfolioById(itemId);
  const existing = list.entries.find((entry) => entry.itemId === itemId);

  if (existing?.status === "active") {
    showToast(t("duplicate"));
    return;
  }

  if (existing) {
    existing.status = "active";
    if (!existing.quantity) existing.quantity = item?.lastQuantity || "";
    if (!Number.isFinite(Number(existing.sortOrder))) existing.sortOrder = nextSortOrder(list.entries);
  } else {
    list.entries.push({
      id: makeId("entry"),
      itemId,
      quantity: item?.lastQuantity || "",
      status: "active",
      sortOrder: nextSortOrder(list.entries)
    });
  }

  persist("savedLocal");
}

function reactivateEntry(entryId) {
  const list = activeList();
  if (!list) return;
  const entry = list.entries.find((candidate) => candidate.id === entryId);
  if (!entry) return;
  entry.status = "active";
  if (!Number.isFinite(Number(entry.sortOrder))) entry.sortOrder = nextSortOrder(list.entries);
  persist("savedLocal");
}

function updateQuantity(entryId, quantity) {
  const list = activeList();
  if (!list) return;
  const entry = list.entries.find((candidate) => candidate.id === entryId);
  if (!entry) return;
  entry.quantity = quantity.trim();
  const item = portfolioById(entry.itemId);
  if (item) item.lastQuantity = entry.quantity;
  persist("savedLocal");
}

function markBought(entryId) {
  const list = activeList();
  if (!list) return;
  const entry = list.entries.find((candidate) => candidate.id === entryId);
  if (!entry) return;
  entry.status = "inactive";
  persist("savedLocal");
}

function removeEntry(entryId) {
  const list = activeList();
  if (!list) return;
  list.entries = list.entries.filter((entry) => entry.id !== entryId);
  persist("savedLocal");
}

function resetPortfolioForm() {
  state.editingPortfolioId = null;
  qs("#portfolioName").value = "";
  qs("#portfolioCategory").value = "sonstiges";
  qs("#portfolioUnit").value = "";
  qs("#savePortfolioItem").textContent = t("saveItem");
}

function editPortfolioItem(itemId) {
  const item = portfolioById(itemId);
  const list = activeList();
  if (!item || !list || list.mode !== "plan") return;
  state.editingPortfolioId = itemId;
  qs("#portfolioName").value = itemName(item);
  qs("#portfolioCategory").value = validCategory(item.category);
  qs("#portfolioUnit").value = item.lastQuantity || "";
  qs("#savePortfolioItem").textContent = t("saveItem");
}

function savePortfolioItem() {
  const list = activeList();
  if (!list || list.mode !== "plan") {
    showToast(t("portfolioLocked"));
    return;
  }
  const name = qs("#portfolioName").value.trim();
  const category = validCategory(qs("#portfolioCategory").value);
  const quantity = qs("#portfolioUnit").value.trim();
  if (!name) return;

  if (state.editingPortfolioId) {
    const item = portfolioById(state.editingPortfolioId);
    item.names = { de: name, en: name };
    item.category = category;
    item.lastQuantity = quantity;
  } else {
    const baseId = slug(name);
    let id = baseId;
    let suffix = 2;
    while (portfolioById(id)) {
      id = `${baseId}-${suffix}`;
      suffix += 1;
    }
    state.data.portfolio.push({
      id,
      names: { de: name, en: name },
      category,
      lastQuantity: quantity,
      sortOrder: nextSortOrder(state.data.portfolio)
    });
  }

  resetPortfolioForm();
  persist("itemSaved");
}

function deletePortfolioItem(itemId) {
  const list = activeList();
  if (!list || list.mode !== "plan") {
    showToast(t("portfolioLocked"));
    return;
  }
  state.data.portfolio = state.data.portfolio.filter((item) => item.id !== itemId);
  state.data.lists.forEach((list) => {
    list.entries = list.entries.filter((entry) => entry.itemId !== itemId);
  });
  if (state.editingPortfolioId === itemId) resetPortfolioForm();
  persist("itemDeleted");
}

function moveId(ids, fromId, toId) {
  const next = [...ids];
  const fromIndex = next.indexOf(fromId);
  const toIndex = next.indexOf(toId);
  if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return null;
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

function reorderEntries(fromId, toId) {
  const list = activeList();
  if (!list) return;
  const orderedIds = moveId(visibleEntries(list).map((entry) => entry.id), fromId, toId);
  if (!orderedIds) return;
  const movedIds = new Set(orderedIds);
  let movedIndex = 0;
  const fullOrder = listEntries(list).map((entry) => (
    movedIds.has(entry.id) ? orderedIds[movedIndex++] : entry.id
  ));
  fullOrder.forEach((entryId, index) => {
    const entry = list.entries.find((candidate) => candidate.id === entryId);
    if (!entry) return;
    entry.sortOrder = index + 1;
  });
  persist("savedLocal");
}

function reorderPortfolio(fromId, toId) {
  const orderedIds = moveId(sortedPortfolio().map((item) => item.id), fromId, toId);
  if (!orderedIds) return;
  orderedIds.forEach((itemId, index) => {
    const item = portfolioById(itemId);
    if (!item) return;
    item.sortOrder = index + 1;
  });
  persist("savedLocal");
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  qsa("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  qsa("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
}

function renderCategoryOptions() {
  const select = qs("#portfolioCategory");
  const selected = validCategory(select.value || "sonstiges");
  select.innerHTML = CATEGORIES.map((category) => `
    <option value="${category.id}">${escapeHtml(category[state.language] || category.de)}</option>
  `).join("");
  select.value = selected;
}

function renderLists() {
  const list = activeList();
  qs("#listCount").textContent = state.data.lists.length;
  if (!state.data.lists.length) {
    qs("#lists").innerHTML = `<div class="empty compact-empty">${t("emptyLists")}</div>`;
    return;
  }
  qs("#lists").innerHTML = state.data.lists.map((candidate) => {
    const active = candidate.id === list?.id ? " active" : "";
    const count = candidate.entries.filter((entry) => entry.status === "active").length;
    const updated = new Date(candidate.updatedAt).toLocaleDateString(state.language === "de" ? "de-DE" : "en-US");
    return `
      <div class="list-row">
        <button class="list-button${active}" type="button" data-list-id="${candidate.id}">
          <span><strong>${escapeHtml(candidate.name)}</strong><span>${count} ${t("items")} · ${t("updated")} ${updated}</span></span>
          <span class="badge">${count}</span>
        </button>
        <button class="danger square-action list-delete" type="button" data-delete-list="${candidate.id}" aria-label="${t("deleteList")}" title="${t("deleteList")}">×</button>
      </div>
    `;
  }).join("");
}

function renderItems() {
  const list = activeList();
  if (!list) {
    qs("#itemsHeadline").textContent = t("planHeadline");
    qs("#modeHint").textContent = t("noActiveList");
    qs("#activeCount").textContent = "0";
    qs("#planPortfolioSection").style.display = "none";
    qs("#items").innerHTML = `<div class="empty">${t("noActiveList")}</div>`;
    return;
  }
  const entries = visibleEntries(list);
  qs("#itemsHeadline").textContent = list.mode === "shop" ? t("shopHeadline") : t("planHeadline");
  qs("#modeHint").textContent = list.mode === "shop" ? t("shopHint") : t("planHint");
  qs("#activeCount").textContent = entries.filter((entry) => entry.status === "active").length;
  qs("#planPortfolioSection").style.display = list.mode === "plan" ? "block" : "none";

  if (!entries.length) {
    qs("#items").innerHTML = `<div class="empty">${list.mode === "shop" ? t("emptyShop") : t("emptyPlan")}</div>`;
    return;
  }

  qs("#items").innerHTML = entries.map((entry) => {
    const inactive = entry.status !== "active";
    const quantity = list.mode === "plan"
      ? `<input class="quantity-input" data-quantity="${entry.id}" value="${escapeHtml(entry.quantity)}" aria-label="${escapeHtml(itemName(entry.item))} ${escapeHtml(t("portfolioUnit"))}">`
      : entry.quantity ? `<span>${escapeHtml(entry.quantity)}</span>` : "";
    const action = list.mode === "shop"
      ? `<button class="secondary square-action" type="button" data-bought="${entry.id}" aria-label="${t("bought")}" title="${t("bought")}">✓</button>`
      : inactive
        ? `<button class="secondary square-action" type="button" data-reactivate="${entry.id}" aria-label="${t("reactivate")}" title="${t("reactivate")}">↺</button>`
        : `<button class="ghost square-action" type="button" data-remove="${entry.id}" aria-label="${t("remove")}" title="${t("remove")}">×</button>`;
    return `
      <article class="item-row${inactive ? " inactive" : ""}" draggable="true" data-drag-type="entry" data-entry-id="${entry.id}">
        <span class="drag-handle" aria-hidden="true">${inactive ? "–" : "☰"}</span>
        <div>
          <div class="item-name">${escapeHtml(itemName(entry.item))}</div>
          ${quantity ? `<div class="item-meta">${quantity}</div>` : ""}
        </div>
        <div class="item-actions">${action}</div>
      </article>
    `;
  }).join("");
}

function renderPortfolio() {
  const list = activeList();
  if (!list || list.mode !== "plan") {
    qs("#portfolioCount").textContent = "0";
    qs("#portfolio").innerHTML = "";
    return;
  }
  const query = state.portfolioQuery.trim().toLowerCase();
  const items = sortedPortfolio().filter((item) => `${itemName(item)} ${item.lastQuantity} ${categoryLabel(item.category)}`.toLowerCase().includes(query));
  qs("#portfolioCount").textContent = items.length;
  qs("#portfolio").innerHTML = items.map((item) => {
    const entry = list.entries.find((candidate) => candidate.itemId === item.id);
    const isActive = entry?.status === "active";
    const label = isActive ? t("onList") : entry ? t("reactivate") : t("add");
    const addClass = isActive ? "ghost" : entry ? "secondary" : "primary";
    return `
      <div class="portfolio-item" draggable="true" data-drag-type="portfolio" data-item-id="${item.id}">
        <span>
          <strong>${escapeHtml(itemName(item))}</strong>
          <span class="category-chip">${escapeHtml(categoryLabel(item.category))}</span>
          ${item.lastQuantity ? `<span>${t("portfolioUnit")}: ${escapeHtml(item.lastQuantity)}</span>` : ""}
        </span>
        <div class="portfolio-actions">
          <button class="${addClass} mini" type="button" ${isActive ? "disabled" : `data-add="${item.id}"`}>${label}</button>
          <button class="ghost mini" type="button" data-edit-portfolio="${item.id}">${t("edit")}</button>
          <button class="danger mini" type="button" data-delete-portfolio="${item.id}">${t("delete")}</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderHeader() {
  const list = activeList();
  state.activeListId = list?.id || null;
  qs("#activeListTitle").textContent = list?.name || t("lists");
  qs("#activeListMeta").textContent = list
    ? `${t("mode")}: ${list.mode === "shop" ? t("shop") : t("plan")} · ${list.entries.length} ${t("items")}`
    : t("noActiveList");
  qs("#modeBadge").textContent = list ? (list.mode === "shop" ? t("shop") : t("plan")) : "–";
  qs("#planMode").classList.toggle("active", list?.mode === "plan");
  qs("#shopMode").classList.toggle("active", list?.mode === "shop");
  qs("#planMode").disabled = !list;
  qs("#shopMode").disabled = !list;
  qs("#provider").value = storage().provider;
  syncInputValue("#storageReadUrl", storage().readUrl);
  syncInputValue("#storageWriteUrl", storage().writeUrl);
  syncInputValue("#storageToken", storage().token);
  qs("#remoteStatus").textContent = state.remoteStatus || syncStatusText();
  qs("#language").value = state.language;
}

function renderScreens() {
  qs("#screenList").classList.toggle("active", state.view === "list");
  qs("#screenSettings").classList.toggle("active", state.view === "settings");
  qs("#listToolbar").style.display = state.view === "settings" ? "none" : "grid";
  qs("#settingsToggle").dataset.view = state.view === "settings" ? "list" : "settings";
  qs("#settingsToggle").textContent = state.view === "settings" ? "←" : "⚙";
  qs("#settingsToggle").setAttribute("aria-label", state.view === "settings" ? t("navList") : t("settings"));
  qs("#settingsToggle").setAttribute("title", state.view === "settings" ? t("navList") : t("settings"));
}

function renderStats() {
  const entries = listEntries(activeList());
  qs("#statActive").textContent = entries.filter((entry) => entry.status === "active").length;
  qs("#statInactive").textContent = entries.filter((entry) => entry.status !== "active").length;
  qs("#statKnown").textContent = state.data.portfolio.length;
  qs("#statLists").textContent = state.data.lists.length;
}

function renderJson() {
  qs("#jsonPreview").textContent = JSON.stringify(sharedDataSnapshot(), null, 2);
}

function render() {
  applyTranslations();
  renderCategoryOptions();
  renderHeader();
  renderScreens();
  renderLists();
  renderItems();
  renderPortfolio();
  renderStats();
  renderJson();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(sharedDataSnapshot(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = state.data.storage.fileName || "kaufkiste.json";
  link.click();
  URL.revokeObjectURL(url);
  showToast(t("exported"));
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      applyIncomingData(parsed, storage());
      persist("imported");
    } catch {
      showToast("JSON konnte nicht gelesen werden.");
    }
  };
  reader.readAsText(file);
}

function applyIncomingData(parsed, currentStorage = storage()) {
  if (!Array.isArray(parsed.lists) || !Array.isArray(parsed.portfolio)) throw new Error("Invalid shape");
  state.data = normalizeData(parsed);
  state.data.storage = normalizeStorage({
    ...currentStorage,
    ...state.data.storage,
    readUrl: state.data.storage.readUrl || currentStorage.readUrl,
    writeUrl: state.data.storage.writeUrl || currentStorage.writeUrl,
    token: currentStorage.token || state.data.storage.token || ""
  });
  state.activeListId = state.data.lists[0]?.id;
  state.language = state.data.locale || state.language;
}

function sharedDataSnapshot() {
  const snapshot = clone(state.data);
  if (snapshot.storage) snapshot.storage.token = "";
  return snapshot;
}

function rememberStorageSettings() {
  readStorageInputs();
  persist("storageSaved");
}

function withQuery(url, params) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${new URLSearchParams(params).toString()}`;
}

function withStorageToken(url, token) {
  const trimmed = url.trim();
  if (!token || !/^https?:\/\//i.test(trimmed)) return trimmed;

  try {
    const parsed = new URL(trimmed);
    if (!parsed.searchParams.has("token")) parsed.searchParams.set("token", token);
    return parsed.toString();
  } catch {
    return withQuery(trimmed, { token });
  }
}

function transformedStorageUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) return "";

  const googleFileMatch = trimmed.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (googleFileMatch) return `https://drive.google.com/uc?export=download&id=${googleFileMatch[1]}`;

  const googleOpenMatch = trimmed.match(/[?&]id=([^&]+)/);
  if (trimmed.includes("drive.google.com") && googleOpenMatch) {
    return `https://drive.google.com/uc?export=download&id=${googleOpenMatch[1]}`;
  }

  const googleDocMatch = trimmed.match(/docs\.google\.com\/document\/d\/([^/]+)/);
  if (googleDocMatch) return `https://docs.google.com/document/d/${googleDocMatch[1]}/export?format=txt`;

  if (trimmed.includes("dropbox.com")) {
    try {
      const dropboxUrl = new URL(trimmed);
      dropboxUrl.hostname = "dl.dropboxusercontent.com";
      dropboxUrl.searchParams.delete("dl");
      dropboxUrl.searchParams.delete("raw");
      return dropboxUrl.toString();
    } catch {
      return trimmed.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "?dl=1");
    }
  }

  return trimmed;
}

function candidateReadUrls(url, token) {
  const transformed = transformedStorageUrl(url);
  return [...new Set([url.trim(), transformed].filter(Boolean).map((candidate) => withStorageToken(candidate, token)))];
}

function jsonpLoad(url) {
  return new Promise((resolve, reject) => {
    const callbackName = `kaufkisteJsonp${Date.now()}${Math.round(Math.random() * 1000)}`;
    const script = document.createElement("script");
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("JSONP timeout"));
    }, 12000);

    function cleanup() {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("JSONP failed"));
    };
    script.src = withQuery(url, { callback: callbackName, _: Date.now() });
    document.body.appendChild(script);
  });
}

async function fetchRemoteJson(url, token = "") {
  const scriptUrl = withStorageToken(url, token);
  if (scriptUrl.includes("script.google.com")) return jsonpLoad(scriptUrl);

  let lastError;
  for (const candidate of candidateReadUrls(url, token)) {
    try {
      const response = await fetch(candidate, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return JSON.parse(await response.text());
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("No readable URL");
}

async function loadRemoteJson() {
  const currentStorage = readStorageInputs();
  if (!currentStorage.readUrl) {
    showToast(t("remoteMissing"));
    return;
  }

  try {
    setRemoteStatus("remoteLoading");
    const parsed = await fetchRemoteJson(currentStorage.readUrl, currentStorage.token);
    applyIncomingData(parsed, currentStorage);
    storage().lastSyncedAt = new Date().toISOString();
    storage().lastSyncStatus = "loaded";
    state.remoteStatus = "";
    persist("remoteLoaded");
  } catch (error) {
    console.warn("Remote JSON load failed", error);
    setRemoteStatus("remoteLoadFailed");
    showToast(t("remoteLoadFailed"));
  }
}

function postForm(url, payload, token = "") {
  return new Promise((resolve) => {
    const frameName = `kaufkiste-sync-${Date.now()}`;
    const iframe = document.createElement("iframe");
    const form = document.createElement("form");
    const fields = {
      payload,
      fileName: storage().fileName || "kaufkiste.json",
      source: "kaufkiste"
    };
    if (token) fields.token = token;

    iframe.name = frameName;
    iframe.hidden = true;
    form.hidden = true;
    form.method = "POST";
    form.action = url;
    form.target = frameName;

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.append(iframe, form);
    form.submit();
    window.setTimeout(() => {
      form.remove();
      iframe.remove();
      resolve();
    }, 1800);
  });
}

async function saveRemoteJson() {
  const currentStorage = readStorageInputs();
  const targetUrl = currentStorage.writeUrl || (currentStorage.readUrl.includes("script.google.com") ? currentStorage.readUrl : "");
  if (!targetUrl) {
    showToast(t("remoteSaveMissing"));
    return;
  }

  try {
    setRemoteStatus("remoteSaving");
    const payload = JSON.stringify(sharedDataSnapshot(), null, 2);
    const tokenizedTargetUrl = withStorageToken(targetUrl, currentStorage.token);
    if (tokenizedTargetUrl.includes("script.google.com")) {
      await postForm(tokenizedTargetUrl, payload, currentStorage.token);
      storage().lastSyncStatus = "sent";
      storage().lastSyncedAt = new Date().toISOString();
      state.remoteStatus = "";
      persist("remoteSent");
      return;
    }

    const response = await fetch(tokenizedTargetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    storage().lastSyncStatus = "saved";
    storage().lastSyncedAt = new Date().toISOString();
    state.remoteStatus = "";
    persist("remoteSaved");
  } catch (error) {
    console.warn("Remote JSON save failed", error);
    setRemoteStatus("remoteSaveFailed");
    showToast(t("remoteSaveFailed"));
  }
}

function rowFromDragTarget(target) {
  if (target.closest("button, input, select, textarea")) return null;
  return target.closest("[data-drag-type]");
}

function clearDragVisuals() {
  qsa(".dragging, .drag-over").forEach((node) => node.classList.remove("dragging", "drag-over"));
}

function dropOn(type, fromId, target) {
  const row = target?.closest?.(`[data-drag-type="${type}"]`);
  if (!row) return;
  const toId = type === "entry" ? row.dataset.entryId : row.dataset.itemId;
  if (!toId || toId === fromId) return;
  if (type === "entry") reorderEntries(fromId, toId);
  if (type === "portfolio") reorderPortfolio(fromId, toId);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.listId) {
    state.activeListId = target.dataset.listId;
    state.view = "list";
    render();
  }
  if (target.dataset.deleteList) deleteList(target.dataset.deleteList);
  if (target.dataset.view) setView(target.dataset.view);
  if (target.dataset.mode) setMode(target.dataset.mode);
  if (target.dataset.add) addOrReactivateItem(target.dataset.add);
  if (target.dataset.reactivate) reactivateEntry(target.dataset.reactivate);
  if (target.dataset.remove) removeEntry(target.dataset.remove);
  if (target.dataset.bought) markBought(target.dataset.bought);
  if (target.dataset.editPortfolio) editPortfolioItem(target.dataset.editPortfolio);
  if (target.dataset.deletePortfolio) deletePortfolioItem(target.dataset.deletePortfolio);
});

document.addEventListener("change", (event) => {
  if (event.target.dataset.quantity) updateQuantity(event.target.dataset.quantity, event.target.value);
});

document.addEventListener("dragstart", (event) => {
  const row = rowFromDragTarget(event.target);
  if (!row) {
    event.preventDefault();
    return;
  }
  state.drag = { type: row.dataset.dragType, id: row.dataset.entryId || row.dataset.itemId };
  row.classList.add("dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", state.drag.id);
});

document.addEventListener("dragover", (event) => {
  if (!state.drag) return;
  const row = event.target.closest(`[data-drag-type="${state.drag.type}"]`);
  if (!row) return;
  event.preventDefault();
  qsa(".drag-over").forEach((node) => node.classList.remove("drag-over"));
  row.classList.add("drag-over");
});

document.addEventListener("drop", (event) => {
  if (!state.drag) return;
  event.preventDefault();
  dropOn(state.drag.type, state.drag.id, event.target);
  state.drag = null;
  clearDragVisuals();
});

document.addEventListener("dragend", () => {
  state.drag = null;
  clearDragVisuals();
});

document.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse") return;
  const row = rowFromDragTarget(event.target);
  if (!row) return;
  state.pointerDrag = {
    type: row.dataset.dragType,
    id: row.dataset.entryId || row.dataset.itemId,
    startY: event.clientY,
    active: false,
    row
  };
});

document.addEventListener("pointermove", (event) => {
  if (!state.pointerDrag) return;
  const distance = Math.abs(event.clientY - state.pointerDrag.startY);
  if (distance < 12 && !state.pointerDrag.active) return;
  state.pointerDrag.active = true;
  state.pointerDrag.row.classList.add("dragging");
  const row = document.elementFromPoint(event.clientX, event.clientY)?.closest?.(`[data-drag-type="${state.pointerDrag.type}"]`);
  qsa(".drag-over").forEach((node) => node.classList.remove("drag-over"));
  if (row) row.classList.add("drag-over");
  event.preventDefault();
}, { passive: false });

document.addEventListener("pointerup", (event) => {
  if (!state.pointerDrag) return;
  const info = state.pointerDrag;
  state.pointerDrag = null;
  if (info.active) {
    dropOn(info.type, info.id, document.elementFromPoint(event.clientX, event.clientY));
  }
  clearDragVisuals();
});

qs("#newListForm").addEventListener("submit", (event) => {
  event.preventDefault();
  createList(qs("#newListName").value);
});

qs("#portfolioForm").addEventListener("submit", (event) => {
  event.preventDefault();
  savePortfolioItem();
});

qs("#cancelPortfolioEdit").addEventListener("click", resetPortfolioForm);

qs("#language").addEventListener("change", (event) => {
  state.language = event.target.value;
  persist("savedLocal");
});

qs("#provider").addEventListener("change", (event) => {
  storage().provider = event.target.value;
  persist("storageSaved");
});

qs("#portfolioSearch").addEventListener("input", (event) => {
  state.portfolioQuery = event.target.value;
  renderPortfolio();
});

qs("#exportJson").addEventListener("click", exportJson);
qs("#importJsonBtn").addEventListener("click", () => qs("#importJson").click());
qs("#saveStorageSettings").addEventListener("click", rememberStorageSettings);
qs("#loadRemoteJson").addEventListener("click", loadRemoteJson);
qs("#saveRemoteJson").addEventListener("click", saveRemoteJson);
qs("#importJson").addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) importJson(file);
  event.target.value = "";
});

state.activeListId = state.data.lists[0]?.id;
state.language = state.data.locale || "de";
localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
render();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service Worker registration failed", error);
    });
  });
}
