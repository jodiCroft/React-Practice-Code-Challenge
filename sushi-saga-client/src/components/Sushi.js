import React, { Fragment, Component } from "react";

class Sushi extends Component {
  constructor() {
    super();
    this.state = {
      hidden: false,
      clickable: true,
    };
  }

  hasEnoughMoney = (price, id) => {
    this.setState({ hidden: true, clickable: false }),
      this.props.handleEatenSushi(price, id);
  };

  hideSushi = (price, id) => {
    this.state.clickable
      ? this.props.yourTinderDatesWallet >= price
        ? this.hasEnoughMoney(price, id)
        : alert(
            `LEAVE THE PREMISES - YOU HAVE NO MORE MONEY LEFT - STOP STEALING SUSHI!!!!`
          )
      : alert(`You already ate that, tubby...`);
  };
  render() {
    const sushi = this.props.sushi;
    return (
      <div className="sushi">
        <div
          className="plate"
          onClick={() => this.hideSushi(sushi.price, sushi.id)}
        >
          {this.state.hidden ? null : <img src={sushi.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
