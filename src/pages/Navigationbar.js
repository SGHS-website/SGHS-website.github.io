import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/club">Club</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/event">Event</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/competition">Competition</NavLink>
                    <NavLink  eventKey="5" as={Link} to="/student">Student</NavLink>
                    <NavLink  eventKey="6" as={Link} to="/faq">FAQ</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;