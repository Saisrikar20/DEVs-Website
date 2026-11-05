export interface ClubDomain {
  id: string;
  name: string;
  slug: string;
  description: string;
  lead: string;
  iconName: string;
  tags: string[];
  accentColor: string;
}

export interface ClubProject {
  id: string;
  title: string;
  summary: string;
  domain: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured: boolean;
  badge?: string;
}

export interface ClubEvent {
  id: string;
  title: string;
  category: "Hackathon" | "Workshop" | "Bootcamp" | "Tech Talk";
  date: string;
  time: string;
  venue: string;
  description: string;
  registrationOpen: boolean;
  seatsTotal: number;
  seatsFilled: number;
  slug: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  domain: string;
  year: string;
  avatar: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  bio: string;
  isAlumni?: boolean;
}

export interface ClubStats {
  members: number;
  hackathons: number;
  platforms: number;
  prizeMoney: number;
  workshopsHosted: number;
}

export const initialClubStats: ClubStats = {
  members: 1500,
  hackathons: 42,
  platforms: 4,
  prizeMoney: 25000,
  workshopsHosted: 36,
};

export const initialDomains: ClubDomain[] = [
  {
    id: "web",
    name: "Full Stack & Web",
    slug: "web",
    description: "Next.js, React, Node.js, distributed backends, TypeScript, and edge computing architectures.",
    lead: "Swayam S & Venkatesh C",
    iconName: "Globe",
    tags: ["Next.js", "React 19", "Tailwind", "TypeScript", "PostgreSQL", "Docker"],
    accentColor: "from-emerald-500/20 to-teal-500/5",
  },
  {
    id: "ai-ml",
    name: "AI / ML & Agents",
    slug: "ai-ml",
    description: "Deep learning, LLM fine-tuning, autonomous agents, computer vision, and neural pipelines.",
    lead: "Shugavaneshwar R",
    iconName: "Cpu",
    tags: ["PyTorch", "Transformers", "LangChain", "FastAPI", "Vector DBs"],
    accentColor: "from-violet-500/20 to-purple-500/5",
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    slug: "cloud-devops",
    description: "Kubernetes, CI/CD pipelines, container orchestration, microservices, and AWS infrastructure.",
    lead: "Jeyanth V",
    iconName: "Cloud",
    tags: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    accentColor: "from-cyan-500/20 to-blue-500/5",
  },
  {
    id: "game-arvr",
    name: "Game Dev & Spatial 3D",
    slug: "game-arvr",
    description: "Unity, Three.js, WebGL shaders, campus simulations, and immersive spatial experiences.",
    lead: "REC Gaming Guild",
    iconName: "Gamepad2",
    tags: ["Three.js", "Unity", "WebGL", "Blender", "GLSL Shaders"],
    accentColor: "from-pink-500/20 to-rose-500/5",
  },
  {
    id: "mobile",
    name: "Mobile Engineering",
    slug: "mobile",
    description: "Cross-platform mobile apps, native Kotlin/Swift modules, and responsive device experiences.",
    lead: "Mobile Labs",
    iconName: "Smartphone",
    tags: ["Flutter", "React Native", "Kotlin", "Firebase"],
    accentColor: "from-amber-500/20 to-orange-500/5",
  },
  {
    id: "ui-ux",
    name: "UI / UX & Product Design",
    slug: "ui-ux",
    description: "Figma design systems, micro-interactions, user research, wireframing, and accessibility.",
    lead: "Design Bureau",
    iconName: "Palette",
    tags: ["Figma", "Design Systems", "Prototyping", "Motion", "User Research"],
    accentColor: "from-indigo-500/20 to-blue-500/5",
  },
];

