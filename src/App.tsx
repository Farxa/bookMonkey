import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { ThemeEditor } from "./components/ThemeEditor";

import { MyContext } from "./domain/theme";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  const [primaryColor, setPrimaryColor] = useState("tomato");
  return (
    <Provider store={store}>
      <MyContext.Provider value={{ primaryColor, setPrimaryColor }}>
        <div className="App">
          <ThemeEditor />
          <AppHeader title="BookMonkey" />
          <Outlet />
        </div>
      </MyContext.Provider>
    </Provider>
  );
}

export default App;
