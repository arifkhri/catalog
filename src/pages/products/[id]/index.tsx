import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";

import style from "./style.module.scss";

import Description from "./components/Description";
import ImageSlider from "./components/ImageSlider";
import ProductCart from "./components/ProductCart";
import Spesification from "./components/Spesification";
import productsRest from "../../../api/products";
import Card from "../../../components/Card";
import { ArrowLeftIcon } from "../../../components/Icon";
import { siteConfig } from "../../../constant/config";
import { toIdrFormat } from "../../../core/utils";
import { IProduct } from "../../../types/product";

export async function getServerSideProps(context: any) {
  const product = await productsRest.getProductDetail(context.query.id);
  return { props: { product } };
}

interface Props {
  product: IProduct;
}

export default function ProductDetailPage({ product }: Props) {
  if (!product) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>
          {siteConfig.title} | {product?.name}
        </title>
        <meta
          property="og:title"
          content={`${siteConfig.title} | ${product?.name}`}
          key="title"
        />
      </Head>

      <div className={clsx(["", style["detail-content"]])}>
        <div className="d-flex items-flext-start product-title-wrapper">
          <Link href="/products" className="link mr-3">
            <ArrowLeftIcon />
          </Link>
          <h1 className={clsx([style["title"], "m-0"])}>
            {product?.name || ""}
          </h1>
        </div>

        <ImageSlider product={product} />

        <div className="d-flex mb-4">
          <span className={clsx([style["price"], "m-auto"])}>
            {toIdrFormat(product.price)}
          </span>
        </div>

        <ProductCart product={product} />

        <Card variant="transparent" className="p-4">
          <Description description={product.description} />
          <Spesification spesifications={product.detail_product} />
        </Card>
      </div>
    </>
  );
}
