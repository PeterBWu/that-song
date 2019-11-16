import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Header extends Component {
	renderLinks() {
		if (this.props.auth) {
			return (
				<div className="navbar-nav ml-auto">
					<Link className="nav-item nav-link" to='/profile'>Account Settings</Link>
					<Link className="nav-item nav-link" to='/signout'>Sign Out</Link>
				</div>
			);
		} else {
			return (

				<div className="navbar-nav ml-auto">
					<Link className="nav-item nav-link" to='/signin'>Sign In</Link>
					<Link className="nav-item nav-link" to='/signup'>Create Account</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">THATsong</Link>
          {this.renderLinks()}
			</nav>
		)
	}
}

function mapStateToProps({ auth }) {
	return { auth: auth.authenticated };
}

export default connect(mapStateToProps, null)(Header);

