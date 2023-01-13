import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { BookList } from "./components/BookList/BookList";
import { exampleBooks } from "./domain/book";

function App() {
  return (
    <div className="App">
      <AppHeader title="BookMonkey" />
      <BookList books={exampleBooks} />
    </div>
  );
}

export default App;
