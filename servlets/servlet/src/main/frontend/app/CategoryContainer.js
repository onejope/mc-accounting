import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CategoryPanel from './CategoryPanel';

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
  
  render() { 
    return (
      <CategoryPanel categories={this.state.categories} />
    );
  }
}

export default CategoryContainer;