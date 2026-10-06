export type CareerEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  group: "Engineering" | "Teaching" | "Community";
  progression?: { title: string; period: string }[];
  current?: boolean;
  context?: string;
  summary: string;
  details: string[];
  stack: string[];
};

export type ProjectCategory =
  | "AI applications"
  | "Backend & platforms"
  | "ML & vision";
export type Project = {
  name: string;
  category: ProjectCategory;
  type: string;
  summary: string;
  details: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
  image?: string;
};
export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  credentialId?: string;
};
export type Award = {
  name: string;
  distinction: string;
  work: string;
  year?: string;
  url?: string;
};

export const profile = {
  name: "Chethan Reddy",
  email: "achethanreddy1921@gmail.com",
  github: "https://github.com/chethanreddy123",
  linkedin: "https://www.linkedin.com/in/achethanreddy/",
  leetcode: "https://leetcode.com/achethanreddy1921/",
  coursera: "https://www.coursera.org/user/3c9221d8d113461cdd7835e81c529439",
};

export const currentWork = [
  {
    title: "Customer delivery & product engineering",
    text: "Own requirements and delivery across 20+ enterprise customers. Translate customer conversations into product changes, work through implementation details and support adoption after release.",
    tags: ["Requirements", "Product engineering", "Customer success"],
  },
  {
    title: "AI models & integration",
    text: "Integrate vision-language models, including Qwen and Zhipu, with prompt and JSON-response handling. Work on the practical boundaries between model output, application logic and dependable product behavior.",
    tags: ["Vision-language models", "Prompt design", "Structured outputs"],
  },
  {
    title: "Backend reliability & observability",
    text: "Build activity metrics and OpenTelemetry tracing, bounded timeouts for LLM-response mapping, and separate database read/write connection pools. Make failure modes easier to understand and handle.",
    tags: ["OpenTelemetry", "Timeouts", "Database connections"],
  },
  {
    title: "Document understanding & automation",
    text: "Normalize OCR schemas and bounding boxes, handle complex table translation and build configurable template-matching thresholds. Document processing is one application of my broader AI and backend work.",
    tags: ["Computer vision", "OCR", "Configuration APIs"],
  },
  {
    title: "QA & release quality",
    text: "Set up QA automation around customer requirements and product workflows. Follow edge cases through engineering, testing and customer feedback instead of stopping when a feature is built.",
    tags: ["QA automation", "Regression checks", "Production feedback"],
  },
];

