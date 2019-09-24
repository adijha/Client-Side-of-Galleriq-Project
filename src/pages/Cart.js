import React, { Fragment } from 'react';
import { Link,} from 'react-router-dom';
import Item from './Item';
import { getCart, saveOrder } from './cartHelpers';

const updateCart = () => {
  const xquantity = document.querySelector('#quantity').value;

  var existing = localStorage.getItem('cart');

  existing = existing ? JSON.parse(existing) : {};

  existing['quantity'] = '';
  existing['quantity'] = xquantity;
  existing['price'] = '';
  existing['price'] = getCart().price * xquantity

  localStorage.setItem('cart', JSON.stringify(existing));
};

const Cart = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
        <h1 style={{ color: '#F1B000', textAlign:"center" }}>Shopping Cart </h1>
          <div className=' col-md-8 offset'>
            <Item
              frame={getCart().frame}
              image={getCart().image}
              price={getCart().price}
            />
            <Link to='checkout'>
              <button
                onClick={updateCart}
                className='offset-btn btn btn-primary btn-2 '
                type='submit'>
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
