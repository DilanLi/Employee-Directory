import React from "react";
import "./style.css";

function Filter(props){
    return (
        <div className="dropdown filter">
        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter By
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button onClick={props.searchResident} className="dropdown-item" type="button">All</button>
          <button onClick={props.filterByMale} className="dropdown-item" type="button">Male</button>
          <button onClick={props.filterByFemale} className="dropdown-item" type="button">Female</button>
          <button onClick={props.filterByNormal} className="dropdown-item" type="button">What on earth is a normal personality?</button>
        </div>
      </div>
        )
}

export default Filter;