import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import "./products.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, getCartTotal, increment } from "../features/cartSlice";

const Cart = () => {
  const items = useSelector((e) => {
    return e.storeName;
  });
  const { totalPrice, totalQuantity, cart } = items;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  return (
    <div>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10rem",
        }}
      >
        <div className="cart-left">
          <h2>Cart Items</h2>
          {cart.map((eachItem, index) => (
            <div className="single-item">
              <img src={eachItem.img} alt="Product" />
              <div className="item-details">
                <h3>{eachItem.title}</h3>
                <h3>Price: {eachItem.price}</h3>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteItem(eachItem))}
                >
                  Del
                </Button>
              </div>
              <div className="item-options">
                <Button
                  variant="success"
                  onClick={() => dispatch(increment(eachItem))}
                >
                  +
                </Button>
                <Button
                  variant="transparent"
                  style={{ color: "black", marginLeft: "10px" }}
                >
                  x{eachItem.quantity}
                </Button>
                <Button variant="danger" style={{ marginLeft: "10px" }}>
                  -
                </Button>
              </div>
            </div>
          ))}
          {/* <div className="single-item">
            <img
              src="https://res.cloudinary.com/drecbsopp/image/upload/v1627398399/samasung-galaxy-a51-8gb-8uh_tndbgv.jpg"
              alt="Product"
            />
            <div className="item-details">
              <h3>Galaxy S10</h3>
              <h3>Price: 700</h3>
            </div>
            <div className="item-options">
              <Button variant="success">+</Button>
              <Button variant="danger" style={{ marginLeft: "10px" }}>
                -
              </Button>
            </div>
          </div> */}
        </div>
        <div className="cart-right">
          <h2>Total Price: {totalPrice}</h2>
          <h2>Total Quantity: {totalQuantity}</h2>
          <NavLink to={"/"}>
            <Button variant="primary" style={{ marginLeft: "10px" }}>
              Continue Shopping
            </Button>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
