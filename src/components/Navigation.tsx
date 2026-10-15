
import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className="
        fixed inset-x-0 top-0 z-40
        border-b border-stone-200/70
        bg-stone-50/85
        backdrop-blur-2xl
        transition-colors duration-300
        dark:border-white/[0.07]
        dark:bg-[#0B0F0E]/85
      "
    >
      <div
        className="
          mx-auto flex min-h-[72px] max-w-7xl
          items-center justify-between
          gap-4 px-4 sm:px-6 lg:px-10
        "
      >
        {/* Brand */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="
            group flex min-w-0 items-center gap-3
            rounded-lg focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-emerald-500
          "
          aria-label="Iftekhar Ansari — home"
        >
          <span
            className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl border border-emerald-500/20
              bg-emerald-500/10
              text-sm font-bold tracking-tight text-emerald-700
              transition-all duration-300
              group-hover:border-emerald-500/50
              group-hover:bg-emerald-500/15
              dark:text-emerald-300
            "
          >
            IA
          </span>

          <span className="min-w-0">
            <span
              className="
                block truncate text-sm font-semibold
                tracking-tight text-stone-900
                dark:text-stone-100 sm:text-base
              "
            >
              Iftekhar Ansari
            </span>

            <span
              className="
                hidden text-[10px] font-medium uppercase
                tracking-[0.18em] text-stone-500
                dark:text-stone-400 sm:block
              "
            >
              Software Engineer
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                rounded-full px-4 py-2
                text-sm font-medium
                text-stone-600
                transition-colors duration-200
                hover:bg-emerald-500/10
                hover:text-emerald-700
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-500
                dark:text-stone-300
                dark:hover:text-emerald-300
              "
            >
              {link.label}
            </a>
          ))}

          <a
            href="#footer"
            className="
              ml-3 inline-flex items-center gap-2
              rounded-full bg-emerald-700
              px-4 py-2.5 text-sm font-semibold
              text-white shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-emerald-600
              hover:shadow-lg hover:shadow-emerald-900/15
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500
              focus-visible:ring-offset-2
              dark:bg-emerald-500 dark:text-[#07130D]
              dark:hover:bg-emerald-400
              motion-reduce:transform-none
            "
          >
            Contact
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-xl border border-stone-200
            bg-white/70 text-stone-800
            transition-colors duration-200
            hover:border-emerald-500/40
            hover:text-emerald-700
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-emerald-500
            dark:border-white/10
            dark:bg-white/[0.04]
            dark:text-stone-100
            dark:hover:text-emerald-300
            md:hidden
          "
        >
          {isOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation links"
        aria-hidden={!isOpen}
        className={`
          grid transition-[grid-template-rows,opacity]
          duration-300 ease-out md:hidden
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              border-t border-stone-200/80
              bg-stone-50/95 px-4 pb-5 pt-3
              dark:border-white/[0.07]
              dark:bg-[#0B0F0E]/95
              sm:px-6
            "
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={closeMenu}
                  style={{ transitionDelay: isOpen ? `${index * 35}ms` : "0ms" }}
                  className="
                    rounded-xl px-4 py-3
                    text-sm font-medium text-stone-700
                    transition-colors duration-200
                    hover:bg-emerald-500/10
                    hover:text-emerald-700
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-emerald-500
                    dark:text-stone-200
                    dark:hover:text-emerald-300
                  "
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#footer"
                tabIndex={isOpen ? 0 : -1}
                onClick={closeMenu}
                className="
                  mt-2 flex items-center justify-center gap-2
                  rounded-xl bg-emerald-700 px-4 py-3
                  text-sm font-semibold text-white
                  transition-colors duration-200
                  hover:bg-emerald-600
                  dark:bg-emerald-500 dark:text-[#07130D]
                  dark:hover:bg-emerald-400
                "
              >
                Get in touch
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
