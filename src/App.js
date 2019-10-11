import React, { Component } from "react";
import CustomerCard from "./components/Customers";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import transactions from "./models/transactions.json";
import './App.css';

class App extends Component {
  state = {
    transactions
  }

  componentDidMount() {
    // loops over each transactions to look at the price and adds reward points
    transactions.forEach(function (element) {
      if (element.transaction <= 50) {
        // if $50 or under, no points are added
        element.rewards = 0;
      } else if (element.transaction > 50 && element.transaction <= 100) {
        // if over $50, add 1 point for ever dollar after 50
        element.rewards = (element.transaction - 50) * 1;
      } else if (element.transaction > 100) {
        // if over $100, add 2 points for every dollar after 100 and 1 point for every dollar over 50 up to 100
        element.rewards = (element.transaction - 100) * 2 + 50
      }
    })
    // update the state with the new transactions object
    this.setState({ transactions })
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
            rewards={customer.rewards}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
