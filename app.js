const categories = ["Tout", "Fruits & légumes", "Féculents", "Protéines", "Produits laitiers", "Autres", "Mes aliments"];

const defaultFoods = [
  { id: "pomme", name: "Pomme", category: "Fruits & légumes", calories: 52, emoji: "🍎" },
  { id: "banane", name: "Banane", category: "Fruits & légumes", calories: 89, emoji: "🍌" },
  { id: "avocat", name: "Avocat", category: "Fruits & légumes", calories: 160, emoji: "🥑" },
  { id: "tomate", name: "Tomate", category: "Fruits & légumes", calories: 18, emoji: "🍅" },
  { id: "carotte", name: "Carotte", category: "Fruits & légumes", calories: 41, emoji: "🥕" },
  { id: "brocoli", name: "Brocoli", category: "Fruits & légumes", calories: 34, emoji: "🥦" },
  { id: "salade", name: "Salade verte", category: "Fruits & légumes", calories: 15, emoji: "🥬" },
  { id: "pdt", name: "Pomme de terre cuite", category: "Féculents", calories: 87, emoji: "🥔" },
  { id: "riz", name: "Riz blanc cuit", category: "Féculents", calories: 130, emoji: "🍚" },
  { id: "pates", name: "Pâtes cuites", category: "Féculents", calories: 157, emoji: "🍝" },
  { id: "pain", name: "Pain complet", category: "Féculents", calories: 247, emoji: "🍞" },
  { id: "quinoa", name: "Quinoa cuit", category: "Féculents", calories: 120, emoji: "🥣" },
  { id: "poulet", name: "Blanc de poulet cuit", category: "Protéines", calories: 165, emoji: "🍗" },
  { id: "saumon", name: "Saumon cuit", category: "Protéines", calories: 206, emoji: "🐟" },
  { id: "oeuf", name: "Œuf entier", category: "Protéines", calories: 143, emoji: "🥚" },
  { id: "tofu", name: "Tofu nature", category: "Protéines", calories: 144, emoji: "🧊" },
  { id: "lentilles", name: "Lentilles cuites", category: "Protéines", calories: 116, emoji: "🫘" },
  { id: "steak", name: "Bœuf haché cuit", category: "Protéines", calories: 250, emoji: "🥩" },
  { id: "yaourt", name: "Yaourt nature", category: "Produits laitiers", calories: 61, emoji: "🥛" },
  { id: "fromage", name: "Emmental", category: "Produits laitiers", calories: 380, emoji: "🧀" },
  { id: "fromage-blanc", name: "Fromage blanc 3 %", category: "Produits laitiers", calories: 75, emoji: "🥣" },
  { id: "huile", name: "Huile d’olive", category: "Autres", calories: 884, emoji: "🫒" },
  { id: "beurre", name: "Beurre", category: "Autres", calories: 717, emoji: "🧈" },
  { id: "amandes", name: "Amandes", category: "Autres", calories: 579, emoji: "🥜" },
  { id: "chocolat", name: "Chocolat noir", category: "Autres", calories: 546, emoji: "🍫" }
];

const keys = {
  foods: "atable-custom-foods",
  meal: "atable-current-meal",
  history: "atable-meal-history",
  profile: "atable-profile",
  completedDays: "atable-completed-days",
  weighIns: "atable-weigh-ins",
  steps: "atable-daily-steps",
  stepsGoal: "atable-steps-goal",
  workouts: "atable-daily-workouts",
  favoriteFoods: "atable-favorite-foods",
  recentFoods: "atable-recent-foods",
  favoriteMeals: "atable-favorite-meals",
  reminders: "atable-reminder-settings",
  reminderSent: "atable-reminder-sent"
};

const today = localDateKey(new Date());
const elements = {
  categories: document.querySelector("#category-list"),
  search: document.querySelector("#food-search"),
  foodList: document.querySelector("#food-list"),
  mealName: document.querySelector("#meal-name"),
  mealDay: document.querySelector("#meal-day"),
  mealDate: document.querySelector("#meal-date"),
  mealItems: document.querySelector("#meal-items"),
  emptyState: document.querySelector("#empty-state"),
  total: document.querySelector("#total-calories"),
  totalCaption: document.querySelector("#total-caption"),
  loggedDayTotal: document.querySelector("#logged-day-total"),
  saveButton: document.querySelector("#save-meal-button"),
  clearButton: document.querySelector("#clear-meal-button"),
  completeDayButton: document.querySelector("#complete-day-button"),
  history: document.querySelector("#history-list"),
  historyEmpty: document.querySelector("#history-empty"),
  historyCount: document.querySelector("#history-count"),
  profileBanner: document.querySelector("#profile-banner"),
  profileStatus: document.querySelector("#profile-status"),
  profileDetail: document.querySelector("#profile-detail"),
  profileDialog: document.querySelector("#profile-dialog"),
  profileForm: document.querySelector("#profile-form"),
  profileError: document.querySelector("#profile-error"),
  reportMonth: document.querySelector("#report-month"),
  stepsMonthTotal: document.querySelector("#steps-month-total"),
  stepsDailyAverage: document.querySelector("#steps-daily-average"),
  stepsGoalDays: document.querySelector("#steps-goal-days"),
  stepsChart: document.querySelector("#steps-chart"),
  stepsForm: document.querySelector("#steps-form"),
  stepsDate: document.querySelector("#steps-date"),
  stepsCount: document.querySelector("#steps-count"),
  stepsGoal: document.querySelector("#steps-goal"),
  reportPlaceholder: document.querySelector("#report-placeholder"),
  monthlyReport: document.querySelector("#monthly-report"),
  averageIntake: document.querySelector("#average-intake"),
  trackedDays: document.querySelector("#tracked-days"),
  dailyTarget: document.querySelector("#daily-target"),
  monthlyChange: document.querySelector("#monthly-change"),
  monthlyChangeNote: document.querySelector("#monthly-change-note"),
  calorieChart: document.querySelector("#calorie-chart"),
  weightChart: document.querySelector("#weight-chart"),
  weighInForm: document.querySelector("#weigh-in-form"),
  weighInDate: document.querySelector("#weigh-in-date"),
  weighInWeight: document.querySelector("#weigh-in-weight"),
  workoutForm: document.querySelector("#workout-form"),
  workoutDate: document.querySelector("#workout-date"),
  workoutFields: document.querySelector("#workout-fields"),
  workoutType: document.querySelector("#workout-type"),
  workoutDuration: document.querySelector("#workout-duration"),
  workoutIntensity: document.querySelector("#workout-intensity"),
  workoutCalories: document.querySelector("#workout-calories"),
  workoutEstimate: document.querySelector("#workout-estimate"),
  dialog: document.querySelector("#custom-food-dialog"),
  customForm: document.querySelector("#custom-food-form"),
  customName: document.querySelector("#custom-food-name"),
  customCalories: document.querySelector("#custom-food-calories"),
  formError: document.querySelector("#form-error"),
  toast: document.querySelector("#toast")
};
Object.assign(elements, {
  foodShortcuts: document.querySelector("#food-shortcuts"),
  saveFavoriteMeal: document.querySelector("#save-favorite-meal"),
  favoriteMealList: document.querySelector("#favorite-meal-list"),
  todayDate: document.querySelector("#today-date"),
  todayCalories: document.querySelector("#today-calories"),
  todayTarget: document.querySelector("#today-target"),
  todayMeals: document.querySelector("#today-meals"),
  todayMealsDetail: document.querySelector("#today-meals-detail"),
  todayWorkout: document.querySelector("#today-workout"),
  todayWorkoutDetail: document.querySelector("#today-workout-detail"),
  todaySteps: document.querySelector("#today-steps"),
  todayStepsDetail: document.querySelector("#today-steps-detail"),
  reportWeek: document.querySelector("#report-week"),
  weeklyRange: document.querySelector("#weekly-range"),
  weeklyCalories: document.querySelector("#weekly-calories"),
  weeklyTrackedDays: document.querySelector("#weekly-tracked-days"),
  weeklyWorkouts: document.querySelector("#weekly-workouts"),
  weeklySteps: document.querySelector("#weekly-steps"),
  weeklyStepsDays: document.querySelector("#weekly-steps-days"),
  weeklyWeight: document.querySelector("#weekly-weight"),
  weeklyWeightDetail: document.querySelector("#weekly-weight-detail"),
  weightAverage: document.querySelector("#weight-average"),
  exportData: document.querySelector("#export-data"),
  importDataFile: document.querySelector("#import-data-file"),
  reminderForm: document.querySelector("#reminder-form"),
  mealReminderEnabled: document.querySelector("#meal-reminder-enabled"),
  mealReminderTime: document.querySelector("#meal-reminder-time"),
  stepsReminderEnabled: document.querySelector("#steps-reminder-enabled"),
  stepsReminderTime: document.querySelector("#steps-reminder-time"),
  reminderStatus: document.querySelector("#reminder-status")
});

