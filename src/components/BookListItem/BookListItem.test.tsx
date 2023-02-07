import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import BookListItem from "./BookListItem";
import { Book } from "../../domain/book";

describe("components/BookListItem", () => {
  // mock the book
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

  // test case
  test("renders a book", () => {
    // render the BookListItem
    render(<BookListItem book={book} />, {
      // Define router as wrapper so that Jest can render the `Link` component from `react-router-dom`
      wrapper: MemoryRouter,
    });
  });
  expect(screen.getByText(book.title)).toBeTruthy();
});
