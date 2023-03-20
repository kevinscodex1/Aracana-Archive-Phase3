import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import useDarkMode from "./useDarkMode";
const ThemeIcon2 = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                <SunIcon className="h-6 w-6 mt-5 mx-1.5 sidebar-icon" />
            ) : (
                <MoonIcon className="h-6 w-6 mt-5 mx-1.5 sidebar-icon" />
            )}
        </span>
    );
};
export default ThemeIcon2;