let activeCategory = "Tout";
let customFoods = readStorage(keys.foods, []);
let meal = readStorage(keys.meal, { name: "", date: today, items: [] });
let history = readStorage(keys.history, []);
let profile = readStorage(keys.profile, null);
let completedDays = readStorage(keys.completedDays, []);
let weighIns = readStorage(keys.weighIns, {});
let steps = readStorage(keys.steps, {});
let stepsGoal = readStorage(keys.stepsGoal, 8000);
let workouts = readStorage(keys.workouts, {});
let favoriteFoods = readStorage(keys.favoriteFoods, []);
let recentFoods = readStorage(keys.recentFoods, []);
let favoriteMeals = readStorage(keys.favoriteMeals, []);
let reminders = readStorage(keys.reminders, {
  meals: { enabled: false, time: "20:00" },
  steps: { enabled: false, time: "21:00" }
});
let reminderSent = readStorage(keys.reminderSent, {});
let toastTimer;
let installPrompt;

const tabList = document.querySelector('[role="tablist"]');
const tabButtons = [...tabList.querySelectorAll('[role="tab"]')];

function selectTab(button, moveFocus = false) {
  tabButtons.forEach(tab => {
    const isSelected = tab === button;
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !isSelected;
  });
  if (moveFocus) button.focus();
  if (button.dataset.tab === "tab-report") renderReport();
  if (button.dataset.tab === "tab-activity") renderStepsReport();
  if (button.dataset.tab === "tab-settings") renderReminderSettings();
}

tabList.addEventListener("click", event => {
  const button = event.target.closest('[role="tab"]');
  if (button) selectTab(button);
});

tabList.addEventListener("keydown", event => {
  const currentIndex = tabButtons.indexOf(document.activeElement);
  if (currentIndex < 0) return;

  let nextIndex;
  if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabButtons.length;
  if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = tabButtons.length - 1;
  if (nextIndex === undefined) return;

  event.preventDefault();
  selectTab(tabButtons[nextIndex], true);
});

if (!Array.isArray(customFoods)) customFoods = [];
if (!Array.isArray(favoriteFoods)) favoriteFoods = [];
if (!Array.isArray(recentFoods)) recentFoods = [];
if (!Array.isArray(favoriteMeals)) favoriteMeals = [];
if (!Array.isArray(history)) history = [];
if (!Array.isArray(completedDays)) completedDays = [];
if (!weighIns || typeof weighIns !== "object" || Array.isArray(weighIns)) weighIns = {};
if (!steps || typeof steps !== "object" || Array.isArray(steps)) steps = {};
steps = Object.fromEntries(Object.entries(steps).filter(([day, count]) =>
  /^\d{4}-\d{2}-\d{2}$/.test(day) && Number.isInteger(count) && count >= 0 && count <= 200000
));
if (!Number.isInteger(stepsGoal) || stepsGoal < 1000 || stepsGoal > 100000) stepsGoal = 8000;
if (!workouts || typeof workouts !== "object" || Array.isArray(workouts)) workouts = {};
workouts = Object.fromEntries(Object.entries(workouts).filter(([day, workout]) =>
  /^\d{4}-\d{2}-\d{2}$/.test(day) && workout && ["push", "pull", "abdo-jambe"].includes(workout.type) &&
  [3.5, 6].includes(workout.met) && Number.isInteger(workout.duration) && workout.duration >= 10 && workout.duration <= 240
));
favoriteFoods = [...new Set(favoriteFoods.filter(id => typeof id === "string" && allFoods().some(food => food.id === id)))];
recentFoods = [...new Set(recentFoods.filter(id => typeof id === "string" && allFoods().some(food => food.id === id)))].slice(0, 8);
favoriteMeals = favoriteMeals.filter(template => template && typeof template.id === "string" &&
  typeof template.name === "string" && Array.isArray(template.items) && template.items.length > 0 &&
  template.items.every(isValidMealItem)).slice(0, 20);
if (!reminders || typeof reminders !== "object") reminders = {};
reminders = {
  meals: { enabled: Boolean(reminders.meals?.enabled), time: isValidTime(reminders.meals?.time) ? reminders.meals.time : "20:00" },
  steps: { enabled: Boolean(reminders.steps?.enabled), time: isValidTime(reminders.steps?.time) ? reminders.steps.time : "21:00" }
};
if (!reminderSent || typeof reminderSent !== "object" || Array.isArray(reminderSent)) reminderSent = {};
if (!meal || !Array.isArray(meal.items)) meal = { name: "", date: today, items: [] };
if (!meal.date) meal.date = today;
if (!meal.id) meal.id = null;

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`Impossible de lire les données locales (${key}).`, error);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Impossible d’enregistrer les données locales (${key}).`, error);
    showToast("Enregistrement impossible : vérifiez l’espace disponible sur l’appareil.");
    return false;
  }
}

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(key) {
  return new Date(`${key}T12:00:00`);
}

function entryDay(entry) {
  if (entry.day && /^\d{4}-\d{2}-\d{2}$/.test(entry.day)) return entry.day;
  const date = new Date(entry.date);
  return Number.isNaN(date.getTime()) ? today : localDateKey(date);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function isValidTime(value) {
  return typeof value === "string" && /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

function isValidMealItem(item) {
  return item && typeof item.id === "string" && typeof item.name === "string" &&
    Number.isFinite(item.calories) && item.calories >= 0 && item.calories <= 1000 &&
    Number.isFinite(item.grams) && item.grams > 0 && item.grams <= 10000;
}

function allFoods() {
  return [...defaultFoods, ...customFoods];
}

function renderFoodShortcuts() {
  const foods = allFoods();
  const favorites = favoriteFoods.map(id => foods.find(food => food.id === id)).filter(Boolean);
  const recent = recentFoods.filter(id => !favoriteFoods.includes(id))
    .map(id => foods.find(food => food.id === id)).filter(Boolean);
  const shortcuts = [
    ...favorites.map(food => ({ food, label: "Favori" })),
    ...recent.map(food => ({ food, label: "Récent" }))
  ];
  elements.foodShortcuts.innerHTML = shortcuts.length
    ? shortcuts.map(({ food, label }) => `<button class="food-shortcut" type="button" data-quick-food="${escapeHtml(food.id)}"><span>${escapeHtml(food.emoji || "🍽️")} ${escapeHtml(food.name)}</span><small>${label} · 100 g</small></button>`).join("")
    : '<p class="shortcuts-empty">Vos aliments favoris et récemment utilisés apparaîtront ici.</p>';
}

function renderCategories() {
  elements.categories.innerHTML = categories.map(category =>
    `<button type="button" class="category-chip${category === activeCategory ? " active" : ""}" aria-pressed="${category === activeCategory}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`
  ).join("");
}

function renderFoods() {
  const query = elements.search.value.trim().toLocaleLowerCase("fr");
  const matches = allFoods().filter(food =>
    (activeCategory === "Tout" || food.category === activeCategory) &&
    food.name.toLocaleLowerCase("fr").includes(query)
  );

  if (!matches.length) {
    elements.foodList.innerHTML = '<p class="no-results">Aucun aliment trouvé. Essayez un autre mot ou ajoutez votre aliment.</p>';
    return;
  }

  elements.foodList.innerHTML = matches.map(food => `
    <div class="food-row" data-food-id="${escapeHtml(food.id)}">
      <button type="button" class="food-add" data-add-food="${escapeHtml(food.id)}" aria-label="Ajouter ${escapeHtml(food.name)}, 100 grammes">
        <span class="food-emoji" aria-hidden="true">${escapeHtml(food.emoji || "🍽️")}</span>
        <span class="food-info"><span class="food-name">${escapeHtml(food.name)}</span><span class="food-category">${escapeHtml(food.category)}</span></span>
        <span class="food-kcal"><strong>${food.calories}</strong> kcal / 100 g</span>
      </button>
      <div class="food-quick-actions" aria-label="Ajouter une quantité de ${escapeHtml(food.name)}">
        <button type="button" data-amount-food="${escapeHtml(food.id)}" data-grams="50">50 g</button>
        <button type="button" data-amount-food="${escapeHtml(food.id)}" data-grams="100">100 g</button>
        <button type="button" data-amount-food="${escapeHtml(food.id)}" data-grams="150">150 g</button>
      </div>
      <button type="button" class="food-favorite${favoriteFoods.includes(food.id) ? " active" : ""}" data-toggle-food-favorite="${escapeHtml(food.id)}" aria-label="${favoriteFoods.includes(food.id) ? "Retirer des favoris" : "Ajouter aux favoris"} : ${escapeHtml(food.name)}" aria-pressed="${favoriteFoods.includes(food.id)}">${favoriteFoods.includes(food.id) ? "★" : "☆"}</button>
    </div>`).join("");
}

function caloriesForItems(items) {
  return items.reduce((sum, item) => sum + item.calories * item.grams / 100, 0);
}

function caloriesByDay() {
  const totals = new Map();
  for (const entry of history) {
    const day = entryDay(entry);
    const calories = Number.isFinite(entry.total) ? entry.total : caloriesForItems(entry.items || []);
    totals.set(day, (totals.get(day) || 0) + calories);
  }
  return totals;
}

function caloriesForDay(day) {
  return caloriesByDay().get(day) || 0;
}

function weightForDay(day) {
  const previousWeighIns = Object.entries(weighIns)
    .filter(([weighInDay, weight]) => weighInDay <= day && Number.isFinite(weight))
    .sort(([dayA], [dayB]) => dayB.localeCompare(dayA));
  return previousWeighIns.length ? previousWeighIns[0][1] : profile.weight;
}

