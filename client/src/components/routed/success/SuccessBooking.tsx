import SmallListingItem from "../properties/SmallListingItem"
import {Listing} from "../../../types/Listing"
import {AiFillCloseSquare} from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import './SuccessBooking.scss'

const SuccessBooking = ({ listing }: { listing: Listing }) => {
  const navigate = useNavigate();
  return (
    <div className="successBooking">
      <div className="successBooking__iconContainer">
        <AiFillCloseSquare  
          className="successBooking__iconContainer--icon"
          onClick={() => {
                navigate("/");
              }}/>
      </div>
        
        <h2>Thank you for your booking!</h2>
        <div className="successBooking_info">
            <p>Your booking has been confirmed.</p>
            <p>We have sent you a confirmation email with all your details.</p>
            
            <p>If you have any further questions please phone 09 391 4642
                or fill in your contact form <span>here</span>
            </p>
        </div>
        <div className="successBooking__listing">
          <SmallListingItem listing={listing}/>
        </div>
       
    </div>
  )
}

export default SuccessBooking