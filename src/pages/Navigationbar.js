import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import sghs from "../images/sghs.png"
const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

                <img src={sghs} className="navi_img" style={{ objectFit: "scale-down", marginTop:"-8%", marginBottom:"-8%", marginLeft:"-13.5%"}}></img>
                <p style={{width: "10", fontSize: "0.8vw", textAlign: "left", marginLeft: "5%", marginBottom:"2%", marginTop:"0.5%"}}>Seoul&nbsp;Global <br></br>High&nbsp;School</p>

                <Nav className="justify-content-end" style={{ width: "100%", fontSize: "20px", marginBottom: "2px", marginTop:"-2px"}}>
                    <NavLink  eventKey="1" as={Link} to="/" style={{marginRight:"2%"}}>Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/club" style={{marginRight:"2%"}}>Club</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/event" style={{marginRight:"2%"}}>Event</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/competition" style={{marginRight:"2%"}}>Competition</NavLink>
                    <NavLink  eventKey="5" as={Link} to="/student" style={{marginRight:"2%"}}>Student</NavLink>
                    <NavLink  eventKey="6" as={Link} to="/faq" style={{marginRight:"2%"}}>FAQ</NavLink>

                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;