export const career: CareerEntry[] = [
  {
    company: "Staple AI",
    role: "AI Forward Deployed Engineer · SDE-2",
    period: "May 2024 — Present",
    location: "Singapore · Remote from India",
    group: "Engineering",
    summary:
      "End-to-end AI and product delivery across 20+ enterprise customers, spanning requirements, engineering, customer success and QA automation.",
    details: [
      "Lead development of complex AI-driven features, from architectural planning and zero-shot LLMOps workflows to debugging and performance optimization.",
      "Build vision-language model integrations, OCR normalization, complex document handling and configurable template-matching behavior.",
      "Improve reliability with response timeouts, separate database read/write pools, activity metrics and OpenTelemetry tracing.",
      "Contribute to peer code reviews, mentor junior engineers and participate in technical design discussions.",
      "Earlier scanning-team work included detecting stamps, logos and signatures on a platform processing 100,000 documents per month across a wider 50+ customer base.",
      "Use AWS, Kubernetes, OCR and LLM services alongside model integration and prompt optimization.",
    ],
    stack: [
      "Python",
      "LLMs & RAG",
      "Computer vision",
      "AWS",
      "Kubernetes",
      "QA automation",
    ],
    current: true,
    context: "Customer engineering · Product delivery · AI systems",
    progression: [
      {
        title: "AI Software Engineer · SDE-2",
        period: "May 2025 — Present",
      },
      {
        title: "AI Software Engineer · SDE-1",
        period: "May 2024 — Jun 2025",
      },
    ],
  },
  {
    company: "Alvarez & Marsal",
    role: "AI Software Engineer · Client engagement",
    period: "Dec 2023 — Jun 2024",
    location: "United States · Remote",
    group: "Engineering",
    summary:
      "Worked on Diligence GPT, applying language models and retrieval-augmented generation to a diligence application.",
    details: [
      "Engagement facilitated by Dotnitron Technologies; this is the client assignment associated with that role.",
      "Designed RAG architecture and integrated AI, machine-learning and deep-learning capabilities into application workflows.",
      "Worked with cross-functional teams on the architecture and Python backend for intelligent diligence tools.",
    ],
    stack: ["Python", "RAG", "LLMs", "AI architecture"],
    context: "Diligence GPT · Through Dotnitron Technologies",
  },
  {
    company: "Dotnitron Technologies",
    role: "AI Software Engineer",
    period: "Dec 2023 — May 2024",
    location: "Delhi, India · Remote",
    group: "Engineering",
    summary:
      "Designed AI solutions and built Python backend services, including the Alvarez & Marsal engagement.",
    details: [
      "Led cross-functional collaboration to design, develop and implement AI-driven solutions.",
      "Built services using Django, FastAPI and ArangoDB, integrating AI libraries with product workflows.",
      "Applied LangChain, OpenAI and retrieval-augmented generation to application development.",
      "Contributed code reviews, debugging and tests to improve software quality.",
    ],
    stack: ["Python", "Django", "FastAPI", "ArangoDB", "LangChain", "OpenAI"],
  },
  {
    company: "Bajaj Finserv Health",
    role: "Data Science Engineer Intern",
    period: "May — Aug 2023",
    location: "Pune, India · On-site",
    group: "Engineering",
    summary:
      "Built recommendation systems and medical-document analytics with the InSightRX data team.",
    details: [
      "Developed lab-test recommendation workflows that improved operational efficiency by 30%.",
      "Used OCR, named-entity recognition, LLMs and YOLO for document and image analysis.",
      "Optimized Elasticsearch and SQL retrieval, improving retrieval speed by 80%.",
    ],
    stack: ["Python", "OCR", "NER", "YOLO", "Elasticsearch", "SQL"],
    context: "InSightRX · Data team",
  },
  {
    company: "TIFAC · Vellore Institute of Technology",
    role: "Project Intern · Backend Development & Data",
    period: "Dec 2022 — Jun 2023",
    location: "Vellore, India · On-site",
    group: "Engineering",
    summary:
      "Built the PhysioPlus micro-clinic platform and worked on algorithms for autonomous inventory drones.",
    details: [
      "Led the PhysioPlus backend using FastAPI and MongoDB and performed analysis on patient records.",
      "The patient-management workflow supported more than 100 daily appointments using AWS and a distributed architecture.",
      "Worked on algorithms for autonomous drones designed for inventory management.",
    ],
    stack: [
      "FastAPI",
      "MongoDB",
      "AWS",
      "Data analysis",
      "Distributed architecture",
    ],
  },
  {
    company: "Smart Diet Planner",
    role: "Machine Learning Researcher",
    period: "Aug 2022 — Apr 2023",
    location: "India · Research & development",
    group: "Engineering",
    summary:
      "Applied machine learning to nutrition analysis and the functionality of a personalized diet application.",
    details: [
      "Created algorithms to extract text and nutritional content from food products and calculate macro consumption.",
      "Worked on search, automated PDF analysis and conversational diet-assistant functionality.",
      "Contributed to an application with an audience of more than 850,000 users.",
    ],
    stack: [
      "Python",
      "Machine learning",
      "Nutrition analysis",
      "OCR",
      "AI search",
    ],
  },
  {
    company: "Grroom",
    role: "Machine Learning Intern → Team Lead",
    period: "Nov 2021 — Feb 2022",
    location: "India",
    group: "Engineering",
    summary:
      "Built fashion-image tagging and object-detection workflows, then led an intern team on a machine-learning project.",
    details: [
      "Used YOLO-based detection and image annotation to prepare fashion data for machine-learning analysis.",
      "Completed more than 100,000 training iterations using Google Colab and integrated image-tagging capabilities with backend services.",
      "As team lead, managed more than 10 interns working on ML algorithms and Python image-tagging scripts.",
    ],
    stack: [
      "Python",
      "YOLO",
      "Google Colab",
      "Image annotation",
      "Model training",
    ],
    progression: [
      {
        title: "Team Lead",
        period: "Jan — Feb 2022",
      },
      {
        title: "Machine Learning Intern",
        period: "Nov 2021 — Jan 2022",
      },
    ],
  },
  {
    company: "Edvi",
    role: "Software Engineer Mentor",
    period: "Oct 2022 — Mar 2023",
    location: "Delhi, India · Remote · Freelance",
    group: "Teaching",
    summary:
      "Mentored learners across software engineering, data science and computer science fundamentals.",
    details: [
      "Taught data science, machine learning, database management and computer networking.",
      "Guided students through system design, LLD, HLD, data structures and algorithms.",
      "Supported learners across academic levels with individual explanations and practical problem solving.",
    ],
    stack: ["Mentoring", "System design", "DSA", "Machine learning", "DBMS"],
  },
  {
    company: "Modo Edulabs",
    role: "Machine Learning Content Associate",
    period: "Aug 2022 — Mar 2023",
    location: "India · Part-time",
    group: "Teaching",
    summary:
      "Designed machine-learning curriculum and Python learning content with hands-on projects.",
    details: [
      "Developed a structured ML curriculum incorporating practical projects.",
      "Managed and revised material across multiple Python courses.",
      "Mentored learners from foundational Python to advanced machine-learning topics.",
    ],
    stack: [
      "Python",
      "Machine learning",
      "Curriculum design",
      "Technical teaching",
    ],
  },
  {
    company: "RoboGems",
    role: "Machine Learning Instructor",
    period: "Aug 2022 — Jun 2023",
    location: "India · Remote · Part-time",
    group: "Teaching",
    summary:
      "Taught machine-learning concepts and helped learners build and deploy models.",
    details: [
      "Provided personalized instruction grounded in practical applications.",
      "Helped learners construct advanced deep-learning models.",
      "Guided deployment of the models developed during instruction.",
    ],
    stack: [
      "Machine learning",
      "Deep learning",
      "Model deployment",
      "Teaching",
    ],
  },
  {
    company: "Tekie",
    role: "Python Programming Mentor",
    period: "Jun 2021 — Oct 2022",
    location: "Bengaluru, India · Part-time",
    group: "Teaching",
    summary:
      "Mentored 60+ students through more than 500 hours of Python and C++ instruction.",
    details: [
      "Delivered coding lessons with visual explanations and practical examples.",
      "Debugged and evaluated student code for assignments, coding problems and tests.",
      "Worked on research and curriculum development for data science and AI education.",
    ],
    stack: [
      "Python",
      "C++",
      "Code evaluation",
      "Data science",
      "Curriculum design",
    ],
  },
  {
    company: "Camp K12",
    role: "Coding Instructor · Python & AI",
    period: "Jun — Aug 2022",
    location: "India · Part-time",
    group: "Teaching",
    summary:
      "Delivered more than 150 hours of instruction in Python, AI and machine learning.",
    details: [
      "Personalized mentoring and project development around individual student interests.",
      "Taught Python, artificial intelligence, machine learning and introductory blockchain concepts.",
    ],
    stack: ["Python", "AI", "Machine learning", "Project mentoring"],
  },
  {
    company: "Cybeorg Education Technology",
    role: "Coding Tutor → Coding Consultant",
    period: "Mar — Dec 2021",
    location: "India / Dubai, UAE",
    group: "Teaching",
    summary:
      "Taught Python and developed advanced curriculum, including scientific computing and astronomy.",
    details: [
      "Delivered more than 300 hours of coding instruction and built projects for school and college learners.",
      "Created curriculum spanning Python, data science, deep learning, mathematics and astronomy with Astropy.",
      "Supported Python work for astrophysics research using Plotly, SciPy, NumPy, Astropy, TensorFlow and pandas.",
    ],
    stack: ["Python", "NumPy", "SciPy", "pandas", "Astropy", "TensorFlow"],
    progression: [
      {
        title: "Coding Consultant",
        period: "Jun — Dec 2021",
      },
      {
        title: "Coding Tutor · Intern",
        period: "Mar — Jun 2021",
      },
    ],
  },
  {
    company: "CipherSchools",
    role: "Teaching Assistant",
    period: "May — Jun 2021",
    location: "India · Internship",
    group: "Teaching",
    summary:
      "Reviewed Python projects and assignments and helped learners improve their solutions.",
    details: [
      "Evaluated student Python scripts and provided suggestions on assignments and projects.",
      "Managed learner data using spreadsheets and management systems.",
    ],
    stack: ["Python", "Code review", "Teaching", "Data management"],
  },
  {
    company: "VITrendz",
    role: "Technical Team · Machine Learning",
    period: "Aug 2021 — Jan 2023",
    location: "Vellore, India · Part-time",
    group: "Community",
    summary:
      "Built student-facing tools, timetable algorithms and machine-learning features for the VITrendz community.",
    details: [
      "Designed an automatic timetable algorithm for undergraduate students choosing from VIT courses.",
      "Built an algorithm to filter spam and inappropriate comments in faculty reviews.",
      "Created ML-related technical content and mentored other community members.",
    ],
    stack: ["Python", "Scheduling", "Machine learning", "Content moderation"],
    progression: [
      {
        title: "Machine Learning · Tech Team",
        period: "Apr 2022 — Jan 2023",
      },
      {
        title: "Technical Team Member",
        period: "Aug 2021 — Apr 2022",
      },
    ],
  },
  {
    company: "Team AutoZ · VIT",
    role: "Technical Team Member · Machine Learning",
    period: "Oct — Dec 2021",
    location: "India · Part-time",
    group: "Community",
    summary:
      "Researched detection and regression algorithms for autonomous ground vehicles.",
    details: [
      "Worked with YOLOv4, Bayesian regression, neural-network regression and decision-forest regression.",
      "Explored machine-learning approaches used in self-driving vehicles.",
    ],
    stack: ["YOLOv4", "Regression", "Neural networks", "Autonomous systems"],
  },
];

