import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CategoryDetails from './CategoryDetails';
import {getElementByID} from '../../utils';

class ViewCategoryPage extends Component {

    //Render
    render(){

        return (

            <CategoryDetails category={this.props.category} title="Category Details"/>

        )
    }

}

//Prop Types validation
ViewCategoryPage.propTypes={
    category: PropTypes.object.isRequired,
    locations: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
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
                
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategoryPage);