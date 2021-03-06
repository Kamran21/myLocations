import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ location, title }) => {
  const { name, address, categories } = location;

  return (
    <div>
      <h3 className="my-5 text-capitalize">{title}</h3>
      <div>
        {name}, {address}
        <div>{categories.map(c=>`${c.name} `)}</div>
      </div>
    </div>
  );
};

LocationDetails.propTypes = {
  title: PropTypes.string,
  location: PropTypes.object.isRequired
};

export default LocationDetails;
