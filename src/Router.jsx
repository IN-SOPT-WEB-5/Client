import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoxOffice from '../src/@components/boxoffice/Index';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/boxoffice" element={<BoxOffice />} />

        <Route path="/boxoffice" element={<BoxOffice />} />

        <Route path="/booking" element={<BookingPage />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/select" element={<SeatSelectingPage />} />

      </Routes>
    </BrowserRouter>
  );
}
