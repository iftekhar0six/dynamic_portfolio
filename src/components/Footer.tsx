import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left Section */}
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-900 dark:text-white">MD. Iftekharali J. Ansari</span> — All rights reserved.
          </p>

          {/* Right Section (Socials) */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/iftekhar0six"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/iftekharansari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
