// Importation des dépendances nécessaires
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../Styles/Footer.css"; // Importation du style CSS

// Composant Footer
function Footer() {
  return (
    <div className="footer">
      {/* Section pour les icônes de réseaux sociaux */}
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>

      {/* Texte de pied de page avec copyright */}
      <p>&copy; 2025 zaharariad.com</p>
    </div>
  );
}

export default Footer;