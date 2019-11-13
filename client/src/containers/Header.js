import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Header extends Component {
    renderLinks(){
        if(this.props.auth) {
            return (
                <div style={{justifyContent:"flex-end"}}>
                    <Link to='/counter'>Saved Songs</Link>
                    <Link to='/blogs'>Search History</Link>
                    <Link to='/createblog'>AccountSettings</Link>
                    <Link to='/signout'>Sign Out</Link>

                </div>
            );
        } else {
            return (

                <div style={{justifyContent:"flex-end"}}>
                    <Link to='/signup'>Sign up</Link>
                    <Link to='/signin'>Sign in</Link>

                </div>
            );
        }
    }

    render() {
        return (

            <div style={{width:"100%",display:"flex"}}>
                <div style={{flex:"auto"}}>

                <Link to='/'>Redux Auth</Link>
                </div>
                {this.renderLinks()}
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth.authenticated };
}

export default connect(mapStateToProps, null)(Header);