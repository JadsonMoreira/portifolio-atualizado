import Card from "../Card";
import TechIcon from "../TechIcon";
import { STACKS } from "../../data/constants";

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-32 max-w-6xl scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--lightest-slate)] whitespace-nowrap">
          <span className="font-mono text-[var(--green)] text-xl">03.</span> Habilidades Técnicas
        </h2>
        <div className="h-[1px] bg-[var(--lightest-navy)] w-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {STACKS.map((stack) => (
          <Card
            key={stack.category}
            title={stack.category}
            highlightBorder
            footer={
              <span className="text-[var(--green)] font-mono text-[10px] tracking-widest uppercase">
                Tecnologias de {stack.category}
              </span>
            }
          >
            <div className="flex flex-wrap gap-3">
              {stack.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 bg-[var(--navy)] rounded border border-[var(--lightest-navy)] hover:border-[var(--green)] transition-all duration-300 group/item cursor-default"
                >
                  <TechIcon
                    name={skill.name}
                    className="w-5 h-5 text-[var(--green)] group-hover/item:scale-110 transition-transform"
                  />
                  <span className="text-[var(--slate)] text-[13px] font-mono group-hover/item:text-[var(--green)]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
