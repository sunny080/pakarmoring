import * as React from 'react'

import IntroSection from './IntroSection'
import mocks from './mocks'

export default {
  title: 'Sections/IntroSection',
  component: IntroSection,
}

const Template = (args) => <IntroSection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
