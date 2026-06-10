// ============================================================
// 🔧 PORTFOLIO DATA — UPDATE ALL YOUR PERSONAL INFO HERE
// ============================================================

export const personalInfo = {
  name: "Bhavana H",
  title: "Aspiring Software Engineer | Business Analyst | Data Analyst",
  tagline: "CSBS student passionate about technology, data analysis, and solving real-world challenges.",
  email: "bhavanahari08@gmail.com",
  location: "Chennai, India",
  phone: "",
  bio: "Hi, I'm Bhavana H, a Computer Science and Business Systems (CSBS) student at Easwari Engineering College with a passion for technology, data analysis, and solving real-world challenges. I enjoy combining technical knowledge with analytical thinking to understand problems, identify opportunities, and develop effective solutions.\n\nMy skills include C, C++, Python, HTML, CSS, DBMS, SQL, Power BI, Data Analysis, Business Intelligence, AI/ML concepts, IoT, Cybersecurity, Excel, Requirements Analysis, Process Analysis, Critical Thinking, Problem Solving, Leadership, Team Management, Communication, and Collaboration.\n\nI am particularly interested in data-driven decision making, business analysis, and software development. I enjoy analyzing information, understanding business needs, identifying patterns and trends, and translating insights into practical solutions that create value. Through hackathons, continuous learning, and hands-on experience, I have strengthened my analytical mindset, adaptability, and ability to work effectively in team environments.\n\nMy goal is to build a career as a Software Engineer, Business Analyst, or Data Analyst, where I can leverage technology, business understanding, and analytical skills to solve complex problems and drive meaningful impact.",
  careerGoal:
    "My career goal is to grow as a Software Engineer, Business Analyst, or Data Analyst, leveraging technology and data-driven insights to solve complex problems and create meaningful impact. I aim to continuously enhance my technical and analytical skills while contributing to innovative solutions that drive business success.",
  passion:
    "I am driven by a strong interest in technology, data analytics, and business problem-solving. I enjoy exploring complex challenges, analyzing information, and developing solutions that create measurable value. My interests span software development, business analysis, and data-driven decision-making, where I can combine technical expertise with analytical thinking to address real-world problems.",

  // ── Social Links ──────────────────────────────────────────
  social: {
    github: "https://github.com/bhavanahari08-art",
    linkedin: "https://www.linkedin.com/in/bhavana-hariharan-0449a1381/",
    twitter: "",
    leetcode: "https://leetcode.com/u/bhavanasrm/",
    hackerrank: "",
    codechef: "",
  },

  // ── Resume ────────────────────────────────────────────────
  resumePath: "/resume.pdf",
};

// ── Typing animation strings ─────────────────────────────────
export const typingStrings = [
  "Aspiring Software Engineer",
  "Aspiring Business Analyst",
  "Aspiring Data Analyst",
  "CSBS Student",
];

// ── Skills ────────────────────────────────────────────────────
// Skill levels are varied and realistic (not all 90%)
export const skills = {
  languages: [
    { name: "Python", level: 82 },
    { name: "C Programming", level: 78 },
    { name: "C++", level: 75 },
    { name: "SQL", level: 78 },
    { name: "HTML/CSS", level: 80 },
  ],
  frameworks: [
    { name: "Power BI", level: 74 },
    { name: "Excel", level: 85 },
    { name: "DBMS", level: 76 },
    { name: "Data Analysis", level: 80 },
    { name: "Business Intelligence", level: 78 },
  ],
  tools: [
    { name: "Requirements Analysis", level: 75 },
    { name: "Process Analysis", level: 72 },
    { name: "Microsoft Copilot", level: 70 },
    { name: "Gemini API", level: 75 },
  ],
  aiml: [
    { name: "AI/ML Concepts", level: 76 },
    { name: "Statistics", level: 72 },
    { name: "Machine Learning", level: 70 },
  ],
  cybersecurity: [
    { name: "Cybersecurity Concepts", level: 75 },
    { name: "Network Defense", level: 72 },
    { name: "Endpoint Security", level: 74 },
  ],
  iot: [
    { name: "IoT Systems", level: 78 },
    { name: "Sensors & Actuators", level: 75 },
  ],
  softSkills: [
    "Analytical Thinking",
    "Problem Solving",
    "Critical Thinking",
    "Leadership",
    "Team Management",
    "Communication",
    "Collaboration",
    "Customer Centricity",
    "Self Presentation",
  ],
};

// ── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "FlameWatch — IoT Safety & Monitoring System",
    description:
      "Developed a hardware and software-based system for real-time monitoring and automated safety response.",
    longDescription:
      "Developed a hardware and software-based system for real-time monitoring and automated safety response. Integrated sensors, actuator control, and IoT connectivity for continuous system tracking. Project registered under MSME/Udyam, highlighting its practical and scalable application.",
    stack: ["IoT", "Arduino", "ESP32", "Sensors", "Actuator Control"],
    github: "https://github.com/bhavanahari08-art",
    demo: "",
    image: "/assets/projects/smarthome.png",
    featured: true,
    status: "Registered MSME",
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 2,
    title: "AI Pre-Download Cybersecurity System — Threat Prevention Platform",
    description:
      "Built an AI-powered system that scans files and URLs before access to prevent malware and phishing attacks.",
    longDescription:
      "Built an AI-powered system that scans files and URLs before access to prevent malware and phishing attacks. Designed a real-time dashboard to monitor active threats, enable one-click termination, and automatically block malicious sources. Implemented SMS fraud detection and a secure link-based verification flow to enhance user safety across messaging platforms.",
    stack: ["Python", "AI/ML", "FastAPI", "Cybersecurity", "React", "SMS API"],
    github: "https://github.com/bhavanahari08-art",
    demo: "",
    image: "/assets/projects/ciphershield.png",
    featured: true,
    status: "Completed",
    stats: { stars: 0, forks: 0 },
  },
];

// ── Certifications ─────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: "Security and Connectivity Support",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialId: "",
    link: "https://www.netacad.com/",
    icon: "🛡️",
    color: "from-blue-500/20 to-cyan-500/20",
    badge: "#1BA0D7",
  },
  {
    id: 2,
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialId: "",
    link: "https://www.netacad.com/",
    icon: "🤖",
    color: "from-cyan-500/20 to-blue-500/20",
    badge: "#1BA0D7",
  },
  {
    id: 3,
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialId: "",
    link: "https://www.netacad.com/",
    icon: "🌐",
    color: "from-orange-500/20 to-red-500/20",
    badge: "#E44D26",
  },
  {
    id: 4,
    title: "Completion Certificate",
    issuer: "IBM SkillsBuild",
    date: "2024",
    credentialId: "",
    link: "https://skillsbuild.org/",
    icon: "🏆",
    color: "from-blue-700/20 to-indigo-500/20",
    badge: "#054ADA",
  },
];

// ── Education ─────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Business Systems (CSBS)",
    institution: "Easwari Engineering College, Chennai",
    period: "2022 — Present",
    gpa: "",
    honors: "",
    description:
      "Specialization in combining technical Computer Science foundation with Business Systems, requirements analysis, data analytics, and management.",
    courses: [
      "DBMS & SQL",
      "Python",
      "Software Development",
      "IoT Systems",
      "Cybersecurity",
    ],
    current: true,
  },
];

// ── Coding Profiles ────────────────────────────────────────────
export const codingProfiles = [
  {
    platform: "GitHub",
    username: "bhavanahari08-art",
    url: "https://github.com/bhavanahari08-art",
    stats: "2+ projects",
    color: "#ffffff",
    bg: "from-gray-800/40 to-gray-900/40",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    username: "bhavana-hariharan-0449a1381",
    url: "https://www.linkedin.com/in/bhavana-hariharan-0449a1381/",
    stats: "CSBS Student",
    color: "#0A66C2",
    bg: "from-blue-900/30 to-blue-800/20",
    icon: "linkedin",
  },
  {
    platform: "LeetCode",
    username: "bhavanasrm",
    url: "https://leetcode.com/u/bhavanasrm/",
    stats: "Coding Profile",
    color: "#FFA116",
    bg: "from-orange-900/30 to-yellow-900/20",
    icon: "leetcode",
  },
];

export const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};
