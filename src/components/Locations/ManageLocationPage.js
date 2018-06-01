import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LocationForm from './LocationForm';

import {actions as locationActions} from '../../duckes/locations';

import {getElementByID} from '../../utils';

class ManageLocationPage extends Component {

    constructor(props) {

        super(props);
        
        //Init state
        this.state = { 
            'location' : Object.assign({},this.props.location),
            'errors':{}
         }

        //Bind functions
        this.saveLocation=this.saveLocation.bind(this);
        this.updateLocationState=this.updateLocationState.bind(this);
    
    }

    updateLocationState(event){
        const field = event.target.name;
        let location = Object.assign({},this.state.location);
        location[field]=event.target.value;
        return this.setState({location:location});
    }


    saveLocation(event){
        event.preventDefault();
        const { createLocation, updateLocation}=this.props.actions;
        // const {id}=this.props.match.params;
        const {location}=this.state;
        ( location.id === '' ? createLocation(location) : updateLocation(location) );
        this.props.history.push('/locations');
    }

    //Render
    render(){
        const categoriesForSelect=this.props.categories.map(c => { return {text:c.name, value:c.name}; });
        return (
            
            <LocationForm
                location={this.state.location}
                categories={categoriesForSelect}
                onChange={this.updateLocationState}
                onSave={this.saveLocation}
                errors={this.state.errors}/>
        )
    }

}

//Prop Types validation
ManageLocationPage.propTypes={
    location: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = ({locations, categories}, ownProps) => {
    let location={id:'',name:'', address:'', coordinates:'', category:''};
    return {
        location : getElementByID(locations, ownProps.match.params.id) || location,
        categories : categories
    };

};

const mapDispatchToProps = (dispatch) => {

    return { 
                'actions': bindActionCreators(locationActions, dispatch)
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageLocationPage);