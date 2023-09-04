import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import TitleAndText from "../TitleAndText/TitleAndText";

const ThemeSwitcher: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, setTheme } = context;
  const handelChangeModeButton = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <TitleAndText />
      <button onClick={handelChangeModeButton}>Change mode</button>
    </div>
  );
};
export default ThemeSwitcher;
