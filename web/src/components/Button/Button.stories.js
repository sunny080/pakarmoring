import * as React from 'react'

import Button from './Button'

const onClick = (e) => {
  e.preventDefault()
  alert('I have been clicked')
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary', 'text-link'],
      control: { type: 'select' },
    },
    label: {
      defaultValue: 'Learn More',
      control: { type: 'text' },
    },
  },
}

const Template = (args) => <Button {...args} />

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  variant: 'primary',
  label: 'Hire Me',
  onClick,
}

export const ButtonSecondary = Template.bind({})
ButtonSecondary.args = {
  variant: 'secondary',
  label: 'Hire Me',
  onClick,
}
export const ButtonTertiary = Template.bind({})
ButtonTertiary.args = {
  variant: 'tertiary',
  label: 'Hire Me',
  onClick,
}
export const ButtonTextLink = Template.bind({})
ButtonTextLink.args = {
  variant: 'text-link',
  label: 'Hire Me',
  onClick,
}
