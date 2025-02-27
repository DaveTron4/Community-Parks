import React from "react";

const Park = (props) => {
    return (
        <td className = "parkCard">
            <h2>{props.parkName}</h2>
            <h3>{props.parkLocation}</h3>
            <a href={props.parkLink} target="_blank">Visit</a>
        </td>
    )
}


export default Park;