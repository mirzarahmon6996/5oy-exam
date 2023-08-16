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

let count = localStorage.getItem("count") || [];

countElement.textContent = count;

userBtn.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
  localStorage.setItem("count", count);
});
