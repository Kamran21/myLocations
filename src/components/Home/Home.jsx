import React from 'react';

const Home = ({history}) => {
    return ( 
        <div className="vh-100 app-header d-flex justify-Content-center align-items-center text-center">
            <div className="container">
                <h1 className="text-uppercase">
                    My<i className="fa fa-map-marker text-danger" />Locations 
                </h1>
                <div className="btn btn-outline-light" onClick={( )=> history.push('/locations')}>Go..</div>
            </div>
        </div>
     );
}
 
export default Home;