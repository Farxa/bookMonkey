import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BookListItem from "./components/BookListItem/BookListItem";
import { exampleBooks } from "./domain/book";

function App() {
  const sum = (num1: number, num2: number) => num1 + num2;
  console.log(sum(2, 7));
  return (
    <div className="App">
      <AppHeader title="BookMonkey" />
      <BookListItem books={exampleBooks} />
    </div>
  );
}

export default App;
