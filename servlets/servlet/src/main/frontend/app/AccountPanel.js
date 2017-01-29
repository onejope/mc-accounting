import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountList from './AccountList';
import AddAccountForm from './AddAccountForm';

class AccountPanel extends Component {
  render() { 
    return (
      <div>
        <AccountList accounts={this.props.accounts} callbacks={this.props.accountCallbacks} />
        <AddAccountForm callbacks={this.props.accountCallbacks} />
      </div>
    );
  }
}

export default AccountPanel;