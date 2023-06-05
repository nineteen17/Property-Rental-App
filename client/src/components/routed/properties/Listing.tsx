import { useEffect, useState } from "react"
import ListingItem from './ListingItem.tsx'
import axios from "axios"

import "./Listing.scss"

const Listing = () => {
  const baseUrl = import.meta.env.VITE_LOCAL_URL;
  const [listingArr, setListingArr] = useState([])
  const [count, setCount] = useState(8)
  const [loadMoreArr, setLoadMoreArr] = useState([])
  
  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/properties`);
        setListingArr(res.data);
      } catch (err) {
        throw new Error("Failed to fetch properties");
      }
    };
    getProperties();
  }, [baseUrl]);

  
  return (
    <div className="listing">
      <h1 className="listing--header">Current property available</h1>
      <div className="listing__listingContainer">
        {listingArr.slice(0,6).map((l) => {
          return <ListingItem listing={l} />;
        })}
        {loadMoreArr.map((l) => {
            return <ListingItem listing={l} />;
          })}
      </div>

      <div id="listing__buttonContainer">
        <button 
          id="listing__buttonContainer--button"
          onClick={() => {
            setCount(count + 4);
          }}
        >
          Load more
        </button>
    </div>
    </div>
  );
};

export default Listing;