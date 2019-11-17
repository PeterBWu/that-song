import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccountInfo } from './../../actions';
import Loader from "react-loader-spinner";
import requireAuth from './../../hoc/requireAuth';


class Account extends Component {

	componentDidMount() {
		this.props.getAccountInfo()
	}

	renderAccountInfo = () => {
		if (!this.props.email) {
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
				<h3>E-mail: {this.props.email}</h3>
			)
		}
	}

	render() {
		// console.log(this.props.email)
		return (
			<div>
				{this.renderAccountInfo()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	// console.log('account', state.account.email.data)
	return { email: state.account.email.data };
}

export default requireAuth(connect(mapStateToProps, { getAccountInfo })(Account));