export const projects: Project[] = [
  {
    name: "Operations ERP",
    category: "Backend & platforms",
    type: "Customer operations platform",
    summary:
      "An end-to-end platform for staff operations, payroll, sales and the day-to-day running of a service business.",
    details: [
      "Built booking, inventory, storefront, staff permissions, HR, payroll and finance workflows with Next.js, TypeScript, PostgreSQL and Prisma, including commissions, loans, leave deductions, payslips and budget-versus-actual reporting.",
      "Connected the business website, SEO and web analytics with the operations platform.",
      "Implemented a read-only text-to-SQL assistant over 17 allowlisted tables with tokenized SQL validation, read-only database transactions, statement limits and deterministic financial outputs.",
      "Cached generated SQL while rerunning queries for fresh data. A recorded local repeat-query check improved from 1,775 ms to 8 ms.",
      "Built consent-aware messaging infrastructure with signed webhooks, opt-out handling and idempotent send claims.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Text-to-SQL"],
  },
  {
    name: "MarinePulse",
    category: "Backend & platforms",
    type: "Operational reporting platform",
    summary:
      "Vessel assessments, safety and maintenance records, diagnostic guidance and automated reporting.",
    details: [
      "Built scoring across 121 assessment items and 11 categories, with weekly safety, maintenance, drill and engine-performance logs.",
      "Implemented expert-authored diagnostic rules, overdue alerts and automated Word reports.",
      "Added AI-assistant tools around the operational workflows.",
    ],
    stack: ["Workflow engineering", "Scoring", "Report automation", "AI tools"],
  },
  {
    name: "Sellos / RetailOS",
    category: "Backend & platforms",
    type: "Retail point of sale · Team project",
    summary:
      "A multi-tenant retail platform for inventory, billing, tax breakdowns and operational reporting.",
    details: [
      "Contributed the initial application, billing interface, authentication and deployment.",
      "The shared platform includes batch inventory, transaction locking and reporting using Next.js, Go and PostgreSQL.",
      "Built collaboratively; backend and administration work also includes contributions from Subhanu.",
    ],
    stack: ["Next.js", "Go", "PostgreSQL", "Multi-tenancy", "Billing"],
  },
  {
    name: "Applywise",
    category: "AI applications",
    type: "Career-tools application",
    summary:
      "An AI-assisted résumé and job-discovery workflow with profile ingestion, review and downloadable documents.",
    details: [
      "Implemented asynchronous résumé generation with an independent review-and-correction stage and downloadable PDF output.",
      "Connected profile ingestion, a browser extension and job-feed matching into the application workflow.",
    ],
    stack: ["LLMs", "Async processing", "PDF generation", "Browser extension"],
  },
  {
    name: "FFCS Planner",
    category: "Backend & platforms",
    type: "Course-planning tool",
    summary:
      "A timetable planner that selects course slots around faculty, course and time preferences.",
    details: [
      "Built a scheduling approach using graph traversal across more than 2,000 course options.",
      "Used by more than 10,000 VIT students.",
    ],
    stack: ["Python", "Graph algorithms", "Scheduling"],
    link: "https://github.com/chethanreddy123/FFSC-Planner-Python",
    linkLabel: "View source",
  },
  {
    name: "Clinical Scribe / ScribeDesk",
    category: "AI applications",
    type: "Clinical documentation · Collaborative extension",
    summary:
      "A clinical documentation application connecting streaming transcription with editable notes, letters, encounter chat and clinician sign-off.",
    details: [
      "Built the clinical scribe with FastAPI, MongoDB, Next.js, TypeScript, Deepgram streaming transcription and OpenAI. Generated editable notes, summaries, letters and PDF exports, with encounter-aware chat and clinician sign-off.",
      "Improved recording resilience, restored transcript history, handled reconnects, fixed concurrent-session races and cleaned up processors.",
      "In the subsequent collaborative PostgreSQL/Redis-based ScribeDesk implementation, contributed authentication-cookie fixes, startup migrations, container-worker configuration and monorepo deployment integration.",
    ],
    stack: [
      "FastAPI",
      "MongoDB",
      "Next.js",
      "TypeScript",
      "Deepgram",
      "OpenAI",
    ],
  },
  {
    name: "AuditVault",
    category: "Backend & platforms",
    type: "Audit-management platform",
    summary:
      "An audit platform with controlled access, traceable workflow stages and resilient large-file uploads.",
    details: [
      "Built a Go, Next.js and PostgreSQL platform with an eight-stage audit lifecycle, mutation logs and per-vessel access controls.",
      "Implemented resumable multipart uploads and signed downloads using R2/S3-compatible storage.",
      "Fixed cross-vessel RBAC, added a same-origin mutation proxy and developed spreadsheet-style inline operations.",
    ],
    stack: ["Go", "Next.js", "PostgreSQL", "RBAC", "R2 / S3"],
  },
  {
    name: "eduAId",
    category: "AI applications",
    type: "Instructor analytics",
    summary:
      "Teaching tools for classroom insights, class summaries, study plans and AI-assisted note generation.",
    details: [
      "Built backend routes for content generation and classroom insights, using multiple LangChain agents.",
      "Developed a workflow for converting PDF and handwritten notes into digital learning material.",
      "Instructor analytics achieved more than 90% accuracy in the project evaluation.",
    ],
    stack: ["Python", "FastAPI", "MongoDB", "LangChain", "LLMs"],
    image: "/eduaid.png",
  },
  {
    name: "KaRmA",
    category: "AI applications",
    type: "KRA AI Manager",
    summary:
      "An employee-performance chatbot and report generator connecting natural-language questions to SQL data.",
    details: [
      "Connected natural-language questions to structured SQL data through a LangChain SQL agent.",
      "Built customized prompts and agents with Mistral 7B and Llama models, exposed through a FastAPI backend.",
    ],
    stack: ["Python", "FastAPI", "LangChain", "SQL", "Mistral", "Llama"],
  },
  {
    name: "hAIr",
    category: "AI applications",
    type: "AI in HR · Hiring workflow",
    summary:
      "A hiring workflow for résumé parsing, candidate matching and customized interview questions.",
    details: [
      "Built parsing and keyword-matching logic to organize and rank candidate résumés.",
      "Generated customized questions and explored video-input evaluation within the hiring workflow.",
    ],
    stack: ["LLMs", "Résumé parsing", "Keyword matching", "Video input"],
  },
  {
    name: "Supplier Performance",
    link: "https://github.com/chethanreddy123/SirionLab-Backend",
    linkLabel: "View source",
    category: "ML & vision",
    type: "Supplier analytics",
    summary:
      "Scoring and recommendation algorithms for comparing suppliers against specific business needs.",
    details: [
      "Built analytics over more than seven million supplier records, scoring price, resources and delivery against business requirements.",
      "Used customized polynomial regression for five-year forecasts and a Plotly dashboard to explore supplier performance.",
    ],
    stack: ["Scoring algorithms", "Recommendation systems", "Data analysis"],
  },
  {
    name: "Keyword Recommendation Engine",
    link: "https://github.com/chethanreddy123/BackEndFastAPI",
    linkLabel: "View source",
    category: "ML & vision",
    type: "Search & recommendation",
    summary:
      "A search-improvement system combining machine-learning classification with fuzzy keyword matching.",
    details: [
      "Built autocomplete, correction and keyword recommendation for an insurance search use case using a linear support vector machine.",
      "Combined Levenshtein distance, Fast Autocomplete and directed acyclic graphs, with search responses below 800 ms.",
    ],
    stack: ["Python", "Linear SVM", "Fuzzy matching"],
  },
  {
    name: "WeDio",
    link: "https://github.com/chethanreddy123/HoneyWell-WeHack---Video-Smoothness",
    linkLabel: "View source",
    category: "ML & vision",
    type: "CCTV video analytics",
    summary:
      "Frame-by-frame detection of disruptions in CCTV footage, including blur, black screens and freezing.",
    details: [
      "Applied geometric analysis between video frames to detect five classes of video disruption in HD footage.",
      "Generated Excel and JSON reports with disruption start/end timestamps, type and score.",
    ],
    stack: ["Computer vision", "Video analytics", "Geometric analysis"],
  },
  {
    name: "PhotoBook",
    category: "Backend & platforms",
    type: "Image-processing API",
    summary:
      "An API that converts uploaded photos and page dimensions into downloadable PDF layouts.",
    details: [
      "Built an image-processing backend with FastAPI, Pillow and FPDF.",
      "Exposed a workflow for image uploads, page-layout dimensions and generated PDF output.",
    ],
    stack: ["Python", "FastAPI", "Pillow", "FPDF"],
    link: "https://github.com/chethanreddy123/PhotoBook-Backend",
    linkLabel: "View source",
  },
];

