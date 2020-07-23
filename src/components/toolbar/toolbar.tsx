import React, { FunctionComponent } from 'react';
import CustomButton from '../custom-button';
import './toolbar.scss'
import AddNew from '../add-new';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faTable } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../contracts';
import { allActions } from '../../redux/actions/actions';
type ToolbarProps = {
  buttons?: any;
};

const Toolbar: FunctionComponent<ToolbarProps> = ({ buttons }) =>{
const dispatch = useDispatch();
const showTh = useSelector<AppState, boolean>(state => state.viewState.taggleMenu);

function handleMenuTaggle() {
  dispatch(allActions.taggleView());
}
function Butoons(headersList: any[]) {
  if(showTh){
  const ButoonsItems = headersList.map((val: any, index: any) =>
    <CustomButton key={index} dis={true} buttonTitle={val} />);
    return ButoonsItems;
  }  
}
  return(<div className="Toolbar">
    <h1 className="TradsTitle">Trades</h1>
    <div className="ButtonsSection">
      <CustomButton dis={true} buttonTitle={"Search"} />
      {Butoons(buttons)}
      <AddNew />
      <div onClick={handleMenuTaggle} className={`menuIcon ${showTh}`}><FontAwesomeIcon icon={faTable} /></div>
      <div onClick={handleMenuTaggle} className={`menuIcon ${!showTh}`}><FontAwesomeIcon icon={faAlignJustify} /></div>
    </div>
  </div>)}


export default Toolbar;
