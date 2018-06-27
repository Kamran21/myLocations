import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({name, label, value, defaultOption, options, error, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select 
                name={name}
                value={value}
                onChange={onChange}
                className="custom-select custom-select-lg mb-3">
                <option value="">{defaultOption}</option>
                {options.map(o => <option value={o.value} key={o.value}>{o.text}</option>)}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

SelectInput.propTypes={
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    defaultOption: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
 
export default SelectInput;