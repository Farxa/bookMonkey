import { Book } from "./Book";

/**
 * Generic function to fetch any data from a given URL
 * If no URL is provided, it will default to the bookMonkey API
 */
export const fetchBooks = async (
  url: string = "http://localhost:4730/books"
): Promise<Book[] | undefined> => {
  try {
    const response = await fetch(url);
    const books: Book[] = await response.json();
    return books;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBook = async (isbn: string): Promise<Book | undefined> => {
  try {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    const book: Book = await response.json();
    return book;
  } catch (error) {
    console.error(error);
  }
};
