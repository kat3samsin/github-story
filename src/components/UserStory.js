import React, { Component } from 'react';

export class UserStory extends Component {
  render() {
    return this.props && this.props.repo ? (
      <li>
        <div>
          {/* add link to repo, stars, forks, load more */}
          <time>{this.props.repo.dateCreated}</time>
          <title><a href={this.props.repo.url}>{this.props.repo.name}</a></title><br />
          {this.props.repo.description}<br />
          Language: {this.props.repo.language} <br />
          ⭐{this.props.repo.stars} <br />
          Forks: {this.props.repo.forks}
        </div>
      </li> ): null;
  }
}
export default UserStory;