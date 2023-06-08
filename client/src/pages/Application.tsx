import "./Application.scss";
import { useNavigate, useParams } from "react-router-dom";
import { usePropertyId } from "../hooks/useListings";
import SmallListingItem from "../components/routed/properties/SmallListingItem";

const Application = () => {
    const navigate = useNavigate();
    const { id } = useParams();
  const { data: property} = usePropertyId(id);
  return (
    <div className="applicationContainer">
      <div className="applicationContainer__header">
        <h2>Apply for a property</h2>
        <SmallListingItem listing={property}/>
      </div>
      <form className="applicationContainer__form">
      
        <div className="applicationContainer__form__title">
            <h3>Start your Application Here:</h3>
        </div>
        <div className="applicationContainer__form__start">
            
          <div className="applicationContainer__form__start__column">
            <p>Your first and last name</p>
            <input
              type="text"
              name="name"
              className="applicationContainer__form__start__column--input"
              placeholder="Type here"
              required
            />

            <p>Phone Number</p>
            <input
              type="text"
              name="phone"
              className="applicationContainer__form__start__column--input"
              placeholder="Type here"
              required
            />

            <p>When can you move into the property?</p>
            <input
              type="text"
              name="moveInDate"
              className="applicationContainer__form__start__column--input"
              placeholder="dd/mm/yy"
              required
            />
            <p>How long do you want the property for?</p>
            <input
              type="text"
              name="contractPeriod"
              className="applicationContainer__form__start__column--input"
              placeholder="dd/mm/yy"
              required
            />
          </div>
          <div className="applicationContainer__form__start__column">
            <p>Email address</p>
            <input
              type="text"
              name="email"
              className="applicationContainer__form__start__column--input"
              placeholder="Type here"
              required
            />
            <p>Preferred tenancy type</p>
            <input
              type="text"
              name="tenancy"
              className="applicationContainer__form__start__column--input"
              placeholder="Type here"
            />
            <p>How many people will be living with you?</p>
            <input
              type="text"
              name="peopleNumber"
              className="applicationContainer__form__start__column--input"
              placeholder="Type here"
              required
            />
            <p>Have you viewed the property?</p>
            <input
              type="text"
              name="viewStatus"
              className="applicationContainer__form__start__column--input"
              placeholder="Yes or No"
              required
            />
          </div>
        </div>
        <div className="applicationContainer__form__identity">
            <div className="applicationContainer__form__identity__textbox">
                <p>Proof of identity:</p>
                <p>Please provide a copy of your birth certificate or 
                    drivers license to validate your identity.</p>
                <button>Upload here</button>
            </div>
        </div>

        <div className="applicationContainer__form__title">
            <h3>Co - Applicants:</h3>
            <h3>Co - Applicants added here will be emailed their own application form</h3>
        </div>
        <div className="applicationContainer__form__coApplicant">

            <div className="applicationContainer__form__coApplicant__column">
                <p>First and last name</p>
                <input
                type="text"
                name="coName"
                placeholder="Type here"
                required
                />
            </div>
            <div className="applicationContainer__form__coApplicant__column">
                <p>Email address</p>
                <input
                type="text"
                name="coEmail"
                placeholder="Type here"
                required
                />
            </div>
        </div>

        <div className="applicationContainer__form__title">
            <h3>Pets:</h3>
            <h3>Some of our property's do not allow pets.</h3>
        </div>
        <div className="applicationContainer__form__petsSmoke">
            <p>Do you have any pets that will be at the property?</p>
                    <input
                    type="text"
                    name="pets"
                    placeholder="Yes or No"
                    required
                    />
        </div>

        <div className="applicationContainer__form__title">
            <h3>Smoking:</h3>
            <h3>Some of our property's do not allow smoking.</h3>
        </div>
        <div className="applicationContainer__form__petsSmoke">
            <p>Are you or any other tenants smokers?</p>
                <input
                type="text"
                name="smoking"
                placeholder="Yes or No"
                required
                />
        </div>
        <div className="applicationContainer__form__btn">
            <button
                onClick={() => {navigate(`/apply-next/${id}`)}}
            >
                Next
            </button>
        </div>

      </form>
    </div>
  );
};

export default Application;
