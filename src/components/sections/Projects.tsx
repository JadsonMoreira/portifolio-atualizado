import Card from "../Card";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import { PROJECTS } from "../../data/constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--lightest-slate)] whitespace-nowrap">
          <span className="font-mono text-[var(--green)] text-xl">04.</span> Projetos Realizados
        </h2>
        <div className="h-[1px] bg-[var(--lightest-navy)] w-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            subtitle="Projeto em Destaque"
            highlightBorder
            externalLinks={
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--slate)] hover:text-[var(--green)] transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--slate)] hover:text-[var(--green)] transition-colors"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              </div>
            }
            footer={
              <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] text-[var(--slate)]">
                {project.tags.map((tag) => (
                  <li key={tag} className="hover:text-[var(--green)] transition-colors cursor-default">
                    {tag}
                  </li>
                ))}
              </ul>
            }
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="text-[var(--green)]">
                  <FaFolder className="w-10 h-10" />
                </div>
              </div>
              <p>{project.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
