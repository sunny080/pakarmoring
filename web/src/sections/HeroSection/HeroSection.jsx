import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Slider from '../../components/Slider/Slider'
import Image from '../../components/Image/Image'
import './herosection.scss'
import RichText from '../../components/RichText/RichText'
import Button from '../../components/Button/Button'

export const HeroSection = ({ otherClasses, cards }) => {
  const heroSectionClasses = clsx(otherClasses, 'mt-[94px] lg:mt-[156px]')

  const [currentIndex, setCurrentIndex] = useState()

  function SampleNextArrow(props) {
    const { currentSlide } = props
    useEffect(() => {
      return setCurrentIndex(currentSlide)
    }, [currentSlide])
    return <></>
  }
  function SamplePrevArrow(props) {
    return <></>
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 7000,
    arrows: true,
    fade: true,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  console.log(currentIndex)
  return (
    <section className={heroSectionClasses} data-testid="hero-section">
      <Slider
        customSettings={settings}
        customClass="w-full hero_section_main_container "
      >
        {cards.map(
          (
            {
              isReversed,
              heading,
              _rawSubText,
              sideImage,
              backgroundImage,
              button,
            },
            index
          ) => {
            return (
              <div className="w-full h-[700px] relative bg-black overflow-hidden ">
                <Image
                  imageData={backgroundImage}
                  otherClasses={clsx(
                    '!absolute top-0 left-0 h-full w-full transition duration-[7s]',
                    currentIndex === index ? 'scale-125' : 'scale-1'
                  )}
                />
                <div className="h-full flex items-center w-full relative">
                  <div
                    className={clsx(
                      'w-full max-w-[1512px] mx-auto px-4 lg:px-[60px] xl:px-[156px] flex flex-col gap-10 justify-center lg:justify-start lg:items-center ',
                      isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                    )}
                  >
                    <div
                      className={clsx(
                        'w-full lg:w-[50%] flex flex-col items-center ',
                        isReversed ? 'lg:items-end' : 'lg:items-start'
                      )}
                    >
                      <div className="w-fit flex flex-col items-center lg:items-start">
                        <h2
                          className={clsx(
                            'text-white text-[42px] lg:text-[60px] font-bold font-Exo2 leading-[45px] lg:leading-[80px] transition duration-1000 delay-500 w-fit text-center lg:text-left',
                            currentIndex === index
                              ? 'translate-x-0 opacity-100'
                              : 'translate-x-[-100px] opacity-0'
                          )}
                        >
                          {heading}
                        </h2>
                        <RichText
                          richText={_rawSubText}
                          otherClasses={clsx(
                            'hero_section_rich_text transition duration-1000 delay-[1.1s] mt-5 w-fit',
                            currentIndex === index
                              ? 'translate-x-0 opacity-100'
                              : 'translate-x-[-100px] opacity-0'
                          )}
                        />
                        {button && (
                          <div
                            className={clsx(
                              'transition duration-1000 delay-[1.4s] mt-6 w-fit',
                              currentIndex === index
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-[-100px] opacity-0'
                            )}
                          >
                            <Button {...button} otherClasses=" text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:w-[50%]">
                      {sideImage?.asset && (
                        <Image
                          objectFit="contain"
                          imageData={sideImage}
                          otherClasses="w-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </Slider>
    </section>
  )
}

export default HeroSection

export const query = graphql`
  fragment HeroSection on SanityHeroSection {
    __typename
    identifier
    cards {
      isReversed
      heading
      _rawSubText
      sideImage {
        ...CustomImage
      }
      backgroundImage {
        ...CustomImage
      }
      button {
        ...Button
      }
    }
  }
`
