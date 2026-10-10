export type CareerEntry = {
  company: string;
  logo?: string;
  companyUrl?: string;
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
  | "ML, vision & geometry";
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
    "title": "Production AI, from research to release",
    "text": "Core engineer for complex-table extraction shipped across three services and three regions. Benchmarked OCR and vision-language approaches, built the model-service APIs, and connected model output back to source coordinates.",
    "tags": [
      "Python APIs",
      "OCR + VLMs",
      "Model integration"
    ]
  },
  {
    "title": "Evaluation before a model change",
    "text": "Built an internal LLM/VLM evaluation dashboard spanning eight providers and 25 models, with field-level comparison, consistency checks and cost visibility. Built API regressions across 70 endpoints with contract checks, cleanup and region-aware CI.",
    "tags": [
      "Model evaluation",
      "Regression testing",
      "GitHub Actions"
    ]
  },
  {
    "title": "Backend systems that can be investigated",
    "text": "Co-developed an event-driven document-processing migration through a staging release, with queues, retries, dead-letter routing and idempotency. Added distributed tracing and separated database read/write traffic across six or more services.",
    "tags": [
      "RabbitMQ",
      "OpenTelemetry",
      "Database design"
    ]
  },
  {
    "title": "Customer migrations and incident recovery",
    "text": "Own requirements and engineering delivery for 20+ enterprise customers. Build migration plans with baselines, rollback procedures and export checks; investigate production failures through reproducible cases, data comparisons and root-cause analysis.",
    "tags": [
      "Enterprise delivery",
      "Migrations",
      "Production debugging"
    ]
  },
];

