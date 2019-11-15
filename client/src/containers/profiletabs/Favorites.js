import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSavedSongs } from './../../actions';
import Loader from "react-loader-spinner";
import requireAuth from './../../hoc/requireAuth';
import SongInfo from './../../containers/SongInfo'


class Saved extends Component {

    componentDidMount() {
        this.props.getSavedSongs()

    }

    renderSongs = () => {
      
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
                                <div className="container bg-dark">
                                    <div className="col-12  float-left mt-2 mb-2 border-top border rounded-pill" key={song._id}>
                                        <h3>{song.artist}</h3>
                                        <h4>{song.songName}</h4>
                                        <h5>{song.lyrics}</h5>
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





export default requireAuth(connect(mapStateToProps, { getSavedSongs })(Saved));