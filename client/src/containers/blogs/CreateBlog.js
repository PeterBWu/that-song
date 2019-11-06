import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createBlog } from './../../actions';

import requireAuth from './../../hoc/requireAuth';

class CreateBlog extends Component {
  onSubmit = formValues => {
    this.props.createBlog(formValues, () => {
      this.props.history.push('./blogs');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <label>Content</label>
        <Field 
          name='content'
          type='text'
          component='textarea'
          autoComplete='none'
        />
        <button>Create Blog</button>
      </form>
    )
  }
};

const formedComponent = compose(
  connect(null, { createBlog }),
  reduxForm({ form: 'Create Blog' })
)(CreateBlog);

export default requireAuth(formedComponent);