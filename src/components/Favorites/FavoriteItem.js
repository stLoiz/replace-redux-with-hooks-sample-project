import PropTypes from 'prop-types';
import React from 'react';

import Card from '../UI/Card';
import './FavoriteItem.css';

const FavoriteItem = ({ title, description }) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
};
FavoriteItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default FavoriteItem;
