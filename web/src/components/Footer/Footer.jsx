import React from 'react'
import clsx from 'clsx'
import './footer.scss'
import footerImage from '../../images/footer-map-image.png'
import Heading from '../Heading/Heading'
import logo from '../../images/logo.png'
import twitterLogo from '../../images/portfolio-icons/twitter-white-icon.svg'
import Icon from '../Icon/Icon'
import { Link } from 'gatsby'
import { useRef } from 'react'
import { useState } from 'react'

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}
export const Footer = ({ otherClasses }) => {
  const footerClasses = clsx(otherClasses, 'w-full')

  const messageRef = useRef('')
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
      console.log(response)
      const { status } = response
      if (status === 200) {
        messageRef.current.innerHTML =
          'Thank you for for submission! We will get in touch with you shortly.'
        setState({})
        form.reset()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={footerClasses} data-testid="footer">
      <div className="w-full py-10 bg-black ">
        <div className="max-w-[1512px] mx-auto px-4 lg:px-20 xl:px-[156px] grid sm:grid-cols-2 xl:grid-cols-4 gap-10">
          <div className="w-full flex flex-col gap-4 ">
            <Heading
              type="h4"
              otherClasses="text-white relative w-fit font-Exo2 font-medium after:block after:w-full after:h-[2px] after:mt-2 after:bg-primary_green_600 "
            >
              Our Mission
            </Heading>
            <p className="text-sm font-normal font-Open_Sans text-white leading-5">
              PakArmoring® aims to over-deliver with every job by offering
              stellar customer service, industry-leading quality and
              performance, quick turn-around and knowledgeable recommendations
              when it comes to buying an armored vehicle.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 ">
            <Heading
              type="h4"
              otherClasses="text-white relative w-fit font-Exo2 font-medium after:block after:w-full after:h-[2px] after:mt-2 after:bg-primary_green_600 "
            >
              NEWSLETTER
            </Heading>
            <p className="text-sm font-normal font-Open_Sans text-white leading-5">
              By subscribing to our company newsletter you will always be
              up-to-date on our latest promotions, deals and vehicle inventory!
            </p>
            <form
              onSubmit={handleSubmit}
              name="news-study"
              method="post"
              action=""
              className="flex flex-row"
            >
              <input
                name="email"
                id="email"
                type="email"
                onChange={handleChange}
                placeholder="Enter Email"
                className="rounded-tl-[4px] font-Open_Sans text-sm pl-2 font-medium w-full rounded-bl-[4px] outline-0"
              />
              <button
                type="submit"
                className="bg-white p-2 rounded-tr-[4px] rounded-br-[4px] text-sm leading-5 font-semibold text-black font-Exo2 hover:bg-[#bdbdbd] transition"
              >
                Submit
              </button>
            </form>
            <p
              className="font-Work-Sans text-white  text-base font-bold mb-4"
              ref={messageRef}
            ></p>
          </div>
          <div className="w-full flex flex-col gap-4 ">
            <Heading
              type="h4"
              otherClasses="text-white relative w-fit font-Exo2 font-medium after:block after:w-full after:h-[2px] after:mt-2 after:bg-primary_green_600 "
            >
              Contact Us
            </Heading>
            <p className="text-sm font-normal font-Open_Sans text-white leading-5 items-center flex gap-2">
              <span className="block min-w-[24px] min-h-[24px]">
                <Icon icon="map-pin" iconHeight={18} iconWidth={18} />
              </span>
              Plot No. 2/2a, Survey 86, Sector 24, Main Korangi Creek Road,
              Karachi.
            </p>
            <p className="text-sm font-normal font-Open_Sans text-white leading-5 items-center flex gap-2">
              <span className="block min-w-[24px] min-h-[24px]">
                <Icon
                  icon="white-navbar-phone-icon"
                  iconHeight={18}
                  iconWidth={18}
                />
              </span>
              <a href="tel:03039234222">03039234222</a> |{' '}
              <a href="tel:03039234333">03039234333</a>
            </p>
            <p className="text-sm font-normal font-Open_Sans text-white leading-5 items-center flex gap-2">
              <span className="block min-w-[24px] min-h-[24px]">
                <Icon
                  icon="white-navbar-email-icon"
                  iconHeight={19.89}
                  iconWidth={19.89}
                />
              </span>
              <a href="mailto:info@pakarmoning.com">info@pakarmoning.com</a>
            </p>
          </div>
          <div className="w-full">
            <img src={footerImage} alt="map-frame" className="w-full" />
          </div>
        </div>
      </div>
      <div className="bg-black/90 py-10">
        <div className="max-w-[1512px] mx-auto w-full px-4 lg:px-[20px] gap-4 lg:gap-0 xl:px-[156px] flex lg:justify-between items-center flex-col  lg:flex-row">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <Link to="/" className="flex items-center gap-4">
              <img
                src={logo}
                alt="logo"
                className="w-[50px] lg:w-[60px] h-[58px] lg:h-[70px]"
              />
              <div className="lg:flex flex-col gap-1 hidden ">
                <Heading
                  type="h5"
                  otherClasses="text-white font-bold font-Exo2 "
                >
                  PAK ARMORING (PVT) LTD.
                </Heading>
                <p className="text-sm font-normal font-Open_Sans text-white leading-5">
                  ARMORED VEHICLES SPECIALIST
                </p>
              </div>
            </Link>
            <p className="text-xs font-medium text-white font-Exo2 leading-4">
              © PakArmoring Armored Vehicle Manufacturing. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center lg:items-end">
            <div className="flex gap-2 ">
              <Icon icon="facebook-white-icon" iconHeight={24} iconWidth={24} />
              <img src={twitterLogo} alt="twitter-icon" className="w-6 h-6" />
              {/* <Icon icon="twitter-white-icon" iconHeight={24} iconWidth={24} /> */}
              <Icon icon="linkedin_white-icon" iconHeight={24} iconWidth={24} />
              <Icon icon="whatsapp-white-icon" iconHeight={24} iconWidth={24} />
            </div>
            <ul className="flex gap-4">
              <li className="text-sm leading-5 text-white/80 hover:text-white font-medium font-Exo2">
                Current Stock
              </li>
              <li className="text-sm leading-5 text-white/80 hover:text-white font-medium font-Exo2">
                Armored Vehicles
              </li>
              <li className="text-sm leading-5 text-white/80 hover:text-white font-medium font-Exo2">
                FAQs
              </li>
              <li className="text-sm leading-5 text-white/80 hover:text-white font-medium font-Exo2">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
