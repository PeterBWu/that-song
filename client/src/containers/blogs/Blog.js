import React, { Component } from "react";
import { fetchBlog } from "./../../actions";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";

class Blog extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.blogId);
  }

  renderBlog = () => {
    console.log(this.props.blog);
    if (!this.props.blog.content) {
      return (
        <Loader
          type="Oval"
          color="purple"
          height={100}
          width={100}
          timeout={3000}
        />
      );
    } else {
      return (
        <div>
          <h1>
            Blog Content <span>Author: {this.props.blog.user.email}</span>
          </h1>
          <h2>{this.props.blog.content}</h2>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>This is the Blog detail page</h1>
        {this.renderBlog()}
      </div>
    );
  }
}

function mapStateToProps({ blogs }) {
  return { blog: blogs.blog };
}

export default connect(
  mapStateToProps,
  { fetchBlog }
)(Blog);
