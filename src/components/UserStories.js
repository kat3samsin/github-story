import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getMore } from "../actions/UserActions";
import UserStory from './UserStory';
import { timeline } from '../css/timeline.js';

export class UserStories extends Component {
  componentDidMount() {
    timeline();
  }
  handleScroll = () => {
    this.props.getMore();
  }
  render() {
    return (
      <div>
        <section className="intro">
          <div className="container">
            <a href={this.props.userInfo.html_url}>
              <img height='100px' width='100px' alt={this.props.userInfo.login} src={this.props.userInfo.avatar_url}/>
            </a>
            <h1>{this.props.userInfo.name} &darr;</h1>
            {this.props.userInfo.bio}
            <p>📍{this.props.userInfo.location}</p>
          </div>
        </section>
        <section className="timeline">
          <ul>
            {this.props.repos.map((repo) => <UserStory key={repo.id} repo={repo} />)}
          </ul>
        </section>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getMore: (user) => {
      dispatch(getMore(user))
    }
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(UserStories);