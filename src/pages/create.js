import React, { useState, Fragment } from 'react';
import { API } from '../config';

export default function CreateStyle() {

  const createStylePost = (a, b) => {
    return fetch(`${API}/createStyle`, {
      method: 'POST',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify({ value: a, price: b })
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearInput = () => {
    document.querySelector('#a').value = '';
    document.querySelector('#b').value = '';
    document.querySelector('#c').value = '';
    document.querySelector('#d').value = '';
  };

  const createSizePost = (c, d) => {
    return fetch(`${API}/createSize`, {
      method: 'POST',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify({ value: c, price: d })
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    const a = document.querySelector('#a').value;
    const b = document.querySelector('#b').value;
    const c = document.querySelector('#c').value;
    const d = document.querySelector('#d').value;
    createStylePost(a, b);
    createSizePost(c, d);
    clearInput();
  };

  const newCategoryFom = () => (
    <form onSubmit={clickSubmit}>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <h1>Create Style</h1>
        <input
          type='text'
          className='form-control'
          id='a'
          autoFocus
          required
          placeholder='Style Name'
        />
        <input
          type='text'
          className='form-control'
          id='b'
          required
          placeholder='Style Starting Price'
        />

        <h1>Create Size</h1>
        <input
          type='text'
          id='c'
          className='form-control'
          required
          placeholder='Size Name'
        />
        <input
          type='text'
          id='d'
          className='form-control'
          required
          placeholder='Size Starting Price'
        />
      </div>
      <button className='btn btn-outline-primary'>Create Category</button>
    </form>
  );

  return <Fragment>{newCategoryFom()}</Fragment>;
}
