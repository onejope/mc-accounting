import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Category extends Component {
  render() { 
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>{this.props.taxDeductible && (this.props.name + " is tax deductible")}</div>
        <div>Account: {this.props.account.name}</div>
        <br />
      </div>
    );
  }
}

export default Category;