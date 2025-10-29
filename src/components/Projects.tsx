import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Vehicle Management System",
    description:
      "Microservices-based internal management system for a motorcycle company — built modules for finance, sales, audit, and vendor management.",
    tech: "Node.js, Prisma, PostgreSQL, React",
    link: "https://github.com/iftekhar0six",
    category: "Web App",
  },
  {
    title: "Agricultural Products E-commerce",
    description:
      "End-to-end e-commerce platform with admin panel and product management, optimized for inventory and performance.",
    tech: "Node.js, PostgreSQL, Prisma, React",
    link: "https://github.com/iftekhar0six",
    category: "E-commerce",
  },
  {
    title: "Web Forum (KITE)",
    description:
      "University project enabling discussions and community interaction, featuring user auth, replies, and moderation tools.",
    tech: "Node.js, Express, MongoDB, React",
    link: "https://github.com/iftekhar0six",
    category: "Full Stack",
  },
  {
    title: "ChatHub",
    description:
      "Realtime chat web application with private messaging and online presence indicators using Socket.io.",
    tech: "Node.js, Express, Socket.io, React",
    link: "https://github.com/iftekhar0six",
    category: "Web App",
  },
  {
    title: "News Web Application",
    description:
      "Dynamic news app fetching and rendering articles using public APIs and React hooks.",
    tech: "React, APIs",
    link: "https://github.com/iftekhar0six",
    category: "Frontend",
  },
  {
    title: "Calculator App",
    description: "Android calculator app with clean UI and precise operations.",
    tech: "Java, XML",
    link: "https://github.com/iftekhar0six",
    category: "Mobile App",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A showcase of my recent work and implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.category}
                  </p>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.split(", ").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Subtle Hover Accent */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
