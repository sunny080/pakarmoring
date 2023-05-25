import * as React from 'react'

import OurClientSection from './OurClientSection'
import mocks from './mocks'

export default {
  title: 'Sections/OurClientSection',
  component: OurClientSection,
}

const Template = (args) => <OurClientSection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
