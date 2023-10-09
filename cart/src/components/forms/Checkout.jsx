import React from "react";
import "./Checkout.css";
import { useDispatch } from "react-redux";
import { checkouting } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkoutHandler = (event) => {
    event.preventDefault();
    dispatch(checkouting());
    navigate("/products");
    alert("Order Successful")
  };
  return (
    <div className="main">
      <form onSubmit={checkoutHandler}>
        <h2>Checkout Here</h2>
        <div className="horizontal-inputs">
          <input
            type="text"
            placeholder="First Name"
            required
            name="first-name"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            name="last-name"
          />
        </div>
        <div className="horizontal-inputs">
          <input type="text" placeholder="Address" required name="address" />
          <input type="text" placeholder="City" required name="city" />
        </div>
        <div className="horizontal-inputs">
          <input type="number" placeholder="Zip Code" required name="zip" />
          <input type="tel" placeholder="Phone" required name="phone" />
        </div>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
