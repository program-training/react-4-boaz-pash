import { useContext } from "react";
import { TextContext } from "../../Contexts/TextContext";

const Child: React.FC = () => {
  const context = useContext(TextContext);
  if (!context) return null;
  const { text } = context;

  return (
    <>
    <h1>{text?.text}</h1>
    </>
  );
};
export default Child;
