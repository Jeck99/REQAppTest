import React, { FunctionComponent } from 'react';
import './custom-button.scss'
type CardButtonProps = {
  buttonTitle: string,
  dis:boolean,
  onClick?:any;
};

const CustomButton: FunctionComponent<CardButtonProps> = ({ buttonTitle,dis,onClick }) => 
  <div >
    <button className={`CustomButton ${dis}`} onClick={onClick} type="button" disabled={dis}>
      <i></i>{buttonTitle}
    </button>
  </div>


export default CustomButton;
