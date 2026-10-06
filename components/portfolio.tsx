"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  awards,
  career,
  certificates,
  currentWork,
  education,
  profile,
  projects,
  skillGroups,
  webProjects,
} from "./portfolio-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const sections = [
  ["work", "Current work"],
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
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-number">{index}</span>
      <div>
        <h2>{title}</h2>
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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("work");
  const [projectFilter, setProjectFilter] = useState("All projects");
  const [careerFilter, setCareerFilter] = useState("All experience");
  const [certificateQuery, setCertificateQuery] = useState("");
  const [certificateIssuer, setCertificateIssuer] = useState("All issuers");
  const [copyStatus, setCopyStatus] = useState("");
  const sectionNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    sections.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!copyStatus) return;
    const timeout = window.setTimeout(() => setCopyStatus(""), 4000);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          projectFilter === "All projects" ||
          project.category === projectFilter,
      ),
    [projectFilter],
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
                ENGINEER · BUILDER · MENTOR
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
              <span className="square-mark" /> A PERSONAL RECORD OF THE WORK
            </p>
            <h1 id="intro-name">
              Chethan{" "}
              <span className="surname">
                Reddy<span className="name-period">.</span>
              </span>
            </h1>
            <p className="intro-role">
              AI Forward Deployed Engineer<span>at Staple AI</span>
            </p>
            <p className="intro-description">
              I build AI applications and the software around them: backend
              systems, product features, and the automation that makes them
              useful.
            </p>
            <div className="intro-links">
              <a className="solid-button" href="#work">
                Explore the work <Arrow />
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
                Close to the customer.
                <br />
                Hands-on with the code.
              </p>
            </div>
          </div>
          <dl className="intro-facts">
            <div>
              <dt>CURRENT SCOPE</dt>
              <dd>20+ enterprise customers</dd>
            </div>
            <div>
              <dt>FOCUS</dt>
              <dd>AI · Backend · Product · Automation</dd>
            </div>
            <div>
              <dt>BASED IN</dt>
              <dd>India · Working remotely</dd>
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
                An ongoing record
                <br />
                of what I build and learn.
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
                title="Current work"
                description="The scope is broad. The ownership is end to end."
              />
              <article className="current-role-panel">
                <div>
                  <span className="panel-kicker">
                    STAPLE AI · MAY 2024 — PRESENT
                  </span>
                  <h3 id="work-heading">
                    From customer requirements
                    <br />
                    to running software.
                  </h3>
                  <p>
                    As an AI Forward Deployed Engineer, I work across{" "}
                    <strong>20+ enterprise customers</strong>. My remit connects
                    new requirements, product engineering, customer success and
                    QA automation.
                  </p>
                </div>
                <div className="ownership-number">
                  <span>
                    20<span>+</span>
                  </span>
                  <p>
                    enterprise customers
                    <br />
                    in my portfolio
                  </p>
                </div>
              </article>
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
            </section>

            <section
              id="career"
              className="archive-section"
              aria-label="Career and professional experience"
            >
              <SectionTitle
                index="02"
                title="Career, in full"
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
                      <div className="career-heading">
                        <span className="company-mark" aria-hidden="true">
                          {item.company.replace(/[^a-z]/gi, "").slice(0, 2)}
                        </span>
                        <div>
                          <h3>{item.company}</h3>
                          <p className="role-title">{item.role}</p>
                        </div>
                      </div>
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
                title="Projects & independent work"
                description="Applications, platforms, experiments and competition builds. Open a record for the implementation details."
              />
              <div
                className="filter-row"
                role="group"
                aria-label="Filter projects"
              >
                {[
                  "All projects",
                  "AI applications",
                  "Backend & platforms",
                  "ML & vision",
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
              <div className="project-grid">
                {filteredProjects.map((project) => (
                  <article className="project-record" key={project.name}>
                    <div className="project-category">
                      <span>{project.type}</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p className="project-summary">{project.summary}</p>
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
              <div className="web-projects-section">
                <div className="web-projects-heading">
                  <h3>Websites & explorations</h3>
                  <p>Websites for businesses, educational programmes and new ideas.</p>
                </div>
                <div className="web-project-list">
                  {webProjects.map((project) => (
                    <article className="web-project-record" key={project.name}>
                      <div className="web-project-name">
                        <span>{project.kind}</span>
                        <h4>{project.name}</h4>
                      </div>
                      <div>
                        <p>{project.description}</p>
                        <span className="web-project-stack">
                          {project.stack}
                        </span>
                      </div>
                      {project.url && (
                        <ExternalLink
                          href={project.url}
                          className="web-project-link"
                          label={`View ${project.name} ${project.kind.toLowerCase()}`}
                        >
                          <span>Visit</span>
                        </ExternalLink>
                      )}
                    </article>
                  ))}
                </div>
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
                description="The technologies and practices that show up in my work."
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
                title="Learning, on record"
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
                title="Built under pressure"
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
                    {education.period} · {education.location}
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
                Good work starts
                <br />
                with a hello<span>.</span>
              </h2>
              <p className="contact-description">
                For AI engineering, product development and backend work—or an
                interesting problem worth discussing.
              </p>
              <div className="contact-email-row">
                <a href={`mailto:${profile.email}`} className="email-link">
                  {profile.email}
                  <Arrow diagonal />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy Chethan’s email address"
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
                Based in India. Working remotely.
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className="site-footer page-width">
        <a href="#home" className="footer-name">
          Chethan Reddy<span>↗</span>
        </a>
        <p>© {new Date().getFullYear()} · An ongoing body of work.</p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
