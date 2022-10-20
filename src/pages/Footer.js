import React from "react";
import SGLogo from "../images/logo.png"
import { Link } from "react-router-dom";
import contactus from"../images/ContactUs.png"
import mail from "../images/mail.png"
import instagram from "../images/instagram.png"
import paper from "../images/paper.png"

const Footer = () =>{
    return(
        <div className="footer">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className="first">
                <p>[03066]서울 종로구 성균관로13길 40 <br></br> (명륜1가, 서울국제고등학교)</p>
                <p>Sponsored by 종로구청 <br></br> Developed by 설국다움</p>
                <p>@Copyright</p>
            </div>
            <div className="last">
                <p>Contact Us<img src={mail} className="mail"></img><img src={instagram} className="instagram"></img><img src={paper} className="paper"></img></p>
                <Link to="/club">
                <p style={{textDecorationLine: "underline"}}> About Us<img src={ SGLogo } className="SGlogo"></img></p>
                </Link>
            </div>
        </div>
    );
}
export default Footer;