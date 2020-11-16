import ProductPage from '../components/ProductPage';
import getProduct from '../apis/getProduct';

ProductPage.getInitialProps = async (ctx) => {
  const data = await getProduct(ctx)();

  return data;
};

export default ProductPage;