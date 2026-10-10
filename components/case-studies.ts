export type CaseStudy = {
  id: string;
  label: string;
  organization: string;
  title: string;
  stage: string;
  question: string;
  approach: string[];
  result: string;
  scope: string;
  flow: { title: string; detail: string }[];
  stack: string[];
};

const records: CaseStudy[] = [
  {
    id: 'production-ai', label: 'Production AI', organization: 'STAPLE AI',
    title: 'Bringing complex-table extraction into production.',
    stage: 'Production launch · April 2025',
    question: 'Table extraction needed more than a model response: the result had to map back to the original document, fit existing APIs and behave consistently across regions.',
    approach: [
      'Benchmarked OCR and vision-language approaches, comparing extraction behavior, cost and layout handling before selecting the integration approach.',
      'Built Python model-service APIs, table schemas, templates and OCR-coordinate mapping; integrated the feature into the scanning pipeline with other engineers.',
      'Followed the launch with bounded mapping timeouts, configurable matching thresholds, multilingual normalization and model-routing controls.'
    ],
    result: 'Shipped complex-table extraction across three services and three regions, connecting applied model research to APIs, data contracts and production operations.',
    scope: 'My work: research, model-service implementation and cross-service integration. Product delivery was a team effort.',
    flow: [{title:'Extract',detail:'OCR and vision-language output'},{title:'Map back',detail:'Extracted cells → source boxes'},{title:'Structure',detail:'Table schema and scan pipeline'},{title:'Observe',detail:'Tracing and failure boundaries'}],
    stack: ['Python','VLMs','OCR','MongoDB','AWS / Kubernetes']
  },
  {
    id:'evaluation',label:'Evaluation & QA',organization:'STAPLE AI',
    title:'Make a model change a testable decision.',
    stage:'Internal tooling · Regression platform',
    question:'Model selection and API releases needed repeatable checks, clear comparisons and practical cost visibility.',
    approach:[
      'Built an LLM/VLM evaluation platform with ground-truth editing, field comparisons, repeat-run consistency and token-cost visibility across eight providers and 25 models.',
      'Built regression automation covering 70 gateway endpoints: response contracts, negative cases, regional runs, write-chain checks and isolated data cleanup.',
      'Moved scheduled regression runs to GitHub Actions while retaining Postman CLI execution.'
    ],
    result:'Built an eight-provider, 25-model evaluation dashboard and merged regression automation covering 70 gateway endpoints.',
    scope:'My work: platform design, implementation and QA tooling. The evaluation dashboard was handed off in staging; API regression work was merged.',
    flow:[{title:'Reference',detail:'Documents and editable ground truth'},{title:'Compare',detail:'Fields, consistency and cost'},{title:'Regress',detail:'Contracts and negative cases'},{title:'Review',detail:'Release decision with evidence'}],
    stack:['FastAPI','Next.js','Model evaluation','GitHub Actions','Postman CLI']
  },
  {
    id:'enterprise',label:'Enterprise delivery',organization:'STAPLE AI',
    title:'Follow the customer symptom into the system.',
    stage:'Customer engineering across SDE and FDE roles',
    question:'A customer sees a missing document or a failed export. The cause may be model behavior, configuration, an integration or a failure several services away.',
    approach:[
      'Own requirements and engineering delivery for a portfolio of 20+ enterprise customers, including onsite investigation, implementation, QA and ongoing support.',
      'Use document comparisons, replay tools and logs to separate model, data and code defects; build reproducible cases before choosing the fix.',
      'Build migration baselines, staged rollout plans, export-parity checks and rollback procedures. Lead incident recovery with transactional repairs, dry-run tools and post-recovery verification.'
    ],
    result:'Restored stalled ingestion, recovered missing source files and delivered customer model migrations. Each result is checked against the affected workflow rather than inferred from a successful API call.',
    scope:'My contribution: customer communication, investigation, implementation and verification across migrations and incident recovery.',
    flow:[{title:'Reproduce',detail:'Customer symptom + source data'},{title:'Isolate',detail:'Model, configuration or code'},{title:'Repair',detail:'Bounded change and rollback'},{title:'Verify',detail:'Customer workflow and parity'}],
    stack:['Root-cause analysis','Data reconciliation','Migration tooling','Customer engineering']
  },
  {
    id:'operations',label:'Operations & SQL',organization:'AIOVERFLOW',
    title:'Connecting bookings, payroll and reporting in one platform.',
    stage:'Released website and operations platform',
    question:'Bookings, stock, payroll and finance had to agree with each other. Natural-language reporting also needed to respect the same data boundaries.',
    approach:[
      'Built booking, inventory, staff permissions, payroll, commissions and finance workflows using Next.js, PostgreSQL and Prisma.',
      'Added text-to-SQL over 17 allowlisted tables, with tokenized validation, statement/result limits and database-enforced read-only transactions.',
      'Used server-side pagination and selective queries to reduce blog-listing HTML from 487,198 to 126,605 bytes. Kept unit, isolated-database and HTTP verification with the release.'
    ],
    result:'Released the public site and ERP; server-side pagination reduced measured blog-listing HTML by approximately 74%.',
    scope:'My contribution: product engineering and release delivery, with business and domain input from Jacqueline Ekumba. Release scope: the public site and operations platform.',
    flow:[{title:'Ask',detail:'Business question → generated SQL'},{title:'Validate',detail:'Allowlisted schema and query limits'},{title:'Execute',detail:'Database read-only transaction'},{title:'Return',detail:'Bounded rows from current data'}],
    stack:['Next.js','TypeScript','PostgreSQL','Prisma','Text-to-SQL']
  },
  {
    id:'clinical',label:'Streaming AI',organization:'AIOVERFLOW',
    title:'A clinical draft should survive a dropped connection.',
    stage:'Original application · Collaborative extension',
    question:'Streaming transcription is only useful when the encounter state stays coherent through reconnects, concurrent sessions and delayed analysis.',
    approach:[
      'Built the original FastAPI/MongoDB clinical application with Deepgram transcription, editable notes, summaries, encounter chat and PDF export.',
      'Worked through reconnect handling, transcript-history restoration, session races and processor cleanup so interruptions did not silently corrupt the workflow.',
      'Contributed authentication-cookie fixes, migrations, worker configuration and deployment integration to the later ScribeDesk codebase, whose main implementation was authored by Purushoth.'
    ],
    result:'Built a clinical documentation MVP producing structured encounter drafts for clinician review and sign-off, with explicit recovery behavior.',
    scope:'My contribution: the original Clinical Scribe application, followed by authentication and deployment integration in the collaborative ScribeDesk implementation.',
    flow:[{title:'Capture',detail:'Streaming audio and transcript'},{title:'Recover',detail:'Reconnect and encounter state'},{title:'Structure',detail:'Editable notes and summaries'},{title:'Review',detail:'Clinician sign-off and export'}],
    stack:['FastAPI','MongoDB','Deepgram','OpenAI','Next.js']
  },
  {
    id:'workflows',label:'Controlled workflows',organization:'AIOVERFLOW',
    title:'Access, approval and recovery in long-running workflows.',
    stage:'Product development · Applywise and AuditVault',
    question:'Long-running generation and document workflows need a reliable answer to who can act, which version is approved and whether an action really completed.',
    approach:[
      'Built Applywise’s profile ingestion and résumé generation with independent review/correction, resumable progress and PDF output.',
      'Bound application authorization to the destination, selected document and approved answers; distinguished attempted actions from confirmed provider receipts.',
      'Built AuditVault in Go, Next.js and PostgreSQL with an eight-stage audit workflow, vessel-scoped access, mutation logs, resumable uploads and signed downloads.'
    ],
    result:'Implemented reviewable state transitions and recoverable workflows. The hosted résumé flow has release evidence; the broader application engine does not have independently confirmed employer submissions.',
    scope:'My work: application and workflow engineering. AuditVault’s document-vault implementation is separate from MarinePulse’s AI-assisted inspection/reporting tools.',
    flow:[{title:'Scope',detail:'Identity and resource access'},{title:'Process',detail:'Resumable background work'},{title:'Approve',detail:'Exact artifact and destination'},{title:'Record',detail:'Evidence of the actual outcome'}],
    stack:['Go','TypeScript','PostgreSQL','R2 / S3','Async workflows']
  }
];

// Alternate employer and independent examples to show the breadth of the work.
export const caseStudies = [records[0], records[3], records[1], records[4], records[2], records[5]];
