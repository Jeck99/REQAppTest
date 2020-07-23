import React, { useEffect } from 'react';
import { allActions } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../contracts';
import { Trade } from '../../Trades';
import CardView from '../card-view';
import ListView from '../list-view';

type HomeProps = {
  //
};

const Home : React.FC<HomeProps> = ({ }) => {
  useEffect(() => {
    dispatch(allActions.taggleView());
  }, [])
  const dispatch = useDispatch();
  const trades = useSelector<AppState, Trade[]>(state => state.tradesState.trades);
  const showTh = useSelector<AppState, boolean>(state => state.viewState.taggleMenu);
  const tableTh = ["tradeName", "status", "contract", "company", "contractValue"];
  function TradesList() {
    if (trades.length > 0) {
      if (showTh) {
        return trades?.map((val: Trade, index: any) =>
          <CardView key={index} tradeObj={val} showDetailsFlag={showTh} />
        );

      }
      return <ListView trads={trades} table={tableTh}></ListView>
    }
  }

    return (
    <div className="cardsCont">
    {TradesList()}
  </div>      
    )          

}

export default Home;
