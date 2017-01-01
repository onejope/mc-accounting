import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountList from './AccountList';

class AccountPanel extends Component {
  render() { 
    return (
      <AccountList accounts={this.props.accounts} />
    );
  }
}

export default AccountPanel;