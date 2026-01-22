

const DONENESS_OPTIONS = [
  { value: "rare", label: "Rare (englisch)" },
  { value: "medium_rare", label: "Medium Rare" },
  { value: "medium", label: "Medium" },
  { value: "well_done", label: "Well Done (durch)" }
];

const menu = [
 
  {
    id: "st-001",
    category: "Steaks",
    name: "Filet de Bœuf",
    subtitle: "220g",
    description: "Tender cut · butterzart · purer Fleischgeschmack.",
    price: 34.9,
    weight_g: 220,
    tags: ["premium", "glutenfrei"],
    options: { doneness: DONENESS_OPTIONS },
    img: ""
  },
  {
    id: "st-002",
    category: "Steaks",
    name: "Entrecôte Prime",
    subtitle: "320g",
    description: "Intense marbling · saftig · voller Charakter.",
    price: 39.9,
    weight_g: 320,
    tags: ["signature", "glutenfrei"],
    options: { doneness: DONENESS_OPTIONS },
    img: ""
  },
  {
    id: "st-003",
    category: "Steaks",
    name: "Rump Steak Signature",
    subtitle: "280g",
    description: "Classic cut · rich aroma · Steakhouse-Standard.",
    price: 33.9,
    weight_g: 280,
    tags: ["classic", "glutenfrei"],
    options: { doneness: DONENESS_OPTIONS },
    img: ""
  },
  {
    id: "st-004",
    category: "Steaks",
    name: "Bavette d’Aloyau",
    subtitle: "300g",
    description: "Herb marinade · sliced finish · kräftig aromatisch.",
    price: 34.5,
    weight_g: 300,
    tags: ["mariniert"],
    options: { doneness: DONENESS_OPTIONS },
    img: ""
  },
  {
    id: "st-005",
    category: "Steaks",
    name: "Côte de Bœuf Dry Aged",
    subtitle: "950g (pour deux)",
    description: "Bone-in · 28 days aged · deep umami.",
    price: 89.0,
    weight_g: 950,
    tags: ["dry-aged", "to-share", "premium"],
    options: { doneness: DONENESS_OPTIONS },
    img: ""
  },
  {
    id: "st-006",
    category: "Steaks",
    name: "T-Bone Grande",
    subtitle: "780g",
    description: "Filet & strip in one cut · ideal zum Teilen.",
    price: 79.0,
    weight_g: 780,
    tags: ["to-share", "premium"],
    options: { doneness: DONENESS_OPTIONS },
    img: ""
  },
  {
    id: "st-007",
    category: "Steaks",
    name: "Wagyu Sélection",
    subtitle: "160g",
    description: "Highly marbled · melt-in-mouth · bewusst kleine Portion.",
    price: 54.0,
    weight_g: 160,
    tags: ["ultra-premium", "glutenfrei"],
    options: { doneness: DONENESS_OPTIONS },
    img: ""
  },


  {
    id: "sa-001",
    category: "Salate",
    name: "Salade de Jeunes Pousses",
    description: "Seasonal leaves · house vinaigrette · roasted seeds.",
    price: 11.5,
    tags: ["leicht", "vegetarisch"],
    img: ""
  },
  {
    id: "sa-002",
    category: "Salate",
    name: "Roquette & Parmigiano",
    description: "Citron olive oil · pine nuts · fein & frisch.",
    price: 13.5,
    tags: ["vegetarisch"],
    img: ""
  },
  {
    id: "sa-003",
    category: "Salate",
    name: "Tomates & Burrata",
    description: "Basilic oil · fleur de sel · cremig & elegant.",
    price: 15.9,
    tags: ["vegetarisch", "edel"],
    img: ""
  },
  {
    id: "sa-004",
    category: "Salate",
    name: "Betterave & Chèvre Chaud",
    description: "Walnuts · honey glaze · erdig-süß & aromatisch.",
    price: 16.5,
    tags: ["vegetarisch"],
    img: ""
  },

 
  {
    id: "si-001",
    category: "Beilagen",
    name: "Frites Maison – Coupe Steakhouse",
    description: "House cut · doppelt frittiert · Kräutersalz.",
    price: 6.9,
    tags: ["hausgemacht"],
    img: ""
  },
  {
    id: "si-002",
    category: "Beilagen",
    name: "Frites Truffe & Parmigiano",
    description: "Trüffel · Parmigiano · luxuriöser Crunch.",
    price: 9.9,
    tags: ["edel", "bestseller"],
    img: ""
  },
  {
    id: "si-003",
    category: "Beilagen",
    name: "Pommes de Terre au Romarin",
    description: "Oven roasted · Rosmarin · Meersalz.",
    price: 7.9,
    tags: ["classic"],
    img: ""
  },
  {
    id: "si-004",
    category: "Beilagen",
    name: "Gratin Dauphinois",
    description: "Cremig geschichtet · Käsekruste · Gold Style.",
    price: 9.9,
    tags: ["comfort", "edel"],
    img: ""
  },
  {
    id: "si-005",
    category: "Beilagen",
    name: "Champignons Sautés à l’Ail",
    description: "Knoblauch · Petersilie · butterig-aromatisch.",
    price: 8.9,
    tags: ["glutenfrei"],
    img: ""
  },
  {
    id: "si-006",
    category: "Beilagen",
    name: "Asperges Vertes Grillées",
    description: "Zitrone · Butter · Salzflocken.",
    price: 10.9,
    tags: ["glutenfrei", "edel"],
    img: ""
  },
  {
    id: "si-007",
    category: "Beilagen",
    name: "Épinards Baby au Beurre",
    description: "Kurz sautiert · leichtes Butter-Finish.",
    price: 8.9,
    tags: ["glutenfrei"],
    img: ""
  },

  
  {
    id: "di-001",
    category: "Dips & Saucen",
    name: "Sauce Béarnaise",
    description: "Estragon · butterig · fein säuerlich.",
    price: 3.9,
    tags: ["klassiker"],
    img: ""
  },
  {
    id: "di-002",
    category: "Dips & Saucen",
    name: "Sauce au Poivre Vert (Cognac)",
    description: "Grüner Pfeffer · Rahm · Cognac-Note.",
    price: 3.9,
    tags: ["signature"],
    img: ""
  },
  {
    id: "di-003",
    category: "Dips & Saucen",
    name: "Jus de Vin Rouge & Échalotes",
    description: "Reduziert · intensiv · Schalotten.",
    price: 4.2,
    tags: ["edel"],
    img: ""
  },
  {
    id: "di-004",
    category: "Dips & Saucen",
    name: "Chimichurri aux Herbes Fraîches",
    description: "Kräuter · Knoblauch · Olivenöl · lebendig.",
    price: 3.7,
    tags: ["frisch"],
    img: ""
  },
  {
    id: "di-005",
    category: "Dips & Saucen",
    name: "Beurre Café de Paris",
    description: "Würzbutter · Kräuter · perfekter Steak-Finish.",
    price: 3.9,
    tags: ["klassiker"],
    img: ""
  },
  {
    id: "di-006",
    category: "Dips & Saucen",
    name: "Aïoli à la Truffe",
    description: "Cremig · Trüffel · elegant zu Fries & Steak.",
    price: 4.2,
    tags: ["edel"],
    img: ""
  },

  {
    id: "dr-001",
    category: "Getränke",
    name: "Limonade Maison aux Agrumes",
    subtitle: "0,33l",
    description: "Zitrone · Limette · leichte Süße · prickelnd.",
    price: 4.9,
    tags: ["hausgemacht", "alkoholfrei"],
    volume_l: 0.33,
    img: ""
  },
  {
    id: "dr-002",
    category: "Getränke",
    name: "Ginger Lime Fizz",
    subtitle: "0,33l",
    description: "Ingwer · Limette · Soda · erwachsen frisch.",
    price: 5.2,
    tags: ["signature", "alkoholfrei"],
    volume_l: 0.33,
    img: ""
  },
  {
    id: "dr-003",
    category: "Getränke",
    name: "Thé Glacé Maison à la Pêche",
    subtitle: "0,33l",
    description: "Schwarztee · Pfirsich · nicht zu süß.",
    price: 5.0,
    tags: ["hausgemacht", "alkoholfrei"],
    volume_l: 0.33,
    img: ""
  },
  {
    id: "dr-004",
    category: "Getränke",
    name: "Eau Infusée Concombre & Menthe",
    subtitle: "0,5l",
    description: "Infused water · clean & light.",
    price: 4.5,
    tags: ["alkoholfrei"],
    volume_l: 0.5,
    img: ""
  },
  {
    id: "dr-005",
    category: "Getränke",
    name: "Vin Rouge Sélection",
    subtitle: "0,2l",
    description: "Rotwein im Glas · passend zu kräftigen Cuts.",
    price: 8.9,
    tags: ["alkohol"],
    volume_l: 0.2,
    img: ""
  },
  {
    id: "dr-006",
    category: "Getränke",
    name: "Vin Blanc Sélection",
    subtitle: "0,2l",
    description: "Weißwein im Glas · frisch & elegant.",
    price: 8.5,
    tags: ["alkohol"],
    volume_l: 0.2,
    img: ""
  },
  {
    id: "dr-007",
    category: "Getränke",
    name: "Bière Artisanale Signature",
    subtitle: "0,33l",
    description: "Craft beer · eine kuratierte Sorte.",
    price: 5.9,
    tags: ["alkohol"],
    volume_l: 0.33,
    img: ""
  }
];

function initBurgerMenu() {
  const toggleBtn = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  toggleBtn.addEventListener("click", function () {

    if (navLinks.classList.contains("is-open")) {
      navLinks.classList.remove("is-open");
    } else {
      navLinks.classList.add("is-open");
    }

  });
}

initBurgerMenu();