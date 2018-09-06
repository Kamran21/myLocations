import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getElementByID } from "../../utils";
import MapBox from "../common/GoogleMapReact";
import Loading from "../common/Loading";

class LocationMapPage extends Component {

  render() {
    let {latLng,name,address} = this.props.location;
    return (
        <MapBox lat={latLng.lat} lng={latLng.lng} name={name} address={address}/>
    )
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
