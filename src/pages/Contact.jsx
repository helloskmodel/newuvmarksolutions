import "../styles/Contact.css";

export default function Contact() {
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
    <main className="page-simple contact-page">
      <section className="page-hero">
        <p className="page-kicker">Contact</p>
        <h1>Let’s Get Labelling.</h1>
        <p>Connect with our team for laboratory identification and workflow support.</p>
      </section>
      <form className="standalone-contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-company">Company Name</label>
        <input id="contact-company" name="company" required placeholder="Your company" />
        <label htmlFor="contact-email">Email Address</label>
        <input id="contact-email" name="email" type="email" required placeholder="name@company.com" />
        <label htmlFor="contact-need">What do you need?</label>
        <textarea id="contact-need" name="need" required placeholder="Tell us about your workflow or application need." />
        <button type="submit">Contact Us</button>
      </form>
    </main>
  );
}
