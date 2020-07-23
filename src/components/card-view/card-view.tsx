import React, { FunctionComponent } from 'react';
import './card-view.scss'
import ReactLogo from '../../placeholder_.svg';
import { Trade } from '../../Trades';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CardViewProps = {
  tradeObj: Trade
  showDetailsFlag: boolean;
};

const CardView: FunctionComponent<CardViewProps> = ({ tradeObj, showDetailsFlag }) =>
  <div className="cardWrapper">
    <div className="cards">
      <Link to={`/product/:${tradeObj}`} >
        <img src={ReactLogo} alt="React Logo" />
      <div className="CardDetails">
        <h2 className="TradeName">{tradeObj.tradeName}</h2>
        <p className="Status">*{tradeObj.status}</p>
        <p className="Contract">{tradeObj.contracts}</p>
        <h1 className="Company">Subcontractor<p>{tradeObj.company}</p></h1>
        <h1 className="ContractValue">Contract Value<p>{tradeObj.contractValue}</p></h1>
      </div>
      <hr />
      <div className="infoReq"><h2>REQdetail</h2>
        <Link to="/info"><i className="button-link">Info <FontAwesomeIcon icon={faArrowRight} /></i></Link>
      </div>
      </Link>
    </div>  
  </div>

export default CardView;
