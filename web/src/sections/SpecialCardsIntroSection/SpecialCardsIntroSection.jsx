import React from 'react'
import clsx from 'clsx'

export const SpecialCardsIntroSection = ({ otherClasses }) => {
  const specialCardsIntroSectionClasses = clsx(otherClasses, 'w-full py-10')

  return (
    <section
      className={specialCardsIntroSectionClasses}
      data-testid="special-cards-intro-section"
    >
      <div className="grid grid-cols-5 gap-10 "></div>
    </section>
  )
}

export default SpecialCardsIntroSection
