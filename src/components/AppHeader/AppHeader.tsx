import "./AppHeader.css";
import ModernMonkeyUnLogo from "../../assets/ModernMonkeyUnLogo.png";
import { MyContext } from "../../domain/theme";
import { useContext } from "react";

interface AppHeaderProps {
  title: string;
}
const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  const theme = useContext(MyContext);
  return (
    <>
      <h1 style={{ color: theme.primaryColor }}>{title}</h1>;
      <img src={ModernMonkeyUnLogo} alt="app logo" />;
    </>
  );
};

export default AppHeader;
