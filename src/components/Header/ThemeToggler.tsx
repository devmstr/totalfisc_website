"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = ({ sticky }: { sticky: boolean }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white"
    >
      {isDark ? (
        <Sun className={`h-[22px] w-[22px] text-white`} />
      ) : (
        <Moon
          className={`h-[22px] w-[22px] ${!sticky ? "text-white" : "text-primary"}`}
        />
      )}
    </button>
  );
};

export default ThemeToggler;
