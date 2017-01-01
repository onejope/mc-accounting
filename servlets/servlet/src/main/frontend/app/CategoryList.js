import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';

class CategoryList extends Component {
  render() { 
	let categories = this.props.categories.map((category) => {
		return <Category key={category.id} 
		                 id={category.id} 
		                 name={category.name} 
		                 taxDeductible={category.taxDeductible}
		                 account={category.account} />
	});  
    return (
      <div>
        {categories}
      </div>
    );
  }
}

export default CategoryList;