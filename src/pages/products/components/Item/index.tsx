import Link from 'next/link';

import clsx from 'clsx';
import Card from '../../../../components/Card';
import { toIdrFormat } from '../../../../core/utils';
import { IProduct } from '../../../../types/product';

import style from './style.module.scss';

export default function Item({
  brand,
  category,
  description,
  discountPercentage,
  id,
  images,
  price,
  rating,
  stock,
  thumbnail,
  name,
}: IProduct) {

  return (
    <Link href={`/products/${id}`} className="link">
    <Card className={clsx([style['card'], 'zoom pointer'])}>
      <div className={clsx(['d-flex flex-col items-center relative', style['item-content']])}>
        <img src={thumbnail} width="300px" />
        {/* <div style={{background: `url(${thumbnail})`, width: '100%', height: '300px'}} /> */}
        <span className={clsx(['mt-2', style['title']])}>{name}</span>
        <span className={clsx(['mt-2 absolute', style['price']])}>{toIdrFormat(price)}</span>
      </div>
    </Card>
    </Link>
  );
}
