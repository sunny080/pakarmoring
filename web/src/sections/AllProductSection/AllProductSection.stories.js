import * as React from 'react'

import AllProductSection from './AllProductSection'

export default {
  title: 'Sections/AllProductSection',
  component: AllProductSection,
}

const Template = (args) => <AllProductSection {...args} />

export const Default = Template.bind({})
Default.args = {}