function workoutCalories(workout, day) {
  if (!profile || !workout) return 0;
  return Math.round((workout.met - 1) * weightForDay(day) * workout.duration / 60);
}

function workoutForDay(day) {
  return workouts[day] || null;
}

function targetForDay(day) {
  return profile ? profile.target + workoutCalories(workoutForDay(day), day) : 0;
}

function expenditureForDay(day) {
  return profile ? profile.expenditure + workoutCalories(workoutForDay(day), day) : 0;
}

function renderWorkoutPreview() {
  const day = elements.workoutDate.value;
  const isTrainingDay = elements.workoutForm.querySelector('[name="workout-status"]:checked').value === "yes";
  elements.workoutFields.hidden = !isTrainingDay;

  const savedWorkout = workoutForDay(day);
  const workout = isTrainingDay ? {
    type: elements.workoutType.value,
    duration: Number(elements.workoutDuration.value),
    met: Number(elements.workoutIntensity.value)
  } : null;
  const activeCalories = workout && Number.isFinite(workout.duration) && workout.duration > 0
    ? workoutCalories(workout, day)
    : 0;

  elements.workoutCalories.textContent = `+${activeCalories.toLocaleString("fr-FR")} kcal`;
  if (!profile) {
    elements.workoutEstimate.textContent = isTrainingDay
      ? "Séance sélectionnée. Complétez votre profil pour estimer les calories et ajuster l’objectif."
      : "Aucune séance enregistrée pour cette date. Complétez votre profil pour afficher votre repère calorique.";
  } else if (isTrainingDay) {
    const target = profile.target + activeCalories;
    elements.workoutEstimate.textContent = `Environ ${activeCalories.toLocaleString("fr-FR")} kcal actives pour cette séance. Repère calorique du jour : ${target.toLocaleString("fr-FR")} kcal.`;
  } else {
    elements.workoutEstimate.textContent = `Aucune séance enregistrée pour cette date. Repère calorique : ${profile.target.toLocaleString("fr-FR")} kcal.`;
  }

  elements.workoutForm.querySelector(".workout-save").textContent =
    !isTrainingDay && !savedWorkout ? "Enregistrer le statut" : "Enregistrer le statut du jour";
}

function loadWorkoutForDate(day) {
  const workout = workoutForDay(day);
  elements.workoutForm.querySelector(`[name="workout-status"][value="${workout ? "yes" : "no"}"]`).checked = true;
  elements.workoutType.value = workout?.type || "push";
  elements.workoutDuration.value = String(workout?.duration || 60);
  elements.workoutIntensity.value = String(workout?.met || 3.5);
  renderWorkoutPreview();
}

function renderMeal() {
  elements.mealName.value = meal.name || "";
  elements.mealDay.value = meal.date;
  elements.mealDate.textContent = dateFromKey(meal.date).toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });

  const itemCount = meal.items.length;
  const draftCalories = caloriesForItems(meal.items);
  const editedEntry = meal.id ? history.find(entry => entry.id === meal.id) : null;
  const savedDayCalories = caloriesForDay(meal.date) - (editedEntry
    ? (Number.isFinite(editedEntry.total) ? editedEntry.total : caloriesForItems(editedEntry.items || []))
    : 0);
  elements.loggedDayTotal.textContent = `${Math.round(Math.max(0, savedDayCalories + draftCalories)).toLocaleString("fr-FR")} kcal`;
  elements.total.textContent = Math.round(draftCalories).toLocaleString("fr-FR");
  elements.totalCaption.textContent = `${itemCount} aliment${itemCount > 1 ? "s" : ""}`;
  elements.emptyState.hidden = itemCount > 0;
  elements.mealItems.innerHTML = meal.items.map((item, index) => `
    <div class="meal-item">
      <span class="food-emoji" aria-hidden="true">${escapeHtml(item.emoji || "🍽️")}</span>
      <div class="meal-item-main">
        <span class="meal-item-name">${escapeHtml(item.name)}</span>
        <label class="meal-item-sub"><input class="quantity-input" type="number" min="0.1" max="10000" step="1" value="${item.grams}" data-quantity="${index}" aria-label="Quantité de ${escapeHtml(item.name)} en grammes"> g <span>· ${item.calories} kcal / 100 g</span></label>
      </div>
      <div class="item-kcal"><strong>${Math.round(item.calories * item.grams / 100).toLocaleString("fr-FR")}</strong> kcal</div>
      <button type="button" class="remove-item" data-remove="${index}" aria-label="Retirer ${escapeHtml(item.name)}">×</button>
    </div>`
  ).join("");

  elements.saveButton.disabled = itemCount === 0;
  elements.saveButton.innerHTML = meal.id
    ? "Enregistrer les modifications"
    : '<span aria-hidden="true">↗</span> Enregistrer ce repas';
  elements.clearButton.disabled = itemCount === 0;
  elements.saveFavoriteMeal.disabled = itemCount === 0;
  elements.completeDayButton.disabled = !profile || caloriesForDay(meal.date) <= 0;
  const isDayComplete = completedDays.includes(meal.date);
  elements.completeDayButton.textContent = isDayComplete ? "Journée validée" : "Valider la journée";
  elements.completeDayButton.setAttribute("aria-pressed", String(isDayComplete));
  saveStorage(keys.meal, meal);
  renderFavoriteMeals();
  renderTodayOverview();
}

function renderFavoriteMeals() {
  elements.favoriteMealList.innerHTML = favoriteMeals.length
    ? favoriteMeals.map(template => `<div class="favorite-meal"><button type="button" data-use-favorite-meal="${escapeHtml(template.id)}"><strong>${escapeHtml(template.name)}</strong><span>${template.items.length} aliment${template.items.length > 1 ? "s" : ""} · ${Math.round(caloriesForItems(template.items)).toLocaleString("fr-FR")} kcal</span></button><button type="button" class="favorite-meal-remove" data-remove-favorite-meal="${escapeHtml(template.id)}" aria-label="Supprimer le favori ${escapeHtml(template.name)}">×</button></div>`).join("")
    : '<p class="shortcuts-empty">Enregistrez votre assiette actuelle pour la réutiliser.</p>';
}

function renderHistory() {
  elements.historyCount.textContent = `${history.length} repas`;
  elements.historyEmpty.hidden = history.length > 0;
  elements.history.innerHTML = history.map((entry, index) => {
    const date = dateFromKey(entryDay(entry)).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
    const itemsText = `${(entry.items || []).length} aliment${(entry.items || []).length > 1 ? "s" : ""} · ${date}`;
    const total = Number.isFinite(entry.total) ? entry.total : caloriesForItems(entry.items || []);
    return `<article class="history-card">
      <div><div class="history-card-title">${escapeHtml(entry.name || "Mon repas")}</div><div class="history-card-meta">${itemsText}</div></div>
      <div class="history-card-actions"><div class="history-card-calories">${Math.round(total).toLocaleString("fr-FR")} <span>kcal</span></div>
      <button type="button" class="history-open" data-open-history="${index}" aria-label="Modifier ${escapeHtml(entry.name || "ce repas")}">Modifier</button>
      <button type="button" class="history-delete" data-delete-history="${index}" aria-label="Supprimer ${escapeHtml(entry.name || "ce repas")}">×</button></div>
    </article>`;
  }).join("");
  renderTodayOverview();
}

function renderTodayOverview() {
  const todayTotal = caloriesForDay(today);
  const todayEntries = history.filter(entry => entryDay(entry) === today);
  const todayWorkout = workoutForDay(today);
  const stepCount = steps[today];
  elements.todayDate.textContent = dateFromKey(today).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  elements.todayCalories.textContent = `${Math.round(todayTotal).toLocaleString("fr-FR")} kcal`;
  elements.todayTarget.textContent = profile
    ? `Objectif : ${targetForDay(today).toLocaleString("fr-FR")} kcal`
    : "Objectif : configurez votre profil";
  elements.todayMeals.textContent = String(todayEntries.length);
  elements.todayMealsDetail.textContent = todayEntries.length
    ? `${todayEntries.length} repas enregistré${todayEntries.length > 1 ? "s" : ""}`
    : "Aucun repas enregistré";
  elements.todayWorkout.textContent = todayWorkout
    ? (todayWorkout.type === "abdo-jambe" ? "Abdo-jambe" : `${todayWorkout.type[0].toUpperCase()}${todayWorkout.type.slice(1)}`)
    : "Non renseignée";
  elements.todayWorkoutDetail.textContent = todayWorkout
    ? `${todayWorkout.duration} min · ${workoutCalories(todayWorkout, today).toLocaleString("fr-FR")} kcal estimées`
    : "Enregistrez le statut du jour dans Activité";
  elements.todaySteps.textContent = stepCount === undefined ? "Non renseignés" : `${stepCount.toLocaleString("fr-FR")} pas`;
  elements.todayStepsDetail.textContent = stepCount === undefined
    ? "Saisie manuelle"
    : stepCount >= stepsGoal ? "Objectif atteint" : `Objectif : ${stepsGoal.toLocaleString("fr-FR")}`;
}

