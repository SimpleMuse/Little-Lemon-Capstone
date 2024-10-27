import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.js';

export default function () {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
    </Routes>
  )
}