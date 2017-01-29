import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AddCategoryForm extends Component {
  constructor(props) {
	super(props);
	this.state = {name: ''};
	  
	this.handleChange = this.handleChange.bind(this);
  }  

  handleChange(event) {
	this.setState({[event.target.name]: event.target.value});
  }
	
  render() { 
	let options = this.props.accounts.map((account) => {
			return <option key={account.id} value={account.id}>{account.name}</option>
		});
    return (
      <div>
        Add Category
        <form onChange={this.handleChange}>
          <label>
            Name:
            <input name="name" type="text" />
          </label>
          <br/>
          <label>
            <input name="taxDeductible" type="checkbox" />
            Tax Deductible?
          </label>
          <br/>
          <label>
            Account:
            <select name="account">{options}</select>
          </label>
          <br/>
          <button type="button" value="Add" onClick={this.props.callbacks.add.bind(null, this.state.name, this.state.account, this.state.taxDeductible)}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddCategoryForm;