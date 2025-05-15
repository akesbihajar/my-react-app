
import { rooms } from "../helpers/data";
import RoomCard from "../components/RoomCard";
import "../Styles/Rooms.css";

export default function Rooms() {
  return (
    <div className="rooms-container">
    <h1 className="roomTitle">Our rooms</h1>
    <div className="rooms-grid">
      {rooms.map(room => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  </div>
  );
}
