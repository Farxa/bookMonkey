import { Book } from "../../domain/book";
import "./ExampleBook.css";

const book: Book = {
  id: "1001606140805",
  title: "Java Web Scraping Handbook",
  subtitle: "Learn advanced Web Scraping techniques",
  isbn: "1001606140805",
  abstract:
    "Web scraping or crawling is the art of fetching data from a third party website by downloading and parsing the HTML code to extract the data you want. It can be hard. From bad HTML code to heavy Javascript use and anti-bot techniques, it is often tricky. Lots of companies use it to obtain knowledge ...",
  author: "Kevin Sahin",
  publisher: "Leanpub",
  price: "$0.00",
  numPages: 115,
  cover:
    "https://raw.githubusercontent.com/workshops-de/bookmonkey-api/master/public/covers/1001606140805.png",
};
const ExampleBook = () => {
  return (
    <div>
      <img src={book.cover} alt="book cover" className="bookCover" />
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <div>by {book.author}</div>
    </div>
  );
};

export default ExampleBook;
