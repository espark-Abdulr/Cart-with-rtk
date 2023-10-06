import React, { useState } from "react";
import "./forms.css";
import { useDispatch } from "react-redux";
import { register } from "../../features/cartSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const [fname, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [lname, setLName] = useState("");

  const userdata = {
    name: fname,
    email: email,
    phone: phone,
    password: password,
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const registerhandler = (event) => {
    event.preventDefault();
    // console.log(userdata);
    setFName("");
    setPassword("");
    setEmail("");
    setPhone("");
    setLName("");
    dispatch(register(userdata));
    navigate("/login");
  };
  return (
    <div className="main">
      <div className="back"></div>
      <form onSubmit={registerhandler}>
        <h2>Register Form</h2>
        <div className="horizontal-inputs">
          <input
            type="text"
            placeholder="First Name"
            required
            value={fname}
            onChange={(e) => setFName(e.target.value)}
            name="first-name"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            name="last-name"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="tel"
        />
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
          Already have an account? <NavLink to={"/login"}>Login Here</NavLink>
        </h2>
      </form>
    </div>
  );
};

export default Signup;
