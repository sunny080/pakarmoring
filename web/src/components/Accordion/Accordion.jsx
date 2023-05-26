import React from 'react'
import clsx from 'clsx'
import { useState } from 'react'
import Icon from '../Icon/Icon'
import RichText from '../RichText/RichText'
import './accordion.scss'

export const Accordion = ({ otherClasses, questionText, _rawAnswer }) => {
  const [toggle, setToggle] = useState(false)
  const toggleFunc = (elm) => {
    setToggle(!elm)
  }

  const accordionClasses = clsx(
    otherClasses,
    'bg-green-100 px-4 rounded-[8px] transition-pb duration-500',
    toggle ? ' pb-8' : 'pb-0'
  )
  return (
    <div className={accordionClasses} data-testid="accordion">
      <div>
        <button
          onClick={() => toggleFunc(toggle)}
          className={clsx(
            'w-full flex justify-between text-left items-center cursor-pointer py-8  text-black text-xl leading-[27px] font-Exo2 font-semibold'
          )}
        >
          {questionText}
          <div
            className={clsx(
              'w-6 cursor-pointer h-6 transition duration-500',
              toggle ? 'rotate-45' : 'rotate-0'
            )}
          >
            <Icon icon="green-plus-icon" iconWidth={24} iconHeight={24} />
          </div>
        </button>
      </div>
      <div
        className={clsx(
          'overflow-hidden accordion_rich_text h-fit transition-max-h duration-500',
          toggle ? 'max-h-[4000px]' : 'max-h-[0px]'
        )}
      >
        <RichText richText={_rawAnswer} />
      </div>
    </div>
  )
}

export default Accordion
