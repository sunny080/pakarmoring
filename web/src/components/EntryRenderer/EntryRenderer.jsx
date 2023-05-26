import React from 'react'
import HeroSection from '../../sections/HeroSection/HeroSection'
import SpecialCardsIntroSection from '../../sections/SpecialCardsIntroSection/SpecialCardsIntroSection'
import IntroSection from '../../sections/IntroSection/IntroSection'
import FeaturedCarsSection from '../../sections/FeaturedCarsSection/FeaturedCarsSection'
import OurClientSection from '../../sections/OurClientSection/OurClientSection'
import MiniHeroSection from '../../sections/MiniHeroSection/MiniHeroSection'
import FaqSection from '../../sections/FaqSection/FaqSection'

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
        return <IntroSection key={__typename} {...sectionData} {...props} />
      case 'SanityFeaturedCarsSection':
        return (
          <FeaturedCarsSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityOurClientSection':
        return <OurClientSection key={__typename} {...sectionData} {...props} />
      case 'SanityMiniHeroSection':
        return <MiniHeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityFaqSections':
        return <FaqSection key={__typename} {...sectionData} {...props} />

      default:
        return null
    }
  })
}

export default EntryRenderer
