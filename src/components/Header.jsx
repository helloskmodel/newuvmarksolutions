import "../styles/Header.css";

const navItems = [
  { label: "HOME", target: "home" },
  { label: "ABOUT", target: "about" },
  { label: "PRODUCT AND SERVICE", target: "products" },
  { label: "CASE STUDIES", target: "cases" },
  { label: "CONTACT", target: "contact" },
];

export default function Header({ activePage }) {
  return (
    <header className="site-header">
      <a className="header-logo-link" href="#home" aria-label="UVMARK Home">
        <img src="/uvmark-logo.png" alt="UVMARK" className="header-logo" />
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.target}
            className={activePage === item.target ? "nav-link active" : "nav-link"}
            href={`#${item.target}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
