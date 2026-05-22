import "./styles/global.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div className="site-shell">
      <Header activePage="home" />
      <Home />
    </div>
  );
}
