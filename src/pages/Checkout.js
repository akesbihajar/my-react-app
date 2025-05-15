import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/Checkout.css";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    paymentMethod: "credit_card",
  });

  useEffect(() => {
    if (state && state.room) {
      setRoom(state.room);
    } else {
      navigate("/");
    }
  }, [state, navigate]);

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const calculateNights = () => {
    const inDate = new Date(userInfo.checkInDate);
    const outDate = new Date(userInfo.checkOutDate);
    const diff = outDate - inDate;
    return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0;
  };

  const handleConfirm = () => {
    if (!userInfo.fullName || !userInfo.email || !userInfo.phone || !userInfo.checkInDate || !userInfo.checkOutDate) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Reservation confirmed!");
    navigate("/");
  };

  if (!room) return null;

  const nights = calculateNights();
  const total = nights * room.price;

  return (
    <div className="checkout-room-page p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Booking - {room.name}</h1>

      <img src={room.image} alt={room.name} className="w-full h-56 object-cover rounded mb-4" />
      <p>{room.description}</p>
      <p className="font-semibold text-lg mt-2">Price : {room.price}€ / night</p>

      <div className="form-section mt-6">
        <h2 className="text-xl font-semibold mb-2">Informations du client</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Nom complet"
          value={userInfo.fullName}
          onChange={handleInputChange}
          className="block w-full border p-2 mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleInputChange}
          className="block w-full border p-2 mb-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={userInfo.phone}
          onChange={handleInputChange}
          className="block w-full border p-2 mb-2"
        />

        <h3 className="mt-4 font-semibold">Reservation dates</h3>
        <label className="block mt-2">Arrival date:</label>
        <input
          type="date"
          name="checkInDate"
          value={userInfo.checkInDate}
          onChange={handleInputChange}
          className="block w-full border p-2 mb-2"
        />
        <label>
        Departure date:</label>
        <input
          type="date"
          name="checkOutDate"
          value={userInfo.checkOutDate}
          onChange={handleInputChange}
          className="block w-full border p-2 mb-4"
        />

        <label className="block font-semibold mt-4">
        Payment method:</label>
        <select
          name="paymentMethod"
          value={userInfo.paymentMethod}
          onChange={handleInputChange}
          className="block w-full border p-2 mb-4"
        >
          <option value="credit_card">Credit card</option>
          <option value="paypal">PayPal</option>
          <option value="cash">
          Payment on site</option>
        </select>
      </div>

      {nights > 0 && (
        <div className="summary mt-6">
          <p>
          Number of nights: {nights}</p>
          <p className="font-bold">Total : {total}€</p>
        </div>
      )}

      <button
        onClick={handleConfirm}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        
Confirm reservation
      </button>
    </div>
  );
}