export const skillGroups = [
  {
    title: "AI & machine learning",
    items: [
      "LLMs & RAG",
      "LangChain",
      "Prompt engineering",
      "Computer vision",
      "NLP",
      "OCR & NER",
      "YOLO",
      "TensorFlow & Keras",
      "Recommendation systems",
    ],
  },
  {
    title: "Languages & backend",
    items: [
      "Python",
      "Go",
      "C++",
      "SQL",
      "FastAPI",
      "Django",
      "REST APIs",
      "System design",
      "Distributed systems",
    ],
  },
  {
    title: "Data & infrastructure",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Elasticsearch",
      "ArangoDB",
      "AWS",
      "Kubernetes",
      "R2 / S3",
      "OpenTelemetry & observability",
    ],
  },
  {
    title: "Product & delivery",
    items: [
      "Customer requirements",
      "Product engineering",
      "QA automation",
      "Code review",
      "Technical mentoring",
      "Next.js",
      "TypeScript",
      "Access control",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Cricket Code Champions Hack",
    issuer: "HackerEarth",
    date: "Dec 2023",
    credentialId: "CCCH1001",
    url: "https://drive.google.com/file/d/1P_A8cK7nXQnRv9hfCsEVYIdvhKgjt3NF/view?usp=drivesdk",
  },
  {
    title: "Hack The Mountains 3.O",
    issuer: "Hack The Mountains",
    date: "Aug 2022",
    credentialId: "5977430b-e566-4842-aaa3-9fd0f422c5f9",
    url: "https://certificate.givemycertificate.com/c/5977430b-e566-4842-aaa3-9fd0f422c5f9",
  },
  {
    title: "Goldman Sachs Engineering Virtual Program",
    issuer: "Goldman Sachs",
    date: "May 2022",
    credentialId: "1651732643184",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_kbMWTbLGMpFLFQXQ6_1651732643184_completion_certificate.pdf",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    date: "Oct 2020",
    credentialId: "THR7HLXD5KAW",
    url: "https://www.coursera.org/account/accomplishments/certificate/THR7HLXD5KAW",
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera",
    date: "Oct 2020",
    credentialId: "HGYY3WPPRG33",
    url: "https://www.coursera.org/account/accomplishments/certificate/HGYY3WPPRG33",
  },
  {
    title: "Data Science Math Skills",
    issuer: "Coursera",
    date: "Oct 2020",
    credentialId: "4ZKM22XVYEPV",
    url: "https://coursera.org/account/accomplishments/certificate/4ZKM22XVYEPV",
  },
  {
    title: "Introduction to solar cells",
    issuer: "Coursera",
    date: "Oct 2020",
    credentialId: "ET6A39YP462Q",
    url: "https://www.coursera.org/account/accomplishments/certificate/ET6A39YP462Q",
  },
  {
    title: "The Science of Success: What Researchers Know that You Should Know",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "K9G98XARUU4R",
    url: "https://www.coursera.org/account/accomplishments/certificate/K9G98XARUU4R",
  },
  {
    title: "Introduction to Calculus",
    issuer: "Coursera",
    date: "Oct 2020",
    credentialId: "5EVEAT9FAUP8",
    url: "https://www.coursera.org/account/accomplishments/certificate/5EVEAT9FAUP8",
  },
  {
    title: "Crash Course on Python",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "V559M8AMH9NL",
    url: "https://www.coursera.org/account/accomplishments/certificate/V559M8AMH9NL",
  },
  {
    title: "Electric Power Systems",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "RLJZ9L363GD7",
    url: "https://www.coursera.org/account/accomplishments/certificate/RLJZ9L363GD7",
  },
  {
    title: "Introduction to Sustainability",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "CPYMMFDCXZQD",
    url: "https://www.coursera.org/account/accomplishments/certificate/CPYMMFDCXZQD",
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "5U2LNFJ8C69V",
    url: "https://www.coursera.org/account/accomplishments/certificate/5U2LNFJ8C69V",
  },
  {
    title: "Transfer Learning for NLP with TensorFlow Hub",
    issuer: "Coursera",
    date: "Jan 2021",
    credentialId: "FVRN8HX2UFQE",
    url: "https://www.coursera.org/account/accomplishments/certificate/FVRN8HX2UFQE",
  },
  {
    title: "Vector Calculus for Engineers",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "JT22QBJCHAMD",
    url: "https://www.coursera.org/account/accomplishments/certificate/JT22QBJCHAMD",
  },
  {
    title: "Computer Vision Basics",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "SESG34TARJRQ",
    url: "https://www.coursera.org/account/accomplishments/certificate/SESG34TARJRQ",
  },
  {
    title: "Introduction to Electronics",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "TF3VY2LS3S7M",
    url: "https://www.coursera.org/account/accomplishments/verify/TF3VY2LS3S7M",
  },
  {
    title: "Getting Started with AWS Machine Learning",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "SJAATPDPJNB6",
    url: "https://www.coursera.org/account/accomplishments/certificate/SJAATPDPJNB6",
  },
  {
    title: "Code Yourself! An Introduction to Programming",
    issuer: "Coursera",
    date: "Nov 2020",
    credentialId: "K7RT6DTD8MG8",
    url: "https://www.coursera.org/account/accomplishments/certificate/K7RT6DTD8MG8",
  },
];

