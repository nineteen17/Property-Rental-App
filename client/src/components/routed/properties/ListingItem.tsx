import {Listing} from "../../../types/Listing"
import './ListingItem.scss'

const ListingItem = ({ listing }: { listing: Listing }) => {
  return (
    <div key={listing._id} id={listing._id} className="listingItemContainer">
      <a href={listing.imgUrls[0]}>
        <img className="listingItemContainer--Img" src={listing.imgUrls[0]} alt={listing._id} />
      </a>
      
      <p className="listingItemContainer--title">
         {listing.name}
      </p>
      <p className="listingItemContainer--location">
        {listing.location["address"]},
        {listing.location["suburb"]}, 
        {listing.location["city"]}
        </p>
      <div className="listingItemContainer__price">
        <p> ${listing.price}</p>
      </div>
      <div className="listingItemContainer__detail">
        
      </div>
      
    </div>
  )
}

export default ListingItem