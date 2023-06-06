import React from 'react'
import clsx from 'clsx'
import Slider from '../Slider/Slider'
import Image from '../Image/Image'
import { useState } from 'react'
import './productslider.scss'

export const ProductSlider = ({ otherClasses, data }) => {
  const productSliderClasses = clsx(otherClasses, 'w-full')

  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  const TestimonailPrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={clsx(
          'w-[40px] h-[40px] flex items-center justify-center rounded absolute top-2/4 translate-y-[-50%] transition duration-300 left-4 bg-primary_green_600/30 hover:bg-primary_green_600 z-10 slider_arrow_container '
        )}
      >
        <span></span>
      </button>
    )
  }

  const TestimonailNextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={clsx(
          'w-[40px] h-[40px] flex items-center justify-center rounded absolute top-2/4 translate-y-[-50%] transition duration-300 right-4 bg-primary_green_600/30 hover:bg-primary_green_600 z-10 slider_arrow_container '
        )}
      >
        <span className="rotate-180"></span>
      </button>
    )
  }

  const settings1 = {
    asNavFor: nav2,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,
  }
  const settings2 = {
    infinite: true,
    asNavFor: nav1,
    speed: 1000,
    slidesToShow: 4,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    initialSlide: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className={productSliderClasses} data-testid="product-slider">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full max-w-[100%]">
          <Slider
            refs={(slider1) => setNav1(slider1)}
            customSettings={settings1}
            customClass="w-full slider_product_container"
          >
            {data.map(({ images }, index) => {
              return (
                <div className="w-full" key={index}>
                  <div className="w-full">
                    <Image
                      imgClassName="rounded-[12px]"
                      objectFit="cover"
                      imageData={images}
                      otherClasses="w-full h-[250px] sm:h-[400px] xl:h-[450px] rounded-[12px]"
                    />
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
        <div className="w-full max-w-[100%]">
          <Slider
            refs={(slider2) => setNav2(slider2)}
            customClass="w-full product_real_slider_container"
            customSettings={settings2}
          >
            {data.map(({ images }, index) => {
              return (
                <div className="w-full pr-2" key={index}>
                  <div className="w-full">
                    <Image
                      imageData={images}
                      otherClasses="w-full rounded-[8px] h-[119px]"
                    />
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ProductSlider
