import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/Loginlarge.png";
import smallLogo from "../assets/loginsmall.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("navigate");
    if (username === "admin@email.com" && password === "password@123") {
      setError("");
      navigate("/homeportal");
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleForgotPassword = () => {
    alert("Please contact admin for reset your password");
  };

  return (
    <div className="container">
      <div className="logoContainer">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="logo-small">
          <img src={smallLogo} alt="Small Logo" />
        </div>
      </div>
      <div className="electric">#We are Electric</div>
      <div className="loginBox">
        <form onSubmit={handleSubmit} className="loginForm">
          <input
            type="text"
            className="inputField"
            placeholder="E-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="inputField"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login">
            Login
          </button>
          {error && <p className="error">{error}</p>}
        </form>
        <div className="forgot" onClick={handleForgotPassword}>
          Forgot Password
        </div>
      </div>
    </div>
  );
}

export default Login;
