import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/assets/planet.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <>
    <Navbar className="border-bottom">
      <Container className="nav-wrapper">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Space Travelers Hub</h1>
        </Navbar.Brand>
        <Nav className="nav-links p-3">
          <NavLink
            to="/"
            exact
            className="text-decoration-none"
            activeClassName="text-decoration-underline"
          >
            Rockets
          </NavLink>
          <NavLink
            to="/missions"
            className="px-3 text-decoration-none"
            activeClassName="text-decoration-underline"
          >
            Missions
          </NavLink>
          <NavLink
            to="/profile"
            className="border-start px-2 border-dark text-decoration-none"
            activeClassName="text-decoration-underline"
          >
            My Profile
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default NavBar;
