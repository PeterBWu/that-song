import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchDetails } from "../actions";
import Axios from "axios";


class SongInfo extends Component {

  onSave = formValues => {
    return ;
  };

 componentDidMount(){
  this.props.fetchDetails(this.props.params)
  }

  renderData = () =>{
    // const {lyrics,spotify,youtube} = this.getContent()
    // console.log(lyrics,youtube,spotify)
    console.log(this.props.data)
    console.log(Object.keys(this.props.data))
    if (!(Object.keys(this.props.data).length===0 && this.props.data.constructor === Object)){
      console.log("hitto hitto")
      return(
        <div>
        <h1>{this.props.params.trackName}</h1>
        <h2>{this.props.params.artist}</h2>
        <div><iframe width="420" height="315"
src={"https://www.youtube.com/embed/"+this.props.data.youtube[0].id.videoId}>
</iframe>
</div>
        <div>
          <pre>{this.props.data.lyrics.lyrics_body}</pre>
        </div>

      </div>
    )
  }else{
    return(<div></div>)
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
