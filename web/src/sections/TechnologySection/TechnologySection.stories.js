import * as React from 'react'

import TechnologySection from './TechnologySection'

export default {
  title: 'Sections/TechnologySection',
  component: TechnologySection,
}

const Template = (args) => <TechnologySection {...args} />

export const Default = Template.bind({})
Default.args = {}
