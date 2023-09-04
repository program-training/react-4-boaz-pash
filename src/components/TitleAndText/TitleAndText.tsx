import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import "./TitleAndText.css";
const TitleAndText: React.FC = () => {
  const [mode, setMode] = useState<string | undefined>("dark");
  const context = useContext(ThemeContext);
  useEffect(() => {
    const handelMode = () => {
      if (!context) return null;
      const { theme } = context;
      setMode(theme?.toString());
    };
    handelMode();
  }, [context]);
  console.log(mode);

  return (
    <div className={mode}>
      <h1>Title</h1>
      <p>paragraph</p>
    </div>
  );
};
export default TitleAndText;
