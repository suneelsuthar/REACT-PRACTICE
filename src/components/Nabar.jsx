import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router';

function Header() {
  const location = useLocation();

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <i className="fas fa-graduation-cap me-2"></i>
          Student Portal
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              <i className="fas fa-home me-1"></i>
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              <i className="fas fa-info-circle me-1"></i>
              About
            </Nav.Link>
          </Nav>
          
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/login" 
              className={location.pathname === '/login' ? 'active' : ''}
            >
              <Button variant="outline-light" size="sm" className="me-2">
                <i className="fas fa-sign-in-alt me-1"></i>
                Login
              </Button>
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/signup" 
              className={location.pathname === '/signup' ? 'active' : ''}
            >
              <Button variant="light" size="sm">
                <i className="fas fa-user-plus me-1"></i>
                Sign Up
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;