import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';



const LocationRow = ({location, type, action, icon}) => {
    // debugger;
    const {name, address, coordinates, category}=location;

    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{address}</td>
            <td>{coordinates}</td>
            <td>{category.name}</td>
            <td><Link to={`${type}/${action}/${location.id}`}><i className={icon} /></Link></td>
        </tr>
    )
}

LocationRow.prpTypes={
    location: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
}
export default LocationRow;