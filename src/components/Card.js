import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div>
        {props.residents.map( resident => (
            <div className="card" key={resident.id}>
            <img alt={`animal crossing character${resident.name}`} src={resident.url} />
            <h3>{resident.name}</h3>
            <p>Gender: {resident.gender}</p>
            <p>Personality: {resident.personality}</p>
            <p>Hobby: {resident.hobby}</p>
            <p>Saying: {resident.saying}</p>
        </div>
        ))}
        </div>
    )
}

export default Card;