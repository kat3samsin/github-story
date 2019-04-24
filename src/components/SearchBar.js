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
    return (<Navbar expand="lg" variant="dark" bg="dark" sticky="top">
    <Navbar.Brand href="#home">GitHub Story</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl type="text" required type="text"  className="mr-sm-2" placeholder="Enter GitHub username" value={this.state.username} onChange={this.handleChange} />
        <Button variant="outline-success">Search</Button>
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