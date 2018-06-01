import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = ({location, title}) => {

    const {name, address, coordinates, category} = location;
    
    return (
        <div>
            <h3>{title}</h3>
            <div>{name}, {address}, {"(" + coordinates +")"}, {category}</div>
        </div>
    )
}

LocationDetails.propTypes={ 
    location: PropTypes.object.isRequired
};

export default LocationDetails;