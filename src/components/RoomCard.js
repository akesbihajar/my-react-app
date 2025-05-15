// Importation du hook useNavigate de react-router-dom pour la redirection
import { useNavigate } from "react-router-dom";

// Composant RoomCard prend une prop "room"
export default function RoomCard({ room }) {
  const navigate = useNavigate(); // Initialisation de la fonction de navigation

  // Fonction déclenchée lors du clic sur "Booking"
  const handleReserve = () => {
    // Redirection vers la page /checkout avec l'objet room passé via l'état
    navigate(`/checkout`, { state: { room } });
  };

  return (
    <div className="room-card">
      {/* Affichage de l'image de la chambre */}
      <img src={room.image} alt={room.name} />

      {/* Affichage du nom de la chambre */}
      <h2>{room.name}</h2>

      {/* Description de la chambre */}
      <p>{room.description}</p>

      {/* Prix affiché en euros par nuit */}
      <p className="room-price">{room.price}€ / nuit</p>

      {/* Bouton pour réserver la chambre */}
      <button className="reserve-button" onClick={handleReserve}>
        Booking
      </button>
    </div>
  );
}
