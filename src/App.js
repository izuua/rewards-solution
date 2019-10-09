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
    transactions.forEach(function(element) {
      if (element.transaction <= 50) {
        element.bonus = 0;
      } else if (element.transaction > 50 && element.transaction <= 100) {
        element.bonus = (element.transaction-50)*1;
      } else if (element.transaction > 100) {
        element.bonus = (element.transaction-100)*2 + 50
      }
    })
    this.setState({transactions})
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
            rewards={customer.bonus}
            />
        ))}
      </Wrapper>
    )
  }
}


export default App;
