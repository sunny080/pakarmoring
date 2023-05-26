import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import { useState } from 'react'
import Icon from '../../components/Icon/Icon'
import RichText from '../../components/RichText/RichText'
import Accordion from '../../components/Accordion/Accordion'

export const FaqSection = ({ otherClasses, mainHeading, cards }) => {
  const faqSectionClasses = clsx(
    otherClasses,
    'max-w-[800px] w-full mx-auto px-4 lg:px-0 my-[64px] lg:my-[120px]'
  )

  return (
    <section className={faqSectionClasses} data-testid="faq-section">
      <Heading type="h2" otherClasses="text-black font-Exo2 font-semibold">
        {mainHeading}
      </Heading>
      <div className="flex flex-col gap-4 mt-10">
        {cards.map((nodes) => {
          return <Accordion {...nodes} />
        })}
      </div>
    </section>
  )
}

export default FaqSection

export const query = graphql`
  fragment FaqSection on SanityFaqSections {
    __typename
    identifier
    mainHeading
    cards {
      questionText
      _rawAnswer
    }
  }
`
