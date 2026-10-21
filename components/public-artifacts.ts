export type PublicArtifact = {
  id: string;
  title: string;
  kind: string;
  description: string;
  evidence: string[];
  scope: string;
  links: { label: string; href: string }[];
};

export const publicArtifacts: PublicArtifact[] = [
  {
    id: "customer-ops-agent-lab",
    title: "Customer Operations Agent Lab",
    kind: "October 2026 · AI-assisted personal demonstration",
    description:
      "Follow synthetic customer telemetry through retrieved playbooks, a proposed action, human approval and recovery after a simulated tool failure. Run the dashboard locally and inspect each decision.",
    evidence: [
      "31 automated tests cover approval, evidence checks, concurrency, idempotency and HTTP boundaries.",
      "16 declared synthetic scenarios exercise 106 control checks, including lost-response recovery and rejected actions.",
      "One-command local setup with Python's standard library; no credentials or paid APIs.",
    ],
    scope: "Scripted planner replay and lexical retrieval, with synthetic data. Demonstrates orchestration controls; it does not measure live LLM performance or represent employer work.",
    links: [
      { label: "Source & local demo", href: "https://github.com/chethanreddy123/customer-ops-agent-lab" },
      { label: "Architecture", href: "https://github.com/chethanreddy123/customer-ops-agent-lab/blob/main/docs/ARCHITECTURE.md" },
      { label: "Tests & evaluation", href: "https://github.com/chethanreddy123/customer-ops-agent-lab/blob/main/docs/VERIFICATION.md" },
      { label: "CI runs", href: "https://github.com/chethanreddy123/customer-ops-agent-lab/actions/workflows/checks.yml" },
    ],
  },
  {
    id: "photobook",
    title: "PhotoBook API",
    kind: "Personal project · Runnable API",
    description:
      "Upload an image, choose physical page dimensions and receive a generated PDF. A small, inspectable example of request validation, resource handling and repeatable API tests.",
    evidence: [
      "25 tests covering PDF output, invalid input, resource limits, concurrency and cleanup.",
      "GitHub Actions runs on Python 3.11, 3.12 and 3.13.",
      "Local setup, sample request and API response contracts are documented; no credentials are required.",
    ],
    scope: "Earlier personal project, with reliability improvements added in October 2026. Demonstrates API engineering; it is not an AI model or a hosted production service.",
    links: [
      { label: "Source & setup", href: "https://github.com/chethanreddy123/PhotoBook-Backend#run-locally" },
      { label: "Read the tests", href: "https://github.com/chethanreddy123/PhotoBook-Backend/blob/main/tests/test_api.py" },
      { label: "CI runs", href: "https://github.com/chethanreddy123/PhotoBook-Backend/actions/workflows/test.yml" },
    ],
  },
];
