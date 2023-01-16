import { createContext } from "react";
import { Theme } from "./Theme";

export const MyContext = createContext<Theme>({
  primaryColor: "blue",
  setPrimaryColor: () => {},
});
