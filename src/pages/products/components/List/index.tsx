import useSWR from "swr";
import { motion } from "framer-motion";

import Item from "../Item";
import product from "../../../../api/products";
import { IProducts, IProductsParams } from "../../../../types/product";

import style from './style.module.scss';

export default function List() {
  const params: IProductsParams = {
    limit: "10",
    skip: "0",
    // category
  };

  const { data, error, isLoading } = useSWR<IProducts>("/products", () =>
    product.getProducts(params)
  );
  console.log("🚀 ~ file: List.tsx:17 ~ data:", data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={style["list-item"]}>
      {(data?.products || []).map((product, index) => (
        <motion.div
          key={product.id}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{ collapsed: { scale: 0.4 }, open: { scale: 1 } }}
          transition={{ duration: 0.3, delay: 0.05 * index }}
        >
          <Item {...product} />
        </motion.div>
      ))}
    </div>
  );
}
