
import React from "react";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  GraduationCap,
  ArrowUpRight,
  Layers3,
} from "lucide-react";

interface Project {
  name: string;
  description: string;
  type: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  projects: Project[];
}

const experiences: ExperienceItem[] = [
  {
    company: "AIPTEK",
    position: "Jr. Software Developer",
    period: "Jun 2025 - Sep 2025",
    location: "Hyderabad",
    projects: [
      {
        name: "Farmkart",
        description:
          "Developed a monolithic backend, e-commerce website, and admin panel using Node.js and React. Implemented Excel-based inventory import/export to improve admin efficiency and reduce manual errors.",
        type: "Monolithic",
      },
      {
        name: "Admin & Product Management",
        description:
          "Built product, order, and inventory management features with Prisma ORM and PostgreSQL, enhancing system scalability and performance.",
        type: "Fullstack",
      },
    ],
  },
  {
    company: "StepX Technologies",
    position: "Jr. Software Developer",
    period: "Jan 2025 - Jun 2025",
    location: "Hyderabad",
    projects: [
      {
        name: "Triumph Management System",
        description:
          "Developed and maintained microservices modules for finance, expenses, vendors, sales, audit, and collections using Node.js, Prisma ORM, PostgreSQL, and React.",
        type: "Microservices",
      },
      {
        name: "System Health & Monitoring",
        description:
          "Created APIs and utilities for monitoring service uptime, performance, and logs to ensure system reliability and maintainability.",
        type: "Fullstack",
      },
    ],
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
        type: "Backend",
      },
      {
        name: "Admin Panel (EJS)",
        description:
          "Developed an EJS-based admin panel for data management, collaborating via Git and GitHub for version control and workflow optimization.",
        type: "Frontend",
      },
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution: "Shantilal Shah Engineering College (GTU)",
    location: "Bhavnagar, Gujarat",
    period: "2020 – 2024",
    href: "https://ssgec.ac.in/",
  },
  {
    degree: "Higher Secondary School Certificate",
    field: "Group A (Maths)",
    institution: "Dr. Nakadar Institute of Knowledge",
    location: "Mehsana, Gujarat",
    period: "2019 – 2020",
    href: "https://drnik.net/",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="
        relative scroll-mt-24
        overflow-hidden border-y border-stone-200/70
        bg-stone-50 py-20
        text-stone-900 transition-colors duration-500
        dark:border-white/[0.06]
        dark:bg-[#0B0F0E] dark:text-stone-100
        sm:py-24 lg:py-28
      "
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-40 top-40
          h-96 w-96 rounded-full
          bg-emerald-500/[0.06] blur-3xl
          dark:bg-emerald-400/[0.04]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <div
            className="
              mb-4 inline-flex items-center gap-2
              text-xs font-semibold uppercase tracking-[0.22em]
              text-emerald-800 dark:text-emerald-400
            "
          >
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400" />
            My journey
          </div>

          <h2
            className="
              text-3xl font-bold tracking-tight
              text-stone-900 dark:text-stone-100
              sm:text-4xl lg:text-5xl
            "
          >
            Professional{" "}
            <span
              className="
                bg-gradient-to-r from-emerald-700 to-teal-500
                bg-clip-text text-transparent
                dark:from-emerald-300 dark:to-teal-300
              "
            >
              Experience
            </span>
          </h2>

          <p
            className="
              mt-4 max-w-xl text-sm leading-7
              text-stone-600 dark:text-stone-400
              sm:text-base sm:leading-8
            "
          >
            My career journey, the systems I've helped build,
            and the engineering experience I've gained along the way.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative space-y-7 sm:space-y-9">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="
              absolute bottom-10 left-[15px] top-8 hidden
              w-px bg-gradient-to-b
              from-emerald-500/60 via-emerald-500/20
              to-transparent sm:block lg:left-[19px]
            "
          />

          {experiences.map((exp, index) => (
            <article
              key={exp.company}
              className="
                relative sm:pl-10 lg:pl-12
                motion-safe:animate-fade-in
              "
            >
              {/* Timeline marker */}
              <div
                aria-hidden="true"
                className="
                  absolute left-0 top-8 hidden
                  h-[31px] w-[31px] items-center
                  justify-center rounded-full
                  border border-emerald-500/25
                  bg-stone-50 sm:flex
                  dark:bg-[#0B0F0E]
                  lg:h-[39px] lg:w-[39px]
                "
              >
                <span
                  className="
                    h-2.5 w-2.5 rounded-full
                    bg-emerald-600
                    shadow-[0_0_12px_rgba(16,185,129,0.35)]
                    dark:bg-emerald-400
                  "
                />
              </div>

              <div
                className="
                  overflow-hidden rounded-2xl
                  border border-stone-200/80
                  bg-white/80
                  shadow-sm shadow-stone-900/[0.025]
                  transition-all duration-300
                  hover:border-emerald-600/25
                  hover:shadow-lg hover:shadow-stone-900/[0.04]
                  dark:border-white/[0.08]
                  dark:bg-[#131A16]/90
                  dark:hover:border-emerald-400/20
                  dark:hover:shadow-black/20
                  motion-reduce:transition-none
                "
              >
                {/* Company header */}
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex min-w-0 items-start gap-4">
                      <div
                        className="
                          flex h-12 w-12 shrink-0
                          items-center justify-center rounded-xl
                          border border-emerald-600/15
                          bg-emerald-600/[0.07]
                          text-emerald-800
                          dark:border-emerald-400/15
                          dark:bg-emerald-400/[0.07]
                          dark:text-emerald-300
                        "
                      >
                        <Briefcase
                          size={22}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            mb-1 text-xs font-semibold
                            uppercase tracking-[0.15em]
                            text-emerald-800 dark:text-emerald-400
                          "
                        >
                          {String(index + 1).padStart(2, "0")} / Career
                        </p>

                        <h3
                          className="
                            text-xl font-bold tracking-tight
                            text-stone-900 dark:text-stone-100
                            sm:text-2xl
                          "
                        >
                          {exp.position}
                        </h3>

                        <p
                          className="
                            mt-1 text-base font-semibold
                            text-emerald-800 dark:text-emerald-300
                          "
                        >
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        flex flex-wrap items-center gap-x-4 gap-y-2
                        text-xs text-stone-600
                        dark:text-stone-400 sm:justify-end
                        sm:pt-1 sm:text-sm
                      "
                    >
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays
                          size={15}
                          className="shrink-0 text-emerald-700 dark:text-emerald-400"
                          aria-hidden="true"
                        />
                        {exp.period}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <MapPin
                          size={15}
                          className="shrink-0 text-emerald-700 dark:text-emerald-400"
                          aria-hidden="true"
                        />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Project divider */}
                  <div className="my-6 h-px bg-stone-200 dark:bg-white/[0.07]" />

                  <div className="mb-4 flex items-center gap-2">
                    <Layers3
                      size={17}
                      className="text-emerald-700 dark:text-emerald-400"
                      aria-hidden="true"
                    />
                    <h4
                      className="
                        text-sm font-semibold
                        text-stone-800 dark:text-stone-200
                      "
                    >
                      Selected Projects & Contributions
                    </h4>
                  </div>

                  {/* Project cards */}
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {exp.projects.map((project) => (
                      <div
                        key={project.name}
                        className="
                          group rounded-xl
                          border border-stone-200/80
                          bg-stone-50/80 p-4
                          transition-all duration-300
                          hover:border-emerald-600/30
                          hover:bg-emerald-500/[0.025]
                          dark:border-white/[0.07]
                          dark:bg-white/[0.025]
                          dark:hover:border-emerald-400/20
                          dark:hover:bg-emerald-400/[0.025]
                          sm:p-5
                          motion-reduce:transition-none
                        "
                      >
                        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                          <h5
                            className="
                              min-w-0 flex-1 text-sm
                              font-semibold leading-6
                              text-stone-900 dark:text-stone-100
                            "
                          >
                            {project.name}
                          </h5>

                          <span
                            className="
                              shrink-0 rounded-full
                              border border-emerald-700/15
                              bg-emerald-600/[0.06]
                              px-2.5 py-1
                              text-[10px] font-semibold
                              text-emerald-900
                              dark:border-emerald-400/15
                              dark:bg-emerald-400/[0.06]
                              dark:text-emerald-300
                            "
                          >
                            {project.type}
                          </span>
                        </div>

                        <p
                          className="
                            text-xs leading-6
                            text-stone-600 dark:text-stone-400
                            sm:text-sm sm:leading-7
                          "
                        >
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Education */}
        <div id="education" className="mt-20 scroll-mt-24 sm:mt-28">
          <div className="mb-8 flex items-center gap-4 sm:mb-10">
            <div
              className="
                flex h-12 w-12 shrink-0 items-center
                justify-center rounded-xl
                border border-emerald-600/15
                bg-emerald-600/[0.07]
                text-emerald-800
                dark:border-emerald-400/15
                dark:bg-emerald-400/[0.07]
                dark:text-emerald-300
              "
            >
              <GraduationCap size={24} aria-hidden="true" />
            </div>

            <div>
              <p
                className="
                  mb-1 text-xs font-semibold uppercase
                  tracking-[0.2em]
                  text-emerald-800 dark:text-emerald-400
                "
              >
                Academic background
              </p>

              <h3
                className="
                  text-2xl font-bold tracking-tight
                  text-stone-900 dark:text-stone-100
                  sm:text-3xl
                "
              >
                Education
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {education.map((item) => (
              <a
                key={item.degree}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex h-full flex-col
                  rounded-2xl border border-stone-200/80
                  bg-white/80 p-5
                  shadow-sm shadow-stone-900/[0.025]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-emerald-600/30
                  hover:shadow-lg hover:shadow-stone-900/[0.04]
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-emerald-500
                  dark:border-white/[0.08]
                  dark:bg-[#131A16]/90
                  dark:hover:border-emerald-400/25
                  sm:p-7
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center
                      justify-center rounded-xl
                      bg-emerald-600/[0.07]
                      text-emerald-800
                      dark:bg-emerald-400/[0.07]
                      dark:text-emerald-300
                    "
                  >
                    <GraduationCap size={22} aria-hidden="true" />
                  </div>

                  <span
                    className="
                      inline-flex items-center gap-1.5
                      rounded-full border border-stone-200
                      px-3 py-1.5 text-xs font-medium
                      text-stone-600
                      dark:border-white/10
                      dark:text-stone-400
                    "
                  >
                    <CalendarDays size={13} aria-hidden="true" />
                    {item.period}
                  </span>
                </div>

                <h4
                  className="
                    text-lg font-semibold leading-snug
                    text-stone-900 dark:text-stone-100
                    sm:text-xl
                  "
                >
                  {item.degree}
                </h4>

                <p
                  className="
                    mt-2 text-sm font-semibold
                    text-emerald-800 dark:text-emerald-300
                  "
                >
                  {item.field}
                </p>

                <p
                  className="
                    mt-3 text-sm leading-6
                    text-stone-700 dark:text-stone-300
                  "
                >
                  {item.institution}
                </p>

                <div
                  className="
                    mt-4 flex items-center justify-between gap-3
                    border-t border-stone-200 pt-4
                    dark:border-white/[0.07]
                  "
                >
                  <span
                    className="
                      flex items-center gap-2 text-xs
                      text-stone-500 dark:text-stone-400
                    "
                  >
                    <MapPin size={14} aria-hidden="true" />
                    {item.location}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="
                      shrink-0 text-stone-400
                      transition-transform duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-emerald-700
                      dark:group-hover:text-emerald-300
                      motion-reduce:transition-none
                    "
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
