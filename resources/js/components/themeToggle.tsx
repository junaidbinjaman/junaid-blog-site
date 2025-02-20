import {MdDarkMode, MdOutlineLightMode} from "react-icons/md";

export default function ThemeToggle() {

    const switchToDarkMode = () => {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    }

    const switchToLightMode = () => {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');

    }

    return (
        <div className="">
            <button
                type="button"
                className="hs-dark-mode group flex h-10 w-10 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light hs-dark-mode-active:hidden dark:text-gray-400 dark:hover:text-gray-500"
                onClick={switchToDarkMode}
            >
                <MdOutlineLightMode/>
            </button>
            <button
                type="button"
                className="hs-dark-mode group hidden h-10 w-10 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light hs-dark-mode-active:flex dark:text-[#FD7E41] dark:hover:bg-dark dark:hover:text-[#FD7E41]"
                onClick={switchToLightMode}
            >
                <MdDarkMode/>
            </button>
        </div>
    )
}
