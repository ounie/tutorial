import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/second">Second Page</Link>
        <Link to="/third">Third Page</Link>
      </div>
    )
  }
}
