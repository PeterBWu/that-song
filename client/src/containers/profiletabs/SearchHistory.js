import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './../../actions';

import requireAuth from './../../hoc/requireAuth';

import App from './../../components/App';

class Saved extends Component {
    render() {
        return (
            <div>
                <h1>Search History here</h1>       
            </div>
        );
    }
}

// This state is equivalent to the object that's inside our reducers/index.js
function mapStateToProps(state){
    return { counter: state.counter.counter };
}   

export default requireAuth(connect(mapStateToProps, {increment, decrement})(Saved));

