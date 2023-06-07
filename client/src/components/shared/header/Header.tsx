import { useLogoutUser, useUserProfile } from "../../../hooks/useAuth"; // Import the useLogoutUser hook
import { useUserStore } from "../../../store/Store"; 
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const user = useUserStore((state) => state.user);
  const { data: userProfile } = useUserProfile();
  const logoutMutation = useLogoutUser();
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
      navigate('/watchlist');
    }
  }

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        useUserStore.getState().clearUser(); 
        navigate("/");
      }
    });
  }
const handleRent = () => {
  navigate("/rent");
};

  return (
    <div className="Header">
      <div className="Header__logo" onClick={handleLogo}>
        <img src="https://metronz.co.nz/wp-content/uploads/2022/09/header-logo.svg" />
      </div>
      <div className="Header__nav">
        <div className="Header__nav__item">Services</div>
        <div className="Header__nav__item">Apply</div>
        <div className="Header__nav__item" onClick={handleRent} >Listings</div>
        <div className="Header__nav__item">About Us</div>
        <div className="Header__nav__item">Contact</div>
        <div className="Header__nav__item" onClick={handleWishlist}>Watchlist</div>
        {user && userProfile && (
          <>
            <div className="Header__nav__item" onClick={handleLogout}>Logout</div>
            <div className="Header__nav__item" style={{color:"rgb(118, 168, 212)"}} >Hi {userProfile.name}!</div>
          </>
        )}
        {user === null && 
          <div className="Header__nav__item" onClick={handleLogin}>Login</div>
        }
      </div>
    </div>
  );
};

export default Header;
