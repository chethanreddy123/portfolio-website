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
      "I take customer requirements through discovery, solution design, code, testing and rollout. I personally build features, integrations, migration tools and production fixes, alongside customer telemetry, dashboards and agents for adoption decisions.",
    roles: "Forward deployed engineering · Solutions engineering · Customer engineering",
    firstCase: "enterprise",
    evidence: [
      { title: "Enterprise delivery", measure: "20+ customers", detail: "Personally design, implement, test and roll out customer requirements, with ongoing production ownership.", href: "#case-enterprise" },
      { title: "Production AI integration", measure: "3 regions", detail: "Model-service APIs and cross-service delivery for complex-table extraction.", href: "#case-production-ai" },
      { title: "Release verification", measure: "70 endpoints", detail: "API contracts, negative cases and complete workflow checks.", href: "#case-regression" },
    ],
  },
  {
    id: "applied-ai",
    label: "Applied & agentic AI",
    title: "Agent workflows, retrieval and multimodal applications.",
    description:
      "I build agentic workflows, retrieval applications and multimodal integrations. Examples include LangChain agents for teaching and SQL reporting, plus LLM/VLM evaluation tooling for quality, consistency and cost comparisons.",
    roles: "Agentic AI engineering · Applied AI engineering · AI product engineering",
    firstCase: "evaluation",
    evidence: [
      { title: "Full-stack evaluation", measure: "25 models", detail: "Eight providers, editable ground truth and live progress; delivered through staging handoff.", href: "#case-evaluation" },
      { title: "Multimodal integration", measure: "3 services", detail: "OCR, vision-language models, structured schemas and source-coordinate mapping.", href: "#case-production-ai" },
      { title: "Enterprise RAG", measure: "Diligence GPT", detail: "Retrieval architecture and model integration at Dotnitron, using LangChain, ArangoDB and application services.", href: "#career-dotnitron" },
    ],
  },
  {
    id: "backend",
    label: "AI platform engineering",
    title: "Services you can trace, test and recover.",
    description:
      "I build the services and operating foundations behind AI applications, with explicit contracts, recovery paths and observability. My work covers asynchronous processing, database routing, shared libraries, regression automation and controlled releases.",
    roles: "AI platform engineering · Senior AI software engineering · AI application infrastructure",
    firstCase: "async",
    evidence: [
      { title: "Async processing", measure: "12 reference fixtures", detail: "Co-developed queue delivery, deduplication and recovery; compatibility checked in staging.", href: "#case-async" },
      { title: "Data & observability", measure: "6+ services", detail: "Read/write routing, connection-pool tuning and distributed tracing.", href: "#case-infrastructure" },
      { title: "Regression automation", measure: "70 endpoints", detail: "Repeatable API and workflow validation with isolated data and cleanup.", href: "#case-regression" },
    ],
  },
];
