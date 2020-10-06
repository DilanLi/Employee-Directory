// import React, { Component } from "react";
import React from "react";
import "./style.css";
// import API from "../utils/API"

function Card(props) {

    return (
        <div className="card">
            <img alt={`animal crossing character${props.name}`} src={props.url} />
            <h3>{props.name}</h3>
            <p>Gender: {props.gender}</p>
            <p>Personality: {props.personality}</p>
            <p>Hobby: {props.hobby}</p>
            <p>Saying: {props.saying}</p>
        </div>
    )
}

export default Card;