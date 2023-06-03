export default {
  title: 'Product Specification Object',
  name: 'productSpecificationObject',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'About',
      name: 'about',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'about',
    },
    prepare({title = 'No title', subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
}
