import * as React from 'react'

import FeaturedCarsSection from './FeaturedCarsSection'

export default {
  title: 'Sections/FeaturedCarsSection',
  component: FeaturedCarsSection,
}

const Template = (args) => <FeaturedCarsSection {...args} />

export const Default = Template.bind({})
Default.args = {}
