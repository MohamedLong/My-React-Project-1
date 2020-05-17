import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import Home from "./component/Home";
import Aboutus from "./component/Aboutus";
import Contactus from "./component/Contactus";
import OurProducts from "./component/OurProducts";
import Navbar from "./component/CustomNavbar";
//import { NavbarBrand } from 'react-bootstrap';
import Cart from './component/Cart';
import Details from './component/Details';
import Modal from "./component/Modal";
import Default from "./component/Default";

class App extends Component {
  render() {
      return (
        <Router>
          <Navbar/>
          <React.Fragment>
            
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/details" component={Details}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/aboutus" component={Aboutus}/>
                <Route path="/contactus" component={Contactus}/>
                <Route path="/ourProducts" component={OurProducts}/>
                <Route component={Default}/>
                
              </Switch>
              <Modal />
          </React.Fragment>
        </Router>
        
      );
  }
}

export default App;
