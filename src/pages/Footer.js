import React from "react";
import SGLogo from "../images/logo.png";
import { Link } from "react-router-dom";
import gmail from "../images/contactus/gmail.png";
import instagram from "../images/contactus/instagram.png";
import paper from "../images/contactus/paper.png";

const Footer = () =>{
    return(
        <div className="footer">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className="first">
                <p>[03066] 서울 종로구 성균관로13길 40 
                    <br/> (명륜1가, 서울국제고등학교)
                    <br/><br/>Sponsored by 종로구청
                    <br/>Developed by 설국다움
                    <br/><br/>@Copyright
                </p>
            </div>
            <div className="last">
                <p>
                    <div className="contactus">
                        Contact Us
                        <img src={gmail}></img>
                        <img src={instagram}></img>
                        <img src={paper}></img>
                    </div>

                    <br/><Link to="AboutUs">About Us</Link>
                    <img src={ SGLogo } className="SGlogo"></img>
                </p>
            </div>
        </div>
    )
}
export default Footer;