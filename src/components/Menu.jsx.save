import { useState, useEffect } from "react";
import "./Menu.css";

const categories = ["tous", "entrees", "plats", "desserts", "boissons"];

export default function Menu() {
  const [active, setActive] = useState("tous");
  const [plats, setPlats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/plats")
      .then(res => res.json())
      .then(data => {
        setPlats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur:", err);
        setLoading(false);
      });
  }, []);

  const filtered = active === "tous" ? plats : plats.filter(p => p.categorie === active);

  return (
    <section id="menu">
      <div className="section-title">
        <h2>Notre <span>Menu</span></h2>
        <p>Des plats soigneusement préparés pour ravir vos papilles</p>
      </div>
      <div className="menu-tabs">
        {categories.map(cat => (
          <button key={cat} className={`tab ${active === cat ? "active" : ""}`} onClick={() => setActive(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      {loading ? (
        <p style={{textAlign:"center", color:"#aaa"}}>Chargement...</p>
      ) : plats.length === 0 ? (
        <p style={{textAlign:"center", color:"#aaa"}}>Aucun plat disponible.</p>
      ) : (
        <div className="menu-grid">
          {filtered.map(plat => (
            <div className="menu-card" key={plat.id}>
              <div className="emoji">{plat.emoji}</div>
              <h3>{plat.nom}</h3>
              <p>{plat.description}</p>
              <div className="price">{plat.prix} XAF</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
