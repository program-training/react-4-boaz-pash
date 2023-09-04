import React, { createContext, useState } from "react";

 export type TextData = {
  text: string;
};
type TextContextProviderProps = {
  children: React.ReactNode;
};
type TextContextType = {
  text: TextData | null;
  setText: React.Dispatch<React.SetStateAction<TextData | null>>;
};

export const TextContext = createContext<TextContextType | null>(null);

const TextContextProvider: React.FC<TextContextProviderProps> = (props) => {
  const [text, setText] = useState<TextData | null>({ text: "Hello world" });
  return (
    <TextContext.Provider value={{ text, setText }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default TextContextProvider;
