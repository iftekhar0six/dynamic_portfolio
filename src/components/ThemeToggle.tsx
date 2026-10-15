
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
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
      }
      aria-pressed={isDarkMode}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="
        group fixed right-4 top-4 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full
        border border-stone-200/80
        bg-white/85 text-emerald-700
        shadow-lg shadow-stone-900/5
        backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:scale-105 hover:border-emerald-500/50
        hover:shadow-lg hover:shadow-emerald-500/10
        active:scale-95
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-emerald-500
        focus-visible:ring-offset-2
        focus-visible:ring-offset-white
        dark:border-white/10
        dark:bg-[#19231E]/90 dark:text-emerald-300
        dark:shadow-black/20
        dark:hover:border-emerald-400/40
        dark:focus-visible:ring-offset-[#0B0F0E]
        md:right-6 md:top-6
        motion-reduce:transform-none
        motion-reduce:transition-none
      "
    >
      <span
        className="
          flex items-center justify-center
          transition-transform duration-300 ease-out
          group-hover:rotate-12
          motion-reduce:transition-none
        "
      >
        {isDarkMode ? (
          <Sun
            size={21}
            strokeWidth={1.8}
            className="
              text-amber-400
              drop-shadow-[0_0_7px_rgba(251,191,36,0.25)]
            "
            aria-hidden="true"
          />
        ) : (
          <Moon
            size={21}
            strokeWidth={1.8}
            className="
              text-emerald-700
              dark:text-emerald-300
            "
            aria-hidden="true"
          />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
