import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import image from '../image/RGP-icon.png';
import { render } from '@testing-library/react';

class Navbar extends Component {
    constructor(){
        super();
        this.state = { links: [
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
          ]};
    }

      render() {
    return (
      //   <nav className="navbar bg-light">
      //     <div className="container-fluid">
      //  <div className="brand-logo-container">
      //       <img className="d-inline-block align-text-top" src={image} alt="spacelogo" />
      //       <h2 className="nav-brand">Space Travellers&apos; Hub</h2>
      //     </div>
      //     <ul className="nav-links">
      //       {this.state.links.map((link) => (
      //        <li className="nav-item" key={link.id}>
      //            <NavLink  className="nav-link" to={link.path}>
      //              {link.text}
      //           </NavLink>
      //         </li>
      //       ))}
    
      //     </ul> 
      //     </div>
      //   </nav>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/space-travelers">
      <img src={image} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
      Space Travellers&apos; Hub
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      {this.state.links.map((link) => (
             <li className="nav-item" key={link.id}>
                 <NavLink  className="nav-link" to={link.path}>
                   {link.text}
                </NavLink>
              </li>
            ))}
      </ul>
    </div>
  </div>
</nav>
      );
    }
    };
    export default Navbar;


