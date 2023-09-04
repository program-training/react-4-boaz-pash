import { createContext, useState } from "react";

export type Mode = "dark" | "light";
type ThemeContextType = {
  theme: Mode | null;
  setTheme: React.Dispatch<React.SetStateAction<Mode | null>>;
};
type ThemeContextProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider: React.FC<ThemeContextProps> = (props) => {
  const [theme, setTheme] = useState<Mode | null>("dark");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};
export default ThemeContextProvider;
