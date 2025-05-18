import BookList from "./booklist";
import BooksFilter from "./BooksFilter";
import { useState } from "react";

function Books({ name, usedBy, children }) {
  const BooksList = ["Harry Potter", "Lord of the Rings", "The Hobbit"];
  const [newbooks, setnewBooks] = useState(BooksList); // fixed reference

  return (
    <>
      <p style={{ backgroundColor: "blue" }}>Book component.</p>
      {children}

      <BookList name={name} usedBy={usedBy} list={newbooks} />
      <BooksFilter list={newbooks} />
    </>
  );
}

export default Books;