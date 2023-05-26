import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import RichText from '../../components/RichText/RichText'
import Button from '../../components/Button/Button'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import './miniherosection.scss'

export const MiniHeroSection = ({
  otherClasses,
  heading,
  _rawSubText,
  button,
  backgroundDesktopImage,
  backgroundMobileImage,
}) => {
  const miniHeroSectionClasses = clsx(
    otherClasses,
    'w-full relative py-[120px] mt-[74px] lg:mt-[136px] flex justify-center '
  )

  return (
    <section className={miniHeroSectionClasses} data-testid="mini-hero-section">
      <Image
        imageData={backgroundDesktopImage}
        otherClasses="h-full w-full !absolute left-0 top-0 !hidden lg:!block"
      />
      <Image
        imageData={backgroundMobileImage}
        otherClasses="h-full w-full !absolute left-0 top-0  lg:!hidden"
      />
      <div className="flex flex-col gap-4 items-center max-w-[800px] relative px-4 md:px-0">
        <Heading
          type="h1"
          otherClasses="text-white font-semibold font-Exo2 text-center"
        >
          {heading}
        </Heading>
        <RichText
          richText={_rawSubText}
          otherClasses="mini_hero_section_rich_text"
        />
        <Button {...button} />
      </div>
    </section>
  )
}

export default MiniHeroSection

export const query = graphql`
  fragment MiniHeroSection on SanityMiniHeroSection {
    __typename
    identifier
    heading
    _rawSubText
    button {
      ...Button
    }
    backgroundDesktopImage {
      ...CustomImage
    }
    backgroundMobileImage {
      ...CustomImage
    }
  }
`
