import "./AppHeader.css";

interface AppHeaderProps {
  title: string;
}
const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  return <h1 className="title">{title}</h1>;
};

export default AppHeader;
