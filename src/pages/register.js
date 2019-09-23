import React, { useState, Fragment } from 'react';
import { API } from '../config';
import { Link, Redirect } from 'react-router-dom';

export default function CreateStyle() {
  const createUserPost = (email, password) => {
    return fetch(`${API}/register`, {
      method: 'POST',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify({ email: email, password: password })
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
  };

  const shouldRedirect = (pass) => {
    if (pass) {
      return <Redirect to='/checkout' />;
    }
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    const a = document.querySelector('#a').value;
    const b = document.querySelector('#b').value;
    createUserPost(a, b);
    clearInput();
    shouldRedirect(true);
  };

  const newCategoryFom = () => (
    <div className='col-md-4'>
      <form>
        <div className='form-group'>
          <h1>Register User</h1>
          <input
            type='text'
            className='form-control'
            id='a'
            autoFocus
            required
            placeholder='Email Address'
          />
          <input
            type='password'
            className='form-control'
            id='b'
            required
            placeholder='Password'
          />
        </div>
        <Link to='/checkout'>
          <button onClick={clickSubmit} className='btn btn-outline-primary'>
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );

  return <Fragment>{newCategoryFom()}</Fragment>;
}
