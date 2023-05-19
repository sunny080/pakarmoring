import React, { useState } from 'react'
import clsx from 'clsx'
import './navbar.scss'
import { Link } from 'gatsby'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import logo from '../../images/logo.png'
import Heading from '../Heading/Heading'
import companyBgImage from '../../images/company-menu-bg-image.png'
import armoredVehiclesBgImage from '../../images/armored-vehicles-menu-suv.png'
import armoredVehiclesSedanBgImage from '../../images/armored-vehicles-menu-sedan.png'
import armoredVehiclesCashBgImage from '../../images/armored-vehicles-menu-cash.png'
import armoredVehiclesLimuBgImage from '../../images/armored-vehicles-menu-limu.png'
import armoredVehiclesTruckBgImage from '../../images/armored-vehicles-menu-truck.webp'
import armoredVehiclesSpecialBgImage from '../../images/armored-vehicles-menu-special.png'

export const Navbar = ({ otherClasses }) => {
  const navbarClasses = clsx(
    otherClasses,
    'fixed top-0 translate-x-[-50%] left-2/4  z-20 w-full'
  )

  const [toggleHamburger, setToggleHamburger] = useState(false)
  const toggleState = (elm) => {
    setToggleHamburger(!elm)
  }

  const [filteredCars, setFilteredCars] = useState('suv')
  const filterByCars = (e) => {
    setFilteredCars(e)
  }

  return (
    <nav className={navbarClasses} data-testid="navbar">
      <div className="w-full max-w-[1512px] px-4 lg:px-20 mx-auto">
        <div className="w-full lg:flex justify-end gap-5 items-center py-2 hidden ">
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
        <div className="w-full flex items-center justify-between py-2 ">
          <a href="tel:03039234222" className="lg:hidden">
            <Icon
              icon="white-navbar-phone-icon"
              iconHeight={24}
              iconWidth={24}
            />
          </a>
          <Link to="/" className="flex items-center gap-4">
            <img
              src={logo}
              alt="logo"
              className="w-[70px] lg:w-[90px] h-[78px] lg:h-[100px]"
            />
            <div className="lg:flex flex-col gap-1 hidden ">
              <Heading type="h5" otherClasses="text-white font-bold font-Exo2 ">
                PAK ARMORING (PVT) LTD.
              </Heading>
              <p className="text-sm font-normal font-Open_Sans text-white leading-5">
                ARMORED VEHICLES SPECIALIST
              </p>
            </div>
          </Link>
          <div
            className={clsx(
              'flex px-4 lg:px-0 lg:flex-row flex-col gap-6 justify-between py-10 lg:py-0 lg:justify-start items-center lg:static absolute top-[94px] lg:top-auto left-0 lg:left-auto lg:w-auto w-full bg-[#1D1D20] lg:bg-transparent main_mobile_toggle_menu',
              toggleHamburger ? 'mobile_toggle_menu_active' : ''
            )}
          >
            <ul className="w-full lg:w-auto flex lg:flex-row flex-col lg:gap-6">
              <li className="relative group w-full lg:w-auto lg:h-20 flex lg:flex-row flex-col items-center">
                <button className="w-full lg:text-center text-left text-lg font-semibold text-white font-Exo2 leading-7 py-3 border-b-[1px] lg:border-b-[0px] lg:py-0 relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:rounded-[2px] group-hover:after:w-full after:duration-300 after:transition-width after:hidden lg:after:block">
                  Company
                </button>
                <div className="group-hover:max-h-[600px] h-fit lg:bg-[#222222] duration-300 max-h-[0px] overflow-hidden transition-max-h lg:absolute top-20 left-2/4 lg:translate-x-[-50%] lg:min-w-[750px] lg:w-[750px] w-full flex ">
                  <div className="group-hover:delay-200 group-hover:duration-300 duration-[0.1s] opacity-0 group-hover:opacity-100 w-[30%] hidden lg:block p-5">
                    <Heading
                      type="h5"
                      otherClasses="text-white/70 font-normal w-full pb-5 border-b-[1px] border-b-white/30"
                    >
                      Company
                    </Heading>
                    <p className="mt-5 font-Open_Sans text-[13px] text-white/40 ">
                      Pak Armoring Vehicle Manufacturing, a leading division of
                      INKAS® Group of Companies, which specializes in the design
                      and production of a wide range of...
                    </p>
                    <Button
                      label="Explore"
                      variant="primary"
                      otherClasses="mt-6 right_bottom_class w-full"
                    />
                  </div>
                  <div className="group-hover:delay-200 group-hover:duration-300 duration-[0.1s] opacity-0 group-hover:opacity-100 relative w-full   lg:w-[70%] company_drop_down flex gap-6 lg:bg-black lg:p-6">
                    <img
                      src={companyBgImage}
                      alt="company-frame"
                      className="absolute top-0 left-0 h-full w-full hidden lg:block"
                    />
                    <div className="relative w-full ">
                      <Heading
                        type="h5"
                        otherClasses="font-Open_Sans text-white/80 pb-6 border-b-[1px] border-b-white/30 hidden lg:block"
                      >
                        About Us
                      </Heading>
                      <ul className="grid lg:grid-cols-2 lg:gap-4 lg:py-6">
                        <li className="flex items-center gap-2 text-base font-normal border-b-[1px] border-b-white lg:border-b-[0px] leading-6 py-3 lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Mission & Vision
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Message CEO
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Our Team
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Our Clients
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          PREAMBLE
                        </li>
                      </ul>
                    </div>
                    <p className="py-[13px] bg-white button_bottom_class absolute w-full -left-6 bottom-5 px-6 rounded-md hidden lg:block">
                      <strong>Leading Global</strong> Armoring Program
                    </p>
                  </div>
                </div>
              </li>
              <li className="relative group w-full lg:w-auto lg:h-20 flex lg:flex-row flex-col items-center">
                <button className="w-full lg:text-center text-left text-lg font-semibold text-white font-Exo2 leading-7 py-3 border-b-[1px] lg:border-b-[0px] lg:py-0  relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:rounded-[2px] group-hover:after:w-full after:duration-300 after:transition-width after:hidden lg:after:block">
                  Armored Vehicles
                </button>
                <div className="group-hover:max-h-[600px] h-fit lg:bg-[#222222] duration-300 max-h-[0px] overflow-hidden transition-max-h lg:absolute top-20 left-2/4 lg:translate-x-[-50%] lg:min-w-[750px] lg:w-[750px] w-full flex ">
                  <div className="group-hover:delay-200 group-hover:duration-300 duration-[0.1s] opacity-0 group-hover:opacity-100 w-[30%] hidden lg:block py-5">
                    <div className="flex flex-col gap-3">
                      <button
                        onMouseEnter={() => filterByCars('suv')}
                        className={clsx(
                          'text-base font-Exo2 text-white flex items-center justify-end gap-0 transition-pr',
                          filteredCars === 'suv'
                            ? 'pr-4 font-bold'
                            : 'pr-6 font-semibold'
                        )}
                      >
                        Armored SUV
                        <Icon
                          icon="mini-menu-arrow-left"
                          otherClasses={clsx(
                            filteredCars === 'suv' ? 'opacity-100' : 'opacity-0'
                          )}
                          iconHeight={24}
                          iconWidth={24}
                        />
                      </button>
                      <button
                        onMouseEnter={() => filterByCars('sedan')}
                        className={clsx(
                          'text-base  font-Exo2 text-white flex items-center justify-end gap-0 transition-pr',
                          filteredCars === 'sedan'
                            ? 'pr-4 font-bold'
                            : 'pr-6 font-semibold'
                        )}
                      >
                        Armored Sedan
                        <Icon
                          icon="mini-menu-arrow-left"
                          iconHeight={24}
                          iconWidth={24}
                          otherClasses={clsx(
                            filteredCars === 'sedan'
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </button>
                      <button
                        onMouseEnter={() => filterByCars('cash')}
                        className={clsx(
                          'text-base  font-Exo2 text-white flex items-center justify-end gap-0 transition-pr',
                          filteredCars === 'cash'
                            ? 'pr-4 font-bold'
                            : 'pr-6 font-semibold'
                        )}
                      >
                        Cash In Transit
                        <Icon
                          icon="mini-menu-arrow-left"
                          iconHeight={24}
                          iconWidth={24}
                          otherClasses={clsx(
                            filteredCars === 'cash'
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </button>
                      <button
                        onMouseEnter={() => filterByCars('limousines')}
                        className={clsx(
                          'text-base  font-Exo2 text-white flex items-center justify-end gap-0 transition-pr',
                          filteredCars === 'limousines'
                            ? 'pr-4 font-bold'
                            : 'pr-6 font-semibold'
                        )}
                      >
                        Limousines
                        <Icon
                          icon="mini-menu-arrow-left"
                          iconHeight={24}
                          iconWidth={24}
                          otherClasses={clsx(
                            filteredCars === 'limousines'
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </button>
                      <button
                        onMouseEnter={() => filterByCars('truck')}
                        className={clsx(
                          'text-base  font-Exo2 text-white flex items-center justify-end gap-0 transition-pr',
                          filteredCars === 'truck'
                            ? 'pr-4 font-bold'
                            : 'pr-6 font-semibold'
                        )}
                      >
                        Pickup Truck
                        <Icon
                          icon="mini-menu-arrow-left"
                          iconHeight={24}
                          iconWidth={24}
                          otherClasses={clsx(
                            filteredCars === 'truck'
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </button>
                      <button
                        onMouseEnter={() => filterByCars('special')}
                        className={clsx(
                          'text-base  font-Exo2 text-white flex items-center justify-end gap-0 transition-pr',
                          filteredCars === 'special'
                            ? 'pr-4 font-bold'
                            : 'pr-6 font-semibold'
                        )}
                      >
                        Special Purpose
                        <Icon
                          icon="mini-menu-arrow-left"
                          iconHeight={24}
                          iconWidth={24}
                          otherClasses={clsx(
                            filteredCars === 'special'
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="group-hover:delay-200 group-hover:duration-300 duration-[0.1s] opacity-0 group-hover:opacity-100 relative w-full   lg:w-[70%] company_drop_down flex gap-6 lg:bg-black lg:p-6">
                    <img
                      src={clsx(
                        filteredCars === 'suv' && armoredVehiclesBgImage,
                        filteredCars === 'sedan' && armoredVehiclesSedanBgImage,
                        filteredCars === 'cash' && armoredVehiclesCashBgImage,
                        filteredCars === 'limousines' &&
                          armoredVehiclesLimuBgImage,
                        filteredCars === 'truck' && armoredVehiclesTruckBgImage,
                        filteredCars === 'special' &&
                          armoredVehiclesSpecialBgImage
                      )}
                      alt="company-frame"
                      className="absolute top-0 left-0 h-full w-full hidden lg:block"
                    />
                    <div className="relative w-full hidden lg:block">
                      {filteredCars === 'suv' && (
                        <ul className="grid lg:grid-cols-2 lg:gap-4 lg:pb-6">
                          <li className="flex items-center gap-2 text-base font-normal border-b-[1px] border-b-white lg:border-b-[0px] leading-6 py-3 lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Suv
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Message CEO
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Team
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Clients
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            PREAMBLE
                          </li>
                        </ul>
                      )}
                      {filteredCars === 'sedan' && (
                        <ul className="grid lg:grid-cols-2 lg:gap-4 lg:pb-6">
                          <li className="flex items-center gap-2 text-base font-normal border-b-[1px] border-b-white lg:border-b-[0px] leading-6 py-3 lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Sedan
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Message CEO
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Team
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Clients
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            PREAMBLE
                          </li>
                        </ul>
                      )}
                      {filteredCars === 'cash' && (
                        <ul className="grid lg:grid-cols-2 lg:gap-4 lg:pb-6">
                          <li className="flex items-center gap-2 text-base font-normal border-b-[1px] border-b-white lg:border-b-[0px] leading-6 py-3 lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            cash
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Message CEO
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Team
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Clients
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            PREAMBLE
                          </li>
                        </ul>
                      )}
                      {filteredCars === 'limousines' && (
                        <ul className="grid lg:grid-cols-2 lg:gap-4 lg:pb-6">
                          <li className="flex items-center gap-2 text-base font-normal border-b-[1px] border-b-white lg:border-b-[0px] leading-6 py-3 lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Limousines
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Message CEO
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Team
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Clients
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            PREAMBLE
                          </li>
                        </ul>
                      )}
                      {filteredCars === 'truck' && (
                        <ul className="grid lg:grid-cols-2 lg:gap-4 lg:pb-6">
                          <li className="flex items-center gap-2 text-base font-normal border-b-[1px] border-b-white lg:border-b-[0px] leading-6 py-3 lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            truck
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Message CEO
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Team
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Clients
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            PREAMBLE
                          </li>
                        </ul>
                      )}
                      {filteredCars === 'special' && (
                        <ul className="grid lg:grid-cols-2 lg:gap-4 lg:pb-6">
                          <li className="flex items-center gap-2 text-base font-normal border-b-[1px] border-b-white lg:border-b-[0px] leading-6 py-3 lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            special
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Message CEO
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Team
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            Our Clients
                          </li>
                          <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                            <span className="">
                              <Icon
                                icon="mini-menu-arrow-left"
                                iconHeight={24}
                                iconWidth={24}
                              />
                            </span>
                            PREAMBLE
                          </li>
                        </ul>
                      )}
                    </div>
                    <div className="relative w-full lg:hidden">
                      <ul className="grid lg:grid-cols-2 lg:gap-4 lg:pb-6">
                        <li className="flex items-center gap-2 text-base font-normal border-b-[1px] border-b-white lg:border-b-[0px] leading-6 py-3 lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Armored SUV
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Armored Sedan
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Cash In Transit Vehicles
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Armored Limousines
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Armored Pickup Truck
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Special Purpose Vehicles
                        </li>
                      </ul>
                    </div>
                    <p className="py-[13px] bg-white button_bottom_class absolute w-full -left-2 bottom-5 px-6 rounded-md hidden lg:block">
                      <strong>Leading Global</strong> Armoring Program
                    </p>
                  </div>
                </div>
              </li>
              <li className="relative group w-full lg:w-auto lg:h-20 flex lg:flex-row flex-col items-center">
                <button className="w-full lg:text-center text-left text-lg font-semibold text-white font-Exo2 leading-7 py-3 border-b-[1px] lg:border-b-[0px] lg:py-0 relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:rounded-[2px] group-hover:after:w-full after:duration-300 after:transition-width after:hidden lg:after:block">
                  Technology
                </button>
                <div className="group-hover:max-h-[600px] h-fit lg:bg-[#222222] duration-300 max-h-[0px] overflow-hidden transition-max-h lg:absolute top-20 -right-20 lg:min-w-[750px] lg:w-[750px] w-full flex ">
                  <div className="group-hover:delay-200 group-hover:duration-300 duration-[0.1s] opacity-0 group-hover:opacity-100 w-[30%] hidden lg:block p-5">
                    <Heading
                      type="h5"
                      otherClasses="text-white/70 font-normal w-full pb-5 border-b-[1px] border-b-white/30"
                    >
                      Production
                    </Heading>
                    <p className="mt-5 font-Open_Sans text-[13px] text-white/40 ">
                      Pak Armoring Vehicle Manufacturing 200,000 sq. ft.
                      production facilities are located in Toronto, Canada and
                      enable the company to satisfy the safety and security
                      needs...
                    </p>
                    <Button
                      label="Explore"
                      variant="primary"
                      otherClasses="mt-6 right_bottom_class w-full"
                    />
                  </div>
                  <div className="group-hover:delay-200 group-hover:duration-300 duration-[0.1s] opacity-0 group-hover:opacity-100 relative w-full   lg:w-[70%] company_drop_down flex gap-6 lg:bg-black lg:p-6">
                    <img
                      src={companyBgImage}
                      alt="company-frame"
                      className="absolute top-0 left-0 h-full w-full hidden lg:block"
                    />
                    <div className="relative w-full ">
                      <Heading
                        type="h5"
                        otherClasses="font-Open_Sans text-white/80 pb-6 border-b-[1px] border-b-white/30 hidden lg:block"
                      >
                        About Us
                      </Heading>
                      <ul className="grid lg:grid-cols-2 lg:gap-4 lg:py-6">
                        <li className="flex items-center gap-2 text-base font-normal border-b-[1px] border-b-white lg:border-b-[0px] leading-6 py-3 lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Mission & Vision
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Message CEO
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Our Team
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          Our Clients
                        </li>
                        <li className="flex items-center gap-2 text-base font-normal leading-6 py-3 border-b-[1px] border-b-white lg:border-b-[0px] lg:py-0 font-Exo2 text-white/90 hover:text-[#9eeb9c] transition">
                          <span className="">
                            <Icon
                              icon="mini-menu-arrow-left"
                              iconHeight={24}
                              iconWidth={24}
                            />
                          </span>
                          PREAMBLE
                        </li>
                      </ul>
                    </div>
                    <p className="py-[13px] bg-white button_bottom_class absolute w-full -left-6 bottom-5 px-6 rounded-md hidden lg:block">
                      <strong>Leading Global</strong> Armoring Program
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="w-full lg:w-auto flex flex-col items-center gap-4">
              <Button
                label="Contact Us"
                variant="primary"
                otherClasses="w-full lg:w-fit "
              />
              <a
                href="mailto:info@pakarmoring.com"
                className="flex items-center gap-2 text-white font-semibold font-Exo2 lg:hidden"
              >
                <Icon
                  icon="white-navbar-email-icon"
                  iconHeight={19.89}
                  iconWidth={19.89}
                />
                info@pakarmoring.com
              </a>
            </div>
          </div>
          <button
            onClick={() => toggleState(toggleHamburger)}
            className="w-6 h-6 overflow-hidden flex flex-col justify-center items-center gap-1 lg:hidden"
          >
            <span
              className={clsx(
                'w-5 h-[2px] bg-white rounded-[2px] block duration-300 transition',
                toggleHamburger ? 'rotate-45 translate-y-[6px]' : 'rotate-0'
              )}
            ></span>
            <span
              className={clsx(
                'w-5 h-[2px] bg-white rounded-[2px] block duration-300 transition',
                toggleHamburger ? 'translate-x-6' : 'translate-x-0'
              )}
            ></span>
            <span
              className={clsx(
                'w-5 h-[2px] bg-white rounded-[2px] block duration-300 transition',
                toggleHamburger ? '-rotate-45 -translate-y-[6px]' : ''
              )}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
