//ManageCategoryPage

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {actions as categoryActions} from '../../duckes/categories';
import CategoryForm from './CategoryForm';

import {getElementByID} from '../../utils';

class ManageCategoryPage extends Component {

    constructor(props) {

        super(props);
        
        //Init state
        this.state = { 
            'category' : Object.assign({},this.props.category),
            'errors':{}
         }

        //Bind functions
        this.saveCategory=this.saveCategory.bind(this);
        this.updateCategoryState=this.updateCategoryState.bind(this);
        this.categoryExists=this.categoryExists.bind(this);
    }

    updateCategoryState(event){
        const field = event.target.name;
        let category = Object.assign({},this.state.category);
        category[field]=event.target.value;
        return this.setState({category:category});
    }

    categoryExists(category){
        return this.props.categories.filter(c => c.name === category.name).length > 0;
    }

    saveCategory(event){
        event.preventDefault();
        const {category}=this.state;
        if(this.categoryExists(category)){
            this.setState({errors:{'name':"This category allready exist!"}})
        } else {
            const { createCategory, updateCategory}=this.props.actions;
            ( category.id === '' ? createCategory(category) : updateCategory(category) );
            this.props.history.push('/categories');
        }
    }

    //Render
    render(){

        return (
            
            <CategoryForm 
                category={this.state.category}
                locations={this.props.locations}
                onChange={this.updateCategoryState}
                onSave={this.saveCategory}
                errors={this.state.errors}/>
        )
    }

}

//Prop Types validation
ManageCategoryPage.propTypes={
    category: PropTypes.object.isRequired,
    locations: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = ({locations, categories}, ownProps) => {
    let category={id:'', name:''};
    return {
        category : getElementByID(categories, ownProps.match.params.id) || category,
        locations : locations,
        categories : categories
    };

};

const mapDispatchToProps = (dispatch) => {

    return { 
                'actions': bindActionCreators(categoryActions, dispatch)
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategoryPage);