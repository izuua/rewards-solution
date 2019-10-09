import React from 'react';
import CustomerCard from "./components/Customers";
import Wrapper from "./components/Wrapper";
import transactions from "./models/transactions.json";
import './App.css';

class App extends React.Component {
  state = {
    transactions
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Rewards Program</h1>
        {this.state.transactions.map(customer => (
          <CustomerCard>
            id={customer.id}
            key={customer.id}
            name={customer.name}
            transaction={customer.transaction}
          </CustomerCard>
        ))}
      </Wrapper>
    )
  }
}


export default App;
