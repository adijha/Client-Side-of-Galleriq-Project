import React, { useState, Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addItem, getSizeList, getStyleList } from './cartHelpers';

export default function CanvasPrint() {
  const [image, setImage] = useState('https://img.icons8.com/officel/2x/add-image.png');
  let [sizePrice, setSizePrice] = useState('340');
  let [stylePrice, setStylePrice] = useState('100');
  const [style, setStyle] = useState('Single Print');
  const [size, setSize] = useState('18" X 12"');
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [sizes, setSizeList] = useState([]);
  const [styles, setStyleList] = useState([]);

  const loadSizes = () => {
    getSizeList().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setSizeList(data);
      }
    });
  };

  const loadStyles = () => {
    getStyleList().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStyleList(data);
      }
    });
  };

  const handleChange = (e) => {
    if (e.target.files[0].size < 999999) {
      setError(true);
    } else {
      setError('');
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChangeStyle = (e) => {
    setStyle(e.target.value);
    stylePrice = document.getElementById(e.target.value).getAttribute('class');
    setStylePrice(stylePrice);
  };

  const handleChangeSize = (e) => {
    setSize(e.target.value);
    sizePrice = document.getElementById(e.target.value).getAttribute('class');
    setSizePrice(sizePrice);
  };

  const showError = () => {
    if (error) {
      return <h3 className='text-danger alert alert-danger'>Image size is too small</h3>;
    }
  };

  // const calculatePrice = () => {
  //   const w = parseInt(document.querySelector('#width').value);
  //   setWidth(w);
  //   const h = parseInt(document.querySelector('#height').value);
  //   setHeight(h);
  //   setPrice((w * h) / 3);
  // };

  const addToCart = () => {
    const frame = document.querySelector('#frame').innerHTML;
    addItem(image, stylePrice * sizePrice, frame, '1', () => {
      setRedirect(true);
    });
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to='/cart' />;
    }
  };
  const showAddtoCartButton = () => {
    return (
      <button onClick={addToCart} className='btn btn-outline-warning mt-2 mb-2'>
        <p>Add to cart</p>
      </button>
    );
  };

  useEffect(() => {
    loadSizes();
    loadStyles();
  }, []);

  return (
    <Fragment>
      <div className='container'>
        {shouldRedirect(redirect)}
        <hr size='30'></hr>
        <div class='panel panel-default'>
          <div class='panel-body'>
            <div className=' text-centre'>
              <h2 style={{ color: '#F1B000' }}>Create Your Prints</h2>
              <hr size='30'></hr>
              {showError()}
              <div className='col-md-6'>
                <h3 id='frame' style={{ color: '#666666' }}>
                  {style},{size}
                </h3>
                <img src={image} className='upload-image' alt='-' id='upload-image' />
                <input
                  type='file'
                  accept='image/*'
                  className=''
                  onChange={handleChange}
                />
              </div>
              {/*              <div className='col-md-6'>
                <h3>Custom Size</h3>
                <input
                  type='number'
                  class='form-control'
                  name='width'
                  id='width'
                  placeholder='18 inch Width'
                  onChange={calculatePrice}
                />
                <input
                  type='number'
                  class='form-control'
                  name='height'
                  id='height'
                  placeholder='12 inch height'
                  onChange={calculatePrice}
                />*/}

              <h2>Select Style</h2>

              <select className='list-group' id='style' onChange={handleChangeStyle}>
                {styles.map((p, i) => (
                  <option value={p.value} id={p.value} className={p.price}>
                    {p.value}
                    &nbsp;&nbsp;&nbsp; ₹{p.price}
                  </option>
                ))}
              </select>

              <h2>Select Size</h2>

              <select
                className='list-group'
                id='size'
                value={size}
                onChange={handleChangeSize}>
                {sizes.map((p, i) => (
                  <option className={p.price} id={p.value} value={p.value}>
                    {p.value}
                    &nbsp;&nbsp;&nbsp; ₹{p.price}
                  </option>
                ))}
              </select>

              <h2>Price: {stylePrice * sizePrice}</h2>
              {showAddtoCartButton()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
