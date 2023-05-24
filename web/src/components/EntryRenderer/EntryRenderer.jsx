import React from 'react'
import HeroSection from '../../sections/HeroSection/HeroSection'
import SpecialCardsIntroSection from '../../sections/SpecialCardsIntroSection/SpecialCardsIntroSection'
import IntroSection from '../../sections/IntroSection/IntroSection'

const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      case 'SanityHeroSection':
        return <HeroSection key={__typename} {...sectionData} {...props} />
      case 'SanitySpecialCardsIntroSection':
        return (
          <SpecialCardsIntroSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityIntroSection':
        return (
          <IntroSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )

      default:
        return null
    }
  })
}

export default EntryRenderer
