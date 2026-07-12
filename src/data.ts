import { Project, Experience, Certificate, Testimonial, SkillCategory } from './types';

export const HERO_DATA = {
  name: "ATAMBA JOEL",
  headline: "Full-Stack Developer • Student • AI Enthusiast",
  intro: "I build modern web applications that solve real-world problems through clean design, scalable architecture, and intuitive user experiences.",
};

export const ABOUT_DATA = {
  bio: "I am an A-Level student from Uganda passionate about software engineering, artificial intelligence, and creating impactful digital solutions. I enjoy transforming ideas into fast, scalable web applications while continuously learning modern technologies.",
  stats: [
    { label: "Projects Built", value: 12, suffix: "+" },
    { label: "Technologies Mastered", value: 15, suffix: "" },
    { label: "GitHub Contributions", value: 850, suffix: "+" },
    { label: "Years Programming", value: 4, suffix: "" }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "stahiza",
    name: "STAHIZA ICT Club Hub",
    description: "A digital hub designed for Standard High School Zzana (STAHIZA) ICT Club, enabling student collaboration, project sharing, and resource distribution.",
    longDescription: "The STAHIZA ICT Club Hub stands as a digital beacon for student developers at Standard High School Zzana. It features collaborative workspaces, a shared repository for study materials, an announcements channel for coding bootcamps, and an interactive showcase of student-made hardware and software innovations. Built to foster peer-to-peer mentoring and scale technology access.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Express"],
    liveUrl: "https://stahiza-ict-club.vercel.app",
    githubUrl: "https://github.com/joel-atamba/stahiza-ict-club-hub",
    highlights: [
      "Real-time resource sharing boards for students",
      "Interactive coding challenge platform with instant feedback",
      "Student project showcase with ratings and peer reviews",
      "Full dark-mode glassmorphic UI styled with premium micro-interactions"
    ]
  },
  {
    id: "pmart",
    name: "PMart",
    description: "A premium full-stack ecommerce platform featuring state-of-the-art catalog search, cart management, stripe payment checkout, and an admin dashboard.",
    longDescription: "PMart is a blazing-fast, modern ecommerce platform designed to deliver premium retail experiences. It is engineered with robust backend inventory sync, intelligent semantic search matching, dynamic filter criteria, secure authentication protocols, and a comprehensive checkout experience. It includes an interactive seller portal for monitoring sales analytics, inventory logs, and product performance metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://pmart-ecommerce.vercel.app",
    githubUrl: "https://github.com/joel-atamba/pmart",
    highlights: [
      "Secure user auth with role-based dashboard states",
      "Optimized client-side search indexing and pagination systems",
      "Dynamic interactive charts visualizing sales statistics",
      "Complete checkout flow with animated success responses"
    ]
  },
  {
    id: "ai-study-assistant",
    name: "AI Study Assistant",
    description: "An AI-powered revision companion helping Ugandan students prepare for national examinations using customized curricula, smart summaries, and interactive quizzes.",
    longDescription: "Designed to help students excel in UNEB national examinations, the AI Study Assistant utilizes custom model configurations to break down complex syllabi into bite-sized, digestible components. Students can upload lecture notes to generate tailored quizzes, chat with an empathetic virtual tutor, and track their progression through detailed visual analytics charts.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Gemini API", "Tailwind CSS", "Express"],
    liveUrl: "https://ai-study-assistant.vercel.app",
    githubUrl: "https://github.com/joel-atamba/ai-study-assistant",
    highlights: [
      "Curriculum-aligned revision guide generation using Gemini AI",
      "Dynamic quiz engine with personalized explanations of correct answers",
      "Interactive chat interface supporting rich text and file uploads",
      "Student progress analytics tracking weaknesses and strengths over time"
    ]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "stahiza-president",
    role: "President",
    company: "STAHIZA ICT Club",
    period: "2024 - Present",
    description: [
      "Led student developers in building the official club community portal, boosting tech interest by 60%.",
      "Organized weekend coding workshops, teaching HTML, CSS, JavaScript, and Web Basics to over 100 peers.",
      "Initiated hardware innovation drives, combining microcontrollers with React-based dashboard systems.",
      "Promoted tech literacy and structured hackathons, mentoring teams of junior student coders."
    ],
    skills: ["Leadership", "Community Building", "Web Development", "Public Speaking", "React"]
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
