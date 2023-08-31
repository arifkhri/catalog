import clsx from "clsx";
import { Carousel } from 'react-responsive-carousel';

import style from './style.module.scss'

import { IProduct, IVariantValue } from "../../../../../types/product";

interface Props {
  product: IProduct;
}

export default function ImageSlider({ product }: Props) {
  function setItemComp(items: IVariantValue[]) {
    const sliderItem: any = [];
    items.forEach((item: IVariantValue) => {
      if(item.image) {
        sliderItem.push(
          <div>
            <img src={item.image} width="300px" />
          </div>
        )
      }
    });
    return sliderItem;
  }

  function buildSliderItem() {
    return (product?.variants || []).map((variant) => {
      return setItemComp(variant.values);
    });
  }

  return (
    <div className={clsx([style['image-slider']])}>
      <Carousel autoPlay thumbWidth={50} showStatus={false} showIndicators={false} showThumbs={product?.variants.length > 1}>
        {
          buildSliderItem()
        }
      </Carousel>
    </div>
  );
}
