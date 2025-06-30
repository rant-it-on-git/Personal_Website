// scripts/main.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-theme");

  // Load previously selected mode from localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggleButton.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
