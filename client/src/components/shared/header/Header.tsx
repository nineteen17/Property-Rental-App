import "./Header.scss";
import { useNavigate } from "react-router-dom";
import {useUserStore} from "../../../store/Store"; 


const Header = () => {
  const user = useUserStore((state) => state.user);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }
const handleLogo = () => {
    navigate('/');
  }
  const handleWishlist = () => {
    if (user === null) {
      navigate('/login');
    }
    else {
      navigate('/wishlist');
    }
  }

  return (
    <div className="Header">
      <div className="Header__logo" onClick={handleLogo}>
        <img src="https://metronz.co.nz/wp-content/uploads/2022/09/header-logo.svg" />
      </div>
      <div className="Header__nav">
        <div className="Header__nav__item">Services</div>
        <div className="Header__nav__item">Apply</div>
        <div className="Header__nav__item">Listings</div>
        <div className="Header__nav__item">About Us</div>
        <div className="Header__nav__item">Contact</div>
        <div className="Header__nav__item" onClick={handleWishlist} >Wishlist</div>
        <div className="Header__nav__item" onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
};

export default Header;
