import React, { useState, Fragment } from 'react';
import { API } from '../config';
import { getCart } from './cartHelpers';

export default function Checkout() {
  const order = {
    purpose: 'GalleriQ Payment',
    amount: getCart().price,
    frame: getCart().frame,
    buyer_name: getCart().name,
    email: getCart().email,
    phone: getCart().number,
    address: getCart().address,
    image: getCart().image,
    quantity: getCart().quantity,
    phone: getCart().number,
    user_id: '101',
    // redirect_url: `http://localhost:8001/bid/callback?user_id=${user.id}`,
    redirect_url: `${API}/bid/callback?user_id=101`,
    webhook_url: '/webhook/'
  };

  const createPost = (order) => {
    console.log('createpost starts');
    return fetch(`${API}/bid/pay`, {
      method: 'POST',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify(order)
    })
      .then((res) => res.text())
      .then((text) => (window.location.href = text))
      .catch((err) => {
        console.log(err);
      });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    createPost(order);
  };

  const newCategoryFom = () => (
    <div className='container '>
      <div className='row ' style={{ width: '100%', marginLeft: '15rem' }}>
        <div className='col-md-2'>
          <img src={getCart().image} alt='' className='img' />
        </div>
        <div className=' col-md-5 pm'>
          <form onSubmit={clickSubmit}>
            <div className='form-group'>
              <h1 className='center'>Order Review</h1>
              <ul class='list-group'>
                <li class='list-group-item'> Frame :&nbsp; {getCart().frame} </li>
                <li class='list-group-item'> Quantity :&nbsp; {getCart().quantity}</li>
                <li class='list-group-item '> Name :&nbsp; {getCart().name}</li>
                <li class='list-group-item '> Number :&nbsp; {getCart().number}</li>
                <li class='list-group-item'> Price :&nbsp; {getCart().price}</li>
                <li class='list-group-item'> Address :&nbsp; {getCart().address}</li>
              </ul>
            </div>
            <button
              className='btn btn-outline-primary btn-large btn-2'
              style={{ width: '50%', margin: '0 9rem' }}>
              Create Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return <Fragment>{newCategoryFom()}</Fragment>;
}
