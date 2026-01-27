
const menu = [
 
  {
    category: "Steaks",
    name: "Filet de Bœuf",
    description: "Tender cut · butterzart · purer Fleischgeschmack.",
    price: 34.9,
    weight_g: 220,
  },
  {
    category: "Steaks",
    name: "Entrecôte Prime",
    description: "Intense marbling · saftig · voller Charakter.",
    price: 39.9,
    weight_g: 320,
  },
  {
    category: "Steaks",
    name: "Rump Steak Signature",
    description: "Classic cut · rich aroma · Steakhouse-Standard.",
    price: 33.9,
    weight_g: 280,
  },
  {
    category: "Steaks",
    name: "Bavette d’Aloyau",
    description: "Herb marinade · sliced finish · kräftig aromatisch.",
    price: 34.5,
    weight_g: 300,
  },
  {
    category: "Steaks",
    name: "Côte de Bœuf Dry Aged",
    description: "Bone-in · 28 days aged · deep umami.",
    price: 89.0,
    weight_g: 950,
  },
  {
    category: "Steaks",
    name: "T-Bone Grande",
    description: "Filet & strip in one cut · ideal zum Teilen.",
    price: 79.0,
    weight_g: 780,
  },
  {
    category: "Steaks",
    name: "Wagyu Sélection",
    description: "Highly marbled · melt-in-mouth · bewusst kleine Portion.",
    price: 54.0,
    weight_g: 160,
  },


  {
    category: "Salate",
    name: "Salade de Jeunes Pousses",
    description: "Seasonal leaves · house vinaigrette · roasted seeds.",
    price: 11.5,
  },
  {
    category: "Salate",
    name: "Roquette & Parmigiano",
    description: "Citron olive oil · pine nuts · fein & frisch.",
    price: 13.5,
  },
  {
    category: "Salate",
    name: "Tomates & Burrata",
    description: "Basilic oil · fleur de sel · cremig & elegant.",
    price: 15.9,
  },
  {
    category: "Salate",
    name: "Betterave & Chèvre Chaud",
    description: "Walnuts · honey glaze · erdig-süß & aromatisch.",
    price: 16.5,
  },

 
  {
    category: "Beilagen",
    name: "Frites Maison – Coupe Steakhouse",
    description: "House cut · doppelt frittiert · Kräutersalz.",
    price: 6.9,
  },
  {
    category: "Beilagen",
    name: "Frites Truffe & Parmigiano",
    description: "Trüffel · Parmigiano · luxuriöser Crunch.",
    price: 9.9,
  },
  {
    id: "si-003",
    category: "Beilagen",
    name: "Pommes de Terre au Romarin",
    description: "Oven roasted · Rosmarin · Meersalz.",
    price: 7.9,
  },
  {
    category: "Beilagen",
    name: "Gratin Dauphinois",
    description: "Cremig geschichtet · Käsekruste · Gold Style.",
    price: 9.9,
  },
  {
    category: "Beilagen",
    name: "Champignons Sautés à l’Ail",
    description: "Knoblauch · Petersilie · butterig-aromatisch.",
    price: 8.9,
  },
  {
    category: "Beilagen",
    name: "Asperges Vertes Grillées",
    description: "Zitrone · Butter · Salzflocken.",
    price: 10.9,
  },
  {
    category: "Beilagen",
    name: "Épinards Baby au Beurre",
    description: "Kurz sautiert · leichtes Butter-Finish.",
    price: 8.9,
  },

  
  {
    category: "Sauces",
    name: "Sauce Béarnaise",
    description: "Estragon · butterig · fein säuerlich.",
    price: 3.9,
  },
  {
    category: "Sauces",
    name: "Sauce au Poivre Vert (Cognac)",
    description: "Grüner Pfeffer · Rahm · Cognac-Note.",
    price: 3.9,
  },
  {
    category: "Sauces",
    name: "Jus de Vin Rouge & Échalotes",
    description: "Reduziert · intensiv · Schalotten.",
    price: 4.2,
  },
  {
    category: "Sauces",
    name: "Chimichurri aux Herbes Fraîches",
    description: "Kräuter · Knoblauch · Olivenöl · lebendig.",
    price: 3.7,
  },
  {
    category: "Sauces",
    name: "Beurre Café de Paris",
    description: "Würzbutter · Kräuter · perfekter Steak-Finish.",
    price: 3.9,
  },
  {
    category: "Sauces",
    name: "Aïoli à la Truffe",
    description: "Cremig · Trüffel · elegant zu Fries & Steak.",
    price: 4.2,
  },

  {
    category: "Getränke",
    name: "Limonade Maison aux Agrumes",
    description: "Zitrone · Limette · leichte Süße · prickelnd.",
    price: 4.9,
    volume_l: 0.33,
  },
  {
    category: "Getränke",
    name: "Ginger Lime Fizz",
    description: "Ingwer · Limette · Soda · erwachsen frisch.",
    price: 5.2,
    volume_l: 0.33,
  },
  {
    category: "Getränke",
    name: "Thé Glacé Maison à la Pêche",
    description: "Schwarztee · Pfirsich · nicht zu süß.",
    price: 5.0,
    volume_l: 0.33,
  },
  {
    category: "Getränke",
    name: "Eau Infusée Concombre & Menthe",
    description: "Infused water · clean & light.",
    price: 4.5,
    volume_l: 0.5,
  },
  {
    category: "Getränke",
    name: "Vin Rouge Sélection",
    description: "Rotwein im Glas · passend zu kräftigen Cuts.",
    price: 8.9,
    volume_l: 0.2,
  },
  {
    category: "Getränke",
    name: "Vin Blanc Sélection",
    description: "Weißwein im Glas · frisch & elegant.",
    price: 8.5,
    volume_l: 0.2,
  },
  {
    category: "Getränke",
    name: "Bière Artisanale Signature",
    description: "Craft beer · eine kuratierte Sorte.",
    price: 5.9,
    volume_l: 0.33,
  }
];




