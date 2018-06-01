import React from 'react';
import {Link} from 'react-router-dom';

const CategoryRow = ({category, type, action}) => {
    // debugger;
    const {id, name}=category;

    return (
        <tr>
            <th scope="row">{name}</th>
            <td><Link to={`${type}/${action}/${id}`}>{action}</Link></td>
        </tr>
    )
}

export default CategoryRow;