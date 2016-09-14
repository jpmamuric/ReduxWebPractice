import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      <h1> OOPS! Error this page does not exist </h1>
      <Link className="btn" to="/" ><button className="btn btn-primary">back to HomePage</button></Link>
    </div>
  );
}

export default ErrorPage;
