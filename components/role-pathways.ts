export type RolePathway = {
  id: "fde" | "applied-ai" | "backend";
  label: string;
  title: string;
  description: string;
  roles: string;
  firstCase: string;
  evidence: { title: string; detail: string; measure: string; href: string }[];
};

export const rolePathways: RolePathway[] = [
  {
    id: "fde",
    label: "FDE & customer engineering",
    title: "From the customer problem to a working system.",
    description:
      "I connect discovery, solution architecture and hands-on implementation. My work includes integrations, migration plans, production investigation, customer enablement and telemetry for adoption decisions.",
    roles: "Forward deployed engineering · Solutions engineering · Customer engineering",
    firstCase: "enterprise",
    evidence: [
      { title: "Enterprise delivery", measure: "20+ customers", detail: "Technical ownership across requirements, implementation and ongoing support.", href: "#case-enterprise" },
      { title: "Production AI integration", measure: "3 regions", detail: "Model-service APIs and cross-service delivery for complex-table extraction.", href: "#case-production-ai" },
      { title: "Release verification", measure: "70 endpoints", detail: "API contracts, negative cases and complete workflow checks.", href: "#case-regression" },
    ],
  },
  {
    id: "applied-ai",
    label: "Applied AI & products",
    title: "Models, APIs and interfaces that work together.",
    description:
      "I build retrieval and model-integration workflows, evaluation tools and the interfaces around them. The evaluation platform combines a Next.js UI with FastAPI services for quality, consistency and cost comparisons.",
    roles: "Applied AI engineering · AI product engineering · Full-stack AI applications",
    firstCase: "evaluation",
    evidence: [
      { title: "Full-stack evaluation", measure: "25 models", detail: "Eight providers, editable ground truth and live progress; delivered through staging handoff.", href: "#case-evaluation" },
      { title: "Multimodal integration", measure: "3 services", detail: "OCR, vision-language models, structured schemas and source-coordinate mapping.", href: "#case-production-ai" },
      { title: "Enterprise RAG", measure: "Python + retrieval", detail: "Diligence GPT backend work with Django, FastAPI, ArangoDB and LangChain at Dotnitron.", href: "#career-dotnitron" },
    ],
  },
  {
    id: "backend",
    label: "Backend & platforms",
    title: "Services you can trace, test and recover.",
    description:
      "I design Python services and data workflows with explicit contracts, retry behavior and observability. My work covers asynchronous processing, database routing, shared libraries, regression automation and controlled releases.",
    roles: "Senior Python backend engineering · AI platform engineering · Backend product engineering",
    firstCase: "async",
    evidence: [
      { title: "Async processing", measure: "12 reference fixtures", detail: "Co-developed queue delivery, deduplication and recovery; compatibility checked in staging.", href: "#case-async" },
      { title: "Data & observability", measure: "6+ services", detail: "Read/write routing, connection-pool tuning and distributed tracing.", href: "#case-infrastructure" },
      { title: "Regression automation", measure: "70 endpoints", detail: "Repeatable API and workflow validation with isolated data and cleanup.", href: "#case-regression" },
    ],
  },
];
