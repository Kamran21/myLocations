import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {actions as categoryActions} from '../../duckes/locations';
import DeleteConfirmationForm from '../common/DeleteConfirmationForm';
import CategoryDetails from '../Categories/CategoryDetails';

import {getElementByID} from '../../utils';

class DeleteCategoryPage extends Component {

    constructor(props) {

        super(props);
        
        //Init state
        this.state = { 
            confirm : null,
            'errors':{}
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
        actions.deleteLocation(match.params.id)
        history.push('/locations');
    }

    //Render
    render(){

        return (
            <div>
                <CategoryDetails category={this.props.category} title="Location Details"/>
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
    locations: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};



//Redux connect
const mapStateToProps = ({locations, categories}, ownProps) => {
    return {
        category : getElementByID(categories, ownProps.match.params.id),
        locations : locations,
        categories : categories
    };

};

const mapDispatchToProps = (dispatch) => {

    return { 
                'actions': bindActionCreators(categoryActions, dispatch)
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCategoryPage);