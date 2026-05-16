import { FaLinkedin } from "react-icons/fa";

interface HeroProps {
  onProjectsClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Hero: React.FC<HeroProps> = ({ onProjectsClick }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <p className="font-mono text-[var(--green)] text-sm md:text-base mb-5">Olá, meu nome é</p>
      <h1 className="text-4xl md:text-7xl font-bold text-[var(--lightest-slate)] mb-4">Jadson Moreira.</h1>
      <h2 className="text-4xl md:text-7xl font-bold text-[var(--slate)] mb-8 leading-tight">
        Eu construo coisas para a web.
      </h2>
      <p className="max-w-xl text-[var(--slate)] text-lg mb-12">
        Sou um engenheiro de software Fullstack com{" "}
        <span className="text-[var(--green)] font-semibold">mais de 4 anos de experiência</span>, especializado em
        construir experiências digitais excepcionais e escaláveis.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          onClick={onProjectsClick}
          className="px-8 py-4 border border-[var(--green)] text-[var(--green)] font-mono text-sm rounded hover:bg-[var(--green)]/10 transition-all"
        >
          Conheça meu trabalho!
        </a>
        <a
          href="https://linkedin.com/in/jadson-moreira"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-[var(--green)] bg-[var(--green)]/5 text-[var(--green)] font-mono text-sm rounded hover:bg-[var(--green)]/20 transition-all flex items-center gap-2"
        >
          <FaLinkedin className="w-4 h-4" />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
