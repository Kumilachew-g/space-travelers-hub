import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import MissionsPage from './components/missions/MissionsPage';
import ProfilePage from './components/profile/myProfile';
import NoMatch from './components/NoMatch/NoMatch';
import './App.css';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <NavBar />
    <Routes>
      <Route path="/mission" element={<MissionsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>
);

export default App;
