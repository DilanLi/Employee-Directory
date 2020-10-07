import React from "react";
import "./style.css";

function Sort(props){
    return (
        <div className="dropdown sort">
        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort By
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button onClick={props.sortByName} className="dropdown-item" type="button">Name</button>
        </div>
      </div>
        )
}

export default Sort;