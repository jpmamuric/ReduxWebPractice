import React from 'react';
import { Link } from 'react-router';
require('../../style/container-dish-list.css');

const HomePage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-7 landing-image1"><Link className="btn btn-warning" to="/menu">See Our Menu</Link></div>
        <div className="col-lg-4 col-sm-6 column">
          <div className="landing-image2"><Link className="btn btn-warning" to="/location">Find Us</Link></div>
          <div className="landing-image3"><Link className="btn btn-warning" to="/catering">We Do Catering</Link></div>
        </div>
        <div className="col-lg-12 col-sm-6 time">hours</div>
      </div>
    </div>
  );
}

export default HomePage;
