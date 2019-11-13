import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { infoFromSong } from "../actions";
import InfoCard from "../components/InfoCard";

class Results extends Component {
  componentDidMount() {
    this.props.infoFromSong();
  }

  renderOptions() {
    console.log(this.props.songs)
    if (this.props.songs.length === 0) {
      return <Loader type="Oval" color="purple" height={100} width={100} />;
    } else {
      return (
        <div>
          {this.props.songs.map(song => (<InfoCard key={song.id} id={song.id} />))}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Here are the results!</h1>
        {this.renderOptions()}
      </div>
    );
  }
}

function mapStateToProps({ songs }) {
  return { songs: songs.results };
}

export default connect(
  mapStateToProps,
  { infoFromSong }
)(Results);
