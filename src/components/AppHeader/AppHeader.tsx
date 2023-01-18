import "./AppHeader.css";
import ModernMonkeyUnLogo from "../../assets/ModernMonkeyUnLogo.png";
import { MyContext } from "../../domain/theme";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

interface AppHeaderProps {
  title: string;
}
const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  const theme = useContext(MyContext);
  return (
    <>
      <h1 style={{ color: theme.primaryColor }}>{title}</h1>
      <img src={ModernMonkeyUnLogo} alt="app logo" />
      <div>
        <h3>
          <NavLink to="/about" style={{ margin: "30px" }}>
            About
          </NavLink>
          <NavLink to="/" style={{ margin: "30px" }}>
            Home Page
          </NavLink>
          <NavLink to="/counter">Counter</NavLink>
        </h3>
      </div>
    </>
  );
};

export default AppHeader;
