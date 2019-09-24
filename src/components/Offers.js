import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import account from '../images/acoount.png';

export default function Offers() {
  return (
    <Fragment>
      <div className='row' style={ { marginBottom: '0px',paddingBottom: '0px', marginRight:'4rem,'}}>
        <div
          className=' col-sm-6 col-md-3 pro'
          style={{ textAlign: 'center', }}>
          <span className='left-top' style={ {fontSize: '13px'}}>Sign up &amp; get gift voucher worth `1000</span>
        </div>
        <div className=' col-md-6'></div>
        <div className='col-sm-6 col-md-3 pro' style={{ padding: '0.5rem 4.5rem', paddingBottom:'0px'}}>
          <Link className='login'  href >
            <img src={account} alt='' />
            <span>&nbsp;&nbsp; Login &nbsp;|&nbsp; Register</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
