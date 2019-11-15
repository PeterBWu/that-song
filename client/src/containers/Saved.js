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
                                <div className="container"key={song._id}>
                                    <h2>{song.artist}</h2>
                                    <h3>{song.songName}</h3>
                                    <h4>{song.lyrics}</h4>
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





