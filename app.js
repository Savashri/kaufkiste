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
    storageHint: "Die JSON-Datei liegt in einem synchronisierten Ordner. Alle Nutzer importieren oder exportieren dieselbe Datei.",
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
    portfolioUnit: "Anzahl",
    saveItem: "Speichern",
    cancel: "Abbrechen",
    edit: "Bearbeiten",
    delete: "Löschen",
    planHeadline: "Aktive und pausierte Artikel",
    shopHeadline: "Einkaufsroute",
    planHint: "Planen ist der Standardmodus. Hier fügst du Portfolio-Artikel hinzu, reaktivierst pausierte Artikel und pflegst Mengen.",
    shopHint: "Im Einkaufsmodus ist nach gelernter Reihenfolge sortiert. Gekaufte Artikel werden deaktiviert und ausgeblendet.",
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
    storageHint: "The JSON file lives in a synced folder. Everyone imports or exports the same file.",
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
    portfolioUnit: "Quantity",
    saveItem: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    planHeadline: "Active and paused items",
    shopHeadline: "Shopping route",
    planHint: "Planning is the default mode. Add portfolio items, reactivate paused items, and edit quantities.",
    shopHint: "Shopping mode sorts by learned order. Bought items are disabled and hidden.",
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
  pointerDrag: null
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

function createSeedData() {
  return {
    version: 2,
    locale: "de",
    storage: { provider: "iCloud", fileName: "kaufkiste.json", format: "json" },
    portfolio: seedItems.map((name, index) => ({
      id: slug(name),
      names: { de: name, en: name },
      lastQuantity: "",
      activationStats: { averagePosition: index + 1, timesActivated: 1 }
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
        orderStats: { averagePosition: index + 1, timesBought: 1 }
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
    version: 2,
    locale: data.locale || "de",
    storage: data.storage || { provider: "iCloud", fileName: "kaufkiste.json", format: "json" },
    portfolio: [],
    lists: []
  };

  normalized.portfolio = (data.portfolio || []).map((item, index) => ({
    id: item.id || slug(item.name || `item-${index + 1}`),
    names: item.names || { de: item.name || item.id || `Artikel ${index + 1}`, en: item.name || item.id || `Item ${index + 1}` },
    lastQuantity: item.lastQuantity || item.defaultUnit || "",
    activationStats: item.activationStats || { averagePosition: index + 1, timesActivated: 1 }
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
      orderStats: entry.orderStats || { averagePosition: index + 1, timesBought: 1 }
    }))
  }));

  if (!normalized.lists.length) normalized.lists = createSeedData().lists;
  return normalized;
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
  return list.entries
    .map((entry) => ({ ...entry, item: portfolioById(entry.itemId) }))
    .filter((entry) => entry.item)
    .sort((a, b) => (a.orderStats?.averagePosition || 99) - (b.orderStats?.averagePosition || 99));
}

function visibleEntries(list) {
  const entries = listEntries(list);
  return list.mode === "shop" ? entries.filter((entry) => entry.status === "active") : entries;
}

function sortedPortfolio() {
  return [...state.data.portfolio].sort((a, b) => {
    const aPosition = a.activationStats?.averagePosition || 99;
    const bPosition = b.activationStats?.averagePosition || 99;
    if (aPosition !== bPosition) return aPosition - bPosition;
    return itemName(a).localeCompare(itemName(b), state.language === "de" ? "de" : "en");
  });
}

