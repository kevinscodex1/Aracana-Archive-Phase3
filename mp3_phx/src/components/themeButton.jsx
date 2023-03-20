import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import useDarkMode from "./useDarkMode";
const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <SunIcon className="h-8 w-8 my-16  sidebar-icon" />
      ) : (
        <MoonIcon className="h-8 w-8 my-16  sidebar-icon" />
      )}
    </span>
  );
};
export default ThemeIcon;
