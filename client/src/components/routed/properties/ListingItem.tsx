import {Listing} from "../../../types/Listing"
import './ListingItem.scss'
import {FaBed, FaShower} from 'react-icons/fa'
import {MdOutlineGarage, MdPets} from 'react-icons/md'
import {Link} from 'react-router-dom';
import { useAddToWishlist } from '../../../hooks/useAuth';


const ListingItem = ({ listing }: { listing: Listing }) => {
  const addToWishlistMutation = useAddToWishlist();

  const handleAddToWishlist = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    addToWishlistMutation.mutate(listing._id);
  };
  
  return (
    <Link to={`/properties/${listing._id}`} className="LinkListingItemContainer"> 
    <div key={listing._id} id={listing._id} className="listingItemContainer">
      <div className="listingItemContainer__left-section">
        <a href={listing.imgUrls[0]}>
          <img className="listingItemContainer--Img" src={listing.imgUrls[0]} alt={listing._id} />
        </a>
      </div>
      
      <div className="listingItemContainer__right-section">
        <div className="listingItemContainer__right-section__titleContainer">
          <div>
            <p className="listingItemContainer__right-section__titleContainer--title">
              {listing.location["address"]},
            </p>
            <p className="listingItemContainer__right-section__titleContainer--location">
              {listing.location["suburb"]},&nbsp;
              {listing.location["city"]}
              </p>
          </div>
          
            <a onClick={handleAddToWishlist} >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/OOjs_UI_icon_watchlist-ltr.svg/120px-OOjs_UI_icon_watchlist-ltr.svg.png?20221209154142" 
                  alt="watchlist" 
                  className="listingItemContainer__right-section__titleContainer--watchlistIcon"
              />
            </a>
        </div>
        

        <div className="listingItemContainer__right-section__detailsContainer">
          <div className="listingItemContainer__right-section__section__detailsContainer__details">
            <p><FaBed className="listingItemContainer__right-section__detailsContainer__details--icons"/>
            {listing.bedrooms}
            </p>
          </div>
          <div className="listingItemContainer__right-section__section__detailsContainer__details">
           <p>
           <FaShower className="listingItemContainer__right-section__detailsContainer__details--icons"/>
           {listing.bathrooms}
            </p> 
          </div>
          
          {listing.parkings > 0 && <div className="listingItemContainer__right-section__section__detailsContainer__details">
           <p>
           <MdOutlineGarage className="listingItemContainer__right-section__detailsContainer__details--icons"/>
           {listing.parkings}
            </p> 
          </div>}
          {listing.petFriendly === "Allowed" && 
          <div className="listingItemContainer__right-section__section__detailsContainer__details">
           <p>
           <MdPets className="listingItemContainer__right-section__detailsContainer__details--icons"/>
            </p> 
          </div>}
          <div className="listingItemContainer__right-section__section__detailsContainer__price">
            <p> ${listing.price}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ListingItem