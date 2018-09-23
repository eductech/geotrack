import React from "react";
import GoogleMapReact from "google-map-react";

import Marker from './Marker';

const Map = () => {
  const center = {lat: 37.871853, lng: -122.258423};
  return (
    <section className="map map_card">
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={17}
        bootstrapURLKeys={{
          key: 'AIzaSyAppfV9gDO9J6pC0ERZn2dWGLIJqkKI9Vw',
          language: 'en',
          region: 'en'
        }}
      >
        <Marker 
          lat={center.lat} 
          lng={center.lng}
        />
      </GoogleMapReact>
    </section>
  );
}

export default Map;