function setMode(mode) {
  activeList().mode = mode;
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

function updateActivationStats(itemId) {
  const ordered = sortedPortfolio();
  const position = Math.max(1, ordered.findIndex((item) => item.id === itemId) + 1);
  const item = portfolioById(itemId);
  if (!item) return;
  const stats = item.activationStats || { averagePosition: position, timesActivated: 0 };
  const timesActivated = stats.timesActivated + 1;
  item.activationStats = {
    averagePosition: Number((((stats.averagePosition * stats.timesActivated) + position) / timesActivated).toFixed(2)),
    timesActivated
  };
}

function addOrReactivateItem(itemId) {
  if (activeList().mode !== "plan") {
    showToast(t("portfolioLocked"));
    return;
  }
  const list = activeList();
  const item = portfolioById(itemId);
  const existing = list.entries.find((entry) => entry.itemId === itemId);

  if (existing?.status === "active") {
    showToast(t("duplicate"));
    return;
  }

  if (existing) {
    existing.status = "active";
    if (!existing.quantity) existing.quantity = item?.lastQuantity || "";
  } else {
    list.entries.push({
      id: makeId("entry"),
      itemId,
      quantity: item?.lastQuantity || "",
      status: "active",
      orderStats: { averagePosition: list.entries.length + 1, timesBought: 1 }
    });
  }

  updateActivationStats(itemId);
  persist("savedLocal");
}

function reactivateEntry(entryId) {
  const entry = activeList().entries.find((candidate) => candidate.id === entryId);
  if (!entry) return;
  entry.status = "active";
  updateActivationStats(entry.itemId);
  persist("savedLocal");
}

function updateQuantity(entryId, quantity) {
  const entry = activeList().entries.find((candidate) => candidate.id === entryId);
  if (!entry) return;
  entry.quantity = quantity.trim();
  const item = portfolioById(entry.itemId);
  if (item) item.lastQuantity = entry.quantity;
  persist("savedLocal");
}

function markBought(entryId) {
  const list = activeList();
  const entry = list.entries.find((candidate) => candidate.id === entryId);
  if (!entry) return;
  const currentOrder = visibleEntries(list);
  const position = Math.max(1, currentOrder.findIndex((candidate) => candidate.id === entryId) + 1);
  const stats = entry.orderStats || { averagePosition: position, timesBought: 0 };
  const timesBought = stats.timesBought + 1;
  entry.orderStats = {
    averagePosition: Number((((stats.averagePosition * stats.timesBought) + position) / timesBought).toFixed(2)),
    timesBought
  };
  entry.status = "inactive";
  persist("savedLocal");
}

function removeEntry(entryId) {
  const list = activeList();
  list.entries = list.entries.filter((entry) => entry.id !== entryId);
  persist("savedLocal");
}

function resetPortfolioForm() {
  state.editingPortfolioId = null;
  qs("#portfolioName").value = "";
  qs("#portfolioUnit").value = "";
  qs("#savePortfolioItem").textContent = t("saveItem");
}

function editPortfolioItem(itemId) {
  const item = portfolioById(itemId);
  if (!item || activeList().mode !== "plan") return;
  state.editingPortfolioId = itemId;
  qs("#portfolioName").value = itemName(item);
  qs("#portfolioUnit").value = item.lastQuantity || "";
  qs("#savePortfolioItem").textContent = t("saveItem");
}

function savePortfolioItem() {
  if (activeList().mode !== "plan") {
    showToast(t("portfolioLocked"));
    return;
  }
  const name = qs("#portfolioName").value.trim();
  const quantity = qs("#portfolioUnit").value.trim();
  if (!name) return;

  if (state.editingPortfolioId) {
    const item = portfolioById(state.editingPortfolioId);
    item.names = { de: name, en: name };
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
      lastQuantity: quantity,
      activationStats: { averagePosition: state.data.portfolio.length + 1, timesActivated: 1 }
    });
  }

  resetPortfolioForm();
  persist("itemSaved");
}

