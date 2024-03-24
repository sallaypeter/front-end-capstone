import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingDataContext from '../../BookingDataContext';

test('Testing the table booking form', () => {
    const data = {
        bookingData: { availableTimes: ["Select Time", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] },
        setBookingData: jest.fn()
    }
    render(
        <BookingDataContext.Provider value={data}>
            <BookingForm />
        </BookingDataContext.Provider>,
        { wrapper: MemoryRouter }
    );
    // Testing for title exists
    const titleElement = screen.getByText("Reserve a Table");
    expect(titleElement).toBeInTheDocument();
    // Date input
    const dateInput = screen.getByTitle('resDate');
    fireEvent.change(dateInput, { target: { value: "2024-03-22" } });
    // Time input
    const timeInput = screen.getByTitle('resTime');
    fireEvent.change(timeInput, { target: { value: "21:00" } });
    // Number input
    const numberInput = screen.getByTitle('guests');
    fireEvent.change(numberInput, { target: { value: "2" } });
    // Occassion input
    const occassionInput = screen.getByTitle('occasion');
    fireEvent.change(occassionInput, { target: { value: "Birthday" } });

    const submitButton = screen.getByRole("button");
    // Testing submit button enabled
    expect(submitButton).toBeEnabled();
});
