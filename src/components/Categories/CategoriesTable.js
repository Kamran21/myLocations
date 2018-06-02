import React from 'react';
import CategoryRow from "./CategoryRow";
import GenericRow from './GenericRow';

const CategoriesTable = ({categories, action, onClick, sort, icon}) => {
    
    const rowItem=(category, index) => {
        return ( category.name === 'generic' ? 
                            <GenericRow key={category.id}/> :
                            <CategoryRow category={category} key={category.id} type="category" action={action} icon={icon}/>);
    }


    let nameSortIcon=<i name='name' className={sort.icon}></i>;
    return (
        <div className="my-3">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th name='name' scope="col" className="col-sort" onClick={onClick}>Name {nameSortIcon}</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    { categories.map( rowItem ) }
                </tbody>
            </table>
        </div>
    )
}
 
export default CategoriesTable;