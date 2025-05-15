import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, removeFromCart }) {
  const [reservationDate, setReservationDate] = useState("");
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((total, item) => {
    const itemTotal = item.activity.prices.reduce((sum, price) => {
      const qty = item.quantities[price.type] || 0;
      return sum + qty * price.price;
    }, 0);
    return total + itemTotal;
  }, 0);

  const total = subtotal;

  const handleCheckout = () => {
    if (reservationDate === "") {
      alert("Please select a reservation date.");
      return;
    }

    navigate("/checkoutact", { state: { cartItems, reservationDate } });
  };

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>No products added to the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="cart-item-header">
                <strong>{item.activity.title}</strong>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>X</button>
              </div>
              <ul>
                {Object.entries(item.quantities).map(([type, qty]) =>
                  qty > 0 ? (
                    <li key={type}>
                      {type}: {qty} × {
                        item.activity.prices.find(p => p.type === type).price
                      }€
                    </li>
                  ) : null
                )}
              </ul>
            </li>
          ))}
        </ul>
      )}

      <label>Reservation date:</label>
      <input
        type="date"
        value={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
      />

      <div className="totals">
        <p>Subtotal: {subtotal.toFixed(2)}€</p>
        <p>Total: {total.toFixed(2)}€</p>
      </div>

      <button
        disabled={cartItems.length === 0}
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
