import { useState, useEffect, type FC, type MouseEvent } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App: FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="min-h-screen relative transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="container mx-auto px-6 md:px-24 lg:px-48">
        <Hero onProjectsClick={(e) => handleSmoothScroll(e, "projects")} />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />

        <footer className="py-10 text-center font-mono text-[10px] text-[var(--slate)]">
          <p className="mb-2">Desenvolvido por Jadson Moreira</p>
          <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
