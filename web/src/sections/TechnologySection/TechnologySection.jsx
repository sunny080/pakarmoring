import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard'

export const TechnologySection = ({ otherClasses, cards }) => {
  const technologySectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] mx-auto w-full px-4 lg:px-20 xl:px-[156px] flex flex-col gap-20 mb-[64px] lg:mb-[120px]'
  )

  return (
    <section
      className={technologySectionClasses}
      data-testid="technology-section"
    >
      {cards.map((nodes, index) => {
        return <TechnologyCard key={index} {...nodes} />
      })}
    </section>
  )
}

export default TechnologySection

export const query = graphql`
  fragment TechnologySection on SanityTechnologySection {
    __typename
    identifier
    cards {
      heading
      _rawSubText
      desktopImage {
        ...CustomImage
      }
      mobileImage {
        ...CustomImage
      }
      reversed
      mobileReversed
      button {
        ...Button
      }
    }
  }
`
