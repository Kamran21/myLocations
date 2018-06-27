import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const LocationForm = ({
  location,
  categories,
  onSave,
  onChange,
  loading,
  errors
}) => {
  const { name, address, coordinates, category } = location;
  return (
    <form onSubmit={onSave}>
      <h3 className="my-5 text-capitalize">Manage Location</h3>
      {/* {errors && <p className="alert alert-danger">{errors}</p>} */}
      <TextInput
        name="name"
        label="Name"
        value={name}
        onChange={onChange}
        error={errors.name}
      />
      <TextInput
        name="address"
        label="Address"
        value={address}
        onChange={onChange}
        error={errors.address}
      />
      <TextInput
        name="coordinates"
        label="Coordinates"
        value={coordinates}
        onChange={onChange}
        error={errors.coordinates}
      />
      <SelectInput
        name="category"
        label="Categories"
        value={category.name}
        defaultOption="-select-"
        options={categories}
        onChange={onChange}
      />
      <button
        type="submit"
        disabled={
          name === "" ||
          address === "" ||
          coordinates === "" ||
          category.name === "" ||
          category.name === "select"
        }
        className="btn btn-primary"
      >
        Save
      </button>
    </form>
  );
};

LocationForm.propTypes = {
  location: PropTypes.object.isRequired,
  categories: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default LocationForm;
