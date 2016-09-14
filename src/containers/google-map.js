import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class SimpleMap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      markers: [{
        position: {
          lat: 34.0695798,
          lng: -118.2920206
          },
          key: `Pampanga_Master_Grill`
      }],
    };
  }

  render() {
    return (
      <div className="map">
        <GoogleMapLoader
          query={{ libraries: "geometry,drawing,places,visualization" }}
          containerElement={
            <div
              style={{
                height: `100%`,
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={15}
              defaultCenter={{ lat: 34.0695798, lng: -118.2920206}}>
              {this.state.markers.map(marker => {
                  const KEY = marker.key;
                  return (
                    <Marker {...marker} key={KEY} ></Marker>
                  );
                })}
            </GoogleMap>
          }
        />
      </div>

    );
  }
}



export default SimpleMap;
