import React from 'react'
import { Link } from "react-router-dom";

const InfoCard = props => {
  const song = props.song.track  
  const genre = song.primary_genres.music_genre_list.length >0?song.primary_genres.music_genre_list[0].music_genre.music_genre_name : "N/A" 
  console.log(genre)
  return(
      <div id={song.track_id}>
        <Link to={`/results/${song.track_id}/${song.artist_name}/${song.track_name}`}>{song.track_id}</Link>
        {/* <p>{JSON.stringify(song)}</p> */} 
        <h3><span className="bolded">Track Name:</span> {song.track_name}</h3>
        <p><span className="bolded">Artist:</span> {song.artist_name}</p>
        <p><span className="bolded">Album:</span> {song.album_name}</p>
        <p><span className="bolded">Genre:</span> {genre}</p>
      </div>
    )



}

export default InfoCard