import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/homepage/Nav';
import HomePage from './components/homepage/HomePage';
import AboutPage from './components/aboutpage/AboutPage';
import MenuPage from './components/menupage/MenuPage';
import ReservationsPage from './components/reservationspage/ReservationsPage';
import OrderOnlinePage from './components/orderonlinepage/OrderOnlinePage';
import LoginPage from './components/loginpage/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/menu' element={<MenuPage />}></Route>
        <Route path='/reservations' element={<ReservationsPage />}></Route>
        <Route path='/orderonline' element={<OrderOnlinePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
