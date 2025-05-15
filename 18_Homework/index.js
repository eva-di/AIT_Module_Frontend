const bookContainer = document.getElementById("book-container");

fetch(" https://eva-di.github.io/-my-favorite-book/book.json")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((book) => {
    console.log(book);
    const { title, author, year } = book;

    const titleElement = document.createElement("p");
    titleElement.textContent = `Title: ${book.title}`;

    const authorEl = document.createElement("p");
    authorEl.textContent = `Author: ${book.author}`;
    
    const yearEl = document.createElement("p");
    yearEl.textContent = `Year: ${book.year}`;

    bookContainer.appendChild(titleElement);
    bookContainer.appendChild(authorEl);
    bookContainer.appendChild(yearEl);
  })
  .catch((err) => {
    console.log(err.message);
  });
