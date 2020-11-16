export { default } from '../components/ProductPage';
import getProduct from '../services/getProduct';

export async function getStaticProps() {
  const data = await getProduct();

  return {
    props: data,
  };
}