function calculateProfile(data) {
  const sexAdjustment = data.sex === "female" ? -161 : data.sex === "male" ? 5 : -78;
  const restingCalories = 10 * data.weight + 6.25 * data.height - 5 * data.age + sexAdjustment;
  const expenditure = Math.round(restingCalories * Number(data.activity));
  const target = expenditure >= 1750 ? expenditure - 250 : expenditure;
  return { ...data, activity: Number(data.activity), expenditure, target };
}

function renderProfile() {
  if (!profile) {
    elements.profileStatus.textContent = "Configurez votre profil pour commencer";
    elements.profileDetail.textContent = "Une estimation personnalisée de vos besoins sera calculée à partir de vos informations.";
    elements.reportPlaceholder.hidden = false;
    elements.monthlyReport.hidden = true;
    renderWorkoutPreview();
    renderTodayOverview();
    return;
  }

  const targetDescription = profile.target < profile.expenditure
    ? `Objectif indicatif hors séance : environ ${profile.target.toLocaleString("fr-FR")} kcal/j (écart modéré estimé).`
    : "Aucun déficit automatique proposé ; le repère est votre dépense estimée, hors séance.";
  elements.profileStatus.textContent = `Dépense quotidienne estimée : environ ${profile.expenditure.toLocaleString("fr-FR")} kcal`;
  elements.profileDetail.textContent = `${targetDescription} Choisissez votre activité habituelle hors séances de musculation : celles-ci sont ajoutées séparément.`;
  elements.reportPlaceholder.hidden = true;
  elements.monthlyReport.hidden = false;
  renderWorkoutPreview();
  renderTodayOverview();
}

function monthDays(month) {
  const [year, monthNumber] = month.split("-").map(Number);
  return new Date(year, monthNumber, 0).getDate();
}

function renderCalorieChart(month, dailyTotals) {
  const [year, monthNumber] = month.split("-").map(Number);
  const count = monthDays(month);
  const width = 600;
  const height = 220;
  const left = 38;
  const right = 8;
  const top = 14;
  const bottom = 28;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const dayTargets = Array.from({ length: count }, (_, index) => {
    const day = `${year}-${String(monthNumber).padStart(2, "0")}-${String(index + 1).padStart(2, "0")}`;
    return targetForDay(day);
  });
  const maximum = Math.max(500, ...dayTargets.map(target => target * 1.2), ...Array.from(dailyTotals.values()).filter(Number.isFinite)) * 1.08;
  const y = value => top + plotHeight - value / maximum * plotHeight;
  const gap = plotWidth / count;
  const barWidth = Math.max(3, gap * 0.62);
  let markup = '<text class="chart-axis-label" x="8" y="12">kcal</text>';

  for (let tick = 0; tick <= 4; tick++) {
    const value = Math.round(maximum * tick / 4);
    const tickY = y(value);
    markup += `<line class="chart-grid-line" x1="${left}" y1="${tickY}" x2="${width - right}" y2="${tickY}"></line><text class="chart-axis-label" x="${left - 5}" y="${tickY + 3}" text-anchor="end">${value}</text>`;
  }

  const targetPoints = dayTargets.map((target, index) =>
    `${left + gap * (index + 0.5)},${y(target)}`
  ).join(" ");
  markup += `<polyline class="chart-target-line" points="${targetPoints}"><title>Objectif journalier, séance de musculation incluse les jours concernés</title></polyline>`;

  for (let day = 1; day <= count; day++) {
    const key = `${year}-${String(monthNumber).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const total = dailyTotals.get(key) || 0;
    if (total > 0) {
      const barHeight = Math.max(1, (total / maximum) * plotHeight);
      const x = left + gap * (day - 0.5) - barWidth / 2;
      const className = completedDays.includes(key) ? "chart-bar" : "chart-bar incomplete";
      markup += `<rect class="${className}" x="${x}" y="${top + plotHeight - barHeight}" width="${barWidth}" height="${barHeight}" rx="2"><title>${day} : ${Math.round(total)} kcal${completedDays.includes(key) ? " (journée complète)" : " (journée non confirmée complète)"}</title></rect>`;
    }
    const workout = workoutForDay(key);
    if (workout) {
      const target = targetForDay(key);
      markup += `<circle class="chart-target-point" cx="${left + gap * (day - 0.5)}" cy="${y(target)}" r="2.5"><title>${day} : objectif ajusté à ${target.toLocaleString("fr-FR")} kcal après ${workout.type} (${workoutCalories(workout, key)} kcal estimées)</title></circle>`;
    }
    if (day === 1 || day % 5 === 0 || day === count) {
      markup += `<text class="chart-axis-label" x="${left + gap * (day - 0.5)}" y="${height - 8}" text-anchor="middle">${day}</text>`;
    }
  }
  elements.calorieChart.setAttribute("viewBox", `0 0 ${width} ${height}`);
  elements.calorieChart.innerHTML = markup;
}

function projectedWeightAt(day, dailyTotals) {
  if (day < profile.startDate) return null;
  let cumulativeCalories = 0;
  for (const completeDay of completedDays) {
    if (completeDay >= profile.startDate && completeDay <= day) {
      cumulativeCalories += expenditureForDay(completeDay) - (dailyTotals.get(completeDay) || 0);
    }
  }
  return profile.startWeight - cumulativeCalories / 7700;
}

function renderWeightChart(month, dailyTotals) {
  const [year, monthNumber] = month.split("-").map(Number);
  const count = monthDays(month);
  const firstDay = `${year}-${String(monthNumber).padStart(2, "0")}-01`;
  const lastDay = `${year}-${String(monthNumber).padStart(2, "0")}-${String(count).padStart(2, "0")}`;
  const actuals = Object.entries(weighIns)
    .filter(([day, weight]) => day >= firstDay && day <= lastDay && Number.isFinite(weight))
    .sort(([dayA], [dayB]) => dayA.localeCompare(dayB));
  const averages = actuals.map(([day]) => {
    const windowStart = dateFromKey(day);
    windowStart.setDate(windowStart.getDate() - 6);
    const windowStartKey = localDateKey(windowStart);
    const values = Object.entries(weighIns)
      .filter(([weighInDay, weight]) => weighInDay >= windowStartKey && weighInDay <= day && Number.isFinite(weight))
      .map(([, weight]) => weight);
    return [day, values.reduce((sum, weight) => sum + weight, 0) / values.length];
  });
  const completeInMonth = completedDays.filter(day => day >= firstDay && day <= lastDay && day >= profile.startDate).sort();
  const projected = completeInMonth.map(day => [day, projectedWeightAt(day, dailyTotals)]);
  if (profile.startDate >= firstDay && profile.startDate <= lastDay) {
    projected.unshift([profile.startDate, profile.startWeight]);
  }

  const values = [
    ...actuals.map(([, weight]) => weight),
    ...averages.map(([, weight]) => weight),
    ...projected.map(([, weight]) => weight)
  ];
  const width = 600;
  const height = 220;
  const left = 38;
  const right = 8;
  const top = 14;
  const bottom = 28;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;

  if (!values.length) {
    elements.weightChart.setAttribute("viewBox", `0 0 ${width} ${height}`);
    elements.weightChart.innerHTML = `<text class="chart-axis-label" x="${width / 2}" y="${height / 2}" text-anchor="middle">Pas encore de pesée ou de journée complète ce mois</text>`;
    elements.weightAverage.textContent = "La moyenne glissante apparaîtra après plusieurs pesées sur des jours distincts.";
    return;
  }

  const minWeight = Math.min(...values);
  const maxWeight = Math.max(...values);
  const padding = Math.max(0.5, (maxWeight - minWeight) * 0.2);
  const low = minWeight - padding;
  const high = maxWeight + padding;
  const x = day => left + ((Number(day.slice(-2)) - 1) / Math.max(1, count - 1)) * plotWidth;
  const y = weight => top + plotHeight - (weight - low) / (high - low) * plotHeight;
  let markup = '<text class="chart-axis-label" x="8" y="12">kg</text>';

  for (let tick = 0; tick <= 4; tick++) {
    const value = low + (high - low) * tick / 4;
    const tickY = y(value);
    markup += `<line class="chart-grid-line" x1="${left}" y1="${tickY}" x2="${width - right}" y2="${tickY}"></line><text class="chart-axis-label" x="${left - 5}" y="${tickY + 3}" text-anchor="end">${value.toFixed(1)}</text>`;
  }

  for (let day = 1; day <= count; day++) {
    if (day === 1 || day % 5 === 0 || day === count) {
      markup += `<text class="chart-axis-label" x="${x(`${year}-${String(monthNumber).padStart(2, "0")}-${String(day).padStart(2, "0")}`)}" y="${height - 8}" text-anchor="middle">${day}</text>`;
    }
  }

  if (projected.length) {
    const points = projected.map(([day, weight]) => `${x(day)},${y(weight)}`).join(" ");
    markup += `<polyline class="chart-projected-line" points="${points}"><title>Tendance théorique, calculée uniquement à partir des journées complètes</title></polyline>`;
    markup += projected.map(([day, weight]) => `<circle class="chart-projected-point" cx="${x(day)}" cy="${y(weight)}" r="3"><title>${dateFromKey(day).toLocaleDateString("fr-FR")} : tendance ${weight.toFixed(1)} kg</title></circle>`).join("");
  }
  if (averages.length >= 2) {
    const points = averages.map(([day, weight]) => `${x(day)},${y(weight)}`).join(" ");
    markup += `<polyline class="chart-average-line" points="${points}"><title>Moyenne glissante réelle sur 7 jours</title></polyline>`;
    markup += averages.map(([day, weight]) => `<circle class="chart-average-point" cx="${x(day)}" cy="${y(weight)}" r="2"><title>${dateFromKey(day).toLocaleDateString("fr-FR")} : moyenne des pesées sur 7 jours ${weight.toFixed(1)} kg</title></circle>`).join("");
  }
  markup += actuals.map(([day, weight]) => `<circle class="chart-weigh-in" cx="${x(day)}" cy="${y(weight)}" r="5"><title>${dateFromKey(day).toLocaleDateString("fr-FR")} : pesée ${weight.toFixed(1)} kg</title></circle>`).join("");
  elements.weightChart.setAttribute("viewBox", `0 0 ${width} ${height}`);
  elements.weightChart.innerHTML = markup;
  const latestAverage = averages[averages.length - 1];
  elements.weightAverage.textContent = latestAverage
    ? `Moyenne glissante des pesées sur 7 jours au ${dateFromKey(latestAverage[0]).toLocaleDateString("fr-FR")} : ${latestAverage[1].toFixed(1).replace(".", ",")} kg. Les jours sans pesée ne sont pas interpolés.`
    : "La moyenne glissante apparaîtra après plusieurs pesées sur des jours distincts.";
}

function renderStepsReport() {
  const month = elements.reportMonth.value || today.slice(0, 7);
  const [year, monthNumber] = month.split("-").map(Number);
  const count = monthDays(month);
  const width = 600;
  const height = 220;
  const left = 48;
  const right = 8;
  const top = 14;
  const bottom = 28;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const gap = plotWidth / count;
  const barWidth = Math.max(3, gap * 0.62);
  const dailySteps = Object.entries(steps).filter(([day, value]) =>
    day.startsWith(`${month}-`) && Number.isInteger(value) && value >= 0
  );
  const total = dailySteps.reduce((sum, [, value]) => sum + value, 0);
  const daysMet = dailySteps.filter(([, value]) => value >= stepsGoal).length;
  const average = dailySteps.length ? Math.round(total / dailySteps.length) : null;
  const maximum = Math.max(1000, stepsGoal * 1.15, ...dailySteps.map(([, value]) => value)) * 1.08;
  const y = value => top + plotHeight - value / maximum * plotHeight;
  let markup = '<text class="chart-axis-label" x="8" y="12">pas</text>';

  elements.stepsMonthTotal.textContent = total.toLocaleString("fr-FR");
  elements.stepsDailyAverage.textContent = average === null ? "—" : `${average.toLocaleString("fr-FR")} pas`;
  elements.stepsGoalDays.textContent = `${daysMet} / ${dailySteps.length}`;
  elements.stepsGoal.value = String(stepsGoal);

  for (let tick = 0; tick <= 4; tick++) {
    const value = Math.round(maximum * tick / 4 / 1000) * 1000;
    const tickY = y(value);
    markup += `<line class="chart-grid-line" x1="${left}" y1="${tickY}" x2="${width - right}" y2="${tickY}"></line><text class="chart-axis-label" x="${left - 5}" y="${tickY + 3}" text-anchor="end">${(value / 1000).toLocaleString("fr-FR")}k</text>`;
  }

  const targetY = y(stepsGoal);
  markup += `<line class="chart-target-line" x1="${left}" y1="${targetY}" x2="${width - right}" y2="${targetY}"><title>Objectif quotidien : ${stepsGoal.toLocaleString("fr-FR")} pas</title></line>`;

  for (let day = 1; day <= count; day++) {
    const date = `${year}-${String(monthNumber).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (Object.prototype.hasOwnProperty.call(steps, date)) {
      const value = steps[date];
      if (value > 0) {
        const barHeight = Math.max(1, (value / maximum) * plotHeight);
        const x = left + gap * (day - 0.5) - barWidth / 2;
        markup += `<rect class="chart-bar steps-bar" x="${x}" y="${top + plotHeight - barHeight}" width="${barWidth}" height="${barHeight}" rx="2"><title>${day} : ${value.toLocaleString("fr-FR")} pas</title></rect>`;
      }
    }
    if (day === 1 || day % 5 === 0 || day === count) {
      markup += `<text class="chart-axis-label" x="${left + gap * (day - 0.5)}" y="${height - 8}" text-anchor="middle">${day}</text>`;
    }
  }

  elements.stepsChart.setAttribute("viewBox", `0 0 ${width} ${height}`);
  elements.stepsChart.innerHTML = markup;
  renderTodayOverview();
}

function renderWeeklyReport() {
  const anchor = dateFromKey(elements.reportWeek.value || today);
  const mondayOffset = (anchor.getDay() + 6) % 7;
  anchor.setDate(anchor.getDate() - mondayOffset);
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(anchor);
    date.setDate(anchor.getDate() + index);
    return localDateKey(date);
  });
  const firstDay = days[0];
  const lastDay = days[6];
  const dailyTotals = caloriesByDay();
  const calorieDays = days.filter(day => (dailyTotals.get(day) || 0) > 0);
  const calorieTotal = calorieDays.reduce((sum, day) => sum + dailyTotals.get(day), 0);
  const stepDays = days.filter(day => Object.prototype.hasOwnProperty.call(steps, day));
  const stepTotal = stepDays.reduce((sum, day) => sum + steps[day], 0);
  const weightEntries = Object.entries(weighIns)
    .filter(([day, weight]) => day >= firstDay && day <= lastDay && Number.isFinite(weight))
    .sort(([dayA], [dayB]) => dayA.localeCompare(dayB));
  const workoutCount = days.filter(day => workoutForDay(day)).length;

  elements.weeklyRange.textContent = `${dateFromKey(firstDay).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })} – ${dateFromKey(lastDay).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}`;
  elements.weeklyCalories.textContent = calorieDays.length
    ? `${Math.round(calorieTotal / calorieDays.length).toLocaleString("fr-FR")} kcal`
    : "—";
  elements.weeklyTrackedDays.textContent = calorieDays.length
    ? `${calorieDays.length} jour${calorieDays.length > 1 ? "s" : ""} avec repas notés`
    : "Aucun repas noté";
  elements.weeklyWorkouts.textContent = `${workoutCount}`;
  elements.weeklySteps.textContent = stepDays.length
    ? `${Math.round(stepTotal / stepDays.length).toLocaleString("fr-FR")} pas`
    : "—";
  elements.weeklyStepsDays.textContent = stepDays.length
    ? `${stepDays.length} jour${stepDays.length > 1 ? "s" : ""} saisi${stepDays.length > 1 ? "s" : ""}`
    : "Aucune saisie";
  if (weightEntries.length >= 2) {
    const change = weightEntries[weightEntries.length - 1][1] - weightEntries[0][1];
    elements.weeklyWeight.textContent = `${change > 0 ? "+" : ""}${change.toFixed(1).replace(".", ",")} kg`;
    elements.weeklyWeightDetail.textContent = `${weightEntries.length} pesées · évolution mesurée`;
  } else {
    elements.weeklyWeight.textContent = "—";
    elements.weeklyWeightDetail.textContent = "Pas assez de pesées cette semaine";
  }
}