export const initialProjects: ClubProject[] = [
  {
    id: "rec-virtual-experience",
    title: "REC Virtual Experience",
    summary: "Immersive 3D interactive virtual campus walkthrough giving students and visitors an exploration of REC college infrastructure.",
    domain: "Spatial 3D & WebGL",
    liveUrl: "https://rec-experience.netlify.app",
    tags: ["Three.js", "WebGL", "3D Modeling", "Vite"],
    featured: true,
    badge: "Flagship 3D",
  },
  {
    id: "devs-p2p",
    title: "DEVs P2P Learning Curriculum",
    summary: "Multi-domain peer-to-peer technical roadmaps, mentor directories, curated resource hubs, and capstone projects.",
    domain: "Full Stack & Web",
    liveUrl: "https://learn.devsrec.com",
    tags: ["React", "Tailwind CSS", "Vite", "P2P Education"],
    featured: true,
    badge: "Active Platform",
  },
  {
    id: "rec-explore-game",
    title: "REC Explore: The Game",
    summary: "Campus-wide adventure game with quests, campus lore, interactive mini-challenges, and student leaderboards.",
    domain: "Game Dev",
    tags: ["Unity", "C#", "Game Physics", "Blender"],
    featured: true,
    badge: "Campus Game",
  },
  {
    id: "devs-chat",
    title: "DEVS Chat Engine",
    summary: "Real-time communication suite built for club members, project pods, and hackathon teams with end-to-end sync.",
    domain: "Web & Realtime",
    liveUrl: "https://devschat-c2d01.web.app",
    tags: ["Firebase", "WebSockets", "React", "Authentication"],
    featured: false,
    badge: "Internal Tool",
  },
];

export const initialEvents: ClubEvent[] = [
  {
    id: "devathon-2025",
    title: "DEVATHON 2025: National Hackathon",
    category: "Hackathon",
    date: "March 28-29, 2025",
    time: "09:00 AM - 09:00 PM (36 Hours)",
    venue: "Main Auditorium & Computing Labs, REC Campus",
    description: "Annual national level 36-hour hackathon. Tracks in Generative AI, Web3, Smart Campus, and Open Innovation with industry mentors and cash prizes.",
    registrationOpen: true,
    seatsTotal: 400,
    seatsFilled: 312,
    slug: "devathon-2025",
    featured: true,
  },
  {
    id: "designer-mode-on",
    title: "Designer Mode On: UI/UX Workshop",
    category: "Workshop",
    date: "April 12, 2025",
    time: "01:30 PM - 04:30 PM",
    venue: "Design Lab 3, REC Campus",
    description: "Deep dive into Figma auto-layout, design tokens, micro-interactions, and prototyping modern SaaS products.",
    registrationOpen: true,
    seatsTotal: 100,
    seatsFilled: 84,
    slug: "designer-mode-on",
    featured: false,
  },
  {
    id: "fullstack-be-dev",
    title: "Be a UI & Full Stack Developer",
    category: "Bootcamp",
    date: "April 26, 2025",
    time: "10:00 AM - 03:00 PM",
    venue: "Computer Science Lab 4",
    description: "Hands-on crash course building full stack web applications with Next.js 15, Tailwind v4, Supabase, and Vercel deployments.",
    registrationOpen: true,
    seatsTotal: 120,
    seatsFilled: 95,
    slug: "be-a-ui-developer",
    featured: false,
  },
];

export const initialTeamMembers: TeamMember[] = [
  {
    id: "swayam",
    name: "Swayam S",
    role: "Founding Lead & Architect",
    domain: "Full Stack & Web",
    year: "Final Year / Alumni",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com/swayammedia",
    linkedin: "https://www.linkedin.com/in/devswayam/",
    bio: "Pioneered DEVS REC and student tech community initiatives at Rajalakshmi Engineering College.",
    isAlumni: true,
  },
  {
    id: "venkatesh",
    name: "Venkatesh C",
    role: "Technical Lead",
    domain: "Full Stack & Systems",
    year: "Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com/Venkateshajay",
    linkedin: "https://www.linkedin.com/in/venkateshajay04",
    bio: "Core contributor to REC Virtual Experience and DEVS web infrastructure.",
  },
  {
    id: "shuga",
    name: "Shugavaneshwar R",
    role: "AI & Innovation Lead",
    domain: "AI / ML",
    year: "Core Lead",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Specializing in neural models, agentic workflows, and hackathon team mentoring.",
  },
  {
    id: "jeyanth",
    name: "Jeyanth V",
    role: "DevOps & Cloud Lead",
    domain: "Cloud & Systems",
    year: "Core Lead",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Cloud architecture, container deployments, and CI/CD automation champion.",
  },
];
