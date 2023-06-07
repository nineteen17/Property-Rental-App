import React, { useState } from "react";
import { useRegisterUser } from "../../../hooks/useAuth";
import { UserData } from "../../../types/types";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const registerMutation = useRegisterUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData: UserData = {
      name,
      email,
      password,
    };

    registerMutation.mutate(userData);
    if (registerMutation.isSuccess) {
      navigate(`/register-success`);
    }
  };

  const handleHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="Register-bg">
      <div className="Register">
        <div className="Register__breadcrumb">
         <span className="Register__breadcrumb__link" onClick={handleHome}>Home</span> /
         <span className="Register__breadcrumb__link" onClick={handleLogin}>Login</span> /
         <span className="Register__breadcrumb__link">Register</span>
        </div>
        <div className="Register__form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type here ..."
              required
            />
            <label>Your email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type here ..."
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type here ..."
              required
            />
            <span className="Register__form__button-container">
              <button type="submit">Register</button>
            </span>
          </form>
          <label>Call 09 391 4642 for help</label>
        </div>
      </div>
    </div>
  );
};

export default Register;
