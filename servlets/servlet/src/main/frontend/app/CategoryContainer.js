import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CategoryPanel from './CategoryPanel';
import 'whatwg-fetch';
import update from 'react-addons-update';

const API_HEADERS = {
		'Content-Type': 'application/json',
		Authorization: 'any-string-you-like'
}

class CategoryContainer extends Component {
  constructor() {
	super();
	this.state={
	    categories:[]
    }
  }

  componentDidMount(){
    fetch('./rest/categories')
    .then((response) => response.json())
    .then((responseData) => {
    	this.setState({categories: responseData});
    })
    .catch((error) => {
    	console.log('Error fetching and parsing data', error);
    });
  }
  
  addCategory(name, accountId, taxDeductibleString){
	// Keep reference to original state prior to mutations, so can revert 
	// optimistic changes
	let prevState = this.state
	    
	// find the correct account
	let account;
	for (account of this.props.accounts) {
		if(account.id == accountId) {
			break;
		}
	}
	
	let taxDeductible = (taxDeductibleString == "on");
	
	let newCategory = {name: name, account: account, taxDeductible: taxDeductible};
	let nextState = update(this.state.categories, {$push: [newCategory]});
	    
	this.setState({categories:nextState});
	
	fetch('rest/categories', {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify(newCategory)
	})
	.then((response) => {
	  if(response.ok){
		return response.json();
	  } else {
		throw new Error("Server response wasn't OK");
	  }
	})
	.then((responseData) => {
	  newCategory.id=responseData.id;
	  this.setState({categories:nextState});
	})
	.catch((error) => {
  	  console.log('Error posting account data', error);
  	  this.setState(prevState);
    });
  } 
  
  render() { 
    return (
      <div>
    		{ React.Children.map( this.props.children, child => React.cloneElement(child, {
          	  categories: this.state.categories, 
          	  accounts: this.props.accounts, 
          	  categoryCallbacks: {add: this.addCategory.bind(this)}
              }))
          }
      </div>
    );
  }
}

export default CategoryContainer;