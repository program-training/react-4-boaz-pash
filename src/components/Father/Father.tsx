import { useContext, useState, useEffect } from "react";
import { TextContext } from "../../Contexts/TextContext";
import Child from "../Child/Child";

const Father: React.FC = () => {
  const [temp, setTemp] = useState<string | undefined>("");
  const context = useContext(TextContext);
  useEffect(() => {
    const handelContext = () => {
      if (!context) return null;
      const { text } = context;

      setTemp(text?.text);
    };
    handelContext();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!context) return null;
  const { setText } = context;
  const handelChangeTextInput: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setTemp(e.target.value);
  };
  return (
    <div>
      <Child />
      <form>
        <input
          type="text"
          value={temp}
          onChange={handelChangeTextInput}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (temp !== undefined) setText({ text: temp });
            setTemp("");
          }}
        >
          Change Text
        </button>
      </form>
    </div>
  );
};
export default Father;
