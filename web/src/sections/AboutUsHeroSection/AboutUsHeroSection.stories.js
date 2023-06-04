import * as React from 'react'

import AboutUsHeroSection from './AboutUsHeroSection'
import mocks from './mocks'

export default {
  title: 'Sections/AboutUsHeroSection',
  component: AboutUsHeroSection,
}

const Template = (args) => <AboutUsHeroSection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
