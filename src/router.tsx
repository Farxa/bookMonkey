import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AboutScreen, BookDetailScreen, BooksScreen } from "./screens";
import { BookEditScreen } from "./screens/BookEditScreen";
import { CounterScreen } from "./screens/CounterScreen";
import { ErrorScreen } from "./screens/ErrorScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "",
        element: <BooksScreen />,
      },
      {
        path: "about",
        element: <AboutScreen />,
      },
      {
        path: "/books/:isbn",
        element: <BookDetailScreen />,
      },
      {
        path: "/books/:isbn/edit",
        element: <BookEditScreen />,
      },
      {
        path: "counter",
        element: <CounterScreen />,
      },
    ],
  },
]);
