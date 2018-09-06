import React from "react";
import Loading from "./Loading";

import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import apiKey from "../../configureMap";
import "./MapBox.css";

const MapBox = ({
  google,
  onMapClick,
  onMarkerClick,
  point,
  activeMarker,
  showingInfoWindow,
  location,
  style,
  markers
}) => {
  const drawMarker = (m, index) => {
    return <Marker onClick={onMarkerClick} {...m} key={index} />;
  };

  return (
    <div
      className="googleMapsReact"
      style={{ overflow: "hidden", height: "64vh" }}
    >
      <Map
        // item
        // xs = { 12 }
        style={style}
        google={google}
        onClick={onMapClick}
        zoom={15}
        // initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
        initialCenter={point}
      >
        {markers.map(drawMarker)}

        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <div className="InfoWindow">
            <h5>{location.name + ", " + location.address}</h5>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

const LoadingContainer = props => <Loading />;

export default GoogleApiWrapper({
  apiKey: apiKey,
  LoadingContainer: LoadingContainer
})(MapBox);
