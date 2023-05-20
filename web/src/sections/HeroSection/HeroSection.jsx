import React from 'react'
import clsx from 'clsx'

export const HeroSection = ({ otherClasses }) => {
  const heroSectionClasses = clsx(otherClasses, 'mt-[94px] lg:mt-[156px]')

  return (
    <section className={heroSectionClasses} data-testid="hero-section">
      {' '}
    </section>
  )
}

export default HeroSection
