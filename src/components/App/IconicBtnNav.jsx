import React from 'react';
import {NavLink} from 'react-router-dom';
import './iconicBtnNav.css';


const IconicBtnNav = () => {
    return (<div className="container d-flex justify-content-center">

        <div className="main-nav-item mx-2 btn">

            <NavLink to="/locations" activeClassName="active" className="main-nav btn-block btn-md">

                <i className="fa fa-map-marker fa-3x text-danger" /><br />

                <span className="texto_grande">
                       Locations
                </span>

            </NavLink>

        </div>

        <div className="main-nav-item mx-2 btn">

            <NavLink to="/categories" activeClassName="active" className="main-nav btn-block btn-md">

                <i className="fa fa-list-alt fa-3x" /><br />

                <span className="texto_grande">

                    Categories
                </span>

            </NavLink>
        </div>

    </div>);
}
 
export default IconicBtnNav;