import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Book } from "../../domain/book";
import { Hideable } from "../../Hideable";

export interface BookListItemProps {
  book: Book;
}

const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  const [numLikes, setNumLikes] = useState(0);
  const isFree = book.price === "$0.00";
  const isLong = book.numPages > 500;
  const $ = book.price >= "$01.00" && book.price <= "$10.00";
  const $$ = book.price >= "$11.00" && book.price <= "$30.00";
  const $$$ = book.price >= "$31.00" && book.price <= "$999.00";
  const likeHandler = () => {
    setNumLikes(numLikes + 1);
  };

  return (
    <>
      <div>
        <img src={book.cover} alt="book cover" className="bookCover" />
        <h2 style={{ textDecoration: isFree ? "underline" : "none" }}>
          {isFree && <span>💰 </span>}
          {isLong && <span>📜 </span>}
          {$ && <span>$ </span>}
          {$$ && <span>$$ </span>}
          {$$$ && <span>$$$ </span>}
          {numLikes >= 5 && "⭐️"}
          {book.title}
        </h2>
        <h3>{book.subtitle}</h3>

        <div>by {book.author}</div>
        <NavLink to={`/books/${book.isbn}`} style={{ fontSize: "100px" }}>
          ...
        </NavLink>
        <Hideable>{book.abstract}</Hideable>
        <button onClick={likeHandler}>
          &#128079; {numLikes > 0 && `(${numLikes})`}
        </button>
      </div>
    </>
  );
};

export default BookListItem;
