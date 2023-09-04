import "./App.css";
import TextContextProvider from "./Contexts/TextContext";
import ThemeContextProvider from "./Contexts/ThemeContext";
import Grandpa from "./components/Grandpa/Grandpa";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

function App() {
  return (
    <div >
      <TextContextProvider>
        <Grandpa />
      </TextContextProvider>
      <ThemeContextProvider>
        <ThemeSwitcher />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
