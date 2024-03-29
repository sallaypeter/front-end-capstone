import BookingDataContext from "../../BookingDataContext";
import { useContext } from "react";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
    const {bookingData} = useContext(BookingDataContext);

    const emailBookingData = () => {
        alert("Your booking data has been emailed successfully.\n\nThanks you!");
    }

    return (
        <div className="confirmed-booking">
            <div>
                <h1>Your booking has been confirmed!</h1>
                <h2>Booking details:</h2>
                <p>Date: {bookingData.date}</p>
                <p>Time: {bookingData.time}</p>
                <p>Number of Guests: {bookingData.guests}</p>
                {
                    bookingData.occasion &&
                    <p>
                        Occasion: {bookingData.occasion}
                    </p>
                }
            </div>
            <button onClick={emailBookingData}>Email booking details</button>
        </div>
    );
}

export default ConfirmedBooking;