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
      "Own technical discovery, scoping and engineering delivery for 20+ enterprise customers, coordinating implementation and QA with product, engineering and customer-success teams.",
      "Use document comparisons, replay tools and logs to separate model, data and code defects; build reproducible cases before choosing the fix.",
      "Build migration baselines, staged rollout plans, export-parity checks and rollback procedures. Lead incident recovery with transactional repairs, dry-run tools and post-recovery verification.",
      "Build AI dashboards and agents around customer telemetry to surface usage patterns, support adoption discussions and identify usage-growth and upsell opportunities."
    ],
    "result": "Restored stalled ingestion, recovered missing source files and delivered customer model migrations. Verified each result against the affected customer workflow.",
    "scope": "My contribution: discovery, implementation and verification across customer migrations, incident recovery and ongoing telemetry-based adoption support.",
    "flow": [
      {
        "title": "Discover",
        "detail": "Requirements and customer context"
      },
      {
        "title": "Deliver",
        "detail": "Integrations, migrations and fixes"
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
