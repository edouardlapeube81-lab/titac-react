import "./Accueil.css";

export default function Accueil() {
  return (
    <section id="accueil">
      <div className="hero-content">
        <span className="hero-badge">🍽️ Restaurant Titac — Yaoundé</span>
        <h1>Une cuisine <span>authentique</span><br />et savoureuse</h1>
        <p>Découvrez les saveurs uniques de notre restaurant. Des plats préparés avec passion, des ingrédients frais et un service d'exception.</p>
        <div className="hero-btns">
          <a href="#menu" className="btn-primary">Voir le menu</a>
          <a href="#apropos" className="btn-outline">En savoir plus</a>
        </div>
        <div className="stats">
          <div className="stat"><strong>12+</strong><span>Années d'expérience</span></div>
          <div className="stat"><strong>80+</strong><span>Plats disponibles</span></div>
          <div className="stat"><strong>500+</strong><span>Clients satisfaits</span></div>
        </div>
      </div>
    </section>
  );
}
