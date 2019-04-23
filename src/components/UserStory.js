import React, { Component } from 'react';

export class UserStory extends Component {

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