import React from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  toggleTheme,
}) => {
  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-6 right-6 z-50 p-3 
        bg-white dark:bg-gray-800 
        rounded-full shadow-lg border border-gray-200 dark:border-gray-700 
        transition-all duration-500 ease-in-out 
        hover:scale-110 hover:shadow-blue-300/50 dark:hover:shadow-blue-900/50 
        active:scale-95
        group
      "
    >
      <div
        className="
          relative flex items-center justify-center 
          transition-transform duration-700 ease-out
          group-hover:rotate-12
        "
      >
        {isDarkMode ? (
          <Sun
            className="
              w-6 h-6 text-yellow-400 animate-spin-slow 
              drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]
              transition-transform duration-700
            "
          />
        ) : (
          <Moon
            className="
              w-6 h-6 text-gray-600 dark:text-gray-300 
              animate-float
              drop-shadow-[0_0_6px_rgba(148,163,184,0.3)]
              transition-transform duration-700
            "
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
