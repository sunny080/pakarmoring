import React, { useState } from 'react'
import clsx from 'clsx'
import './navbar.scss'
import { Link } from 'gatsby'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'

export const Navbar = ({ otherClasses }) => {
  const navbarClasses = clsx(
    otherClasses,
    'fixed top-0 translate-x-[-50%] left-2/4  z-20 w-full'
  )

  const [toggleHamburger, setToggleHamburger] = useState(false)
  const toggleState = (elm) => {
    setToggleHamburger(!elm)
  }

  return (
    <nav className={navbarClasses} data-testid="navbar">
      
      <div className="w-full "></div>
    </nav>
  )
}

export default Navbar
