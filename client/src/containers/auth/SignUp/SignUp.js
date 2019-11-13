import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import { signup } from "../../../actions";
import './style.css'
import { truncate } from "fs";


class SignUp extends Component {
  onSubmit = formProps => {
    console.log(formProps);
    if(this.validate(formProps)){
      this.props.signup(formProps, () => {
        this.props.history.push("/counter");
      })
    }
    else{
      alert('error')
  };
}

  validate = values => {
  if(values.email && values.password && values.password === values.confirm_password){
    return true
  } else {
    return false;
  }
}

  render() {
    const { handleSubmit } = this.props;
    // console.log(this.props);
    return (
      <div
        className="container
                    d-flex 
                    justify-content-center 
                    text-dark">
        <form id="input_box"
          onSubmit={handleSubmit(this.onSubmit)}
          className="m-4 p-4" >
          <fieldset className="form-row">
            <label>Email</label>
            <Field
              className="border-light"
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset className="form-row">
            <label>Password</label>
            <Field
              className="border-light"
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset className="form-row">
            <label>Confirm Password</label>
            <Field
              className="border-light"
              name="confirm_password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>         
          <div>{this.props.errorMessage}</div>
          <div className="text-center "> 
          <button className="btn btn-outline-dark mt-3">Signup</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

// export default  connect(mapStateToProps, {signup})(reduxForm({ form: 'signup' })(SignUp));
//  HOC
export default compose(
  connect(
    mapStateToProps,
    { signup }
  ),
  reduxForm({ form: "signup" })
)(SignUp);
