import * as React from 'react'

import SpecialCardsIntroSection from './SpecialCardsIntroSection'
import mocks from './mocks'

export default {
  title: 'Sections/SpecialCardsIntroSection',
  component: SpecialCardsIntroSection,
}

const Template = (args) => <SpecialCardsIntroSection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
