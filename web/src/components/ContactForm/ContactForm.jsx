import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import './ContactForm.module.scss'
import Icon from '../Icon/Icon'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}

export const ContactForm = ({
  otherClasses,
  toggleCancel,
  toggleStyle,
  dropdown,
}) => {
  const contactFormClasses = clsx(
    otherClasses,
    'bg-white relative trasnition-width duration-500'
  )
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
    <div className={contactFormClasses} data-testid="contact-form">
      <div
        className={clsx(
          'transition-op duration-500',
          toggleStyle === 'Contact Us' ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b-[1px] border-b-gray_200">
          <div className="flex items-center gap-2 cursor-pointer">
            <Icon
              icon="green-navbar-phone-icon"
              iconHeight={24}
              iconWidth={24}
            />
            <a
              href="tel:1300932584"
              className="font-Work-Sans text-primary_blue_600 font-bold text-base tracking-[0.01em] "
            >
              1300-932-584
            </a>
          </div>
          <button onClick={() => toggleCancel()}>
            <Icon icon="black-cancel-icon" iconHeight={24} iconWidth={24} />
          </button>
        </div>
        <div className="pb-10 px-4 md:px-[84px] w-full mt-8">
          <Heading
            type="h3"
            otherClasses="text-center font-Work-Sans font-semibold text-primary_heading_color mb-8"
          >
            Contact Us
          </Heading>
          <form
            onSubmit={handleSubmit}
            name="Contact Us"
            method="post"
            action=""
            className={clsx('w-full mt-5 md:mt-8')}
          >
            <input type="hidden" name="form-name" value="Contact Us" />
            <p
              className="font-Work-Sans text-gray-800  text-base font-bold mb-4"
              ref={messageRef}
            ></p>

            <div className="mb-6">
              <label
                htmlFor="name"
                className="font-Work-Sans text-sm font-semibold text-gray-800 "
              >
                Name
              </label>
              <input
                name="name"
                id="name"
                required
                type="text"
                onChange={handleChange}
                className="w-full border-[1px] pl-4 font-Work-Sans border-gray_300 rounded-[2px] h-12 mt-2 focus:border-primary_blue_600 outline-offset-2 outline-[3px] outline-[#B6CFE1]"
              />
            </div>
            <div className="mb-6 flex flex-col md:flex-row gap-5 lg:gap-[21px]">
              <div className="w-full md:w-2/4">
                <label
                  htmlFor="phone"
                  className="font-Work-Sans text-sm font-semibold text-gray-800 "
                >
                  Phone Number
                </label>
                <input
                  name="phone"
                  id="phone"
                  required
                  onChange={handleChange}
                  type="text"
                  className="w-full border-[1px] pl-4 font-Work-Sans border-gray_300 rounded-[2px] h-12 mt-2 focus:border-primary_blue_600 outline-offset-2 outline-[3px] outline-[#B6CFE1]"
                />
              </div>
              <div className="w-full md:w-2/4">
                <label
                  htmlFor="email"
                  className="font-Work-Sans text-sm font-semibold text-gray-800  "
                >
                  Email Address
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  onChange={handleChange}
                  className="w-full border-[1px] pl-4 font-Work-Sans border-gray_300 rounded-[2px] h-12 mt-2 focus:border-primary_blue_600 outline-offset-2 outline-[3px] outline-[#B6CFE1]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 mb-6">
              <label
                htmlFor="option"
                className="font-Work-Sans text-sm font-semibold text-gray-800 "
              >
                What Can We Help You With?
              </label>
              <select
                id="option"
                type="text"
                onChange={handleChange}
                name="What Can We Help You With?"
                className="w-full border-[1px]  border-gray_300 flex justify-between px-4 h-12 items-center rounded-sm  text-base font-normal font-Work-Sans focus:ring-0 focus:border-primary_blue_600  focus:border-[1px] focus:outline-offset-2 focus:outline-[3px] focus:outline-[#B6CFE1]"
              >
                <option value="Select one...">Select one...</option>
                {dropdown.map(({ heading }, index) => {
                  return (
                    <option
                      key={index}
                      value={'I&#8217;m interested in ' + heading}
                    >
                      I’m interested in {heading}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="description"
                className="font-Work-Sans text-sm font-semibold text-gray-800 "
              >
                Message (optional)
              </label>
              <textarea
                type="text"
                onChange={handleChange}
                name="description"
                id="description"
                cols="30"
                rows="10"
                className="w-full border-[1px] font-Work-Sans pl-4 pt-4 border-gray_300 rounded-[2px] min-h-[136px] max-h-[136px] mt-2 focus:border-primary_blue_600 outline-offset-2 outline-[3px] outline-[#B6CFE1]"
              ></textarea>
            </div>
            <Button variant="secondary" label="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
