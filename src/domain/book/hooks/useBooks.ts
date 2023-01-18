import { useCallback, useEffect, useState } from "react";
import { fetchBooks, Book } from "../../book";

export const useBooks = (url: string = "http://localhost:4730/books") => {
  const [books, setBooks] = useState<Book[]>([]); // === useState hook uses strict equality to compare the previous and next state.

  /**
   * useCallback hook is used to memoize the fetchData function. we do this in case the
   * fetchData function will be used several times
   * (e.g. inside useEffect and afterwords in fetchBooksNow )
   */
  const fetchData = useCallback(async () => {
    try {
      const books = await fetchBooks(url);
      if (books) {
        setBooks(books);
      }
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // === useEffect hook uses strict equality

  const fetchBooksNow = () => {
    fetchData();
  };

  return { books, fetchBooksNow };
};
