import { Link } from 'react-router-dom';
import { useUserProfile, useRemoveFromWishlist } from '../../../hooks/useAuth';
import { useUserStore } from '../../../store/Store';
import './Watchlist.scss';
import { useNavigate } from 'react-router-dom';




const Watchlist = () => {
  const { data: userProfile } = useUserProfile();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const { mutate: removeFromWishlist } = useRemoveFromWishlist();

  const handleHome = () => {  
  navigate(`/`);
  }

  if (user) {
    return (
      <div className='Watchlist' >
        <div className='Watchlist__container'>
        <div className="Watchlist__container__left">
        <span className="Watchlist__container__left__breadcrumb__link" onClick={handleHome } >Home</span> /
        <span className="Watchlist__container__left__breadcrumb__link">Watchlist</span>
        </div>
        <div className='Watchlist__container__right'>
          <h1>Your Watchlist</h1>
        {userProfile?.wishlist?.map((property: any, index: any) => (
          <div key={index} className="info-container">
            <Link to={`/properties/${property._id}`} className='Watchlist__container__right__info'>
               <div className='Watchlist__container__right__info__img'>
                <img className='img' src={property.imgUrls[0]} alt="property" />
               </div>
               <div className='Watchlist__container__right__info__text'>
                 <p>{property.location["address"]}</p>
                 <p>{property.name}</p>
               </div>
            </Link>
            <button className='remove-button' onClick={() => removeFromWishlist(property._id)}>x</button>
          </div>
        ))}
        </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Please login to view your wishlist</h2>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }
};

export default Watchlist;
