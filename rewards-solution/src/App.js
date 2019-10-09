import React from 'react';
import transactions from "./models/transactions.json"
import './App.css';

class App extends React.Component {
  state = {
    transactions
  }

  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}


export default App;
