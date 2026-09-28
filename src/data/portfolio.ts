/**
 * CENTRAL CONTENT FILE
 * ---------------------------------------------------------------
 * Everything the portfolio displays lives here. To update the site,
 * edit or add entries below — no component changes are needed.
 *
 *  - personal      : name, title, bio, email, phone, resume, socials
 *  - expertise     : the four "What I Work With" pillars
 *  - skills        : add { name, category, description } to add a skill
 *  - projects      : add a project object to show it everywhere
 *  - experience / education / certifications / achievements
 */

import profileAsset from "@/assets/profile.png.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export type ProjectCategory = "Software" | "AI / ML" | "Web" | "Embedded" | "VLSI / Hardware";

export const personal = {
  name: "Marri Lalitha Raga Pravallika",
  shortName: "Lalitha Raga Pravallika",
  title: "Software & Embedded Systems Engineer",
  tagline: "Building modern software applications and intelligent hardware–software systems.",
  heroBio:
    "I build practical, technology-driven solutions across software development, artificial intelligence, embedded systems, digital hardware, and hardware–software integration.",
  about:
    "I’m Lalitha Raga Pravallika, a Software & Embedded Systems Engineer and final-year Electronics & Communication Engineering student at Pragati Engineering College, with a CGPA of 8.86 and a Minor in Computer Science Engineering. I enjoy building modern software applications while exploring embedded systems, digital hardware, VLSI, and hardware–software integration. With hands-on experience across software development and electronics projects, I’m passionate about solving real-world problems through technology and continuously expanding my skills across both domains.",
  email: "pravallikamarri55@gmail.com",
  /** Optional. Leave empty to hide the phone everywhere. */
  phone: "8019224955",
  /** Replace the uploaded image or point this at any image URL. */
  profileImage: profileAsset.url,
  profileAlt: "Marri Lalitha Raga Pravallika — Software & Embedded Systems Engineer",
  /** Put your CV/resume file URL here (e.g. upload a PDF and paste its link). */
  resumeUrl: resumeAsset.url,
  /** Set to false to hide the "Open to Opportunities" badge. */
  availabilityStatus: true,
  availabilityLabel: "Open to Opportunities",
  github: "https://github.com/mlr-pravallika",
  linkedin: "https://www.linkedin.com/in/pravallika-marri",
  leetcode: "https://leetcode.com/u/23A31A0483/",
  hackerrank: "https://www.hackerrank.com/profile/23A31A0483",
  codechef: "https://www.codechef.com/users/pravallika_279",
};

export const rotatingRoles = [
  "Software Development",
  "AI & Generative AI",
  "Embedded Systems",
  "VLSI & Digital Design",
  "Hardware–Software Integration",
];

export const aboutCards = [
  {
    index: "01",
    title: "Software Development",
    body: "Designing and building applications with C, C++, Python and modern web technologies, with attention to clean structure and real usability.",
  },
  {
    index: "02",
    title: "Artificial Intelligence",
    body: "Applying machine learning, NLP and Generative AI — from text classification pipelines to AI-assisted product features.",
  },
  {
    index: "03",
    title: "Embedded Systems",
    body: "Working with Embedded C, microcontrollers and sensors to turn physical inputs into dependable system behaviour.",
  },
  {
    index: "04",
    title: "VLSI & Digital Design",
    body: "Writing Verilog RTL and studying processor architecture, pipelining and hazard handling through simulation and waveform analysis.",
  },
];

export const expertise = [
  {
    title: "Software Engineering",
    blurb:
      "Modern web development, programming, application development and software engineering concepts.",
    tags: ["C / C++", "Python", "React", "APIs"],
    emphasis: true,
  },
  {
    title: "AI & Generative AI",
    blurb: "Machine learning, NLP, AI applications, Generative AI and intelligent systems.",
    tags: ["ML", "NLP", "Gemini API", "Streamlit"],
    emphasis: true,
  },
  {
    title: "Embedded & Hardware",
    blurb: "Embedded C, microcontrollers, sensors, digital electronics and hardware interaction.",
    tags: ["Embedded C", "Arduino", "Sensors", "Digital Electronics"],
    emphasis: false,
  },
  {
    title: "VLSI & Digital Design",
    blurb: "Verilog, RTL concepts, RISC-V architecture, pipeline design and digital systems.",
    tags: ["Verilog", "RTL", "RISC-V", "Icarus Verilog"],
    emphasis: false,
  },
];

