import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BookingPage from './@components/BookingPage';
import Landingpage from './@components/LandingPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}
