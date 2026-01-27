
function checkout() {
  if (cart.length === 0) return;

  showSmoke(6000);
  showToast(6000);

  const cartEl = document.getElementById("cart");
  if (cartEl) cartEl.classList.remove("is-open");
  cart = [];
  renderCart();
}

function showSmoke(durationMs = 6000) {
  const smoke = document.getElementById("smoke");
  if (!smoke) return;

  smoke.classList.remove("is-on");
  void smoke.offsetWidth;
  smoke.classList.add("is-on");

  setTimeout(function () {
    smoke.classList.remove("is-on");
  }, durationMs);
}

function showToast(durationMs = 6000) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.classList.add("is-visible");

  if (toast._timer) clearTimeout(toast._timer);

  toast._timer = setTimeout(function () {
    hideToast();
  }, durationMs);
}

function hideToast() {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.classList.remove("is-visible");

  if (toast._timer) {
    clearTimeout(toast._timer);
    toast._timer = null;
  }
}