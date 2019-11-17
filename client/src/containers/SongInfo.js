import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchDetails } from "../actions";
import Axios from "axios";


class SongInfo extends Component {

  onSave = formValues => {
    return ;
  };

  handleClick = () => {
    if (localStorage.getItem('token')){
      Axios.post('/api/favsongs/',{
        songName:this.props.params.trackName,
        artist: this.props.params.artist,
        lyrics:this.props.data.lyrics.lyrics_body,
        songid:this.props.params.id
      },{headers:{authorization:localStorage.getItem('token')}}).then(response=> console.log(response.data))
    }

  }
 componentDidMount(){
  this.props.fetchDetails(this.props.params)
  }

  renderData = () =>{
    if (!(Object.keys(this.props.data).length===0 && this.props.data.constructor === Object)){
      return(
        <div className='container text-center'>
        <div className='row my-5'>
          <div className='col-11 '>
        <h1>Song Title: {this.props.params.trackName}</h1>
        <h2>Artist Name: {this.props.params.artist}</h2>
          </div>
          <div className='col-1 m-auto'>
        <button className='btn bg-primary text-white' onClick={this.handleClick}>save</button>

          </div>
        </div>
        <div className='row'>
          <div className='col-12 justify-content-center'>
            
          <iframe width='932px' height='524px' src={"https://www.youtube.com/embed/"+this.props.data.youtube[0].id.videoId}>
          </iframe>
          </div>
</div>
        <div>
          <pre>{this.props.data.lyrics.lyrics_body}</pre>
        </div>

      </div>
    )
  }else{
    return(<div><h1>No Results Found</h1></div>)
  }
  }
  
  render() {
    return (
      <div > 
      {this.renderData()}
      </div>
    );
  }
}

function mapStateToProps({ songs }) {
  return { data: songs.data };
}

export default connect(
  mapStateToProps,
  { fetchDetails }
)(SongInfo);
