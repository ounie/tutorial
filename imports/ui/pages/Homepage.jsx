import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Homepage extends Component {

  render() {
    return (
      <div>
        Hello World!!!<br/>
        <button className="btn btn-success">Go to Second Page</button>
        <button className="btn btn-danger">Go to Third Page</button>
      </div>
    )
  }
}
