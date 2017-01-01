import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AccountContainer from './AccountContainer';
import CategoryContainer from './CategoryContainer';

class App extends Component {
  render() { 
    return (
      <div>
        <h1>MCCN Contributions</h1>
        <Tabs onSelect={this.handleSelect} selectedIndex={0}>
          <TabList>
            <Tab>Accounts</Tab>
            <Tab>Categories</Tab>
          </TabList>
          <TabPanel>
            <AccountContainer />
          </TabPanel>
          <TabPanel>
            <CategoryContainer />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
  
  handleSelect() {
	  
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;