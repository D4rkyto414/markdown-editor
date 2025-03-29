// Seleccionar elementos del DOM
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const clearButton = document.getElementById("clear-button");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");
const themeSelector = document.getElementById("theme-selector");

// Función para actualizar la vista previa
toggleTheme(localStorage.getItem("theme") || "light");

editor.addEventListener("input", () => {
  preview.innerHTML = marked.parse(editor.value);
  updateCounter();
});

// Función para limpiar editor y preview
clearButton.addEventListener("click", () => {
  editor.value = "";
  preview.innerHTML = "";
  updateCounter();
});

// Función para actualizar contador de palabras y caracteres
function updateCounter() {
  const text = editor.value.trim();
  wordCount.textContent = text.length ? text.split(/\s+/).length : 0;
  charCount.textContent = text.length;
}

// Función para cambiar el tema
themeSelector.addEventListener("change", (e) => {
  toggleTheme(e.target.value);
});

function toggleTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
