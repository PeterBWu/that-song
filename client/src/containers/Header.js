import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Header extends Component {
    renderLinks(){
        if(this.props.auth) {
            return (
                <div>
                    <Link to='/counter'>Counter Page</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/createblog'>Create a Blog </Link>
                    <Link to='/signout'>Sign Out </Link>
                </div>
            );
        } else {
            return (
                <div  className="float-right"style={{marginRight: '15px'}}>
                    <Link to='/blogs'>Blogs </Link>
                    <Link to='/signup'>| Sign up |</Link>
                    <Link to='/signin'> Sign in</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div style={{marginTop: '25px', marginBottom: '15px'}}>
                <div>
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