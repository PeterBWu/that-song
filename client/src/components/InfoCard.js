import React from 'react'
import { Link } from "react-router-dom";

const InfoCard = props => {
    return(
        <div id={props.song.track_id}>
        <Link to={`/results/${props.song.track_id}`}>{JSON.stringify(props.song)}</Link>
    <p>weewoo {props.id}</p>
      </div>
    )
}

export default InfoCard