import React from 'react';
import {Link} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const CategoryRow = ({category, type, action, icon}) => {

    const {id, name}=category;
    return (
        <tr>
            <th scope="row"><span>{name}</span></th>
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
                            {/* <button className="btn btn-main btn-circle btn-md help-block"> */}
                            <button className="btn btn-main btn-circle btn-md">
                                <i className={`${icon}`} />
                            </button>
                        </div>
                        {/* {button} */}
                   
                    </CSSTransition>
                </Link>
            </td>
        </tr>
    )
}

export default CategoryRow;