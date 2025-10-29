import React from 'react';

const experiences = [
  {
    company: "AIPTEK",
    position: "Jr. Software Developer",
    period: "Jun 2025 - Sep 2025",
    location: "Hyderabad",
    projects: [
      {
        name: "Farmkart (E-commerce Platform for Agriculture Products)",
        description:
          "Developed a monolithic backend, e-commerce website, and admin panel using Node.js and React. Implemented Excel-based inventory import/export to improve admin efficiency and reduce manual errors.",
        type: "Monolithic"
      },
      {
        name: "Admin & Product Management",
        description:
          "Built product, order, and inventory management features with Prisma ORM and PostgreSQL, enhancing system scalability and performance.",
        type: "Fullstack"
      }
    ]
  },
  {
    company: "StepX Technologies",
    position: "Jr. Software Developer",
    period: "Jan 2025 - Jun 2025",
    location: "Hyderabad",
    projects: [
      {
        name: "Triumph (Motorcycle Company – Internal Management System)",
        description:
          "Developed and maintained microservices modules for finance, expenses, vendors, sales, audit, and collections using Node.js, Prisma ORM, PostgreSQL, and React.",
        type: "Microservices"
      },
      {
        name: "System Health & Monitoring",
        description:
          "Created APIs and utilities for monitoring service uptime, performance, and logs to ensure system reliability and maintainability.",
        type: "FullStack"
      }
    ]
  },
  {
    company: "Crest Infotech",
    position: "Node.js Trainee",
    period: "May 2024 - Dec 2024",
    location: "Ahmedabad",
    projects: [
      {
        name: "Backend API Development",
        description:
          "Built RESTful APIs with JWT authentication, OTP verification, and email notifications using Node.js, Express, and MongoDB. Integrated validation and documentation through Postman and Swagger UI.",
        type: "Backend"
      },
      {
        name: "Admin Panel (EJS)",
        description:
          "Developed EJS-based admin panel for data management, collaborating via Git/GitHub for version control and workflow optimization.",
        type: "Frontend"
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400">My Career Journey</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2 lg:mt-0 text-sm">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.projects.map((project, projIndex) => (
                  <div
                    key={projIndex}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {project.name}
                      </h4>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bachelor of Engineering */}
              <a
                href="https://ssgec.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Engineering
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Information Technology
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Shantilal Shah Engineering College (GTU)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Bhavnagar, Gujarat | 2020 – 2024
                </p>
              </a>

              {/* Higher Secondary Certificate */}
              <a
                href="https://drnik.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Higher Secondary School Certificate
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Group A (Maths)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Dr. Nakadar Institute of Knowledge
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Mehsana, Gujarat | 2019 – 2020
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
