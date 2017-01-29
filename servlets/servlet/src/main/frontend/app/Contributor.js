import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Contributor extends Component {
  render() { 
    return (
      <div>
        <div>Name: {this.props.contributor.lastName + ", " + this.props.contributor.firstName}</div>
        <div>Address: {this.props.contributor.street}</div>
        <div>         {this.props.contributor.city + ", " + this.props.contributor.state + " " + this.props.contributor.postalCode}</div>
        <div>Phone: {this.props.contributor.phone}</div>
        <br />
      </div>
    );
  }
}

export default Contributor;