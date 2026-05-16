import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["accueil", "menu", "apropos", "expert", "temoignage"];

export default function Navbar() {
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      links.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) setActive(id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">TITAC</div>
      <ul className="nav-links">
        {links.map(id => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? "active" : ""}>
              {id === "apropos" ? "À propos" : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
