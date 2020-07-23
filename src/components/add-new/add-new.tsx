import React, { FunctionComponent, useState } from 'react';
import './add-new.scss'
import CustomButton from '../custom-button';
import { connect, useDispatch, useSelector } from 'react-redux'
import { addTradeAction, allActions } from '../../redux/actions/actions';
import { Trade } from '../../Trades';
import { AppState } from '../../contracts';

type AddNewProps = {
};

const AddNew: FunctionComponent<AddNewProps> = ({ }) => {
  const [show, setShow] = useState(false);
  const [trade, setTrade] =
    useState({
      _id:7,
      picture: 'http://placehold.it/32x32',
      tradeName: '',
      company: '',
      status: '',
      contracts: '',
      contractValue: 0
    });

  const dispatch = useDispatch();

  function handleClick() {
    setShow(!show);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (trade!=null) {
      dispatch(allActions.addTradeAction(trade));
      setShow(!show);
      setTrade(  {    
        _id:8,
        picture: 'http://placehold.it/32x32',
        tradeName: '',
        company: '',
        status: '',
        contracts: '',
        contractValue: 0
    })
    }
    event.preventDefault();
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTrade({
      ...trade,
      [event.target.name]: event.target.value
    });
    event.preventDefault();

  }
  const trades = useSelector<AppState, Trade[]>(state => state.tradesState.trades);

  return (
    <div>
      <CustomButton onClick={handleClick} dis={false} buttonTitle={"+Add New"} />
      <div className={`dialog ${show}`} id="myForm">
        <form onSubmit={handleSubmit} className="form-container">
          <i className="xCancel" onClick={handleClick}>X</i>
          <h1>Add New Trade</h1>
          <label><b>Trade Name</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter Trade Name" name="tradeName" required value={trade.tradeName} />
          <label><b>Status</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter Status" name="status" required value={trade.status} />
          <label><b>Contract</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter Contract" name="contracts" required value={trade.contracts} />
          <label><b>Company</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter Company" name="company" required value={trade.company} />
          <label><b>Contract Value</b></label>
          <input onChange={handleChange} type="text" placeholder="Enter Contract Value" name="contractValue" required value={trade.contractValue} />
          <button type="submit" className="btn">Add</button>
          <button type="button" className="btn cancel" onClick={handleClick}>Close</button>
        </form>
      </div>
    </div>)
}
const mapDipatchToProps = {
  addTradeAction
}
export default connect(null, mapDipatchToProps)(AddNew)