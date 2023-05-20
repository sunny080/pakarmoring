import React from 'react'
import HeroSection from '../../sections/HeroSection/HeroSection'

const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      case 'SanityHeroSection':
        return <HeroSection key={__typename} {...sectionData} {...props} />

      default:
        return null
    }
  })
}

export default EntryRenderer
