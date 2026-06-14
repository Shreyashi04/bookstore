// ============================================================
//  Pustak — App.js  |  Shared state, data, utilities
// ============================================================


const books = [
    {
        id: 1,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        price: 349,
        category: "Programming",
        rating: 4.8,
        pages: 176,
        description: "Unearthing the excellence in JavaScript, this book walks through the language's best features—the ones that make JavaScript a remarkable, expressive, and beautiful language.",
        badge: "Bestseller",
        color: "#2563EB",
        image: "assets/books/js_the_good_parts.jpg"
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 499,
        category: "Programming",
        rating: 4.9,
        pages: 431,
        description: "A handbook of agile software craftsmanship. Packed with practical advice, this classic guides you to write code that is readable, maintainable, and elegant.",
        badge: "Editor's Pick",
        color: "#059669"
    },
    {
        id: 3,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        price: 399,
        category: "Science",
        rating: 4.7,
        pages: 499,
        description: "Nobel laureate Kahneman takes us on a groundbreaking tour of the mind and explains two systems that drive the way we think—fast, intuitive thinking and slow, deliberate thinking.",
        badge: "Award Winner",
        color: "#7C3AED"
    },
    {
        id: 4,
        title: "Zero to One",
        author: "Peter Thiel",
        price: 299,
        category: "Business",
        rating: 4.6,
        pages: 224,
        description: "Notes on startups, or how to build the future. Every moment in business happens only once. The next Bill Gates will not build an operating system. The next Larry Page won't make a search engine.",
        badge: "Popular",
        color: "#DC2626"
    },
    {
        id: 5,
        title: "The Midnight Library",
        author: "Matt Haig",
        price: 249,
        category: "Fiction",
        rating: 4.5,
        pages: 304,
        description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
        badge: "New",
        color: "#0891B2"
    },
    {
        id: 6,
        title: "Atomic Habits",
        author: "James Clear",
        price: 379,
        category: "Business",
        rating: 4.9,
        pages: 320,
        description: "An easy and proven way to build good habits and break bad ones. Tiny changes, remarkable results. The most comprehensive guide on how habits work and how to change them.",
        badge: "Bestseller",
        color: "#D97706"
    },
    {
        id: 7,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 149,
        category: "Fiction",
        rating: 4.4,
        pages: 180,
        description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set against the backdrop of the Jazz Age and the hollowness of the upper class.",
        badge: "Classic",
        color: "#BE185D"
    },
    {
        id: 8,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        price: 329,
        category: "Science",
        rating: 4.8,
        pages: 212,
        description: "From the Big Bang to black holes, Hawking explores the nature of the universe in a landmark work of science writing that speaks to readers of all backgrounds.",
        badge: "Classic",
        color: "#1D4ED8"
    },
    {
        id: 9,
        title: "Python Crash Course",
        author: "Eric Matthes",
        price: 429,
        category: "Programming",
        rating: 4.7,
        pages: 544,
        description: "A fast-paced, thorough introduction to Python programming. You'll quickly gain a solid foundation and start building real programs—games, data visualizations, and web apps.",
        badge: "Popular",
        color: "#065F46"
    },
    {
        id: 10,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 459,
        category: "Science",
        rating: 4.8,
        pages: 498,
        description: "A brief history of humankind. How did our species succeed in the battle for dominance? How have we organized ourselves into cities and kingdoms? How will we look in the future?",
        badge: "Award Winner",
        color: "#92400E"
    },
    {
        id: 11,
        title: "The Lean Startup",
        author: "Eric Ries",
        price: 319,
        category: "Business",
        rating: 4.5,
        pages: 336,
        description: "How today's entrepreneurs use continuous innovation to create radically successful businesses. A fresh approach to building companies through tested principles and agile development.",
        badge: "Popular",
        color: "#7C3AED"
    },
    {
        id: 12,
        title: "1984",
        author: "George Orwell",
        price: 179,
        category: "Fiction",
        rating: 4.9,
        pages: 328,
        description: "A dystopian social science fiction novel that examines the dangers of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society.",
        badge: "Classic",
        color: "#374151"
    }
    ,
    {
        id: 13,
        title: "Deep Work",
        author: "Cal Newport",
        price: 349,
        category: "Business",
        rating: 4.8,
        pages: 304,
        description: "Rules for focused success in a distracted world.",
        badge: "Popular",
        color: "#0F766E"
    },
    {
        id: 14,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 299,
        category: "Business",
        rating: 4.7,
        pages: 336,
        description: "What the rich teach their kids about money.",
        badge: "Bestseller",
        color: "#CA8A04"
    },
    {
        id: 15,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 379,
        category: "Business",
        rating: 4.9,
        pages: 256,
        description: "Timeless lessons on wealth, greed, and happiness.",
        badge: "Trending",
        color: "#B45309"
    },
    {
        id: 16,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 219,
        category: "Fiction",
        rating: 4.8,
        pages: 208,
        description: "A journey of self-discovery and destiny.",
        badge: "Classic",
        color: "#9333EA"
    },
    {
        id: 17,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 249,
        category: "Fiction",
        rating: 4.9,
        pages: 336,
        description: "A classic novel about justice and morality.",
        badge: "Award Winner",
        color: "#BE123C"
    },
    {
        id: 18,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 289,
        category: "Fiction",
        rating: 4.8,
        pages: 400,
        description: "Bilbo Baggins embarks on an unexpected adventure.",
        badge: "Popular",
        color: "#15803D"
    },
    {
        id: 19,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: 329,
        category: "Fiction",
        rating: 4.6,
        pages: 336,
        description: "A gripping psychological thriller.",
        badge: "New",
        color: "#0369A1"
    },
    {
        id: 20,
        title: "The Martian",
        author: "Andy Weir",
        price: 359,
        category: "Science",
        rating: 4.8,
        pages: 387,
        description: "An astronaut struggles to survive on Mars.",
        badge: "Popular",
        color: "#EA580C"
    },
    {
        id: 21,
        title: "Cosmos",
        author: "Carl Sagan",
        price: 399,
        category: "Science",
        rating: 4.9,
        pages: 384,
        description: "A fascinating exploration of the universe.",
        badge: "Classic",
        color: "#4338CA"
    },
    {
        id: 22,
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        price: 369,
        category: "Science",
        rating: 4.7,
        pages: 360,
        description: "A revolutionary look at evolution and genetics.",
        badge: "Award Winner",
        color: "#0D9488"
    },
    {
        id: 23,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        price: 799,
        category: "Programming",
        rating: 4.9,
        pages: 1312,
        description: "The definitive guide to algorithms and data structures.",
        badge: "Must Read",
        color: "#1D4ED8"
    },
    {
        id: 24,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        price: 429,
        category: "Programming",
        rating: 4.8,
        pages: 278,
        description: "Deep dive into JavaScript concepts and mechanics.",
        badge: "Developer Favorite",
        color: "#7C2D12"
    },
    {
        id: 25,
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        price: 399,
        category: "Programming",
        rating: 4.7,
        pages: 472,
        description: "A modern introduction to JavaScript programming.",
        badge: "Popular",
        color: "#7E22CE"
    },
    {
        id: 26,
        title: "Head First Design Patterns",
        author: "Eric Freeman",
        price: 649,
        category: "Programming",
        rating: 4.8,
        pages: 694,
        description: "Learn design patterns through practical examples.",
        badge: "Best Seller",
        color: "#BE185D"
    },
    {
        id: 27,
        title: "Ikigai",
        author: "Hector Garcia",
        price: 259,
        category: "Business",
        rating: 4.7,
        pages: 208,
        description: "Discover the Japanese secret to a long and happy life.",
        badge: "Trending",
        color: "#16A34A"
    },
    {
        id: 28,
        title: "Start With Why",
        author: "Simon Sinek",
        price: 329,
        category: "Business",
        rating: 4.6,
        pages: 256,
        description: "How great leaders inspire action.",
        badge: "Popular",
        color: "#2563EB"
    },
    {
        id: 29,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        price: 359,
        category: "Business",
        rating: 4.8,
        pages: 371,
        description: "Why habits exist and how they can be changed.",
        badge: "Bestseller",
        color: "#B91C1C"
    },
    {
        id: 30,
        title: "Dune",
        author: "Frank Herbert",
        price: 449,
        category: "Fiction",
        rating: 4.9,
        pages: 688,
        description: "An epic science fiction masterpiece.",
        badge: "Sci-Fi Classic",
        color: "#92400E"
    },
    {
        id: 31,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 199,
        category: "Fiction",
        rating: 4.8,
        pages: 432,
        description: "A timeless romance and social commentary.",
        badge: "Classic",
        color: "#C026D3"
    },
    {
        id: 32,
        title: "Frankenstein",
        author: "Mary Shelley",
        price: 229,
        category: "Fiction",
        rating: 4.6,
        pages: 280,
        description: "One of the earliest and greatest science fiction novels.",
        badge: "Classic",
        color: "#374151"
    }
];

