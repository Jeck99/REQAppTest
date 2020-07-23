import React, { FunctionComponent } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.scss';

type HeaderProps = {
  //
};

const Header: FunctionComponent<HeaderProps> = () => {
  const headrButtons = ["DASHBOARD", "MASTER CONTRACT", "COMPONIES", "TRADES", "CHANGE ORDER PLATFORM"]
  function FakeHeaders(headersList: any[]) {
    const headersItems = headersList.map((val: any, index: any) =>
      <div key={index} className={`Item ${val}`}>
        {val}
      </div>
    );
    return headersItems;
  }
  return (
    <div className="Header">
      {FakeHeaders(headrButtons)}
      
      <FontAwesomeIcon icon={faSearch} />
      <div className="elementUserName"><span className="userName">DM</span></div>     
    </div>
  )
}
  ;

export default Header;