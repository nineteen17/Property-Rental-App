import React from "react";
import { useNavigate } from "react-router-dom";
import './ApplicationNext.scss'

const ApplicationNext = () => {
  const navigate = useNavigate();
  return (
    <div className="applicationNext">
        <div className="applicationNext__header">
          <h2>Apply for a property</h2>
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
                />
                <p>Landlord phone number</p>
                <input
                type="text"
                name="landLordPhone"
                placeholder="Type here"
                />
            </div>

            <div className="applicationNext__form__container__column">
                <p>Landlord email address</p>
                <input
                type="text"
                name="landLordEmail"
                placeholder="Type here"
                />
                <p>Preferred contact type</p>
                <input
                type="text"
                name="preferContactType"
                placeholder="Type here"
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
                />
                <p>Phone number</p>
                <input
                type="text"
                name="otherPhone"
                placeholder="Type here"
                />
            </div>
            <div className="applicationNext__form__container__column">
                <p>Email address</p>
                <input
                type="text"
                name="otherEmail"
                placeholder="Type here"
                />
                <p>Relationship</p>
                <input
                type="text"
                name="relationship"
                placeholder="Type here"
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
                onClick={() => {navigate('/apply')}}
            >
                Back
            </button>
            <button
                onClick={() => {navigate('/')}}
            >
                Submit
            </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationNext;
