import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './info.scss'
import { Link } from 'react-router-dom';
type InfoProps = {
  //
};

const Info: React.FC = () => {
  return (
    <div className="info">
      <FontAwesomeIcon icon={faArrowLeft} />
     <Link to="/"><i className="button-link">Back</i></Link>
    </div>
  )
}

export default Info;
