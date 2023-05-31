import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import Heading from '../Heading/Heading'
import RichText from '../RichText/RichText'
import './technologycard.scss'
import Button from '../Button/Button'

export const TechnologyCard = ({
  otherClasses,
  heading,
  _rawSubText,
  desktopImage,
  mobileImage,
  reversed,
  mobileReversed,
  button,
}) => {
  const technologyCardClasses = clsx(
    otherClasses,
    'w-full flex gap-10 xl:gap-20 items-center',
    reversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
    mobileReversed ? 'flex-col-reverse' : 'flex-col'
  )

  return (
    <div className={technologyCardClasses} data-testid="technology-card">
      <div className="w-full lg:w-2/4">
        <Heading
          type="h2"
          otherClasses="font-Exo2 font-semibold text-primary_green_600 mb-4"
        >
          {heading}
        </Heading>
        <RichText
          richText={_rawSubText}
          otherClasses="technology_card_rich_text"
        />
        {button?.label && <Button {...button} />}
      </div>
      <div className="w-full lg:w-2/4">
        <Image
          imageData={desktopImage}
          otherClasses="w-full !hidden lg:!block"
        />
        <Image imageData={mobileImage} otherClasses="w-full lg:!hidden" />
      </div>
    </div>
  )
}

export default TechnologyCard
