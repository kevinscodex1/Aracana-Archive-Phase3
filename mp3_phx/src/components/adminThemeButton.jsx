import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import useDarkMode from "./useDarkMode";
const ThemeIconAdmin = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <SunIcon className="h-12 w-12 my-20 sidebar-icon absolute left-3.5 mode" />
      ) : (
        <MoonIcon className="h-12 w-12 my-20 sidebar-icon absolute left-3.5 mode" />
      )}
    </span>
  );
};
export default ThemeIconAdmin;
