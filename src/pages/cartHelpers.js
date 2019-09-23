import { API } from '../config';

export const addItem = (image, price, frame, quantity, next) => {
  localStorage.setItem('cart', JSON.stringify({ image, price, frame, quantity }));
  next();
};

export const getCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'));
    }
  }
  return [];
};

export const itemTotal = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart')).length;
    }
  }
  return 0;
};

export const saveOrder = (cart) => {
  console.log('cart-->', cart);
  return fetch(`${API}/order`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cart)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
  // return console.log('api--->', cart);
};


export const getSizeList = () => {
  return fetch(`${API}/sizeList`, {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getStyleList = () => {
  return fetch(`${API}/styleList`, {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
