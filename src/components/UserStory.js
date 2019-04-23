import React, { Component } from 'react';

export class UserStory extends Component {
  render() {
    return this.props && this.props.repo ? (
      <li>
        <div>
          {/* add link to repo, stars, forks, load more */}
          <time>{this.props.repo.created_at}</time>
          <a href={this.props.repo.html_url}>{this.props.repo.name}</a><br />
          {this.props.repo.description}
        </div>
      </li> ): null;
  }
}
export default UserStory;