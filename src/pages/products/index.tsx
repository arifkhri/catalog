import dynamic from 'next/dynamic'



// import {product} from '../../api';
// import {ProductCategories} from '../../types/product';
import List from './components/List';
// export async function getServerSideProps() {
  //   const productCategories = await product.getProductCategories();

  //   return { props: { productCategories } }
  // }
// const DynamicList = dynamic(() => import('./components/List'), {
//   loading: () => <p>Loading...</p>,
// });

export default function ProducstPage() {

  return (
    <List />
  )
}
