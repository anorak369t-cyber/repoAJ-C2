import { Project, Experience, Certificate, Testimonial, SkillCategory } from './types';

export const HERO_DATA = {
  name: "VORTEX LABS",
  headline: "Full-Stack Developers & UI/UX Designer • Team • AI Enthusiast",
  intro: "We design and build beautiful, highly intuitive web applications that solve real-world problems through visual precision, modern design systems, and robust full-stack architecture.",
};

export const ABOUT_DATA = {
  bio: "We are a designer team from Uganda passionate about software engineering, UI/UX design, artificial intelligence, and creating impactful digital experiences. We specialize in bridging the gap between design precision and robust code, crafting aesthetic interfaces while maintaining fast, scalable backends.",
  stats: [
    { label: "Projects Designed & Built", value: 22, suffix: "+" },
    { label: "Technologies & Tools", value: 18, suffix: "" },
    { label: "GitHub Contributions", value: 850, suffix: "+" },
    { label: "Years in Tech & Design", value: 4, suffix: "" }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "UI/UX Design",
    skills: ["Figma", "User Research", "Wireframing", "High-Fidelity Prototyping", "Design Systems", "Interaction Design", "Typography & Color Theory"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs"]
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "trade journal",
    name: "trade journal",
    description: "A comprehensive, accessible, and highly refined journal system built in Figma, tailored for educational and tech startups.",
    longDescription: "Trade journal is a modern design system created to establish consistent visual identities across multi-platform web applications. Inspired by premium minimalist aesthetics, it features an exhaustive Figma library with accessible color contrast pairings (WCAG AAA compliant), responsive typography sheets, reusable interactive component variants, and fluid motion specifications.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "UI/UX Design", "Design Systems", "Wireframing", "Interactive Prototypes"],
    liveUrl: "https://replit.com",
    githubUrl: "https://github.com/anorak369t-cyber",
    highlights: [
      "Over 150+ customizable nested Figma auto-layout components with interactive state variants",
      "Rigorous WCAG AAA color contrast design tokens supporting accessible dark & light modes",
      "Aesthetic typography hierarchies utilizing Inter and Space Grotesk display pairings",
      "Comprehensive interactive prototype representing an education-tech user journey"
    ]
  },
  {
    id: "Vortex dynamics",
    name: "Vortex dynamics",
    description: "A digital hub designed for Vortex labs team, enabling team work, collaboration, project sharing, and resource distribution.",
    longDescription: "The Vortex dynamics platform stands as a digital beacon for developer teams at vortex labs. It features collaborative workspaces, a shared repository for study and research materials, an announcements channel for coding bootcamps, and an interactive showcase of collaborative-made hardware and software innovations. Built with a user-centric design approach from Figma wireframe concepts.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design", "Express"],
    liveUrl: "vortex-labs-six.vercel.app/",
    githubUrl:"https://github.com/anorak369t-cyber",
    highlights: [
      "Real-time resource sharing boards for students",
      "Interactive coding challenge platform with instant feedback",
      "Clean dark-mode glassmorphic interface styled with custom glass panel borders",
      "Designed entire component-driven user flows in Figma before frontend development"
    ]
  },
  {
    id: "Entax",
    name: "Vortex Entax",
    description: "An interactive entertainment management system facilitating music requests, event registration, and talent showcase curation.",
    longDescription: "Entax Entertainment Desk is a highly custom digital interface tailored for school social events and entertainment assemblies. It features a real-time song request system, an event scheduler for school talent shows, and voting polls for campus competitions, complete with a clean dark-mode visual player theme and intuitive controls.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Interaction Design", "Node.js"],
    liveUrl: "https://404.vercel.app/",
    githubUrl: "https://github.com/anorak369t-cyber",
    highlights: [
      "Real-time student crowd song voting and request queue system",
      "Highly tactical tactile player dashboard layout mimicking physical music soundboards",
      "Embedded mock retro music player complete with sound visualizer effects",
      "Live interactive polling platform with instant charts reporting student votes"
    ]
  },
  {
    id: "CONNECT",
    name: "Nexus connect",
    description: "A comprehensive intranet dashboard aggregating student resources, library index tracking, and peer tutoring networks.",
    longDescription: "Nexus connect is a multi-functional platform bridging the gap between students, educators, and learning assets. It provides high-speed file storage for class hand-outs, real-time book reservation tracking for the school library, and a peer-to-peer revision session coordinator.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Information Architecture", "Supabase"],
    liveUrl: "https://Nexusconnect.vercel.app",
    githubUrl: "https://github.com/anorak369t-cyber",
    highlights: [
      "Unified educational resource repository with smart search filters",
      "Carefully streamlined library index tracking system to reduce transaction steps",
      "Student study group and tutorial scheduler with direct WhatsApp linking",
      "Course grade estimator helping students model target academic results"
    ]
  },
  {
    id: "kynex bizz",
    name: "Kynex bizz",
    description: "A premium digital sales and get it done showcase built for custom business personels to present portfolios, book order appointments and communicate effectively with instant chats.",
    longDescription: "Kynex bizz is a sophisticated custom catalog web application built for high-end advertisment. It integrates an elegant interactive design portfolio, custom fit measurement profiles, and a bespoke appointment reservation interface that handles fabric choices, style specs, and delivery dates.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "Figma Prototyping", "Visual Design", "EmailJS"],
    liveUrl: "https://kynex bizz.vercel.app/",
    githubUrl: "https://github.com/anorak369t-cyber",
    highlights: [
      "Premium, high-fashion business and integrated chat design",
      "Interactive multi-step form capturing comprehensive client preferences",
      "Seamless layout animations showcasing luxurious designs and business details",
      "Automated appointment bookings synced with live supplier calendars"
    ]
  },
  {
    id: "status-saver",
    name: "Stat",
    description: "A highly efficient utility application designed for media curation, enabling direct download, preview, and sharing of WhatsApp status updates.",
    longDescription: "Status Saver is a lightweight, responsive utility tool built for seamless mobile media organization. It fetches, parses, and formats temporal media uploads, allowing users to safely preview images, stream video files, and batch-save them to local device memory.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Mobile UX", "Tailwind CSS", "IndexedDB", "Lucide Icons"],
    liveUrl: "https://stat.vercel.app",
    githubUrl: "https://github.com/anorak369t-cyber",
    highlights: [
      "Mobile-first fluid gesture layouts designed specifically for handheld displays",
      "Seamless HTML5 light video player optimized for immediate streaming",
      "Batch action manager allowing multi-save or multi-delete operations",
      "Local media gallery categorized cleanly by images and video formats"
    ]
  },
  {
    id: "ai-study-assistant",
    name: "AI Study Assistant",
    description: "An AI-powered revision companion helping Ugandan students prepare for national examinations using customized curricula, smart summaries, and interactive quizzes.",
    longDescription: "Designed to help students excel in UNEB national examinations, the AI Study Assistant utilizes custom model configurations to break down complex syllabi into bite-sized, digestible components. Students can upload lecture notes to generate tailored quizzes, chat with an empathetic virtual tutor, and track their progression through detailed visual analytics charts.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "UX Design", "Gemini API", "Tailwind CSS"],
    liveUrl: "https://charty.vercel.app",
    githubUrl: "https://github.com/anorak369t-cyber/ai-study-assistant",
    highlights: [
      "Designed a highly motivating, stress-free interface layout using welcoming colors",
      "Dynamic quiz engine with personalized explanations of correct answers",
      "Interactive chat interface supporting rich text and file uploads",
      "Student progress analytics tracking weaknesses and strengths over time"
    ]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "Vortexlabs mentorship",
    role: "President & Lead UI/UX Designer",
    company: "vortex labs",
    period: "2024 - Present",
    description: [
      "Led team developers and designers, establishing a unified Figma workspace to collaborate on mockups and design systems.",
      "Spearheaded the visual interface design and responsive layout specifications of the official ecosystem portal.",
      "Organized weekend coding and design workshops, teaching Figma wireframing, UX patterns, and modern Tailwind styling to 100+ peers.",
      "Mentored student teams in local hackathons, teaching how to structure visual hierarchies and pitch interactive prototypes."
    ],
    skills: ["Figma", "UI/UX Design", "Product Strategy", "Leadership", "React", "Tailwind CSS"]
  }
];

