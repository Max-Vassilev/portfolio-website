const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  toggle.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "light") {
  html.classList.remove("dark");
  toggle.textContent = "🌙";
}
