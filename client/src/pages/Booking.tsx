import React from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.scss";

const Booking = () => {
  const navigate = useNavigate();
  return (
    <div className="booking">
      <div className="booking__header">
        <h2>Booking a viewing</h2>
      </div>

      <form className="booking__form">
        <div className="booking__form__title">
          <h3>Fill in your contact detail:</h3>
        </div>
        <div className="booking__form__container">
          <div className="booking__form__container__column">
            <p>First and last name</p>
            <input type="text" name="viewName" placeholder="Type here" />
            <p>Phone number</p>
            <input type="text" name="viewPhone" placeholder="Type here" />
          </div>
          <div className="booking__form__container__column">
            <p>Email address</p>
            <input type="text" name="viewEmail" placeholder="Type here" />
            <p>Specific details</p>
            <input type="text" name="viewDetail" placeholder="Type here" />
          </div>
        </div>

        <div className="booking__form__bookTimes">
          <h3>Booking times:</h3>
          <h3>Please select a booking time</h3>
          <div className="booking__form__bookTimes__boxContainer">
            <div className="booking__form__bookTimes__boxContainer__box">
              <p>Friday 16 June</p>
              <p>10:00 am</p>
            </div>

            <div className="booking__form__bookTimes__boxContainer__box">
              <p>Friday 23 June</p>
              <p>11:00 am</p>
            </div>

            <div className="booking__form__bookTimes__boxContainer__box">
              <p>Thursday 8 June</p>
              <p>4:00 pm</p>
            </div>
          </div>
          <h3>Unavailable?</h3>

          <div className="booking__form__checkbox">
            <input type="checkbox" />
            <p>
              If you are unable at these viewings times or have further
              questions the property agent will make contact with you
            </p>
          </div>
        </div>

        <div className="booking__form__btn">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
