import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { searchSongByLyrics } from "../actions";

// import requireAuth from './../../hoc/requireAuth';

class LandingPage extends Component {
  onSubmit = formValues => {
    this.props.searchSongByLyrics(formValues, () => {
      this.props.history.push("./results");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{float:"none"}}>

      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="search"
          type="text"
          component="input"
          autoComplete="none"
          />
        <button>Search</button>
      </form>
          </div>
    );
  }
}

const formedComponent = compose(
  connect(null, { searchSongByLyrics }),
  reduxForm({ form: 'landingPage' })
)(LandingPage);

export default formedComponent;
