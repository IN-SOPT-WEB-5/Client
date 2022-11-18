import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingPage from './@components/BookingPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
