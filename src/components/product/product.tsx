import React, { FunctionComponent } from 'react';
import './product.scss'
import { Trade } from '../../Trades';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
type ProductProps = {
  item:Trade
};

const Product: React.FC <ProductProps>= ({item}) => {
  return (
    <div className="info">
      {item.company}
      <FontAwesomeIcon icon={faArrowLeft} />
     <Link to="/"><i className="button-link">Back</i></Link>
    </div>
  )
}

export default Product;