function renderReminderSettings() {
  elements.mealReminderEnabled.checked = reminders.meals.enabled;
  elements.mealReminderTime.value = reminders.meals.time;
  elements.mealReminderTime.disabled = !reminders.meals.enabled;
  elements.stepsReminderEnabled.checked = reminders.steps.enabled;
  elements.stepsReminderTime.value = reminders.steps.time;
  elements.stepsReminderTime.disabled = !reminders.steps.enabled;
  elements.reminderStatus.textContent = !("Notification" in window)
    ? "Les notifications ne sont pas prises en charge par ce navigateur."
    : Notification.permission === "denied"
      ? "Les notifications sont bloquées dans les réglages du navigateur."
      : "Rappels actifs uniquement tant que l’application reste ouverte.";
}

function validateBackup(backup) {
  if (!backup || backup.format !== "a-table-backup" || backup.version !== 1 ||
      !backup.data || typeof backup.data !== "object" || Array.isArray(backup.data)) {
    return "Ce fichier n’est pas une sauvegarde À table reconnue.";
  }
  const data = backup.data;
  const expectedKeys = Object.values(keys);
  if (expectedKeys.some(key => !Object.prototype.hasOwnProperty.call(data, key)) ||
      Object.keys(data).some(key => !expectedKeys.includes(key))) {
    return "La sauvegarde est incomplète ou contient des données non reconnues.";
  }
  const customFoodsAreValid = Array.isArray(data[keys.foods]) && data[keys.foods].length <= 500 &&
    data[keys.foods].every(food => food && typeof food.id === "string" && food.id.startsWith("custom-") &&
      typeof food.name === "string" && food.name.length <= 48 &&
      Number.isFinite(food.calories) && food.calories >= 0 && food.calories <= 1000);
  const validItems = items => Array.isArray(items) && items.length <= 300 && items.every(isValidMealItem);
  const mealIsValid = data[keys.meal] && typeof data[keys.meal].name === "string" &&
    isDayKey(data[keys.meal].date) && validItems(data[keys.meal].items);
  const historyIsValid = Array.isArray(data[keys.history]) && data[keys.history].length <= 10000 &&
    data[keys.history].every(entry => entry && typeof entry.id === "string" &&
      typeof entry.name === "string" && entry.name.length <= 48 &&
      (isDayKey(entry.day) || (!entry.day && typeof entry.date === "string" && Number.isFinite(new Date(entry.date).getTime()))) &&
      validItems(entry.items) &&
      (entry.total === undefined || (Number.isFinite(entry.total) && entry.total >= 0)));
  const profileIsValid = data[keys.profile] === null ||
    (data[keys.profile] && Number.isFinite(data[keys.profile].age) && data[keys.profile].age >= 18 && data[keys.profile].age <= 100 &&
      ["female", "male", "other"].includes(data[keys.profile].sex) && Number.isFinite(data[keys.profile].height) &&
      data[keys.profile].height >= 120 && data[keys.profile].height <= 230 &&
      Number.isFinite(data[keys.profile].weight) && data[keys.profile].weight >= 30 && data[keys.profile].weight <= 300 &&
      [1.2, 1.375, 1.55, 1.725, 1.9].includes(data[keys.profile].activity) &&
      Number.isFinite(data[keys.profile].expenditure) && Number.isFinite(data[keys.profile].target) &&
      Number.isFinite(data[keys.profile].startWeight) && isDayKey(data[keys.profile].startDate));
  const dateMapIsValid = (value, validateValue) => value && typeof value === "object" && !Array.isArray(value) &&
    Object.entries(value).every(([day, entry]) => isDayKey(day) && validateValue(entry));
  const customIds = new Set(data[keys.foods].map(food => food.id));
  const foodIds = new Set([...defaultFoods.map(food => food.id), ...customIds]);
  const favoritesValid = Array.isArray(data[keys.favoriteFoods]) && data[keys.favoriteFoods].length <= 500 &&
    data[keys.favoriteFoods].every(id => typeof id === "string" && foodIds.has(id));
  const recentsValid = Array.isArray(data[keys.recentFoods]) && data[keys.recentFoods].length <= 8 &&
    data[keys.recentFoods].every(id => typeof id === "string" && foodIds.has(id));
  const favoriteMealsValid = Array.isArray(data[keys.favoriteMeals]) && data[keys.favoriteMeals].length <= 20 &&
    data[keys.favoriteMeals].every(template => template && typeof template.id === "string" &&
      typeof template.name === "string" && template.name.length > 0 && template.name.length <= 48 &&
      validItems(template.items) && template.items.length > 0);
  const remindersValid = data[keys.reminders] && ["meals", "steps"].every(type =>
    data[keys.reminders][type] && typeof data[keys.reminders][type].enabled === "boolean" &&
    isValidTime(data[keys.reminders][type].time));
  const reminderSentValid = data[keys.reminderSent] && typeof data[keys.reminderSent] === "object" &&
    !Array.isArray(data[keys.reminderSent]) &&
    Object.entries(data[keys.reminderSent]).every(([type, day]) =>
      ["meals", "steps"].includes(type) && isDayKey(day));
  const valid = customFoodsAreValid && mealIsValid && historyIsValid && profileIsValid &&
    Array.isArray(data[keys.completedDays]) && data[keys.completedDays].every(isDayKey) &&
    dateMapIsValid(data[keys.weighIns], weight => Number.isFinite(weight) && weight >= 20 && weight <= 500) &&
    dateMapIsValid(data[keys.steps], count => Number.isInteger(count) && count >= 0 && count <= 200000) &&
    Number.isInteger(data[keys.stepsGoal]) && data[keys.stepsGoal] >= 1000 && data[keys.stepsGoal] <= 100000 &&
    dateMapIsValid(data[keys.workouts], workout => workout &&
      ["push", "pull", "abdo-jambe"].includes(workout.type) && [3.5, 6].includes(workout.met) &&
      Number.isInteger(workout.duration) && workout.duration >= 10 && workout.duration <= 240) &&
    favoritesValid && recentsValid && favoriteMealsValid && remindersValid && reminderSentValid;
  return valid ? null : "La sauvegarde contient des données invalides ou incomplètes ; aucune donnée n’a été modifiée.";
}

