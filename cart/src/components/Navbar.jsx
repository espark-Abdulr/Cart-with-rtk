import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar333() {
  const { cart } = useSelector((items) => items.storeName);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1"></Nav.Link>
          </Nav>

          <NavLink to={"/cart"}>
            <Button variant="success">
              Cart
              <Badge bg="transparent" color="black">
                {cart.length}
              </Badge>
            </Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar333;
