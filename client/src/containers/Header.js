import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Header extends Component {
	renderLinks() {
		if (this.props.auth) {
			return (
				<div className="navbar-nav ml-auto">
					<a className="nav-item nav-link" href='/saved'>Favorites</a>
					<a className="nav-item nav-link" href='/blogs'>Search History</a>
					<a className="nav-item nav-link" href='/createblog'>Account Settings</a>
					<a className="nav-item nav-link" href='/signout'>Sign Out</a>
				</div>
			);
		} else {
			return (

				<div className="navbar-nav ml-auto">
					<a className="nav-item nav-link" href='/signin'>Sign In</a>
					<a className="nav-item nav-link" href='/signup'>Create Account</a>
				</div>
			);
		}
	}

	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<a class="navbar-brand" href="/">THATsong</a>
          {this.renderLinks()}
			</nav>
		)
	}
}

// class Header extends Component {

// }

function mapStateToProps({ auth }) {
	return { auth: auth.authenticated };
}

export default connect(mapStateToProps, null)(Header);

