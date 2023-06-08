import { useNavigate, useParams } from "react-router-dom";
import { usePropertyId } from "../hooks/useListings";
import SmallListingItem from "../components/routed/properties/SmallListingItem";
import './ApplicationNext.scss'

const ApplicationNext = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: property} = usePropertyId(id);
  return (
    <div className="applicationNext">
        <div className="applicationNext__header">
          <h2>Apply for a property</h2>
          <SmallListingItem listing={property}/>
        </div>

      <form className="applicationNext__form">
        
        <div className="applicationNext__form__title">
            <h3>Landlord Reference:</h3>
        </div>
        <div className="applicationNext__form__container">
            <div className="applicationNext__form__container__column">
                <p>Landlord full name</p>
                <input
                type="text"
                name="landLordName"
                placeholder="Type here"
                required
                />
                <p>Landlord phone number</p>
                <input
                type="text"
                name="landLordPhone"
                placeholder="Type here"
                required
                />
            </div>

            <div className="applicationNext__form__container__column">
                <p>Landlord email address</p>
                <input
                type="text"
                name="landLordEmail"
                placeholder="Type here"
                required
                />
                <p>Preferred contact type</p>
                <input
                type="text"
                name="preferContactType"
                placeholder="Type here"
                required
                />
            </div>
        </div>

        



        <div className="applicationNext__form__title">
            <h3>Other Reference:</h3>
        </div>
        <div className="applicationNext__form__container">
            <div className="applicationNext__form__container__column">
                <p>Full name</p>
                <input
                type="text"
                name="otherName"
                placeholder="Type here"
                required
                />
                <p>Phone number</p>
                <input
                type="text"
                name="otherPhone"
                placeholder="Type here"
                required
                />
            </div>
            <div className="applicationNext__form__container__column">
                <p>Email address</p>
                <input
                type="text"
                name="otherEmail"
                placeholder="Type here"
                required
                />
                <p>Relationship</p>
                <input
                type="text"
                name="relationship"
                placeholder="Type here"
                required
                />
            </div>
        </div>

        <div className="applicationNext__form__consent">
            
                <p>Privacy Consent:</p>
                <p>Privacy Statement - I have read, understood and agree to Tenancy 
                    Practice Service Limited's Privacy Policy found here
                    <span> https://tenant.co.nz/privacy-policy</span>
                </p>
                    
                <div className="applicationNext__form__consent__checkbox">
                    <input type="checkbox" />
                    <p>I agree to the privacy consents</p>
                </div>
                <div className="applicationNext__form__consent__checkbox">
                    <input type="checkbox" />
                    <p>I agree to the landlord and landlord's agent running a credit check on me</p>
                </div>
                <div className="applicationNext__form__consent__checkbox">
                    <input type="checkbox" />
                    <p>I agree to the landlord and landlord's agent contacting my references</p>
                </div>
            
        </div>
        <div className="applicationNext__form__btn">
            <button
                onClick={() => {navigate(`/apply/${id}`)}}
            >
                Back
            </button>
            <button
                onClick={() => {navigate(`/apply/success/${id}`)}}
            >
                Submit
            </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationNext;
