import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from './../../actions';

class SignIn extends Component {
    onSubmit = formProps => {
        console.log(formProps);
        this.props.signIn(formProps, () => {
            this.props.history.push('/counter');
        });
    }

    renderInput = ({ input }) => {
        return (
            <div>
                <h1>I am so cool</h1>
                <p>Custom form Component</p>
                <input {...input} />
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div
            className="container
                        d-flex 
                        justify-content-center 
                        text-dark"
                        >
            <form id="input_box"
                onSubmit={handleSubmit(this.onSubmit)}
                className="m-4 card border-secondary shadow-lg p-3 rounded">
                <div className="m-3 p-3" style={{border: '2px darkgrey solid'}}>
                    <h1 className="form-row card-title text-dark"
                    >Welcome Back </h1>
                    <h2>Sign In With Email</h2>
                </div>
    
                <fieldset className="form-row">
                    <label className="mt-2"  
                        for="validationEmail">Email</label>
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
                <div>{this.props.errorMessage}</div>
                    <div className="text-center "> 
                        <button className="btn btn-outline-dark mt-3 rounded-pill">Sign In</button>
                    </div>
            </form>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, { signIn }),
    reduxForm({ form: 'signin' })
)(SignIn);