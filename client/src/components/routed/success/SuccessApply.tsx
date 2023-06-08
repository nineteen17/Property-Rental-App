import SmallListingItem from "../properties/SmallListingItem"
import {Listing} from "../../../types/Listing"
import {AiFillCloseSquare} from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import './SuccessApply.scss'

const SuccessApply = ({ listing }: { listing: Listing }) => {
    const navigate = useNavigate();
  return (
    <div className="successApply">
      <div className="successApply__iconContainer">
        <AiFillCloseSquare  
          className="successApply__iconContainer--icon"
          onClick={() => {
                navigate("/");
              }}/>
      </div>
        
        <h2>Thank you for your application!</h2>
        <div className="successApply__info">
            <p>Your application has been submitted.</p>
            <p>We have sent you a confirmation email with all your details.</p>
            <p>The property manager will email you in up to 7 business 
                days confirm if you have been successful.</p>
                <br />
            <p>If you have any further questions please phone 09 391 4642
                or fill in your contact form <span>here</span>
            </p>
        </div>
        <div className="successApply__listing">
          <SmallListingItem listing={listing}/>
        </div>
       
    </div>
  )
}

export default SuccessApply