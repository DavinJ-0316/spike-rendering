import ProductPage from '../components/ProductPage';
import getProduct from '../apis/getProduct';

ProductPage.getInitialProps = async () => {
  const data = await getProduct();

  return data;
};

export default ProductPage;