import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    const links = [
      {
        id: 1,
        path: '/space-travelers',
        text: 'Rockets',
      },
      {
        id: 2,
        path: '/missions',
        text: 'Missions',
      },
      {
        id: 3,
        path: '/dragons',
        text: 'Dragons',
      },
      {
        id: 4,
        path: '/myprofile',
        text: 'My Profile',
      },
    ];

    
