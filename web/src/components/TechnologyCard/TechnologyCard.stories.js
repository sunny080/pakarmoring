import * as React from 'react'

import TechnologyCard from './TechnologyCard'

export default {
  title: 'Components/TechnologyCard',
  component: TechnologyCard,
}

const Template = (args) => <TechnologyCard {...args} />

export const Default = Template.bind({})
Default.args = {}
