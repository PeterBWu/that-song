import React, { Component } from 'react'
import { deleteSong } from './../actions'
import requireAuth from '../hoc/requireAuth'
import { connect } from 'react-redux'

class SavedCard extends Component {


  deleteSong = id => {
    this.props.deleteSong(id)
      .then(res => this.props.render())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container w-70 text-center">
        <div className="card mt-2 mb-2 border-top border" key={this.props._id}>
          <div className="card">
            <div className="card-row card-header bg-dark text-light">
              <h2 className="col-10 float-left ">{this.props.artist}</h2>
              <button onClick={() => this.deleteSong(this.props._id)}
                className="col-2 btn btn-danger btn-xs float-right"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
            <div className="card-row">
              <h3 className="card-text">{this.props.songName}</h3>
              <h5 className="card-text text-muted">{this.props.lyrics}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ deleteSong }) {
  return { songs: deleteSong }
}
export default requireAuth(connect(mapStateToProps, { deleteSong })(SavedCard));