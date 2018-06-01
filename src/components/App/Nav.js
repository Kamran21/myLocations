import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import { faMapMarker } from "@fortawesome/fontawesome-free-solid";
// import { faListAlt } from "@fortawesome/fontawesome-free-solid";


class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <ul className="nav nav-pills nav-fill">

                    <li className="nav-item">
                        <NavLink to="/locations" activeClassName="active" className="nav-link d-flex flex-column align-items-center">
                        {/* <FontAwesomeIcon icon="map-marker" size="5x"/> */}
                        <i className="fa fa-map-marker" />
                           Locations
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/categories" activeClassName="active" className="nav-link d-flex flex-column align-items-center">
                        {/* <FontAwesomeIcon icon="list-alt" size="5x"/> */}
                        <i className="fa fa-list-alt" />
                            Categories
                        </NavLink>
                    </li>
                
                </ul>
            </div>
        );
    }
}
 
export default MainNav;