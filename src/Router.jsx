import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoxOffice from './@components/BoxofficePage/index';
import BookingPage from '../src/@components/BookingPage/index';
import Landingpage from '../src/@components/LandingPage/index';
import SeatSelectingPage from './@components/SeatSelectingPage/index.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route exact path="/boxoffice" element={<BoxOffice />} />
        <Route exact path="/booking" element={<BookingPage />} />
        <Route exact path="/select" element={<SeatSelectingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
