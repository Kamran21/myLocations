import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions as locationActions} from '../../duckes/locations';
import DeleteConfirmationForm from '../common/DeleteConfirmationForm';
import {getElementByID} from '../../utils';
import LocationDetails from './LocationDetails';
import toastr from 'toastr';

class DeleteCategoryPage extends Component {

    constructor(props) {

        super(props);
        
        //Init state
        this.state = { 
            confirm : '',
            errors:{}
         }

        //Bind functions
        this.deleteLocation=this.deleteLocation.bind(this);
        this.updateConfirmationState=this.updateConfirmationState.bind(this);
    }

    updateConfirmationState(event){
        return this.setState({confirm : event.target.value});
    }

    deleteLocation(event){
        event.preventDefault();
        const { match, actions, history} = this.props;
        if(match.params.id){
            actions.deleteLocation(match.params.id);
            toastr.success('location has been deleted');
            history.push('/locations');
        }
    }
        

    //Render
    render(){

        return (
            this.props.location &&
            <div>
                <LocationDetails location={this.props.location} title="Location Details"/>
                <DeleteConfirmationForm 
                    confirm={this.state.confirm}
                    onChange={this.updateConfirmationState}
                    onDelete={this.deleteLocation}
                    errors={this.state.errors}
                    title="Delete Confirmation"/>
            </div>
        )
    }

}

//Prop Types validation
DeleteCategoryPage.propTypes={
    location: PropTypes.object,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};



//Redux connect
const mapStateToProps = ({locations, categories}, ownProps) => {
    return {
        location : getElementByID(locations, ownProps.match.params.id),
        categories : categories
    };

};

const mapDispatchToProps = (dispatch) => {

    return { 
                'actions': bindActionCreators(locationActions, dispatch)
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCategoryPage);