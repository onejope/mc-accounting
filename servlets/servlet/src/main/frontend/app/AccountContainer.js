import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountPanel from './AccountPanel';

class AccountContainer extends Component {
  constructor() {
	super();
	this.state={
	    accounts:[]
    }
  }

  componentDidMount(){
    fetch('./rest/accounts')
    .then((response) => response.json())
    .then((responseData) => {
    	this.setState({accounts: responseData});
    })
    .catch((error) => {
    	console.log('Error fetching and parsing data', error);
    });
  }
  
  render() { 
    return (
      <AccountPanel accounts={this.state.accounts} />
    );
  }
}

export default AccountContainer;