import './CurrentListing.scss'
import Listing from '../components/routed/properties/Listing'
import { useState } from 'react';

const CurrentListings = () => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [searchQuery, setSearchQuery] = useState("")

  const handleFilters = (e: { target: { value: string; name: string; }; }) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchQuery("")//reset query first
    Object.keys(filters).map((key) => {
      if (filters[key] !== "Any"){
        const value = filters[key].includes("+") ? filters[key].substring(0,1):filters[key]
        setSearchQuery((prevQuery) => prevQuery + `${key}=${value}&`);
        console.log(filters[key],searchQuery)
      }
      console.log(searchQuery)
      
    });
  };
  

  return (
    <div className='currentListingContainer'>
      <form className='currentListingContainer__left-section' onSubmit={handleSubmit}>
        <p>Sort By Price</p>
        <select name="priceOrder" onChange={handleFilters}>
          <option>Highest</option>
          <option>Lowest</option>
        </select>

        <p>Property Type</p>
        <select name="propertyType" onChange={handleFilters}>
          <option>Any</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Unit</option>
          <option>Townhouse</option>
        </select>

        <p>Bedrooms</p>
        <select name="bedrooms" onChange={handleFilters}>
          <option>Any</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
          <option>5+</option>
          <option>6+</option>
        </select>

        <p>Bathrooms</p>
        <select name="bathrooms" onChange={handleFilters}>
          <option>Any</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
          <option>5+</option>
          <option>6+</option>
        </select>

        <p>Pets</p>
        <select name="petFriendly" onChange={handleFilters}>
          <option>Any</option>
          <option>Allowed</option>
          <option>Not allowed</option>
        </select>

        <button type="submit" >
          submit
        </button>
      </form>
      
      <div className='currentListingContainer__right-section'>
        <Listing searchQuery={searchQuery}/>
      </div>
      
    </div>
  )
}

export default CurrentListings