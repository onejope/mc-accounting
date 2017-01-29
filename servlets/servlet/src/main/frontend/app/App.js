import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AccountContainer from './AccountContainer';
import AccountPanel from './AccountPanel';
import CategoryContainer from './CategoryContainer';
import CategoryPanel from './CategoryPanel';
import ContributorContainer from './ContributorContainer';
import ContributorPanel from './ContributorPanel';
import DepositPanel from './DepositPanel';

class App extends Component {
  render() { 
    return (
      <div>
        <h1>MCCN Contributions</h1>
        <Tabs onSelect={this.handleSelect} selectedIndex={0}>
          <TabList>
            <Tab>Accounts</Tab>
            <Tab>Categories</Tab>
            <Tab>Contributors</Tab>
            <Tab>Deposit</Tab>
          </TabList>
          <TabPanel>
            <AccountContainer>
              <AccountPanel />
          	</AccountContainer>
          </TabPanel>
          <TabPanel>
            <AccountContainer>
              <CategoryContainer>
                <CategoryPanel />
              </CategoryContainer>
            </AccountContainer>
          </TabPanel>
          <TabPanel>
            <ContributorContainer>
              <ContributorPanel />
            </ContributorContainer>
          </TabPanel>
          <TabPanel>
            <CategoryContainer>
              <ContributorContainer>
                <DepositPanel />
              </ContributorContainer>
            </CategoryContainer>
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