import React from 'react'
import clsx from 'clsx'
import './ContactForm.module.scss'
import Icon from '../Icon/Icon'


export const ContactForm = ({
  otherClasses
}) => {

  const contactFormClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={contactFormClasses} data-testid='contact-form'>
    
    </div>
  )
}

export default ContactForm
