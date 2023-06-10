import React from 'react'
import { graphql, Link } from 'gatsby'
import clsx from 'clsx'

import './button.scss'
import Icon from '../Icon/Icon'

export const Button = ({
  label = '',
  variant = 'primary',
  otherClasses,
  form,
  slug,
  onClick,
}) => {
  const buttonClasses = clsx(
    otherClasses,
    variant === 'primary' &&
      `bg-white px-10 py-3 rounded text-base leading-6 font-semibold text-black font-Exo2 hover:bg-[#bdbdbd] transition `,
    variant === 'secondary' &&
      `bg-primary_green_600 px-10 py-3 rounded text-base leading-6 font-semibold text-white font-Exo2 hover:bg-[#133807] transition `,
    variant === 'tertiary' &&
      `hover:bg-primary_orange_600 px-10 py-3 rounded text-base leading-6 font-normal text-white font-inter hover:bg-[#cb420b] transition border-[1px] border-primary_orange_600 `,
    variant === 'text-link' &&
      `text-primary_blue_600 font-semibold text-base leading-6 tracking-[0.01em] font-Exo2 flex items-center gap-2 group`
  )

  const withIcon = variant === 'text-link'

  if (slug && !form) {
    const { current } = slug
    return (
      <Link to={`/${current}`} className={buttonClasses}>
        {label}
        {withIcon && (
          <div className="rounded-full w-7 h-7 border-[2px] border-primary_blue_600 flex items-center justify-center relative overflow-hidden">
            <div className="relative group-hover:left-[28px]  left-[12px] transition-[3s]">
              <Icon
                icon="mini-menu-arrow-left"
                iconHeight={24}
                iconWidth={24}
              />
            </div>
            <div className="relative group-hover:left-[-12px]  left-[-28px] transition-[3s]">
              <Icon
                icon="mini-menu-arrow-left"
                iconHeight={24}
                iconWidth={24}
              />
            </div>
          </div>
        )}
      </Link>
    )
  }

  return (
    <button
      onClick={(e) => {
        onClick && onClick(form, e)
      }}
      className={buttonClasses}
      data-testid="button"
    >
      {label}
      {withIcon && (
        <div className="rounded-full w-7 h-7 border-[2px] border-primary_blue_600 flex items-center justify-center relative overflow-hidden">
          <div className="relative group-hover:left-[28px]  left-[12px] transition-[3s]">
            <Icon icon="mini-menu-arrow-left" iconHeight={24} iconWidth={24} />
          </div>
          <div className="relative group-hover:left-[-12px]  left-[-28px] transition-[3s]">
            <Icon icon="mini-menu-arrow-left" iconHeight={24} iconWidth={24} />
          </div>
        </div>
      )}
    </button>
  )
}

export default Button

export const query = graphql`
  fragment Button on SanityButton {
    label
    variant
    action
    form
    slug {
      current
    }
  }
`
