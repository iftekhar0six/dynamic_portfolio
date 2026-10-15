
import React, { useState, useEffect } from 'react';

import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme ? storedTheme === 'dark' : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark', isDarkMode);

    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch {
      // The theme still works if storage is unavailable.
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className="
        min-h-screen
        overflow-x-clip
        bg-stone-50
        text-stone-900
        transition-colors
        duration-500
        ease-in-out
        dark:bg-[#0B0F0E]
        dark:text-[#E8F0EB]
        motion-reduce:transition-none
      "
    >
      <ThemeToggle
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      {/* Navigation — currently disabled in your original code */}
      {/* <Navigation /> */}

      <main
        id="main-content"
        className="
          min-h-screen
          bg-transparent
          text-inherit
          motion-safe:animate-fade-in
        "
      >
        <Hero />
        <About />
        <Experience />

        {/* Projects — currently disabled in your original code */}
        {/* <Projects /> */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
