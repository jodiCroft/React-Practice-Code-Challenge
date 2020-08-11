import React, { Fragment } from "react";

const Table = (props) => {
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return (
        <div
          key={Math.random()}
          className="empty-plate"
          style={{ top: -7 * index }}
        />
      );
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.yourTinderDatesWallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">{renderPlates(props.eatenSushi)}</div>
      </div>
    </Fragment>
  );
};

export default Table;