export const CERTIFICATIONS_DATA: Certificate[] = [
  {
    id: "cs50",
    name: "CS50: Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2025",
    credentialUrl: "https://cs50.harvard.edu",
    iconName: "Terminal"
  },
  {
    id: "fcc-responsive",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialUrl: "https://freecodecamp.org",
    iconName: "Layout"
  },
  {
    id: "google-ai",
    name: "Google AI Essentials",
    issuer: "Google",
    date: "2025",
    credentialUrl: "https://grow.google",
    iconName: "Brain"
  },
  {
    id: "code-with-mosh",
    name: "Mastering React & Node.js",
    issuer: "Code with Mosh",
    date: "2024",
    credentialUrl: "https://codewithmosh.com",
    iconName: "Code"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Emmanuel",
    role: "ICT Department",
    company: "Vortes labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    content: "Grok369 has been an exceptional leader as vortex President. His ability to guide others, build the vortex portal, and deliver advanced code at such a young age is inspiring. He is a natural-born software engineer."
  },
  {
    id: "t2",
    name: "Melissa",
    role: "Secretary",
    company: "Vortex labs",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    content: "Working with Grok on the vortex project is a masterclass in clean design and prompt execution. His passion for AI and full-stack development is infectious, and he's always ready to help anyone debug code."
  },
  {
    id: "t3",
    name: "Alex",
    role: "Senior team Collaborator",
    company: "vortex labs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    content: "Grok's work on PMart and the AI Revision tools shows deep technical capability. He doesn't just build UI; he thinks about API latency, DB index scaling, and premium animations. His future is incredibly bright."
  }
];
