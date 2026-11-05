export interface ClubDomain {
  id: string;
  name: string;
  slug: string;
  description: string;
  lead: string;
  iconName: string;
  tags: string[];
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
    id: "ai-ml",
    name: "AI Systems & LLMs",
    slug: "ai-ml",
    description: "Neural architectures, local RAG pipelines, autonomous multi-agent reasoning graphs, and model serving.",
    lead: "Sai Srikar B & Padma Sree M",
    iconName: "Cpu",
    tags: ["PyTorch", "Transformers", "Local RAG", "FastAPI", "Vector DBs"],
  },
  {
    id: "web",
    name: "Full Stack & Web",
    slug: "web",
    description: "Next.js 15, React 19, distributed backend APIs, TypeScript, and edge runtime architectures.",
    lead: "Chandhru L & ASVAND K",
    iconName: "Globe",
    tags: ["Next.js", "React 19", "Tailwind", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    id: "cloud-devops",
    name: "Cloud & MLOps",
    slug: "cloud-devops",
    description: "Kubernetes orchestration, model serving pipelines, CI/CD automation, and scalable cloud infrastructure.",
    lead: "Sabhari Sainath AM & Sakthivel R",
    iconName: "Cloud",
    tags: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "FastAPI Serving"],
  },
  {
    id: "backend-systems",
    name: "Backend Architecture",
    slug: "backend",
    description: "High-concurrency distributed databases, microservice event queues, and low-latency API systems.",
    lead: "Sai Kishore S & Sarvin S",
    iconName: "Layers",
    tags: ["PostgreSQL", "Redis", "Distributed DBs", "Go", "Node.js"],
  },
  {
    id: "spatial-iot",
    name: "Robotics & Spatial 3D",
    slug: "spatial-iot",
    description: "Embedded microcontrollers, ROS robotics pipelines, Three.js spatial simulations, and IoT sensors.",
    lead: "Vijay Ghanesh G J & Chithralekha B",
    iconName: "Gamepad2",
    tags: ["Three.js", "WebGL", "Embedded C++", "ROS", "IoT Telemetry"],
  },
  {
    id: "ui-ux",
    name: "UI / UX & Design Systems",
    slug: "ui-ux",
    description: "Monochrome Swiss layout, typography hierarchy, micro-interactions, and accessibility standards.",
    lead: "DEVS Design Guild",
    iconName: "Palette",
    tags: ["Figma", "Design Tokens", "Swiss Grid", "Micro-Motion", "Prototyping"],
  },
];

export const initialProjects: ClubProject[] = [
  {
    id: "devs-p2p",
    title: "DEVs P2P Learning Curriculum",
    summary: "Multi-domain peer-to-peer technical roadmaps, mentor directories, curated resource hubs, and capstone projects.",
    domain: "Full Stack & AI",
    liveUrl: "https://learn.devsrec.com",
    githubUrl: "https://github.com/Saisrikar20/DEVs-P2P",
    tags: ["React", "Tailwind CSS", "Vite", "P2P Engineering"],
    featured: true,
    badge: "Official Platform",
  },
  {
    id: "rec-virtual-experience",
    title: "REC Virtual Experience 3D",
    summary: "Immersive 3D interactive virtual campus walkthrough allowing students and visitors to explore REC college infrastructure.",
    domain: "Spatial 3D & WebGL",
    liveUrl: "https://rec-experience.netlify.app",
    tags: ["Three.js", "WebGL", "3D Campus", "Vite"],
    featured: true,
    badge: "Flagship 3D",
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
    domain: "Real-time Systems",
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
    id: "sai-srikar",
    name: "Sai Srikar B",
    role: "Lead Organizer & AI Systems Architect",
    domain: "AI / ML & Systems",
    year: "Core Board Lead",
    avatar: "/sai-srikar.jpg",
    github: "https://github.com/Saisrikar20",
    linkedin: "https://www.linkedin.com/in/saisrikarb/",
    bio: "Architecting high-throughput local inference engines, production ML pipelines, and autonomous agent systems.",
    isAlumni: false,
  },
  {
    id: "sabhari",
    name: "Sabhari Sainath AM",
    role: "Co-Organizer & MLOps Lead",
    domain: "AI / ML & Cloud",
    year: "Core Board",
    avatar: "/sabhari-anime-pfp.jpg",
    github: "https://github.com/amsabharisainath-lab",
    linkedin: "https://www.linkedin.com/in/sabhari-sainath-am-935a4a267",
    instagram: "https://www.instagram.com/sab_sai_95",
    bio: "Connecting deep learning models to scalable production pipelines, low-latency endpoints, and robust deployment workflows.",
    isAlumni: false,
  },
  {
    id: "padma-sree",
    name: "Padma Sree M",
    role: "Co-Organizer & GenAI Architect",
    domain: "AI / ML & Data Analytics",
    year: "Core Board",
    avatar: "/padma-anime-pfp.jpg",
    github: "https://github.com/padmasreemcse-glitch",
    linkedin: "https://www.linkedin.com/in/padma-sree-m-63393a3aa/",
    instagram: "https://www.instagram.com/pdsree_26",
    bio: "Mentoring on modern transformer dynamics, contextual intelligence with vector search, and agentic reasoning graphs.",
    isAlumni: false,
  },
  {
    id: "chandhru",
    name: "Chandhru L",
    role: "Head of Operations",
    domain: "Operations & Frontend",
    year: "Core Board",
    avatar: "/chandhru-l.jpg",
    bio: "Operations, workflow scaling, and community mentorship execution across all REC engineering branches.",
    isAlumni: false,
  },
  {
    id: "asvand",
    name: "ASVAND K",
    role: "Frontend Engineer & Mentor",
    domain: "Frontend & Web",
    year: "Technical Mentor",
    avatar: "/asvand.jpg",
    bio: "Design-to-code execution, modern responsive web engineering, and performance optimization.",
    isAlumni: false,
  },
  {
    id: "sai-kishore",
    name: "Sai Kishore S",
    role: "Lead Backend Mentor",
    domain: "Backend Systems",
    year: "Technical Mentor",
    avatar: "/sai-kishore.jpg",
    bio: "Distributed backends, high-concurrency database architectures, and API gateway engineering.",
    isAlumni: false,
  },
  {
    id: "sarvin",
    name: "Sarvin S",
    role: "Backend Developer",
    domain: "Backend & Database",
    year: "Technical Mentor",
    avatar: "/sarvin.jpg",
    bio: "PostgreSQL schema design, query optimization, and microservice orchestration.",
    isAlumni: false,
  },
  {
    id: "sakthivel",
    name: "Sakthivel R",
    role: "System Design Architect",
    domain: "Cloud & DevOps",
    year: "Technical Mentor",
    avatar: "/avatar-cloud.jpg",
    bio: "Cloud infrastructure, Kubernetes clusters, and zero-downtime continuous deployment pipelines.",
    isAlumni: false,
  },
  {
    id: "swayam",
    name: "Swayam S",
    role: "Founding Lead & Architect",
    domain: "Full Stack & Web",
    year: "Founder / Alumni",
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
    year: "Technical Lead / Alumni",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com/Venkateshajay",
    linkedin: "https://www.linkedin.com/in/venkateshajay04",
    bio: "Core contributor to REC Virtual Experience and early DEVS web infrastructure.",
    isAlumni: true,
  },
];