function isDayKey(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(dateFromKey(value).getTime()) && localDateKey(dateFromKey(value)) === value;
}

function exportBackup() {
  const values = {
    foods: customFoods, meal, history, profile, completedDays, weighIns, steps, stepsGoal, workouts,
    favoriteFoods, recentFoods, favoriteMeals, reminders, reminderSent
  };
  const data = Object.fromEntries(Object.entries(keys).map(([name, key]) => [key, values[name]]));
  const backup = { format: "a-table-backup", version: 1, exportedAt: new Date().toISOString(), data };
  const file = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `a-table-sauvegarde-${today}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("Sauvegarde téléchargée sur cet appareil.");
}

async function importBackup(file) {
  if (!file || file.size > 5 * 1024 * 1024) {
    showToast("Choisissez un fichier JSON de sauvegarde de moins de 5 Mo.");
    return;
  }
  let backup;
  try {
    backup = JSON.parse(await file.text());
  } catch (error) {
    console.error("La sauvegarde sélectionnée n’est pas un JSON lisible.", error);
    showToast("Impossible de lire ce fichier JSON.");
    return;
  }
  const validationError = validateBackup(backup);
  if (validationError) {
    showToast(validationError);
    return;
  }
  if (!window.confirm("Restaurer cette sauvegarde remplacera toutes les données locales de cette application sur cet appareil. Continuer ?")) return;

  const previous = Object.fromEntries(Object.values(keys).map(key => [key, localStorage.getItem(key)]));
  try {
    for (const key of Object.values(keys)) {
      const value = backup.data[key];
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error("La restauration de la sauvegarde a échoué.", error);
    for (const [key, value] of Object.entries(previous)) {
      try {
        if (value === null) localStorage.removeItem(key);
        else localStorage.setItem(key, value);
      } catch (restoreError) {
        console.error(`Impossible de restaurer l’ancienne valeur locale (${key}).`, restoreError);
      }
    }
    showToast("Restauration impossible : l’espace de stockage est insuffisant.");
    return;
  }
  window.location.reload();
}

function showReminderNotification(title, body) {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.ready.then(registration => registration.showNotification(title, { body, icon: "./icon.svg" }))
      .catch(error => {
        console.error("Impossible d’afficher le rappel.", error);
        showToast(body);
      });
  } else {
    new Notification(title, { body });
  }
}

function checkReminders() {
  if (!("Notification" in window) || Notification.permission !== "granted" ||
      document.visibilityState !== "visible") return;
  const now = new Date();
  const currentDay = localDateKey(now);
  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  for (const [type, setting] of Object.entries(reminders)) {
    if (!setting.enabled || setting.time !== currentTime || reminderSent[type] === currentDay) continue;
    if (type === "meals" && caloriesForDay(currentDay) > 0) continue;
    if (type === "steps" && Object.prototype.hasOwnProperty.call(steps, currentDay)) continue;
    const message = type === "meals" ? "Pensez à noter vos repas du jour." : "Pensez à noter vos pas du jour.";
    showReminderNotification("À table", message);
    const nextSent = { ...reminderSent, [type]: currentDay };
    reminderSent = nextSent;
    saveStorage(keys.reminderSent, nextSent);
  }
}

function renderReport() {
  renderProfile();
  renderStepsReport();
  renderWeeklyReport();
  if (!profile) return;

  const month = elements.reportMonth.value || today.slice(0, 7);
  const [year, monthNumber] = month.split("-").map(Number);
  const firstDay = `${year}-${String(monthNumber).padStart(2, "0")}-01`;
  const lastDay = `${year}-${String(monthNumber).padStart(2, "0")}-${String(monthDays(month)).padStart(2, "0")}`;
  const dailyTotals = caloriesByDay();
  const totalsForMonth = [...dailyTotals.entries()].filter(([day]) => day >= firstDay && day <= lastDay && day >= profile.startDate);
  const completeForMonth = totalsForMonth.filter(([day]) => completedDays.includes(day) && day >= profile.startDate);
  const knownDays = totalsForMonth.filter(([, total]) => total > 0).length;
  const average = knownDays ? totalsForMonth.reduce((sum, [, total]) => sum + total, 0) / knownDays : null;

  elements.averageIntake.textContent = average === null ? "—" : `${Math.round(average).toLocaleString("fr-FR")} kcal`;
  elements.trackedDays.textContent = `sur ${knownDays} jour${knownDays > 1 ? "s" : ""} avec repas notés`;
  const monthlyWorkoutCalories = Object.entries(workouts)
    .filter(([day]) => day >= firstDay && day <= lastDay)
    .reduce((sum, [day, workout]) => sum + workoutCalories(workout, day), 0);
  const averageTarget = Math.round(profile.target + monthlyWorkoutCalories / monthDays(month));
  elements.dailyTarget.textContent = `${averageTarget.toLocaleString("fr-FR")} kcal`;
  if (!completeForMonth.length) {
    elements.monthlyChange.textContent = "—";
    elements.monthlyChangeNote.textContent = "Aucune journée complète pour estimer une tendance.";
  } else {
    const energyBalance = completeForMonth.reduce((sum, [day, intake]) => sum + expenditureForDay(day) - intake, 0);
    const change = energyBalance / 7700;
    const magnitude = Math.abs(change).toFixed(2).replace(".", ",");
    const changeLabel = change > 0.005 ? "perdus" : change < -0.005 ? "pris" : "estimés";
    elements.monthlyChange.textContent = `≈ ${magnitude} kg ${changeLabel}`;
    elements.monthlyChangeNote.textContent = `${completeForMonth.length} journée${completeForMonth.length > 1 ? "s" : ""} complète${completeForMonth.length > 1 ? "s" : ""} · modèle théorique`;
  }

  const actualWeights = Object.entries(weighIns)
    .filter(([day, weight]) => day >= firstDay && day <= lastDay && Number.isFinite(weight))
    .sort(([dayA], [dayB]) => dayA.localeCompare(dayB));
  if (actualWeights.length >= 2) {
    const measuredChange = actualWeights[actualWeights.length - 1][1] - actualWeights[0][1];
    const sign = measuredChange > 0 ? "+" : "";
    elements.monthlyChangeNote.textContent += ` · pesées réelles : ${sign}${measuredChange.toFixed(1).replace(".", ",")} kg`;
  }

  renderCalorieChart(month, dailyTotals);
  renderWeightChart(month, dailyTotals);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), 2600);
}

function addFood(food, grams = 100) {
  const existing = meal.items.find(item => item.id === food.id);
  if (existing) {
    existing.grams += grams;
  } else {
    meal.items.push({ ...food, grams });
  }
  const nextRecent = [food.id, ...recentFoods.filter(id => id !== food.id)].slice(0, 8);
  if (saveStorage(keys.recentFoods, nextRecent)) recentFoods = nextRecent;
  renderFoodShortcuts();
  renderMeal();
}

function renderAll() {
  renderCategories();
  renderFoods();
  renderFoodShortcuts();
  renderMeal();
  renderHistory();
  renderReport();
  renderReminderSettings();
}

function openProfileDialog() {
  elements.profileError.textContent = "";
  if (profile) {
    document.querySelector("#profile-age").value = profile.age;
    document.querySelector("#profile-sex").value = profile.sex;
    document.querySelector("#profile-height").value = profile.height;
    document.querySelector("#profile-weight").value = profile.weight;
    document.querySelector("#profile-activity").value = String(profile.activity);
  } else {
    elements.profileForm.reset();
  }
  elements.profileDialog.showModal();
}

elements.categories.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderFoods();
});

elements.search.addEventListener("input", renderFoods);

elements.foodList.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-toggle-food-favorite]");
  if (favoriteButton) {
    const id = favoriteButton.dataset.toggleFoodFavorite;
    const nextFavorites = favoriteFoods.includes(id)
      ? favoriteFoods.filter(foodId => foodId !== id)
      : [...favoriteFoods, id];
    if (saveStorage(keys.favoriteFoods, nextFavorites)) {
      favoriteFoods = nextFavorites;
      renderFoods();
      renderFoodShortcuts();
    }
    return;
  }
  const quickButton = event.target.closest("[data-amount-food]");
  const addButton = event.target.closest("[data-add-food]");
  const id = quickButton?.dataset.amountFood || addButton?.dataset.addFood;
  if (!id) return;
  const food = allFoods().find(item => item.id === id);
  if (food) addFood(food, quickButton ? Number(quickButton.dataset.grams) : 100);
});

elements.foodShortcuts.addEventListener("click", event => {
  const button = event.target.closest("[data-quick-food]");
  const food = button && allFoods().find(item => item.id === button.dataset.quickFood);
  if (food) addFood(food);
});

elements.favoriteMealList.addEventListener("click", event => {
  const removeButton = event.target.closest("[data-remove-favorite-meal]");
  if (removeButton) {
    const nextFavorites = favoriteMeals.filter(template => template.id !== removeButton.dataset.removeFavoriteMeal);
    if (saveStorage(keys.favoriteMeals, nextFavorites)) {
      favoriteMeals = nextFavorites;
      renderFavoriteMeals();
    }
    return;
  }
  const useButton = event.target.closest("[data-use-favorite-meal]");
  const template = useButton && favoriteMeals.find(item => item.id === useButton.dataset.useFavoriteMeal);
  if (!template) return;
  template.items.forEach(item => addFood(item, item.grams));
  if (!meal.name.trim()) {
    meal.name = template.name;
    elements.mealName.value = meal.name;
  }
  renderMeal();
  showToast(`« ${template.name} » ajouté à votre assiette.`);
});

elements.mealItems.addEventListener("change", event => {
  const input = event.target.closest("[data-quantity]");
  if (!input) return;
  const grams = Number(input.value);
  const index = Number(input.dataset.quantity);
  if (!Number.isFinite(grams) || grams <= 0 || grams > 10000 || !meal.items[index]) return;
  meal.items[index].grams = grams;
  renderMeal();
});

elements.mealItems.addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  meal.items.splice(Number(button.dataset.remove), 1);
  renderMeal();
});

elements.mealName.addEventListener("input", () => {
  meal.name = elements.mealName.value;
  saveStorage(keys.meal, meal);
});

elements.mealDay.addEventListener("change", () => {
  if (!elements.mealDay.value) return;
  meal.date = elements.mealDay.value;
  renderMeal();
});

elements.clearButton.addEventListener("click", () => {
  meal = { id: null, name: "", date: meal.date, items: [] };
  renderMeal();
  showToast("Votre assiette a été vidée.");
});

elements.saveFavoriteMeal.addEventListener("click", () => {
  if (!meal.items.length) return;
  if (favoriteMeals.length >= 20) {
    showToast("La limite de 20 repas favoris est atteinte.");
    return;
  }
  const name = meal.name.trim() || `Repas favori ${favoriteMeals.length + 1}`;
  const template = {
    id: crypto.randomUUID ? crypto.randomUUID() : `favorite-${Date.now()}-${Math.random()}`,
    name: name.slice(0, 48),
    items: meal.items.map(item => ({ ...item }))
  };
  const nextFavorites = [...favoriteMeals, template];
  if (saveStorage(keys.favoriteMeals, nextFavorites)) {
    favoriteMeals = nextFavorites;
    renderFavoriteMeals();
    showToast(`« ${template.name} » ajouté à vos repas favoris.`);
  }
});

elements.saveButton.addEventListener("click", () => {
  if (!meal.items.length) return;
  const existingEntry = meal.id ? history.find(entry => entry.id === meal.id) : null;
  const entry = {
    id: meal.id || (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`),
    name: meal.name.trim() || "Mon repas",
    date: new Date(`${meal.date}T12:00:00`).toISOString(),
    day: meal.date,
    total: Math.round(caloriesForItems(meal.items)),
    items: meal.items.map(item => ({ ...item }))
  };
  const nextHistory = existingEntry
    ? history.map(item => item.id === entry.id ? entry : item)
    : [entry, ...history];
  if (saveStorage(keys.history, nextHistory)) {
    history = nextHistory;
    const daysToReopen = new Set([entry.day]);
    if (existingEntry) daysToReopen.add(entryDay(existingEntry));
    const nextCompleted = completedDays.filter(day => !daysToReopen.has(day));
    if (nextCompleted.length !== completedDays.length) {
      if (saveStorage(keys.completedDays, nextCompleted)) completedDays = nextCompleted;
    }
    meal = { id: null, name: "", date: entry.day, items: [] };
    renderMeal();
    renderHistory();
    renderReport();
    showToast("Repas enregistré dans votre journal.");
  }
});

