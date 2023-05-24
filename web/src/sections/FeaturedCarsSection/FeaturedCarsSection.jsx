import React from 'react'
import clsx from 'clsx'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import RichText from '../../components/RichText/RichText'
import './featuredcarsection.scss'
import Slider from '../../components/Slider/Slider'
import Image from '../../components/Image/Image'
export const FeaturedCarsSection = ({ otherClasses, heading, _rawSubText }) => {
  const featuredCarsSectionClasses = clsx(
    otherClasses,
    'py-20 bg-[#15521438] my-[64px] lg:my-[120px]'
  )

  const {
    allSanityArmoredVehiclePages: { nodes },
  } = useStaticQuery(graphql`
    query featuredCards {
      allSanityArmoredVehiclePages {
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
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
  }

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
          <Slider customSettings={settings}>
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
