import React, { Component } from 'react';
import {connect} from 'react-redux';

import UserInput from './components/UserInput'
import UserStories from './components/UserStories'

class App extends Component {
  render() {
    return (
      <div className='App'>
        {this.props.isFetching ? <h3>Loading...</h3> : null}
        {this.props.isError ? <h3>Nada.</h3> : null}
        {this.props.data && this.props.data.length === 0 ? <UserInput /> : null}
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
