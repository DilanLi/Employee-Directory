import React from "react";
import "./style.css";

function Filter(){
    return (
        <div className="dropdown filter">
        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter By
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" type="button">Gender</button>
          <button className="dropdown-item" type="button">Personality</button>
        </div>
      </div>
        )
}

export default Filter;