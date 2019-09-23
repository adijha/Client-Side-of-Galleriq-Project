import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { API } from '../config';
export default function Login() {
  const [redirect, setRedirect] = useState(false);
  const infoPost = (email, password) => {
    const user = { username: email, password: password };
    return fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
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

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to='/checkout' />;
    }
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    const a = document.querySelector('#a').value;
    const b = document.querySelector('#b').value;
    infoPost(a, b).then((data) => {
      if (data.error) {
        console.log('err');
      } else {
        console.log('login');
        setRedirect(true);
      }
    });
    clearInput();
  };

  const loginForm = () => (
    <div className='col-md-4 col-offset-4'>
      {shouldRedirect(redirect)}
      <form onSubmit={clickSubmit}>
        <div className='form-group'>
          <h1>Login User</h1>
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
        <button className='btn btn-outline-primary'>Login</button>
      </form>
      <br />
      <Link to='/register'>
        <button className=' btn btn-outline-primary'>Create Account</button>
      </Link>
    </div>
  );

  return <Fragment>{loginForm()}</Fragment>;
}
