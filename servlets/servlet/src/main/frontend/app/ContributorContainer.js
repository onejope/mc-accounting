import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import update from 'react-addons-update';

const API_HEADERS = {
	'Content-Type': 'application/json',
	Authorization: 'any-string-you-like'
}

class ContributorContainer extends Component {
  constructor() {
	super();
	this.state={
	    contributors:[]
    }
  }

  componentDidMount(){
    fetch('./rest/contributors')
    .then((response) => response.json())
    .then((responseData) => {
    	this.setState({contributors: responseData});
    })
    .catch((error) => {
    	console.log('Error fetching and parsing data', error);
    });
  }
  
  addContributor(firstName, lastName, street, city, state, postalCode, phone){
	// Keep reference to original state prior to mutations, so can revert 
	// optimistic changes
	let prevState = this.state
	    
	let newContributor = {firstName: firstName,
			              lastName: lastName,
			              street: street,
			              city: city,
			              state: state,
			              postalCode: postalCode,
			              phone: phone
	                     };
	let nextState = update(this.state.contributors, {$push: [newContributor]});
	    
	this.setState({contributors:nextState});
	
	fetch('rest/contributors', {
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify(newContributor)
	})
	.then((response) => {
	  if(response.ok){
		return response.json();
	  } else {
		throw new Error("Server response wasn't OK");
	  }
	})
	.then((responseData) => {
      newContributor.id=responseData.id;
	  this.setState({contributors:nextState});
	})
	.catch((error) => {
    	console.log('Error posting contributor data', error);
    	this.setState(prevState);
    });
  } 
  
  render() { 
    return (
      <div>
        { React.Children.map( this.props.children, child => React.cloneElement(child, {
        	  contributors: this.state.contributors, 
        	  contributorCallbacks: {add: this.addContributor.bind(this)},
        	  categories: this.props.categories
            }))
        }
      </div>
    );
  }
}

export default ContributorContainer;