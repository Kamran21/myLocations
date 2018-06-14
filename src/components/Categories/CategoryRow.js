import React from 'react';
import {Link} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const CategoryRow = ({category, type, action, icon}) => {

    const {id, name}=category;
   
    return (
        <tr>
            <th scope="row">{name}</th>
            <td className='actions-cell'>
                <Link to={`${type}/${action}/${id}`}>
                    <CSSTransition 
                        timeout={500}
                        in={icon !== ''}
                        classNames={'message'}
                        mountOnEnter
                        unmountOnExit
                    >
                    
                        <div className='item-actions'>
                            <button className="btn btn-teal btn-circle btn-lg help-block">
                                <i className={`${icon}`} />
                            </button>
                        </div>
                    
                    </CSSTransition>
                </Link>
            </td>
        </tr>
    )
}

export default CategoryRow;