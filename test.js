let books = [
  { name: "The Alchemist", author: "Paulo Coelho", bookId: "A1", price: 10 },
  { name: "The Alchemist2", author: "Paulo Coelho", bookId: "A3", price: 20 },
  { name: "The Alchemist3", author: "Paulo Coelho", bookId: "A2", price: 20 },
];

const updatedBooks = books.filter((b) => {
  return b.bookId !== "A2";
});
console.log(updatedBooks);
console.log(books);
books = updatedBooks;
console.log(books);
