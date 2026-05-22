import "../styles/Footer.css";

function FacebookIcon() {
  return <span className="social-letter">f</span>;
}

function LinkedinIcon() {
  return <span className="social-letter in">in</span>;
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.6 8.2v7.6L16 12 9.6 8.2Z" fill="currentColor" />
      <path d="M21 7.5c-.2-1.2-1-2-2.2-2.2C17.1 5 12 5 12 5s-5.1 0-6.8.3C4 5.5 3.2 6.3 3 7.5 2.7 9.1 2.7 12 2.7 12s0 2.9.3 4.5c.2 1.2 1 2 2.2 2.2 1.7.3 6.8.3 6.8.3s5.1 0 6.8-.3c1.2-.2 2-1 2.2-2.2.3-1.6.3-4.5.3-4.5s0-2.9-.3-4.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <img src="/uvmark-logo.png" alt="UVMARK" className="footer-logo" />
      <div className="social-links" aria-label="Social links">
        <a href="#" aria-label="Facebook"><FacebookIcon /></a>
        <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
        <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
      </div>
    </footer>
  );
}
