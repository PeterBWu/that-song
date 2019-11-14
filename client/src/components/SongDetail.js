import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import {  useParams} from "react-router-dom";

function SongDetail(props){
  let {id} = useParams()
    return (
    <div >
        <h1>{id}</h1>
    </div>
    );
  }


const formedComponent = compose(
  connect(null, null),
  reduxForm({ form: 'SongDetail' })
)(SongDetail);

export default formedComponent;
