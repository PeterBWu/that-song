import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSavedSongs } from './../../actions';
import Loader from "react-loader-spinner";
import requireAuth from './../../hoc/requireAuth';
import SavedCard from './../../components/SavedCard'


class Saved extends Component {

    componentDidMount() {
        this.props.getSavedSongs()

    }

    renderSongs = () => {
        // console.log(this.props.songs)
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
                                <SavedCard 
                                render={this.props.getSavedSongs}
                                key={song._id}
                                _id={song._id}
                                artist={song.artist}
                                songName={song.songName}
                                lyrics={song.lyrics}             
                                />
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