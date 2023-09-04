import { useContext } from "react";
import { TextContext } from "../../Contexts/TextContext";
import Father from "../Father/Father";

const Grandpa: React.FC = () => {
  const context = useContext(TextContext);
  if (!context) return null;
  // const { text } = context;

  return (
    <>
      {/* <div>Text: {text?.text}</div> */}
      <Father />
    </>
  );
};
export default Grandpa;
