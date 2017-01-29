import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

class DepositTable extends Component {
  
  constructor(props) {
    super(props);
    
    this.state={
	    contributions:[]
    }
    
    this.handleChange = this.handleChange.bind(this);
  }
  
//  componentDidMount(){
//    this.setContributions();
//  }

//  componentDidUpdate(){
//	this.setContributions();
//  }
  
  setContributions() {
	  let nextState = [];
	  for(let contributor of this.props.contributors) {
		for (let category of this.props.categories) {
			let contribution;
			let found = false;
			if(this.props.deposit.contributions) {
				for (contribution of this.props.deposit.contributions) {
					if(contribution.contributor.id == contributor.id && contribution.category.id == category.id) {
						found = true;
						break;
					}
				}
			}
			if(!found) {
				contribution={
						contributor:contributor,
						category:category
				};
			}
			nextState = update(nextState, {$push: [contribution]});
		}
	  }
	  if(JSON.stringify(nextState) != JSON.stringify(this.state.contributions)) {
  	    this.setState({contributions:nextState});
	  }
  }
  
  handleChange(event) {
	console.log("Here3");
//	for (let i = 0; i < this.state.contributions.length; i++) {
//		if(this.state.contributions[i].contributor.id == parseInt(event.target.dataset.contributorId,10) 
//				&& this.state.contributions[i].category.id == parseInt(event.target.dataset.categoryId,10)) {
//			let nextState = update(this.state.contributions, {[i]: {amount: {$set: parseInt(event.target.value,10)}}});
//			this.setState({contributions:nextState});
//			console.log("Here2 ");
//			break;
//		}
//	}
  }
	
  render() { 
	let columns = this.props.categories.map((category) => {
		return <th key={category.id}>{category.name}</th>
	});
	
	let contributions = this.props.contributors.map((contributor) => {
		let fields = this.props.categories.map((category) => {
			let contribution;
			let found = false;
			for (contribution of this.state.contributions) {
				if(contribution.contributor.id == contributor.id && contribution.category.id == category.id) {
					found = true;
					break;
				}
			}
			if(!found) {
				contribution={
						contributor:contributor,
						category:category
				};
			}
			return <td key={contributor.id + " " + category.id}><input type="text" value={contribution.amount} 
						data-contributor-id={contributor.id} data-category-id={category.id} onChange={this.handleChange}/></td>
		});
		return (<tr key={contributor.id}><td>{contributor.lastName + ", " + contributor.firstName}</td>{fields}</tr>);
	});
	
    return (
     <div>
      <label>
        Deposit #:
        <input type="text" name="depositNumber" value={this.props.deposit.depositNumber}/>
      </label>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {columns}
          </tr>
        </thead>
        <tbody>
          {contributions}
        </tbody>
      </table>
      <button>Save</button>
     </div>
    );
  }
}

export default DepositTable;