import * as React from 'react'

import OurMissionSection from './OurMissionSection'
import mocks from './mocks'

export default {
  title: 'Sections/OurMissionSection',
  component: OurMissionSection,
}

const Template = (args) => <OurMissionSection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
