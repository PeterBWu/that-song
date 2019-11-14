import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

class SongInfo extends Component {
  onSave = formValues => {
    this.props.searchSongByLyrics
    ;
  };

  componentDidMount(){
    return;
  }
  render() {
    return (
      <div style={{float:"none"}}>

      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="lyric"
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
  connect(null, null),
  reduxForm({ form: 'SongInfo' })
)(SongInfo);

export default formedComponent;
