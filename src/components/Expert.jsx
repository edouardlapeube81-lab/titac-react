import "./Expert.css";

const experts = [
  { initiales: "JM", nom: "Jean-Marc Mballa", role: "Chef cuisinier principal", desc: "15 ans d'expérience dans la cuisine africaine et internationale." },
  { initiales: "AF", nom: "Amélie Fotso",     role: "Cheffe pâtissière",        desc: "Spécialiste des desserts fusion afro-européens." },
  { initiales: "PK", nom: "Paul Kana",        role: "Sommelier & Barman",       desc: "Expert en boissons locales et cocktails créatifs." },
  { initiales: "SC", nom: "Sophie Choupo",    role: "Responsable service",      desc: "Garantit une expérience client irréprochable." },
];

export default function Expert() {
  return (
    <section id="expert">
      <div className="section-title">
        <h2>Nos <span>Experts</span></h2>
        <p>Une équipe passionnée à votre service</p>
      </div>
      <div className="experts-grid">
        {experts.map(e => (
          <div className="expert-card" key={e.initiales}>
            <div className="avatar">{e.initiales}</div>
            <h3>{e.nom}</h3>
            <div className="role">{e.role}</div>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
