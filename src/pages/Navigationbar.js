import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import sghsLogo from "../images/sghsLogo.png"
const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="black" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Link to="/"><img src={sghsLogo} className="navi_img"></img></Link>

                <Nav className="justify-content-end" style={{ width: "100%", fontSize: "20px", marginBottom: "2px", marginTop:"-2px"}}>
                    <NavLink  eventKey="1" as={Link} to="/" style={{marginRight:"2%"}}>Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/club" style={{marginRight:"2%"}}>Club</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/event" style={{marginRight:"2%"}}>Event</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/student" style={{marginRight:"2%"}}>Student</NavLink>
                    <NavLink  eventKey="5" as={Link} to="/faq" style={{marginRight:"2%"}}>FAQ</NavLink>
                    <NavLink  eventKey="6" as={Link} to="/aboutus" style={{marginRight:"2%"}}>AboutUs</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;