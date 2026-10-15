
import React from "react";
import { Code2, Globe2, Layers3, Sparkles } from "lucide-react";

const skills = [
  "JavaScript",
  "Node.js",
  "React.js",
  "Prisma ORM",
  "MongoDB",
  "PostgreSQL",
  "Google Firebase",
  "Git & GitHub",
  "REST API",
  "Swagger UI",
  "Postman",
  "API Integration",
  "OAuth & JWT",
];

const languages = ["English", "Hindi", "Gujarati"];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="
        relative isolate overflow-hidden
        scroll-mt-24
        border-y border-stone-200/70
        bg-stone-100/70 py-20
        transition-colors duration-500
        dark:border-white/[0.06]
        dark:bg-[#0F1512] sm:py-24 lg:py-28
      "
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-40 top-20 -z-10
          h-80 w-80 rounded-full
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
              text-emerald-800
              dark:text-emerald-400
            "
          >
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400" />
            Get to know me
          </div>

          <h2
            className="
              text-3xl font-bold tracking-tight
              text-stone-900 dark:text-stone-100
              sm:text-4xl lg:text-5xl
            "
          >
            About{" "}
            <span
              className="
                bg-gradient-to-r from-emerald-700 to-teal-500
                bg-clip-text text-transparent
                dark:from-emerald-300 dark:to-teal-300
              "
            >
              Me
            </span>
          </h2>

          <p
            className="
              mt-4 max-w-xl text-sm leading-7
              text-stone-600 dark:text-stone-400
              sm:text-base sm:leading-8
            "
          >
            A little about my background, the technologies I work
            with, and how I approach building software.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Biography */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex items-start gap-4">
              <div
                className="
                  hidden h-11 w-11 shrink-0 items-center
                  justify-center rounded-xl
                  border border-emerald-700/15
                  bg-emerald-600/[0.07]
                  text-emerald-800
                  dark:border-emerald-400/15
                  dark:bg-emerald-400/[0.07]
                  dark:text-emerald-300 sm:flex
                "
              >
                <Code2 size={21} aria-hidden="true" />
              </div>

              <div className="min-w-0 space-y-5">
                <h3
                  className="
                    text-xl font-semibold tracking-tight
                    text-stone-900 dark:text-stone-100
                    sm:text-2xl
                  "
                >
                  Building useful digital experiences
                </h3>

                <p
                  className="
                    text-sm leading-7 text-stone-600
                    dark:text-stone-400 sm:text-base sm:leading-8
                  "
                >
                  Versatile Web Developer with hands-on experience
                  in{" "}
                  <strong className="font-semibold text-stone-900 dark:text-stone-200">
                    Node.js
                  </strong>
                  ,{" "}
                  <strong className="font-semibold text-stone-900 dark:text-stone-200">
                    React
                  </strong>
                  , and modern databases such as{" "}
                  <strong className="font-semibold text-stone-900 dark:text-stone-200">
                    PostgreSQL, Firebase, and MongoDB
                  </strong>
                  . Skilled in developing scalable, API-driven
                  applications while ensuring code reliability
                  using tools such as Express Validator, Postman,
                  and Swagger UI.
                </p>

                <p
                  className="
                    text-sm leading-7 text-stone-600
                    dark:text-stone-400 sm:text-base sm:leading-8
                  "
                >
                  I've worked with both{" "}
                  <strong className="font-semibold text-stone-900 dark:text-stone-200">
                    monolithic and microservices architectures
                  </strong>
                  , building end-to-end systems at Aiptek,
                  StepX Technologies, and Crest Infotech. My
                  contributions have included optimizing APIs
                  for scalability, designing efficient database
                  schemas, and developing full-stack interfaces
                  that improve business efficiency.
                </p>

                <p
                  className="
                    text-sm leading-7 text-stone-600
                    dark:text-stone-400 sm:text-base sm:leading-8
                  "
                >
                  I'm passionate about clean code, performance
                  optimization, and continuous learning. My goal
                  is to contribute to innovative projects that
                  encourage collaboration and forward-thinking
                  software solutions.
                </p>
              </div>
            </div>

            {/* Working principles */}
            <div
              className="
                grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2
              "
            >
              <div
                className="
                  flex items-start gap-3 rounded-xl
                  border border-stone-200/80
                  bg-white/60 p-4
                  dark:border-white/[0.07]
                  dark:bg-white/[0.025]
                "
              >
                <Layers3
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-700 dark:text-emerald-400"
                  aria-hidden="true"
                />

                <div>
                  <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                    Scalable architecture
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-stone-600 dark:text-stone-400">
                    Maintainable systems and reliable APIs.
                  </p>
                </div>
              </div>

              <div
                className="
                  flex items-start gap-3 rounded-xl
                  border border-stone-200/80
                  bg-white/60 p-4
                  dark:border-white/[0.07]
                  dark:bg-white/[0.025]
                "
              >
                <Sparkles
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-700 dark:text-emerald-400"
                  aria-hidden="true"
                />

                <div>
                  <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                    Continuous improvement
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-stone-600 dark:text-stone-400">
                    Better performance and cleaner code.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills and languages */}
          <aside className="space-y-6 lg:col-span-5">
            {/* Skills panel */}
            <div
              className="
                rounded-2xl border border-stone-200/80
                bg-white/75 p-5
                shadow-sm shadow-stone-900/[0.025]
                dark:border-white/[0.08]
                dark:bg-[#151D18]/80
                sm:p-7
              "
            >
              <div className="mb-6 flex items-start gap-3">
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center
                    justify-center rounded-xl
                    bg-emerald-600/[0.08]
                    text-emerald-800
                    dark:bg-emerald-400/[0.09]
                    dark:text-emerald-300
                  "
                >
                  <Code2 size={20} aria-hidden="true" />
                </div>

                <div>
                  <h3
                    className="
                      text-lg font-semibold tracking-tight
                      text-stone-900 dark:text-stone-100
                    "
                  >
                    Technical Skills
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-stone-500 dark:text-stone-400">
                    Technologies and tools I work with
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      inline-flex items-center rounded-lg
                      border border-stone-200
                      bg-stone-100/70 px-3 py-2
                      text-xs font-medium
                      text-stone-700
                      transition-all duration-200
                      hover:border-emerald-600/40
                      hover:bg-emerald-500/[0.07]
                      hover:text-emerald-800
                      dark:border-white/[0.09]
                      dark:bg-white/[0.035]
                      dark:text-stone-300
                      dark:hover:border-emerald-400/30
                      dark:hover:text-emerald-300
                      sm:text-sm
                      motion-reduce:transition-none
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages panel */}
            <div
              className="
                rounded-2xl border border-stone-200/80
                bg-white/75 p-5
                dark:border-white/[0.08]
                dark:bg-[#151D18]/80
                sm:p-7
              "
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center
                    justify-center rounded-xl
                    bg-emerald-600/[0.08]
                    text-emerald-800
                    dark:bg-emerald-400/[0.09]
                    dark:text-emerald-300
                  "
                >
                  <Globe2 size={20} aria-hidden="true" />
                </div>

                <div>
                  <h3
                    className="
                      text-lg font-semibold tracking-tight
                      text-stone-900 dark:text-stone-100
                    "
                  >
                    Languages
                  </h3>

                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    Languages I speak
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="
                      rounded-full border
                      border-emerald-700/15
                      bg-emerald-600/[0.06]
                      px-4 py-2 text-sm font-medium
                      text-emerald-900
                      dark:border-emerald-400/15
                      dark:bg-emerald-400/[0.06]
                      dark:text-emerald-200
                    "
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
