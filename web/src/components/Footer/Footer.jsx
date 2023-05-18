import React from 'react'
import clsx from 'clsx'
import './footer.scss'

export const Footer = ({ otherClasses }) => {
  const footerClasses = clsx(otherClasses)

  return (
    <div className={footerClasses} data-testid="footer">
      footer
    </div>
  )
}

export default Footer
