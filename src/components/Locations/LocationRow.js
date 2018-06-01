import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import { faEye } from "@fortawesome/fontawesome-free-solid";
// import { faMinus } from "@fortawesome/fontawesome-free-solid";
// import { faUEdit } from "@fortawesome/fontawesome-free-solid";
// import { faUPlus } from "@fortawesome/fontawesome-free-solid";


const LocationRow = ({location, type, action}) => {
    // debugger;
    const {name, address, coordinates, category}=location;

    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{address}</td>
            <td>{coordinates}</td>
            <td>{category.name}</td>
            <td><Link to={`${type}/${action}/${location.id}`}>{action}</Link></td>
        </tr>
    )
}

LocationRow.prpTypes={
    location: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
}
export default LocationRow;