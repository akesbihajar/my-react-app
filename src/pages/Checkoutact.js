import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styles/Checkoutact.css";

export default function Checkoutact() {
  const location = useLocation();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [reservationDate, setReservationDate] = useState("");
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    paymentMethod: "credit_card", 
  });

  useEffect(() => {
    if (location.state && location.state.cartItems && location.state.reservationDate) {
      setCartItems(location.state.cartItems);
      setReservationDate(location.state.reservationDate);
    } else {
      navigate("/activities");
    }
  }, [location, navigate]);

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    if (!userInfo.fullName || !userInfo.email || !userInfo.phone) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    alert("Réservation confirmée !");
    navigate("/");
  };

  const total = cartItems.reduce((acc, item) => {
    const activityTotal = Object.entries(item.quantities).reduce(
      (sum, [type, qty]) => {
        const price = item.activity.prices.find(p => p.type === type)?.price || 0;
        return sum + price * qty;
      },
      0
    );
    return acc + activityTotal;
  }, 0);

  return (
    <div className="checkout-page" style={{ padding: "2rem" }}>
      <h1 className="text-2xl font-bold mb-4">Finalizing the reservation</h1>

      <div className="user-info-form">
        <h2 className="text-xl font-semibold mb-2"> Personnel Informations </h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={userInfo.fullName}
          onChange={handleInputChange}
          className="block w-full border p-2 mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
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

        <h3 className="mt-4 font-semibold">Payment method</h3>
        <select
          name="paymentMethod"
          value={userInfo.paymentMethod}
          onChange={handleInputChange}
          className="block w-full border p-2 mb-4"
        >
          <option value="credit_card">Credit card</option>
          <option value="paypal">PayPal</option>
          <option value="cash">Payment on site</option>
        </select>
      </div>

      <div className="summary mt-6">
        <h2 className="text-xl font-semibold mb-2">
        Order Summary</h2>
        <p><strong>
        Booking date:</strong> {reservationDate}</p>

        {cartItems.map((item) => (
          <div key={item.id} className="activity-summary mb-2">
            <h3 className="font-bold">{item.activity.title}</h3>
            <ul>
              {Object.entries(item.quantities).map(([type, qty]) =>
                qty > 0 ? (
                  <li key={type}>
                    {type}: {qty} × {item.activity.prices.find(p => p.type === type).price}€ ={" "}
                    {qty * item.activity.prices.find(p => p.type === type).price}€
                  </li>
                ) : null
              )}
            </ul>
          </div>
        ))}

        <p className="text-lg font-bold mt-2">
        Total to pay: {total}€</p>

        <button
          onClick={handleConfirm}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
    
Confirm and pay
        </button>
      </div>
    </div>
  );
}
