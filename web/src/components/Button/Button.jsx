import React from 'react'
import { graphql, Link } from 'gatsby'
import clsx from 'clsx'

import './button.scss'

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
      `bg-primary_orange_600 px-10 py-3 rounded text-base leading-6 font-normal text-white font-inter hover:bg-[#cb420b] transition `,
    variant === 'secondary' &&
      `bg-white px-10 py-3 rounded text-base leading-6 font-normal text-black font-inter hover:bg-[#c7c7c7] transition `,
      variant === 'tertiary' &&
      `hover:bg-primary_orange_600 px-10 py-3 rounded text-base leading-6 font-normal text-white font-inter hover:bg-[#cb420b] transition border-[1px] border-primary_orange_600 `,
      variant === 'tertiary-border' &&
        `px-10 py-3 rounded text-base leading-6 font-normal text-white font-inter border-[1px] border-white hover:border-[0px] hover:bg-white hover:text-black transition`,
 
  )

  if (slug && !form) {
    const { current } = slug
    return (
      <Link to={`/${current}`} className={buttonClasses}>
        {label}
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
