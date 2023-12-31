import { motion } from "framer-motion";
import Head from "next/head";

import style from "./style.module.scss";

import ItemList from "./components/ItemList";
import productAPI from "../../api/products";
import { siteConfig } from "../../constant/config";
import { IProduct } from "../../types/product";

export async function getServerSideProps() {
  const products = await productAPI.getProducts();

  return { props: { products } };
}

interface Props {
  products: IProduct[];
}

export default function ProductPage({ products }: Props) {
  if (!products) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{siteConfig.title} | List Produk</title>
        <meta
          property="og:title"
          content={`${siteConfig.title} | List Produk`}
          key="title"
        />
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
