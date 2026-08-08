import { Project, Experience, Certificate, Testimonial, SkillCategory } from './types';

export const HERO_DATA = {
  name: "ATAMBA JOEL",
  headline: "Full-Stack Developer & UI/UX Designer • Student • AI Enthusiast",
  intro: "I design and build beautiful, highly intuitive web applications that solve real-world problems through visual precision, modern design systems, and robust full-stack architecture.",
};

export const ABOUT_DATA = {
  bio: "I am an A-Level student from Uganda passionate about software engineering, UI/UX design, artificial intelligence, and creating impactful digital experiences. I specialize in bridging the gap between design precision and robust code, crafting aesthetic interfaces while maintaining fast, scalable backends.",
  stats: [
    { label: "Projects Designed & Built", value: 12, suffix: "+" },
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
    id: "aura-design-system",
    name: "Aura UI Design System",
    description: "A comprehensive, accessible, and highly refined design system built in Figma, tailored for educational and tech startups.",
    longDescription: "Aura is a modern design system created to establish consistent visual identities across multi-platform web applications. Inspired by premium minimalist aesthetics, it features an exhaustive Figma library with accessible color contrast pairings (WCAG AAA compliant), responsive typography sheets, reusable interactive component variants, and fluid motion specifications.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "UI/UX Design", "Design Systems", "Wireframing", "Interactive Prototypes"],
    liveUrl: "https://figma.com/@aura-design-system-mock",
    githubUrl: "https://github.com/joel-atamba/aura-ui-system",
    highlights: [
      "Over 150+ customizable nested Figma auto-layout components with interactive state variants",
      "Rigorous WCAG AAA color contrast design tokens supporting accessible dark & light modes",
      "Aesthetic typography hierarchies utilizing Inter and Space Grotesk display pairings",
      "Comprehensive interactive prototype representing an education-tech user journey"
    ]
  },
  {
    id: "stahiza",
    name: "STAHIZA ICT Club Hub",
    description: "A digital hub designed for Standard High School Zzana (STAHIZA) ICT Club, enabling student collaboration, project sharing, and resource distribution.",
    longDescription: "The STAHIZA ICT Club Hub stands as a digital beacon for student developers at Standard High School Zzana. It features collaborative workspaces, a shared repository for study materials, an announcements channel for coding bootcamps, and an interactive showcase of student-made hardware and software innovations. Built with a user-centric design approach from Figma wireframe concepts.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design", "Express"],
    liveUrl: "https://ict-club-hub-stahiza.vercel.app/",
    githubUrl: "https://github.com/joel-atamba/stahiza-ict-club-hub",
    highlights: [
      "Real-time resource sharing boards for students",
      "Interactive coding challenge platform with instant feedback",
      "Clean dark-mode glassmorphic interface styled with custom glass panel borders",
      "Designed entire component-driven user flows in Figma before frontend development"
    ]
  },
  {
    id: "stahiza-ent-desk",
    name: "STAHIZA Entertainment Desk",
    description: "An interactive school entertainment management system facilitating music requests, event registration, and talent showcase curation.",
    longDescription: "STAHIZA Entertainment Desk is a highly custom digital interface tailored for school social events and entertainment assemblies. It features a real-time song request system, an event scheduler for school talent shows, and voting polls for campus competitions, complete with a clean dark-mode visual player theme and intuitive controls.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Interaction Design", "Node.js"],
    liveUrl: "https://ict-club-hub-stahiza.vercel.app/",
    githubUrl: "https://github.com/joel-atamba/stahiza-ent-desk",
    highlights: [
      "Real-time student crowd song voting and request queue system",
      "Highly tactical tactile player dashboard layout mimicking physical music soundboards",
      "Embedded mock retro music player complete with sound visualizer effects",
      "Live interactive polling platform with instant charts reporting student votes"
    ]
  },
  {
    id: "stahiza-hub",
    name: "STAHIZA Hub Portal",
    description: "A comprehensive school intranet dashboard aggregating student resources, library index tracking, and peer tutoring networks.",
    longDescription: "STAHIZA Hub is a multi-functional campus platform bridging the gap between students, educators, and learning assets. It provides high-speed file storage for class hand-outs, real-time book reservation tracking for the school library, and a peer-to-peer revision session coordinator.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Information Architecture", "Supabase"],
    liveUrl: "https://stahiza-hub.vercel.app",
    githubUrl: "https://github.com/joel-atamba/stahiza-hub",
    highlights: [
      "Unified educational resource repository with smart search filters",
      "Carefully streamlined library index tracking system to reduce transaction steps",
      "Student study group and tutorial scheduler with direct WhatsApp linking",
      "Course grade estimator helping students model target academic results"
    ]
  },
  {
    id: "laceon-ak-stitches",
    name: "Laceon AK Stitches",
    description: "A premium digital boutique and tailoring showcase built for custom garment designers to present portfolios and book order appointments.",
    longDescription: "Laceon AK Stitches is a sophisticated custom catalog web application built for high-end tailoring. It integrates an elegant interactive design portfolio, custom fit measurement profiles, and a bespoke appointment reservation interface that handles fabric choices, style specs, and delivery dates.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "Figma Prototyping", "Visual Design", "EmailJS"],
    liveUrl: "https://laceon-ak-stiches.vercel.app/",
    githubUrl: "https://github.com/joel-atamba/laceon-ak-stitches",
    highlights: [
      "Premium, high-fashion typography styling and minimal layout design",
      "Interactive multi-step form capturing comprehensive client fit measurements",
      "Seamless layout animations showcasing luxurious fabric designs and tailoring details",
      "Automated appointment bookings synced with live designer calendars"
    ]
  },
  {
    id: "status-saver",
    name: "Status Saver Utility",
    description: "A highly efficient utility application designed for media curation, enabling direct download, preview, and sharing of WhatsApp status updates.",
    longDescription: "Status Saver is a lightweight, responsive utility tool built for seamless mobile media organization. It fetches, parses, and formats temporal media uploads, allowing users to safely preview images, stream video files, and batch-save them to local device memory.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Mobile UX", "Tailwind CSS", "IndexedDB", "Lucide Icons"],
    liveUrl: "https://status-saver-app.vercel.app",
    githubUrl: "https://github.com/joel-atamba/status-saver",
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
    liveUrl: "https://ai-study-assistant.vercel.app",
    githubUrl: "https://github.com/joel-atamba/ai-study-assistant",
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
    id: "stahiza-president",
    role: "President & Lead UI/UX Designer",
    company: "STAHIZA ICT Club",
    period: "2024 - Present",
    description: [
      "Led student developers and designers, establishing a unified Figma workspace to collaborate on mockups and design systems.",
      "Spearheaded the visual interface design and responsive layout specifications of the official club community portal.",
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
    name: "Emmanuel Ssebuliba",
    role: "Patron / ICT Department",
    company: "Standard High School Zzana (STAHIZA)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    content: "Joel has been an exceptional leader as ICT Club President. His ability to guide other students, build the club portal, and deliver advanced code at such a young age is inspiring. He is a natural-born software engineer."
  },
  {
    id: "t2",
    name: "Melissa Namazzi",
    role: "Secretary",
    company: "STAHIZA ICT Club",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    content: "Working with Joel on the Club Hub project was a masterclass in clean design and prompt execution. His passion for AI and full-stack development is infectious, and he's always ready to help anyone debug code."
  },
  {
    id: "t3",
    name: "Alex Kyobe",
    role: "Senior Student Collaborator",
    company: "STAHIZA Tech Devs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    content: "Joel's work on PMart and the AI Revision tools shows deep technical capability. He doesn't just build UI; he thinks about API latency, DB index scaling, and premium animations. His future is incredibly bright."
  }
];
