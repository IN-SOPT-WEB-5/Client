import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoxOffice from '../src/@components/boxoffice/Index';
import BookingPage from './@components/BookingPage';
import Landingpage from './@components/LandingPage';
import SeatSelectingPage from './@components/SeatSelectingPage/SeatSelectingPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/boxoffice" element={<BoxOffice />} />

        <Route path="/booking" element={<BookingPage />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/select" element={<SeatSelectingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
