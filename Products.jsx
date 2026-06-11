import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <h2>Let's Get Labelling.</h2>

      <p>
        Contact our team to discuss laboratory identification,
        workflow coordination, and application-focused solutions.
      </p>

      <div className="locations">
        Houston · New York · Vancouver
      </div>

      <form
        className="contact-form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="b27659f3-f2a3-4011-b1bb-82f847da76da"
        />

        <input
          type="hidden"
          name="subject"
          value="New inquiry from UVMARK website"
        />

        <input
          type="text"
          name="company"
          placeholder="Your company"
        />

        <input
          type="email"
          name="email"
          placeholder="name@company.com"
          required
        />

        <textarea
          name="message"
          placeholder="Tell us about your application, workflow, or identification requirements."
          required
        ></textarea>

        <button type="submit">
          Contact Us
        </button>
      </form>
    </section>
  );
}
