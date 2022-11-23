import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoxOffice from '../boxoffice/Index';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/boxoffice" element={<BoxOffice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
