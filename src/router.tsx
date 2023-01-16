import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AboutScreen, BooksScreen } from "./screens";
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
    ],
  },
]);
