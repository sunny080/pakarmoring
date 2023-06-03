import * as React from 'react'

import ProductHeroSection from './ProductHeroSection'
import mocks from './mocks'

export default {
  title: 'Sections/ProductHeroSection',
  component: ProductHeroSection,
}

const Template = (args) => <ProductHeroSection {...args} />

export const Default = Template.bind({})
Default.args = { ...mocks }
