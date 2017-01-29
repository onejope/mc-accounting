import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AddContributorForm extends Component {
  constructor(props) {
	super(props);
	this.state = {name: ''};
	  
	this.handleChange = this.handleChange.bind(this);
  }  

  handleChange(event) {
	this.setState({[event.target.name]: event.target.value});
  }
	
  render() { 
    return (
      <div>
        Add Contributor
        <form onChange={this.handleChange}>
          <label>
            First Name:
            <input name="firstName" type="text" />
          </label>
          <br/>
          <label>
            Last Name:
            <input name="lastName" type="text" />
          </label>
          <br/>
          <label>
            Street:
            <input name="street" type="text" />
          </label>
          <br/>
          <label>
            City:
            <input name="city" type="text" />
          </label>
          <label>
            State:
            <input name="state" type="text" />
          </label>
          <label>
            Postal Code:
            <input name="postalCode" type="text" />
          </label>
          <br/>
          <label>
            Phone:
            <input name="phone" type="text" />
          </label>
          <br/>
          <button type="button" value="Add" onClick={this.props.callbacks.add.bind(null, this.state.firstName, this.state.lastName, this.state.street,
        		  this.state.city, this.state.state, this.state.postalCode, this.state.phone)}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContributorForm;