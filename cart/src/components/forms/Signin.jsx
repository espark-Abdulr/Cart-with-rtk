import React, { useEffect, useState } from "react";
import "./forms.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/cartSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = useSelector((c) => {
    return c.storeName.isLogin;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userdata = {
    email: email,
    password: password,
  };

  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const loginHandler = (event) => {
    event.preventDefault();
    setPassword("");
    setEmail("");
    dispatch(login(userdata));
  };
  return (
    <div className="main">
      <div className="back"></div>
      <form onSubmit={loginHandler}>
        <h2>Login Form</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <h2>
          Not have an account? <NavLink to={"/register"}>Create Here</NavLink>
        </h2>
      </form>
    </div>
  );
};

export default Signin;
