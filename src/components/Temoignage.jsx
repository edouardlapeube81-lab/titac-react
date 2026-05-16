import { useState, useEffect } from "react";
import "./Temoignage.css";

export default function Temoignage() {
  const [temoignages, setTemoignages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://daffodil-mountain-swirl.ngrok-free.dev/api/plats")
      .then(res => res.json())
      .then(data => {
        setTemoignages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur:", err);
        setLoading(false);
      });
  }, []);

  const etoiles = (note) => "★".repeat(note) + "☆".repeat(5 - note);

  return (
    <section id="temoignage">
      <div className="section-title">
        <h2>Ce que disent nos <span>clients</span></h2>
        <p>La satisfaction de nos clients est notre plus grande récompense</p>
      </div>
      {loading ? (
        <p style={{textAlign:"center", color:"#aaa"}}>Chargement...</p>
      ) : temoignages.length === 0 ? (
        <p style={{textAlign:"center", color:"#aaa"}}>Aucun témoignage disponible.</p>
      ) : (
        <div className="temoignages-grid">
          {temoignages.map(t => (
            <div className="temoignage-card" key={t.id}>
              <div className="stars">{etoiles(t.note)}</div>
              <p>"{t.texte}"</p>
              <div className="temoignage-author">
                <div className="av">{t.nom.substring(0, 2).toUpperCase()}</div>
                <div><strong>{t.nom}</strong><small>{t.qualite}</small></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
