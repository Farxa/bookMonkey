import { Book } from "../../domain/book";
import BookListItem from "../BookListItem/BookListItem";

interface BookListProps {
  books: Book[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </>
  );
};
