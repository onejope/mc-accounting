import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import update from 'react-addons-update';
import DepositTable from './DepositTable';

const API_HEADERS = {
	'Content-Type': 'application/json',
	Authorization: 'any-string-you-like'
}

class DepositByDateContainer extends Component {
  constructor() {
	super();
	this.state={
	    deposits:[],
	    oldDate: ''
    }
  }

  componentDidMount(){
	this.fetchData();
  }
  
  componentDidUpdate(){
	this.fetchData();
  }
  
  fetchData() {
	if(this.state.oldDate != this.props.date) {
	  this.setState({oldDate:this.props.date});
	
      fetch('./rest/deposits?date=' + this.props.date)
      .then((response) => response.json())
      .then((responseData) => {
    	  this.setState({deposits: responseData});
    	  console.log('Deposit by date:' + responseData);
      })
      .catch((error) => {
    	  console.log('Error fetching and parsing data', error);
      });
	}
  }
  
  addDeposit(){
	// Keep reference to original state prior to mutations, so can revert 
	// optimistic changes
	let prevState = this.state
	    
	let newDeposit = {};
	let nextState = update(this.state.deposits, {$push: [newDeposit]});
	    
	this.setState({deposits:nextState});
	
	fetch('rest/deposits', {
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify(newDeposit)
	})
	.then((response) => {
	  if(response.ok){
		return response.json();
	  } else {
		throw new Error("Server response wasn't OK");
	  }
	})
	.then((responseData) => {
      newDeposit.id=responseData.id;
	  this.setState({deposits:nextState});
	})
	.catch((error) => {
    	console.log('Error posting deposit data', error);
    	this.setState(prevState);
    });
  } 
  
  render() { 
    return (
      <div>
        <DepositTable deposit={this.state.deposits[0] ? this.state.deposits[0] : {}} 
        		contributors={this.props.contributors} categories={this.props.categories}/>
      </div>
    );
  }
}

export default DepositByDateContainer;