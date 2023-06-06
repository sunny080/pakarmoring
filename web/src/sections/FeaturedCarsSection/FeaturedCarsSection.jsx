import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import RichText from '../../components/RichText/RichText'
import './featuredcarsection.scss'
import Slider from '../../components/Slider/Slider'
import Image from '../../components/Image/Image'
import Icon from '../../components/Icon/Icon'
export const FeaturedCarsSection = ({ otherClasses, heading, _rawSubText }) => {
  const featuredCarsSectionClasses = clsx(
    otherClasses,
    'pb-[120px] pt-20 bg-[#15521438] my-[64px] lg:my-[120px]'
  )
  function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <button
        className="lg:block hidden absolute -left-12 top-2/4 translate-y-[-50%] p-2 border-[1px] border-black rounded-full transition duration-300 hover:scale-[1.1]"
        onClick={onClick}
      >
        <Icon
          icon="chevron-down"
          otherClasses="rotate-90"
          iconHeight={24}
          iconWidth={24}
        />
      </button>
    )
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <button
        className="lg:block hidden absolute -right-12 top-2/4 translate-y-[-50%] p-2 border-[1px] border-black rounded-full transition duration-300 hover:scale-[1.1]"
        onClick={onClick}
      >
        <Icon
          icon="chevron-down"
          otherClasses="-rotate-90"
          iconHeight={24}
          iconWidth={24}
        />
      </button>
    )
  }

  const {
    allSanityArmoredVehiclePages: { nodes },
  } = useStaticQuery(graphql`
    query dropDown {
      allSanityArmoredVehiclePages(filter: { isFeautred: { eq: true } }) {
        nodes {
          heading
          image {
            ...CustomImage
          }
          slug {
            current
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
        },
      },
    ],
  }

  const slider = useRef(null)

  function scroll(e) {
    if (slider === null) return 0

    e.wheelDelta > 0 ? slider.current.slickPrev() : slider.current.slickNext()
  }

  useEffect(() => {
    window.addEventListener('wheel', scroll, true)

    return () => {
      window.removeEventListener('wheel', scroll, true)
    }
  }, [])

  return (
    <section
      className={featuredCarsSectionClasses}
      data-testid="featured-cars-section"
    >
      <div className="max-w-[1512px] mx-auto w-full px-4 lg:px-[60px] xl:px-[156px]">
        <div className="max-w-[720px] mx-auto w-full">
          <Heading
            type="h2"
            otherClasses="font-Exo2 font-semibold text-black text-center mb-4"
          >
            {heading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="featured_cars_rich_text"
          />
        </div>
        <div className="w-full mt-10">
          <Slider
            refs={slider}
            customSettings={settings}
            customClass="featured_cars_section_slider"
          >
            {nodes.map(({ image, heading, slug: { current } }) => {
              return (
                <div className="w-full px-3">
                  <Link
                    to={`/${current}`}
                    className="flex w-full flex-col gap-4 items-start group cur"
                  >
                    <div className="relative overflow-hidden h-[250px] rounded-[12px]">
                      <Image
                        imgClassName="rounded-[12px]"
                        imageData={image}
                        otherClasses="rounded-[12px] h-full !abbsolute left-0 top-0 transition duration-500 group-hover:rotate-[3deg] group-hover:scale-[1.05]"
                      />
                    </div>
                    <Heading
                      type="h6"
                      otherClasses="font-Exo2 text-black font-semibold transition group-hover:text-primary_green_600"
                    >
                      {heading}
                    </Heading>
                  </Link>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCarsSection

export const query = graphql`
  fragment FeaturedCarsSection on SanityFeaturedCarsSection {
    __typename
    identifier
    heading
    _rawSubText
  }
`
