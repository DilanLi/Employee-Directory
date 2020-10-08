import React from "react";
import "./style.css";

function Card(props) {
    let isArray = Array.isArray(props.residents);

    if (!isArray) {
        return (
            <div>waiting on response</div>
        )
    }
    
    return (
        <div className="cards-container d-flex justify-content-center">
            {props.residents.map(resident => (
                <div className="card col-md-3 col-lg-2 col-sm-5" key={resident.id}>
                    <img alt={`animal crossing character${resident.name['name-USen']}`} src={resident.image_uri} />
                    <h3>{resident.name['name-USen']}</h3>
                    <p>Species: <span>{resident.species}</span></p>
                    <p>Gender: <span>{resident.gender}</span></p>
                    <p>Personality: <span>{resident.personality}</span></p>
                    <p>Hobby: <span>{resident.hobby}</span></p>
                    <p>Saying: </p>
                    <p><span>{resident.saying}</span></p>
                </div>
            ))}
        </div>
    )
}

export default Card;