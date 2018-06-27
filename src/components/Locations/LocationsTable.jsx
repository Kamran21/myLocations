import React from 'react';
import PropTyps from 'prop-types';
import LocationRow from "./LocationRow";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const LocationsTable = ({locations, categories, action, onClick, sort, icon, onRowClick, toggle}) => {

    const rowItem=(location, index) => {
        return (
                <CSSTransition key={location.id} classNames={{
                            enter:"animated",
                            enterActive:"fade",
                            exit:"animated",
                            extActive:"fade"
                        }}
                        timeout={1000}>
                        <LocationRow location={location}  type="location" action={action} icon={icon} onRowClick={onRowClick} toggle={toggle}/>
                </CSSTransition>
            );
    }

    let nameSortIcon=<i name='name' className={sort.icon}></i>;
    return (
        <div className="my-3">
            {locations.length === 0 ? (<p className="text-center">No locations yet</p>) : (    
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th name='name' scope="col" className="col-sort" onClick={onClick}>Name {nameSortIcon}</th>
                        <th name='address' scope="col">Address</th>
                        <th name='coordinates' scope="col">Coordinates</th>
                        <th name='category' scope="col">Category</th>
                        <th scope="col w-10">&nbsp;</th>
                    </tr>
                </thead>
                
                <TransitionGroup component='tbody'>
                    { locations.map( rowItem ) }
                </TransitionGroup>
                
            </table>)}
        </div>
    )
}

LocationsTable.propTypes={
    locations: PropTyps.array.isRequired,
    // categories: PropTyps.array.isRequired,
    action: PropTyps.string.isRequired,
    onClick: PropTyps.func.isRequired,
    sort: PropTyps.object.isRequired
}
 
export default LocationsTable;