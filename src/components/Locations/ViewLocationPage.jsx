import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getElementByID } from "../../utils";
import LocationDetails from "./LocationDetails";

class ViewLocationPage extends Component {
  //Render
  render() {
    return (
      <LocationDetails
        location={this.props.location}
        title="Location Details"
      />
    );
  }
}

//Prop Types validation
ViewLocationPage.propTypes = {
  location: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
};

//Redux connect
const mapStateToProps = ({ locations, categories }, ownProps) => {
  return {
    location: getElementByID(locations, ownProps.match.params.id),
    locations: locations,
    categories: categories
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLocationPage);
