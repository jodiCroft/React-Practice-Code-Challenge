import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      index: 0,
      eatenSushi: [],
      yourTinderDatesWallet: 199,
    };
  }
  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((sushis) => {
        this.setState({
          sushis,
        });
      });
  }

  showMoreSushi = () => {
    this.setState({ index: this.state.index + 4 });
  };

  handleEatenSushi = (price, id) => {
    const eatenSushi = [...this.state.eatenSushi, price];
    this.setState({ eatenSushi });
    const moneyHeHasLeft = this.state.yourTinderDatesWallet - price;
    this.setState({ yourTinderDatesWallet: moneyHeHasLeft });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          showMoreSushi={this.showMoreSushi}
          handleEatenSushi={this.handleEatenSushi}
          eatSushi={this.eatSushi}
          index={this.state.index}
          sushis={this.state.sushis}
          yourTinderDatesWallet={this.state.yourTinderDatesWallet}
        />
        <Table
          yourTinderDatesWallet={this.state.yourTinderDatesWallet}
          eatenSushi={this.state.eatenSushi}
        />
      </div>
    );
  }
}

export default App;
