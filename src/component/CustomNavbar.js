import React, { Component } from 'react';
//import { Navbar, Nav ,NavItem ,FormControl ,Form,Button , Footer} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

export default class CustomNavbar extends Component {
    render() {
        return (
            
<nav className="navbar navbar-expand-lg navbar-light bg-light px-sm-5 " >
<Link to="/">
          <img src={logo} alt="store" className="navbar-brand"/>
  </Link>
  <Link className="navbar-brand" to="/"><h3>OtonO</h3></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
      <Link className="nav-link" to="/"><span><i className="fa fa-home fa-x2"/></span> Home  <span className="sr-only">(current) </span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/OurProducts"><i className="fas fa-gifts fa-x2"></i> LetsGoShopping</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="/Contactus"><i className="fas fa-mobile-alt fa-x2"></i> Contact Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Aboutus"> <i className="fas fa-qrcode fa-x2"></i> About Us</Link>
      </li>
    </ul>
    <Link to="/Cart" className="ml-auto">
    <button className="btn btn-outline-success " > <i className="fas fa-cart-plus"/>  My Cart</button>
    </Link>
  </div>
</nav>









         )
    }
}
