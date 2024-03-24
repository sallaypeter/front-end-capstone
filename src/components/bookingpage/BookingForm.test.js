import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';
import BookingForm from './BookingForm';
import BookingDataContext from '../../BookingDataContext';

test('Testing the booking form title', () => {
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
    const titleElement = screen.getByText("Reserve a Table");
    expect(titleElement).toBeInTheDocument();
});
