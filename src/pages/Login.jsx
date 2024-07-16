import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import eye_icon from "../../public/eye-icon.svg";
import Separator from "../../public/Separator.png";
import Other_Method_Login from "../../public/Other Method Login.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [placeholders, setPlaceholders] = useState({
    email: "Enter Email",
    password: "Password",
  });

  const validateForm = () => {
    let formErrors = {};
    let newPlaceholders = {
      email: "Enter Email",
      password: "Password",
    };

    if (!email) {
      formErrors.email = "Email is required";
      newPlaceholders.email = "Required";
    }

    if (!password) {
      formErrors.password = "Password is required";
      newPlaceholders.password = "Required";
    } else if (password.length < 8) {
      formErrors.password = "Invalid password";
      newPlaceholders.password = "Invalid password";
    }

    setPlaceholders(newPlaceholders);

    if (Object.keys(formErrors).length > 0) {
      setEmail("");
      setPassword("");
    }

    return formErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Login data:", { email, password });
    }
  };

  return (
    <div className="login-main">
      <form onSubmit={handleSubmit}>
        <div className="title-description">
          <div className="login-heading-text">
            <h4>Login to your account.</h4>
          </div>
          <div className="sign-text">Please sign in to your account</div>
        </div>
        <div className="email-input-field">
          <div className="email-text">Email Address</div>
          <div className="email-input">
            <input
              type="text"
              placeholder={placeholders.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                placeholders.email !== "Enter Email" ? "error-input" : ""
              }
            />
          </div>
        </div>
        <div className="login-input-field">
          <div className="login-text">Password</div>
          <div className="login-input">
            <input
              type="password"
              placeholder={placeholders.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                placeholders.password !== "Password" ? "error-input" : ""
              }
            />
            <span className="eye-icon">
              <img src={eye_icon} alt="Show/Hide Password" />
            </span>
          </div>
        </div>
        <div className="forgot-password">
          <p>Forgot password?</p>
        </div>
        <div className="signIn-button">
          <button type="submit">Sign In</button>
        </div>
        <div className="Login-Separator">
          <img src={Separator} alt="Separator" />
        </div>
        <div className="Other_Method_Login">
          <img src={Other_Method_Login} alt="Other Method Login" />
        </div>
        <div className="Login-Register">
          Don't have an account?{" "}
          <span>
            <Link to="/Register">Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
