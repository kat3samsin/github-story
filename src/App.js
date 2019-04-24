import React, { Component } from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader';

import UserInput from './components/UserInput';
import UserStories from './components/UserStories';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SearchBar /> <br />
        {/* <a href='https://github.com'>
          <img src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='GitHub' width='100px' height='100px'/>
        </a>
        <h1>GitHub Story</h1>
        <UserInput /><br /> */}
        <Loader loaded={!this.props.isFetching} color="#0000" />
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
