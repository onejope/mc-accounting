import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { DateField } from 'react-date-picker';
import 'react-date-picker/index.css';
import Moment from 'moment';
import DepositByDateContainer from './DepositByDateContainer';

class DepositPanel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: '',
    		      date: Moment().format("YYYY-MM-DD").toString()};
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(dateString) {
	  this.setState({date: dateString});
  }
	
  render() { 
    return (
     <div>
      <DateField 
          dateFormat="YYYY-MM-DD"
          updateOnDateClick={true}
          collapseOnDateClick={true}
          forceValidDate={true} 
          defaultValue={this.state.date}
          onChange={(dateString, { dateMoment, timestamp}) => {this.handleChange(dateString)}} />
      <DepositByDateContainer date={this.state.date} contributors={this.props.contributors} 
      			categories={this.props.categories}/>
     </div>
    );
  }
}

export default DepositPanel;