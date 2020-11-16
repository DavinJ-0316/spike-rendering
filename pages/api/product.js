import getProduct from '../../services/getProduct';

const GetProduct = (req, res)  => getProduct().then((data) => res.status(200).json(data));

export default GetProduct;