import React from "react";
import CategoryRow from "./CategoryRow";
import GenericRow from "./GenericRow";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CategoriesTable = ({ categories, action, onClick, sort, icon }) => {
  const rowItem = (category, index) => {
    return (
      <CSSTransition
        key={category.id}
        classNames={{
          enter: "animated",
          enterActive: "fade",
          exit: "animated",
          extActive: "fade"
        }}
        timeout={2000}
      >
        {category.name === "generic" ? (
          <GenericRow />
        ) : (
          <CategoryRow
            category={category}
            type="category"
            action={action}
            icon={icon}
          />
        )}
      </CSSTransition>
    );
  };

  let nameSortIcon = <i name="name" className={sort.icon} />;
  return (
    <div className="my-3">
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th name="name" scope="col" className="col-sort" onClick={onClick}>
              Name {nameSortIcon}
            </th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <TransitionGroup component="tbody">
          {categories.map(rowItem)}
        </TransitionGroup>
      </table>
    </div>
  );
};

export default CategoriesTable;
