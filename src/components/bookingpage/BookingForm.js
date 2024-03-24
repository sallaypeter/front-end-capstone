import "./BookingForm.css";
import BookingDataContext from "../../BookingDataContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
    const [formData, setFormData] = useState({});
    //const [availableTimes, setAvailableTimes] = useState(["Select Time", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const navigate = useNavigate();
    const {bookingData, setBookingData} = useContext(BookingDataContext);

    // dummy function to simulate the missing api.js
    const fetchAPI = (date) => {
        console.log(`year: ${date.getFullYear()}, month: ${date.getMonth()}, day: ${date.getDate()}`);
    }

    // dummy function to simulate the missing api.js
    const submitAPI = (formData) => {
        console.log(formData);
    }

    const updateBookingData = () => {
        setBookingData(previousData => {
            return {
                ...previousData,
                date: formData.resDate,
                time: formData.resTime,
                guests: formData.guests,
                occasion: formData.occasion
            };
        });
    }

    const updateTimes = (dateString) => {
        const reservationDate = new Date(dateString);
        fetchAPI(reservationDate);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = {...formData, [name]: value};
        setFormData(newData);
        if (name === "resDate") {
            updateTimes(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBookingData();
        submitAPI(formData);
        navigate("/confirmbooking");
    }

    /*
    const isFormValid =
        (formData.resDate) &&
        (formData.resTime && formData.resTime !== "Select Time" ) &&
        (formData.guests && formData.guests !== "") &&
        (formData.occasion && formData.occasion !== "Select Occassion");
    */

    function isFormValid() {
        const isValid = (formData.resDate) &&
        (formData.resTime && formData.resTime !== "Select Time" ) &&
        (formData.guests && formData.guests !== "") &&
        (formData.occasion && formData.occasion !== "Select Occassion");
        return isValid;
    }

    return (
        <div className="booking-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Reserve a Table</h2>
                    <div className="form-field">
                        <label htmlFor="res-date">Choose date <sup>*</sup></label>
                        <input title="resDate" type="date" id="res-date" value={formData.resDate || ""} name="resDate" onChange={handleChange}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="res-time">Choose time <sup>*</sup></label>
                        <select title="resTime" id="res-time" value={formData.resTime} name="resTime" onChange={handleChange}>
                            {
                                bookingData.availableTimes &&
                                    bookingData.availableTimes.map(time => <option>{time}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-field">
                        <label htmlFor="guests">Number of guests <sup>*</sup></label>
                        <input title="guests" type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guests || ""} name="guests" onChange={handleChange}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="occasion">Occasion <sup>*</sup></label>
                        <select title="occasion" id="occasion" value={formData.occasion} name="occasion" onChange={handleChange}>
                            <option>Select Occasion</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <button aria-label="Make Your reservation" type="submit" disabled={!isFormValid()}>Make Your reservation</button>
                </fieldset>
            </form>
        </div>
    );
}

export default BookingForm;