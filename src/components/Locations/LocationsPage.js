import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LocationsTable from './LocationsTable';
import FiltersForm from './FiltersForm';
import * as utils from '../../utils';
import ToolBar from '../ToolBar/ToolBar';
import './LocationsPage.css';

class LocationsPage extends Component {

    constructor(props) {

        super(props);
        
        //Init state
        //icons as fa-eye, as fa-minus, as fa-edit, as fa-plus, fas fa-map-marker
        this.state = { toolbar:{
                                "view":{title:"view", icon:"fa fa-eye", active:true, disabled:false},
                                "delete":{title:"delete",icon:"fa fa-minus", active:false, disabled:false},
                                "update":{title:"update",icon:"fa fa-edit",active:false, disabled:false}
                               },
                        action:'view',
                        filters:{'group':false, 'filter':'select', locations:null },
                        sort:{'dir':'no','icon':'fa fa-sort'},
                        toggle:false
                     };

        //Bind functions
        this.updateToolBarState=this.updateToolBarState.bind(this);
        this.updateFiltersState=this.updateFiltersState.bind(this);
        this.updateSortState=this.updateSortState.bind(this);
        this.onRowClick=this.onRowClick.bind(this);
    }


    updateToolBarState(event){
        event.preventDefault();
        const target = event.target;
        let name = target.name || target.attributes.name.value;
        let buttons={...this.state.toolbar};
        Object.keys(buttons).forEach(key => {if(key !== name)  buttons[key].active=false;});//reset active 
        buttons[name].active= !buttons[name].active;
        name=buttons[name].active ? name : '';
        this.setState({'toolbar':buttons, action:name, toggle:false})
    }

    updateFiltersState(event) {
       
        const {locations} = this.props;
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let filters={...this.state.filters};
        filters[name]=value;
        console.log(utils.filterFunc);
        filters['locations'] = (name === 'group' && value=== true) ? 
                                    utils.sortAndGroupByFunc(filters.locations || locations,'category.name','name', this.state.sort.dir):
                                    utils.filterFunc(locations, 'category','name', filters.filter);

        // filters['locations'] = (name === 'group' && value=== true) ? 
        //                             utils.sortAndGroupByFunc(filters.locations || locations,'category','name', this.state.sort.dir):
        //                             utils.filterFunc(locations, 'category', filters.filter);

        this.setState({'filters': filters});
    }

    updateSortState(event) {
        let prop=event.target.attributes.name.value;
        const {locations} = this.props;
        const {filters}=this.state;
        if(locations.length>1){

            switch (this.state.sort.dir) {
                case 'asc':
                    filters['locations'] = utils.sortFunc(filters.locations || locations, prop, 'desc');
                    this.setState({sort:{'dir':'desc','icon':'fa fa-sort-up'}, filters:filters});//'fa fa-sort-amount-down'
                    break;
                case 'desc':
                    filters['locations'] = filters.locations || locations;
                    this.setState({'sort':{'dir':'no','icon':'fa fa-sort'}, filters:filters});//'fa fa-arrows-alt-v'
                    break;             
                default:
                    filters['locations'] = utils.sortFunc(filters.locations || locations, prop, 'asc');
                    this.setState({'sort':{'dir':'asc','icon':'fa fa-sort-down'}, filters: filters});//'fa fa-sort-amount-up'
                    break;
            }
        }

    }

    onRowClick(){
        // let {toggle}=this.state;
        this.setState(({toggle})=>{
            // enable vibration support
            navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

            if (navigator.vibrate) { // vibration API supported
                // alert('vibrate', navigator.vibrate);
                navigator.vibrate(1000);
            }
            return {'toggle':!toggle};
        });

    }

    getIcon(toolbar,action){
        return action === '' ? '' : toolbar[action].icon;
    }
    //Render
    render(){
        let { categories, locations} = this.props;
        const { action, filters, sort, toolbar, toggle } = this.state;
        locations= filters.locations || locations;
        return (
            
            <div>
               <ToolBar buttons={toolbar} title="Locations" onClick={this.updateToolBarState} path="/location"/>
               <FiltersForm categories={categories} onChange={this.updateFiltersState} filters={filters}/>
               <LocationsTable locations={locations} onClick={this.updateSortState} sort={sort} action={action} icon={this.getIcon(toolbar, action)} onRowClick={this.onRowClick} toggle={toggle}/>
               
           </div> 
        )
    }

}

//Prop Types validation
LocationsPage.propTypes={
    locations: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
};


//Redux connect
const mapStateToProps = ({locations, categories, filters}, ownProps) => {

    return {
        locations: locations,
        categories: categories

    };

};

const mapDispatchToProps = (dispatch) => {

    return { 
                // 'actions': bindActionCreators(filterActions, dispatch)
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);