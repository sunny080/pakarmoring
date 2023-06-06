import React from 'react'
import clsx from 'clsx'
import logo from '../../images/logo.png'

import './loader.scss'
export const Loader = ({ otherClasses }) => {
  const loaderClasses = clsx(
    otherClasses,
    'h-screen w-full flex justify-center items-center'
  )

  return (
    <div className={loaderClasses} data-testid="loader">
      <img
        src={logo}
        alt="logo"
        className="w-[50px] lg:w-[60px] h-[58px] lg:h-[70px] absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]"
      />
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
