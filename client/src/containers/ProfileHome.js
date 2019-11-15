import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import changeSelectedTab from '../actions';
import { Tabs, TabLink, TabContent } from "react-tabs-redux";


import './../components/ProfileTab/style.css' // Tab button styling
import Favorites from './profiletabs/Favorites';
import AccountInfo from './profiletabs/AccountInfo';
import SearchHistory from './profiletabs/SearchHistory';

class ProfileHome extends Component {
  render() {
    return (
      <div className="container">
          <Tabs
            name="tabs1"
            className="tabs tabs-1"
            handleSelect={this.props.changeSelectedTab}
            selectedTab={this.props.tabs1}
          >
                  <div className="row">
            <div className="col-3">
              <div className="tab-links">
                <TabLink to="tab1">Account Information</TabLink>
                <TabLink to="tab2">Favorites</TabLink>
                <TabLink to="tab3">Search History</TabLink>
              </div>
            </div>
            <div className="col-8">
              <div className="content">
                <TabContent for="tab1">
                  <h2>Account Information</h2>
                  <AccountInfo />
                </TabContent>
                <TabContent for="tab2">
                  <h2>Your Favorites</h2>
                  <Favorites />
                </TabContent>
                <TabContent for="tab3">
                  <h2>Search History</h2>
                  <SearchHistory />
                </TabContent>
              </div>
            </div>
      </div>
          </Tabs>
        </div>
    )
  }
};

export default ProfileHome;