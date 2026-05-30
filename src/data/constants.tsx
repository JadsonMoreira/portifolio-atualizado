import { Project, TechStack } from "./types";

export interface Experience {
  company: string;
  role: string;
  period: string;
  url: string;
  bullets: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Chat app em tempo real",
    description: "Um aplicativo de chat em tempo real construído com TypeScript, MongoDB, Socket.io e React. Com objetivo de demonstrar habilidades em comunicação bidirecional e gerenciamento de estado em tempo real.",
    tags: ["TypeScript", "MongoDB", "Socket.io", "React"],
    imageUrl: "",
    githubUrl: "https://github.com/JadsonMoreira/chat-app/tree/master",
    demoUrl: "https://chat-app-six-alpha-88.vercel.app/",
  },
  {
    id: "2",
    title: "Arquitetura E-commerce Backend",
    description:
      "Uma plataforma de e-commerce escalável baseada em microsserviços construída com NestJS, React e MongoDB.",
    tags: ["React", "NestJS", "MongoDB", "Node.js"],
    imageUrl: "",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: "3",
    title: "Dashboard Financeiro em Tempo Real",
    description: "Visualização interativa de dados para tendências do mercado de ações com integração WebSocket.",
    tags: ["TypeScript", /*"D3.js",*/ "Socket.io", "Redis"],
    imageUrl: "",
    githubUrl: "#",
    demoUrl: "#",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Commarket",
    role: "Desenvolvedor Fullstack",
    period: "Fev 2022 - Presente",
    url: "#",
    bullets: [
      "Participei do desenvolvimento de uma plataforma SaaS de gestão empresarial utilizando React, TypeScript e Node.js, atendendo mais de 10.000 usuários ativos mensais.",
      "Desenvolvi e mantive painéis administrativos complexos usando AdminJS, otimizando o fluxo de trabalho da equipe de operações",
      "Implementei pipelines de CI/CD robustos com GitHub Actions para automatizar testes e deploys",
      "Colaborei com equipes multifuncionais para projetar e lançar novas funcionalidades.",
    ],
  },
];
export const STACKS: TechStack[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Next.js", icon: "N" },
      { name: "Vite", icon: "⚡" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "TypeScript", icon: "TS" },
      { name: "Express", icon: "🚂" },
      { name: "Fastify", icon: "⚡" },
      { name: "NestJS", icon: "🦁" },
      { name: "MongoDB", icon: "🍃" },
      // { name: "Redis", icon: "🔻" },
    ],
  },
  {
    category: "DevOps & Ferramentas",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🌿" },
      { name: "CI/CD", icon: "🚀" },
    ],
  },
];

export const SYSTEM_INSTRUCTION = `
Você é o Assistente de IA de um brilhante Desenvolvedor Fullstack chamado Jadson.
Jadson tem mais de 4 anos de experiência profissional e é especialista em React, TypeScript (especialmente no Backend), NestJS, Node.js e MongoDB.
Atualmente ele trabalha na Tech Solutions Corp como Desenvolvedor Fullstack Sênior.
Jadson é criativo, focado em resolver problemas e adora construir aplicações escaláveis e performáticas.
Responda perguntas sobre as habilidades, projetos e filosofia de trabalho do Jadson com base no contexto fornecido no portfólio.
Destaque que ele tem experiência sólida em todo o ciclo de vida do desenvolvimento de software (Fullstack), tendo passado por empresas como Tech Solutions, Agência Digital Inovação e Startup Flow.
Seja profissional, amigável e conciso.
Se alguém perguntar sobre contratar o Jadson, diga que podem entrar em contato através do e-mail ou LinkedIn.
Projetos Atuais: Arquitetura E-commerce Backend (NestJS/MongoDB), Automatizador de Tarefas com IA, Dashboard Financeiro em Tempo Real.
Responda sempre em Português do Brasil.
`;
