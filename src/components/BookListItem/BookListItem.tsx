import { Book } from "../../domain/book";

export interface BookListItemProps {
  books: Book[];
}

const BookListItem: React.FC<BookListItemProps> = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <div>
          <img src={book.cover} alt="book cover" className="bookCover" />
          <h2>{book.title}</h2>
          <h3>{book.subtitle}</h3>
          <div>by {book.author}</div>
        </div>
      ))}
    </>
  );
};

export default BookListItem;
