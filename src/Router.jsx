import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './@components/LandingPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}
