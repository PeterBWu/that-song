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
      alert('Passwords do not match!')
  };
}

  validate = values => {
  if(values.password === values.confirm_password){
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
                    text-dark"
                    >
        <form id="input_box"
          onSubmit={handleSubmit(this.onSubmit)}
          className="m-4 card border-secondary shadow-lg p-3 rounded"
          >
          <div className="m-3 p-3" style={{border: '2px darkgrey solid'}}>
            <h1 className="form-row card-title text-dark"
            >Join with your email</h1>
          </div>

          <fieldset className="form-row">
            <label for="validationEmail">Email</label>
            <div className="input-group">
              <Field type="text" 
                name="email"
                component="input"
                autoComplete="none"
                className="form-control" 
                placeholder="that@song.com" 
                aria-describedby="inputGroupPrepend" 
                required/>
                <div className="invalid-feedback">
                  Please provide an email.
                </div>
              </div>
          </fieldset>

          <fieldset className="form-row">
            <label className="mt-2" 
                    for="validationPassword">Password</label>
            <div className="input-group">
              <Field
                className="form-control"
                name="password"
                type="password"
                component="input"
                autoComplete="none"
                aria-describedby="inputGroupPrepend"
                required/>
                <div className="invalid-feedback">
                  Please choose a password.
                </div>
            </div>
          </fieldset>
          <fieldset className="form-row">
            <label className="mt-2" for="vaildatePasswordConfirm">Confirm Password</label>
            <div>
            <Field
              className="form-control"
              name="confirm_password"
              type="password"
              component="input"
              autoComplete="none"
              aria-describedby="inputGroupPrepend"
              required/>
              <div className="invalid-feedback">
                Please confirm password.
              </div>
            </div>
          </fieldset>         
          <div>{this.props.errorMessage}</div>
          <div className="text-center "> 
          <button className="btn btn-outline-dark mt-3 rounded-pill">Sign Up</button>
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
