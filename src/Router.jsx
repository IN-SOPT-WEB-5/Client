import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoxOffice from '../src/@components/boxoffice/Index';

import BookingPage from './@components/BookingPage';
import Landingpage from './@components/LandingPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/boxoffice" element={<BoxOffice />} />

        <Route path="/booking" element={<BookingPage />} />
        <Route path="/" element={<Landingpage />} />

      </Routes>
    </BrowserRouter>
  );
}
