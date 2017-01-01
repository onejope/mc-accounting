import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Account from './Account';

class AccountList extends Component {
  render() { 
	let accounts = this.props.accounts.map((account) => {
		return <Account key={account.id}
		                id={account.id} 
		                name={account.name} />
	});  
    return (
      <div>
        {accounts}
      </div>
    );
  }
}

export default AccountList;