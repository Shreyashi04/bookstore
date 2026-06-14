document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-search-input").addEventListener("keydown", e => {
    if (e.key === "Enter" && e.target.value.trim()) {
      location.href = `books.html?q=${encodeURIComponent(e.target.value.trim())}`;
    }
  });
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger?.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
  });
});