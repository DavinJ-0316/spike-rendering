import axios from 'axios';

const API_PATH = '/api';

const getInstance = (ctx = {}) => {
  const { req } = ctx;
  console.log();

  const baseURL = req ? `http://${req.headers.host}${API_PATH}` : API_PATH;
  const instance = axios.create({ baseURL });

  return instance;
};

const getProduct = (ctx) => ()  => {
  const instance = getInstance(ctx);

  return instance.get('/product').then(({ data }) => data);
};

export default getProduct;