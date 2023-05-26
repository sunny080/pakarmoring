import * as React from 'react'

import FaqSection from './FaqSection'
import mocks from './mocks'

export default {
  title: 'Sections/FaqSection',
  component: FaqSection,
}

const Template = (args) => <FaqSection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
