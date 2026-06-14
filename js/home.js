// Populate home page grids
document.addEventListener("DOMContentLoaded", () => {
  const featured = books.filter(b => ["Editor's Pick", "Award Winner", "Bestseller"].includes(b.badge)).slice(0, 4);
  const popular = books.filter(b => b.rating >= 4.7).slice(0, 4);
  document.getElementById("featured-grid").innerHTML = featured.map(b => buildBookCard(b)).join("");
  document.getElementById("popular-grid").innerHTML = popular.map(b => buildBookCard(b)).join("");

  // Nav search redirect
  document.getElementById("nav-search-input").addEventListener("keydown", e => {
    if (e.key === "Enter" && e.target.value.trim()) {
      location.href = `books.html?q=${encodeURIComponent(e.target.value.trim())}`;
    }
  });
  // Hero search redirect
  document.getElementById("hero-search").addEventListener("keydown", e => {
    if (e.key === "Enter") heroSearch();
  });

  // Hamburger
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
  });
});

function heroSearch() {
  const val = document.getElementById("hero-search").value.trim();
  if (val) location.href = `books.html?q=${encodeURIComponent(val)}`;
}
function searchTag(tag) {
  location.href = `books.html?q=${encodeURIComponent(tag)}`;
}