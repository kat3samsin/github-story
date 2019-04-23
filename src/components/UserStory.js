import React, { Component } from 'react';
import { timeline } from '../css/timeline.js';

export class UserStory extends Component {
  componentDidMount() {
    timeline();
  }

  render() {
    return this.props && this.props.repo ? (
      <li>
        <div>
          <time>{this.props.repo.name}</time>{this.props.repo.description}
        </div>
      </li> ): null;
  }
}
export default UserStory;