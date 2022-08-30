import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import sghs from "../images/sghs.png"
const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="justify-content-end" style={{ width: "100%", fontSize: "20px", marginBottom: "2px", marginTop:"-2px"}}>
                <img src={sghs} style={{objectFit: "scale-down", marginLeft:"2%", marginRight:"0.5%"}}></img>
                <p style={{width: "10", fontSize: "12px", textAlign: "left", marginTop: "6px", marginBottom: "-6px", marginRight:"48%"}}>Seoul Global <br></br>High School</p>
                    <NavLink  eventKey="1" as={Link} to="/" style={{marginRight:"2%"}}>Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/newclub" style={{marginRight:"2%"}}>Club</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/eventde" style={{marginRight:"2%"}}>Event</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/competition" style={{marginRight:"2%"}}>Competition</NavLink>
                    <NavLink  eventKey="5" as={Link} to="/student" style={{marginRight:"2%"}}>Student</NavLink>
                    <NavLink  eventKey="6" as={Link} to="/faq" style={{marginRight:"2%"}}>FAQ</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;