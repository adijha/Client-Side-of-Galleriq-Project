import React, { Fragment } from 'react';

export default function calatog() {
  return (
    <Fragment>
    
    <div className="row canvas top-banner">
      <div className="col-sm-6"></div>
      <div className="col-sm-6">
        <h1 className="canvas-heading">Single Canvas Prints</h1>
        <p className="canvas-paragaraph" style={{ marginBottom: 100 }}>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br />
          Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
    </div>
    <div className="container">
      <h2>Hover Rows</h2>
      <p>The .table-hover class enables a hover state on table rows:</p>
      <form action>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <div className="row" style={{ margin: 20 }}>
      <div className="col-sm-12">
        <h3 className="center">EXPLORE MORE CATEGORIES</h3>
      </div>
      <div className="col-sm-6 cat-galary">
        <img className="banner-img" src={require('../images/banner-image-1.png')} alt />
      </div>
      <div className="col-sm-6 cat-galary">
        <h4 className>Canvas Collages</h4>
        <p className>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br />
          Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        <p className>
          <a href="#" className="btn btn-warning" role="button">
            Get Started Now
          </a>
        </p>
      </div>
      <div className="col-sm-6 cat-galary right">
        <h4 className>Canvas Collages</h4>
        <p className>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br />
          Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        <p className>
          <a href="#" className="btn btn-warning" role="button">
            Get Started Now
          </a>
        </p>
      </div>
      <div className="col-sm-6 cat-galary">
        <img className="banner-img" src={require('../images/banner-image-2.png')} alt />
      </div>
      <div className="col-sm-6 cat-galary">
        <img className="banner-img" src={require('../images/banner-image-1.png')} alt />
      </div>
      <div className="col-sm-6 cat-galary">
        <h4 className>Canvas Collages</h4>
        <p className>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br />
          Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        <p className>
          <a href="#" className="btn btn-warning" role="button">
            Get Started Now
          </a>
        </p>
      </div>
      <div className="col-sm-6 cat-galary right">
        <h4 className>Canvas Collages</h4>
        <p className>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br />
          Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        <p className>
          <a href="#" className="btn btn-warning" role="button">
            Get Started Now
          </a>
        </p>
      </div>
      <div className="col-sm-6 cat-galary">
        <img className="banner-img" src={require('../images/banner-image-4.png')} alt />
      </div>
      <div className="col-sm-6 cat-galary">
        <img className="banner-img" src={require('../images/banner-image-5.png')} alt />
      </div>
      <div className="col-sm-6 cat-galary">
        <h4 className>Canvas Collages</h4>
        <p className>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br />
          Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        <p className>
          <a href="#" className="btn btn-warning" role="button">
            Get Started Now
          </a>
        </p>
        </div>
        </div>
      </Fragment>
  
    
  )
}
