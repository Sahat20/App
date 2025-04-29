// Array of menu items
const menuItems = [
  { name: "Chicken Biryani", category: "Non-Veg", price: 250 },
  { name: "Mutton Biryani", category: "Non-Veg", price: 300 },
  { name: "Paneer Biryani", category: "Veg", price: 200 },
  { name: "Egg Biryani", category: "Non-Veg", price: 220 },
  { name: "Samosa", category: "Veg", price: 50 },
  { name: "Paneer Tikka", category: "Veg", price: 180 },
  { name: "Veg Pakora", category: "Veg", price: 120 },
  { name: "Chicken 65", category: "Non-Veg", price: 230 },
  { name: "Aloo Tikki", category: "Veg", price: 70 },
  { name: "Pani Puri (Golgappa)", category: "Veg", price: 60 },
  { name: "Tandoori Chicken", category: "Non-Veg", price: 300 },
  { name: "Chicken Seekh Kebab", category: "Non-Veg", price: 280 },
  { name: "Shami Kebab", category: "Non-Veg", price: 260 },
  { name: "Beef Shami Kebab", category: "Non-Veg", price: 270 },
  { name: "Malai Paneer Tikka", category: "Veg", price: 190 },
  { name: "Spring Rolls (Indian Style)", category: "Non-Veg", price: 150 },
  { name: "Chili Paneer", category: "Veg", price: 160 },
  { name: "Reshmi Kebab", category: "Non-Veg", price: 290 },
  { name: "Tandoori Momos", category: "Non-Veg", price: 180 },
  { name: "Chicken Momos", category: "Non-Veg", price: 170 },
  { name: "Veg Momos", category: "Veg", price: 150 },
  { name: "Butter Chicken", category: "Non-Veg", price: 320 },
  { name: "Chole Bhature", category: "Veg", price: 140 },
  { name: "Chole Bhature with Paneer", category: "Veg", price: 170 },
  { name: "Dal Makhani", category: "Veg", price: 180 },
  { name: "Paneer Butter Masala", category: "Veg", price: 210 },
  { name: "Naan", category: "Veg", price: 30 },
  { name: "Paratha", category: "Veg", price: 40 },
  { name: "Poori", category: "Veg", price: 50 },
  { name: "Roti", category: "Veg", price: 20 },
  { name: "Steamed Basmati Rice", category: "Veg", price: 100 },
  { name: "Jeera Rice", category: "Veg", price: 120 },
  { name: "Pulao", category: "Veg", price: 130 },
  { name: "Vegetable Pulao", category: "Veg", price: 140 },
  { name: "Vegetable Fried Rice", category: "Veg", price: 150 },
  { name: "Chicken Fried Rice", category: "Non-Veg", price: 170 },
  { name: "Kolkata Biryani (with Aloo)", category: "Veg", price: 230 },
  { name: "Kolkata Biryani (with Aloo)", category: "Non-Veg", price: 260 },
  { name: "Coconut Rice", category: "Veg", price: 120 },
  { name: "Gulab Jamun", category: "Desserts", price: 70 },
  { name: "Rasgulla", category: "Desserts", price: 80 },
  { name: "Jalebi", category: "Desserts", price: 60 },
  { name: "Sandesh", category: "Desserts", price: 90 },
  { name: "Lassi", category: "Beverages", price: 50 },
  { name: "Fresh Lime Soda", category: "Beverages", price: 40 },
  { name: "Coca-Cola", category: "Soft Drinks", price: 30 },
  { name: "Sprite", category: "Soft Drinks", price: 30 },
  { name: "Thums Up", category: "Soft Drinks", price: 30 },
  { name: "Fanta", category: "Soft Drinks", price: 30 },
  { name: "Limca", category: "Soft Drinks", price: 30 },
  { name: "RedBull", category: "Energy Drink", price: 110 },
  { name: "Orange Juice", category: "Juices", price: 60 },
  { name: "Apple Juice", category: "Juices", price: 70 },
  { name: "Mango Juice", category: "Juices", price: 70 },
  { name: "Jaljeera", category: "Traditional Indian Coolers", price: 50 },
  { name: "Aam Panna (Raw Mango Drink)", category: "Traditional Indian Coolers", price: 55 },
  { name: "Lassi (Sweet/Salted/Mango)", category: "Traditional Indian Coolers", price: 60 }
];

// Function to load menu items
function loadMenu() {
  const menuGrid = document.getElementById("menu-grid");
  menuGrid.innerHTML = "";

  menuItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Category: ${item.category}</p>
      <p>Price: ₹${item.price}</p>
    `;

    menuGrid.appendChild(div);
  });
}

// Function to filter the menu based on search input
function searchMenu() {
  const searchQuery = document.getElementById("search-bar").value.toLowerCase();
  const filteredMenu = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery)
  );

  const menuGrid = document.getElementById("menu-grid");
  menuGrid.innerHTML = "";

  if (filteredMenu.length === 0) {
    menuGrid.innerHTML = "<p>No results found</p>";
  } else {
    filteredMenu.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";

      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Category: ${item.category}</p>
        <p>Price: ₹${item.price}</p>
      `;

      menuGrid.appendChild(div);
    });
  }
}

// Load menu when page is ready
window.onload = function () {
  if (document.getElementById("menu-grid")) {
    loadMenu();
  }
};
























