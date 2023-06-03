import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import { useRef } from 'react'
import { useEffect } from 'react'
import Lottie from 'lottie-web'
import './productherosection.scss'
import { useState } from 'react'
import RichText from '../../components/RichText/RichText'

export const ProductHeroSection = ({
  otherClasses,
  heading,
  catalog,
  specification,
  protectionDetial,
  protectionLevel,
  vehiclesImages,
  _rawVehiclesOverView,
  _rawEnhancement,
  _rawModification,
  _rawMakeCountry,
  toggleFunc,
}) => {
  const productHeroSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] mx-auto w-full px-4 lg:px-[60px] xl:px-[156px] mt-[74px] lg:mt-[136px] pt-10'
  )
  const container = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../images/animations/protection-animation.json'),
    })
  }, [container])

  const [toggleTabs, setToggleTabs] = useState('overview')
  const tabsFunc = (e) => {
    setToggleTabs(e)
  }

  return (
    <section
      className={productHeroSectionClasses}
      data-testid="product-hero-section"
    >
      <div className="w-full flex flex-wrap-reverse gap-6  items-center justify-between">
        <Heading
          type="h1"
          otherClasses="font-Exo2 text-primary_green_600 font-semibold "
        >
          {heading}
        </Heading>
        <Button
          variant="text-link"
          label="See All Vehicles"
          otherClasses="hover:text-primary_green_600"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="w-full lg:w-[65%]">
          <div className="flex gap-2 mb-6">
            <button
              className="px-4 py-2 text-sm font-Exo2 leading-5 text-white rounded bg-[#C08836]"
              onClick={() => toggleFunc('Contact Us')}
            >
              Request More Info
            </button>
            <a
              href={catalog?.asset?.url}
              target="_blank"
              rel="noopener noreferrer"
              download={catalog?.assets?.url}
              className="flex items-center gap-2 bg-primary_green_600 px-4 py-2 rounded text-sm leading-5 font-medium text-white font-Exo2 hover:bg-[#133807] transition "
            >
              <Icon icon="download-white-icon" iconHeight={20} iconWidth={20} />
              Download Catalog
            </a>
          </div>
          <ProductSlider data={vehiclesImages} />
          <div className="shadow-md py-6 px-6 mt-6 bg-[#F1F1F1]/80 rounded-[8px]">
            <Heading
              type="h2"
              otherClasses="text-black font-semibold font-Exo2 mb-6"
            >
              Armor Level
            </Heading>
            <div className="flex items-center">
              <div
                className="w-[100px] h-[100px] animated_box_main_container"
                ref={container}
              ></div>
              <Heading
                type="h3"
                otherClasses="text-black font-semibold font-Exo2 mb-3"
              >
                {protectionLevel}
              </Heading>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-x-6 gap-4 sm:gap-y-2 ">
              {protectionDetial.map((nodes) => {
                return <p>{nodes}</p>
              })}
            </div>
          </div>
          <div className="w-full mt-6">
            <div className="flex mb-6 w-full overflow-auto">
              <button
                onClick={() => tabsFunc('overview')}
                className={clsx(
                  'px-4 py-2 text-sm font-Exo2 font-medium leading-5 rounded-tl-[4px] rounded-bl-[4px] whitespace-nowrap',
                  toggleTabs === 'overview'
                    ? 'bg-primary_green_600 text-white'
                    : 'bg-[#F1F1F1]/50 text-black'
                )}
              >
                Vehicle Overview
              </button>
              <button
                onClick={() => tabsFunc('enhancement')}
                className={clsx(
                  'px-4 py-2 text-sm font-Exo2 font-medium leading-5 whitespace-nowrap',
                  toggleTabs === 'enhancement'
                    ? 'bg-primary_green_600 text-white'
                    : 'bg-[#F1F1F1]/50 text-black'
                )}
              >
                Enhancement
              </button>
              <button
                onClick={() => tabsFunc('modification')}
                className={clsx(
                  'px-4 py-2 text-sm font-Exo2 font-medium leading-5 whitespace-nowrap',
                  toggleTabs === 'modification'
                    ? 'bg-primary_green_600 text-white'
                    : 'bg-[#F1F1F1]/50 text-black'
                )}
              >
                Modification
              </button>
              <button
                onClick={() => tabsFunc('make')}
                className={clsx(
                  'px-4 py-2 text-sm font-Exo2 font-medium leading-5 rounded-tr-[8px] rounded-br-[8px] whitespace-nowrap',
                  toggleTabs === 'make'
                    ? 'bg-primary_green_600 text-white'
                    : 'bg-[#F1F1F1]/50 text-black'
                )}
              >
                Make/Country
              </button>
            </div>
            {toggleTabs === 'overview' && (
              <RichText
                richText={_rawVehiclesOverView}
                otherClasses="procduct_hero_rich_text"
              />
            )}
            {toggleTabs === 'enhancement' && (
              <RichText
                richText={_rawEnhancement}
                otherClasses="procduct_hero_rich_text"
              />
            )}
            {toggleTabs === 'modification' && (
              <RichText
                richText={_rawModification}
                otherClasses="procduct_hero_rich_text"
              />
            )}
            {toggleTabs === 'make' && (
              <RichText
                richText={_rawMakeCountry}
                otherClasses="procduct_hero_rich_text"
              />
            )}
          </div>
        </div>
        <div className="w-full lg:w-[35%] h-fit sticky top-[136px] left-0 bg-[#F1F1F1]  pb-6">
          <Heading
            type="h4"
            otherClasses="text-white font-Exo2 text-center bg-primary_green_600 py-3"
          >
            Vehicle Specification
          </Heading>
          <div className="px-4 w-full pt-6">
            {specification.map(({ title, about }) => {
              return (
                <div className="w-full grid grid-cols-2 mb-2">
                  <p className="text-sm font-Exo2 font-semibold leading-5 text-black">{`${title}:`}</p>
                  <p className="text-sm font-Exo2 font-normal leading-5 text-black">
                    {about}
                  </p>
                </div>
              )
            })}
            <Button
              variant="secondary"
              label="Get Quote Now"
              otherClasses="w-full text-center mt-6 font-medium"
              onClick={() => toggleFunc('Contact Us')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductHeroSection

export const query = graphql`
  fragment ProductHeroSection on SanityProductSectionHero {
    __typename
    identifier
    heading
    catalog {
      asset {
        url
        description
      }
    }
    specification {
      title
      about
    }
    protectionDetial
    protectionLevel
    vehiclesImages {
      images {
        ...CustomImage
      }
    }
    _rawVehiclesOverView
    _rawEnhancement
    _rawModification
    _rawMakeCountry
  }
`
