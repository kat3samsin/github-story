import React, { Component } from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader';

import UserStories from './components/UserStories';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SearchBar /> <br />
        <Loader loaded={!this.props.isFetching} color="black" />
        {this.props.isError ? <h3>User not found.</h3> : null}
        {this.props.data && this.props.data.length > 0 ?
          <UserStories /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(App);
