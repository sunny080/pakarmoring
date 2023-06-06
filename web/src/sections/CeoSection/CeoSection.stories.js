import * as React from 'react'

import CeoSection from './CeoSection'
import mocks from './mocks'

export default {
  title: 'Sections/CeoSection',
  component: CeoSection,
}

const Template = (args) => <CeoSection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
