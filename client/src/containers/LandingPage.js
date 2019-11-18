import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { searchSongByLyrics, createSearchHistory } from "../actions";

// import requireAuth from './../../hoc/requireAuth';

class LandingPage extends Component {
  onSubmit = formValues => {
    this.props.searchSongByLyrics(formValues, () => {
      this.props.history.push("./results");
    });
    this.props.createSearchHistory(formValues);

  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div id="input_box" className="w-75 bg-dark rounded" style={{ float: "none" }}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="lyric"
            type="text"
            component="input"
            autoComplete="none"
            className="p-2 col-10 w-100 search_input searchField text-center"
            placeholder="Find That Song!!"
            aria-label="Search"
          />
          <button className="pb-4 col-2 float-right rounded fa fa-search fa-1x btn btn-outline-info my-2 my-sm-0 p-2 searchClick" type="submit"></button>      </form>
      </div>
    );
  }
}

const formedComponent = compose(
  connect(null, { searchSongByLyrics, createSearchHistory }),
  reduxForm({ form: 'landingPage' })
)(LandingPage);

export default formedComponent;