export type Skill = { name: string; category: string; description: string };

export const skillCategories = [
  "Programming",
  "Web Development",
  "AI / ML / Generative AI",
  "Databases",
  "Embedded / Hardware",
  "VLSI / Digital Design",
  "Cloud / Tools",
] as const;

export const skills: Skill[] = [
  { name: "C", category: "Programming", description: "Core systems and problem-solving language." },
  { name: "C++", category: "Programming", description: "Object-oriented programming and data structures." },
  { name: "Python", category: "Programming", description: "Scripting, ML workflows and application logic." },
  { name: "Java (Basics)", category: "Programming", description: "Fundamentals of object-oriented Java." },

  { name: "HTML", category: "Web Development", description: "Semantic, accessible page structure." },
  { name: "CSS", category: "Web Development", description: "Responsive layouts and modern styling." },
  { name: "React", category: "Web Development", description: "Component-driven user interfaces." },

  { name: "Machine Learning", category: "AI / ML / Generative AI", description: "Model training, evaluation and prediction." },
  { name: "NLP", category: "AI / ML / Generative AI", description: "Text preprocessing and language-based features." },
  { name: "TF-IDF", category: "AI / ML / Generative AI", description: "Feature extraction for text classification." },
  { name: "Streamlit", category: "AI / ML / Generative AI", description: "Fast interactive interfaces for ML apps." },
  { name: "Gemini API", category: "AI / ML / Generative AI", description: "Generative AI integration in applications." },
  { name: "Generative AI", category: "AI / ML / Generative AI", description: "Building features around generative models." },
  { name: "AI", category: "AI / ML / Generative AI", description: "Applied artificial intelligence concepts." },

  { name: "SQL", category: "Databases", description: "Querying and relational data modelling." },
  { name: "PostgreSQL", category: "Databases", description: "Relational database design and usage." },

  { name: "Embedded C", category: "Embedded / Hardware", description: "Firmware logic for microcontrollers." },
  { name: "Digital Electronics", category: "Embedded / Hardware", description: "Logic design and circuit fundamentals." },
  { name: "Sensors", category: "Embedded / Hardware", description: "Reading and conditioning physical signals." },
  { name: "Microcontrollers", category: "Embedded / Hardware", description: "Arduino-class controller programming." },

  { name: "Verilog", category: "VLSI / Digital Design", description: "RTL description of digital hardware." },
  { name: "RTL Design", category: "VLSI / Digital Design", description: "Register-transfer level modelling." },
  { name: "RISC-V", category: "VLSI / Digital Design", description: "Instruction set and pipeline architecture." },
  { name: "EDA Playground", category: "VLSI / Digital Design", description: "Online RTL simulation and testing." },
  { name: "Icarus Verilog", category: "VLSI / Digital Design", description: "Open-source simulation and waveforms." },

  { name: "GCP", category: "Cloud / Tools", description: "Cloud services and deployment basics." },
  { name: "Git", category: "Cloud / Tools", description: "Version control and branching workflows." },
  { name: "GitHub", category: "Cloud / Tools", description: "Code hosting and collaboration." },
  { name: "VS Code", category: "Cloud / Tools", description: "Primary development environment." },
  { name: "Excel", category: "Cloud / Tools", description: "Data organisation and analysis." },
];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  domain: "software" | "hardware";
  description: string;
  technologies: string[];
  githubUrl: string;
  /** Leave empty — the Live Demo button simply won't render. */
  liveDemoUrl?: string;
  featured?: boolean;
  architecture: string[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    whatItDoes: string;
    features: string[];
    implementation: string;
    challenges: string;
    outcome: string;
    contribution: string;
    future: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "ai-resume-autofill",
    title: "AI Resume Autofill Chrome Extension",
    category: "Software",
    domain: "software",
    description:
      "A browser extension that detects application form fields and assists with intelligent, AI-supported data population.",
    technologies: ["HTML", "CSS", "JavaScript", "Chrome Extension APIs", "Node.js", "Express", "AI Integration"],
    githubUrl: "https://github.com/mlr-pravallika/ai-autofill-extension.git",
    liveDemoUrl: "",
    featured: true,
    architecture: [
      "User",
      "Chrome Extension",
      "DOM / Form Field Detection",
      "Field Mapping",
      "AI / Backend Processing",
      "Intelligent Form Population",
    ],
    caseStudy: {
      overview:
        "A Chrome extension built to streamline the repetitive work of filling resume and job application forms across different websites.",
      problem:
        "Job applications ask for the same information again and again, in forms whose field names and structures differ from site to site. Filling them manually is slow and error-prone.",
      solution:
        "The extension inspects the page's form fields through a content script, maps them to the user's stored details, and uses AI-assisted processing on the backend to produce suitable values for free-text fields.",
      whatItDoes:
        "It reads the form on the active page, matches recognised fields to saved information, and populates them so the user only reviews and submits.",
      features: [
        "Automatic form-field detection",
        "Intelligent field mapping",
        "Browser extension architecture",
        "Dynamic web-form interaction",
        "AI-assisted response generation",
        "Content-script based page interaction",
      ],
      implementation:
        "A Chrome extension front end (HTML, CSS, JavaScript) with content scripts for DOM interaction, backed by a Node.js and Express service that handles AI-assisted processing.",
      challenges:
        "Web forms vary widely in markup, naming and behaviour, so field detection and mapping had to tolerate inconsistent structures rather than assume a fixed schema.",
      outcome:
        "The extension reduces repetitive manual typing during applications and demonstrates practical browser-extension plus AI integration work.",
      contribution: "Designed and implemented the extension, field-mapping logic and backend integration.",
      future: [
        "Broader field-type coverage",
        "User-managed profiles for different application types",
        "Improved handling of multi-step forms",
      ],
    },
  },
  {
    slug: "email-spam-classification",
    title: "Email Spam Classification",
    category: "AI / ML",
    domain: "software",
    description:
      "A machine-learning application that classifies messages as spam or legitimate using text processing and classical ML techniques.",
    technologies: ["Python", "Machine Learning", "NLP", "TF-IDF", "Streamlit"],
    githubUrl: "https://github.com/mlr-pravallika/email-spam-classification.git",
    liveDemoUrl: "",
    featured: true,
    architecture: [
      "Input Message",
      "Text Preprocessing",
      "TF-IDF Vectorization",
      "ML Classifier",
      "Prediction",
      "Spam / Not Spam",
    ],
    caseStudy: {
      overview:
        "A text-classification project that separates spam messages from legitimate ones using an NLP preprocessing and machine-learning pipeline.",
      problem:
        "Unwanted messages are hard to filter with fixed rules, because spam wording changes constantly and keyword lists age quickly.",
      solution:
        "Messages are cleaned and normalised, converted into numerical features with TF-IDF vectorization, and passed to a trained classifier that predicts the label.",
      whatItDoes: "It takes a message as input and returns a spam or not-spam prediction.",
      features: [
        "Text preprocessing and cleaning",
        "NLP-based feature handling",
        "TF-IDF feature extraction",
        "Trained classification model",
        "Streamlit interface for interactive prediction",
      ],
      implementation:
        "Python pipeline covering preprocessing, vectorization, model training and prediction, exposed through a Streamlit interface.",
      challenges:
        "Preparing noisy text consistently and choosing feature-extraction settings that generalise beyond the training examples.",
      outcome:
        "A working end-to-end classification pipeline that demonstrates applied NLP and machine-learning practice.",
      contribution: "Built the preprocessing pipeline, feature extraction, model training and the interface.",
      future: ["Comparison across additional classifiers", "Larger and more varied datasets", "Deployment as a hosted service"],
    },
  },
  {
    slug: "recoverai",
    title: "RecoverAI",
    category: "AI / ML",
    domain: "software",
    description:
      "A full-stack, AI-supported application combining a deployed frontend with backend services and API integration.",
    technologies: ["AI Integration", "Full-Stack", "REST APIs", "Frontend", "Backend", "Deployment"],
    githubUrl: "https://github.com/mlr-pravallika/RecoverAI.git",
    liveDemoUrl: "https://frontend-seven-omega-k6nsl3ue7y.vercel.app/",
    featured: true,
    architecture: ["User Interface", "Frontend Application", "API Layer", "Backend Services", "AI Processing", "Response to User"],
    caseStudy: {
      overview:
        "A full-stack project where a deployed web frontend talks to backend services that handle AI-supported processing.",
      problem:
        "Delivering an AI capability to real users requires more than a model: it needs an interface, an API layer, and a deployment people can actually reach.",
      solution:
        "The frontend collects user input and calls backend endpoints, which coordinate processing and return results to the interface. The frontend is deployed and publicly accessible.",
      whatItDoes: "It provides a web interface through which users submit input and receive AI-supported results.",
      features: [
        "Web-based user interface",
        "Frontend–backend separation",
        "API integration",
        "Structured request and response flow",
        "Public deployment",
      ],
      implementation: "Frontend application deployed to Vercel, communicating with backend services over HTTP APIs.",
      challenges: "Coordinating the data flow between interface, API layer and processing, and keeping the deployed build reliable.",
      outcome: "A live, reachable application demonstrating full-stack delivery of an AI-supported workflow.",
      contribution: "Worked across the frontend, backend integration and deployment of the project.",
      future: ["Expanded feature set", "Improved error handling and feedback", "Performance tuning of the API layer"],
    },
  },
  {
    slug: "medicine-reminder",
    title: "Intelligent Medicine Reminder & Medication Tracking Platform",
    category: "Software",
    domain: "software",
    description:
      "A platform for scheduling medication reminders and tracking whether doses were taken, with a clear management interface.",
    technologies: ["Software Development", "AI-Assisted Features", "Data Management", "Web Interface"],
    githubUrl: "https://github.com/mlr-pravallika/intelligent-medicine-reminder-platform.git",
    liveDemoUrl: "",
    featured: true,
    architecture: ["User", "Medication Schedule Entry", "Reminder Engine", "Tracking & Status Updates", "Dashboard View"],
    caseStudy: {
      overview:
        "A medication management platform that lets users record their medicines, set up reminder schedules and keep track of what has been taken.",
      problem:
        "People managing several medications lose track of timing and history, and paper notes or memory are unreliable for day-to-day routines.",
      solution:
        "The platform centralises medication entries and their schedules, issues reminders at the configured times, and records tracking status so the history stays visible.",
      whatItDoes:
        "It stores medication schedules, reminds the user at the right time, and tracks and displays medication status.",
      features: [
        "Medication scheduling",
        "Reminder management",
        "Medication tracking",
        "Intelligent assistance in the workflow",
        "Structured data management",
        "Clear user interface",
      ],
      implementation: "A web platform with scheduling and reminder logic backed by structured storage of medication records.",
      challenges: "Modelling flexible schedules and keeping reminder state and tracking history consistent.",
      outcome:
        "A usable medication management tool. It is an organisational aid and makes no medical or clinical claims.",
      contribution: "Designed the data model, reminder workflow and interface.",
      future: ["Multi-user support", "Notification channel options", "Exportable medication history"],
    },
  },
  {
    slug: "sri-interior-designs",
    title: "Sri Interior Designs — Responsive Product Gallery",
    category: "Web",
    domain: "software",
    description:
      "A responsive product showcase website presenting a design business's products and services in a clean, accessible interface.",
    technologies: ["HTML", "CSS", "Responsive Web Design"],
    githubUrl: "https://github.com/mlr-pravallika/FULL_STACK_PROJECT.git",
    liveDemoUrl: "https://mlr-pravallika.github.io/FULL_STACK_PROJECT",
    featured: true,
    architecture: ["Visitor", "Responsive Layout", "Product Gallery", "Service Details", "Contact / Enquiry"],
    caseStudy: {
      overview:
        "A responsive showcase website built for Sri Interior Designs to present their products and services online.",
      problem: "The business needed a clear digital presence where visitors could browse offerings on any device.",
      solution:
        "A responsive, structured website with a visual product gallery and clean navigation, built with HTML and CSS.",
      whatItDoes: "It presents products and services in a browsable gallery that adapts to desktop and mobile screens.",
      features: ["Responsive layout", "Visual product browsing", "Clean interface", "Mobile compatibility", "Clear service presentation"],
      implementation: "Hand-written HTML and CSS with responsive breakpoints, published through GitHub Pages.",
      challenges: "Keeping the gallery readable and well-proportioned across a wide range of screen sizes.",
      outcome: "A published, publicly accessible site that presents the business clearly on desktop and mobile.",
      contribution: "Designed and built the full site and its responsive behaviour.",
      future: ["Content management for products", "Image optimisation", "Enquiry form integration"],
    },
  },
  {
    slug: "riscv-pipeline",
    title: "5-Stage Pipelined RISC-V Processor with Hazard Detection and Forwarding",
    category: "VLSI / Hardware",
    domain: "hardware",
    description:
      "A Verilog RTL implementation of a 5-stage pipelined RISC-V processor including a hazard detection unit and forwarding paths.",
    technologies: ["Verilog", "RTL Design", "RISC-V", "Icarus Verilog", "EDA Playground", "Waveform Analysis"],
    githubUrl:
      "https://github.com/mlr-pravallika/5-Stage-Pipelined-RISC-V-Processor-with-Hazard-Detection-and-Forwarding.git",
    liveDemoUrl: "",
    featured: true,
    architecture: ["IF", "ID", "EX", "MEM", "WB"],
    caseStudy: {
      overview:
        "A digital design project implementing a RISC-V processor with a classic five-stage pipeline in Verilog, verified through simulation.",
      problem:
        "A pipelined processor executes overlapping instructions, which introduces data and control hazards that produce wrong results if left unhandled.",
      solution:
        "The design adds a hazard detection unit that stalls the pipeline when required and a forwarding unit that routes results back to earlier stages so dependent instructions read correct values.",
      whatItDoes:
        "It fetches, decodes, executes, accesses memory and writes back instructions across five pipeline stages while resolving dependencies between them.",
      features: [
        "Five-stage pipeline: IF, ID, EX, MEM, WB",
        "Pipeline registers between every stage",
        "Hazard detection unit with stalling",
        "Forwarding unit for data hazards",
        "Verilog RTL implementation",
        "Simulation and waveform verification",
      ],
      implementation:
        "Modular Verilog RTL with separate datapath, control, hazard detection and forwarding blocks, simulated with Icarus Verilog and EDA Playground.",
      challenges:
        "Getting stall and forward conditions correct together — each pipeline register and control signal had to be traced through waveforms to confirm instruction flow.",
      outcome:
        "A simulated processor that executes instruction sequences with dependencies correctly, verified through waveform analysis.",
      contribution: "Wrote the RTL modules, hazard and forwarding logic, and the simulation testbenches.",
      future: ["Branch prediction", "Extended instruction support", "Synthesis-oriented optimisation"],
    },
  },
  {
    slug: "smart-street-light",
    title: "Smart Automatic Street Light using Arduino & LDR",
    category: "Embedded",
    domain: "hardware",
    description:
      "An Arduino-based embedded system that senses ambient light with an LDR and switches street lighting automatically.",
    technologies: ["Arduino", "LDR", "Embedded C", "Sensors", "Digital Electronics"],
    githubUrl: "https://github.com/mlr-pravallika/smart-automatic-street-light.git",
    liveDemoUrl: "",
    featured: false,
    architecture: ["Ambient Light", "LDR Sensor", "Arduino", "Decision Logic", "LED / Street Light"],
    caseStudy: {
      overview:
        "An embedded electronics project that automates street lighting based on the surrounding light level.",
      problem: "Manually switched lighting stays on when it isn't needed and off when it is, wasting energy and attention.",
      solution:
        "An LDR provides a reading of ambient light to an Arduino, which compares it against a threshold and drives the light accordingly.",
      whatItDoes: "It turns the light on as darkness falls and off again when ambient light returns.",
      features: [
        "Ambient light sensing with an LDR",
        "Threshold-based decision logic",
        "Automatic switching of the load",
        "Embedded C firmware",
        "Simple, low-component circuit",
      ],
      implementation: "Arduino firmware in Embedded C reading the LDR through an analog input and controlling the output driver.",
      challenges: "Choosing a threshold and handling sensor fluctuation so the light does not flicker near the switching point.",
      outcome: "A working demonstration of sensor-driven automatic lighting control.",
      contribution: "Built the circuit and wrote the control firmware.",
      future: ["Motion-based dimming", "Multiple light nodes", "Remote monitoring"],
    },
  },
];

