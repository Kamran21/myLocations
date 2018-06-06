import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';



const LocationRow = ({location, type, action, icon, onRowClick, toggle}) => {
    // debugger;
    const {id, name, address, coordinates, category}=location;
    let icons = (toggle === true) ? 
    (<div>
        <Link to={`${type}/map/${id}`}><i className="fa fa-map-marker" /></Link>
        <Link to={`${type}/view/${id}`}><i className="fa fa-eye" /></Link> 
    </div>) :
    (<Link to={`${type}/${action}/${id}`}><i className={icon} /></Link> );
    return (
        <tr onClick={onRowClick}>
            <th scope="row">{name}</th>
            <td>{address}</td>
            <td>{coordinates}</td>
            <td>{category.name}</td>
            <td>{icons}</td>
        </tr>
    )
}

LocationRow.prpTypes={
    location: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
}
export default LocationRow;