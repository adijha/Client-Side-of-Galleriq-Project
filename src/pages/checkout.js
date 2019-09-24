import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const updateCart = () => {
  const name = document.querySelector('#name').value;
  const number = document.querySelector('#number').value;
  const address = document.querySelector('#address').value;
  const email = document.querySelector('#email').value;

  var existing = localStorage.getItem('cart');

  existing = existing ? JSON.parse(existing) : {};

  existing['name'] = name;
  existing['number'] = number;
  existing['address'] = address;
  existing['email'] = email;

  localStorage.setItem('cart', JSON.stringify(existing));
};

const Cart = () => {
  return (
    <Fragment>
      <div class='card mx-auto' style={{ maxWidth: '60rem' }}>
        <div class='card-header'>
          <center>
            <h1>Checkout Details</h1>
          </center>
        </div>
        <ul class='list-group list-group-flush'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            class='list-group-item'
            style={{ width: '100%' }}></input>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            class='list-group-item'
            style={{ width: '100%' }}></input>
          <input
            type='text'
            name='number'
            id='number'
            placeholder='Number'
            class='list-group-item'
            style={{ width: '100%' }}></input>
          <input
            type='text'
            name='address'
            id='address'
            placeholder='Address line 1'
            class='list-group-item'
            style={{ width: '100%' }}></input>
          <input
            type='text'
            name='address1'
            id='address1'
            placeholder='Address line 1'
            class='list-group-item'
            style={{ width: '100%' }}></input>
          <input
            type='text'
            name='address2'
            id='address2'
            placeholder='Delivery Address'
            class='list-group-item'
            style={{ width: '100%' }}></input>
        </ul>
      </div>

      <Link to='summary'>
        <button
          onClick={updateCart}
          className='btn offset-btn  btn-primary btn-2 col-md-4'
          type='submit'
          style={{ width: '25%', marginTop: '-3rem', marginLeft: '40rem' }}>
          Checkout
        </button>
      </Link>
    </Fragment>
  );
};

export default Cart;
