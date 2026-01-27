function renderMenu() {
  const menuCard = document.getElementById("menu_card");
  menuCard.innerHTML = "";

  const categories = getCategories();

  for (let i = 0; i < categories.length; i++) {
    const categoryName = categories[i];
    menuCard.innerHTML += renderCategory(categoryName);
  }
}

function getCategories() {
  const categories = [];

  for (let i = 0; i < menu.length; i++) {
    const cat = menu[i].category;
    if (!categories.includes(cat)) categories.push(cat);
  }

  return categories;
}

function renderCategory(categoryName) {
  let html = "";
  html += categoryStartTemplate(categoryName);

  const items = getItemsByCategory(categoryName);

  for (let i = 0; i < items.length; i++) {
    const itemIndex = items[i].index; 
    const item = items[i].item;
    html += menuItemTemplate(item, itemIndex);
  }

  html += categoryEndTemplate();
  return html;
}

function getItemsByCategory(categoryName) {
  const result = [];

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].category === categoryName) {
      result.push({ item: menu[i], index: i });
    }
  }

  return result;
}

let cart = [];

function renderCart() {
  const cartItemsEl = document.getElementById("cart_items");
  const totalEl = document.getElementById("cart_total");
  const totalHandleEl = document.getElementById("cart_total_handle");

  cartItemsEl.innerHTML = "";

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const menuItem = menu[cartItem.menuIndex];

    total += menuItem.price * cartItem.qty;

    cartItemsEl.innerHTML += cartItemTemplate(menuItem, cartItem, i);
  }

  totalEl.textContent = total.toFixed(2) + " €";
  if (totalHandleEl) totalHandleEl.textContent = total.toFixed(2) + " €";
}

window.addToCart = function (menuIndex) {
  let existingIndex = -1;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].menuIndex === menuIndex) {
      existingIndex = i;
      break;
    }
  }

  if (existingIndex === -1) {
    cart.push({ menuIndex: menuIndex, qty: 1, note: "" });
  } else {
    cart[existingIndex].qty++;
  }

  renderCart();
};

updateCartNote = function (cartIndex, value) {
  cart[cartIndex].note = value;
};

increaseQty = function (cartIndex) {
  cart[cartIndex].qty++;
  renderCart();
};

decreaseQty = function (cartIndex) {
  cart[cartIndex].qty--;
  if (cart[cartIndex].qty <= 0) cart.splice(cartIndex, 1);
  renderCart();
};

removeFromCart = function (cartIndex) {
  cart.splice(cartIndex, 1);
  renderCart();
};

