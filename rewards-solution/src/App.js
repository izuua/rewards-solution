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
      <h1 className="title">Rewards Program</h1>
    )
  }
}


export default App;
