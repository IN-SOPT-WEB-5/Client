import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoxOffice from './@components/BoxofficePage/index';
import BookingPage from './@components/BookingPage/index';
import Landingpage from '../src/@components/LandingPage/index';
import SeatSelectingPage from '../src/@components/SeatSelectingPage/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/boxoffice" element={<BoxOffice />} />
        <Route path="/booking" element={<BookingPage />} /> {/*라우터는 문제 없다*/}
        <Route path="/select" element={<SeatSelectingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