function deletePortfolioItem(itemId) {
  if (activeList().mode !== "plan") {
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
  const orderedIds = moveId(visibleEntries(list).map((entry) => entry.id), fromId, toId);
  if (!orderedIds) return;
  orderedIds.forEach((entryId, index) => {
    const entry = list.entries.find((candidate) => candidate.id === entryId);
    if (!entry) return;
    entry.orderStats = {
      averagePosition: index + 1,
      timesBought: Math.max(entry.orderStats?.timesBought || 0, 1)
    };
  });
  persist("savedLocal");
}

function reorderPortfolio(fromId, toId) {
  const orderedIds = moveId(sortedPortfolio().map((item) => item.id), fromId, toId);
  if (!orderedIds) return;
  orderedIds.forEach((itemId, index) => {
    const item = portfolioById(itemId);
    if (!item) return;
    item.activationStats = {
      averagePosition: index + 1,
      timesActivated: Math.max(item.activationStats?.timesActivated || 0, 1)
    };
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

function renderLists() {
  const list = activeList();
  qs("#listCount").textContent = state.data.lists.length;
  qs("#lists").innerHTML = state.data.lists.map((candidate) => {
    const active = candidate.id === list.id ? " active" : "";
    const count = candidate.entries.filter((entry) => entry.status === "active").length;
    const updated = new Date(candidate.updatedAt).toLocaleDateString(state.language === "de" ? "de-DE" : "en-US");
    return `
      <button class="list-button${active}" type="button" data-list-id="${candidate.id}">
        <span><strong>${escapeHtml(candidate.name)}</strong><span>${count} ${t("items")} · ${t("updated")} ${updated}</span></span>
        <span class="badge">${count}</span>
      </button>
    `;
  }).join("");
}

function renderItems() {
  const list = activeList();
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
  const known = new Set(list.entries.map((entry) => entry.itemId));
  const query = state.portfolioQuery.trim().toLowerCase();
  const items = sortedPortfolio().filter((item) => `${itemName(item)} ${item.lastQuantity}`.toLowerCase().includes(query));
  qs("#portfolioCount").textContent = items.length;
  qs("#portfolio").innerHTML = items.map((item) => {
    const entry = list.entries.find((candidate) => candidate.itemId === item.id);
    const label = entry && entry.status !== "active" ? t("reactivate") : t("add");
    return `
      <div class="portfolio-item" draggable="true" data-drag-type="portfolio" data-item-id="${item.id}">
        <span>
          <strong>${escapeHtml(itemName(item))}</strong>
          ${item.lastQuantity ? `<span>${t("portfolioUnit")}: ${escapeHtml(item.lastQuantity)}</span>` : ""}
        </span>
        <div class="portfolio-actions">
          <button class="${known.has(item.id) ? "secondary" : "primary"} mini" type="button" data-add="${item.id}">${label}</button>
          <button class="ghost mini" type="button" data-edit-portfolio="${item.id}">${t("edit")}</button>
          <button class="danger mini" type="button" data-delete-portfolio="${item.id}">${t("delete")}</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderHeader() {
  const list = activeList();
  state.activeListId = list.id;
  qs("#activeListTitle").textContent = list.name;
  qs("#activeListMeta").textContent = `${t("mode")}: ${list.mode === "shop" ? t("shop") : t("plan")} · ${list.entries.length} ${t("items")}`;
  qs("#modeBadge").textContent = list.mode === "shop" ? t("shop") : t("plan");
  qs("#planMode").classList.toggle("active", list.mode === "plan");
  qs("#shopMode").classList.toggle("active", list.mode === "shop");
  qs("#provider").value = state.data.storage.provider;
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
  qs("#jsonPreview").textContent = JSON.stringify(state.data, null, 2);
}

function render() {
  applyTranslations();
  renderHeader();
  renderScreens();
  renderLists();
  renderItems();
  renderPortfolio();
  renderStats();
  renderJson();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: "application/json" });
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
      if (!Array.isArray(parsed.lists) || !Array.isArray(parsed.portfolio)) throw new Error("Invalid shape");
      state.data = normalizeData(parsed);
      state.activeListId = state.data.lists[0]?.id;
      state.language = state.data.locale || state.language;
      persist("imported");
    } catch {
      showToast("JSON konnte nicht gelesen werden.");
    }
  };
  reader.readAsText(file);
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
  state.data.storage.provider = event.target.value;
  persist("savedLocal");
});

qs("#portfolioSearch").addEventListener("input", (event) => {
  state.portfolioQuery = event.target.value;
  renderPortfolio();
});

qs("#exportJson").addEventListener("click", exportJson);
qs("#importJsonBtn").addEventListener("click", () => qs("#importJson").click());
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
