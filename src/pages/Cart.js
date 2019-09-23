import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Item from './Item';
import { getCart, saveOrder } from './cartHelpers';

const updateCart = () => {
  const xquantity = document.querySelector('#quantity').value;
  const name = document.querySelector('#name').value;
  const number = document.querySelector('#number').value;
  const address = document.querySelector('#address').value;

  var existing = localStorage.getItem('cart');

  existing = existing ? JSON.parse(existing) : {};

  existing['quantity'] = '';
  existing['quantity'] = xquantity;
  existing['price'] = '';
  existing['price'] = getCart().price * xquantity;
  existing['name'] = name;
  existing['number'] = number;
  existing['address'] = address;

  localStorage.setItem('cart', JSON.stringify(existing));
  saveOrder(existing);
};

const Cart = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <h1>Shopping Cart </h1>
          <div className='col-md-8'>
            <Item
              frame={getCart().frame}
              image={getCart().image}
              price={getCart().price}
            />
          </div>

          <div class='card' style={{}}>
            <div class='card-header'>
              <center>Your Card Summary</center>
            </div>
            <ul class='list-group list-group-flush'>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
                class='list-group-item'
                style={{ width: '100%' }}></input>
              <input
                type='text'
                name='number'
                id='number'
                placeholder='Your Number'
                class='list-group-item'
                style={{ width: '100%' }}></input>
              <input
                type='text'
                name='address'
                id='address'
                placeholder='Delivery Address'
                class='list-group-item'
                style={{ width: '100%' }}></input>
            </ul>

            <Link to='login'>
              <button
                onClick={updateCart}
                className='btn btn-primary btn-block'
                type='submit'>
                checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
