"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import WorkflowCanvas from "./workflow-canvas";

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
const capabilities = [
  {
    number: "01",
    title: "Close to the customer.",
    text: "Understand the workflow, question the assumptions, and turn ambiguous requirements into something we can build.",
    tags: "Requirements · Customer success",
  },
  {
    number: "02",
    title: "Deep in the product.",
    text: "Connect models, APIs and product logic. Build the capabilities that make AI useful in an enterprise workflow.",
    tags: "AI systems · Product engineering",
  },
  {
    number: "03",
    title: "There after launch.",
    text: "Set up QA automation, work through edge cases, and keep improving what happens after a feature ships.",
    tags: "QA automation · Delivery ownership",
  },
];
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 3000);
    return () => window.clearTimeout(timeout);
  }, [copied]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
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
            <span className="monogram">
              cr<span>↗</span>
            </span>
            <span>
              Chethan Reddy
              <span className="identity-sub">ENGINEER & BUILDER</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
          </nav>
          <a className="header-contact" href="#contact">
            Let’s talk <Arrow diagonal />
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
            <span>{menuOpen ? "−" : "+"}</span>
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
              ["Let’s talk", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
                <Arrow diagonal />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section className="hero wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> AI FORWARD DEPLOYED ENGINEER
            </div>
            <h1 id="hero-title">
              AI, built for
              <br />
              the{" "}
              <span className="blue-word">
                real world
                <svg
                  viewBox="0 0 460 22"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M5 16C130 2 300 2 454 10" />
                </svg>
              </span>
              <span className="blue-period">.</span>
            </h1>
            <p className="hero-description">
              I turn complex enterprise requirements into working AI products.
              From the first customer conversation to the details that make it
              work in production.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="text-link" href="#contact">
                Let’s build something <Arrow diagonal />
              </a>
            </div>
            <div className="hero-person">
              <Image
                src={`${basePath}/profile-pic.jpeg`}
                alt="Chethan Reddy"
                width={42}
                height={42}
                priority
              />
              <p>
                Currently building at <strong>Staple AI</strong>
                <span>Based in India. Working across borders.</span>
              </p>
            </div>
          </div>
          <div className="hero-art">
            <WorkflowCanvas />
          </div>
          <div className="hero-bottom">
            <span>THE WORK DOESN’T STOP AT THE MODEL.</span>
            <a href="#work">
              SCROLL TO EXPLORE <span>↓</span>
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
              <span>MY SWEET SPOT</span>
              <p>
                Customer context.
                <br />
                Engineering depth.
              </p>
            </div>
            <div className="proof-detail">
              <span>HOW I WORK</span>
              <p>
                Own the problem.
                <br />
                Follow it through.
              </p>
            </div>
            <div className="proof-symbol" aria-hidden="true">
              ✳
            </div>
          </div>
        </section>

        <section
          className="work-section wrap section-space"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-top">
            <span className="section-kicker">01 / THE WORK</span>
            <span className="small-note">
              Building where AI meets real operations.
            </span>
          </div>
          <div className="section-heading-row">
            <h2 id="work-title">
              Beyond the demo.
              <br />
              <span className="muted-text">Into the day-to-day.</span>
            </h2>
            <p>
              My role connects customer success, product engineering and QA.
              That means staying with the problem across the whole delivery
              cycle.
            </p>
          </div>
          <article className="featured-work">
            <div className="featured-heading">
              <div className="work-label">
                <span className="live-dot" /> CURRENT FOCUS
              </div>
              <span className="company-label">
                Staple AI <span aria-hidden="true">↗</span>
              </span>
            </div>
            <div className="featured-body">
              <div>
                <h3>
                  Enterprise complexity.
                  <br />
                  <span>End-to-end ownership.</span>
                </h3>
                <p>
                  I work across document AI and enterprise workflows:
                  translating new requirements into product capabilities,
                  supporting customer success, and building QA automation around
                  delivery.
                </p>
                <div className="tag-row">
                  <span>Document AI</span>
                  <span>Product engineering</span>
                  <span>Customer success</span>
                </div>
              </div>
              <div className="ownership-note">
                <span className="note-star" aria-hidden="true">
                  ↗
                </span>
                <p>
                  The interesting part: making it work for the people who
                  actually use it.
                </p>
                <span>MY APPROACH TO FORWARD DEPLOYED ENGINEERING</span>
              </div>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => (
                <div className="capability" key={item.number}>
                  <span className="capability-number">{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <span className="capability-tags">{item.tags}</span>
                </div>
              ))}
            </div>
          </article>
          <div className="projects-heading">
            <div>
              <h3>Selected builds</h3>
              <p>Experiments in useful AI.</p>
            </div>
            <a
              className="text-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow diagonal />
            </a>
          </div>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-visual education-visual">
                <div className="project-visual-label">
                  LEARNING, WITH CONTEXT.
                </div>
                <div className="edu-sheet">
                  <div className="sheet-header">
                    <span className="edu-brand">
                      edu<span>AI</span>d
                    </span>
                    <span className="tiny-pill">INSTRUCTOR WORKSPACE</span>
                  </div>
                  <div className="sheet-body">
                    <div className="sheet-sidebar">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="sheet-main">
                      <span className="sheet-greeting">
                        A clearer view of learning.
                      </span>
                      <div className="sheet-line" />
                      <div className="mini-students">
                        <div>
                          <span>↗</span>
                          <b>
                            Classroom
                            <br />
                            insights
                          </b>
                        </div>
                        <div>
                          <span>≋</span>
                          <b>
                            AI-assisted
                            <br />
                            notes
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="concept-label">PROJECT CONCEPT</span>
                </div>
                <div className="project-orbit" aria-hidden="true">
                  a<span>+</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-title-row">
                  <h4>eduAId</h4>
                  <span>01</span>
                </div>
                <p>
                  AI for teaching workflows. Backend tools for class summaries,
                  teaching insights, study plans and AI-assisted note
                  generation.
                </p>
                <div className="project-footer">
                  <span>Python · FastAPI · MongoDB · LLMs</span>
                  <span className="project-type">Prototype</span>
                </div>
                <details className="project-details">
                  <summary>
                    Explore the build <span>+</span>
                  </summary>
                  <p>
                    Built backend routes for content generation, classroom
                    insights and study plans, along with a workflow for
                    generating notes from PDFs.
                  </p>
                  <Image
                    src={`${basePath}/eduaid.png`}
                    alt="Original eduAId instructor interface showing student and class management"
                    width={565}
                    height={328}
                  />
                </details>
              </div>
            </article>
            <article className="project-card">
              <div className="project-visual karma-visual">
                <div className="project-visual-label">
                  FROM QUESTIONS TO CLARITY.
                </div>
                <div className="karma-window">
                  <div className="karma-top">
                    <span className="karma-mark">k.</span>
                    <span>
                      KaRmA <small>AI WORKSPACE</small>
                    </span>
                    <span className="window-dots">•••</span>
                  </div>
                  <div className="chat-bubble">
                    What does the data tell us?<span>↗</span>
                  </div>
                  <div className="answer-block">
                    <span className="answer-spark">✳</span>
                    <div>
                      <strong>Make information useful.</strong>
                      <div className="answer-line" />
                      <div className="answer-line short" />
                      <div className="answer-chart">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                  <div className="karma-bottom">
                    <span>ASK → QUERY → SUMMARIZE</span>
                    <span>↵</span>
                  </div>
                </div>
                <span className="visual-concept">PROJECT CONCEPT</span>
                <div className="karma-ring" aria-hidden="true" />
              </div>
              <div className="project-info">
                <div className="project-title-row">
                  <h4>KaRmA</h4>
                  <span>02</span>
                </div>
                <p>
                  A conversational data exploration prototype connecting
                  natural-language questions to SQL data and generated reports.
                </p>
                <div className="project-footer">
                  <span>Python · FastAPI · LangChain · SQL</span>
                  <span className="project-type">Prototype</span>
                </div>
                <details className="project-details">
                  <summary>
                    Explore the build <span>+</span>
                  </summary>
                  <p>
                    Built a chatbot and report-generation workflow using a
                    LangChain SQL agent, SQL databases and a FastAPI backend.
                    The focus: connecting natural-language interaction to
                    structured business information.
                  </p>
                </details>
              </div>
            </article>
          </div>
          <a
            className="extra-project"
            href={`${github}/PhotoBook-Backend`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="extra-project-icon" aria-hidden="true">
              ▧
            </span>
            <div>
              <h4>Also in the workshop: PhotoBook</h4>
              <p>
                An image-processing API that turns photos into printable PDF
                layouts.
              </p>
            </div>
            <span className="extra-project-link">
              Explore the code <Arrow diagonal />
            </span>
          </a>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="wrap about-grid">
            <div className="about-photo">
              <div className="photo-frame">
                <Image
                  src={`${basePath}/profile-pic.jpeg`}
                  alt="Chethan Reddy outdoors"
                  width={400}
                  height={400}
                />
                <div className="photo-caption">
                  <span>CHETHAN, OFFLINE.</span>
                  <span>INDIA ↗</span>
                </div>
              </div>
              <span className="photo-sticker">
                Always
                <br />
                building.
                <svg viewBox="0 0 30 30" aria-hidden="true">
                  <path d="M5 25 25 5M5 5h20v20" />
                </svg>
              </span>
            </div>
            <div className="about-copy">
              <span className="section-kicker">02 / THE PERSON</span>
              <h2 id="about-title">
                Curiosity is
                <br />
                part of the stack.
              </h2>
              <p className="about-lead">
                I like problems that don’t come with a neat job description.
              </p>
              <p>
                My work sits where customer problems meet product engineering. I
                enjoy figuring out what matters, getting into the technical
                details, and turning both into something people can use.
              </p>
              <p>
                Outside the build loop, you’ll find me swimming, flying drones,
                or following the next idea I can’t leave alone.
              </p>
              <div className="about-links">
                <a
                  className="text-link"
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More about me <Arrow diagonal />
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
            <span className="section-kicker">03 / THE PATH SO FAR</span>
            <span className="small-note">
              Different contexts. The same builder’s instinct.
            </span>
          </div>
          <div className="experience-grid">
            <div>
              <h2 id="experience-title">
                A little context.
                <br />
                <span className="muted-text">A lot of building.</span>
              </h2>
              <p className="experience-intro">
                From data science to AI applications to enterprise delivery.
                Each role brought me closer to the whole problem.
              </p>
              <div className="stack-block">
                <span className="section-kicker">TOOLS I REACH FOR</span>
                <div className="stack-tags">
                  {[
                    "Python",
                    "FastAPI",
                    "LangChain",
                    "SQL",
                    "LLMs & RAG",
                    "OCR & Computer vision",
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
              <span className="section-kicker">04 / WHAT’S NEXT?</span>
              <span>GOOD PROBLEMS DESERVE GOOD ENGINEERING.</span>
            </div>
            <div className="contact-main">
              <h2 id="contact-title">
                Have something
                <br />
                <span>worth building?</span>
              </h2>
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
          <span>Made with intent. Built to be useful.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}
