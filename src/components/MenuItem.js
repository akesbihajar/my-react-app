// Importation de React
import React from "react";

// Composant MenuItem reçoit les props : image, name et price
function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      {/* Affichage de l'image de fond à partir de l'URL passée */}
      <div style={{ backgroundImage: `url(${image})` }}></div>

      {/* Affichage du nom du plat */}
      <h1>{name}</h1>

      {/* Affichage du prix */}
      <p>${price}</p>
    </div>
  );
}

export default MenuItem;
