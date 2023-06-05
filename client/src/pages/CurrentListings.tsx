import './CurrentListing.css'
import Listing from '../components/routed/properties/Listing'
import PropertiesFilter from '../components/routed/properties/PropertiesFilter'

const CurrentListings = () => {
  return (
    <div className='currentListingContainer'>
      <div className='currentListingContainer__left-section'>
        <PropertiesFilter />
      </div>
      
      <div className='currentListingContainer__right-section'>
        <Listing />
      </div>
      
    </div>
  )
}

export default CurrentListings