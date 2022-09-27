import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import './App.css';
// import NotFound from './components/pages/NotFound';
// import Dragons from './components/dragon/dragons';
// import MissionsContainer from './components/pages/MissionsContainer';
// import Rockets from './components/rockets/Rockets';
// import ProfileContainer from './components/pages/ProfileContainer';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/space-travelers" exact="true" element={<h1>Rocket Page</h1>} />
          <Route path="/missions" element={<h1>Mission Page</h1>} />
          <Route path="/myprofile" element={<h1>Booking Record Page</h1>} />
          <Route path="*" element={<h1>Not Found 404 Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
