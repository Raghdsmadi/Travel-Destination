import React from "react";
import { Link } from "react-router-dom";
export default function Tour({city}) {
    return (
        <>
        <hr></hr>
        <div className= "div">
            <Link to={`city/${city.id}`}>
            <h2 class= "name">{city.name}</h2>
            <img src={city.image} alt="" />
            </Link>
        </div>
        </>
    )
}