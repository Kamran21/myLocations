import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getElementByID } from "../../utils";
import MapBox from "../common/GoogleMapsReact";
import Loading from "../common/Loading";

class LocationMapPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},
      centerAroundCurrentLocation: false,
      point: null,
      markers: []
    };

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount() {
    if (this.state.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        this._asyncRequest = navigator.geolocation.getCurrentPosition(pos => {
          this._asyncRequest = null;
          if (pos) {
            const coords = pos.coords;
            const point = { lat: coords.latitude, lng: coords.longitude };
            this.setState({ point, markers: [point], activeMarker: point });
          }
        });
      }
    } else {
      const { latLng } = this.props.location;
      const point = { ...latLng};
      this.setState({ point, markers: [point], activeMarker: point });
    }
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    const { point, activeMarker, markers, showingInfoWindow } = this.state;

    let elem = null;

    if (point === null) {
      // Render loading state ...
      // elem = <div>loading...</div>;
      elem = <Loading/>
    } else {
      elem = (
        <MapBox
          onMapClick={this.onMapClick}
          onMarkerClick={this.onMarkerClick}
          point={point}
          activeMarker={activeMarker}
          showingInfoWindow={showingInfoWindow}
          location={this.props.location}
          style={{ width: "100%", height: "100%", position: "relative" }}
          markers={markers}
        />
      );
    }

    return <React.Fragment>{elem}</React.Fragment>;
  }
}

//Prop Types validation
LocationMapPage.propTypes = {
  location: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = ({ locations, categories }, ownProps) => {
  return {
    location: getElementByID(locations, ownProps.match.params.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationMapPage);
