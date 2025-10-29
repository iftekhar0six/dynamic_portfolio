import React from "react";
import { MapPin, Phone, Mail, Download, Github } from "lucide-react";

const Hero: React.FC = () => {
  const resumePath = "/Iftekhar_Ansari_WebDeveloper_Resume.pdf";
  const bannerImage = "/Banner_Model_1.png";

  return (
    <section
      id="hero"
      className="pt-24 pb-16 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            Software Development and Management
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Md. Iftekharali J. Ansari
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
            Full Stack Web Developer
          </p>
{/* 
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
             Turning ideas into scalable web apps          </p> */}

          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex justify-center lg:justify-start items-center space-x-3 text-gray-700 dark:text-gray-400">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
            <div className="flex justify-center lg:justify-start items-center space-x-3 text-gray-700 dark:text-gray-400">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>+91 94088 96800</span>
            </div>
            <div className="flex justify-center lg:justify-start items-center space-x-3 text-gray-700 dark:text-gray-400">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <a
                href="mailto:iftekhar0six@gmail.com"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                iftekhar0six@gmail.com
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <a
              href={resumePath}
              download
              aria-label="Download Resume"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>

            <a
              href="https://github.com/iftekhar0six"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile"
              className="inline-flex items-center justify-center space-x-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="p-1.5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500">
              <img
                src={bannerImage}
                alt="Md. Iftekharali J. Ansari"
                loading="lazy"
                className="w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 object-cover rounded-full border-4 border-white dark:border-gray-900 animate-float"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
