import React from 'react';
import {Link} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const CategoryRow = ({category, type, action, icon}) => {

    const {id, name}=category;
   
    return (
        <tr>
            <th scope="row">{name}</th>
            <td>
                <Link to={`${type}/${action}/${id}`}>
                    <CSSTransition 
                        timeout={500}
                        in={icon !== ''}
                        classNames={'message'}
                        mountOnEnter
                        unmountOnExit
                    >

                        <button className="btn btn-default btn-circle help-block">
                            <i className={`${icon}`} />
                        </button>
                    
                    </CSSTransition>
                </Link>
            </td>
        </tr>
    )
}

export default CategoryRow;