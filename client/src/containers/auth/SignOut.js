import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "./../../actions";

class SignOut extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <div id="farewell" className="container fluid text-center">
        <h1 className="jumbotron card border-dark shadow-lg rounded"
        >See you next time!</h1>
      </div>
    )
  }
}

export default connect(
  null,
  { signout }
)(SignOut);
