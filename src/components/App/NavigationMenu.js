import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './NavigationMenu.css';

class NavigationMenu extends Component {

    constructor(prop){
        super(prop);
        this.state ={
            toggle: true,
            css:''
        }
        this.closeNav = this.closeNav.bind(this);
        this.closeOpen = this.closeNav.bind(this);
        this.navigate = this.navigate.bind(this);
        this.logout = this.logout.bind(this);
    }

    navigate(path){
        alert(`navigate ${path}`);
    }

    logout(){
        alert('logout');
    }

    openNav(){
        this.setState((prevState, props) => {
            // document.querySelector('.overlay').style.width = '100%';
            return {toggle: false, css:'menu-open'};
        });
    }

    closeNav(){ 
        // let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.setState((prevState, props) => {
            // w < 768 && (document.querySelector('.overlay').style.width = '0%');
            return {toggle: true, css:'menu-close'};
        });
    }

    render(){
          
        let logged =this.props.loggedIn ? <React.Fragment>
                                                <div className=" d-flex align-items-center dropdown show">
                                                    <a className="log-in dropdown-toggle m-3" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fa fa-user menu-icon" />

                                                        <span className="menu-text">
                                                            Hello <strong>User</strong>
                                                        </span>
                                                    </a>
                                                
                                                    <div className="dropdown-menu dropdown-menu-right animated zoomIn" aria-labelledby="dropdownMenuLink">

                                                        <a className="dropdown-item dropdown-item-new" onClick={() => this.navigate('profile') }>
                                                            <i className="fa fa-cog menu-icon" />
                                                            <span className="menu-text">
                                                                Profile
                                                            </span>
                                                        </a>

                                                        <a className="dropdown-item dropdown-item-new" onClick={this.logout}>
                                                            <i className="fa fa-sign-out menu-icon" />
                                                            <span className="menu-text">
                                                                Logout
                                                            </span>
                                                        </a>

                                                    </div>
                                                </div>
                                            </React.Fragment> : <NavLink to="/categories" activeClassName="active" className='log-in d-flex align-items-center m-3'>
    
                                                            <i className="fa fa-sign-in menu-icon" />

                                                            <span className="menu-text">
                                                                Log In
                                                            </span>

                                                        </NavLink>

        return (
            <div className='navigation d-flex flex-row-reverse'>
               
                {this.state.toggle && <span href='#' className='menu-item menu-btn' onClick={()=>this.openNav()}>
                                         <i className="fa fa-bars fa-2x"></i>
                                     </span>}
                 

                <div className={`overlay ${this.state.css}`}>
                    
                   
                    
                   

                    <nav className="overlay-content">

                         <span href='#' className='menu-item close-btn' onClick={()=>this.closeNav()}>
                            <i className="fa fa-times fa-2x"></i>
                        </span>
                        
                        <NavLink to="/locations" activeClassName="active" className='menu-item d-flex justify-content-center m-3'>

                            <i className="fa fa-map-marker menu-icon" />

                            <span className="menu-text">
                                Locations
                            </span>

                        </NavLink>

                        <NavLink to="/categories" activeClassName="active" className='menu-item d-flex justify-content-center m-3'>

                            <i className="fa fa-list-alt menu-icon" />

                            <span className="menu-text">
                                Categories
                            </span>

                        </NavLink>

                        {/* { this.props.loggedIn && 
                        
                        <NavLink to="/categories" activeClassName="active" className='menu-item d-flex justify-content-center m-3 hidden-md-down'>

                            <i className="fa fa-sign-out menu-icon" />

                            <span className="menu-text">
                                Logout
                            </span>

                        </NavLink> 

                        } */}

                    </nav>

                </div>

                 {logged}
                
            </div>
        ) 
    }
   
}
 
export default NavigationMenu;