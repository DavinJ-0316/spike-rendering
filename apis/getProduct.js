import axios from 'axios';

const { PORT = 3000 } = process.env;
const API_PATH = '/api';

const getInstance = (ctx = {}) => {
  const { req } = ctx;

  const baseURL = req ? `http://localhost:${PORT}${API_PATH}` : API_PATH;
  const instance = axios.create({ baseURL });

  return instance;
};

const getProduct = (ctx) => ()  => {
  const instance = getInstance(ctx);

  return instance.get('/product').then(({ data }) => data);
};

export default getProduct;