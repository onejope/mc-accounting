import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CategoryList from './CategoryList';
import AddCategoryForm from './AddCategoryForm';

class CategoryPanel extends Component {
  render() { 
    return (
      <div>
        <CategoryList categories={this.props.categories} />
        <AddCategoryForm accounts={this.props.accounts} callbacks={this.props.categoryCallbacks} />
      </div>
    );
  }
}

export default CategoryPanel;