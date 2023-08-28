"use client";

import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";

import style from './style.module.scss';

import Description from "./components/Description";
import ImageSlider from "./components/ImageSlider";
import ProductCart from "./components/ProductCart";
import Spesification from "./components/Spesification";
import Card from "../../../components/Card";
import { ArrowLeftIcon } from "../../../components/Icon";
import {siteConfig} from "../../../constant/config";
import useProduct from "../../../hooks/useProductDetail";

export default function ProductDetailPage() {
  const router = useRouter();
  const { data: product, error } = useProduct(router?.query?.id as any);

  if (error) return <div>Failed to load</div>;
  if (!product) return <div>Loading...</div>;
  return (
    <>
    <Head>
      <title>{siteConfig.title} | {product?.name}</title>
      <meta property="og:title" content={`${siteConfig.title} | ${product?.name}`} key="title" />
    </Head>

    <div className={clsx(['', style['detail-content']])}>
        <div className="d-flex items-flext-start product-title-wrapper">
          <Link href="/products" className="link mr-3">
            <ArrowLeftIcon />
          </Link>
          <h1 className={clsx([style["title"], 'm-0'])}>{product?.name || ''}</h1>
        </div>

        <ImageSlider product={product} />

        <ProductCart product={product} />

        <Card variant="transparent" className="p-4">
          <Description description={product.description} />
          <Spesification spesifications={product.detail_product} />
        </Card>
    </div>
    </>
  );
}
