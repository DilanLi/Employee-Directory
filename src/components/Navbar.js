import React from "react";
import "./style.css";
import Sort from "./Sort";
import Filter from "./Filter"

function Navbar(){
    return (
        <div className="nav ">
            <Filter/>
            <Sort/>
        </div>
        )
}

export default Navbar;