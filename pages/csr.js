import React, { useEffect, useReducer, useState } from 'react';
import getProduct from '../apis/getProduct';
import ProductPage from '../components/ProductPage';

const reducer = (state, action) => {
  switch(action.type) {
    case 'GET_DATA_SUCCESSFUL':
      return { ...state, loading: false, data: action.data };

    default:
      return state;
  }
}

const CSR = () => {
  const [state, dispatch] = useReducer(reducer, { loading: true });

  useEffect(() => {
    getProduct()
      .then((data) => dispatch({
        type: 'GET_DATA_SUCCESSFUL',
        data,
      }));
  }, []);

  const { loading, data } = state;

  if (loading) {
    return (<div>Loading...</div>)
  }

  return (
    <ProductPage {...data} />
  );
};

export default CSR;