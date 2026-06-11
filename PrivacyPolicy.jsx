import React from "react";
import { useState } from "react";
import "../styles/CaseStudies.css";

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(null);

  const caseStudy = {
    category: "IVD Automation Workflow",
    title: "Reliable Slide Identification for Automated IVD Workflows",
    summary:
      "Supporting an IVD diagnostic company with reliable slide identification during the transition from manual testing to automated laboratory workflows.",
  };

  return (
    <main className="case-page">
      <section className="case-hero">
        

        <h1>Turning Workflow Challenges Into Reliable Solutions</h1>

        <p className="case-intro">
          Working closely with customers to develop practical identification
          solutions for demanding laboratory workflows.
        </p>
      </section>

      {!activeCase ? (
        <section className="case-list">
          <div className="case-grid">
            <button
              className="case-card"
              onClick={() => setActiveCase(caseStudy)}
            >
              <span>{caseStudy.category}</span>
              <h2>{caseStudy.title}</h2>
              <p>{caseStudy.summary}</p>
              <strong>Read the story →</strong>
            </button>
          </div>
        </section>
      ) : (
        <section className="case-detail">
          <button className="case-back" onClick={() => setActiveCase(null)}>
            ← Back to best practices
          </button>

          <div className="case-detail-head">
            <span>{activeCase.category}</span>
            <h2>{activeCase.title}</h2>
            <p>{activeCase.summary}</p>
          </div>

          <div className="case-detail-grid">
            <div className="case-detail-card">
              <h3>Background</h3>
              <p>
                An IVD diagnostic company was upgrading from traditional manual
                slide testing to automated processing systems for high-throughput
                hospital laboratory workflows.
              </p>
              <p>
                During staining and automated handling, conventional labels often
                detached or became unreadable after exposure to chemicals and
                intensive processing procedures.
              </p>
            </div>

            <div className="case-detail-card blue">
              <h3>Solution</h3>
              <p>
                UVMARK worked closely with the customer through multiple rounds
                of workflow testing and application evaluation.
              </p>
              <p>
                Together, we optimized adhesive systems, chemical-resistant
                materials, print durability, and developed a specialized
                self-laminating flap-label structure for automated workflows.
              </p>
            </div>

            <div className="case-detail-card">
              <h3>Product</h3>
              <h4>Self-Laminating Labels for Microscope Slides</h4>
              <ul>
                <li>Resistant to xylene and laboratory reagents</li>
                <li>Durable 1D / 2D barcode readability</li>
                <li>Protective self-laminating flap structure</li>
                <li>Stable adhesion during automated processing</li>
                <li>Compatible with LIS, LIMS, and printing systems</li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
