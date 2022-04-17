import React from 'react'
import  Nav  from 'react-bootstrap/Nav'
import  Container  from 'react-bootstrap/Container'
import BNavbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <BNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <BNavbar.Brand >My Clinic</BNavbar.Brand>
                <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">                        
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/login" >Login</NavLink>
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </Nav>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
  )
}

export default Navbar