import PropTypes from 'prop-types';
import React from 'react';

import './Card.css';

const Card = ({ style, children }) => {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}).isRequired,
};
export default Card;
