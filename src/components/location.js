import React from 'react';

import SimpleMap from '../containers/google-map';

const LocationPage = () => {
  return (
    <div>
      <div className="column">
        <h1> Where we are located </h1>
        <h3>Address:</h3><h2>231 S Vermont Ave</h2>
        <h2>Los Angeles, CA 90004</h2>
        <h3>Hours:</h3><h2>7AM - 7PM</h2>
        <h3>Phone Number:</h3><h2>(213) 381- 1180 </h2>
      </div>
      <div className="location-container">
        <SimpleMap />
      </div>
    </div>
  );
}

export default LocationPage;
