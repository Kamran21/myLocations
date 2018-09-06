import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const LocationRow = ({ location, type, action, icon, onRowClick, toggle }) => {
  // debugger;
  const { id, name, address, categories } = location;
  let icons =
    toggle.state === true && toggle.id === location.id ? (
      <CSSTransition
        timeout={500}
        in={icon !== ""}
        classNames={"message"}
        mountOnEnter
        unmountOnExit
      >
        <div className="item-actions animated fadeInRight">
          <Link to={`${type}/map/${id}`}>
            <button className="btn btn-main btn-circle btn-md">
              <i className="fa fa-map-marker text-danger" />
            </button>
          </Link>
          <Link to={`${type}/view/${id}`}>
            <button className="btn btn-main btn-circle btn-md">
              <i className="fa fa-eye" />
            </button>
          </Link>
        </div>
      </CSSTransition>
    ) : (
      <Link to={`${type}/${action}/${id}`}>
        <CSSTransition
          timeout={500}
          in={icon !== ""}
          classNames={"message"}
          mountOnEnter
          unmountOnExit
        >
          <div className="item-actions fadeInLeft">
            <button className="btn btn-main btn-circle btn-md">
              <i className={icon} />
            </button>
          </div>
        </CSSTransition>
      </Link>
    );
  return (
    <tr className="location-row" onClick={() => onRowClick(location)}>
      <th scope="row">
        <span>{name}</span>
      </th>
      <td>{address}</td>
      <td>{categories && categories.map(c=>`${c.name} `)}</td>
      <td className="actions-cell">{icons}</td>
    </tr>
  );
};

LocationRow.prpTypes = {
  location: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
};
export default LocationRow;
