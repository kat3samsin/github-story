import React, { Component } from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader';

import UserInput from './components/UserInput';
import UserStories from './components/UserStories';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>GitHub Story</h1><br />
        <UserInput /><br />
        <Loader loaded={!this.props.isFetching} color="#FFFF" />
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
