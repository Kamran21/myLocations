import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
// import IconicBtnNav from "./IconicBtnNav";
import LocationsPage from "../Locations/LocationsPage";
import PageNotFound from "../404/PageNotFound";
import CategoriesPage from "../Categories/CategoriesPage";
import ManageLocationPage from "../Locations/ManageLocationPage";
import ManageCategoryPage from "../Categories/ManageCategoryPage";
import DeleteCategoryPage from "../Categories/DeleteCategoryPage";
import ViewCategoryPage from "../Categories/ViewCategoryPage";
import ViewLocationPage from "../Locations/ViewLocationPage";
import DeleteLocationPage from "../Locations/DeleteLocationPage";
// import LocationMapPage from "../Locations/LocationMapPage";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import NavigationMenu from "./NavigationMenu";
import LocationMapsPage from "../Locations/LocationMapsPage";
import Home from "../Home/Home";

// import { Link } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";

// import {connect} from 'react-redux';

const App = ({ location, history }) => {
  return (
    <React.Fragment>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <React.Fragment>
              <div className="content">
                <header className="container-fluid app-header sticky-top">
                  <NavigationMenu loggedIn={true} />

                  <div className="container d-flex align-items-end">
                    {/* <img src={logo} className="app-header__logo img-fluid" alt="logo" /> */}
                    <h1
                      className="text-uppercase clickable"
                      onClick={() => history.push("/")}
                    >
                      My
                      <i className="fa fa-map-marker text-danger" />
                      Locations
                    </h1>
                  </div>
                </header>

                <div className="container">
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames={"trans"}
                      timeout={500}
                    >
                      <Switch location={location}>
                        <Route path="/locations" component={LocationsPage} />
                        <Route
                          path="/location/view/:id"
                          component={ViewLocationPage}
                        />
                        <Route
                          path="/location/delete/:id"
                          component={DeleteLocationPage}
                        />
                        <Route
                          exact
                          path="/location"
                          component={ManageLocationPage}
                        />
                        <Route
                          path="/location/update/:id"
                          component={ManageLocationPage}
                        />
                        <Route
                          path="/location/map/:id"
                          component={LocationMapsPage}
                        />

                        <Route path="/categories" component={CategoriesPage} />
                        <Route
                          path="/category/view/:id"
                          component={ViewCategoryPage}
                        />
                        <Route
                          path="/category/delete/:id"
                          component={DeleteCategoryPage}
                        />
                        <Route
                          exact
                          path="/category"
                          component={ManageCategoryPage}
                        />
                        <Route
                          path="/category/update/:id"
                          component={ManageCategoryPage}
                        />

                        {/* <Redirect exact from="/" to="locations" /> */}

                        <Route component={PageNotFound} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </div>
              </div>

              <footer className="container-fluid app-footer fixed-bottom">
                {/* <IconicBtnNav /> */}
              </footer>
            </React.Fragment>
          )}
        />
      </ScrollToTop>
    </React.Fragment>
  );
};

export default withRouter(App);
