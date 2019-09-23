import React, { Fragment } from 'react';

import CreateYourPrint from '../components/CreateYourPrint'; 

export default function home() {
  return (
    <Fragment>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <img src={require('../images/banner1.png')} alt="Los Angeles" />
                </div>
                <div className="item">
                  <img src={require('../images/banner1.png')} alt="Chicago" />
                </div>
                <div className="item">
                  <img src={require('../images/banner1.png')} alt="New York" />
                </div>
              </div>
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="row" style={{padding: '20px 0', backgroundColor: '#EFEFEF'}}>
              <div className="col-sm-2" />
              <div className="col-sm-2  second-sec"> 
                <img src={require('../images/shipping.png')} alt="" />
                <div>FREE <br /> SHIPPING</div>
              </div>
              <div className="col-sm-2 second-sec">
                <img src={require('../images/cod.png')} alt="" />
                <div>COD <br /> AVAILABLE</div>
              </div>
              <div className="col-sm-2  second-sec">
                <img src={require('../images/payment.png')} alt="" />
                <div>SECURE <br /> PAYMENT</div>
              </div>
              <div className="col-sm-2  second-sec" style={{borderRight: 'none'}}>
                <img src={require('../images/service.png')} alt="" />
                <div>FRIENDLY <br /> SERVICE</div>
              </div>
              <div className="col-sm-2" />
            </div>
            <div className="row">
              <div className="col-sm-12 center">
                <h2>Choose the perfect material and<br />style for your home</h2>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum<br /> has been the industry's standard dummy text ever since the 1500s,<br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="row" style={{padding: '20px 40px'}}>
              <div className=" col-md-4  col-xs-12">
                <div className="hovereffect">
                  <img className="img-responsive" src={require('../images/sub-1.png')} alt="" />
                  <div className="overlay">
                    <h2>Wall <br />Art</h2>
                    <a className="info" href="#">Explore More</a>
                  </div>
                </div>
              </div>
              <div className=" col-md-4  col-xs-12">
                <div className="hovereffect">
                  <img className="img-responsive" src={require('../images/sub-2.png')} alt="" />
                  <div className="overlay">
                    <h2>Wall <br />Art</h2>
                    <a className="info" href="#">Explore More</a>
                  </div>
                </div>
              </div>
              <div className=" col-md-4  col-xs-12">
                <div className="hovereffect">
                  <img className="img-responsive" src={require('../images/sub-3.png') } alt="" />
                  <div className="overlay">
                    <h2>Wall <br />Art</h2>
                    <a className="info" href="#">Explore More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row canvas">
              <div className="col-sm-8">
                <h1 className="canvas-heading">Create<br />your own<br />Canvas</h1>
                <p className="canvas-paragaraph"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br />Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <p className="canvas-paragaraph"><a href="#" className="btn btn-warning" role="button">Get Started Now</a></p>
              </div>
              <div className="col-sm-4">
              </div>
            </div>
            <div>
              <h3 className="center">shop by collection</h3>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <img className="banner-img" src={require('../images/banner-image-1.png')} alt="" />
                <h4 className="center">Single Canvas Print</h4>
              </div>
              <div className="col-sm-6">
                <img className="banner-img" src={require('../images/banner-image-2.png')}alt="" />
                <h4 className="center">Canvas Collages</h4>
              </div>
              <div className="col-sm-12">
                <img className="banner-img" src={require('../images/banner-image-3.png')} alt="" />
                <h4 className="center">Canvas Split Image</h4>
              </div>
              <div className="col-sm-6">
                <img className="banner-img" src={require('../images/banner-image-4.png')}alt="" />
                <h4 className="center">Floating Frame Canvas</h4>
              </div>
              <div className="col-sm-6">
                <img className="banner-img" src={require('../images/banner-image-5.png')} alt="" />
                <h4 className="center">Large Canvas Print</h4>
              </div>
              <div className="col-sm-12">
                <img className="banner-img" src={require('../images/banner-image-6.png')} alt="" />
                <h4 className="center">Acrylic Premium Prints</h4>
              </div>
            </div>
            <div>
              <h2 className="center">CUSTOMER TESTIMONIAL</h2>
              <div id="myCarousel" className="carousel carousel1  slide" data-ride="carousel">
                <div className="carousel-inner">		
                  <div className="item carousel-item active">
                    <div className="img-box"><img src={require('../images/testimonial.png')} alt="" /></div>
                    <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                    <p className="overview"><b>Michael Holz</b>Seo Analyst at <a href="#">OsCorp Tech.</a></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="item carousel-item">
                    <div className="img-box"><img src={require('../images/testimonial.png')} alt="" /></div>
                    <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                    <p className="overview"><b>Paula Wilson</b>Media Analyst at <a href="#">SkyNet Inc.</a></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="item carousel-item">
              <div className="img-box"><img src={ require('../images/testimonial.png') } alt="" /></div>
                    <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit.</p>
                    <p className="overview"><b>Antonio Moreno</b>Web Developer at <a href="#">Circle Ltd.</a></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                      </ul>
                    </div>
                  </div>		
                </div>
              </div>
            </div>
            <div className="row" style={{paddingBottom: '50px'}}>
              <div className="col-sm-12">
                <img className="banner-img" src={require('../images/bottom-banner.png')} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 center">
                <img src={require('../images/Instagram_icon@1X.png')} alt="" />
                <h2>Galleriq on instagram</h2>
              </div>
              <div className="col-sm-5" />
              <div className="col-sm-2"><hr style={{borderTop: '2px solid rgb(51, 51, 51)', margin: '0px'}} /></div>
              <div className="col-sm-5" />
              <div className="col-sm-12"><div id="instafeed" style={{height: '300px', background: '#c5c8cd', margin: '20px'}} /></div>
            </div>
          </Fragment>

  )
}
