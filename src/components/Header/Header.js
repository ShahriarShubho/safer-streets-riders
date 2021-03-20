import React from 'react';
import { Navbar, Nav, Form, FormControl, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
       <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="text-warning" href="#home">Safer Streets Riders</Navbar.Brand>
    <Nav className="m-auto">
      <Link className="link" to="/home">Home</Link>
      <Link className="link" to="/destination">Destination</Link>
      <Link className="link" to="/contract">Contract</Link>
      <Link to="/login"><Button variant="outline-danger">Log In</Button></Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
      </>
    );
};

export default Header;