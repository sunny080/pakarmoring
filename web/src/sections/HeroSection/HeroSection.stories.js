import * as React from 'react'

import HeroSection from './HeroSection'

export default {
  title: 'Sections/HeroSection',
  component: HeroSection,
}

const Template = (args) => <HeroSection {...args} />

export const Default = Template.bind({})
Default.args = {}