elements.completeDayButton.addEventListener("click", () => {
  if (!profile || caloriesForDay(meal.date) <= 0) return;
  const nextCompleted = completedDays.includes(meal.date)
    ? completedDays.filter(day => day !== meal.date)
    : [...completedDays, meal.date];
  if (saveStorage(keys.completedDays, nextCompleted)) {
    completedDays = nextCompleted;
    renderMeal();
    renderReport();
    showToast(completedDays.includes(meal.date) ? "Journée marquée comme complète." : "Journée réouverte.");
  }
});

elements.history.addEventListener("click", event => {
  const openButton = event.target.closest("[data-open-history]");
  const deleteButton = event.target.closest("[data-delete-history]");
  if (openButton) {
    const entry = history[Number(openButton.dataset.openHistory)];
    if (!entry) return;
    meal = { id: entry.id, name: entry.name, date: entryDay(entry), items: (entry.items || []).map(item => ({ ...item })) };
    renderMeal();
    selectTab(document.querySelector("#tab-meals-button"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (deleteButton) {
    const deletedEntry = history[Number(deleteButton.dataset.deleteHistory)];
    const nextHistory = history.filter((_, index) => index !== Number(deleteButton.dataset.deleteHistory));
    if (saveStorage(keys.history, nextHistory)) {
      history = nextHistory;
      const deletedDay = deletedEntry ? entryDay(deletedEntry) : null;
      if (deletedEntry && meal.id === deletedEntry.id) {
        meal = { id: null, name: "", date: deletedDay || meal.date, items: [] };
      }
      if (deletedDay && completedDays.includes(deletedDay)) {
        const nextCompleted = completedDays.filter(day => day !== deletedDay);
        if (saveStorage(keys.completedDays, nextCompleted)) completedDays = nextCompleted;
      }
      renderHistory();
      renderMeal();
      renderReport();
    }
  }
});

document.querySelector("#profile-button").addEventListener("click", openProfileDialog);
document.querySelector("#profile-edit-button").addEventListener("click", openProfileDialog);
document.querySelector("[data-close-profile]").addEventListener("click", () => elements.profileDialog.close());
elements.profileDialog.addEventListener("click", event => {
  if (event.target === elements.profileDialog) elements.profileDialog.close();
});

elements.profileForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = {
    age: Number(document.querySelector("#profile-age").value),
    sex: document.querySelector("#profile-sex").value,
    height: Number(document.querySelector("#profile-height").value),
    weight: Number(document.querySelector("#profile-weight").value),
    activity: Number(document.querySelector("#profile-activity").value)
  };
  if (data.age < 18 || data.age > 100 || data.height < 120 || data.height > 230 || data.weight < 30 || data.weight > 300) {
    elements.profileError.textContent = "Vérifiez l’âge, la taille et le poids saisis.";
    return;
  }
  const isFirstProfile = !profile;
  const calculated = calculateProfile(data);
  const nextProfile = {
    ...calculated,
    startWeight: isFirstProfile ? data.weight : profile.startWeight,
    startDate: isFirstProfile ? today : profile.startDate
  };
  if (!saveStorage(keys.profile, nextProfile)) return;
  profile = nextProfile;
  if (isFirstProfile && !Object.prototype.hasOwnProperty.call(weighIns, today)) {
    const nextWeighIns = { ...weighIns, [today]: data.weight };
    if (saveStorage(keys.weighIns, nextWeighIns)) weighIns = nextWeighIns;
  }
  elements.profileDialog.close();
  renderReport();
  showToast("Profil enregistré sur cet appareil.");
});

elements.reportMonth.addEventListener("change", renderReport);
elements.reportWeek.value = today;
elements.reportWeek.addEventListener("change", renderWeeklyReport);

elements.workoutForm.addEventListener("change", event => {
  if (event.target.matches('[name="workout-status"]')) {
    renderWorkoutPreview();
  } else if (event.target === elements.workoutDate) {
    loadWorkoutForDate(elements.workoutDate.value);
  } else {
    renderWorkoutPreview();
  }
});

elements.workoutForm.addEventListener("input", renderWorkoutPreview);

elements.workoutForm.addEventListener("submit", event => {
  event.preventDefault();
  const day = elements.workoutDate.value;
  const status = elements.workoutForm.querySelector('[name="workout-status"]:checked').value;
  const nextWorkouts = { ...workouts };

  if (!day) {
    showToast("Choisissez une date pour la séance.");
    return;
  }

  if (status === "no") {
    delete nextWorkouts[day];
  } else {
    const workout = {
      type: elements.workoutType.value,
      duration: Number(elements.workoutDuration.value),
      met: Number(elements.workoutIntensity.value)
    };
    if (!["push", "pull", "abdo-jambe"].includes(workout.type) ||
        !Number.isInteger(workout.duration) || workout.duration < 10 || workout.duration > 240 ||
        ![3.5, 6].includes(workout.met)) {
      showToast("Vérifiez le type, la durée et l’intensité de la séance.");
      return;
    }
    nextWorkouts[day] = workout;
  }

  if (saveStorage(keys.workouts, nextWorkouts)) {
    workouts = nextWorkouts;
    renderWorkoutPreview();
    renderTodayOverview();
    renderReport();
    showToast(status === "yes" ? "Séance de musculation enregistrée." : "Statut sans séance enregistré.");
  }
});

elements.stepsDate.addEventListener("change", () => {
  const savedCount = steps[elements.stepsDate.value];
  elements.stepsCount.value = savedCount === undefined ? "" : String(savedCount);
});

elements.stepsForm.addEventListener("submit", event => {
  event.preventDefault();
  const day = elements.stepsDate.value;
  const count = Number(elements.stepsCount.value);
  const goal = Number(elements.stepsGoal.value);
  if (!day || !Number.isInteger(count) || count < 0 || count > 200000 ||
      !Number.isInteger(goal) || goal < 1000 || goal > 100000) {
    showToast("Vérifiez la date, le nombre de pas et l’objectif saisis.");
    return;
  }

  const nextSteps = { ...steps, [day]: count };
  if (!saveStorage(keys.steps, nextSteps)) return;
  if (!saveStorage(keys.stepsGoal, goal)) return;
  steps = nextSteps;
  stepsGoal = goal;
  renderStepsReport();
  renderWeeklyReport();
  showToast("Nombre de pas enregistré.");
});

elements.weighInForm.addEventListener("submit", event => {
  event.preventDefault();
  const day = elements.weighInDate.value;
  const weight = Number(elements.weighInWeight.value);
  if (!day || !Number.isFinite(weight) || weight < 20 || weight > 500) {
    showToast("Saisissez une date et un poids valide.");
    return;
  }
  const nextWeighIns = { ...weighIns, [day]: weight };
  if (saveStorage(keys.weighIns, nextWeighIns)) {
    weighIns = nextWeighIns;
    elements.weighInWeight.value = "";
    renderReport();
    showToast("Pesée enregistrée.");
  }
});

elements.exportData.addEventListener("click", exportBackup);

elements.importDataFile.addEventListener("change", async () => {
  const [file] = elements.importDataFile.files;
  elements.importDataFile.value = "";
  await importBackup(file);
});

elements.mealReminderEnabled.addEventListener("change", () => {
  elements.mealReminderTime.disabled = !elements.mealReminderEnabled.checked;
});

elements.stepsReminderEnabled.addEventListener("change", () => {
  elements.stepsReminderTime.disabled = !elements.stepsReminderEnabled.checked;
});

elements.reminderForm.addEventListener("submit", async event => {
  event.preventDefault();
  const nextReminders = {
    meals: { enabled: elements.mealReminderEnabled.checked, time: elements.mealReminderTime.value },
    steps: { enabled: elements.stepsReminderEnabled.checked, time: elements.stepsReminderTime.value }
  };
  if (!nextReminders.meals.enabled && !nextReminders.steps.enabled) {
    if (saveStorage(keys.reminders, nextReminders)) {
      reminders = nextReminders;
      renderReminderSettings();
      showToast("Rappels désactivés.");
    }
    return;
  }
  if (!("Notification" in window)) {
    elements.reminderStatus.textContent = "Les notifications ne sont pas prises en charge par ce navigateur.";
    showToast("Ce navigateur ne prend pas en charge les notifications.");
    return;
  }
  let permission = Notification.permission;
  if (permission === "default") {
    try {
      permission = await Notification.requestPermission();
    } catch (error) {
      console.error("La demande d’autorisation des notifications a échoué.", error);
      elements.reminderStatus.textContent = "Impossible de demander l’autorisation des notifications.";
      return;
    }
  }
  if (permission !== "granted") {
    renderReminderSettings();
    elements.reminderStatus.textContent = "Autorisez les notifications dans le navigateur pour activer les rappels.";
    return;
  }
  if (saveStorage(keys.reminders, nextReminders)) {
    reminders = nextReminders;
    renderReminderSettings();
    checkReminders();
    showToast("Rappels enregistrés. L’application doit rester ouverte pour les recevoir.");
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") checkReminders();
});

document.querySelector("#custom-food-button").addEventListener("click", () => {
  elements.formError.textContent = "";
  elements.customForm.reset();
  elements.dialog.showModal();
  elements.customName.focus();
});

document.querySelector("#dialog-close").addEventListener("click", () => elements.dialog.close());
elements.dialog.addEventListener("click", event => {
  if (event.target === elements.dialog) elements.dialog.close();
});

elements.customForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = elements.customName.value.trim();
  const calories = Number(elements.customCalories.value);
  if (!name || !Number.isFinite(calories) || calories < 0 || calories > 1000) {
    elements.formError.textContent = "Saisissez un nom et une valeur entre 0 et 1 000 kcal.";
    return;
  }
  const food = {
    id: `custom-${Date.now()}`,
    name,
    category: "Mes aliments",
    calories,
    emoji: "🍽️"
  };
  const nextFoods = [...customFoods, food];
  if (!saveStorage(keys.foods, nextFoods)) return;
  customFoods = nextFoods;
  activeCategory = "Tout";
  elements.search.value = "";
  renderCategories();
  renderFoods();
  addFood(food);
  elements.dialog.close();
  showToast("Aliment ajouté à votre assiette et à vos aliments.");
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) && !elements.dialog.open && !elements.profileDialog.open) {
    event.preventDefault();
    elements.search.focus();
  }
});

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  const button = document.querySelector("#install-button");
  button.hidden = false;
  button.addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    button.hidden = true;
  }, { once: true });
});

elements.reportMonth.value = today.slice(0, 7);
elements.mealDay.value = meal.date;
elements.weighInDate.value = today;
elements.workoutDate.value = today;
loadWorkoutForDate(today);
elements.stepsDate.value = today;
elements.stepsGoal.value = String(stepsGoal);
elements.stepsCount.value = steps[today] === undefined ? "" : String(steps[today]);
window.setInterval(checkReminders, 15000);
renderAll();
checkReminders();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(error => {
      console.error("L’application hors ligne n’a pas pu être activée.", error);
    });
  });
}
