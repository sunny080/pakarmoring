import * as React from 'react'

import BallisticProtectionCard from './BallisticProtectionCard'

export default {
  title: 'Components/BallisticProtectionCard',
  component: BallisticProtectionCard,
}

const Template = (args) => <BallisticProtectionCard {...args} />

export const Default = Template.bind({})
Default.args = {}
