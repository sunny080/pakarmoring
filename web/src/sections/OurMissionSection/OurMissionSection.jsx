import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import './ourmissionsection.scss'
import Button from '../../components/Button/Button'
import { useState } from 'react'
import Image from '../../components/Image/Image'

export const OurMissionSection = ({ otherClasses, cards, toggleFunc }) => {
  const ourMissionSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] mx-auto w-full px-4 lg:px-[60px] xl:px-[156px] flex flex-col-reverse lg:flex-row gap-10 xl:gap-20 my-[60px] lg:my-[120px]'
  )

  const [condition, setCondition] = useState('VISION')
  const conditionFunc = (e) => {
    setCondition(e)
  }

  return (
    <section
      className={ourMissionSectionClasses}
      data-testid="our-mission-section"
    >
      <div className="w-full lg:w-2/4 flex flex-col items-start gap-2">
        {cards.map(({ heading, _rawSubText }) => {
          return (
            <div>
              <button
                onClick={() => conditionFunc(heading)}
                className={clsx(
                  'text-[38px] leading-[45.6px] font-semibold font-Exo2 text-black mb-4',
                  condition === heading
                    ? 'text-primary_green_600'
                    : 'text-black/60 '
                )}
              >
                {heading}
              </button>
              <RichText
                richText={_rawSubText}
                otherClasses={clsx(
                  'our_mission_rich_text transition-max-h duration-300 h-fit overflow-hidden',
                  condition === heading ? 'max-h-[2000px]' : 'max-h-[0px]'
                )}
              />
            </div>
          )
        })}
        <Button
          otherClasses="mt-0"
          variant="secondary"
          label="Contact Us"
          onClick={() => toggleFunc('Contact Us')}
        />
      </div>
      <div className="w-full lg:w-2/4 lg:h-fit lg:sticky lg:top-[136px]">
        {cards.map(({ image, heading }) => {
          return (
            <Image
              imgClassName="rounded-[12px]"
              imageData={image}
              otherClasses={clsx(
                'w-full rounded-[12px]',
                condition === heading ? '!block' : '!hidden'
              )}
            />
          )
        })}
      </div>
    </section>
  )
}

export default OurMissionSection

export const query = graphql`
  fragment OurMissionSection on SanityOurMissionSection {
    __typename
    identifier
    cards {
      heading
      _rawSubText
      image {
        ...CustomImage
      }
    }
  }
`
