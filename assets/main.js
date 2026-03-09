const bookPages = [
  "book1.html",
  "book2.html",
  "book3.html",
  "book4.html",
  "book5.html",
  "book6.html",
  "book7.html",
  "book8.html",
];

const book_cards = document.querySelectorAll(".book-card");
const header = document.querySelector(".header");

header.style.cursor = "pointer";
header.addEventListener("click", () => {
  window.location.href = "index.html";
});

book_cards.forEach((card, i) => {
  if (bookPages[i]) {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      window.location.href = bookPages[i];
    });
  }
});
