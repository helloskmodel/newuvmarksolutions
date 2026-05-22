import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ProductsServices from "./pages/ProductsServices.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Contact from "./pages/Contact.jsx";

const pages = {
  home: Home,
  about: About,
  products: ProductsServices,
  cases: CaseStudies,
  contact: Contact,
};

function getPageFromHash() {
  const page = window.location.hash.replace("#", "") || "home";
  return pages[page] ? page : "home";
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash);
  const PageComponent = pages[page];

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="site-shell">
      <Header activePage={page} />
      <PageComponent />
      <Footer />
    </div>
  );
}
