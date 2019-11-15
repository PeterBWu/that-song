import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchHistory } from './../../actions';
import Loader from "react-loader-spinner";

import requireAuth from './../../hoc/requireAuth';

class History extends Component {

    componentDidMount(){
        this.props.getSearchHistory();
    }


    renderHistory = () => {
        console.log(this.props.history)
        if (!this.props.history[0]) {
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
                    {
                        this.props.history.map(historyItem => {
                            return (
                                <div className="container" key={historyItem._id}>
                                    <h4>"{historyItem.searchPhrase}"</h4>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                {this.renderHistory()}

            </div>
        );
    }
}

// This state is equivalent to the object that's inside our reducers/index.js
function mapStateToProps({ history }){
    return { history: history.data };
}   

export default requireAuth(connect(mapStateToProps, { getSearchHistory })(History));

