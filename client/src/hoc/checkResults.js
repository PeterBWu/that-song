import React, { Component } from 'react';
import { connect } from 'react-redux';
export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            // Normally if a user is logged in,
            // the auth state will be a token string
            //  if the token string is empty, it will be false
            // we will redirect the user to the sign in route
            //  if it's false   
            console.log(this.props.result)
            if(!this.props.result.length > 0 || !this.props.result) {
                this.props.history.push('/');
            }
        }

        render() {
            // We are going to return the child component
            // And give it the props and functionality of this higher order component
            // The only prop we are giving this component access to in this case
            //  is the auth state
            return <ChildComponent {...this.props}/>
        }


    }

    function mapStateToProps(state) {
        return { result: state.songs.results };
    }
    return connect(mapStateToProps, null)(ComposedComponent);
}