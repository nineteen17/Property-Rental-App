import { Link } from 'react-router-dom';
import { useUserProfile } from '../../../hooks/useAuth';
import { useUserStore } from '../../../store/Store';

const Watchlist = () => {
  const { data: userProfile } = useUserProfile();
  const { user } = useUserStore();

  if (user) {
    return (
      <div>
        <h3>Wishlist:</h3>
        {userProfile?.wishlist?.map((property: any, index: any) => (
          <div key={index}>
            <Link to={`/property/${property._id}`}>{property.name}</Link>
          </div>
        ))}
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