export const career: CareerEntry[] = [
  {
    "company": "Staple AI",
    companyUrl: "https://www.staple.ai/",
    logo: "/company-logos/staple-ai.png",
    "role": "Forward Deployed Engineer (FDE-2)",
    "period": "At Staple · May 2024 — Present",
    "location": "Singapore · Hybrid",
    "group": "Engineering",
    "current": true,
    "context": "Enterprise AI · Product engineering · Customer delivery",
    "summary": "Own engineering delivery across 20+ enterprise customers, from requirements and onsite investigation to product changes, QA and production support.",
    "progression": [
      {
        "title": "Forward Deployed Engineer · FDE-2",
        "period": "September 2026 — Present"
      },
      {
        "title": "AI Software Engineer · SDE-2",
        "period": "From May 2025 · Earlier role"
      },
      {
        "title": "AI Software Engineer · SDE-1",
        "period": "From May 2024 · Earlier role"
      }
    ],
    "details": [
      "As an FDE, connect customer requirements, production investigation and implementation. Write reproducible cases, design fixes and work through migration and release verification.",
      "As a core product engineer, took complex-table extraction from OCR/VLM research to production across three services and three regions, building model APIs, templates and coordinate mapping.",
      "Built an eight-provider, 25-model evaluation dashboard and a regression platform covering 70 gateway API endpoints. Moved monitor scheduling to GitHub Actions while retaining Postman CLI for execution.",
      "Co-developed asynchronous document processing with RabbitMQ, dead-letter queues, idempotency and compatibility fixtures. Delivered the migration through a staging release.",
      "Delivered enterprise model migrations with baseline snapshots, rate-controlled writes, post-write verification and export-parity checks.",
      "Built China-region OCR integrations, multilingual normalization, strict/fuzzy vendor matching and configurable model routing. Added tracing, timeout boundaries and separate database read/write pools.",
      "Wrote production root-cause analyses, engineering runbooks and shared QA/migration procedures; reviewed code and mentored junior engineers.",
      "Built a shared Python library for telemetry, database and S3 integration; compared document-AI products on a shared sample to inform product recommendations."
    ],
    "stack": [
      "Python",
      "LLMs / VLMs",
      "FastAPI",
      "AWS",
      "Kubernetes",
      "RabbitMQ",
      "OpenTelemetry",
      "API regression"
    ]
  },
  {
    "company": "Dotnitron Technologies",
    companyUrl: "https://www.linkedin.com/company/96054350/",
    logo: "/company-logos/dotnitron.png",
    "role": "AI Software Engineer",
    "period": "Dec 2023 — May 2024",
    "location": "USA · Remote",
    "group": "Engineering",
    "context": "Alvarez & Marsal engagement · Diligence GPT",
    "summary": "Led Python backend development and RAG architecture for a diligence application, working with cross-functional engineering teams.",
    "details": [
      "Built with Django, FastAPI and ArangoDB; integrated LangChain and OpenAI into retrieval and application workflows.",
      "Designed AI-backed services, reviewed code, debugged integrations and tested model/backend behavior.",
      "The Alvarez & Marsal engagement continued through June 2024 as part of this client assignment."
    ],
    "stack": [
      "Python",
      "Django",
      "FastAPI",
      "ArangoDB",
      "LangChain",
      "RAG"
    ]
  },
  {
    company: "Bajaj Finserv Health",
    companyUrl: "https://www.linkedin.com/company/31207209/",
    logo: "/company-logos/bajaj-finserv-health.png",
    role: "Data Science Engineer Intern",
    period: "May — Aug 2023",
    location: "Pune, India · On-site",
    group: "Engineering",
    summary:
      "Built recommendation systems and medical-document analytics with the InSightRX data team.",
    details: [
      "Developed lab-test recommendation workflows that achieved a reported 30% operational-efficiency improvement in the project.",
      "Used OCR, named-entity recognition, LLMs and YOLO for document and image analysis.",
      "Optimized Elasticsearch and SQL retrieval, with an 80% retrieval-speed improvement recorded in the original project résumé.",
    ],
    stack: ["Python", "OCR", "NER", "YOLO", "Elasticsearch", "SQL"],
    context: "InSightRX · Data team",
  },
  {
    company: "TIFAC · Vellore Institute of Technology",
    companyUrl: "https://vit.ac.in/",
    logo: "/company-logos/vit.webp",
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
    companyUrl: "https://app.smartdietplanner.com/",
    logo: "/company-logos/smart-diet-planner.png",
    role: "Machine Learning Researcher · Intern",
    period: "Aug 2022 — Apr 2023",
    location: "India · Research & development",
    group: "Engineering",
    summary:
      "Applied machine learning to nutrition analysis and the functionality of a personalized diet application.",
    details: [
      "Created algorithms to extract text and nutritional content from food products and calculate users’ macro consumption.",
      "Implemented search and automated PDF analysis to support diet-planning workflows.",
      "Developed a customized PaLM chatbot that used medical conditions and complications as inputs to personalized diet recommendations.",
      "Contributed to an application with an audience of more than 850,000 users.",
    ],
    stack: [
      "Python",
      "Machine learning",
      "Nutrition analysis",
      "OCR",
      "AI search",
      "PaLM",
      "Conversational AI",
    ],
  },
  {
    company: "Grroom",
    companyUrl: "https://www.linkedin.com/company/68142405/",
    logo: "/company-logos/grroom.png",
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
    companyUrl: "https://www.linkedin.com/company/78004643/",
    logo: "/company-logos/edvi.png",
    role: "Software Engineer Mentor",
    period: "Oct 2022 — Mar 2023",
    location: "Delhi, India · Remote · Freelance",
    group: "Teaching",
    summary:
      "Mentored learners in software engineering and computer science, connecting core concepts to practical design and problem solving.",
    details: [
      "Explained data structures, algorithms, system design and low-/high-level design through technical problems and implementation choices.",
      "Supported learning in data science, machine learning and database management, alongside networking and digital electronics.",
      "Adapted individual explanations to each learner’s academic level and the problem they were working through.",
    ],
    stack: ["Mentoring", "System design", "DSA", "Machine learning", "DBMS"],
  },
  {
    company: "Modo Edulabs",
    companyUrl: "https://www.linkedin.com/company/13338649/",
    logo: "/company-logos/modo-edulabs.png",
    role: "Machine Learning Content Associate",
    period: "Aug 2022 — Mar 2023",
    location: "India · Part-time",
    group: "Teaching",
    summary:
      "Developed project-based machine-learning curricula and Python course content, alongside learner mentoring.",
    details: [
      "Designed structured ML curricula with hands-on Python projects that connected lessons to practical implementation.",
      "Managed and revised content across multiple Python courses, from foundational programming to advanced ML topics.",
      "Mentored and trained learners at different levels using the curriculum and practical project work.",
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
      "Taught practical machine learning through personalized instruction, model-building support and deployment guidance.",
    details: [
      "Explained machine-learning concepts through practical applications, adapting instruction to individual learner needs.",
      "Helped learners construct advanced deep-learning models and work through their implementations.",
      "Guided deployment of completed models to connect the learning process with usable software.",
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
    companyUrl: "https://www.linkedin.com/company/13743165/",
    logo: "/company-logos/tekie.png",
    role: "Python Programming Mentor",
    period: "Jun 2021 — Oct 2022",
    location: "Bengaluru, India · Part-time",
    group: "Teaching",
    summary:
      "Mentored 60+ students through 500+ hours of Python and C++ instruction, combining visual explanations with code review.",
    details: [
      "Delivered structured programming lessons using visual demonstrations and practical examples to explain unfamiliar concepts.",
      "Debugged and evaluated assignment, problem-solving and coding-test submissions, helping learners improve their solutions.",
      "Contributed research and curriculum development for data-science and AI education.",
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
    companyUrl: "https://www.linkedin.com/company/5239646/",
    logo: "/company-logos/camp-k12.png",
    role: "Coding Instructor · Python & AI",
    period: "Jun — Aug 2022",
    location: "India · Part-time",
    group: "Teaching",
    summary:
      "Delivered 150+ hours of Python, AI and machine-learning instruction, with projects tailored to student interests.",
    details: [
      "Taught Python programming, artificial intelligence and machine-learning concepts, including introductory blockchain content.",
      "Personalized mentoring and designed practical projects around individual student interests and ideas.",
    ],
    stack: ["Python", "AI", "Machine learning", "Project mentoring"],
  },
  {
    company: "Cybeorg Education Technology",
    companyUrl: "https://cybeorg.com/",
    logo: "/company-logos/cybeorg.png",
    role: "Coding Tutor → Coding Consultant",
    period: "Mar — Dec 2021",
    location: "India / Dubai, UAE",
    group: "Teaching",
    summary:
      "Delivered 300+ hours of Python instruction and developed advanced curricula spanning data science, mathematics and astronomy.",
    details: [
      "Mentored school-age and adult learners, building Python projects and explanations suited to their experience.",
      "Created curricula covering Python, programming mathematics, machine learning, deep learning and astronomy with Astropy.",
      "Supported doctoral astrophysics research with scientific Python using NumPy, SciPy, pandas, TensorFlow, Astropy and Plotly.",
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
    companyUrl: "https://www.cipherschools.com/",
    logo: "/company-logos/cipherschools.png",
    role: "Teaching Assistant",
    period: "May — Jun 2021",
    location: "India · Internship",
    group: "Teaching",
    summary:
      "Reviewed learner Python code and provided practical feedback on assignments and projects as a teaching assistant.",
    details: [
      "Evaluated Python scripts submitted for assignments and projects, recommending improvements to learners’ solutions.",
      "Maintained learner records using Microsoft Excel and management systems to support the teaching workflow.",
    ],
    stack: ["Python", "Code review", "Teaching", "Data management"],
  },
  {
    company: "VITrendz",
    companyUrl: "https://www.vitrendz.in/",
    logo: "/company-logos/vitrendz.jpg",
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
    companyUrl: "https://www.linkedin.com/company/66354865/",
    logo: "/company-logos/team-autoz.png",
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
    "name": "Complex-table extraction",
    "category": "AI applications",
    "type": "Staple AI · Production feature",
    "summary": "Model-service APIs and source-coordinate mapping for complex table extraction across three services and three regions.",
    "details": [
      "Benchmarked OCR and vision-language approaches, then built Python APIs, schemas, templates and scan-pipeline integration.",
      "Implemented cell-to-OCR-box mapping with page-aware boundaries, timeouts and multilingual normalization.",
      "Core engineering contribution to a team production launch in April 2025."
    ],
    "stack": [
      "Python",
      "VLMs",
      "OCR",
      "MongoDB"
    ]
  },
  {
    "name": "LLM / VLM evaluation platform",
    "category": "AI applications",
    "type": "Staple AI · Internal tooling",
    "summary": "An internal evaluation dashboard comparing extraction quality, consistency and token cost across eight providers and 25 models.",
    "details": [
      "Built a Next.js interface with FastAPI, MongoDB and S3, including a bilingual ground-truth editor and live run progress.",
      "Implemented per-field similarity and F1, repeated-run agreement, provider cost accounting and review thresholds.",
      "Delivered the evaluation platform through staging handoff, with quality, consistency and cost comparisons."
    ],
    "stack": [
      "Next.js",
      "FastAPI",
      "MongoDB",
      "Model evaluation"
    ]
  },
  {
    "name": "API regression automation",
    "category": "Backend & platforms",
    "type": "Staple AI · Merged QA platform",
    "summary": "Repeatable contract, negative-case and workflow checks across 70 API-gateway endpoints.",
    "details": [
      "Built region-aware QA queue provisioning and a full write chain from scan through polling, download/export validation and cleanup.",
      "Added per-endpoint response schemas, error-envelope checks, reporting and a janitor for leftover QA resources.",
      "Consolidated scheduling in GitHub Actions while retaining Postman CLI execution; fixed false-green reporting and separated timeouts from failures."
    ],
    "stack": [
      "GitHub Actions",
      "Postman CLI",
      "API contracts",
      "QA automation"
    ]
  },
  {
    "name": "Asynchronous document processing",
    "category": "Backend & platforms",
    "type": "Staple AI · Staging migration",
    "summary": "An event-driven migration with retries, deduplication, dead-letter routing and compatibility checks.",
    "details": [
      "Co-developed the messaging specification and implementation, with acknowledgement after storage, bounded retries and message-ID deduplication.",
      "Built scan-message generation and PDF rendering changes, validating compatibility against 12 reference fixtures from the existing service.",
      "Prepared release lineage and a reviewer walkthrough for the staging release."
    ],
    "stack": [
      "Python",
      "RabbitMQ",
      "Redis",
      "Amazon MQ"
    ]
  },
  {
    "name": "Database routing & observability",
    "category": "Backend & platforms",
    "type": "Staple AI · Infrastructure engineering",
    "summary": "Read/write separation across six or more services and trace propagation through model-processing workflows.",
    "details": [
      "Separated primary and replica engines and sessions, using FastAPI dependencies and repository-level routing.",
      "Tuned connection pooling and added read/write logging.",
      "Implemented trace-context propagation and telemetry across asynchronous model workers, with logs and metrics linked for investigation."
    ],
    "stack": [
      "PostgreSQL",
      "RDS",
      "FastAPI",
      "OpenTelemetry"
    ]
  },
  {
    "name": "Enterprise migrations & recovery",
    "category": "Backend & platforms",
    "type": "Staple AI · Forward deployed engineering",
    "summary": "Customer requirements, model migrations and production investigation across a portfolio of 20+ enterprise customers.",
    "details": [
      "Build baseline snapshots, dry-run migration tools, bounded writes, rollback procedures and export-parity checks.",
      "Use source documents, replay tools, logs and data reconciliation to distinguish model behavior, configuration and code defects.",
      "Own customer communication and verification through implementation, QA and recovery."
    ],
    "stack": [
      "Customer engineering",
      "Root-cause analysis",
      "Migration tooling",
      "Data reconciliation"
    ]
  },
  {
    "name": "Rogell Advisory DMCC",
    "category": "Backend & platforms",
    "type": "Advisory website · Team contribution",
    "summary": "A responsive advisory website with dedicated service pages, enquiry integration and structured content for Africa and Middle East markets.",
    "details": [
      "Built the multi-page website with Vite, HTML, CSS and JavaScript; implemented service-page metadata, canonical links, structured data and the sitemap.",
      "Added enquiry API code with Vercel Functions and Resend, and worked through deployment and route checks.",
      "My contribution focused on website implementation and delivery. Business content and the related brochure were developed with the team."
    ],
    "stack": [
      "Vite",
      "JavaScript",
      "Vercel",
      "Resend",
      "SEO"
    ],
    "link": "https://rogell-advisory-dmcc.vercel.app/",
    "linkLabel": "Visit website"
  },
  {
    name: "FFCS Planner",
    category: "Backend & platforms",
    type: "Course-planning tool",
    summary:
      "A timetable planner that selects course slots around faculty, course and time preferences.",
    details: [
      "Built a scheduling approach using graph traversal across more than 2,000 course options.",
      "The original project record reports use by more than 10,000 VIT students.",
    ],
    stack: ["Python", "Graph algorithms", "Scheduling"],
    link: "https://github.com/chethanreddy123/FFSC-Planner-Python",
    linkLabel: "View source",
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
      "Connected classroom insights, content generation and note digitization within the instructor workflow.",
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
    category: "ML, vision & geometry",
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
    category: "ML, vision & geometry",
    type: "Search & recommendation",
    summary:
      "A search-improvement system combining machine-learning classification with fuzzy keyword matching.",
    details: [
      "Built autocomplete, correction and keyword recommendation for an insurance search use case using a linear support vector machine.",
      "Combined Levenshtein distance, Fast Autocomplete and directed acyclic graphs; the original project measurement reports responses below 800 ms.",
    ],
    stack: ["Python", "Linear SVM", "Fuzzy matching"],
  },
  {
    name: "WeDio",
    link: "https://github.com/chethanreddy123/HoneyWell-WeHack---Video-Smoothness",
    linkLabel: "View source",
    category: "ML, vision & geometry",
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
    "title": "Forward deployed engineering",
    "items": [
      "Technical discovery & scoping",
      "Solution architecture",
      "Enterprise integrations",
      "Cross-functional technical leadership",
      "Production debugging",
      "Technical mentoring"
    ],
    "evidence": [
      {
        "label": "Customer delivery & migrations",
        "href": "#case-enterprise"
      }
    ]
  },
  {
    "title": "Applied AI & evaluation",
    "items": [
      "RAG & prompt engineering",
      "Multimodal LLMs / VLMs",
      "Model evaluation",
      "Structured-output validation",
      "LLMOps: evaluation, routing & observability",
      "Embeddings / vector-search evaluation"
    ],
    "evidence": [
      {
        "label": "Model evaluation",
        "href": "#case-evaluation"
      },
      {
        "label": "Production AI",
        "href": "#case-production-ai"
      }
    ]
  },
  {
    "title": "Backend & distributed systems",
    "items": [
      "Python · FastAPI · Django",
      "SQL / NoSQL data models",
      "Asynchronous workflows",
      "RabbitMQ / Amazon MQ",
      "Database read/write routing",
      "OpenTelemetry"
    ],
    "evidence": [
      {
        "label": "Async processing",
        "href": "#case-async"
      },
      {
        "label": "Data & tracing",
        "href": "#case-infrastructure"
      }
    ]
  },
  {
    "title": "Quality & product delivery",
    "items": [
      "API contracts & regression",
      "CI / GitHub Actions",
      "Model & data verification",
      "TypeScript / Next.js",
      "AWS / Kubernetes",
      "Code review & release handoff"
    ],
    "evidence": [
      {
        "label": "API regression",
        "href": "#case-regression"
      }
    ]
  }
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
    distinction: "Winner · 1st Prize",
    work: "Bitget U-30 Hackathon winner.",
    year: "2023",
  },
  {
    name: "IEEE WIE VIT WeHack 3.0 · Honeywell",
    distinction: "Winner · 1st Prize",
    work: "Video analytics for CCTV cameras.",
    year: "2022",
  },
  {
    name: "Axis Bankathon LLM 1.0",
    distinction: "1st runner-up",
    work: "An LLM-powered KRA query bot for employees.",
    year: "2023",
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
    name: "Canara Bank DACOE-Thon",
    distinction: "Top 5",
    work: "Placed in the top five among more than 3,000 teams.",
    year: "2024",
  },
  {
    name: "GLC–HP Hackathon",
    distinction: "Grand finalist · Top 4",
    work: "Placed in the top four among more than 3,000 teams.",
    year: "2024",
  },
  {
    name: "Sirion Labs HackFest 1.0",
    distinction: "Grand finalist · Top 7",
    work: "Supplier-rating optimization. Top seven among more than 2,000 teams.",
    year: "2022",
  },
  {
    name: "Samsung Solve for Tomorrow",
    distinction: "Top 50 · Phase 2",
    work: "AmbuFast ambulance concept. Selected from more than 18,000 teams.",
    year: "2022",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:6978375361222901760/",
  },
  {
    name: "Siemens Healthineers SHIFT",
    distinction: "Finalist · Top 10 / 3,000+",
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
    year: "2023",
  },
  {
    name: "JSSATEB Hackwell 3.0 · Honeywell",
    distinction: "Top 10 / 150+ teams",
    work: "Finalist placement in the Honeywell-powered competition.",
  },
];

export const education = {
  institution: "Vellore Institute of Technology",
  degree: "Bachelor of Engineering · Computer and Electrical Engineering",
  location: "Vellore, India",
  result: "",
  period: "",
};
