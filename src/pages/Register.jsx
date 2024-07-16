import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import eye_icon from "../../public/eye-icon.svg";
import Separator from "../../public/Separator.png";
import Other_Method_Login from "../../public/Other Method Login.png";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [placeholders, setPlaceholders] = useState({
    email: "Enter Email",
    username: "Name",
    password: "Password",
    checkbox: "You must agree with Terms of Service and Privacy Policy",
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const validateForm = () => {
    let formErrors = {};
    let newPlaceholders = {
      email: "Enter Email",
      username: "Name",
      password: "Password",
      checkbox: "You must agree with Terms of Service and Privacy Policy",
    };
    if (!email) {
      formErrors.email = "Email is required";
      newPlaceholders.email = formErrors.email;
    }
    if (!username) {
      formErrors.username = "Username is required";
      newPlaceholders.username = formErrors.username;
    }
    if (!password) {
      formErrors.password = "Password is required";
      newPlaceholders.password = formErrors.password;
    } else if (password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long";
      newPlaceholders.password = formErrors.password;
    }
    if (!isChecked) {
      formErrors.checkbox =
        "You must agree with Terms of Service and Privacy Policy";
    }
    setPlaceholders(newPlaceholders);

    if (Object.keys(formErrors).length > 0) {
      setEmail("");
      setUsername("");
      setPassword("");
    }

    return formErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const userData = { email, username, password, isChecked };
      console.log("User data:", userData);
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  return (
    <div className="register-main">
      <form onSubmit={handleSubmit}>
        <div className="register-title-description">
          <div className="register-heading-text">
            <h4>Create a new account.</h4>
          </div>
          <div className="register-description">
            Please fill in the details to register
          </div>
        </div>
        <div className="register-email-input-field">
          <div className="register-email-text">Email Address</div>
          <div className="register-email-input">
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
        <div className="register-username-field">
          <div className="register-text">User Name</div>
          <div className="register-input">
            <input
              type="text"
              placeholder={placeholders.username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={placeholders.username !== "Name" ? "error-input" : ""}
            />
          </div>
        </div>
        <div className="register-input-field">
          <div className="register-text">Password</div>
          <div className="register-input">
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
        <div className="register-checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            title={!isChecked ? placeholders.checkbox : ""}
          />
          <p
            className={
              placeholders.checkbox !==
              "You must agree with Terms of Service and Privacy Policy"
                ? "error-checkbox"
                : ""
            }
          >
            I Agree with <span>Terms of Service</span> and{" "}
            <span>Privacy Policy</span>
          </p>
        </div>
        <div className="register-signIn-button">
          <button type="submit">Register</button>
        </div>
      </form>
      <div className="register-Separator">
        <img src={Separator} alt="Separator" />
      </div>
      <div className="register_Other_Method_Login">
        <img src={Other_Method_Login} alt="Other Method Login" />
      </div>
      <div className="register">
        Already have an account?
        <span>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
