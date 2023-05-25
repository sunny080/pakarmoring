import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import RichText from '../../components/RichText/RichText'
import './ourclientsection.scss'
import Slider from '../../components/Slider/Slider'
import Image from '../../components/Image/Image'

export const OurClientSection = ({
  otherClasses,
  heading,
  _rawSubText,
  cards,
}) => {
  const ourClientSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] px-4 lg:px-20 xl:px-[156px] w-full mx-auto mb-[64px] lg:mb-[120px]'
  )

  const settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    infinite: true,
    dots: false,
    pauseOnHover: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }

  return (
    <section
      className={ourClientSectionClasses}
      data-testid="our-client-section"
    >
      <div className="max-w-[720px] w-full mx-auto">
        <Heading
          type="h2"
          otherClasses="text-black font-Exo2 font-semibold text-center"
        >
          {heading}
        </Heading>
        <RichText
          richText={_rawSubText}
          otherClasses="our_client_section_rich_text mt-4"
        />
      </div>
      <div className="mt-10">
        <Slider customSettings={settings}>
          {cards.map(({ clientLogo }) => {
            return (
              <div className="w-full px-2">
                <Image imageData={clientLogo} otherClasses="" />
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default OurClientSection

export const query = graphql`
  fragment OurClientSection on SanityOurClientSection {
    __typename
    identifier
    heading
    _rawSubText
    cards {
      clientLogo {
        ...CustomImage
      }
    }
  }
`
