"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const email = "achethanreddy1921@gmail.com";
const github = "https://github.com/chethanreddy123";
const linkedin = "https://www.linkedin.com/in/achethanreddy/";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const responsibilities = [
  {
    title: "Requirements & customer success",
    text: "Work directly with customers to understand what they need, scope changes and support them through delivery.",
  },
  {
    title: "AI & product engineering",
    text: "Build AI features, backend services and integrations that fit the customer's existing systems and workflows.",
  },
  {
    title: "QA & ongoing delivery",
    text: "Set up QA automation, investigate issues and work through the changes needed after a release.",
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 3000);
    return () => window.clearTimeout(timeout);
  }, [copied]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner wrap">
          <a className="identity" href="#home" aria-label="Chethan Reddy, home">
            <span className="monogram">cr</span>
            <span>
              Chethan Reddy<span className="identity-sub">AI ENGINEER</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
          </nav>
          <a className="header-contact" href="#contact">
            Get in touch <Arrow diagonal />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? "mobile-menu" : undefined}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
            <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ["Work", "work"],
              ["About", "about"],
              ["Experience", "experience"],
              ["Get in touch", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
                <Arrow diagonal />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">AI FORWARD DEPLOYED ENGINEER</div>
            <h1 id="hero-title">
              I’m Chethan.
              <br />I build{" "}
              <span className="hero-emphasis">
                AI
                <br className="hero-break" /> products.
              </span>
            </h1>
            <p className="hero-description">
              My work spans AI applications, backend systems and automation. At
              Staple AI, I work directly with enterprise customers from
              requirements through release and ongoing support.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                View my work <Arrow />
              </a>
              <a
                className="text-link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Arrow diagonal />
              </a>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-image">
              <Image
                src={`${basePath}/profile-pic.jpeg`}
                alt="Chethan Reddy"
                width={400}
                height={400}
                sizes="(max-width: 700px) 85vw, 400px"
                priority
              />
            </div>
            <figcaption>
              <span>Chethan Reddy</span>
              <span>India · Working remotely</span>
            </figcaption>
          </figure>
          <div className="hero-bottom">
            <span>AI APPLICATIONS / BACKEND SYSTEMS / PRODUCT DELIVERY</span>
            <a href="#work">
              SELECTED WORK <span>↓</span>
            </a>
          </div>
        </section>

        <section className="proof-strip" aria-label="Current scope">
          <div className="wrap proof-inner">
            <div className="proof-main">
              <strong>
                20<span>+</span>
              </strong>
              <p>
                Enterprise customers<span>in my portfolio at Staple AI</span>
              </p>
            </div>
            <div className="proof-detail">
              <span>CURRENT ROLE</span>
              <p>
                AI Forward Deployed
                <br />
                Engineering
              </p>
            </div>
            <div className="proof-detail">
              <span>RESPONSIBILITIES</span>
              <p>
                Engineering, customer success
                <br />
                and QA automation
              </p>
            </div>
          </div>
        </section>

        <section
          className="work-section wrap section-space"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-top">
            <span className="section-kicker">01 / CURRENT WORK</span>
            <span className="small-note">Staple AI · Remote</span>
          </div>
          <div className="section-heading-row">
            <h2 id="work-title">
              Engineering, with
              <br />
              the customer in the room.
            </h2>
            <p>
              I turn enterprise requirements into product capabilities, support
              customers through delivery, and build QA automation around the
              work.
            </p>
          </div>
          <div className="responsibilities">
            {responsibilities.map((item, index) => (
              <article className="responsibility" key={item.title}>
                <span className="responsibility-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="domain-example">
            <span>ONE EXAMPLE</span>Intelligent document processing: extracting
            information and connecting it to downstream workflows. It sits
            alongside my work on AI applications, backend integrations and
            automation.
          </p>

          <div className="projects-heading">
            <div>
              <h3>Selected projects</h3>
              <p>Education, data exploration and image processing.</p>
            </div>
          </div>
          <div className="project-list">
            <article className="project-entry">
              <div className="project-name">
                <span className="project-index">01</span>
                <h4>eduAId</h4>
                <p>Teaching tools</p>
              </div>
              <div className="project-description">
                <p>
                  Backend tools for class summaries, teaching insights, study
                  plans and AI-assisted note generation.
                </p>
                <div className="project-tech">
                  Python / FastAPI / MongoDB / LLMs
                </div>
                <details className="project-details">
                  <summary>
                    View implementation notes <span aria-hidden="true">+</span>
                  </summary>
                  <p>
                    Built backend routes for content generation, classroom
                    insights and study plans, along with a workflow for
                    generating notes from PDFs.
                  </p>
                  <figure className="project-evidence">
                    <Image
                      src={`${basePath}/eduaid.png`}
                      alt="eduAId instructor interface showing student and class management"
                      width={565}
                      height={328}
                    />
                    <figcaption>
                      Instructor interface from the original project.
                    </figcaption>
                  </figure>
                </details>
              </div>
            </article>
            <article className="project-entry">
              <div className="project-name">
                <span className="project-index">02</span>
                <h4>KaRmA</h4>
                <p>Conversational data exploration</p>
              </div>
              <div className="project-description">
                <p>
                  A prototype that connects natural-language questions to SQL
                  data and generates reports through a FastAPI backend.
                </p>
                <div className="project-tech">
                  Python / FastAPI / LangChain / SQL
                </div>
                <details className="project-details">
                  <summary>
                    View implementation notes <span aria-hidden="true">+</span>
                  </summary>
                  <p>
                    Built a chatbot and report-generation workflow using a
                    LangChain SQL agent, SQL databases and a FastAPI backend.
                    The application connects natural-language interaction to
                    structured business information.
                  </p>
                </details>
              </div>
            </article>
            <article className="project-entry">
              <div className="project-name">
                <span className="project-index">03</span>
                <h4>PhotoBook</h4>
                <p>Image processing</p>
              </div>
              <div className="project-description">
                <p>
                  An image-processing API that takes uploaded photos and page
                  dimensions, then produces a downloadable PDF layout.
                </p>
                <div className="project-tech">
                  Python / FastAPI / Pillow / FPDF
                </div>
                <a
                  className="text-link source-link"
                  href={`${github}/PhotoBook-Backend`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source <Arrow diagonal />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="wrap about-grid">
            <div className="about-title">
              <span className="section-kicker">02 / ABOUT ME</span>
              <h2 id="about-title">
                A bit more
                <br />
                about me.
              </h2>
              <div className="personal-detail">
                <span>AWAY FROM THE KEYBOARD</span>
                <p>
                  Swimming.
                  <br />
                  Flying drones.
                </p>
              </div>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I spend my time between customer conversations and code.
              </p>
              <p>
                Some days that means working through a new requirement. On
                others, it means building a feature, investigating an issue or
                setting up a QA check. That range is a big part of my work as a
                Forward Deployed Engineer.
              </p>
              <p>
                I’m interested in roles where I can keep that connection between
                engineering and the people using the product.
              </p>
              <div className="about-links">
                <a
                  className="text-link"
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <Arrow diagonal />
                </a>
                <a
                  className="text-link"
                  href={`${basePath}/CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="experience-section wrap section-space"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-top">
            <span className="section-kicker">03 / EXPERIENCE</span>
          </div>
          <div className="experience-grid">
            <div>
              <h2 id="experience-title">Where I’ve worked.</h2>
              <p className="experience-intro">
                AI applications, backend engineering and enterprise delivery.
              </p>
              <div className="stack-block">
                <span className="section-kicker">TECHNOLOGIES</span>
                <div className="stack-tags">
                  {[
                    "Python",
                    "FastAPI",
                    "LangChain",
                    "SQL",
                    "LLMs & RAG",
                    "Computer vision",
                    "AWS",
                    "Kubernetes",
                  ].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="experience-list">
              <article className="experience-item">
                <div className="experience-meta">
                  <span className="current-label">CURRENT</span>
                  <span>Singapore · Remote</span>
                </div>
                <h3>Staple AI</h3>
                <h4>AI Forward Deployed Engineering</h4>
                <p>
                  Customer requirements, product engineering, customer success
                  and QA automation across enterprise AI workflows.
                </p>
              </article>
              <article className="experience-item">
                <div className="experience-meta">
                  <span>DEC 2023 — MAY 2024</span>
                  <span>US · Remote</span>
                </div>
                <h3>Dotnitron Technologies</h3>
                <h4>AI Software Engineer</h4>
                <p>
                  RAG applications and backend development using Python, Django,
                  FastAPI and language models.
                </p>
              </article>
              <article className="experience-item">
                <div className="experience-meta">
                  <span>2023</span>
                  <span>Pune, India</span>
                </div>
                <h3>Bajaj Finserv Health</h3>
                <h4>Data Science Engineer Intern</h4>
                <p>
                  Recommendation systems, document and image analytics, and
                  information retrieval with SQL and Elasticsearch.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="wrap">
            <div className="contact-top">
              <span className="section-kicker">04 / CONTACT</span>
              <span>BASED IN INDIA · WORKING REMOTELY</span>
            </div>
            <div className="contact-main">
              <h2 id="contact-title">Let’s talk.</h2>
              <a
                className="contact-circle"
                href={`mailto:${email}`}
                aria-label="Email Chethan Reddy"
              >
                <Arrow diagonal />
              </a>
            </div>
            <div className="contact-bottom">
              <div>
                <a className="email-link" href={`mailto:${email}`}>
                  {email}
                </a>
                <button
                  className="copy-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? "Copied ✓" : "Copy email"}
                </button>
                <span className="copy-status" role="status">
                  {copied
                    ? "Email address copied."
                    : copyError
                      ? "Please use the email link to get in touch."
                      : ""}
                </span>
              </div>
              <div className="social-links">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <Arrow diagonal />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  GitHub <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a href="#home" className="footer-wordmark" aria-label="Back to top">
          chethan reddy<span>↗</span>
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Chethan Reddy</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}
