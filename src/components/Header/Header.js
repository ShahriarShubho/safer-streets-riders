import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
  <Navbar bg="dark" expand="lg">
  <Navbar.Brand className="text-warning font-weight-bold" href="#home">Safer Streets Riders</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
      <Link className="link" to="/home">Home</Link>
      <Link className="link" to="/destination">Destination</Link>
      <Link className="link" to="#home">Blog</Link>
      <Link className="link" to="#link">Contract</Link>
      <Link to="/login" className="linkButton">Log In</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      </>
    );
};

export default Header;