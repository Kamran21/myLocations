import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({name, label, checked, onChange, error}) => {
    
    return (
        <div className="form-group form-check">
           
            <input type="checkbox"
                   className="form-check-input"
                   name={name}
                   checked={checked}
                   onChange={onChange}/>
            <label className="form-check-label"
                   htmlFor={name}>{label}</label>
        </div>
    )
}

CheckBox.propTypes={
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

export default CheckBox;