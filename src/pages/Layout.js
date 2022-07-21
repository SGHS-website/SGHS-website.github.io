import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.png"

import "../styles/index.css"
// eslint-disable-next-line
const Layout = () => {
  return (
    <div className="container">
      <header>
        <img src ={logo} className="logo"/>
        <ul className="category">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/club">Club</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/competition">Competition</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
        </ul>
      </header>

      <Outlet />
    </div>
  )
};

export default Layout;