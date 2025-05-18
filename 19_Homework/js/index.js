const productContainer = document.querySelector(".product-container");

async function fetchProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!res.ok) {
      throw new Error(`Error! Status: ${res.status}`);
    }
    const products = await res.json();
    console.log(products);
    render(products);
  } catch (err) {
    const errorEl = document.createElement("p");
    errorEl.innerText = err.message;
    productContainer.append(errorEl);
  }
}
fetchProducts();

const render = (array) => {
  array.forEach(({ title, category, images, price, description }) => {
    const cardElement = document.createElement("div");
    cardElement.style.border = "1px solid #ccc";
    cardElement.style.margin = "10px";
    cardElement.style.padding = "10px";
    cardElement.style.width = "300px";

    const titleElement = document.createElement("p");
    const categoryElement = document.createElement("p");
    const priceElement = document.createElement("p");
    const descriptionElement = document.createElement("p");
    descriptionElement.style.textAlign = "justify";
    titleElement.innerText = `Title: ${title}`;
    categoryElement.innerText = `Category: ${category.name}`;
    priceElement.innerText = `Price: ${price}`;
    descriptionElement.innerText = description;

    const imgContainer = document.createElement("div");
    images.forEach((imgEl) => {
      const imageElement = document.createElement("img");
      imageElement.src = imgEl;
      imageElement.alt = title;
      imgContainer.append(imageElement);
    });

    cardElement.append(
      imgContainer,
      titleElement,
      categoryElement,
      descriptionElement,
      priceElement
    );

    productContainer.append(cardElement);
  });
};
