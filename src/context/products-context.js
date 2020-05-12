import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFavorite: (id) => {},
});

const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProductsList((currentList) => {
      const productIndex = currentList.findIndex((p) => p.id === productId);
      const updFav = !currentList[productIndex].isFavorite;
      const updatedProducts = [...currentList];
      updatedProducts[productIndex] = {
        ...currentList[productIndex],
        isFavorite: updFav,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;
