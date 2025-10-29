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
    // 🧠 Load theme from localStorage or default to dark
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ease-in-out ${
        isDarkMode ? 'dark' : ''
      }`}
    >
      {/* 🌙 Theme Toggle Button (with animation) */}
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* 🧭 Navigation */}
      {/* <Navigation /> */}

      {/* 🌟 Main Content */}
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 animate-fade-in">
        <Hero />
        <About />
        <Experience />
        {/* <Projects /> */}
      </main>

      {/* 🦶 Footer */}
      <Footer />
    </div>
  );
};

export default App;
