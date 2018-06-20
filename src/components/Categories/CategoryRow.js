import React from 'react';
import {Link} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const CategoryRow = ({category, type, action, icon}) => {

    const {id, name}=category;
    // let button=null;
    // switch ({icon}) {
    //     case 'fa fa-edit':

    //         button=<div className='item-actions'>
    //             <button className="btn btn-main btn-circle btn-lg help-block">
    //                 <i className={`${icon}`} />
    //             </button>
    //         </div>;
            
    //         break;
        
    //     case 'fa fa-minus':

    //         button=<div className='item-actions'>
    //             <button className="btn btn-main btn-circle btn-lg help-block">
    //                 <i className={`${icon}`} />
    //             </button>
    //         </div>;
            
    //         break;
        
    //     case 'fa fa-plus':

    //         button=<div className='item-actions'>
    //             <button className="btn btn-main btn-circle btn-lg help-block">
    //                 <i className={`${icon}`} />
    //             </button>
    //         </div>;
            
    //         break;
        
    
    //     default:
    //         break;
    // }
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
                            <button className="btn btn-main btn-circle btn-lg help-block">
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