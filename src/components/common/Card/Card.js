import React from 'react';
import {
  string, node, number, oneOfType,
} from 'prop-types';

// Style
import './Card.css';

const Card = ({
  cardTitle,
  children,
  maxHeight,
  minHeight,
  maxWidth,
  backgroundColor,
  lineColor,
  textColor,
  textAlign,
}) => (
  <div className={`card ${backgroundColor} ${textColor}`} style={{ maxHeight, minHeight, maxWidth }}>
    <div className={`card-title border-bottom-${lineColor}`}>
      {cardTitle}
    </div>

    <div className="card-content" style={{ textAlign }}>
      {children}
    </div>
  </div>
);

Card.propTypes = {
  cardTitle: string.isRequired,
  children: node.isRequired,
  maxHeight: oneOfType([string, number]),
  minHeight: oneOfType([string, number]),
  maxWidth: oneOfType([string, number]),
  backgroundColor: string,
  lineColor: string,
  textColor: string,
  textAlign: string,
};

Card.defaultProps = {
  maxHeight: '',
  minHeight: 200,
  maxWidth: 500,
  backgroundColor: '.white',
  lineColor: 'light',
  textColor: 'text-black',
  textAlign: 'left',
};

export default Card;
