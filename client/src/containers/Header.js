import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Header extends Component {
    renderLinks(){
        if(this.props.auth) {
            return (
                <div style={{float:"right"}}>
                    <Link to='/counter'>Counter Page</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/createblog'>Create a Blog</Link>
                    <Link to='/signout'>Sign Out</Link>
                </div>
            );
        } else {
            return (
                <div style={{float:"right"}}>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/signup'>Sign up</Link>
                    <Link to='/signin'>Sign in</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div style={{width:"100%"}}>
                <div style={{float:"left"}}>
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