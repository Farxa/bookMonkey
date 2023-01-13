import React, { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { BookList } from "./components/BookList/BookList";
import { fetchBooks, Book } from "./domain/book";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks()
      .then((books) => setBooks(books))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <AppHeader title="BookMonkey" />
      <BookList books={books} />
    </div>
  );
}

export default App;
