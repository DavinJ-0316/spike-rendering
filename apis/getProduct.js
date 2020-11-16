import axios from 'axios';

const getProduct = ()  => axios.get('/api/product').then(({ data }) => data);

export default getProduct;