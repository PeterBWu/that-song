import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSavedSongs } from '../actions';
import Loader from "react-loader-spinner";
import requireAuth from '../hoc/requireAuth';
import SongInfo from './../containers/SongInfo'


class Saved extends Component {

    componentDidMount() {
        this.props.getSavedSongs()

    }

    renderSongs = () => {
        console.log(this.props.songs)
        if (!this.props.songs[0]) {
            return (
                <Loader
                    type="Oval"
                    color="purple"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            );
        } else {
            return (
                <div>
                    {
                        this.props.songs.map(song => {
                            return (
                                <div  key={song._id}  className="container bg-dark">
                                    <div  key={song._id} className="col-12  float-left mt-2 mb-2 border-top border rounded-pill" key={song._id}>
                                        <h2 key={song._id} >{song.artist}</h2>
                                        <h3 key={song._id} >{song.songName}</h3>
                                        <h4 key={song._id}  >{song.lyrics}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                <h1>Saved Songs</h1>
                {this.renderSongs()}

            </div>
        );
    }
}

// This state is equivalent to the object that's inside our reducers/index.js
function mapStateToProps({ savedSongs }) {
    return { songs: savedSongs.data };
}

export default requireAuth(connect(mapStateToProps, { getSavedSongs })(Saved));





