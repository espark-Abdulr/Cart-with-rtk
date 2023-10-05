// import logo from "./logo.svg";
// import "./App.css";

import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
