"use client";

import { useId, useState } from "react";
import styles from "./workflow-canvas.module.css";

const stages = [
  {
    label: "Understand",
    title: "Start with the real problem.",
    description:
      "Turn customer conversations and complex requirements into a clear path forward.",
  },
  {
    label: "Build",
    title: "Make the solution work.",
    description:
      "Connect AI, product engineering and the details of an enterprise workflow.",
  },
  {
    label: "Validate",
    title: "Build confidence into every release.",
    description:
      "Use QA automation and practical checks to test the workflow end to end.",
  },
  {
    label: "Deliver",
    title: "Stay close to the customer.",
    description:
      "Carry the work through delivery, customer feedback and the next improvement.",
  },
] as const;

export default function WorkflowCanvas() {
  const [activeStage, setActiveStage] = useState(0);
  const instanceId = useId();
  const descriptionId = `${instanceId}-description`;
  const patternId = `${instanceId}-grid`;
  const stage = stages[activeStage];

  return (
    <section
      className={styles.canvas}
      aria-label="How I approach enterprise AI delivery"
    >
      <div className={styles.header}>
        <span className={styles.headerLabel}>
          <span className={styles.crosshair} aria-hidden="true" />
          FROM REQUIREMENT TO REALITY
        </span>
        <span className={styles.edition}>01 / FIELD NOTES</span>
      </div>

      <div className={styles.illustration}>
        <svg
          className={styles.diagram}
          viewBox="0 0 560 340"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <pattern
              id={patternId}
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.8" fill="#d4d5cd" />
            </pattern>
          </defs>
          <rect
            x="20"
            y="12"
            width="520"
            height="306"
            fill={`url(#${patternId})`}
          />

          <path
            d="M32 31V23H40M520 23H528V31M32 299V307H40M520 307H528V299"
            stroke="#c4c6bd"
          />
          <text className={styles.smallLabel} x="53" y="53">
            THE INPUT
          </text>
          <text className={styles.smallLabel} x="407" y="53">
            THE IMPACT
          </text>

          <g className={styles.connections}>
            <path d="M174 155H223" />
            <path d="M356 155H407" />
            <path d="M292 222V256" />
            <path d="M318 282H423Q463 282 463 241V215" />
            <path d="M220 156L214 152M220 156L214 160M403 156L397 152M403 156L397 160" />
          </g>
          <path
            className={`${styles.flow} ${activeStage < 2 ? styles.flowActive : ""}`}
            d="M174 155H223"
          />
          <path
            className={`${styles.flow} ${activeStage === 3 ? styles.flowActive : ""}`}
            d="M356 155H407"
          />
          <path
            className={`${styles.flow} ${activeStage === 2 ? styles.flowActive : ""}`}
            d="M292 222V256"
          />

          <g
            className={`${styles.documentNode} ${activeStage === 0 ? styles.activeDocument : ""}`}
          >
            <rect
              x="53"
              y="100"
              width="106"
              height="134"
              rx="8"
              fill="#e6e6dd"
              stroke="#cacdc2"
              transform="rotate(-8 53 100)"
            />
            <path
              className={styles.documentFace}
              d="M74 82H143L174 113V218Q174 226 166 226H74Q66 226 66 218V90Q66 82 74 82Z"
            />
            <path
              d="M143 82V105Q143 113 151 113H174"
              stroke="currentColor"
              strokeOpacity=".5"
            />
            <rect
              x="82"
              y="106"
              width="24"
              height="5"
              rx="2.5"
              fill="currentColor"
            />
            <path
              d="M82 130H131M82 141H154M82 152H145"
              stroke="#b8beb3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <rect x="82" y="171" width="76" height="35" rx="4" fill="#edf0e6" />
            <path
              d="M90 189L96 195L108 182"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M117 185H149M117 194H141"
              stroke="#abb4a2"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="67" cy="82" r="11" fill="#2555ee" />
            <text x="67" y="86" className={styles.nodeNumber}>
              01
            </text>
          </g>
          <text
            className={styles.nodeLabel}
            x="117"
            y="258"
            textAnchor="middle"
          >
            Real requirements
          </text>

          <g
            className={`${styles.coreNode} ${activeStage === 1 ? styles.activeCore : ""}`}
          >
            <circle
              className={styles.orbit}
              cx="292"
              cy="155"
              r="80"
              stroke="#bfcaf0"
              strokeDasharray="3 7"
            />
            <circle
              className={styles.halo}
              cx="292"
              cy="155"
              r="70"
              fill="#2555ee"
              fillOpacity=".07"
            />
            <circle cx="292" cy="155" r="61" fill="#2555ee" />
            <circle
              cx="292"
              cy="155"
              r="53"
              stroke="white"
              strokeOpacity=".18"
            />
            <path
              d="M292 116V148M276 132H308M281 121L303 143M303 121L281 143"
              stroke="#fff"
              strokeWidth="2.7"
              strokeLinecap="round"
            />
            <text
              x="292"
              y="174"
              textAnchor="middle"
              className={styles.coreTitle}
            >
              AI + PRODUCT
            </text>
            <text
              x="292"
              y="190"
              textAnchor="middle"
              className={styles.coreSubtitle}
            >
              ENGINEERING
            </text>
            <circle cx="343" cy="114" r="11" fill="#f6f5ef" stroke="#2555ee" />
            <text
              x="343"
              y="118"
              className={`${styles.nodeNumber} ${styles.blueNumber}`}
            >
              02
            </text>
          </g>

          <g
            className={`${styles.outputNode} ${activeStage === 3 ? styles.activeOutput : ""}`}
          >
            <rect
              className={styles.outputFace}
              x="408"
              y="108"
              width="114"
              height="108"
              rx="11"
            />
            <path d="M408 135H522" stroke="#d9ddd2" />
            <circle cx="421" cy="122" r="2" fill="#a7ae9f" />
            <circle cx="429" cy="122" r="2" fill="#c6cbbc" />
            <circle cx="437" cy="122" r="2" fill="#d8dccf" />
            <rect
              x="420"
              y="148"
              width="31"
              height="31"
              rx="7"
              fill="#e6edda"
            />
            <path
              d="M429 163L434 168L444 157"
              stroke="#597342"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M461 154H509M461 164H495"
              stroke="#a4af98"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M420 194H467"
              stroke="#c9cfc2"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M503 189L508 194L503 199M498 194H508"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="522"
              cy="108"
              r="11"
              fill="#f6f5ef"
              stroke="currentColor"
            />
            <text
              x="522"
              y="112"
              className={`${styles.nodeNumber} ${styles.inkNumber}`}
            >
              04
            </text>
          </g>
          <text
            className={styles.nodeLabel}
            x="465"
            y="244"
            textAnchor="middle"
          >
            Useful outcomes
          </text>

          <g
            className={`${styles.validationNode} ${activeStage === 2 ? styles.activeValidation : ""}`}
          >
            <rect
              className={styles.validationFace}
              x="266"
              y="256"
              width="52"
              height="52"
              rx="14"
            />
            <path
              d="M292 267L303 272V281C303 288 298 293 292 296C286 293 281 288 281 281V272L292 267Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M287 281L291 285L298 277"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="268"
              cy="257"
              r="9"
              fill="#f6f5ef"
              stroke="currentColor"
            />
            <text
              x="268"
              y="260.5"
              className={`${styles.nodeNumber} ${styles.inkNumber}`}
            >
              03
            </text>
          </g>
          <text className={styles.qaLabel} x="254" y="285" textAnchor="end">
            QA + VALIDATION
          </text>
        </svg>
      </div>

      <div
        className={styles.controls}
        role="group"
        aria-label="Explore my delivery approach"
      >
        {stages.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={`${styles.stageButton} ${activeStage === index ? styles.selected : ""}`}
            aria-pressed={activeStage === index}
            aria-controls={descriptionId}
            onClick={() => setActiveStage(index)}
          >
            <span className={styles.stageNumber} aria-hidden="true">
              0{index + 1}
            </span>
            {item.label}
          </button>
        ))}
      </div>

      <div
        id={descriptionId}
        className={styles.description}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className={styles.descriptionMark} aria-hidden="true">
          ↳
        </span>
        <p>
          <strong>{stage.title}</strong> {stage.description}
        </p>
      </div>
    </section>
  );
}
