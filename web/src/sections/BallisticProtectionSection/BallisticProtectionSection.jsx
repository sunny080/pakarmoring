import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import BallisticProtectionCard from '../../components/BallisticProtectionCard/BallisticProtectionCard'

export const BallisticProtectionSection = ({
  otherClasses,
  heading,
  title,
  cards,
}) => {
  const ballisticProtectionSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] mx-auto w-full px-4 lg:px-[60px] xl:px-[156px] my-[60px] lg:my-[120px]'
  )

  return (
    <section
      className={ballisticProtectionSectionClasses}
      data-testid="ballistic-protection-section"
    >
      <div className="flex flex-col items-center gap-4 w-full mx-auto max-w-[1014px]">
        <Heading
          type="h4"
          otherClasses="font-Exo2 font-semibold text-primary_green_600 text-center"
        >
          {heading}
        </Heading>

        <p className="text-center font-Open_Sans font-nomal text-base leading-6 text-black/70">
          {title}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {cards.map((nodes, i) => {
          return <BallisticProtectionCard {...nodes} key={i} />
        })}
      </div>
    </section>
  )
}

export default BallisticProtectionSection

export const query = graphql`
  fragment BallisticProtectionSection on SanityBallisticProtection {
    __typename
    identifier
    heading
    title
    cards {
      protection
      caliber
      ammunition
      mass
      testRange
      bulletVelocity
      strikes
      weaponImage {
        ...CustomImage
      }
    }
  }
`
