import React from 'react';

const experiences = [
  {
    company: "StepX Technologies",
    position: "Software Developer Intern",
    period: "Feb 2025 - Present",
    location: "Hyderabad",
    projects: [
      {
        name: "Triumph (Motorcycle Company)",
        description: "Built microservices-based modules including finance, expenses, vendors, sales, audit, and collections using Node.js, Prisma ORM, PostgreSQL, and React.",
        type: "Microservices"
      },
      {
        name: "Farmkart (E-commerce Platform)",
        description: "Developed monolithic backend, e-commerce website, and admin panel with Excel data extraction/import features.",
        type: "Monolithic"
      }
    ]
  },
  {
    company: "Crest Infotech",
    position: "Node.js Trainee",
    period: "May 2024 - Dec 2024",
    location: "Remote",
    projects: [
      {
        name: "Backend Development",
        description: "Built RESTful APIs with JWT authentication, OTP verification, and mailing systems using MongoDB, Express, and Node.js.",
        type: "Backend"
      }
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">My Career Journey</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2 lg:mt-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.projects.map((project, projIndex) => (
                  <div key={projIndex} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">{project.name}</h4>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

{/* Education */}
<div className="mt-16">
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Bachelor of Engineering */}
      <a 
        href="https://ssgec.ac.in/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Engineering</h4>
        <p className="text-blue-600 dark:text-blue-400 font-medium">Information Technology</p>
        <p className="text-gray-600 dark:text-gray-400">Shantilal Shah Engg. Co. (GTU)</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Bhavnagar, Gujarat | 2020 - 2024</p>
      </a>

      {/* Higher Secondary Certificate */}
      <a 
        href="https://drnik.net/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Higher Secondary School Certificate</h4>
        <p className="text-blue-600 dark:text-blue-400 font-medium">Group-A (Maths)</p>
        <p className="text-gray-600 dark:text-gray-400">Dr. Nakadar Institute of Knowledge</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Mehsana, Gujarat | 2019 - 2020</p>
      </a>

    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default Experience;
