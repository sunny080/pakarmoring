import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading/Heading'
import RichText from '../../components/RichText/RichText'
import './ceosection.scss'

export const CeoSection = ({
  otherClasses,
  title,
  heading,
  _rawSubText,
  desktopImage,
  mobileImage,
}) => {
  const ceoSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] mx-auto w-full px-4 lg:px-[60px] xl:px-[156px] my-[60px] lg:my-[120px]'
  )

  return (
    <section className={ceoSectionClasses} data-testid="ceo-section">
      <div className="w-full py-10 lg:py-20 px-4 lg:px-10 bg-primary_green_600/10 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-[40%] w-full h-fit lg:sticky lg:top-[136px]">
          <Image
            imageData={desktopImage}
            otherClasses="w-full !hidden lg:!block"
          />
          <Image imageData={mobileImage} otherClasses="w-full lg:!hidden" />
        </div>
        <div className="lg:w-[60%] w-full">
          <p className="w-fit rounded-full border-[1px] border-primary_green_600 text-sm leading-5 font-normal text-black py-1 px-2">
            {title}
          </p>
          <Heading
            type="h2"
            otherClasses="font-semibold font-Exo2 text-black my-4"
          >
            {heading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="ceo_section_rich_text"
          />
        </div>
      </div>
    </section>
  )
}

export default CeoSection

export const query = graphql`
  fragment CeoSection on SanityCeoSection {
    __typename
    identifier
    title
    heading
    _rawSubText
    desktopImage {
      ...CustomImage
    }
    mobileImage {
      ...CustomImage
    }
  }
`
