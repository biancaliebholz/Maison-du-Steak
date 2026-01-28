function categoryStartTemplate(categoryName) {
  return `
    <section class="menu-category" id="${categoryName.toLowerCase()}">
      <h2>${categoryName}</h2>
      <div class="menu-items">
  `;
}

function categoryEndTemplate() {
  return `
      </div>
    </section>
  `;
}

//IF/ELSE KURZSCHREIBWIESE !!!BEDINGUNG ? WENN_TRUE : WENN_FALSE !!! 
function menuItemTemplate(item, index) {
  const weightHtml = item.weight_g ? `<p>${item.weight_g} g</p>` : "";
  const volumeHtml = item.volume_l ? `<p>${item.volume_l} l</p>` : "";

  return `
    <article class="menu-item">
      <header class="menu-item-header">
        <h3 class="menu-item-title">${item.name}</h3>
        <div class="menu-item-price">${item.price.toFixed(2)} €</div>
      </header>

      <p class="menu-item-desc">${item.description}</p>

      <div class="menu-item-meta-row">
        ${weightHtml}
        ${volumeHtml}
      </div>

      <button class="menu-add" type="button" onclick="addToCart(${index})">
        Add +
      </button>
    </article>
  `;
}

function cartItemTemplate(menuItem, cartItem, cartIndex) {
  return `
    <div class="cart-item">
      <h3>${menuItem.name}</h3>

      <div class="cart-row">
        <span>${cartItem.qty} x ${menuItem.price.toFixed(2)} €</span>
        <strong>${(menuItem.price * cartItem.qty).toFixed(2)} €</strong>
      </div>

      <textarea
        class="cart-note"
        placeholder="Anmerkung (z.B. Medium Rare ...)"
        oninput="updateCartNote(${cartIndex}, this.value)"
      >${cartItem.note}</textarea>

      <div class="cart-actions">
        <button class="cart-btn cart-btn-minus" type="button" onclick="decreaseQty(${cartIndex})">−</button>
        <button class="cart-btn cart-btn-plus" type="button" onclick="increaseQty(${cartIndex})">+</button>
        <button class="cart-btn cart-btn-remove" type="button" onclick="removeFromCart(${cartIndex})">Entfernen</button>
      </div>
    </div>
  `;
}
