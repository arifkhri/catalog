import clsx from "clsx";
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';


import style from './style.module.scss'

import { IProduct, IVariantValue } from "../../../../../types/product";

interface Props {
  product: IProduct;
}

export default function ImageSlider({ product }: Props) {
  const [slider, setSlider] = useState<any>({
    slider1: '',
    slider2: '',
  });

  const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

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
    <div className={clsx(['mb-5', style['image-slider']])}>
      <Carousel autoPlay thumbWidth={50}>
        {
          buildSliderItem()
        }
      </Carousel>
    </div>
  );
}
