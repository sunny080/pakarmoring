import clsx from 'clsx'
import React from 'react'

export const Icon = ({
  icon,
  iconColor,
  iconWidth = 26,
  iconHeight = 26,
  otherClasses,
  ...props
}) => {
  return (
    <svg
      data-testid="icon"
      className={clsx(otherClasses,"")}
      style={iconColor}
      width={iconWidth}
      height={iconHeight}
      viewBox={`0 0 ${iconWidth} ${iconHeight}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <use href={`/sprite.svg#${icon}`} xlinkHref={`/sprite.svg#${icon}`}></use>
    </svg>
  )
}

export default Icon
