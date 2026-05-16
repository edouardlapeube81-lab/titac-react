import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Menu from "./components/Menu";
import Apropos from "./components/Apropos";
import Expert from "./components/Expert";
import Temoignage from "./components/Temoignage";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import "./App.css";

function App() {
  const isAdmin = window.location.pathname === "/admin";

  if (isAdmin) {
    return <Admin />;
  }

  return (
    <div className="app">
      <Navbar />
      <Accueil />
      <Menu />
      <Apropos />
      <Expert />
      <Temoignage />
      <Footer />
    </div>
  );
}

export default App;
