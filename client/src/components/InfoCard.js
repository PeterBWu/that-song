import React from 'react'
import { Link } from "react-router-dom";

const InfoCard = props => {
  const song = props.song.track  
  const genre = song.primary_genres.music_genre_list.length >0?song.primary_genres.music_genre_list[0].music_genre.music_genre_name : "N/A" 
  console.log(genre)
  return(
      <div id={song.track_id} className="card m-1">
        <div className='card-body'>

        {/* <p>{JSON.stringify(song)}</p> */} 
        <h5 className='card-title'><span className="bolded">Track Name:</span> {song.track_name}</h5>
        <h6 className='card-subtitle'><span className="bolded">Artist:</span> {song.artist_name}</h6>
        
        <p className='card-text'><span className="bolded">Album:</span> {song.album_name}
        <br/>
        <span className="bolded">Genre:</span> {genre}</p>

        
        <Link to={`/results/${song.track_id}/${song.artist_name}/${song.track_name}`} className='card-link'>Learn More!</Link>
        </div>
      </div>
    )



}

export default InfoCard