// ── Cart Utilities ──────────────────────────────────────────
function getCart() {
    return JSON.parse(localStorage.getItem("Pustak_cart") || "[]");
}
function saveCart(cart) {
    localStorage.setItem("Pustak_cart", JSON.stringify(cart));
    updateCartBadge();
}
function addToCart(bookId) {
    const cart = getCart();
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    const existing = cart.find(i => i.id === bookId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: book.id, title: book.title, author: book.author, price: book.price, qty: 1, color: book.color });
    }
    saveCart(cart);
    showToast(`"${book.title}" added to cart`);
}
function updateCartBadge() {
    const cart = getCart();
    const total = cart.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll(".cart-badge").forEach(el => {
        el.textContent = total;
        el.style.display = total > 0 ? "flex" : "none";
    });
}

// ── Wishlist Utilities ──────────────────────────────────────
function getWishlist() {
    return JSON.parse(localStorage.getItem("Pustak_wishlist") || "[]");
}
function toggleWishlist(bookId) {
    const wl = getWishlist();
    const idx = wl.indexOf(bookId);
    if (idx === -1) {
        wl.push(bookId);
        showToast("Added to wishlist ♥");
    } else {
        wl.splice(idx, 1);
        showToast("Removed from wishlist");
    }
    localStorage.setItem("Pustak_wishlist", JSON.stringify(wl));
    document.querySelectorAll(`[data-wish="${bookId}"]`).forEach(btn => {
        btn.classList.toggle("wished", idx === -1);
    });
}

