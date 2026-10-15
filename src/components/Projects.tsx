
import React from "react";
import {
  ArrowUpRight,
  Github,
  Layers3,
  ShoppingBag,
  MessagesSquare,
  MessageCircle,
  Newspaper,
  Calculator,
  Code2,
} from "lucide-react";

const githubProfile = "https://github.com/iftekhar0six";

const projects = [
  {
    title: "Vehicle Management System",
    description:
      "Microservices-based internal management system for a motorcycle company — built modules for finance, sales, audit, and vendor management.",
    tech: ["Node.js", "Prisma", "PostgreSQL", "React"],
    category: "Web App",
    icon: Layers3,
    number: "01",
    link: githubProfile,
  },
  {
    title: "Agricultural Products E-commerce",
    description:
      "End-to-end e-commerce platform with admin panel and product management, optimized for inventory and performance.",
    tech: ["Node.js", "PostgreSQL", "Prisma", "React"],
    category: "E-commerce",
    icon: ShoppingBag,
    number: "02",
    link: githubProfile,
  },
  {
    title: "Web Forum (KITE)",
    description:
      "University project enabling discussions and community interaction, featuring user authentication, replies, and moderation tools.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    category: "Full Stack",
    icon: MessagesSquare,
    number: "03",
    link: githubProfile,
  },
  {
    title: "ChatHub",
    description:
      "Realtime chat web application with private messaging and online presence indicators using Socket.io.",
    tech: ["Node.js", "Express", "Socket.io", "React"],
    category: "Web App",
    icon: MessageCircle,
    number: "04",
    link: githubProfile,
  },
  {
    title: "News Web Application",
    description:
      "Dynamic news application fetching and rendering articles using public APIs and React hooks.",
    tech: ["React", "APIs"],
    category: "Frontend",
    icon: Newspaper,
    number: "05",
    link: githubProfile,
  },
  {
    title: "Calculator App",
    description:
      "Android calculator application with a clean interface and precise operations.",
    tech: ["Java", "XML"],
    category: "Mobile App",
    icon: Calculator,
    number: "06",
    link: githubProfile,
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="
        relative isolate overflow-hidden
        scroll-mt-24
        border-y border-stone-200/70
        bg-stone-100/70 py-20
        transition-colors duration-500
        dark:border-white/[0.06]
        dark:bg-[#0F1512]
        sm:py-24 lg:py-28
      "
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-40 top-20 -z-10
          h-96 w-96 rounded-full
          bg-emerald-500/[0.06] blur-3xl
          dark:bg-emerald-400/[0.05]
        "
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <div
            className="
              mb-4 inline-flex items-center gap-2
              text-xs font-semibold uppercase
              tracking-[0.22em]
              text-emerald-800 dark:text-emerald-400
            "
          >
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400" />
            Selected work
          </div>

          <h2
            className="
              text-3xl font-bold tracking-tight
              text-stone-900 dark:text-stone-100
              sm:text-4xl lg:text-5xl
            "
          >
            Featured{" "}
            <span
              className="
                bg-gradient-to-r from-emerald-700 to-teal-500
                bg-clip-text text-transparent
                dark:from-emerald-300 dark:to-teal-300
              "
            >
              Projects
            </span>
          </h2>

          <p
            className="
              mt-4 max-w-xl text-sm leading-7
              text-stone-600 dark:text-stone-400
              sm:text-base sm:leading-8
            "
          >
            A selection of applications and systems I've worked
            on, covering full-stack development, backend
            architecture, and user-focused interfaces.
          </p>
        </div>

        {/* Project grid */}
        <div
          className="
            grid grid-cols-1 gap-5
            md:grid-cols-2
            xl:grid-cols-3
            lg:gap-6
          "
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="
                  group relative flex h-full min-w-0
                  flex-col overflow-hidden
                  rounded-2xl
                  border border-stone-200/80
                  bg-white/85 p-5
                  shadow-sm shadow-stone-900/[0.025]
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-emerald-600/30
                  hover:shadow-xl hover:shadow-stone-900/[0.05]
                  dark:border-white/[0.08]
                  dark:bg-[#151D18]/90
                  dark:hover:border-emerald-400/25
                  dark:hover:shadow-black/20
                  sm:p-7
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                {/* Subtle grid texture */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0
                    opacity-[0.025] dark:opacity-[0.04]
                    [background-image:linear-gradient(rgba(100,116,139,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.6)_1px,transparent_1px)]
                    [background-size:28px_28px]
                  "
                />

                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute -right-16 -top-16
                    h-40 w-40 rounded-full
                    bg-emerald-500/[0.06] blur-3xl
                    transition-colors duration-300
                    group-hover:bg-emerald-500/[0.10]
                  "
                />

                {/* Card header */}
                <div className="relative mb-6 flex items-start justify-between gap-3">
                  <div
                    className="
                      flex h-12 w-12 shrink-0 items-center
                      justify-center rounded-xl
                      border border-emerald-700/15
                      bg-emerald-600/[0.07]
                      text-emerald-800
                      transition-all duration-300
                      group-hover:border-emerald-600/30
                      group-hover:bg-emerald-600/[0.11]
                      dark:border-emerald-400/15
                      dark:bg-emerald-400/[0.07]
                      dark:text-emerald-300
                    "
                  >
                    <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <span
                    className="
                      text-xs font-semibold tracking-[0.18em]
                      text-stone-400 dark:text-stone-500
                    "
                  >
                    {project.number}
                  </span>
                </div>

                {/* Project details */}
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-3">
                    <span
                      className="
                        mb-3 inline-flex rounded-full
                        border border-emerald-700/15
                        bg-emerald-600/[0.06]
                        px-3 py-1 text-[11px] font-semibold
                        text-emerald-800
                        dark:border-emerald-400/15
                        dark:bg-emerald-400/[0.06]
                        dark:text-emerald-300
                      "
                    >
                      {project.category}
                    </span>

                    <h3
                      className="
                        text-lg font-bold leading-snug
                        tracking-tight text-stone-900
                        transition-colors duration-200
                        group-hover:text-emerald-800
                        dark:text-stone-100
                        dark:group-hover:text-emerald-300
                        sm:text-xl
                      "
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p
                    className="
                      mb-6 flex-1 text-sm leading-7
                      text-stone-600 dark:text-stone-400
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technology stack */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-md border border-stone-200/80
                          bg-stone-100/80 px-2.5 py-1.5
                          text-xs font-medium
                          text-stone-700
                          dark:border-white/[0.08]
                          dark:bg-white/[0.04]
                          dark:text-stone-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer action */}
                  <div
                    className="
                      flex items-center justify-between gap-3
                      border-t border-stone-200/80 pt-5
                      dark:border-white/[0.08]
                    "
                  >
                    <span
                      className="
                        inline-flex items-center gap-2
                        text-xs font-medium
                        text-stone-500 dark:text-stone-400
                      "
                    >
                      <Code2
                        size={15}
                        className="text-emerald-700 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      Project overview
                    </span>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit GitHub for ${project.title}`}
                        title="View GitHub profile"
                        className="
                          inline-flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-xl
                          border border-stone-200
                          bg-stone-100/70
                          text-stone-600
                          transition-all duration-200
                          hover:border-emerald-600/30
                          hover:bg-emerald-600/[0.08]
                          hover:text-emerald-800
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-emerald-500
                          dark:border-white/10
                          dark:bg-white/[0.04]
                          dark:text-stone-300
                          dark:hover:border-emerald-400/30
                          dark:hover:text-emerald-300
                        "
                      >
                        <Github size={18} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom GitHub CTA */}
        <div
          className="
            mt-12 flex flex-col items-center
            justify-between gap-5
            rounded-2xl border border-stone-200/80
            bg-white/70 p-6
            dark:border-white/[0.08]
            dark:bg-[#151D18]/70
            sm:flex-row sm:p-8
          "
        >
          <div className="text-center sm:text-left">
            <h3
              className="
                text-lg font-semibold
                text-stone-900 dark:text-stone-100
              "
            >
              Explore more of my work
            </h3>

            <p
              className="
                mt-2 text-sm leading-6
                text-stone-600 dark:text-stone-400
              "
            >
              Visit my GitHub profile to explore repositories
              and development projects.
            </p>
          </div>

          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex min-h-12 w-full shrink-0
              items-center justify-center gap-2
              rounded-xl bg-emerald-700 px-5 py-3
              text-sm font-semibold text-white
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-emerald-600
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500
              dark:bg-emerald-400 dark:text-[#07130D]
              dark:hover:bg-emerald-300
              sm:w-auto
              motion-reduce:transform-none
            "
          >
            <Github size={18} aria-hidden="true" />
            View GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
