import React from "react";
import "./style.css";

function Hero(props){
    return (
    <div className="hero" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
        <h1>Llamacorn Island Residents Directory</h1>
        </div>
        )
}

export default Hero;