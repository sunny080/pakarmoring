import React, { useState } from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import './introsection.scss'
import Icon from '../../components/Icon/Icon'
import Image from '../../components/Image/Image'

export const IntroSection = ({
  otherClasses,
  title,
  heading,
  _rawSubText,
  action,
  url,
  desktopImage,
  mobileImage,
  _rawDescribtion,
}) => {
  const introSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] w-full mx-auto px-4 lg:px-[60px] xl:px-[156px]',
    action === 'image'
      ? 'mt-[120px] mb-[64px] lg:mt-[200px] lg:mb-[120px]'
      : ' my-[64px] lg:my-[120px]'
  )

  const [toggleDesc, setToggleDesc] = useState(false)
  const toggleFunc = (elm) => {
    setToggleDesc(!elm)
  }
  return (
    <section className={introSectionClasses} data-testid="intro-section">
      <div
        className={clsx(
          'flex flex-col lg:flex-row items-center gap-10',
          action === 'image'
            ? 'flex-col-reverse lg:flex-row'
            : 'flex-col lg:flex-row'
        )}
      >
        <div className="w-full lg:w-2/4">
          <p className="text-lg leading-[26px] text-white bg-primary_green_600 mb-4 font-Exo2 font-medium w-fit px-1">
            {title}
          </p>
          <Heading
            type="h1"
            otherClasses="text-black font-Exo2 font-semibold after:block after:h-[3px] after:rounded-[2px] after:w-[70px] after:bg-primary_green_600 after:mt-4  "
          >
            {heading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="intro_section_rich_text mt-4"
          />
        </div>
        <div className="w-full lg:w-2/4">
          {action === 'video' && (
            <iframe
              width="560"
              height="315"
              src={url}
              title="YouTube video player"
              frameborder="0"
              className="w-full h-[400px] rounded-[8px]"
              allowfullscreen
            ></iframe>
          )}
          {action === 'image' && (
            <>
              <Image
                imageData={desktopImage}
                otherClasses="w-full !hidden lg:!block"
              />
              <Image imageData={mobileImage} otherClasses="lg:!hidden w-full" />
            </>
          )}
        </div>
      </div>
      <div className="flex mt-8 justify-center">
        <button
          onClick={() => toggleFunc(toggleDesc)}
          className="flex items-center gap-2 text-base font-medium font-Exo2 text-black"
        >
          See More
          <Icon
            icon="chevron-down"
            otherClasses={clsx(
              'transition duration-1000',
              toggleDesc ? 'rotate-180' : 'rotate-0'
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
    action
    title
    heading
    _rawSubText
    url
    desktopImage {
      ...CustomImage
    }
    mobileImage {
      ...CustomImage
    }
    _rawDescribtion
  }
`
