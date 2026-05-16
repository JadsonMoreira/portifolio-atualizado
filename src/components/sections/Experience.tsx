import React, { useState } from "react";
import { EXPERIENCES } from "../../data/constants";

const Experience: React.FC = () => {
  const [activeExpTab, setActiveExpTab] = useState(0);

  return (
    <section id="experience" className="py-32 max-w-3xl mx-auto scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--lightest-slate)] whitespace-nowrap">
          <span className="font-mono text-[var(--green)] text-xl">02.</span> Onde Trabalhei
        </h2>
        <div className="h-[1px] bg-[var(--lightest-navy)] w-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l-2 border-[var(--lightest-navy)] md:min-w-[200px]">
          {EXPERIENCES.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveExpTab(index)}
              className={`px-5 py-3 text-left font-mono text-xs whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-ml-[2px] hover:bg-[var(--green)]/5 hover:text-[var(--green)] ${
                activeExpTab === index ?
                  "text-[var(--green)] border-[var(--green)] bg-[var(--green)]/5"
                : "text-[var(--slate)] border-transparent"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div className="flex-1 py-2 animate-in fade-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-[var(--lightest-slate)] mb-1">
            {EXPERIENCES[activeExpTab].role}{" "}
            <span className="text-[var(--green)]">@ {EXPERIENCES[activeExpTab].company}</span>
          </h3>
          <p className="font-mono text-xs text-[var(--slate)] mb-6">{EXPERIENCES[activeExpTab].period}</p>
          <ul className="space-y-4">
            {EXPERIENCES[activeExpTab].bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-[var(--slate)] text-sm leading-relaxed">
                <span className="text-[var(--green)] mt-1.5 shrink-0">▹</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
