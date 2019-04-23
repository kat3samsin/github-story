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
          <h1>Story &darr;</h1>
        </div>
      </section>
        <section className="timeline">
          <ul>
            {this.props.data.map((d) => <UserStory key={d.id} repo={d} />)}
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