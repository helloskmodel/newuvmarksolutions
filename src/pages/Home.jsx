import "../styles/Home.css";

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const company = form.get("company");
    const email = form.get("email");
    const need = form.get("need");

    const subject = encodeURIComponent("UVMARK Website Enquiry");
    const body = encodeURIComponent(
      `Company Name: ${company}\nEmail Address: ${email}\n\nWhat do you need?\n${need}`
    );

    window.location.href = `mailto:support@uvmarksolutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>
            Flexible Labeling Solutions
            <br />
            for Fast-Moving Laboratories
          </h1>
          <p>
            Supporting biopharmaceutical research, clinical diagnostics, and
            transfusion workflows.
          </p>
          <a href="#contact-form" className="home-button">Contact Us</a>
        </div>

        <div className="home-hero-visual">
          <img src="/home-hero-lab.png" alt="Future laboratory workflow" />
        </div>
      </section>

      <section className="home-section why-section">
        <h2>Why UVMARK?</h2>
        <div className="why-grid">
          <article className="why-card">
            <div className="why-icon agile-icon" />
            <h3>Agile Small-Batch Flexibility</h3>
            <p>Flexible coordination for rapidly evolving laboratory operations.</p>
          </article>

          <article className="why-card">
            <div className="why-icon response-icon" />
            <h3>7×24 Responsive Collaboration</h3>
            <p>Fast-response communication across technical and operational teams.</p>
          </article>

          <article className="why-card">
            <div className="why-icon digital-icon" />
            <h3>Digital Workflow Visibility</h3>
            <p>Shared workflow communication from request to delivery.</p>
          </article>
        </div>
      </section>

      <section className="home-section focus-section">
        <h2>What We Focus?</h2>
        <div className="ps-grid">
          <div className="ps-panel">
            <div className="ps-title">Products</div>
            <div className="ps-items">
              <div className="ps-item">
                <div className="ps-icon labels-icon" />
                <span>Labels</span>
              </div>
              <div className="ps-item">
                <div className="ps-icon printer-icon" />
                <span>Printers &amp; Scanners</span>
              </div>
              <div className="ps-item">
                <div className="ps-icon software-icon" />
                <span>Software</span>
              </div>
            </div>
          </div>

          <div className="ps-panel">
            <div className="ps-title">Services</div>
            <div className="ps-items">
              <div className="ps-item">
                <div className="ps-icon design-icon" />
                <span>Label Design</span>
              </div>
              <div className="ps-item">
                <div className="ps-icon preprint-icon" />
                <span>Pre-Printed Labels</span>
              </div>
              <div className="ps-item">
                <div className="ps-icon labware-icon" />
                <span>Pre-Labelling Labware</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact" id="contact-form">
        <div className="contact-copy">
          <h2>Let’s Get Labelling.</h2>
          <p>
            Contact our team to discuss laboratory identification, workflow
            coordination, and application-focused solutions for biopharmaceutical
            and clinical environments.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="company">Company Name</label>
          <input id="company" name="company" required placeholder="Your company" />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required placeholder="name@company.com" />

          <label htmlFor="need">What do you need?</label>
          <textarea
            id="need"
            name="need"
            required
            placeholder="Tell us about your application, workflow, or identification need."
          />

          <button type="submit">Contact Us</button>
        </form>
      </section>
    </main>
  );
}
