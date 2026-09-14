export type SocialLink = {
  label: string;
  href: string;
};

export type ProfileAbout = {
  title: string;
  paragraphs: string[];
  principles: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  school: string;
  location: string;
};

export type AwardItem = {
  year: string;
  title: string;
  issuer: string;
};

export const profile = {
  name: "Chan Jeun Yu",
  role: "Statistical Assistant",
  location: "Hong Kong",
  phone: "+852 61556411",
  tagline:
    "Data science and AI engineering across RAG systems, conversational platforms, and production analytics workflows.",
  intro:
    "BSc (Hons) in Data Science & Analytics from The Hong Kong Polytechnic University. I build RAG agents, full-stack AI products, and data pipelines—from WYNI AI's conversational platform and LegCo Insight Bot to government statistical reporting and computer-vision deployments.",
  email: "Joey646155@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/x00c" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/joyner-chan-jojo" },
  ] satisfies SocialLink[],
  about: {
    title: "Background",
    paragraphs: [
      "I work at the intersection of data engineering, applied AI, and full-stack delivery—grounding LLM features in reliable retrieval, validation, and observability.",
      "Recent roles span AI development (RAG agents, ERP/WMS migration with GenAI-assisted engineering), computer vision (YOLO, DeepStream), and statistical operations (BoP data validation, IMF publication automation).",
    ],
    principles: [
      "Validate data and model outputs before scaling to production traffic.",
      "Design RAG and agent workflows with clear fallback and human-in-the-loop paths.",
      "Automate repetitive document and reporting pipelines where accuracy matters.",
      "Ship incrementally with measurable quality checks—not prompt-only iteration.",
    ],
  } satisfies ProfileAbout,
  metrics: [
    { label: "CV detection accuracy", value: "92%" },
    { label: "Images preprocessed", value: "27k+" },
    { label: "Data-entry efficiency gain", value: "15%" },
    { label: "Scholarship", value: "2021" },
  ],
  skillGroups: [
    {
      title: "Programming Languages",
      items: ["Python", "SQL", "R", "SAS", "Haskell", "TypeScript"],
    },
    {
      title: "LLM & NLP",
      items: [
        "RAG",
        "Fine-tuning",
        "Transformers",
        "AI Agents",
        "Gemini",
        "DeepSeek",
        "OpenAI",
      ],
    },
    {
      title: "AI Frameworks",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
      title: "Databases & Cloud",
      items: ["PostgreSQL", "Supabase", "MySQL", "pgvector", "Azure", "Docker"],
    },
    {
      title: "General & Tools",
      items: ["Git", "ETL", "Alteryx", "Next.js", "React", "Node.js"],
    },
    {
      title: "Languages",
      items: ["Cantonese (Native)", "Mandarin (Native)", "English (Intermediate)"],
    },
  ] satisfies SkillGroup[],
  timeline: [
    {
      period: "Dec 2025 – Present",
      role: "Statistical Assistant",
      company: "Hong Kong Census and Statistics Department, HKSAR Government",
      summary:
        "Cross-country statistical data consolidation; BoP data preparation, calibration, and validation; Python automation for monthly IMF release-date PDF retrieval and archival; publication schedule verification.",
    },
    {
      period: "Aug 2025 – Oct 2025",
      role: "AI Developer (Full-time)",
      company: "WYNI AI LIMITED",
      summary:
        "Core AI conversational platform with RAG multi-turn dialogues; RAG agent for HK Department of Health (Gemini/GPT, real-time sources); legacy ERP-to-WMS migration with GenAI-assisted spec coding and refactoring.",
    },
    {
      period: "Apr 2025 – May 2025",
      role: "STEM Engineer (Part-time)",
      company: "Parami Company Limited",
      summary:
        "Developed and deployed a YOLO-based object detection system to improve precision and efficiency for robotics applications.",
    },
    {
      period: "Aug 2024",
      role: "Programmer Trainee (Part-time)",
      company: "Smart Business Consultancy Limited",
      summary:
        "Built an HTML/JavaScript data input interface integrated with MySQL, improving data processing efficiency by 15%.",
    },
    {
      period: "Jun 2024 – Aug 2024",
      role: "STEM Intern — AI/ML (Computer Vision)",
      company: "LifeSparrow Solution Limited",
      summary:
        "Raised drone imagery human-detection accuracy from 75% to 92% with Python and NVIDIA DeepStream; preprocessed and annotated 27,000+ images; deployed models on Azure.",
    },
  ] satisfies TimelineItem[],
  education: [
    {
      period: "Sep 2022 – Jan 2025",
      degree: "BSc (Hons) Data Science & Analytics",
      school: "The Hong Kong Polytechnic University",
      location: "Hong Kong",
    },
    {
      period: "Sep 2023 – Jan 2024",
      degree: "Outbound Exchange Program",
      school: "Chalmers University of Technology",
      location: "Sweden",
    },
    {
      period: "Sep 2020 – Aug 2022",
      degree: "Associate in Statistics and Data Science",
      school: "Hong Kong Community College",
      location: "Hong Kong",
    },
  ] satisfies EducationItem[],
  awards: [
    {
      year: "2021",
      title: "Talent Development Scholarship — Innovation, Science and Technology",
      issuer: "HKSAR Government Scholarship Fund",
    },
  ] satisfies AwardItem[],
};
