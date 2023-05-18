import React from 'react'
import clsx from 'clsx'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

export const Image = ({ imageData, otherClasses, ...props }) => {
  const imageClasses = clsx(otherClasses)

  const {
    asset: { gatsbyImageData },
    title = '',
  } = imageData

  return (
    <GatsbyImage
      {...props}
      alt={title}
      title={title}
      className={imageClasses}
      image={gatsbyImageData}
    />
  )
}

export default Image

export const query = graphql`
  fragment CustomImage on SanityCustomImage {
    asset {
      title
      gatsbyImageData(placeholder:NONE)
    }
  }
`
