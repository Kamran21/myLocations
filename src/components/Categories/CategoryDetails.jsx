import React from "react";
import PropTypes from "prop-types";

const CategoryDetails = ({ category, title }) => {
  const { name } = category;

  return (
    <div>
      <h3 className="my-5 text-capitalize">{title}</h3>
      <div>{name}</div>
    </div>
  );
};

CategoryDetails.propTypes = {
  title: PropTypes.string,
  category: PropTypes.object.isRequired
};

export default CategoryDetails;
