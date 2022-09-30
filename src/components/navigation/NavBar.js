import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/assets/planet.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';

const NavBar = () => (
  <>
    <Navbar className="border-bottom">
      <Container className="nav-wrapper">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Space Travelers Hub</h1>
        </Navbar.Brand>
        <Nav className="nav-links p-3">
          <Nav.Link>
            <NavLink
              to="/rockets"
              exact
              className="text-decoration-none navLink"
              activeClassName="text-decoration-underline "
            >
              Rockets
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/missions"
              className="px-2 text-decoration-none navLink"
              activeClassName="text-decoration-underline"
            >
              Missions
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/profile"
              className="border-start px-2 border-dark text-decoration-none navLink"
              activeClassName="text-decoration-underline"
            >
              My Profile
            </NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default NavBar;
