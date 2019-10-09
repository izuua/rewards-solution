import React from 'react';
import CustomerCard from "./components/Customers";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import transactions from "./models/transactions.json";
import './App.css';

class App extends React.Component {
  state = {
    transactions
  }

  render() {
    return (
      <Wrapper>
        <Title>Rewards Program</Title>
        {this.state.transactions.map(customer => (
          <CustomerCard
            id={customer.id}
            key={customer.id}
            name={customer.name}
            transaction={customer.transaction}
            />
        ))}
      </Wrapper>
    )
  }
}


export default App;
