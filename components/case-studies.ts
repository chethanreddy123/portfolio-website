export type CaseStudy = {
  id: string;
  label: string;
  organization: string;
  title: string;
  stage: string;
  question: string;
  decision: string;
  approach: string[];
  result: string;
  scope: string;
  verification: { risk: string; check: string }[];
  deliveryNote: string;
  flow: { title: string; detail: string }[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    "id": "production-ai",
    "label": "Production AI",
    "organization": "STAPLE AI",
    "title": "Bringing complex-table extraction into production.",
    "stage": "Production launch · April 2025",
    "question": "Table extraction needed more than a model response: the result had to map back to the original document, fit existing APIs and behave consistently across regions.",
    "decision": "Keep extracted cells tied to page-specific OCR coordinates so model output can be checked against the source document.",
    "approach": [
      "Benchmarked OCR and vision-language approaches, comparing extraction behavior, cost and layout handling before selecting the integration approach.",
      "Built Python model-service APIs, table schemas, templates and OCR-coordinate mapping; integrated the feature into the scanning pipeline with other engineers.",
      "Followed the launch with bounded mapping timeouts, configurable matching thresholds, multilingual normalization and model-routing controls."
    ],
    "result": "Shipped complex-table extraction across three services and three regions, connecting applied model research to APIs, data contracts and production operations.",
    "scope": "My work: model benchmarking, Python APIs, table schemas, source-coordinate mapping and cross-service integration. The production launch was a team effort.",
    "verification": [
      { "risk": "A plausible cell mapped to the wrong source text", "check": "Keep source-page coordinates attached to extracted cells; use configurable matching thresholds and multilingual normalization during mapping." },
      { "risk": "Mapping work delays the scan pipeline", "check": "Bound mapping with timeouts and expose model-routing controls so extraction behavior can be investigated independently of the surrounding services." }
    ],
    "deliveryNote": "Production integration across three services and three regions. Model benchmarking informed the implementation; no public accuracy or latency benchmark is claimed.",
    "flow": [
      {
        "title": "Extract",
        "detail": "OCR and vision-language output"
      },
      {
        "title": "Map back",
        "detail": "Extracted cells → source boxes"
      },
      {
        "title": "Structure",
        "detail": "Table schema and scan pipeline"
      },
      {
        "title": "Observe",
        "detail": "Tracing and failure boundaries"
      }
    ],
    "stack": [
      "Python",
      "VLMs",
      "OCR",
      "MongoDB",
      "AWS / Kubernetes"
    ]
  },
  {
    "id": "evaluation",
    "label": "Model evaluation",
    "organization": "STAPLE AI",
    "title": "Make a model change a testable decision.",
    "stage": "Internal evaluation platform · Staging handoff",
    "question": "A promising model response is not enough to justify a release. Quality, repeatability and cost need to be compared against the same reference data.",
    "decision": "Compare field quality, repeated-run agreement and token cost on shared ground truth to make model-selection tradeoffs visible.",
    "approach": [
      "Built a Next.js and FastAPI evaluation platform with bilingual ground-truth editing, per-field similarity and F1, live progress and provider cost accounting.",
      "Connected eight providers and 25 models, with repeated-run consistency checks and review thresholds to support model-selection decisions.",
      "Added stop-run handling with partial results, production-compatibility checks and self-hosted provider support before the staging handoff.",
      "In a separate template-retrieval research workstream, evaluated multimodal embeddings and Milvus retrieval, filtering, upsert and deletion; co-designed validation using header, position and vector checks."
    ],
    "result": "Delivered an internal evaluation dashboard spanning eight providers and 25 models, making field quality, consistency and token cost visible in one workflow.",
    "scope": "My work: requirements, platform design, FastAPI backend and Next.js review interface through staging handoff. Template-retrieval evaluation and validation design were a separate research workstream.",
    "verification": [
      { "risk": "A strong example hides inconsistent field quality", "check": "Run shared inputs against editable ground truth, compare per-field similarity and F1, and repeat runs to inspect agreement." },
      { "risk": "A cancelled evaluation loses useful work", "check": "Keep partial results when a run stops, with live progress and cost accounting available to the reviewer." },
      { "risk": "Research results are mistaken for a deployed retrieval system", "check": "Keep the embedding and Milvus work identified as a separate research stream; the dashboard deliverable ended at staging handoff." }
    ],
    "deliveryNote": "Internal platform delivered through staging handoff. The eight-provider, 25-model scope describes integration coverage, not a measured quality win or production rollout.",
    "flow": [
      {
        "title": "Reference",
        "detail": "Documents and editable ground truth"
      },
      {
        "title": "Run",
        "detail": "Shared inputs across providers"
      },
      {
        "title": "Compare",
        "detail": "Fields, consistency and cost"
      },
      {
        "title": "Review",
        "detail": "Evidence for a model decision"
      }
    ],
    "stack": [
      "FastAPI",
      "Next.js",
      "MongoDB",
      "LLM / VLM evaluation"
    ]
  },
  {
    "id": "regression",
    "label": "API regression",
    "organization": "STAPLE AI",
    "title": "A green test run should mean the workflow worked.",
    "stage": "Merged regression platform · 70 endpoints",
    "question": "API checks need to catch contract drift and workflow failures while keeping QA resources isolated and reports honest.",
    "decision": "Validate the full write-and-export workflow and report timeouts separately so incomplete checks cannot appear as successful runs.",
    "approach": [
      "Built regression coverage for 70 gateway endpoints with response schemas, negative cases and region-specific QA queue provisioning.",
      "Verified the full write chain: scan, poll for completion, validate downloads and exports, then clean up the generated resources.",
      "Consolidated scheduling and reports in GitHub Actions while retaining Postman CLI. Fixed a false-green result and classified timeouts as skips."
    ],
    "result": "Merged API regression automation covering 70 endpoints, with workflow checks, contract validation and repeatable cleanup.",
    "scope": "My work: regression architecture, implementation, CI consolidation and reporting. Postman CLI remains part of execution.",
    "verification": [
      { "risk": "A successful request masks a broken workflow", "check": "Exercise scan → poll → download/export → cleanup, alongside endpoint schemas, error envelopes and negative cases." },
      { "risk": "Incomplete work creates a false-green report", "check": "Correct false-green reporting and classify timeouts separately as skips; keep pass, fail and incomplete outcomes visible." },
      { "risk": "Repeated test runs leave data behind", "check": "Provision regional QA resources, clean up each workflow and use a janitor for leftover test resources." }
    ],
    "deliveryNote": "Merged regression automation for 70 endpoints, covering contracts, complete workflows and cleanup. Postman CLI remains part of execution.",
    "flow": [
      {
        "title": "Provision",
        "detail": "Isolated regional QA resources"
      },
      {
        "title": "Exercise",
        "detail": "Contracts and full write chain"
      },
      {
        "title": "Report",
        "detail": "Pass, fail and skipped results"
      },
      {
        "title": "Clean up",
        "detail": "Remove test data and resources"
      }
    ],
    "stack": [
      "GitHub Actions",
      "Postman CLI",
      "API contracts",
      "QA automation"
    ]
  },
  {
    "id": "async",
    "label": "Async processing",
    "organization": "STAPLE AI",
    "title": "Changing the transport without breaking the contract.",
    "stage": "Collaborative backend migration · Staging release",
    "question": "Moving document processing from synchronous calls to messaging changes delivery, retry and recovery behavior. Existing scan outputs still need to remain compatible.",
    "decision": "Acknowledge messages after storage and pair bounded retries with message-ID deduplication to limit duplicate work during recovery.",
    "approach": [
      "Co-developed the event-driven specification and implementation with acknowledgement after storage, bounded retries, message-ID deduplication and dead-letter routing.",
      "Built scan-message generation and PDF rendering changes, checking output against 12 reference fixtures produced by the existing service.",
      "Prepared a reviewer walkthrough, release lineage and rollout checks, including queue-delivery settings and trace propagation."
    ],
    "result": "Delivered the migration through a staging release with compatibility checks across 12 scan-message reference fixtures.",
    "scope": "My contribution: messaging design, implementation, scan-message compatibility and release preparation alongside another engineer, through staging validation against 12 reference fixtures.",
    "verification": [
      { "risk": "A retry repeats already completed work", "check": "Use message-ID deduplication and acknowledge only after storage; apply bounded retries and dead-letter routing." },
      { "risk": "A transport change silently changes scan output", "check": "Compare generated scan messages against 12 reference fixtures from the existing service before the staging release." },
      { "risk": "A failed job is hard to follow across workers", "check": "Include trace propagation and queue-delivery settings in the reviewer walkthrough and rollout checks." }
    ],
    "deliveryNote": "Collaborative migration delivered to staging. The checks establish compatibility for the reference fixtures; they do not establish exactly-once delivery or a production throughput result.",
    "flow": [
      {
        "title": "Queue",
        "detail": "Route work and deduplicate messages"
      },
      {
        "title": "Process",
        "detail": "Generate, store and acknowledge"
      },
      {
        "title": "Recover",
        "detail": "Bounded retries and dead-letter queue"
      },
      {
        "title": "Compare",
        "detail": "Reference scan-message fixtures"
      }
    ],
    "stack": [
      "Python",
      "RabbitMQ",
      "Amazon MQ",
      "Redis",
      "OpenTelemetry"
    ]
  },
  {
    "id": "infrastructure",
    "label": "Data & tracing",
    "organization": "STAPLE AI",
    "title": "Give reads, writes and failures a clear path.",
    "stage": "Database routing · Worker observability",
    "question": "Shared databases and asynchronous workers make it difficult to understand load and trace a document across service boundaries.",
    "decision": "Route suitable reads through separate replica sessions while keeping writes on the primary, and log the route for verification.",
    "approach": [
      "Separated primary and replica endpoints, engines and sessions across six or more services, using FastAPI dependencies and repository-level routing.",
      "Tuned connection pooling and added read/write logging so database access followed the intended route.",
      "Added trace-context middleware, logging bridges and metrics to follow model-processing work through asynchronous services."
    ],
    "result": "Moved read traffic off primary databases across six or more services and added connected tracing for model-processing workflows.",
    "scope": "My work: service-level database routing, connection-pool configuration and observability integration.",
    "verification": [
      { "risk": "Reads and writes use an unintended connection", "check": "Make primary/replica engines and sessions explicit in dependencies and repositories; inspect read/write route logs." },
      { "risk": "Worker boundaries break an incident trace", "check": "Propagate trace context through middleware and logging bridges, connecting model-processing logs, metrics and spans." }
    ],
    "deliveryNote": "Service-level routing and observability across six or more services. These changes demonstrate implementation scope; no measured database speedup or recovery-time reduction is published.",
    "flow": [
      {
        "title": "Route",
        "detail": "Read replica or primary write"
      },
      {
        "title": "Connect",
        "detail": "Explicit engines and sessions"
      },
      {
        "title": "Trace",
        "detail": "Context across worker boundaries"
      },
      {
        "title": "Investigate",
        "detail": "Linked logs, metrics and spans"
      }
    ],
    "stack": [
      "PostgreSQL",
      "RDS",
      "FastAPI",
      "OpenTelemetry",
      "Kubernetes"
    ]
  },
  {
    "id": "enterprise",
    "label": "Enterprise delivery",
    "organization": "STAPLE AI",
    "title": "Take customer requirements through delivery and adoption.",
    "stage": "Customer engineering across SDE and FDE roles",
    "question": "Customer requests, production failures and usage patterns need to become clear engineering work, with a way to verify the result and support adoption.",
    "decision": "Use reproducible cases, baseline snapshots and dry-run checks to scope production changes and verify recovery against the customer workflow.",
    "approach": [
      "Own technical discovery and engineering delivery for 20+ enterprise customers. Personally design, code, test and roll out customer features and integrations, collaborating with product, engineering and customer success on shared dependencies.",
      "Use document comparisons, replay tools and logs to separate model, data and code defects; build reproducible cases before choosing the fix.",
      "Build migration baselines, staged rollout plans, export-parity checks and rollback procedures. Lead incident recovery with transactional repairs, dry-run tools and post-recovery verification.",
      "Build AI dashboards and agents around customer telemetry to surface usage patterns, support adoption discussions and identify usage-growth and upsell opportunities."
    ],
    "result": "Restored stalled ingestion, recovered missing source files and delivered customer model migrations. Verified each result against the affected customer workflow.",
    "scope": "I personally implement approximately 80% of the requirements for my customer portfolio, from solution design and code to testing, rollout and verification. This includes customer migrations, incident recovery and telemetry-based adoption support.",
    "verification": [
      { "risk": "The proposed fix addresses the symptom instead of the cause", "check": "Compare source documents, replay behavior and logs to distinguish model, data, configuration and code defects." },
      { "risk": "A migration changes customer-visible output", "check": "Capture baseline snapshots, run dry-run checks, compare export parity and prepare rollback before staged changes." },
      { "risk": "Recovery finishes without proving the workflow works", "check": "Use transactional repairs and post-recovery verification against the affected customer workflow." }
    ],
    "deliveryNote": "Scope spans multiple customer engagements. Telemetry dashboards and adoption agents support customer decisions; revenue or adoption uplift is not quantified here.",
    "flow": [
      {
        "title": "Discover",
        "detail": "Requirements and customer context"
      },
      {
        "title": "Build",
        "detail": "Personally code features, integrations and fixes"
      },
      {
        "title": "Verify",
        "detail": "Baselines, QA and recovery checks"
      },
      {
        "title": "Support adoption",
        "detail": "Usage telemetry, dashboards and agents"
      }
    ],
    "stack": [
      "Root-cause analysis",
      "Data reconciliation",
      "Migration tooling",
      "Customer engineering",
      "Customer telemetry"
    ]
  }
];
