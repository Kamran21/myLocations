import React from 'react';
import {Route, Switch, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainNav from './Nav';
import LocationsPage from '../Locations/LocationsPage';
import PageNotFound from '../404/PageNotFound';
import CategoriesPage from '../Categories/CategoriesPage';
import ManageLocationPage from '../Locations/ManageLocationPage';
import ManageCategoryPage from '../Categories/ManageCategoryPage';
import DeleteCategoryPage from '../Categories/DeleteCategoryPage';
import ViewCategoryPage from '../Categories/ViewCategoryPage';
import ViewLocationPage from '../Locations/ViewLocationPage';
import DeleteLocationPage from '../Locations/DeleteLocationPage';
import LocationMapPage from '../Locations/LocationMapPage';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import {connect} from 'react-redux';

const App = ({location}) => {
    return (
      <React.Fragment>
          
          <div className="content">

            <header className="container App-header d-flex">
              <img src={logo} className="App-header__logo" alt="logo" />
              <h1 className="display-4 text-uppercase App-header__title d-flex align-items-center">Welcome To WellDone App</h1> 
            </header>

            <div className="container" >
            
            <TransitionGroup>
              <CSSTransition 
                  key={location.key} 
                  
                  classNames={'trans'}
                  timeout={500}>
                    <Switch location={location}>

                      <Route path='/locations' component={LocationsPage}/>
                      <Route path='/location/view/:id' component={ViewLocationPage}/>
                      <Route path='/location/delete/:id' component={DeleteLocationPage}/>
                      <Route exact path='/location' component={ManageLocationPage}/>
                      <Route path='/location/update/:id' component={ManageLocationPage}/>
                      <Route path='/location/map/:id' component={LocationMapPage}/>

                      <Route path='/categories' component={CategoriesPage}/>
                      <Route path='/category/view/:id' component={ViewCategoryPage}/>
                      <Route path='/category/delete/:id' component={DeleteCategoryPage}/> 
                      <Route exact path='/category' component={ManageCategoryPage}/>
                      <Route path='/category/update/:id' component={ManageCategoryPage}/>

                      <Redirect exact from='/' to='locations'/>
                      
                      <Route component={PageNotFound}/>

                    </Switch>
              </CSSTransition>
            </TransitionGroup>
            </div>

          </div>

          <footer>
            <MainNav/>
          </footer>
          
      </React.Fragment>
    )
  
}

export default withRouter(App);

