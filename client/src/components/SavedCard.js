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
    return(
      <div className="container text-center w-70">
      <div className="card mt-2 mb-2 border-top border" key={this.props._id}>
          <div className="card">
              <h2 className="card-header">{this.props.artist}</h2>
              <h3 className="card-title">{this.props.songName}</h3>
              <h4 className="card-text">{this.props.lyrics}</h4>
              <button onClick={() => this.deleteSong(this.props._id)} 
                className="btn btn-danger btn-xs r">Remove</button>
          </div>
      </div>
  </div>
    )
  }
}

function mapStateToProps({ deleteSong }){
  return{ songs: deleteSong}
}
export default requireAuth(connect(mapStateToProps, { deleteSong })(SavedCard));