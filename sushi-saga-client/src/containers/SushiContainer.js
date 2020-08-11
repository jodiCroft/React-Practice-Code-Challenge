import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.slice(props.index, props.index + 4).map((sushi) => (
          <Sushi
            handleEatenSushi={(price, id) => props.handleEatenSushi(price, id)}
            sushi={sushi}
            key={sushi.id}
            yourTinderDatesWallet={props.yourTinderDatesWallet}
          />
        ))}
        <MoreButton showMoreSushi={props.showMoreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
