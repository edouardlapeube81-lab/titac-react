import "./Apropos.css";

export default function Apropos() {
  return (
    <section id="apropos">
      <div className="apropos-grid">
        <div className="apropos-img">🍽️</div>
        <div className="apropos-text">
          <h2>À propos de <span>Titac</span></h2>
          <p>Depuis plus de 12 ans, le restaurant Titac est un lieu de rencontre et de partage à Yaoundé. Nous proposons une cuisine africaine authentique, préparée avec des produits locaux frais.</p>
          <p>Notre mission : offrir une expérience culinaire inoubliable dans un cadre chaleureux et accueillant.</p>
          <ul className="features">
            <li>✅ Ingrédients 100% locaux et frais</li>
            <li>✅ Ouvert 7j/7 de 7h à 23h</li>
            <li>✅ Réservation pour groupes disponible</li>
            <li>✅ Yaoundé, Cameroun</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
