import React, { Component } from "react";
import {  useParams} from "react-router-dom";
import SongInfo from './../containers/SongInfo'

function SongDetail(props){
  let {id,artist,trackName} = useParams()
    return (
    <div >
        <SongInfo params={{id,artist,trackName}} />
    </div>
    );
  }

export default SongDetail;
