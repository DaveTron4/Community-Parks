import React from "react";

const Park = (props) => {
    return (
        <td className = "parkCard">
            <img src={props.parkImage} alt={props.parkName}></img>
            <h3>{props.parkName}</h3>
            <h4>{props.parkLocation}</h4>
            <a className = "buttonLink" href={props.parkLink} target="_blank">Visit</a>
        </td>
    )
}


export default Park;