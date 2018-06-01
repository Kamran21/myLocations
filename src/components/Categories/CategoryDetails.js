import React from 'react';
import PropTypes from 'prop-types';

const CategoryDetails = ({category, title}) => {

    const {name} = category;
    
    return (
        <div>
            <h3>{title}</h3>
            <div>{name}</div>
        </div>
    )
}

CategoryDetails.propTypes={ 
    category: PropTypes.object.isRequired
};

export default CategoryDetails;