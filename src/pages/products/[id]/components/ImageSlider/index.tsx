import clsx from "clsx";
import { useState } from "react";
import Slider from "react-slick";

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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
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
      <Slider
        {...settings}
        asNavFor={slider.slider2}
        ref={(sliderRef) => (slider.slider1 = sliderRef)}
      >
        {
          buildSliderItem()
        }
      </Slider>

      {/* <Slider
          asNavFor={slider.slider1}
          ref={slider => (slider.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
    </div>
  );
}
