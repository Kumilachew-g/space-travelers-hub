import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Rockets from './components/rockets/Rockets';
import ProfileContainer from './components/pages/ProfileContainer';
import MissionsPage from './components/missions/MissionsPage';
import NoMatch from './components/NoMatch/NoMatch';
import './App.css';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <NavBar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<MissionsPage />} />
      <Route path="/profile" element={<ProfileContainer />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>
);

export default App;
