import * as Si from "react-icons/si";

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  const iconMap: Record<string, React.ElementType> = {
    react: Si.SiReact,
    typescript: Si.SiTypescript,
    tailwindcss: Si.SiTailwindcss,
    tailwind: Si.SiTailwindcss,
    nextjs: Si.SiNextdotjs,
    vite: Si.SiVite,
    nodejs: Si.SiNodedotjs,
    express: Si.SiExpress,
    fastify: Si.SiFastify,
    nestjs: Si.SiNestjs,
    mongodb: Si.SiMongodb,
    redis: Si.SiRedis,
    docker: Si.SiDocker,
    git: Si.SiGit,
    cicd: Si.SiGithubactions,
    python: Si.SiPython,
    fastapi: Si.SiFastapi,
    d3js: Si.SiD3,
    socketio: Si.SiSocketdotio,
  };

  const IconComponent = iconMap[normalizedName];

  if (!IconComponent) {
    return <span className="text-[10px] font-mono opacity-50">{name}</span>;
  }

  return <IconComponent className={className} />;
};

export default TechIcon;
