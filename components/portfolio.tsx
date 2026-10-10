"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { caseStudies } from "./case-studies";
import {
  type CareerEntry,
  awards,
  career,
  certificates,
  currentWork,
  education,
  profile,
  projects,
  skillGroups,
} from "./portfolio-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const projectCases: Record<string, string> = {
  "Complex-table extraction": "production-ai",
  "LLM / VLM evaluation platform": "evaluation",
  "API regression automation": "regression",
  "Asynchronous document processing": "async",
  "Database routing & observability": "infrastructure",
  "Enterprise migrations & recovery": "enterprise"
};
const sections = [
  ["work", "Selected work"],
  ["career", "Career"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["certifications", "Certifications"],
  ["awards", "Awards"],
  ["education", "Education"],
  ["about", "About"],
  ["contact", "Contact"],
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ExternalLink({
  href,
  children,
  className = "inline-link",
  label,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <Arrow diagonal />
    </a>
  );
}
function SectionTitle({
  index,
  title,
  description,
  id,
}: {
  index: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-number">{index}</span>
      <div>
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies and skills">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CareerHeading({ item }: { item: CareerEntry }) {
  const content = (
    <>
      {item.logo && (
        <span className="company-mark" aria-hidden="true">
          <Image src={`${basePath}${item.logo}`} alt="" width={48} height={48} />
        </span>
      )}
      <div>
        <h3>{item.company}{item.companyUrl && <Arrow diagonal />}</h3>
        <p className="role-title">{item.role}</p>
      </div>
    </>
  );
  return item.companyUrl ? (
    <a className="career-heading career-company-link"
      href={item.companyUrl} target="_blank" rel="noopener noreferrer"
      aria-label={`Visit ${item.company} company page`}>
      {content}
    </a>
  ) : <div className="career-heading">{content}</div>;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("work");
  const [caseIndex, setCaseIndex] = useState(0);
  const [projectQuery, setProjectQuery] = useState("");
  const [projectFilter, setProjectFilter] = useState("All projects");
  const [careerFilter, setCareerFilter] = useState("All experience");
  const [certificateQuery, setCertificateQuery] = useState("");
  const [certificateIssuer, setCertificateIssuer] = useState("All issuers");
  const [copyStatus, setCopyStatus] = useState("");
  const sectionNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const selectFromHash = () => {
      const index = caseStudies.findIndex(item => window.location.hash === `#case-${item.id}`);
      if (index >= 0) {
        setCaseIndex(index);
        setActiveSection("work");
        requestAnimationFrame(() => requestAnimationFrame(() =>
          document.getElementById(`case-${caseStudies[index].id}`)?.scrollIntoView({ block: "start" })
        ));
      } else {
        const section = sections.find(([id]) => window.location.hash === `#${id}`);
        if (section) setActiveSection(section[0]);
      }
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
        setActiveSection("contact");
        return;
      }
      const scrollPadding = Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop,
      ) || 110;
      const activationLine = scrollPadding + 16;
      let current = "work";
      for (const [id] of sections) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) current = id;
        else if (section) break;
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);
  useEffect(() => {
    const nav = sectionNavRef.current;
    const active = nav?.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
    if (nav && active && nav.scrollWidth > nav.clientWidth) {
      const delta = active.getBoundingClientRect().left - nav.getBoundingClientRect().left;
      nav.scrollTo({ left: nav.scrollLeft + delta - 20, behavior: "auto" });
    }
  }, [activeSection]);

  useEffect(() => {
    if (!copyStatus) return;
    const timeout = window.setTimeout(() => setCopyStatus(""), 4000);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          (projectFilter === "All projects" || project.category === projectFilter) &&
          `${project.name} ${project.summary} ${project.stack.join(" ")}`.toLowerCase().includes(projectQuery.trim().toLowerCase()),
      ),
    [projectFilter, projectQuery],
  );
  const filteredCareer = useMemo(
    () =>
      career.filter(
        (item) =>
          careerFilter === "All experience" || item.group === careerFilter,
      ),
    [careerFilter],
  );
  const filteredCertificates = useMemo(
    () =>
      certificates.filter((certificate) => {
        const term = certificateQuery.trim().toLowerCase();
        return (
          (certificateIssuer === "All issuers" ||
            certificate.issuer === certificateIssuer) &&
          `${certificate.title} ${certificate.issuer} ${certificate.credentialId || ""}`
            .toLowerCase()
            .includes(term)
        );
      }),
    [certificateQuery, certificateIssuer],
  );
  const issuers = Array.from(
    new Set(certificates.map((certificate) => certificate.issuer)),
  ).sort();

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus("Use the email link or select the address to copy it.");
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner page-width">
          <a
            className="identity"
            href="#home"
            aria-label="Chethan Reddy, back to top"
          >
            <span className="identity-symbol" aria-hidden="true">
              c<span>r</span>
            </span>
            <span>
              Chethan Reddy
              <span className="identity-caption">
                FDE · APPLIED AI · PRODUCT ENGINEERING
              </span>
            </span>
          </a>
          <div className="header-actions">
            <a className="header-email" href="#contact">
              Get in touch <Arrow diagonal />
            </a>
            <ExternalLink className="resume-button" href={`${basePath}/CV.pdf`}>
              Résumé
            </ExternalLink>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section
          className="intro page-width"
          id="home"
          aria-labelledby="intro-name"
        >
          <div className="intro-copy">
            <p className="eyebrow">
              <span className="square-mark" /> FROM CUSTOMER REQUIREMENTS TO PRODUCTION
            </p>
            <h1 id="intro-name">
              Chethan{" "}
              <span className="surname">
                Reddy<span className="name-period">.</span>
              </span>
            </h1>
            <p className="intro-role">
              Forward Deployed Engineer, Level 2<span>at Staple AI</span>
            </p>
            <p className="intro-description">
              I build AI applications and the backend systems that run them.
              At Staple AI, I own engineering delivery for 20+ enterprise customers.
              My work connects applied models, reliable services, QA automation
              and customer delivery.
            </p>
            <div className="intro-links">
              <a className="solid-button" href="#work">
                See the engineering <Arrow />
              </a>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            </div>
          </div>
          <div className="intro-aside">
            <figure className="portrait">
              <Image
                src={`${basePath}/profile-pic.jpeg`}
                alt="Chethan Reddy outdoors"
                width={500}
                height={570}
                priority
              />
              <figcaption>
                <span>CHETHAN, OFFLINE</span>
                <span>INDIA ↗</span>
              </figcaption>
            </figure>
            <div className="intro-note">
              <span className="note-rule" />
              <p>
                Customer conversations.
                <br />
                Systems thinking. Code.
              </p>
            </div>
          </div>
          <dl className="intro-facts">
            <div>
              <dt>CURRENT SCOPE</dt>
              <dd>20+ enterprise customers</dd>
            </div>
            <div>
              <dt>ENGINEERING FOCUS</dt>
              <dd>Applied AI · Backend systems</dd>
            </div>
            <div>
              <dt>CURRENT ROLE</dt>
              <dd>Singapore · Hybrid</dd>
            </div>
          </dl>
        </section>

        <div className="archive-layout page-width">
          <aside className="contents-rail">
            <nav
              ref={sectionNavRef}
              aria-label="Portfolio sections"
              className="section-nav"
            >
              <p className="contents-label">IN THIS PORTFOLIO</p>
              <ol>
                {sections.map(([id, label], index) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-current={
                        activeSection === id ? "location" : undefined
                      }
                      onClick={() => setActiveSection(id)}
                    >
                      <span className="nav-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {label}
                      <span className="nav-indicator" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="rail-footnote">
                Selected work, followed
                <br />
                by career and projects.
              </div>
            </nav>
          </aside>

          <div className="archive-content">
            <section
              id="work"
              className="archive-section work-section"
              aria-labelledby="work-heading"
            >
              <SectionTitle
                index="01"
                id="work-heading"
                title="Selected engineering work"
                description="The problem, my engineering decisions and the outcome."
              />
              <p className="work-introduction">Six examples from my work at Staple AI: model integration,
                evaluation, reliable backends and enterprise delivery.</p>
              <div className="case-study-browser">
                <div className="case-selector" role="group" aria-label="Choose an engineering case study">
                  {caseStudies.map((item, index) => (
                    <button type="button" key={item.id} aria-pressed={caseIndex === index}
                      aria-controls={`case-${item.id}`} onClick={() => { setCaseIndex(index); window.history.replaceState(null, "", `#case-${item.id}`); }}>
                      <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
                    </button>
                  ))}
                </div>
                <p className="sr-only" role="status">Showing case study: {caseStudies[caseIndex].label}</p>
                {caseStudies.map((selectedCase, index) => <article key={selectedCase.id} id={`case-${selectedCase.id}`} className="case-study" hidden={index !== caseIndex} aria-labelledby={`title-${selectedCase.id}`}>
                  <div className="case-meta"><span>{selectedCase.organization}</span><span>{selectedCase.stage}</span></div>
                  <h3 id={`title-${selectedCase.id}`}>{selectedCase.title}</h3>
                  <p className="case-question">{selectedCase.question}</p>
                  <ol className="system-flow" aria-label="Engineering workflow">
                    {selectedCase.flow.map((step, i) => <li key={step.title}><span>{String(i + 1).padStart(2, "0")}</span><strong>{step.title}</strong><p>{step.detail}</p></li>)}
                  </ol>
                  <div className="case-body">
                    <div><h4>Engineering decisions</h4><ul>{selectedCase.approach.map(item => <li key={item}>{item}</li>)}</ul></div>
                    <div className="case-outcome"><h4>Outcome & scope</h4><p>{selectedCase.result}</p><p className="case-credit">{selectedCase.scope}</p></div>
                  </div>
                  <Tags items={selectedCase.stack} />
                  <a className="case-permalink" href={`#case-${selectedCase.id}`}>Link to this case study ↗</a>
                </article>)}
              </div>
              <details className="work-scope-details">
                <summary>Explore the wider engineering scope <span aria-hidden="true">+</span></summary>
              <div className="work-records">
                {currentWork.map((item, index) => (
                  <article className="work-record" key={item.title}>
                    <span className="record-index">0{index + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <Tags items={item.tags} />
                    </div>
                  </article>
                ))}
              </div>
              </details>
            </section>

            <section
              id="career"
              className="archive-section"
              aria-label="Career and professional experience"
            >
              <SectionTitle
                index="02"
                title="Experience"
                description="Engineering, teaching and the communities where I started building."
              />
              <div
                className="filter-row"
                role="group"
                aria-label="Filter career records"
              >
                {["All experience", "Engineering", "Teaching", "Community"].map(
                  (filter) => (
                    <button
                      type="button"
                      key={filter}
                      onClick={() => setCareerFilter(filter)}
                      aria-pressed={careerFilter === filter}
                    >
                      {filter}
                    </button>
                  ),
                )}
              </div>
              <p className="result-count" role="status">
                {filteredCareer.length} career records
              </p>
              <div className="career-list">
                {filteredCareer.map((item, index) => (
                  <article
                    className="career-record"
                    key={`${item.company}-${item.role}`}
                  >
                    <div className="career-meta">
                      <span>{item.period}</span>
                      <span
                        className={
                          item.current ? "career-current" : "career-group"
                        }
                      >
                        {item.current ? "CURRENT" : item.group}
                      </span>
                    </div>
                    <div className="career-content">
                      <CareerHeading item={item} />
                      <p className="location-line">{item.location}</p>
                      {item.context && (
                        <p className="career-context">{item.context}</p>
                      )}
                      <p className="career-summary">{item.summary}</p>
                      {item.progression && (
                        <ul className="role-progression">
                          {item.progression.map((role) => (
                            <li key={role.title}>
                              <strong>{role.title}</strong>
                              <span>{role.period}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <details
                        className="record-details"
                        open={index === 0 && careerFilter === "All experience"}
                      >
                        <summary>
                          Responsibilities & technical work
                          <span aria-hidden="true">+</span>
                        </summary>
                        <ul className="detail-list">
                          {item.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                        <Tags items={item.stack} />
                      </details>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="projects"
              className="archive-section"
              aria-label="Project archive"
            >
              <SectionTitle
                index="03"
                title="Projects & technical builds"
                description="Staple AI engineering, followed by earlier applications and competition builds. Open a record for the implementation details."
              />
              <div className="project-search search-field">
                <label htmlFor="project-search">SEARCH PROJECTS</label>
                <input id="project-search" type="search" placeholder="Name, technology or problem…"
                  value={projectQuery} onChange={event => setProjectQuery(event.target.value)} />
              </div>
              <div
                className="filter-row"
                role="group"
                aria-label="Filter projects"
              >
                {[
                  "All projects",
                  "AI applications",
                  "Backend & platforms",
                  "ML, vision & geometry",
                ].map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    onClick={() => setProjectFilter(filter)}
                    aria-pressed={projectFilter === filter}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <p className="result-count" role="status">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
              {filteredProjects.length === 0 && <div className="empty-state"><p>No projects match these filters.</p><button type="button" onClick={() => { setProjectQuery(""); setProjectFilter("All projects"); document.getElementById("project-search")?.focus(); }}>Clear filters</button></div>}
              <div className="project-grid">
                {filteredProjects.map((project) => (
                  <article className="project-record" key={project.name}>
                    <div className="project-category">
                      <span>{project.type}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p className="project-summary">{project.summary}</p>
                    {projectCases[project.name] && <a className="project-case-link" href={`#case-${projectCases[project.name]}`}>Read the engineering case study ↑</a>}
                    <Tags items={project.stack} />
                    <details className="record-details">
                      <summary>
                        Inside the build<span aria-hidden="true">+</span>
                      </summary>
                      <ul className="detail-list">
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      {project.image && (
                        <figure className="project-evidence">
                          <Image
                            src={`${basePath}${project.image}`}
                            alt="Original eduAId instructor interface with student and classroom management"
                            width={565}
                            height={328}
                          />
                          <figcaption>
                            Interface from the original project.
                          </figcaption>
                        </figure>
                      )}
                    </details>
                    {project.link && (
                      <ExternalLink
                        href={project.link}
                        className="project-source"
                      >
                        {project.linkLabel || "View project"}
                      </ExternalLink>
                    )}
                  </article>
                ))}
              </div>
            </section>

            <section
              id="skills"
              className="archive-section"
              aria-label="Technical skills"
            >
              <SectionTitle
                index="04"
                title="Tools of the trade"
                description="Engineering capabilities, with examples of where I have applied them."
              />
              <div className="skills-grid">
                {skillGroups.map((group, index) => (
                  <article className="skill-group" key={group.title}>
                    <span className="record-index">0{index + 1}</span>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="skill-evidence" aria-label={`${group.title} work examples`}>
                      {group.evidence.map((example) => (
                        <a href={example.href} key={example.href}>
                          {example.label}<span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="certifications"
              className="archive-section"
              aria-label="Certifications and learning credentials"
            >
              <SectionTitle
                index="05"
                title="Certifications & learning"
                description="Course completions, virtual programs and event credentials, with their original verification links."
              />
              <div className="credential-controls">
                <div className="search-field">
                  <label htmlFor="certificate-search">SEARCH CREDENTIALS</label>
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="10.5"
                        cy="10.5"
                        r="6.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="m16 16 5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <input
                      id="certificate-search"
                      type="search"
                      value={certificateQuery}
                      onChange={(event) =>
                        setCertificateQuery(event.target.value)
                      }
                      placeholder="Python, machine learning, issuer…"
                    />
                  </div>
                </div>
                <div className="issuer-field">
                  <label htmlFor="certificate-issuer">ISSUER</label>
                  <select
                    id="certificate-issuer"
                    value={certificateIssuer}
                    onChange={(event) =>
                      setCertificateIssuer(event.target.value)
                    }
                  >
                    <option>All issuers</option>
                    {issuers.map((issuer) => (
                      <option key={issuer}>{issuer}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="credentials-summary">
                <p className="result-count" role="status">
                  {filteredCertificates.length} of {certificates.length}{" "}
                  credentials
                </p>
                <ExternalLink
                  href={`${profile.linkedin}details/certifications/`}
                >
                  LinkedIn record
                </ExternalLink>
              </div>
              <div className="credentials-list">
                {filteredCertificates.map((certificate) => (
                  <article
                    className="credential-record"
                    key={certificate.credentialId || certificate.title}
                  >
                    <span className="credential-mark" aria-hidden="true">
                      {certificate.issuer === "Coursera"
                        ? "c"
                        : certificate.issuer.slice(0, 1)}
                    </span>
                    <div className="credential-main">
                      <p className="credential-issuer">
                        {certificate.issuer} <span>· {certificate.date}</span>
                      </p>
                      <h3>{certificate.title}</h3>
                      {certificate.credentialId && (
                        <p className="credential-id">
                          ID {certificate.credentialId}
                        </p>
                      )}
                    </div>
                    {certificate.url && (
                      <ExternalLink
                        className="credential-link"
                        href={certificate.url}
                        label={`View credential: ${certificate.title}`}
                      >
                        <span>View credential</span>
                      </ExternalLink>
                    )}
                  </article>
                ))}
                {filteredCertificates.length === 0 && (
                  <div className="empty-state">
                    <p>No credentials match these filters.</p>
                    <button
                      type="button"
                      onClick={() => {
                        setCertificateQuery("");
                        setCertificateIssuer("All issuers");
                        document.getElementById("certificate-search")?.focus();
                      }}
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </section>

            <section
              id="awards"
              className="archive-section"
              aria-label="Awards and hackathon achievements"
            >
              <SectionTitle
                index="06"
                title="Awards & hackathons"
                description="Hackathons and competitions across AI, healthcare, finance, mobility and enterprise software."
              />
              <div className="award-list">
                {awards.map((award, index) => (
                  <article className="award-record" key={award.name}>
                    <span className="award-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="award-main">
                      <h3>{award.name}</h3>
                      <p>{award.work}</p>
                      {award.url && (
                        <ExternalLink href={award.url} className="award-source">
                          View recognition
                        </ExternalLink>
                      )}
                    </div>
                    <div className="award-distinction">
                      <strong>{award.distinction}</strong>
                      {award.year && <span>{award.year}</span>}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="education"
              className="archive-section"
              aria-label="Education"
            >
              <SectionTitle index="07" title="Education" />
              <article className="education-record">
                <span className="education-mark" aria-hidden="true">
                  VIT
                </span>
                <div>
                  <p className="education-period">
                    {education.location}
                  </p>
                  <h3>{education.institution}</h3>
                  <p className="education-degree">{education.degree}</p>
                  {education.result && (
                    <p className="education-result">{education.result}</p>
                  )}
                  <p className="education-note">
                    Alongside my degree: the IEEE Computer Society, Team AutoZ
                    and TIFAC projects, plus student tools, machine-learning
                    experiments and competitions.
                  </p>
                </div>
              </article>
              <div className="earlier-education">
                <article>
                  <span>HIGHER SECONDARY · MPC</span>
                  <h3>Sree Vidyanikethan</h3>
                  <p>Tirupati, India</p>
                </article>
                <article>
                  <span>SECONDARY EDUCATION</span>
                  <h3>Bharatiya Vidya Bhavan’s</h3>
                  <p>High school</p>
                </article>
              </div>
            </section>

            <section
              id="about"
              className="archive-section"
              aria-label="About Chethan"
            >
              <SectionTitle index="08" title="A little more about me" />
              <div className="about-prose">
                <p className="about-lead">
                  I’m comfortable moving between a customer conversation, a
                  system design decision and the code that makes it work.
                </p>
                <p>
                  My path started with teaching Python and working on
                  machine-learning projects. It grew into backend engineering,
                  full-stack products and enterprise AI delivery. Teaching still
                  shapes how I work: make the problem understandable, examine
                  the assumptions, and explain the decision.
                </p>
                <p>
                  I enjoy working on the whole problem. That can mean building
                  an API, tracing a production issue, automating a repetitive
                  workflow, or helping someone use a product well.
                </p>
                <div className="offscreen-note">
                  <span>AWAY FROM THE KEYBOARD</span>
                  <p>Swimming. Flying drones. Following the next idea.</p>
                </div>
              </div>
            </section>

            <section
              id="contact"
              className="archive-section contact-section"
              aria-labelledby="contact-heading"
            >
              <div className="contact-opening">
                <span className="section-number">09</span>
                <p>LET’S HAVE A CONVERSATION</p>
              </div>
              <h2 id="contact-heading">
                Let’s talk about
                <br />
                what you’re building<span>.</span>
              </h2>
              <p className="contact-description">
                For forward deployed engineering, applied AI, backend systems
                and product development.
              </p>
              <div className="contact-email-row">
                <a href={`mailto:${profile.email}`} className="email-link">
                  {profile.email}
                  <Arrow diagonal />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address for Chethan Reddy"
                  className="copy-button"
                >
                  Copy email
                </button>
              </div>
              <p role="status" className="copy-status">
                {copyStatus}
              </p>
              <div className="contact-links">
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
                <ExternalLink href={profile.leetcode}>LeetCode</ExternalLink>
                <ExternalLink href={`${basePath}/CV.pdf`}>Résumé</ExternalLink>
              </div>
              <p className="contact-location">
                Based in India · Open to international remote roles and relocation with employer visa sponsorship.
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className="site-footer page-width">
        <a href="#home" className="footer-name">
          Chethan Reddy<span>↗</span>
        </a>
        <p>© {new Date().getFullYear()} · Updated October 2026.</p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
