import React from 'react'
import clsx from 'clsx'
import SliderSection from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Slider = ({
  otherClasses,
  children,
  customSettings,
  customClass,
  ref,
}) => {
  const sliderClasses = clsx(otherClasses)

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    ...customSettings,
  }
  return (
    <div className={sliderClasses} data-testid="slider">
      <SliderSection {...settings} className={customClass} ref={ref}>
        {children}
      </SliderSection>
    </div>
  )
}

export default Slider
