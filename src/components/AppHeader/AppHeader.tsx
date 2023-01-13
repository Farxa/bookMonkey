import "./AppHeader.css";
import ModernMonkeyUnLogo from "../../assets/ModernMonkeyUnLogo.png";

interface AppHeaderProps {
  title: string;
}
const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  // return <h1 className="title">{title}</h1>;
  return <img src={ModernMonkeyUnLogo} alt="" />;
};

export default AppHeader;
