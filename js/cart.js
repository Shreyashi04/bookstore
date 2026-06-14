// ============================================================
//  Pustak — Cart.js  |  Cart page, checkout
// ============================================================

function renderCartPage() {
  const cart = getCart();
  const cartItems = document.getElementById("cart-items");
  const cartSummary = document.getElementById("cart-summary");
  const emptyState = document.getElementById("cart-empty");
  const cartContent = document.getElementById("cart-content");
  if (!cartItems) return;

  if (cart.length === 0) {
    emptyState && (emptyState.style.display = "flex");
    cartContent && (cartContent.style.display = "none");
    return;
  }
  emptyState && (emptyState.style.display = "none");
  cartContent && (cartContent.style.display = "grid");

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-row" data-id="${item.id}">
      <div class="cart-book-info">
        <div class="cart-cover" style="background:${item.color || "#1E3A5F"}">
          <span>${item.title.charAt(0)}</span>
        </div>
        <div class="cart-book-text">
          <h4>${item.title}</h4>
          <p>${item.author}</p>
        </div>
      </div>
      <div class="cart-price">₹${item.price}</div>
      <div class="cart-qty-control">
        <button onclick="changeQty(${item.id}, -1)" aria-label="Decrease">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${item.id}, 1)" aria-label="Increase">+</button>
      </div>
      <div class="cart-subtotal">₹${item.price * item.qty}</div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
      </button>
    </div>`).join("");

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  if (cartSummary) {
    cartSummary.innerHTML = `
      <h3 class="summary-title">Order Summary</h3>
      <div class="summary-lines">
        <div class="summary-line"><span>Subtotal (${cart.reduce((s, i) => s + i.qty, 0)} items)</span><span>₹${subtotal}</span></div>
        <div class="summary-line"><span>Shipping</span><span class="free-tag">Free</span></div>
        <div class="summary-line"><span>Tax (5%)</span><span>₹${tax}</span></div>
        <div class="summary-line total-line"><span>Total</span><span>₹${total}</span></div>
      </div>
      <button class="btn-primary btn-checkout" onclick="showCheckout()">
        Proceed to Checkout
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
      <a href="books.html" class="btn-secondary btn-continue">Continue Shopping</a>`;
  }
}

function changeQty(bookId, val_book) {
  const cart = getCart();
  const item = cart.find(i => i.id === bookId);
  if (!item) return;
  item.qty += val_book;
  if (item.qty <= 0) {
    cart.splice(cart.indexOf(item), 1);
  }
  saveCart(cart);
  renderCartPage();
}

function removeFromCart(bookId) {
  const cart = getCart().filter(i => i.id !== bookId);
  saveCart(cart);
  renderCartPage();
}

function showCheckout() {
  document.getElementById("cart-section")?.style.setProperty("display", "none");
  const checkout = document.getElementById("checkout-section");
  if (checkout) {
    checkout.style.display = "block";
    checkout.scrollIntoView({ behavior: "smooth" });
  }
}

function submitOrder(e) {
  e.preventDefault();
  const form = document.getElementById("checkout-form");
  const inputs = form.querySelectorAll("input, textarea, select");
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) { input.classList.add("error"); valid = false; }
    else input.classList.remove("error");
  });
  if (!valid) { showToast("Please fill in all required fields"); return; }

  // Clear cart
  localStorage.removeItem("Pustak_cart");
  updateCartBadge();

  // Show success
  document.getElementById("checkout-section").style.display = "none";
  document.getElementById("order-success").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartPage();
  const form = document.getElementById("checkout-form");
  form?.addEventListener("submit", submitOrder);

  // Live validation
  form?.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", () => {
      if (input.value.trim()) input.classList.remove("error");
    });
  });
});