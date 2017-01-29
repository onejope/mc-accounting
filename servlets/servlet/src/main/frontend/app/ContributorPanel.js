import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ContributorList from './ContributorList';
import AddContributorForm from './AddContributorForm';

class ContributorPanel extends Component {
  render() { 
    return (
      <div>
        <ContributorList contributors={this.props.contributors} />
        <AddContributorForm callbacks={this.props.contributorCallbacks} />
      </div>
    );
  }
}

export default ContributorPanel;