// ── Dark Mode ───────────────────────────────────────────────
function initTheme() {
    const saved = localStorage.getItem("Pustak_theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    document.querySelectorAll(".theme-toggle").forEach(btn => {
        btn.setAttribute("aria-label", saved === "dark" ? "Switch to light mode" : "Switch to dark mode");
        btn.innerHTML = saved === "dark"
            ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
            : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    });
}
function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("Pustak_theme", next);
    initTheme();
}

// ── Toast ───────────────────────────────────────────────────
function showToast(msg) {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 2800);
}

// ── Book Card Builder ───────────────────────────────────────
function buildBookCard(book, context = "grid") {
    const wl = getWishlist();
    const wished = wl.includes(book.id);
    return `
    <article class="book-card" data-id="${book.id}">
      <div class="book-cover" style="--book-color:${book.color}" onclick="openModal(${book.id})">
        ${book.image
            ? `
      <img
        src="${book.image}"
        alt="${book.title}"
        class="book-cover-image"
        loading="lazy"
      />
    `
            : `
      <div class="book-spine"></div>
      <div class="book-cover-art">
        <div class="book-cover-title">${book.title}</div>
        <div class="book-cover-author">${book.author}</div>
      </div>
    `
        }
        ${book.badge ? `<span class="book-badge">${book.badge}</span>` : ""}
        <button class="wish-btn ${wished ? "wished" : ""}" data-wish="${book.id}"
          onclick="event.stopPropagation(); toggleWishlist(${book.id})" aria-label="Toggle wishlist">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${wished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="book-info">
        <div class="book-category-tag">${book.category}</div>
        <h3 class="book-title" onclick="openModal(${book.id})">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <div class="book-meta">
          <div class="book-rating">
            ${renderStars(book.rating)}
            <span>${book.rating}</span>
          </div>
        </div>
        <div class="book-footer">
          <span class="book-price">₹${book.price}</span>
          <button class="btn-cart" onclick="addToCart(${book.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Add to Cart
          </button>
        </div>
      </div>
    </article>`;
}

function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < full) stars += `<span class="star full">★</span>`;
        else if (i === full && half) stars += `<span class="star half">★</span>`;
        else stars += `<span class="star empty">★</span>`;
    }
    return stars;
}

// ── Modal ───────────────────────────────────────────────────
function openModal(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    const wl = getWishlist();
    const wished = wl.includes(book.id);
    const modal = document.getElementById("book-modal");
    document.getElementById("modal-body").innerHTML = `
    <div class="modal-cover" style="--book-color:${book.color}">
        ${book.image
            ? `
                <img
                src="${book.image}"
                alt="${book.title}"
                class="modal-cover-image"
                />
            `
            : `
                <div class="modal-book-visual">
                <div class="modal-spine"></div>
                <div class="modal-cover-text">
                    <div class="modal-cover-title">${book.title}</div>
                    <div class="modal-cover-author">${book.author}</div>
                </div>
                </div>
            `
        }
        </div>
    <div class="modal-details">
      <span class="book-category-tag">${book.category}</span>
      <h2>${book.title}</h2>
      <p class="modal-author">by ${book.author}</p>
      <div class="modal-rating">
        ${renderStars(book.rating)}
        <span class="rating-num">${book.rating} out of 5</span>
      </div>
      <p class="modal-desc">${book.description}</p>
      <div class="modal-stats">
        <div class="stat"><span class="stat-val">${book.pages}</span><span class="stat-label">Pages</span></div>
        <div class="stat"><span class="stat-val">${book.category}</span><span class="stat-label">Category</span></div>
        <div class="stat"><span class="stat-val">${book.badge || "—"}</span><span class="stat-label">Tag</span></div>
      </div>
      <div class="modal-actions">
        <span class="modal-price">₹${book.price}</span>
        <button class="btn-primary" onclick="addToCart(${book.id}); closeModal()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          Add to Cart
        </button>
        <button class="btn-wish ${wished ? "wished" : ""}" data-wish="${book.id}"
          onclick="toggleWishlist(${book.id}); this.classList.toggle('wished')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${wished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          ${wished ? "Wishlisted" : "Wishlist"}
        </button>
      </div>
    </div>`;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}
function closeModal() {
    document.getElementById("book-modal")?.classList.remove("open");
    document.body.style.overflow = "";
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    updateCartBadge();
    document.querySelectorAll(".theme-toggle").forEach(btn => btn.addEventListener("click", toggleTheme));
    document.getElementById("book-modal")?.addEventListener("click", e => {
        if (e.target.id === "book-modal") closeModal();
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
});