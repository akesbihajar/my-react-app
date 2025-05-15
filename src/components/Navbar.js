// Importation des dépendances nécessaires
import React, { useState } from "react";
import logo from '../assets/logo.jpg'; // Logo du site
import { Link } from "react-router-dom"; // Liens de navigation
import ReorderIcon from '@mui/icons-material/Reorder'; // Icône de menu mobile
import "../Styles/Navbar.css";

// Composant Navbar
function Navbar() {
  // État pour gérer l'ouverture/fermeture du menu sur mobile
  const [openLinks, setOpenLinks] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
      {/* Partie gauche du menu (logo + liens cachés pour mobile) */}
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={logo} alt="Logo" />
        <div className='hiddenLinks'>
          {/* Liens visibles uniquement en version mobile */}
          <Link to="/">Home</Link>
          <Link to="/menu">Restaurant</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Partie droite avec les liens visibles sur grand écran + bouton menu mobile */}
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Restaurant</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Bouton pour afficher/masquer le menu sur mobile */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
