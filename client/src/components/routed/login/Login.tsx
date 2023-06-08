import "./Login.scss";
import React, { useState, FormEvent } from "react";
import { useAuthUser } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authMutation = useAuthUser();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await authMutation.mutateAsync({ email, password }); // pass an object that matches the UserData type
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  const handleHome = () => {
    navigate("/");
  };
const handleCreateAccount = () => {
  navigate("/register");
}
  return (
    <div className="Login-bg">
    <div className="Login">
      <div className="Login__breadcrumb">
        <span className="Login__breadcrumb__link" onClick={handleHome } >Home</span> /
        <span className="Login__breadcrumb__link">Login</span>
      </div>
      <div className="Login__form">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
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
          <label className="forgot" >Forgot password ?</label>
          <span className="Login__form__button-container">
          <button type="submit">Log In</button>
          <button type="button" onClick={handleCreateAccount} >Create Account</button>
          </span>
        </form>
        <label>Call 09 391 4642 for help</label>
      </div>
    </div>
    </div>
  );
};

export default Login;
