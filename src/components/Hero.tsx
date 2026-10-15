
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Download,
  Github,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

const Hero: React.FC = () => {
  const resumePath = "/Iftekhar_Ansari_WebDeveloper_Resume.pdf";
  const bannerImage = "/Banner_Model_1.png";

  return (
    <section
      id="hero"
      className="
        relative isolate overflow-hidden
        scroll-mt-24
        bg-stone-50 text-stone-900
        transition-colors duration-500
        dark:bg-[#0B0F0E] dark:text-[#E8F0EB]
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_75%_30%,rgba(16,185,129,0.10),transparent_42%)]
          dark:bg-[radial-gradient(ellipse_at_75%_30%,rgba(52,211,153,0.10),transparent_42%)]
        "
      />

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          opacity-[0.035] dark:opacity-[0.045]
          [background-image:linear-gradient(rgba(100,116,139,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.6)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div
        className="
          mx-auto grid min-h-[calc(100svh-72px)]
          max-w-7xl items-center
          gap-12 px-5 pb-16 pt-32
          sm:px-8 sm:pb-20 sm:pt-36
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-16 lg:px-10 lg:py-24
        "
      >
        {/* Left: Introduction */}
        <div
          className="
            order-2 min-w-0 space-y-7 text-center
            lg:order-1 lg:text-left
            motion-safe:animate-fade-in
          "
        >
          {/* Availability / specialization label */}
          <div
            className="
              inline-flex max-w-full items-center gap-2
              rounded-full border border-emerald-700/15
              bg-emerald-600/[0.07] px-4 py-2
              text-xs font-semibold tracking-wide
              text-emerald-800
              dark:border-emerald-400/20
              dark:bg-emerald-400/[0.07]
              dark:text-emerald-300
              sm:text-sm
            "
          >
            <span
              className="
                h-2 w-2 shrink-0 rounded-full
                bg-emerald-600
                shadow-[0_0_10px_rgba(16,185,129,0.5)]
                dark:bg-emerald-400
              "
            />
            Software Development & Management
          </div>

          {/* Name */}
          <div className="space-y-4">
            <p
              className="
                text-sm font-medium tracking-wide
                text-stone-500 dark:text-stone-400
              "
            >
              Hello, I'm
            </p>

            <h1
              className="
                text-4xl font-bold leading-[1.12]
                tracking-tight
                sm:text-5xl
                lg:text-6xl xl:text-7xl
              "
            >
              Md. Iftekharali
              <span className="mt-1 block">
                J.{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-emerald-700 via-emerald-500
                    to-teal-500 bg-clip-text text-transparent
                    dark:from-emerald-300
                    dark:via-emerald-400
                    dark:to-teal-300
                  "
                >
                  Ansari.
                </span>
              </span>
            </h1>

            <p
              className="
                text-lg font-medium
                text-stone-600 dark:text-stone-300
                sm:text-xl lg:text-2xl
              "
            >
              Full Stack Web Developer
            </p>
          </div>

          {/* Short introduction */}
          <p
            className="
              mx-auto max-w-xl text-sm leading-7
              text-stone-600 dark:text-stone-400
              sm:text-base sm:leading-8
              lg:mx-0
            "
          >
            Building modern, responsive web experiences with
            thoughtful design, reliable engineering, and a focus
            on turning ideas into practical digital solutions.
          </p>

          {/* Contact details */}
          <div
            className="
              flex flex-col items-center gap-3
              text-sm text-stone-600
              dark:text-stone-400
              lg:items-start
            "
          >
            <div className="flex items-center gap-3">
              <MapPin
                size={17}
                className="shrink-0 text-emerald-700 dark:text-emerald-400"
                aria-hidden="true"
              />
              <span>Ahmedabad, Gujarat, India</span>
            </div>

            <a
              href="tel:+919408896800"
              className="
                inline-flex items-center gap-3
                transition-colors hover:text-emerald-700
                dark:hover:text-emerald-300
              "
            >
              <Phone
                size={17}
                className="shrink-0 text-emerald-700 dark:text-emerald-400"
                aria-hidden="true"
              />
              <span>+91 94088 96800</span>
            </a>

            <a
              href="mailto:iftekhar0six@gmail.com"
              className="
                inline-flex max-w-full items-center gap-3
                break-all text-left
                transition-colors hover:text-emerald-700
                dark:hover:text-emerald-300
              "
            >
              <Mail
                size={17}
                className="shrink-0 text-emerald-700 dark:text-emerald-400"
                aria-hidden="true"
              />
              <span>iftekhar0six@gmail.com</span>
            </a>
          </div>

          {/* Primary actions */}
          <div
            className="
              flex flex-col justify-center gap-3 pt-2
              sm:flex-row sm:flex-wrap
              lg:justify-start
            "
          >
            <a
              href={resumePath}
              download
              className="
                group inline-flex min-h-12 items-center
                justify-center gap-2.5 rounded-xl
                bg-emerald-700 px-6 py-3
                text-sm font-semibold text-white
                shadow-lg shadow-emerald-900/10
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-emerald-600
                hover:shadow-xl hover:shadow-emerald-900/15
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-500
                focus-visible:ring-offset-2
                dark:bg-emerald-400 dark:text-[#07130D]
                dark:hover:bg-emerald-300
                motion-reduce:transform-none
              "
            >
              <Download
                size={18}
                aria-hidden="true"
                className="
                  transition-transform duration-300
                  group-hover:translate-y-0.5
                  motion-reduce:transition-none
                "
              />
              Download Resume
            </a>

            <a
              href="https://github.com/iftekhar0six"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex min-h-12 items-center
                justify-center gap-2.5 rounded-xl
                border border-stone-300 bg-white/60
                px-6 py-3 text-sm font-semibold
                text-stone-800
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-emerald-600/40
                hover:bg-emerald-500/[0.06]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-500
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:text-stone-200
                dark:hover:border-emerald-400/40
                motion-reduce:transform-none
              "
            >
              <Github size={18} aria-hidden="true" />
              GitHub
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="opacity-60"
              />
            </a>
          </div>

          {/* Scroll cue */}
          <a
            href="#about"
            className="
              mx-auto inline-flex items-center gap-2 pt-3
              text-xs font-medium tracking-wide
              text-stone-500 transition-colors
              hover:text-emerald-700
              dark:text-stone-500 dark:hover:text-emerald-300
              lg:mx-0
            "
          >
            Explore my work
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Right: Profile image */}
        <div
          className="
            order-1 flex justify-center
            lg:order-2 lg:justify-end
            motion-safe:animate-fade-in
          "
        >
          <div className="relative isolate">
            {/* Ambient emerald glow */}
            <div
              aria-hidden="true"
              className="
                absolute -inset-8 -z-10 rounded-full
                bg-emerald-500/15 blur-3xl
                dark:bg-emerald-400/15
              "
            />

            {/* Decorative orbit */}
            <div
              aria-hidden="true"
              className="
                absolute -inset-3 rounded-full
                border border-emerald-600/15
                dark:border-emerald-400/15
              "
            />

            {/* Image frame */}
            <div
              className="
                relative rounded-full
                bg-gradient-to-br
                from-emerald-500 via-teal-400 to-stone-300
                p-[3px]
                shadow-2xl shadow-emerald-950/10
                dark:from-emerald-300
                dark:via-teal-500 dark:to-stone-700
                sm:p-1
              "
            >
              <div
                className="
                  overflow-hidden rounded-full
                  border-4 border-stone-50
                  bg-stone-200
                  dark:border-[#101713]
                  dark:bg-[#19231E]
                "
              >
                <img
                  src={bannerImage}
                  alt="Portrait of Md. Iftekharali J. Ansari"
                  width={400}
                  height={400}
                  fetchPriority="high"
                  className="
                    h-56 w-56 object-cover
                    sm:h-72 sm:w-72
                    lg:h-80 lg:w-80
                    xl:h-[360px] xl:w-[360px]
                    transition-transform duration-700
                    hover:scale-[1.03]
                    motion-reduce:transition-none
                  "
                />
              </div>
            </div>

            {/* Floating role badge */}
            <div
              className="
                absolute -bottom-3 left-1/2
                flex -translate-x-1/2 items-center gap-2
                whitespace-nowrap rounded-full
                border border-stone-200/80
                bg-white/90 px-4 py-2.5
                shadow-xl shadow-stone-900/5
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-[#19231E]/95
                dark:shadow-black/20
                sm:bottom-2 sm:left-auto sm:right-[-24px]
                sm:translate-x-0
              "
            >
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-emerald-500
                  shadow-[0_0_8px_rgba(16,185,129,0.5)]
                "
              />
              <span
                className="
                  text-xs font-semibold
                  text-stone-700 dark:text-stone-200
                "
              >
                Full Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
