import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, value, onChange, error }) => {
  let wrapperClass =
    error && error.length ? "form-group has-errors" : "form-group";
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        className="form-control"
        //    aria-describedby={label+"Help"}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
      {/* <small name={label+"Help"} class="form-text text-muted">{error}</small> */}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
