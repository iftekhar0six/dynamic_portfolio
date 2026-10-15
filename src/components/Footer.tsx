
import React from "react";
import { Github, Linkedin, ArrowUpRight, Heart, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="
        relative overflow-hidden
        border-t border-stone-200/80
        bg-stone-50 px-5 py-10
        text-stone-600 transition-colors duration-300
        dark:border-white/[0.07]
        dark:bg-[#0B0F0E] dark:text-stone-400
        sm:px-8 sm:py-12
      "
    >
      {/* Subtle top accent */}
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-0 h-px w-40
          -translate-x-1/2 bg-gradient-to-r
          from-transparent via-emerald-500/60 to-transparent
        "
      />

      <div className="mx-auto max-w-7xl">
        <div
          className="
            flex flex-col items-center justify-between gap-7
            md:flex-row md:gap-5
          "
        >
          {/* Brand and copyright */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="
                inline-flex items-center gap-2
                rounded-md text-base font-semibold
                tracking-tight text-stone-900
                transition-colors hover:text-emerald-700
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-500
                dark:text-stone-100
                dark:hover:text-emerald-300
              "
            >
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-lg bg-emerald-600/[0.09]
                  text-xs font-bold text-emerald-800
                  dark:bg-emerald-400/[0.09]
                  dark:text-emerald-300
                "
              >
                IA
              </span>
              Iftekhar Ansari
            </a>

            <p className="mt-3 text-xs leading-6 sm:text-sm">
              © {currentYear}{" "}
              <span className="font-medium text-stone-800 dark:text-stone-200">
                Md. Iftekharali J. Ansari
              </span>
              {" "}· All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/iftekhar0six"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              title="GitHub"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl border border-stone-200
                bg-white/70 text-stone-600
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-emerald-600/30
                hover:bg-emerald-500/[0.07]
                hover:text-emerald-800
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-500
                dark:border-white/10 dark:bg-white/[0.03]
                dark:text-stone-300
                dark:hover:border-emerald-400/30
                dark:hover:text-emerald-300
                motion-reduce:transform-none
              "
            >
              <Github size={19} aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/iftekharansari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              title="LinkedIn"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl border border-stone-200
                bg-white/70 text-stone-600
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-emerald-600/30
                hover:bg-emerald-500/[0.07]
                hover:text-emerald-800
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-500
                dark:border-white/10 dark:bg-white/[0.03]
                dark:text-stone-300
                dark:hover:border-emerald-400/30
                dark:hover:text-emerald-300
                motion-reduce:transform-none
              "
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>

            <a
              href="mailto:iftekhar0six@gmail.com"
              aria-label="Send me an email"
              title="Email"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl border border-stone-200
                bg-white/70 text-stone-600
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-emerald-600/30
                hover:bg-emerald-500/[0.07]
                hover:text-emerald-800
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-500
                dark:border-white/10 dark:bg-white/[0.03]
                dark:text-stone-300
                dark:hover:border-emerald-400/30
                dark:hover:text-emerald-300
                motion-reduce:transform-none
              "
            >
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>

            <a
              href="#hero"
              aria-label="Back to top"
              title="Back to top"
              className="
                ml-1 flex h-11 w-11 items-center
                justify-center rounded-xl
                bg-emerald-700 text-white
                transition-all duration-200
                hover:-translate-y-0.5 hover:bg-emerald-600
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-500
                focus-visible:ring-offset-2
                dark:bg-emerald-400 dark:text-[#07130D]
                dark:hover:bg-emerald-300
                motion-reduce:transform-none
              "
            >
              <ArrowUp size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom signature */}
        <div
          className="
            mt-8 flex flex-col items-center justify-between
            gap-3 border-t border-stone-200/80 pt-5
            text-center text-xs
            dark:border-white/[0.07]
            sm:flex-row sm:text-left
          "
        >
          {/* <p>
            Designed with care. Built for the web.
          </p> */}

          {/* <p className="inline-flex items-center gap-1.5">
            Made with
            <Heart
              size={13}
              className="fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400"
              aria-label="love"
            />
            and clean code.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
