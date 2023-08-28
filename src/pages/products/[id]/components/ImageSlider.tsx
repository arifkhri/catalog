// import Slider from 'react-slick';
import { IProduct } from "../../../../types/product";
import { useState } from 'react';

interface Props {
  product: IProduct;
}

export default function ImageSlider({product}: Props) {
  const [slider, setSlider] = useState({
    slider1: null,
    slider2: null,
  })
  return (
    <div className="mb-5">
      {/* <Slider
          asNavFor={slider.slider2}
          ref={slider => (slider.slider1 = slider)}
        >
          {
            product.variants
          }
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
        </Slider>

        <Slider
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
