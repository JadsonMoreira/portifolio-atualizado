import { STACKS } from "../../data/constants";

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 max-w-4xl scroll-mt-24">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--lightest-slate)] whitespace-nowrap">
          <span className="font-mono text-[var(--green)] text-xl">01.</span> Sobre Mim
        </h2>
        <div className="h-[1px] bg-[var(--lightest-navy)] w-full"></div>
      </div>
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 space-y-4 text-[var(--slate)]">
          <p>
            Olá! Meu nome é Jadson e sou um desenvolvedor Fullstack com{" "}
            <span className="text-[var(--green)] font-semibold">mais de 4 anos de experiência</span> dedicados à criação
            de soluções robustas para a web. Minha paixão por tecnologia me transformou em um profissional versátil,
            capaz de atuar em todo o ciclo de vida do desenvolvimento.
          </p>
          <p>
            Ao longo da minha trajetória, tive o privilégio de trabalhar em diversos projetos desafiadores, desde
            startups dinâmicas até sistemas corporativos de alta performance. Meu foco principal hoje é construir
            aplicações performáticas e acessíveis, unindo um backend sólido com interfaces fluidas e intuitivas.
          </p>
          {/* <p>Aqui estão algumas tecnologias que domino:</p> */}
          {/* <ul className="grid grid-cols-2 gap-2 font-mono text-xs">
            {STACKS[0].skills.map((s) => (
              <li key={s.name} className="flex items-center gap-2">
                <span className="text-[var(--green)]">▹</span> {s.name}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="md:col-span-2 relative group max-w-[300px] mx-auto">
          <div className="absolute inset-0 border-2 border-[var(--green)] rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          <div className="relative bg-[var(--green)] rounded overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/v2/C5603AQGs5wGmhV3czg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1629386427630?e=1770249600&v=beta&t=LAyNbWG89iNXs-G71CBJXk-JT2W6q8xa7aSTOp7JzEc"
              alt="Jadson"
              className="mix-blend-multiply grayscale hover:grayscale-0 hover:mix-blend-normal transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
