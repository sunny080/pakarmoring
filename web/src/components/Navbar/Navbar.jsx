import React, { useState } from 'react'
import clsx from 'clsx'
import './navbar.scss'
import { Link } from 'gatsby'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import logo from '../../images/logo.png'
import Heading from '../Heading/Heading'
import companyBgImage from '../../images/company-menu-bg-image.png'

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
      <div className="w-full max-w-[1512px] px-20 mx-auto">
        <div className="w-full flex justify-end gap-5 items-center py-2">
          <p className="flex items-center gap-2 text-white font-semibold font-Exo2">
            <Icon
              icon="white-navbar-phone-icon"
              iconHeight={19.89}
              iconWidth={19.89}
            />
            <a href="tel:03039234222">03039234222</a> |{' '}
            <a href="tel:0303 9234333">0303 9234333</a>
          </p>
          <a
            href="mailto:info@pakarmoring.com"
            className="flex items-center gap-2 text-white font-semibold font-Exo2"
          >
            <Icon
              icon="white-navbar-email-icon"
              iconHeight={19.89}
              iconWidth={19.89}
            />
            info@pakarmoring.com
          </a>
        </div>
        <div className="w-full flex items-center justify-between py-2">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="logo" className="w-[90px] h-[100px]" />
            <div className="flex flex-col gap-1">
              <Heading type="h5" otherClasses="text-white font-bold font-Exo2 ">
                PAK ARMORING (PVT) LTD.
              </Heading>
              <p className="text-sm font-normal font-Open_Sans text-white leading-5">
                ARMORED VEHICLES SPECIALIST
              </p>
            </div>
          </Link>
          <div className="flex gap-6 items-center">
            <ul>
              <li className="relative">
                <button className="text-lg font-semibold text-white font-Exo2 leading-7">
                  Company
                </button>
                <div className="absolute top-10 right-0 min-w-[750px] w-[750px] flex ">
                  <div className="w-[30%] bg-[#222222] p-5">
                    <Heading
                      type="h5"
                      otherClasses="text-white/70 font-normal w-full pb-5 border-b-[1px] border-b-white/30"
                    >
                      Company
                    </Heading>
                    <p className="mt-5 font-Open_Sans text-[13px] text-white/40 ">
                      Pak Armored Vehicle Manufacturing, a leading division of
                      INKAS® Group of Companies, which specializes in the design
                      and production of a wide range of...
                    </p>
                    <Button
                      label="Explore"
                      variant="primary"
                      otherClasses="mt-6"
                    />
                  </div>
                  <div className="relative w-[70%] flex gap-6">
                    <img
                      src={companyBgImage}
                      alt="company-frame"
                      className="absolute top-0 left-0 h-full w-full"
                    />
                    <div>
                      <Heading
                        type="h5"
                        otherClasses="mt-5 font-Open_Sans text-[13px] text-white/40 "
                      >
                        About Us
                      </Heading>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <Button label="Contact Us" variant="primary" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
