import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ location, title }) => {
  const { name, address, coordinates, category } = location;

  return (
    <div>
      <h3 className="my-5 text-capitalize">{title}</h3>
      <div>
        {name}, {address}, {"(" + coordinates + ")"}, {category.name}
      </div>
    </div>
  );
};

LocationDetails.propTypes = {
  title: PropTypes.string,
  location: PropTypes.object.isRequired
};

export default LocationDetails;
