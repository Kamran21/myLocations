import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';
import './ToolBar.css';


const BarButton = ({config, onClick}) => {
    const {title, disabled, icon, active} = config;
    let css = 'btn btn-default btn-circle btn-lg';
    css= active ? `${css} active`: css;
    return(
                <button name={title} 
                     className={css} 
                     onClick={onClick}
                     disabled={disabled}>
                     <i name={title} className={icon} />
                     </button>
    )
}
//Prop Types validation
BarButton.propTypes={
    config: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
 };

const ToolBar = ({ buttons, onClick, title, path }) => {

    return (
        <div className="toolbar animated bounceInDown">
            <h3 className="toolbar__title text-center my-5 text-capitalize">{title} manager</h3>
            <div className="toolbar__buttons d-flex justify-content-center">
              
                { Object.keys(buttons).map((b, index) => <BarButton config={buttons[b]} onClick={onClick} key={index}/>) }
                <NavLink to={path} activeClassName="nav__link--active" className='nav__link'>
                    <button className="btn btn-default btn-circle btn-lg">
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