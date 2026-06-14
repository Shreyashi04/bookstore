document.addEventListener("DOMContentLoaded", () => {
  // Generate order number for success screen
  const orderNum = "FOL-" + Date.now().toString().slice(-8);
  const el = document.getElementById("order-num");
  if (el) el.textContent = "Order #" + orderNum;

  // Hamburger
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger?.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
  });
});