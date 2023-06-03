export default {
  title: 'Product Slider Images Object',
  name: 'productSliderImagesObject',
  type: 'object',
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'images.title',
      media: 'images',
    },
    prepare({title = 'No Title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
