/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Glyphicon, Grid,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProductAddNavItem from './ProductAddNavItem.jsx';
import Contents from './Contents.jsx';

function NavBar() {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>My Company Inventory</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/products">
          <NavItem>Product List</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <ProductAddNavItem />
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <MenuItem>About</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <small>
      <hr/>
      <p className="text-center">
        Full source code available at this
        {' '}
        <a href="https://github.com/jyoti-nalwade5/Full-stack-Assignment6.git">
          GitHub repository
        </a>
      </p>
    </small>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Grid fluid>
        <Contents />
      </Grid>
      <Footer />
    </div>
  );
}
