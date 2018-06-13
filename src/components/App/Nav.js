import React from 'react';
import {NavLink} from 'react-router-dom';


const MainNav = () => {
    return (<div className="container d-flex justify-content-center">

        <div className="main-nav-item col-md-3">

            <NavLink to="/locations" activeClassName="active" className="main-nav btn btn-block btn-lg btn-success">

                <i className="fa fa-map-marker fa-3x" /><br />

                <span className="texto_grande">
                       Locations
                </span>

            </NavLink>

        </div>

        <div className="main-nav-item col-md-3">

            <NavLink to="/categories" activeClassName="active" className="main-nav btn btn-block btn-lg btn-primary">

                <i className="fa fa-list-alt fa-3x" /><br />

                <span className="texto_grande">

                    Categories
                </span>

            </NavLink>
        </div>

    </div>);
}
 
export default MainNav;