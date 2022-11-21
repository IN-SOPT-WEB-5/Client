import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './@components/LandingPage';
import SeatSelectingPage from './@components/SeatSelectingPage/SeatSelectingPage.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/select" element={<SeatSelectingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
