import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Contributor from './Contributor';

class ContributorList extends Component {
  render() { 
	let contributors = this.props.contributors.map((contributor) => {
		return <Contributor key={contributor.id} 
		                 contributor={contributor} />
	});  
    return (
      <div>
        {contributors}
      </div>
    );
  }
}

export default ContributorList;