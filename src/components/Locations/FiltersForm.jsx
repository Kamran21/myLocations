import React from "react";
import PropTypes from "prop-types";
import CheckBox from "../common/CheckBox";
import SelectInput from "../common/SelectInput";
import "./FiltersForm.css";

const FiltersForm = ({ categories, onChange, filters }) => {
  const categoriesForSelect = categories.map(c => {
    return { text: c.name, value: c.name };
  });
  return (
    <form className="form-inline filters d-flex justify-content-center my-3">
      <SelectInput
        name="filter"
        label="Filter"
        value={filters.filter}
        defaultOption="-select-"
        options={categoriesForSelect}
        onChange={onChange}
      />

      <CheckBox
        name="group"
        label="Group by"
        checked={filters.group}
        onChange={onChange}
      />
    </form>
  );
};

FiltersForm.propTypes = {
  categories: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired
};

export default FiltersForm;
