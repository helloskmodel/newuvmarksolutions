import React from "react";
import "../styles/Products.css";

const applications = [
  "Tubes & Vials",
  "Microscope Slides",
  "Cryoboxes",
  "Bottles",
  "Metal Racks",
  "PCR Tubes & Strips",
  "Microplates",
  "Blood Bags",
  "IVF Straws",
];

const resistance = [
  "Cryogenic (-196°C)",
  "Deep-Freeze (-80°C)",
  "High Heat Labels",
  "Chemical Resistant Labels",
  "Hazard Communication Labels",
  "Tamper Evident Labels",
  "Abrasion Resistant Labels",
  "Sterilization Labels",
  "Moisture Resistant Labels",
];

const features = [
  "Removable",
  "Self-Laminating",
  "Automation",
  "RFID",
];

const services = [
  {
    title: "Label Design",
    text: "Custom label layout, barcode structure, color coding, and application-focused design support.",
  },
  {
    title: "Pre-Printed Labels",
    text: "Pre-printed labels with barcodes, serialization, variable data, and workflow-specific information.",
  },
  {
    title: "Pre-Labeled Labware",
    text: "Pre-applied labels for tubes, vials, plates, bottles, and laboratory consumables.",
  },
];

function Pill({ children }) {
  return (
    <a href="#" className="product-pill">
      {children}
    </a>
  );
}

function CategoryBlock({ title, items }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>

      <div className="pill-group">
        {items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <main className="products-page">
      <section className="products-hero">
        

        <h1>Durable Labels. Reliable Performance.</h1>

        <p className="products-intro">
          Durable labeling products and workflow support services for
          laboratories, clinical trials, and critical identification applications.
        </p>
      </section>

      <section className="products-section white-section">
        <div className="products-container">
          <div className="section-title">
            <h2>Comprehensive Label Portfolio</h2>
          </div>

          <div className="label-grid">
            <CategoryBlock title="By Application" items={applications} />
            <CategoryBlock title="By Resistance" items={resistance} />
            <CategoryBlock title="By Feature" items={features} />
          </div>
        </div>
      </section>

      <section className="products-section gradient-section">
        <div className="products-container hardware-grid">
          <div className="product-card">
            <h2>Printers / Scanners</h2>

            <p>
              Healthcare-grade printers, barcode scanners, scan & print devices,
              ribbons, and accessories supported with installation,
              configuration, and workflow support services.
            </p>

            <div className="pill-group">
              <Pill>Zebra Healthcare Series</Pill>
              <Pill>TSC Healthcare & Industrial Series</Pill>
              <Pill>Honeywell Barcode Scanners</Pill>
              <Pill>Scan & Print Devices</Pill>
            </div>
          </div>

          <div className="product-card">
            <h2>Software</h2>

            <p>
              BarTender is powerful label design software for creating,
              printing, and automating barcodes, labels, and RFID tags.
              Supported with installation, configuration, and workflow setup
              services for laboratory and clinical labeling applications.
            </p>

            <div className="pill-group">
              <Pill>BarTender Label Design</Pill>
              <Pill>Barcode Automation</Pill>
              <Pill>RFID Support</Pill>
              <Pill>Installation & Configuration</Pill>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section white-section">
        <div className="products-container">
          <div className="section-title">
            <h2>Workflow Support Services</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div className="product-card service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <a
                  href="mailto:support@uvmarksolution.com"
                  className="learn-more"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-cta">
        <h2>Need Help? Contact Our Labeling Specialists.</h2>

        <a href="/contact" className="cta-button">
          Contact Us
        </a>
      </section>
    </main>
  );
}
