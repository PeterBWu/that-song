import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Header extends Component {
	renderLinks() {
		if (this.props.auth) {
			return (
				<div className="navbar-nav ml-auto">
					<Link className="nav-item nav-link" to='/saved'>Favorites</Link>
					<Link className="nav-item nav-link" to='/blogs'>Search History</Link>
					<Link className="nav-item nav-link" to='/createblog'>Account Settings</Link>
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
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link class="navbar-brand" to="/">THATsong</Link>
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

