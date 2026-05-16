import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 flex items-center ${scrolled ? "bg-[var(--bg-opacity)] backdrop-blur-md shadow-xl h-20" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/");
          }}
          className="relative z-10 w-12 h-12 flex items-center justify-center group transition-transform hover:-translate-y-1"
        >
          <div className="absolute inset-0 text-[var(--green)]">
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
              <title>Logo</title>
              <g transform="translate(-8.000000, -2.000000)">
                <g transform="translate(11.000000, 5.000000)">
                  <polygon
                    id="Shape"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                    className="fill-transparent group-hover:fill-[var(--green)]/10 transition-all duration-300"
                  />
                </g>
              </g>
              <text
                x="42"
                y="50"
                fill="currentColor"
                fontSize="45"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Fira Code, monospace"
                className="select-none"
              >
                J
              </text>
            </svg>
          </div>
        </a>

        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              data-num="01."
              className="nav-link text-[13px] text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors font-mono"
            >
              Sobre
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "experience")}
              data-num="02."
              className="nav-link text-[13px] text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors font-mono"
            >
              Experiência
            </a>
            <a
              href="#stack"
              onClick={(e) => handleNavClick(e, "stack")}
              data-num="03."
              className="nav-link text-[13px] text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors font-mono"
            >
              Habilidades
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              data-num="04."
              className="nav-link text-[13px] text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors font-mono"
            >
              Projetos
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              data-num="05."
              className="nav-link text-[13px] text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors font-mono"
            >
              Contato
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--green)] hover:bg-[var(--green)]/10 rounded-full transition-colors flex items-center justify-center border border-[var(--lightest-navy)]"
            title={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
          >
            {theme === "dark" ?
              <FaSun className="w-5 h-5" />
            : <FaMoon className="w-5 h-5" />}
          </button>

          <a
            href="#"
            className="hidden sm:block px-4 py-2 border border-[var(--green)] text-[var(--green)] font-mono text-[13px] rounded hover:bg-[var(--green)]/10 transition-colors"
          >
            Currículo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
