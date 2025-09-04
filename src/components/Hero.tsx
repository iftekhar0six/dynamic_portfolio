import React from 'react';
import { User, MapPin, Phone, Mail, Download, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const resumePath = '/Iftekhar Resume.pdf';
  const bannerImage = '/Banner_Model_1.png';

  return (
    <section id="hero" className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                Software Developer
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Md. Iftekharali J. Ansari
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Full Stack Web Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Web Developer with expertise in Node.js, React, Prisma ORM, PostgreSQL, and MongoDB, 
                experienced in both microservices and monolithic architectures.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>+91 94088 96800</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <a href="mailto:iftekhar0six@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  iftekhar0six@gmail.com
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href={resumePath}
                download
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
              <a 
                href="https://github.com/iftekhar0six" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={bannerImage} 
                alt="Profile Banner"
                className="w-80 h-80 object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-800/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
