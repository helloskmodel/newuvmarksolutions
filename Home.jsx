import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <main>
        <section className="about-hero">
          <h1>About UVMARK</h1>

          <p className="about-intro">
            UVMARK provides durable labels and integrated identification
            solutions designed for biopharmaceutical research, clinical
            diagnostics, and demanding laboratory workflows.
          </p>
        </section>

        <section className="about-support">
          <h2>How We Support Our Customers?</h2>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">◌</div>

              <h3>Close Workflow Collaboration</h3>

              <p>
                We work closely with laboratory and operational teams to
                understand evolving workflow requirements and application
                environments.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">▣</div>

              <h3>Advanced Identification Solutions</h3>

              <p>
                Durable labeling materials, printers, scanners, software, and
                automation-ready solutions designed for demanding laboratory
                workflows.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">⌁</div>

              <h3>Responsive Operational Support</h3>

              <p>
                Cross-functional coordination across technical support,
                production, logistics, and customer service helps maintain
                responsive project execution.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
