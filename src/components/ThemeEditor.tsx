import { useContext } from "react";
import { MyContext } from "../domain/theme";

export const ThemeEditor = () => {
  const theme = useContext(MyContext);
  //   const clickHandler ()

  return (
    <div className="theme-editor">
      <button
        style={{
          background: "tomato",
          height: "30px",
          width: "30px",
          border: "none",
        }}
        onClick={() => {
          theme.setPrimaryColor("tomato");
        }}
      />
      <button
        style={{
          background: "steelblue",
          height: "30px",
          width: "30px",
          border: "none",
        }}
        onClick={() => {
          theme.setPrimaryColor("steelblue");
        }}
      />
    </div>
  );
};