export const projectFilters = ["All", "Software", "AI / ML", "Web", "Embedded", "VLSI / Hardware"] as const;

export type Experience = {
  role: string;
  organization: string;
  program?: string;
  duration?: string;
  description?: string;
  responsibilities?: string[];
  technologies?: string[];
  keyLearning?: string;
};

export const experience: Experience[] = [
  {
    role: "AI Intern",
    organization: "Infosys Springboard",
    program: "Springboard 7.0 Internship",
    duration: "",
    description: "Internship focused on artificial intelligence through the Infosys Springboard 7.0 programme.",
    responsibilities: [],
    technologies: ["Artificial Intelligence"],
    keyLearning: "",
  },
];

export const education = [
  {
    degree: "B.Tech — Electronics & Communication Engineering",
    institution: "Pragati Engineering College",
    detail: "CGPA 8.86 · Minor in Computer Science Engineering",
    status: "Final Year (4th Year)",
    period: "Expected 2027",
  },
  {
    degree: "Intermediate",
    institution: "Sri Shirdi Sai Junior College",
    detail: "95.10%",
    status: "",
    period: "",
  },
  {
    degree: "Schooling",
    institution: "Z.P.P. High School",
    detail: "83.33%",
    status: "",
    period: "",
  },
];

export type Certification = {
  name: string;
  organization: string;
  date?: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
};

