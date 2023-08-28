import { motion } from "framer-motion";
import Head from "next/head";
import useSWR from "swr";

import style from './style.module.scss';

import ItemList from "./components/ItemList";
import product from "../../api/products";
import { IProduct } from "../../types/product";
import { siteConfig } from "../../constant/config";

export default function ProductPage() {

  const { data: products, error } = useSWR<IProduct[]>("/products", () =>
    product.getProducts()
  );

  if (error) return <div>Failed to load</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <>

    <Head>
      <title>{siteConfig.title} | List Produk</title>
      <meta property="og:title" content={`${siteConfig.title} | List Produk`} key="title" />
    </Head>
    <div className={style["list-item"]}>
      {(products || []).map((product, index) => (
        <motion.div
          key={product.id}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{ collapsed: { scale: 0.4 }, open: { scale: 1 } }}
          transition={{ duration: 0.3, delay: 0.05 * index }}
        >
          <ItemList {...product} />
        </motion.div>
      ))}
    </div>
    </>
  );
}
