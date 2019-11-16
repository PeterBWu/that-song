import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchHistory, deleteHistoryItem } from './../../actions';
import Loader from "react-loader-spinner";
import requireAuth from './../../hoc/requireAuth';

class History extends Component {
    componentDidMount() {
        this.props.getSearchHistory();
    }

    deleteHistoryItem = id => {
        this.props.deleteHistoryItem(id)
        .then(res => this.props.getSearchHistory())
        .catch(err => console.log(err))
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
                                <div className="container border" key={historyItem._id}>            
                                        <div className="row">
                                            <h4 className="col-10 card-title">"{historyItem.searchPhrase}"</h4>
                                            <button onClick={() => this.deleteHistoryItem(historyItem._id)}className="btn btn-xs col-2" style={{color: 'red'}}>X</button>
                                        </div>
                                   
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
function mapStateToProps({ history }) {
    return { history: history.data };
}
export default requireAuth(connect(mapStateToProps, { getSearchHistory, deleteHistoryItem })(History));
