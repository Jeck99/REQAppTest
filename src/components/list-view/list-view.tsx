import React, { FunctionComponent } from 'react';
import './list-view.scss'
import { Trade } from '../../Trades';
import Info from '../info';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type ListViewProps = {
  trads: any[];
  table: any[];
};

const ListView: FunctionComponent<ListViewProps> = ({trads,table }) => {
  function TradsList(trades: Trade[]) {
    const listItems = 
    trades.map((val: Trade, index: any) =>
      <tr className="trade-td" key={index}>
        <td className={`trade-td tradeName`} >{val.tradeName}</td>
        <td className={`trade-td status`} >{val.status}</td>
        <td className={`trade-td contracts`} >{val.contracts}</td>
        <td className={`trade-td company`} >{val.company}</td>
        <td className={`trade-td contractValue`} >{val.contractValue}</td>
        <td><Link to="/info"><i className="button-link">Info <FontAwesomeIcon icon={faArrowRight} /></i></Link></td>
      </tr>
    );
    return listItems;
  }
  function HeadersList(headersList: any[]) {
    const headersItems = headersList.map((val: any, index: any) =>
      <td className={`trade-td ${val}`} key={`index ${index}`}>{val}</td>
    );
    return headersItems;
  }
  return (
    <table>
      <thead>
        <tr>
          {HeadersList(table)}
          <td className="REQdetail"><i>REQdetail</i></td>
        </tr>
      </thead>
      <tbody>
        {TradsList(trads)}
      </tbody>
    </table>
  )
}

export default ListView;