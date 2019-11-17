import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import InfoCard from "../components/InfoCard";
import './style.css'

import checkResult from './../hoc/checkResults'

class Results extends Component {

  renderOptions() {
    if (this.props.songs.length === 0) {
      return <Loader type="Oval" color="purple" height={100} width={100} />;
    } else {
      return (
        <div className="container">
          <div className='card-columns'>

          {this.props.songs.map(song => (<InfoCard key={song.track.track_id} song={song} />))}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{borderColor:"red"}} >
        <div style={{borderColor:"green"}}>
        <h1 className="text-center my-5">Here are the results!</h1>

        </div>
        {this.renderOptions()}
      </div>
    );
  }
}

function mapStateToProps({ songs }) {
  return { songs: songs.results };
}

export default checkResult(connect(
  mapStateToProps,
  null
)(Results));
