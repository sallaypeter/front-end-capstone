import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/homepage/Nav';
import HomePage from './components/homepage/HomePage';
import AboutPage from './components/aboutpage/AboutPage';
import MenuPage from './components/menupage/MenuPage';
import BookingPage from './components/bookingpage/BookingPage';
import ConfirmedBooking from './components/bookingpage/ConfirmedBooking';
import OrderOnlinePage from './components/orderonlinepage/OrderOnlinePage';
import LoginPage from './components/loginpage/LoginPage';
import BookingDataContext from './BookingDataContext';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [bookingData, setBookingData] = useState({});

  const initializeTimes = () => {
    setBookingData(previousData => {
        return { ...previousData, availableTimes: ["Select Time", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] }
      }
    );
  }

  useEffect( () => {
    initializeTimes();
  }, []);

  return (
    <>
      <Nav />
      <BookingDataContext.Provider value={{bookingData, setBookingData}}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/menu' element={<MenuPage />}></Route>
          <Route path='/reservations' element={<BookingPage />}></Route>
          <Route path='/confirmbooking' element={<ConfirmedBooking />}></Route>
          <Route path='/orderonline' element={<OrderOnlinePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
      </BookingDataContext.Provider>
      <Footer />
    </>
  );
}

export default App;
