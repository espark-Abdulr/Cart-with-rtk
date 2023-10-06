// import logo from "./logo.svg";
// import "./App.css";

// import { Route, Routes } from "react-router-dom";
// import Cart from "./components/Cart";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./components/forms/Signin";
import Signup from "./components/forms/Signup";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";

function App() {
  const isLogin = useSelector((c) => {
    return c.storeName.isLogin;
    // console.log(c.UserData.isLogin);
  });
  return (
    <>
      <Navbar />
      {isLogin === false ? (
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="*" element={<Signin />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Signin />}></Route>
        </Routes>
      )}
      {console.log(isLogin)}
    </>
  );
}

export default App;
