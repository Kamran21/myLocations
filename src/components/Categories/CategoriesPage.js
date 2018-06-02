import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import * as utils from '../../utils';
import CategoriesTable from './CategoriesTable';
import ToolBar from '../ToolBar/ToolBar';

/*

    const Massages = ({categoriesSize, locationSize, filteredSize}) => {
        let messages;
        if(categoriesSize === 0 && locationSize === 0)
            messages='Categories and Locations lists are empty, Create a category to be able to manage locations';
        else if(categoriesSize === 0 && locationSize > 0)
            messages='You can View and Delete locations, Create a category to be able to Update and Add locations';
        else if(locationSize === 0)
            messages='No locations yet';
        else if(filteredSize === 0)
            messages='There is no locations with the filters applied';

        return (
            <div>
            {messages}
            </div>
        )
    }

*/


class LocationsPage extends Component {

    constructor(props) {

        super(props);
        
        this.state = { toolbar:{
                                "view":{title:"view", icon:"fa fa-eye", active:true, disabled:false},
                                "delete":{title:"delete",icon:"fa fa-minus", active:false, disabled:false},
                                "update":{title:"update",icon:"fa fa-edit",active:false, disabled:false}
                            },
                        action:'view',
                        filters:{categories:null },
                        sort:{'dir':'no','icon':'fa fa-sort'}
                    };

        //Bind functions
        this.updateToolBarState=this.updateToolBarState.bind(this);
        this.updateFiltersState=this.updateFiltersState.bind(this);
        this.updateSortState=this.updateSortState.bind(this);
    }

    updateToolBarState(event){
        event.preventDefault();
        const target = event.target;
        let name = target.name || target.attributes.name.value;
        let buttons={...this.state.toolbar};
        Object.keys(buttons).forEach(key => {if(key !== name)  buttons[key].active=false;});//reset active 
        buttons[name].active= !buttons[name].active;
        name=buttons[name].active ? name : '';
        this.setState({'toolbar':buttons, action:name});
    }

    updateFiltersState(event) {
       
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({'filters': { [name]: value } });
    }

    updateSortState(event) {
        let prop=event.target.attributes.name.value;
        const {categories} = this.props;
        const {filters}=this.state;
        if(categories.length>1){

            switch (this.state.sort.dir) {
                case 'asc':
                    filters['categories'] = utils.sortFunc(filters.categories || categories, prop, 'desc');
                    this.setState({sort:{'dir':'desc','icon':'fa fa-sort-up'}, filters:filters});//'fa fa-sort-amount-down'
                    break;
                case 'desc':
                    filters['categories'] = filters.categories || categories;
                    this.setState({'sort':{'dir':'no','icon':'fa fa-sort'}, filters:filters});//'fa fa-arrows-alt-v'
                    break;             
                default:
                    filters['categories'] = utils.sortFunc(filters.categories || categories, prop, 'asc');
                    this.setState({'sort':{'dir':'asc','icon':'fa fa-sort-down'}, filters: filters});//'fa fa-sort-amount-up'
                    break;
            }
        }

    }

    getIcon(toolbar,action){
        return action === '' ? '' : toolbar[action].icon;
    }
    //Render
    render(){
        let {categories} = this.props;
        const { action, sort, filters, toolbar } = this.state;
        categories = filters.categories || categories;
        return (
            
            <div>
               {/* <Massages categoriesSize={categoriesSize} locationSize={locationSize} filteredSize={locations.length} /> */}
               <ToolBar buttons={this.state.toolbar} title="Categories" onClick={this.updateToolBarState} path="/category" />
               <CategoriesTable categories={categories} onClick={this.updateSortState} sort={sort} action={action} icon={this.getIcon(toolbar, action)}/>
           </div> 
        )
    }

}

//Prop Types validation
LocationsPage.propTypes={
    categories: PropTypes.array.isRequired
};


//Redux connect
const mapStateToProps = ({categories}, ownProps) => {

    return {
        categories: categories
    };

};

const mapDispatchToProps = (dispatch) => {

    return { 
                
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);