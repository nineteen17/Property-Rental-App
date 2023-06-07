import React from "react";
import "./Application.scss";
import { useNavigate } from "react-router-dom";

const Application = () => {
    const navigate = useNavigate();
  return (
    <div className="applicationContainer">
      <div className="applicationContainer__header">
        <h2>Apply for a property</h2>
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
            />

            <p>Phone Number</p>
            <input
              type="text"
              name="phone"
              className="applicationContainer__form__start__column--input"
              placeholder="Type here"
            />

            <p>When can you move into the property?</p>
            <input
              type="text"
              name="moveInDate"
              className="applicationContainer__form__start__column--input"
              placeholder="dd/mm/yy"
            />
            <p>How long do you want the property for?</p>
            <input
              type="text"
              name="contractPeriod"
              className="applicationContainer__form__start__column--input"
              placeholder="dd/mm/yy"
            />
          </div>
          <div className="applicationContainer__form__start__column">
            <p>Email address</p>
            <input
              type="text"
              name="email"
              className="applicationContainer__form__start__column--input"
              placeholder="Type here"
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
            />
            <p>Have you viewed the property?</p>
            <input
              type="text"
              name="viewStatus"
              className="applicationContainer__form__start__column--input"
              placeholder="Yes or No"
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
                />
            </div>
            <div className="applicationContainer__form__coApplicant__column">
                <p>Email address</p>
                <input
                type="text"
                name="coEmail"
                placeholder="Type here"
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
                />
        </div>
        <div className="applicationContainer__form__btn">
            <button
                onClick={() => {navigate('/apply-next')}}
            >
                Next
            </button>
        </div>

      </form>
    </div>
  );
};

export default Application;