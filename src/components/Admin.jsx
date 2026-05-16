import { useState, useEffect } from "react";
import "./Admin.css";

const API = "https://daffodil-mountain-swirl.ngrok-free.dev/api";

export default function Admin() {
  const [plats, setPlats] = useState([]);
  const [temoignages, setTemoignages] = useState([]);
  const [onglet, setOnglet] = useState("plats");

  const [newPlat, setNewPlat] = useState({ nom: "", description: "", prix: "", categorie: "plats", emoji: "" });
  const [newTem, setNewTem] = useState({ nom: "", qualite: "", texte: "", note: 5 });

  useEffect(() => {
    fetchPlats();
    fetchTemoignages();
  }, []);

  const fetchPlats = () => {
    fetch(`${API}/plats`).then(r => r.json()).then(setPlats);
  };

  const fetchTemoignages = () => {
    fetch(`${API}/temoignages`).then(r => r.json()).then(setTemoignages);
  };

  const ajouterPlat = () => {
    fetch(`${API}/plats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newPlat, prix: parseFloat(newPlat.prix) })
    }).then(() => {
      fetchPlats();
      setNewPlat({ nom: "", description: "", prix: "", categorie: "plats", emoji: "" });
    });
  };

  const supprimerPlat = (id) => {
    fetch(`${API}/plats/${id}`, { method: "DELETE" }).then(fetchPlats);
  };

  const ajouterTem = () => {
    fetch(`${API}/temoignages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newTem, note: parseInt(newTem.note) })
    }).then(() => {
      fetchTemoignages();
      setNewTem({ nom: "", qualite: "", texte: "", note: 5 });
    });
  };

  const supprimerTem = (id) => {
    fetch(`${API}/temoignages/${id}`, { method: "DELETE" }).then(fetchTemoignages);
  };

  return (
    <div className="admin">
      <div className="admin-header">
        <h1>🍽️ Admin <span>Titac</span></h1>
        <a href="/" className="btn-retour">← Retour au site</a>
      </div>

      <div className="admin-tabs">
        <button className={onglet === "plats" ? "active" : ""} onClick={() => setOnglet("plats")}>
          Plats ({plats.length})
        </button>
        <button className={onglet === "temoignages" ? "active" : ""} onClick={() => setOnglet("temoignages")}>
          Témoignages ({temoignages.length})
        </button>
      </div>

      {onglet === "plats" && (
        <div className="admin-section">
          <div className="admin-form">
            <h2>➕ Ajouter un plat</h2>
            <div className="form-grid">
              <input placeholder="Nom du plat" value={newPlat.nom} onChange={e => setNewPlat({...newPlat, nom: e.target.value})} />
              <input placeholder="Description" value={newPlat.description} onChange={e => setNewPlat({...newPlat, description: e.target.value})} />
              <input placeholder="Prix (XAF)" type="number" value={newPlat.prix} onChange={e => setNewPlat({...newPlat, prix: e.target.value})} />
              <input placeholder="Emoji (ex: 🍗)" value={newPlat.emoji} onChange={e => setNewPlat({...newPlat, emoji: e.target.value})} />
              <select value={newPlat.categorie} onChange={e => setNewPlat({...newPlat, categorie: e.target.value})}>
                <option value="entrees">Entrées</option>
                <option value="plats">Plats</option>
                <option value="desserts">Desserts</option>
                <option value="boissons">Boissons</option>
              </select>
              <button className="btn-ajouter" onClick={ajouterPlat}>Ajouter</button>
            </div>
          </div>

          <div className="admin-list">
            <h2>📋 Liste des plats</h2>
            {plats.map(p => (
              <div className="admin-item" key={p.id}>
                <span className="item-emoji">{p.emoji}</span>
                <div className="item-info">
                  <strong>{p.nom}</strong>
                  <small>{p.categorie} — {p.prix} XAF</small>
                </div>
                <button className="btn-supprimer" onClick={() => supprimerPlat(p.id)}>🗑️</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {onglet === "temoignages" && (
        <div className="admin-section">
          <div className="admin-form">
            <h2>➕ Ajouter un témoignage</h2>
            <div className="form-grid">
              <input placeholder="Nom du client" value={newTem.nom} onChange={e => setNewTem({...newTem, nom: e.target.value})} />
              <input placeholder="Qualité (ex: Client fidèle)" value={newTem.qualite} onChange={e => setNewTem({...newTem, qualite: e.target.value})} />
              <input placeholder="Témoignage" value={newTem.texte} onChange={e => setNewTem({...newTem, texte: e.target.value})} />
              <select value={newTem.note} onChange={e => setNewTem({...newTem, note: e.target.value})}>
                <option value={5}>★★★★★ (5)</option>
                <option value={4}>★★★★☆ (4)</option>
                <option value={3}>★★★☆☆ (3)</option>
                <option value={2}>★★☆☆☆ (2)</option>
                <option value={1}>★☆☆☆☆ (1)</option>
              </select>
              <button className="btn-ajouter" onClick={ajouterTem}>Ajouter</button>
            </div>
          </div>

          <div className="admin-list">
            <h2>📋 Liste des témoignages</h2>
            {temoignages.map(t => (
              <div className="admin-item" key={t.id}>
                <div className="item-info">
                  <strong>{t.nom}</strong>
                  <small>{"★".repeat(t.note)} — {t.qualite}</small>
                </div>
                <button className="btn-supprimer" onClick={() => supprimerTem(t.id)}>🗑️</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
