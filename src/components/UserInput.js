import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getUserStory } from "../actions/UserActions";

export class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loadUser(this.state.username);
  }
  handleChange = (e) => {
    this.setState({username: e.target.value});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className='userInput' required type="text" placeholder="Enter GitHub username" value={this.state.username} onChange={this.handleChange} /><br />
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

const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInput);