import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "./products.css";
// import { productsData } from "../constants/productsConstants";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function Products() {
  const items = useSelector((item) => item.storeName.items);
  const dispatch = useDispatch();
  return (
    <>
      <Container
        style={{
          marginTop: "10rem",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "20px",
          columnGap: "30px",
        }}
      >
        {items.map((eachProduct, index) => (
          <Card style={{ minWidth: "30%", maxWidth: "30%" }}>
            <Card.Img variant="top" src={eachProduct.img} />
            <Card.Body>
              <Card.Title>{eachProduct.title}</Card.Title>
              <Card.Text>{eachProduct.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => dispatch(addToCart(eachProduct))}
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default Products;
