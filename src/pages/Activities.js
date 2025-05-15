import { useState } from "react";
import { activitiesData } from "../helpers/activitiesData";
import Modal from "../pages/Modal";
import Cart from "../pages/Cart";
import "../Styles/Activities.css";

function ActivityCard({ activity, addToCart, removeFromCart, isInCart }) {
  const [quantities, setQuantities] = useState(
    activity.prices.reduce((acc, price) => {
      acc[price.type] = 0;
      return acc;
    }, {})
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuantityChange = (type, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] + delta, 0),
    }));
  };

  const isAddDisabled = Object.values(quantities).every((qty) => qty === 0);

  return (
    <>
      <div className="activity-card">
        <img src={activity.image} alt={activity.title} />
        <div className="details">
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>

          <button className="read-more" onClick={() => setIsModalOpen(true)}>
            Read more
          </button>

          {activity.prices.map((price) => (
            <div key={price.type} className="price-row">
              <span>
                {price.type} — {price.price}€
              </span>
              <div className="quantity">
                <button onClick={() => handleQuantityChange(price.type, -1)}>
                  -
                </button>
                <span>{quantities[price.type]}</span>
                <button onClick={() => handleQuantityChange(price.type, 1)}>
                  +
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => addToCart(activity, quantities)}
            disabled={isAddDisabled}
          >
            ADD TO CART
          </button>

          {isInCart && (
            <button
              onClick={() => removeFromCart(activity.id)}
              className="remove-button"
            >
              X
            </button>
          )}
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div
            className="modal-text"
            dangerouslySetInnerHTML={{ __html: activity.details }}
          />
        </Modal>
      </div>
    </>
  );
}

function Activities() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (activity, quantities) => {
    const nonZeroQuantities = Object.values(quantities).some((qty) => qty > 0);
    if (!nonZeroQuantities) return;

    setCartItems((prev) => [
      ...prev,
      { activity, quantities, id: activity.id },
    ]);
  };

  const removeFromCart = (activityId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== activityId));
  };

  const isInCart = (activityId) => {
    return cartItems.some((item) => item.id === activityId);
  };

  return (
    <>
      <h1 className="activities-title">Choose Your Experience</h1>
      <div className="activities-layout">
        <div className="activities-container">
          {activitiesData.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart(activity.id)}
            />
          ))}
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </>
  );
}

export default Activities;