function renderMenu() {
  const menuCard = document.getElementById("menu_card");
  menuCard.innerHTML = "";
  const categories = getCategories();

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const categoryInformation = renderCategoryInformation(category);
    menuCard.innerHTML += categoryInformation;
  }
}

function getCategories() {
  const categories = [];

  for (let i = 0; i < menu.length; i++) {
    const currentCategory = menu[i].category;

    if (!categories.includes(currentCategory)) {
      categories.push(currentCategory);
    }
  }

  return categories;
}


function renderCategoryInformation(categoryName) {
  let categoryInformationHtml = `
    <section class="menu-category" id="${categoryName.toLowerCase()}">
      <h2>${categoryName}</h2>
      <div class="menu-items">
  `;

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].category === categoryName) {
      categoryInformationHtml += renderMenuItem(menu[i], i);
    }
  }

  categoryInformationHtml += `
      </div>
    </section>
  `;

  return categoryInformationHtml;
}
function renderMenuItem(item, index) {
  let subtitleHtml = "";
  let weightHtml = "";
  let volumeHtml = "";


  if (item.weight_g) {
    weightHtml = `<p>${item.weight_g} g</p>`;
  } else {
    weightHtml = "";
  }

  if (item.volume_l) {
    volumeHtml = `<p>${item.volume_l} l</p>`;
  } else {
    volumeHtml = "";
  }

  return `
    <article class="menu-item">

      <header class="menu-item-header">
        <h3 class="menu-item-title">${item.name}</h3>
        <div class="menu-item-price">${item.price.toFixed(2)} €</div>
      </header>

      ${subtitleHtml}

      <p class="menu-item-desc">${item.description}</p>

      <div class="menu-item-meta-row">
        ${weightHtml}
        ${volumeHtml}
      </div>

      <button 
        class="menu-add" 
        type="button" 
        onclick="addToCart(${index})"
      >
        Add +
      </button>

    </article>
  `;
}
renderMenu();



let cart = [];

function addToCart(menuIndex) {
  const item = menu[menuIndex];

  
  let existingIndex = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].menuIndex === menuIndex) {
      existingIndex = i;
    }
  }

  if (existingIndex === -1) {
    cart.push({
      menuIndex: menuIndex,
      qty: 1,
      note: ""
    });
  } else {
    cart[existingIndex].qty = cart[existingIndex].qty + 1;
  }

  renderCart();
}

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

    cartItemsEl.innerHTML += `
      <div class="cart-item">
        <h3>${menuItem.name}</h3>

        <div class="cart-row">
          <span>${cartItem.qty} x ${menuItem.price.toFixed(2)} €</span>
          <strong>${(menuItem.price * cartItem.qty).toFixed(2)} €</strong>
        </div>

        <textarea
          class="cart-note"
          placeholder="Anmerkung (z.B. ohne Zwiebeln...)"
          oninput="updateCartNote(${i}, this.value)"
        >${cartItem.note}</textarea>

        <div class="cart-actions">
          <button class="cart-btn cart-btn-minus" type="button" onclick="decreaseQty(${i})">−</button>
          <button class="cart-btn cart-btn-plus" type="button" onclick="increaseQty(${i})">+</button>
          <button class="cart-btn cart-btn-remove" type="button" onclick="removeFromCart(${i})">Entfernen</button>
        </div>
      </div>
    `;
  }

  totalEl.textContent = total.toFixed(2) + " €";

  if (totalHandleEl) {
    totalHandleEl.textContent = total.toFixed(2) + " €";
  }
}

function updateCartNote(cartIndex, value) {
  cart[cartIndex].note = value;
}

function increaseQty(cartIndex) {
  cart[cartIndex].qty = cart[cartIndex].qty + 1;
  renderCart();
}

function decreaseQty(cartIndex) {
  cart[cartIndex].qty = cart[cartIndex].qty - 1;

  if (cart[cartIndex].qty <= 0) {
    cart.splice(cartIndex, 1);
  }

  renderCart();
}

function removeFromCart(cartIndex) {
  cart.splice(cartIndex, 1);
  renderCart();
}




function toggleCart() {
  const cart = document.getElementById("cart");
  if (!cart) return;

  if (cart.classList.contains("is-open")) {
    cart.classList.remove("is-open");
  } else {
    cart.classList.add("is-open");
  }
}

renderCart();