export const certifications: Certification[] = [
  {
    name: "NPTEL Elite Certification",
    organization: "NPTEL",
    date: "",
    credentialUrl: "",
    description: "Elite grade awarded in an NPTEL certification course.",
  },
  {
    name: "NPTEL Certification",
    organization: "NPTEL",
    date: "",
    credentialUrl: "",
    description: "Completed NPTEL technical certification coursework.",
  },
];

export type Achievement = { title: string; organization: string; year?: string; description?: string };

export const achievements: Achievement[] = [
  {
    title: "NPTEL Top 5% Achievement",
    organization: "NPTEL",
    year: "",
    description: "Placed in the top 5% of course participants.",
  },
  { title: "NPTEL Elite Certification", organization: "NPTEL", year: "", description: "Elite grade in NPTEL coursework." },
  {
    title: "Quiz Competition — School Level",
    organization: "School Level",
    year: "",
    description: "Recognised in school-level quiz competitions.",
  },
  {
    title: "Essay Writing Competition — School Level",
    organization: "School Level",
    year: "",
    description: "Recognised in school-level essay writing competitions.",
  },
];

export const socialProfiles = [
  { label: "GitHub", url: personal.github, handle: "mlr-pravallika" },
  { label: "LinkedIn", url: personal.linkedin, handle: "pravallika-marri" },
  { label: "LeetCode", url: personal.leetcode, handle: "23A31A0483" },
  { label: "HackerRank", url: personal.hackerrank, handle: "23A31A0483" },
  { label: "CodeChef", url: personal.codechef, handle: "pravallika_279" },
];

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Expertise", id: "expertise" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];
