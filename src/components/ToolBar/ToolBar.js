import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import { faEye } from "@fortawesome/fontawesome-free-solid";
// import { faMinus } from "@fortawesome/fontawesome-free-solid";
// import { faUEdit } from "@fortawesome/fontawesome-free-solid";
// import { faUPlus } from "@fortawesome/fontawesome-free-solid";

import './ToolBar.css';


const BarButton = ({config, onClick}) => {
    const {title, disabled, icon, active} = config;
    let css= active ? "toolbar-item rounded active":"toolbar-item rounded";
    return(
                <button name={title} 
                     className={css} 
                     onClick={onClick}
                     disabled={disabled}>
                     {/* <FontAwesomeIcon icon={icon} size="3x"/> */}
                     <i  name={title} className={icon} />
                     &nbsp;</button>
    )
}
//Prop Types validation
BarButton.propTypes={
    config: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
 };

const ToolBar = ({ buttons, onClick, title, path }) => {

    // function addAttr(value, condition, class_to_add){
    //     return (value===condition) ? (' ' + class_to_add) : '';
    // }

    return (
        <div className="toolbar">
            <h2 className="toolbar__title text-center">{title} manager</h2>
            <div className="toolbar__buttons d-flex justify-content-center">
                {/* <button name="delete"
                        className={'toolbar__btn' + (addAttr(action, 'delete', 'toolbar__btn--active')) + addAttr(!!editable,false,'toolbar__btn--disabled')} 
                        onClick={onClick} disabled={addAttr(!!editable,false,'disabled')}>-</button> */}
                { Object.keys(buttons).map((b, index) => <BarButton config={buttons[b]} onClick={onClick} key={index}/>) }
                <NavLink to={path} activeClassName="nav__link--active" className='nav__link'>
                    <button className="">
                        {/* <FontAwesomeIcon icon="plus" size="3x"/> */}
                        <i className="fa fa-plus" />
                    </button>
                </NavLink>
            </div>
        </div>
    );

}

//Prop Types validation
ToolBar.propTypes={
   buttons: PropTypes.object.isRequired,
   onClick: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
   path: PropTypes.string.isRequired
};

export default ToolBar;