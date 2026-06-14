document.addEventListener("DOMContentLoaded", () => {
  // Handle URL params (search from home page)
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const cat = params.get("cat");
  if (q) {
    searchTerm = q.toLowerCase();
    const si = document.getElementById("search-input");
    if (si) si.value = q;
  }
  if (cat && cat !== "All") {
    currentCategory = cat;
    document.querySelectorAll(".category-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.cat === cat);
    });
  }
  renderBooks();

  // Nav search
  document.getElementById("nav-search-input").addEventListener("keydown", e => {
    if (e.key === "Enter" && e.target.value.trim()) {
      searchTerm = e.target.value.toLowerCase().trim();
      document.getElementById("search-input").value = e.target.value;
      renderBooks();
    }
  });

  // Hamburger
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
  });
});