import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AddAccountForm extends Component {
  constructor(props) {
	super(props);
	this.state = {name: ''};
	  
	this.handleChange = this.handleChange.bind(this);
  }  

  handleChange(event) {
	this.setState({name: event.target.value});
  }
	
  render() { 
    return (
      <div>
        Add Account
        <form>
          <label>
            Name:
            <input type="text" onChange={this.handleChange} />
          </label>
          <button type="button" onClick={this.props.callbacks.add.bind(null, this.state.name)}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddAccountForm;