import { FirstComponent, SecondComponent } from "./MyComponents";

function BookList({ name, usedBy, list }) {
  const books = ["Harry Potter", "Lord of the Rings", "The Hobbit"];

  return (
    <>
      <p>List of Books</p>
      <p>{name}</p>
      <p>Used by: {usedBy}</p>

      <FirstComponent />
      <SecondComponent />

      <div>
        Following are the list of books:
        <ul>
          {list.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BookList;