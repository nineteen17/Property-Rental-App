import { useEffect, useState } from "react"
import ListingItem from './ListingItem.tsx'
import axios from "axios"
import "./Listing.scss"

const Listing = ({ searchQuery }:{searchQuery:string}) => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL
  const [data, setData] = useState([])
  const [listingArr, setListingArr] = useState([])
  const [count, setCount] = useState(5)
  
  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axios.get(
          searchQuery.length > 0 ?
          `${baseUrl}/api/properties/find?${searchQuery}`
          :`${baseUrl}/api/properties`
        );
        setData(res.data);
        setListingArr(data.slice(0,count))
      } catch (err) {
        throw new Error("Failed to fetch properties");
      }
    };
    getProperties();
  }, [baseUrl,searchQuery,data,count]);

  
  return (
    <div className="listing">
      <h1 className="listing--header">Current property available</h1>
      <div className="listing__listingContainer">
        {listingArr.map((l) => {
          return (<ListingItem listing={l} />);
        })}
      </div>

      <div className="listing__buttonContainer">
        <button 
          className="listing__buttonContainer--button"
          onClick={() => {
            setCount(count + 3);
          }}
        >
          Load more
        </button>
    </div>
    </div>
  );
};

export default Listing;