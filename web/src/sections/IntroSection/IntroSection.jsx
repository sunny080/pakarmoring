import React, { useState } from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import './introsection.scss'
import Icon from '../../components/Icon/Icon'

export const IntroSection = ({
  otherClasses,
  title,
  heading,
  _rawSubText,
  url,
  _rawDescribtion,
}) => {
  const introSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] w-full mx-auto px-4 lg:px-[60px] xl:px-[156px] my-[64px] lg:my-[120px]'
  )

  const [toggleDesc, setToggleDesc] = useState(false)
  const toggleFunc = (elm) => {
    setToggleDesc(!elm)
  }
  return (
    <section className={introSectionClasses} data-testid="intro-section">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-2/4">
          <p className="text-lg leading-[26px] text-white bg-primary_green_600 mb-4 font-Exo2 font-medium w-fit px-1">
            {title}
          </p>
          <Heading
            type="h1"
            otherClasses="text-black font-Exo2 font-normal after:block after:h-[3px] after:rounded-[2px] after:w-[70px] after:bg-primary_green_600 after:mt-4  "
          >
            {heading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="intro_section_rich_text mt-4"
          />
        </div>
        <div className="w-full lg:w-2/4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W1ixcDWa6NQ"
            title="YouTube video player"
            frameborder="0"
            className="w-full h-[400px] rounded-[8px]"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="flex mt-8 justify-center">
        <button
          onClick={() => toggleFunc(toggleDesc)}
          className="flex items-center gap-2 text-base font-medium font-Exo2 text-black"
        >
          Learn More About Us
          <Icon
            icon="button-arrow-left"
            otherClasses={clsx(
              'transition duration-1000',
              toggleDesc ? 'rotate-90' : '-rotate-90'
            )}
            iconHeight={18}
            iconWidth={18}
          />
        </button>
      </div>
      <div
        className={clsx(
          'overflow-hidden h-fit transition-max-h  duration-1000',
          toggleDesc ? 'max-h-[2000px]' : 'max-h-[0px]'
        )}
      >
        <RichText
          richText={_rawDescribtion}
          otherClasses="intro_section_rich_text mt-4"
        />
      </div>
    </section>
  )
}

export default IntroSection

export const query = graphql`
  fragment IntroSection on SanityIntroSection {
    __typename
    identifier
    title
    heading
    _rawSubText
    url
    _rawDescribtion
  }
`
