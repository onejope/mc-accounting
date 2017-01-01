import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CategoryList from './CategoryList';
//import AddCategory from './AddCategory';

class CategoryPanel extends Component {
  render() { 
    return (
      <CategoryList categories={this.props.categories} />
    );
  }
}

export default CategoryPanel;