import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getUserStory } from "../actions/UserActions";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

export class SearchBar extends Component {
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
    return (<Navbar sticky="top">
    <Navbar.Brand href="https://github.com/kat3samsin/github-story">GitHub Story</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl type="text" required type="text"  className="mr-sm-2" placeholder="Enter GitHub User" value={this.state.username} onChange={this.handleChange} />
        <Button type="submit" variant="dark">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>);
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);