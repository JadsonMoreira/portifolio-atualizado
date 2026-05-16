
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface TechStack {
  category: string;
  skills: { name: string; icon: string }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
