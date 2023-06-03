import * as React from 'react'

import ProductSlider from './ProductSlider'

export default {
  title: 'Components/ProductSlider',
  component: ProductSlider,
}

const Template = (args) => <ProductSlider {...args} />

export const Default = Template.bind({})
Default.args = {}
