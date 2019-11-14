import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "./../../actions";

class SignOut extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <div className="container fluid text-center">
        <h1 className="jumbotron bg-success"
        >Sorry to see you go!</h1>;
  </div>
    )
  }
}

export default connect(
  null,
  { signout }
)(SignOut);
