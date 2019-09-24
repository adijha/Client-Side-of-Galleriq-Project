import React from 'react';
import { Link } from 'react-router-dom';
import { itemTotal } from '../pages/cartHelpers';

import '../styles/navbar.css'

import logo from '../images/logo.png'
import account from '../images/acoount.png';
import search from '../images/search.png';
import cart from '../images/cart.png';


export default function Navbar() {
  return (
    <nav className="navbar navbar-inverse" style={{ marginTop:'0', paddingTop:'0' }}>
  <div className="navbar-header">
    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </button>
        <Link to="/" className="navbar-brand" style={ { marginLeft:'3rem'}}><img style={ { marginLeft:'3rem'}} className="logo" src={logo} alt="Galleriq" /></Link>
  </div>
  <div id="navbarCollapse" className="collapse navbar-collapse">
    <ul className="nav navbar-nav nav-center ">
      <li><Link to="#">Canvas Prints</Link></li>
      <li><Link to="/CanvasPrint">Wall Art</Link></li>
      <li><Link to="#">Premium Prints</Link></li>
      <li><Link to="#">Canvas Ideas</Link></li>
      <li><Link to="/catalog">Offers</Link></li>
      <li><Link to="/filter">Blog </Link></li>&nbsp;
      <li><Link className="btn btn-warning nav-btn"  to="/CreateYourPrint">&nbsp;Create a Canvas</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="#"><img src={search} alt="" /></Link></li>
          <li><Link to="/cart"><img style={{ marginRight:'2.4rem' }} src={ cart } alt="" /></Link></li>
      <li><Link className="login-nav" to><img src={account} alt="" /></Link></li>
    </ul>
  </div>
</nav>

  );
}
