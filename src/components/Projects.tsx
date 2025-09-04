import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Vehicle Management System",
    description:
      "Microservices-based internal management system for motorcycle company",
    tech: "Node.js, Prisma, PostgreSQL, React",
    category: "web",
  },
  {
    title: "Agricultural Products E-commerce",
    description: "Complete e-commerce platform for agriculture products",
    tech: "Node.js, PostgreSQL, Prisma, React",
    category: "web",
  },
  {
    title: "Web Forum",
    description: "University team project for discussion platform",
    tech: "Web Technologies",
    category: "web",
  },
  {
    title: "News Web Application",
    description: "Dynamic news website using React and APIs",
    tech: "React, APIs",
    category: "web",
  },
  {
    title: "KITE",
    description: "Backend for Web Forum",
    tech: "Node.js, Express, Mailing, APIs",
    category: "web",
  },
  {
    title: "ChatHub",
    description: "Realtime Chat Web Application",
    tech: "Node.js, Express, Socket, HTML, APIs",
    category: "web",
  },
  {
    title: "Calculator",
    description: "Android Calculator App",
    tech: "XML, Java",
    category: "app",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Recent Work & Implementations
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Title + Link */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                {/* {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )} */}
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.split(", ").map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
