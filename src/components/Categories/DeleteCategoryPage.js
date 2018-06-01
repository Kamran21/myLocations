import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {actions as categoryActions} from '../../duckes/categories';
import CategoryDetails from './CategoryDetails';
import DeleteConfirmationForm from '../common/DeleteConfirmationForm';

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
        this.deleteCategory=this.deleteCategory.bind(this);
        this.updateConfirmationState=this.updateConfirmationState.bind(this);
    }

    updateConfirmationState(event){
        return this.setState({confirm : event.target.value});
    }

    deleteCategory(event){
        event.preventDefault();
        const { match, actions, history} = this.props;
        actions.deleteCategory(match.params.id)
        history.push('/categories');
    }

    //Render
    render(){

        return (
            <div>
                <CategoryDetails category={this.props.category} title="Category Details"/>
                <DeleteConfirmationForm 
                    confirm={this.state.confirm}
                    onChange={this.updateConfirmationState}
                    onDelete={this.deleteCategory}
                    errors={this.state.errors}
                    title="Delete Confirmation"/>
            </div>
        )
    }

}

//Prop Types validation
DeleteCategoryPage.propTypes={
    category: PropTypes.object.isRequired,
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