// ============================================================
//  Pustak — Books.js  |  Listing, filter, sort, search
// ============================================================

let currentCategory = "All";
let currentSort = "default";
let searchTerm = "";

function getFilteredBooks() {
  let result = [...books];
  if (searchTerm) {
    result = result.filter(b =>
      b.title.toLowerCase().includes(searchTerm) ||
      b.author.toLowerCase().includes(searchTerm) ||
      b.category.toLowerCase().includes(searchTerm)
    );
  }
  if (currentCategory !== "All") {
    result = result.filter(b => b.category === currentCategory);
  }
  if (currentSort === "price-asc") result.sort((a, b) => a.price - b.price);
  else if (currentSort === "price-desc") result.sort((a, b) => b.price - a.price);
  else if (currentSort === "az") result.sort((a, b) => a.title.localeCompare(b.title));
  else if (currentSort === "rating") result.sort((a, b) => b.rating - a.rating);
  return result;
}

function renderBooks() {
  const grid = document.getElementById("books-grid");
  const countEl = document.getElementById("results-count");
  if (!grid) return;
  const filtered = getFilteredBooks();
  countEl && (countEl.textContent = `${filtered.length} book${filtered.length !== 1 ? "s" : ""} found`);
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">📚</div>
      <h3>No books found</h3>
      <p>Try a different search term or category</p>
      <button class="btn-secondary" onclick="clearFilters()">Clear filters</button>
    </div>`;
    return;
  }
  grid.innerHTML = filtered.map(b => buildBookCard(b)).join("");
}

function clearFilters() {
  searchTerm = "";
  currentCategory = "All";
  currentSort = "default";
  const si = document.getElementById("search-input");
  if (si) si.value = "";
  document.querySelectorAll(".category-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.cat === "All"));
  const sortSel = document.getElementById("sort-select");
  if (sortSel) sortSel.value = "default";
  renderBooks();
}

document.addEventListener("DOMContentLoaded", () => {
  renderBooks();

  // Search
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchTerm = e.target.value.toLowerCase().trim();
      renderBooks();
    });
  }

  // Category buttons
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.cat;
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderBooks();
    });
  });

  // Sort
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      currentSort = e.target.value;
      renderBooks();
    });
  }
});