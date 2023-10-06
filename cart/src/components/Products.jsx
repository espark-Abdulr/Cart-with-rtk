import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/Modal";
import "./products.css";
// import { productsData } from "../constants/productsConstants";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Products() {
  const items = useSelector((item) => item.storeName.items);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const isLogin = useSelector((c) => {
    return c.storeName.isLogin;
    // console.log(c.UserData.isLogin);
  });

  const AddToCartHandler = (item) => {
    console.log("hello");
    isLogin ? dispatch(addToCart(item)) : setShowModal(true);
  };
  return (
    <>
      {showModal === true ? (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Please login first
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <NavLink to={"/login"}>Click Here</NavLink>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : (
        <Container
          style={{
            marginTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            rowGap: "20px",
            columnGap: "30px",
          }}
        >
          {items.map((eachProduct, index) => (
            <Card
              style={{ minWidth: "30%", marginBottom: index === 4 ? 20 : 0 }}
              key={index}
            >
              <Card.Img variant="top" src={eachProduct.img} />
              <Card.Body>
                <Card.Title>{eachProduct.title}</Card.Title>
                <Card.Text>{eachProduct.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => AddToCartHandler(eachProduct)}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
}

export default Products;
