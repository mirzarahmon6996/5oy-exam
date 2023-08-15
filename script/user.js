const API = "https://api.escuelajs.co/api/v1/products";
const ID = +window.location.hash.replace("#", "");
const userBlock = document.querySelector("#user__block");
const avatar = document.querySelector("#images");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const userBtn = document.querySelector("#user__btn");
const countElement = document.querySelector("#count");
async function getInfo() {
  try {
    const response = await fetch(`${API}/${ID}`);
    const data = await response.json();
    if (data) {
      avatar.src = data.images;
      title.innerHTML = data.title;
      price.innerHTML = data.price;
      description.innerHTML = data.description;
      updatedAt.innerHTML = data.updatedAt;
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

getInfo();

function addToBasket(item) {
  fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => response.json())
    .then((updatedBasket) => {
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      console.log("Item added to basket:", item);
      console.log("Updated basket:", updatedBasket);
    })
    .catch((error) => {
      console.error("Error adding item to basket:", error);
    });
}

const item = {
  name: "Product 1",
  price: 9.99,
};

addToBasket(item);
