import React, { Component, FunctionComponent, useState } from 'react';
import { Trade } from '../../Trades';
import './card-details.scss'
type CardDetailsProps = {
  trade: Trade;
  showDetails: boolean;
};

const CardDetails: FunctionComponent<CardDetailsProps> = ({ trade }) => {
  const [showDetails, setShowDetails] = useState();

  function handleClick() {
    setShowDetails(showDetails);
  }
  return (
    <div>
      <div className={`dialog ${showDetails}`} id="myForm">
        <form className="form-container">
          <i className="xCancel" onClick={handleClick}>X</i>
          <h1>Add New Trade</h1>
          <label><b>Trade Name</b></label>
          <input type="text" name="tradeName" required value={trade.tradeName} />
          <label><b>Status</b></label>
          <input type="text" name="status" required value={trade.status} />
          <label><b>Contract</b></label>
          <input type="text" name="contracts" required value={trade.contracts} />
          <label><b>Company</b></label>
          <input type="text" name="company" required value={trade.company} />
          <label><b>Contract Value</b></label>
          <input type="text" name="contractValue" required value={trade.contractValue} />
        </form>
      </div>
    </div >
  )
}

export default CardDetails;
