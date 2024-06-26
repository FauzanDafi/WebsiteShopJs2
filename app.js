const openCart = document.querySelector(".box-cart");
const closeCart = document.querySelector(".close-cart");
const quantitys = document.querySelector(".count");
const cartMenu = document.querySelector(".cart-menu");
const boxItems = document.querySelector(".box-items");
const listCarts = document.querySelector(".listCarts");
const totalPrice = document.querySelector(".total");

openCart.addEventListener("click", () => {
  cartMenu.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartMenu.classList.remove("active");
});

let products = [
  {
    id: 1,
    image: "1.jpg",
    name: "sepatu 1",
    harga: 20000,
  },
  {
    id: 2,
    image: "2.jpg",
    name: "sepatu 2",
    harga: 26000,
  },
  {
    id: 3,
    image: "3.jpg",
    name: "sepatu 3",
    harga: 22500,
  },
  {
    id: 4,
    image: "4.jpg",
    name: "sepatu 4",
    harga: 22000,
  },
  {
    id: 5,
    image: "5.jpg",
    name: "sepatu 5",
    harga: 19000,
  },
  {
    id: 6,
    image: "6.jpg",
    name: "sepatu 6",
    harga: 15000,
  },
  {
    id: 7,
    image: "1.jpg",
    name: "sepatu 7",
    harga: 21000,
  },
  {
    id: 8,
    image: "4.jpg",
    name: "sepatu 8",
    harga: 18000,
  },
  {
    id: 9,
    image: "2.jpg",
    name: "sepatu 9",
    harga: 24000,
  },
];

let listItems = [];

const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("items");
    newDiv.innerHTML = `
    <img src="IMG/${value.image}">
    <h3>${value.name}</h3>
    <h4>${value.harga}</h4>
    <button onclick="addToCart(${key})">Add To Cart</button>
    `;

    boxItems.appendChild(newDiv);
  });
};

initApp();

const addToCart = (key) => {
  if (listItems[key] == null) {
    listItems[key] = JSON.parse(JSON.stringify(products[key]));
    listItems[key].quantity = 1;
  }
  reloadCart();
};

const reloadCart = () => {
  listCarts.innerHTML = "";
  let count = 0;
  let counts = 0;
  let harga = 0;

  listItems.forEach((value, key) => {
    harga = harga + value.harga;
    counts = counts + value.quantity;
    count = value.quantity;

    if (value != null) {
      let newList = document.createElement("li");
      newList.innerHTML = `
      <img src="IMG/${value.image}">
      <h4>${value.name}</h4>
      <h4>${value.harga}</h4>

      <div class="boxCounting">
      <button class="changeButton" onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
      <div>${count}</div>
      <button class="changeButton" onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
      `;

      listCarts.appendChild(newList);

      quantitys.innerText = counts;
      totalPrice.innerText = harga;
    }
  });
};

const changeQuantity = (key, quantity) => {
  if (listItems[key].quantity == 0) {
    delete listItems[key];
  } else {
    listItems[key].quantity = quantity;
    listItems[key].harga = quantity * products[key].harga;
  }

  reloadCart();
};

const updateCart = () => {};
