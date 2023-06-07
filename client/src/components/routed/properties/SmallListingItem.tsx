import {Listing} from "../../../types/Listing"
import { FaBed, FaShower } from 'react-icons/fa'
import { MdOutlineGarage, MdPets } from 'react-icons/md'
import './SmallListingItem.scss'

const SmallListingItem = ({ listing }: { listing: Listing }) => {
  return (
    <div key={listing._id} id={listing._id}  className='smallListingItem'>

      <div className='smallListingItem__left'>
        <a href={listing.imgUrls[0]}>
          <img src={listing.imgUrls[0]} alt={listing._id} />
        </a>
      </div>

      <div className='smallListingItem__right'>
        <h2>{listing.name}</h2>
        <p>{listing.location.address},{listing.location.suburb},{listing.location.city}</p>
        <p>${listing.price} Per week</p>
        <div className="smallListingItem__right__icons">
          {listing.bathrooms > 0 && <FaShower className="smallListingItem__right__icons-icon"/>}
          {listing.bedrooms > 0 && <FaBed className="smallListingItem__right__icons-icon"/>}
          {listing.parkings > 0 && <MdOutlineGarage className="smallListingItem__right__icons-icon"/>}
          {listing.petFriendly === "Allowed" && <MdPets className="smallListingItem__right__icons-icon"/>}
        </div>
        
      </div>
    </div>
  )
}

export default SmallListingItem