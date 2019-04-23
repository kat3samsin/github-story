import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getUserStory } from "../actions/UserActions";

export class UserInput extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      const user = this.getUser ? this.getUser.value : '';  
      this.props.loadUser(user);
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input className='userInput' required type="text" ref={(input => this.getUser = input)} placeholder="Enter GitHub username" /><br />
            <button className='generateButton'>Generate</button>
          </form>
        </div>
      );
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      loadUser: (user) => {
        dispatch(getUserStory(user))
     }
    }
  }
  export default connect(null, mapDispatchToProps)(UserInput);