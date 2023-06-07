import "./RegisterSuccess.scss";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/login`);
  };

  return (
    <div className="RegisterSuccess-bg">
      <div className="RegisterSuccess">
        <div className="success-message">Registration Successful!</div>
        <div className="login-button" onClick={handleLogin}>
          Click here to login
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
