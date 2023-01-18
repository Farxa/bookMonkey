import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Book, fetchBook } from "../domain/book";

export const BookDetailScreen: React.FC = () => {
  const [book, setBook] = useState<Book>();
  const { isbn } = useParams<{ isbn: string }>();

  useEffect(() => {
    if (isbn) {
      fetchBook(isbn).then((res) => {
        res && setBook(res);
      });
    }
  }, [isbn]);

  return (
    <div>
      <h3>{book?.subtitle}</h3>

      <div>by {book?.author}</div>
      <NavLink to={`/books/${book?.isbn}/edit`}>
        <button>Edit</button>
      </NavLink>
    </div>
  );
};
