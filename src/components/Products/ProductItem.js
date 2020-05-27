import PropTypes from 'prop-types';
import React from 'react';
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
// import { ProductsContext } from '../../context/products-context';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';

const ProductItem = React.memo(({ id, isFav, title, description }) => {
  // const dispatch = useDispatch();
  // const { toggleFav } = useContext(ProductsContext);
  const dispatch = useStore(false)[1];
  const toggleFavHandler = () => {
    // dispatch(toggleFav(id));
    // toggleFav(id);
    dispatch('TOGGLE_FAV', id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={isFav ? 'is-fav' : ''}>{title}</h2>
        <p>{description}</p>
        <button
          type="button"
          className={!isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});
ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  isFav: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ProductItem;
