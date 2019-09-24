import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import NewsLetter from './NewsLetter';

import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';


export default function Footer() {
  return (
    <Fragment>
      <hr style={ {   border: "1px solid gray"
       , borderRadius: "2px"} }/>
    <div className="row footer">
      <div className="col-sm-1" />
      <div className="col-sm-2">
        <h4 style={{fontWeight:'700'}} >COMPANY</h4>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">CONTACT &amp; HELP</a>
          </li>
          <li>
            <a href="#">HOW IT WORKS</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-2">
        <h4 style={{ color: "#fff" }}>Important</h4>
        <ul>
          <li>
            <a href="#">SHIPPING INFO</a>
          </li>
          <li>
            <a href="#">RETURN POLICY</a>
          </li>
          <li>
            <Link to='/create'>Admin</Link>
          </li>
        </ul>
      </div>
      <div className="col-sm-2">
        <h4 style={{fontWeight:'700'}}>BE SOCIAL</h4>
        <ul>
          <li>
            <div style={{ display: "flex" }}>
              <div style={{ paddingRight: 30 }}>
                <img src={facebook} alt />
              </div>
              <div style={{ paddingRight: 30 }}>
                <img src={instagram} alt />
              </div>
              <div style={{ paddingRight: 30 }}>
                <img src={twitter} alt />
              </div>
            </div>
          </li>
          <li>
            <img src={phone} alt />
            <span>+91-9810512915</span>
          </li>
          <li>
            <img src={mail} alt />
            <span>info@easywallprints.com</span>
          </li>
        </ul>
      </div>
     
          
      <NewsLetter/>    


          
          
      <div className="col-sm-1" />
    </div>
    <div className="row"  style={{margin: '0rem 3rem' }}>
      <div className="col-sm-2 " style={{bottom: '0' }}/>
      <div className="col-sm-12" style={{ background: "#424242" , bottom: '0' }}>
        <div style={{  color: "#fff", textAlign: 'center' , bottom: '0' }}>
          Copyright ©2019 Galleriq. All rights reserved.
        </div>
      </div>
      <div className="col-sm-2" />
    </div>
  
      
    </Fragment>
  )
}
