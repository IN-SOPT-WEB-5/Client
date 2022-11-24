import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoxOffice from '../src/@components/boxoffice/Index';


import BookingPage from '../src/@components/BookingPage/index';
import Landingpage from '../src/@components/LandingPage/index';
import SeatSelectingPage from '../src/@components/SeatSelectingPage/SeatSelectingPage';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/booking" element={<BookingPage />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/select" element={<SeatSelectingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
