
import React from "react";
// import Loading from "./Loading";
import GoogleMapReact from 'google-map-react';
import apiKey from "../../configureMap";
// import "./MapBox.css";

const Marker = () => <div name="marker"><i className="fa fa-map-marker fa-2x text-danger" /></div>

const MapBox = ({lat,lng, name, address}) => {
    const center = [lat,lng];
    const zoom = 14;
    const text = `${name}, ${address}`;
    return (  
        <div style={{ height: '300px', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={center}
            defaultZoom={zoom}
            >
            <Marker
                lat={lat}
                lng={lng}
                text={text}
            />
            </GoogleMapReact>
      </div>
    );
}
 
export default MapBox;