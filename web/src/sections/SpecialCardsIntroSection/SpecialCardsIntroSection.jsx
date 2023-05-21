import React from 'react'
import clsx from 'clsx'
import { Link, graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading/Heading'
import './specialcardintrosection.scss'

export const SpecialCardsIntroSection = ({ otherClasses, cards }) => {
  const specialCardsIntroSectionClasses = clsx(
    otherClasses,
    'w-full py-10 special_cards_intro_section_main_container'
  )

  return (
    <section
      className={specialCardsIntroSectionClasses}
      data-testid="special-cards-intro-section"
    >
      <div className="max-w-[1512px] w-full mx-auto px-4 lg:px-20 xl:px-[156px] grid sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 ">
        {cards.map(({ slug: { current }, heading, image }) => {
          return (
            <Link to={`/${current}`} className="w-full group">
              <Image
                imgClassName="rounded-[4px]"
                imageData={image}
                otherClasses="w-full h-[150px] grayscale group-hover:grayscale-0 transition duration-300 rounded-[4px]"
              />
              <p className="text-black font-Exo2 font-medium mt-4 text-base leading-6 group-hover:text-primary_green_600 transition group-hover:font-semibold duration-300 ">
                {heading}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default SpecialCardsIntroSection

export const query = graphql`
  fragment SpecialCardsIntroSection on SanitySpecialCardsIntroSection {
    __typename
    identifier
    cards {
      slug {
        current
      }
      heading
      image {
        ...CustomImage
      }
    }
  }
`
