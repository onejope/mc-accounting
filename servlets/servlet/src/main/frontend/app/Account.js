import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Account extends Component {
  render() { 
    return (
      <div>
        <div>{this.props.name}</div>
        <br />
      </div>
    );
  }
}

export default Account;