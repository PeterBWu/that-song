import React from 'react'
import { Link } from "react-router-dom";

const InfoCard = props => {
    return(
        <div id={props.id}>
        <Link to={`/results/${props.id}`}>{props.content}</Link>
    <p>weewoo {props.id}</p>
      </div>
    )
}

export default InfoCard