export const awards: Award[] = [
  {
    name: "Bitget U-30 Hackathon",
    distinction: "Most Viable Project",
    work: "Recognized in the Most Viable Project category.",
  },
  {
    name: "Honeywell WeHack 3.0",
    distinction: "Winner",
    work: "Video analytics for CCTV cameras.",
    year: "2022",
  },
  {
    name: "Axis Bankathon",
    distinction: "1st runner-up",
    work: "An LLM-powered KRA query bot for employees.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7109539095059595264/",
  },
  {
    name: "Bajaj Finserv HackRx 3.0",
    distinction: "1st runner-up",
    work: "Search and recommendation systems.",
    year: "2022",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:6948165848851169280/",
  },
  {
    name: "Canara Bank Dacoethon",
    distinction: "Top 5",
    work: "Canara Bank Dacoethon 2024.",
    year: "2024",
  },
  {
    name: "GLC–HP Hackathon",
    distinction: "Finalist",
    work: "GLC–HP Hackathon 2024.",
    year: "2024",
  },
  {
    name: "Sirion Labs HackFest 1.0",
    distinction: "Grand finalist",
    work: "An optimization algorithm for supplier ratings.",
  },
  {
    name: "Samsung Solve for Tomorrow",
    distinction: "Top 50 · Phase 2",
    work: "AmbuFast: an idea for a five-minute ambulance service.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:6978375361222901760/",
  },
  {
    name: "Siemens Healthineers Shift",
    distinction: "Finalist",
    work: "Computer vision for X-ray analytics.",
    year: "2022",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:6999642219938791424/",
  },
  {
    name: "Amadeus H4S",
    distinction: "Top 5",
    work: "A travel advisor using 3D graphs.",
  },
  {
    name: "Make-a-thon",
    distinction: "Top 10",
    work: "AI Sight: smartphone-camera screening for eye conditions.",
  },
  {
    name: "SmartIdeathon",
    distinction: "Top 100",
    work: "An algorithm for multimodal transportation.",
    year: "2023",
  },
  {
    name: "AI Arena 1.0",
    distinction: "Top 10",
    work: "A data-analytics platform using prompt engineering.",
  },
  {
    name: "Walmart Sparkathon",
    distinction: "Top 7",
    work: "Supplier analytics using language models.",
  },
  {
    name: "Honeywell Hackwell 4.0",
    distinction: "Top 10",
    work: "Neural-network approaches to airport taxiing.",
  },
];

export const education = {
  institution: "Vellore Institute of Technology",
  degree: "Bachelor of Engineering · Electrical & Electronics Engineering",
  location: "Vellore, India",
  result: "",
  period: "2020 — 2024",
};

export const webProjects = [
  {
    name: "Brahmly",
    kind: "Education website",
    stack: "React · Vite · Static rendering",
    description:
      "A 15-page educational-program site with page metadata, structured data, resource downloads and lead integrations.",
    url: "https://brahmly.in",
  },
  {
    name: "Rogell Advisory",
    kind: "Business website",
    stack: "SEO · Vercel · Resend",
    description:
      "A responsive advisory website with dedicated service pages, structured data, sitemap and a contact workflow.",
    url: "",
  },
  {
    name: "CargoVision AI",
    kind: "Teaser website",
    stack: "Canvas · SVG · Accessibility",
    description:
      "An animated teaser website with motion controls, reduced-motion support and an SVG fallback.",
    url: "https://cargovisionai.com",
  },
  {
    name: "Sustaino",
    kind: "Independent concept preview",
    stack: "Vite · Interactive prototyping",
    description:
      "An interactive concept for guided discovery, home comparisons and shared plans.",
    url: "https://sustaino-aioverflow-preview.vercel.app/",
  },
];
