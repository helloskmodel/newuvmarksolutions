import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <h1>
          Flexible Labeling Solutions
          <br />
          for Fast-Moving Laboratories
        </h1>

        <p className="hero-subtitle">
          Supporting biopharmaceutical research, clinical diagnostics, and
          transfusion workflows.
        </p>
<a
  className="cta-button"
  href="/contact"
>
  Contact Us
</a>
       
      </section>

      <section className="why-section">
        <h2>Why UVMARK?</h2>

        <div className="why-grid">
          <div className="why-card">
            <div className="icon">◻</div>
            <h3>Agile Small-Batch Support</h3>
            <p>
              Supporting evolving laboratory operations, pilot projects, and
              specialized workflow requirements.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">◷</div>
            <h3>7×24 Responsive Collaboration</h3>
            <p>
              Fast-response communication across technical, operational, and
              regional teams.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">⌘</div>
            <h3>Digital Workflow Visibility</h3>
            <p>
              Supporting clearer identification, workflow coordination, and
              traceability from request to delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <h2>What We Focus?</h2>

        <div className="focus-grid">
  <div className="focus-item">
    <span className="focus-icon labels-icon"></span>
    <span>Labels</span>
  </div>

  <div className="focus-item">
    <span className="focus-icon printer-icon"></span>
    <span>Printers & Scanners</span>
  </div>

  <div className="focus-item">
    <span className="focus-icon software-icon"></span>
    <span>Software</span>
  </div>

  <div className="focus-item">
    <span className="focus-icon design-icon"></span>
    <span>Label Design</span>
  </div>

  <div className="focus-item">
    <span className="focus-icon preprint-icon"></span>
    <span>Pre-Printed Labels</span>
  </div>

  <div className="focus-item">
    <span className="focus-icon labware-icon"></span>
    <span>Pre-Labelling Labware</span>
  </div>
          </div>
      </section>

      <section className="cta-section" id="contact">
        <h2>Let’s Get Labelling.</h2>

        <p>
          Contact our team to discuss laboratory identification, workflow
          coordination, and application-focused solutions for biopharmaceutical
          and clinical environments.
        </p>
<a
  className="cta-button"
  href="/contact"
>
  Contact Us
</a>
        
      </section>
    </main>
  );
}
