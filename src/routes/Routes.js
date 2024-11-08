import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.js';
import BookingPage from '../pages/BookingPage.js';

export default function () {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<BookingPage />} path='/reservations' />
    </Routes>
  )
}