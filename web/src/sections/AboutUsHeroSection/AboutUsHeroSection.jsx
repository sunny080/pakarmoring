import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading/Heading'
import RichText from '../../components/RichText/RichText'
import './aboutusherosection.scss'
import Button from '../../components/Button/Button'

export const AboutUsHeroSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  desktopImage,
  mobileImage,
  button,
  toggleFunc,
}) => {
  const aboutUsHeroSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] mx-auto w-full px-4 lg:px-20 xl:px-[156px] flex flex-col lg:flex-row items-center gap-10 xl:gap-20 mt-[74px] lg:mt-[136px] py-10'
  )

  return (
    <section
      className={aboutUsHeroSectionClasses}
      data-testid="about-us-hero-section"
    >
      <div className="w-full lg:w-2/4">
        <Heading
          type="h1"
          otherClasses="text-black font-Exo2 font-semibold mb-4"
        >
          {mainHeading}
        </Heading>
        <RichText
          richText={_rawSubText}
          otherClasses="about_us_hero_section_rich_text mb-4"
        />
        <Button {...button} onClick={() => toggleFunc('Contact Us')} />
      </div>
      <div className="w-full lg:w-2/4">
        <Image
          imageData={desktopImage}
          imgClassName="rounded-[12px]"
          otherClasses="w-full !hidden lg:!block rounded-[12px]"
        />
        <Image
          imageData={mobileImage}
          imgClassName="rounded-[12px]"
          otherClasses="w-full lg:!hidden rounded-[12px]"
        />
      </div>
    </section>
  )
}

export default AboutUsHeroSection

export const query = graphql`
  fragment AboutUsHeroSection on SanityAboutHeroSection {
    __typename
    identifier
    mainHeading
    _rawSubText
    desktopImage {
      ...CustomImage
    }
    mobileImage {
      ...CustomImage
    }
    button {
      ...Button
    }
  }
`
